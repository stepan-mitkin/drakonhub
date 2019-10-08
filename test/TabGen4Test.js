QUnit.module( "TabGen4" );

function isArray(obj) {
	return Object.prototype.toString.call(obj) === "[object Array]"
}

function copyDeep(obj) {
	if (typeof obj == "number"
		|| typeof obj == "boolean"
		|| typeof obj == "string"
		|| obj === null) {
		return obj
	} else if (typeof obj == "object") {
		if (isArray(obj)) {
			return obj.slice(0)
		} else {
			var newObj = {}
			for (var key in obj) {
				var value = obj[key]
				if (typeof value != "undefined" && typeof value != "function") {
					var copy = copyDeep(value)
					newObj[key] = copy
				}				
			}
			return newObj
		}
	}
	throw Error("Unknown object type: " + obj)
}

function compareDeep(assert, left, right) {
	
	var leftS = JSON.stringify(left)
	var rightS = JSON.stringify(right)
	assert.equal(leftS, rightS)
}

function testAction(assert, store, action, expected) {	
	var undo = store.buildUndo(action)[0]
	var before = copyDeep(store.getState())
	store.dispatch(action)
	var after = copyDeep(store.getState())
	assert.deepEqual(after, expected)
	store.dispatch(undo)
	var after2 = copyDeep(store.getState())
	assert.deepEqual(after2, before)
}

function createItems() {
	var store = new TabGen4()
	store.createTable("items")
	return store
}


QUnit.test("insert object", function(assert) {
	var store = createItems()
	var action = {
		table: "items",
		op: "insert",
		id: "abc",
		values: {
			name: "foo",
			price: 100,
			action: function() { return this.price * 3 }
		}
	}
	
	store.dispatch(action)
	var row = store.get("items", "abc")
	var actual = row.action()
	assert.equal(actual, 300)
})

QUnit.test("insert", function(assert) {
	var store = createItems()
	var action = {
		table: "items",
		op: "insert",
		id: "abc",
		values: {
			name: "foo",
			price: 100,
			cool: true,
			days: [1, 2, 3],
			sides: {up:true, right:true}
		}
	}
	var expected = {
		items: {
			abc: {
				id: "abc",
				name: "foo",
				price: 100,
				cool: true,
				days: [1, 2, 3],
				sides: {up:true, right:true}				
			}
		}
	}
	testAction(assert, store, action, expected)
})

QUnit.test("undo set simple ptr", function(assert) {
	var store = new TabGen4()
	store.createTable("nodes")
	store.createTable("edges")
	store.createLink("edges", "head", "nodes", "right", "simple")
	store.createLink("edges", "tail", "nodes", "left", "simple")
	
	var n1 = store.insert("nodes", null, {name:"n1"})
	var n2 = store.insert("nodes", null, {name:"n2"})
	var n22 = store.insert("nodes", null, {name:"n22"})
	var e1 = store.insert("edges", null, {name:"e1", head:n1.id, tail:n2.id})
	
	var op = {
		op: "update",
		table: "edges",
		id: e1.id,
		values: {tail:n22.id}
	}
	var undo = store.buildUndo(op)[0]
	store.dispatch(op)
	
	assert.equal(n2.left, null)
	assert.equal(n22.left, e1)
	assert.equal(e1.tail, n22)
	
	store.dispatch(undo)
	
	assert.equal(n2.left, e1)
	assert.equal(n22.left, null)
	assert.equal(e1.tail, n2)	
})


QUnit.test("insert simple ptr", function(assert) {
	var store = new TabGen4()
	store.createTable("nodes")
	store.createLink("nodes", "left", "nodes", "parent", "simple")
	store.createLink("nodes", "right", "nodes", "parent", "simple")
	
	var left = store.insert("nodes", null, {name:"left"})
	var right = store.insert("nodes", null, {name:"right"})
	var top = store.insert("nodes", null, {name: "top", left:left.id, right:right.id})
	
	assert.equal(left.parent, top)
	assert.equal(right.parent, top)
	
	assert.equal(top.left, left)
	assert.equal(top.right, right)
	
	var left2 = store.insert("nodes", null, {name:"left2"})
	
	
	store.set("nodes", top.id, "left", left2.id)
	
	assert.equal(left2.parent, top)	
	assert.equal(top.left, left2)

	assert.equal(left.parent, null)		
})

QUnit.test("remove simple ptr", function(assert) {
	var store = new TabGen4()
	store.createTable("nodes")
	store.createLink("nodes", "left", "nodes", "parent", "simple")
	store.createLink("nodes", "right", "nodes", "parent", "simple")
	
	var left = store.insert("nodes", null, {name:"left"})
	var right = store.insert("nodes", null, {name:"right"})
	var top = store.insert("nodes", null, {name: "top", left:left.id, right:right.id})
	
	store.remove("nodes", top.id)
	
	assert.equal(left.parent, null)
	assert.equal(right.parent, null)
})

QUnit.test("remove simple", function(assert) {
	var store = new TabGen4()
	store.createTable("nodes")
	store.createLink("nodes", "left", "nodes", "parent", "simple")
	store.createLink("nodes", "right", "nodes", "parent", "simple")
	
	var left = store.insert("nodes", null, {name:"left"})
	var right = store.insert("nodes", null, {name:"right"})
	var top = store.insert("nodes", null, {name: "top", left:left.id, right:right.id})
		
	assert.throws(function() {
			store.remove("nodes", left.id)
		})
})

QUnit.test("insert list ptr", function(assert) {
	var store = new TabGen4()
	store.createTable("lines")
	store.createTable("orders")
	store.createLink("lines", "order", "orders", "lines", "list")
	var ord = store.insert("orders", null, {name:"X1"})
	assert.equal(ord.lines.length, 0)
	var line1 = store.insert("lines", null, {good: "g1", volume:10, order:ord.id})
	var line2 = store.insert("lines", null, {good: "g2", volume:20, order:ord.id})
	var line3 = store.insert("lines", null, {good: "g3", volume:30, order:ord.id})
	var line4 = store.insert("lines", null, {good: "g4", volume:40})
	var line5 = store.insert("lines", null, {good: "g5", volume:50, order:[ord.id, 2]})
	
	assert.equal(ord.lines[0], line1)
	assert.equal(line1.order, ord)
	assert.equal(ord.lines[1], line2)
	assert.equal(line2.order, ord)
	assert.equal(ord.lines[2], line5)
	assert.equal(line3.order, ord)
	assert.equal(ord.lines[3], line3)
	assert.equal(line5.order, ord)	
	assert.equal(ord.lines.length, 4)
})

QUnit.test("undo remove list", function(assert) {
	var store = new TabGen4("funny")
	
	assert.equal(window.gdata.funny, store)
	
	store.createTable("lines")
	store.createTable("orders")
	store.createLink("lines", "order", "orders", "lines", "list")
	var ord = store.insert("orders", null, {name:"X1"})
	var line1 = store.insert("lines", null, {good: "g1", volume:10, order:ord.id})
	var line2 = store.insert("lines", null, {good: "g2", volume:20, order:ord.id})
	
	
	var op = {
		op: "remove",
		table: "orders",
		id: ord.id
	}
	
	var undo = store.buildUndo(op)
	store.dispatch(op)
	
	assert.equal(line1.order, null)
	assert.equal(line2.order, null)
	
	for (var i in undo) {
		var command = undo[i]
		store.dispatch(command)
	}
	
	var ord_2 = store.get("orders", ord.id)
	
	assert.equal(ord_2.lines.length, 2)
	assert.equal(ord_2.lines[0], line1)
	assert.equal(ord_2.lines[1], line2)
	assert.equal(line1.order, ord_2)
	assert.equal(line2.order, ord_2)			
})

QUnit.test("undo remove list ptr", function(assert) {
	var store = new TabGen4()
	store.createTable("lines")
	store.createTable("orders")
	store.createLink("lines", "order", "orders", "lines", "list")
	var ord = store.insert("orders", null, {name:"X1"})
	var line1 = store.insert("lines", null, {good: "g1", volume:10, order:ord.id})
	var line2 = store.insert("lines", null, {good: "g2", volume:20, order:ord.id})
	
	
	var op = {
		op: "remove",
		table: "lines",
		id: line1.id
	}
	
	var undo = store.buildUndo(op)[0]
	store.dispatch(op)
	
	assert.equal(ord.lines.length, 1)
	assert.equal(ord.lines[0], line2)
	
	store.dispatch(undo)
	
	var line1_2 = store.get("lines", line1.id)
	
	assert.equal(ord.lines.length, 2)
	assert.equal(ord.lines[0], line1_2)
	assert.equal(ord.lines[1], line2)
			
})

QUnit.test("undo set list ptr", function(assert) {
	var store = new TabGen4()
	store.createTable("lines")
	store.createTable("orders")
	store.createLink("lines", "order", "orders", "lines", "list")
	var ord = store.insert("orders", null, {name:"X1"})
	var ord2 = store.insert("orders", null, {name:"X2"})
	var line1 = store.insert("lines", null, {good: "g1", volume:10, order:ord.id})
	var line2 = store.insert("lines", null, {good: "g2", volume:20, order:ord.id})
	
	var op = {
		op: "update",
		table: "lines",
		id: line1.id,
		values: {order:ord2.id}
	}
	
	var undo = store.buildUndo(op)[0]
	store.dispatch(op)
	
	assert.equal(ord2.lines.length, 1)
	assert.equal(ord2.lines[0], line1)
	assert.equal(ord.lines.length, 1)
	assert.equal(ord.lines[0], line2)
	
	store.dispatch(undo)
	
	assert.equal(ord2.lines.length, 0)
	assert.equal(ord.lines.length, 2)
	assert.equal(ord.lines[0], line1)
	assert.equal(ord.lines[1], line2)		
})

QUnit.test("update list ptr", function(assert) {
	var store = new TabGen4()
	store.createTable("lines")
	store.createTable("orders")
	store.createLink("lines", "order", "orders", "lines", "list")
	var ord1 = store.insert("orders", null, {name:"X1"})
	var ord2 = store.insert("orders", null, {name:"X2"})
	var line1 = store.insert("lines", null, {good: "g1", volume:10, order:ord1.id})
	var line2 = store.insert("lines", null, {good: "g2", volume:20, order:ord1.id})
	var line3 = store.insert("lines", null, {good: "g3", volume:30, order:ord2.id})
	var line4 = store.insert("lines", null, {good: "g4", volume:40, order:ord2.id})
	
	store.set("lines", line2.id, "order", ord2.id)	
	
	assert.equal(ord1.lines[0], line1)
	assert.equal(line1.order, ord1)
	
	assert.equal(ord2.lines[2], line2)
	assert.equal(line2.order, ord2)
	
	assert.equal(ord2.lines[0], line3)
	assert.equal(line3.order, ord2)
	assert.equal(ord2.lines[1], line4)
	assert.equal(line4.order, ord2)	
	
	assert.equal(ord1.lines.length, 1)	
	assert.equal(ord2.lines.length, 3)
})

QUnit.test("insert map ptr", function(assert) {
	var store = new TabGen4()
	store.createTable("lines")
	store.createTable("orders")
	store.createLink("lines", "order", "orders", "lines", "map")
	var ord = store.insert("orders", null, {name:"X1"})
	assert.equal(Object.keys(ord.lines).length, 0)
	
	var line1 = store.insert("lines", null, {good: "g1", volume:10, order:ord.id})
	var line2 = store.insert("lines", null, {good: "g2", volume:20, order:ord.id})
	var line3 = store.insert("lines", null, {good: "g3", volume:30, order:ord.id})
	var line4 = store.insert("lines", null, {good: "g4", volume:40})	
	
	assert.equal(ord.lines[line1.id], line1)
	assert.equal(line1.order, ord)
	assert.equal(ord.lines[line2.id], line2)
	assert.equal(line2.order, ord)
	assert.equal(ord.lines[line3.id], line3)
	assert.equal(line3.order, ord)
})

QUnit.test("update map ptr", function(assert) {
	var store = new TabGen4()
	store.createTable("lines")
	store.createTable("orders")
	store.createLink("lines", "order", "orders", "lines", "map")
	var ord1 = store.insert("orders", null, {name:"X1"})
	var ord2 = store.insert("orders", null, {name:"X2"})
	var line1 = store.insert("lines", null, {good: "g1", volume:10, order:ord1.id})
	var line2 = store.insert("lines", null, {good: "g2", volume:20, order:ord1.id})
	var line3 = store.insert("lines", null, {good: "g3", volume:30, order:ord2.id})
	var line4 = store.insert("lines", null, {good: "g4", volume:40, order:ord2.id})
	
	store.set("lines", line2.id, "order", ord2.id)	
	
	assert.equal(ord1.lines[line1.id], line1)
	assert.equal(line1.order, ord1)
	
	assert.equal(ord1.lines[line2.id], undefined)
	
	assert.equal(ord2.lines[line2.id], line2)
	assert.equal(line2.order, ord2)
	
	assert.equal(ord2.lines[line3.id], line3)
	assert.equal(line3.order, ord2)
	assert.equal(ord2.lines[line4.id], line4)
	assert.equal(line4.order, ord2)	
})

QUnit.test("remove", function(assert) {
	var store = createItems()
	var action = {
		table: "items",
		op: "insert",
		id: "abc",
		values: {
			name: "foo",
			price: 100,
			cool: true,
			days: [1, 2, 3],
			sides: {up:true, right:true}
		}
	}
	var expected = {
		items: {}
	}
	store.dispatch(action)
	var action2 = {
		table: "items",
		op: "remove",
		id: "abc"
	}
	testAction(assert, store, action2, expected)
});

QUnit.test("remove list ptr", function(assert) {
	var store = new TabGen4()
	store.createTable("lines")
	store.createTable("orders")
	store.createLink("lines", "order", "orders", "lines", "list")
	var ord = store.insert("orders", null, {name:"X1"})
	var line1 = store.insert("lines", null, {good: "g1", volume:10, order:ord.id})
	var line2 = store.insert("lines", null, {good: "g2", volume:20, order:ord.id})
	var line3 = store.insert("lines", null, {good: "g3", volume:30, order:ord.id})
	
	store.remove("lines", line2.id)
	
	assert.equal(ord.lines[0], line1)	
	assert.equal(ord.lines[1], line3)
	assert.equal(ord.lines.length, 2)
})

QUnit.test("remove map ptr", function(assert) {
	var store = new TabGen4()
	store.createTable("lines")
	store.createTable("orders")
	store.createLink("lines", "order", "orders", "lines", "map")
	var ord = store.insert("orders", null, {name:"X1"})
	var line1 = store.insert("lines", null, {good: "g1", volume:10, order:ord.id})
	var line2 = store.insert("lines", null, {good: "g2", volume:20, order:ord.id})
	var line3 = store.insert("lines", null, {good: "g3", volume:30, order:ord.id})
	
	store.remove("lines", line2.id)
	
	assert.equal(ord.lines[line1.id], line1)	
	assert.equal(ord.lines[line2.id], undefined)
	assert.equal(ord.lines[line3.id], line3)	
})

QUnit.test("remove list", function(assert) {
	var store = new TabGen4()
	store.createTable("lines")
	store.createTable("orders")
	store.createLink("lines", "order", "orders", "lines", "list")
	var ord = store.insert("orders", null, {name:"X1"})
	var line1 = store.insert("lines", null, {good: "g1", volume:10, order:ord.id})
	var line2 = store.insert("lines", null, {good: "g2", volume:20, order:ord.id})
	var line3 = store.insert("lines", null, {good: "g3", volume:30, order:ord.id})
	
	store.remove("orders", ord.id)
	
	assert.equal(line1.order, null)
	assert.equal(line2.order, null)
	assert.equal(line3.order, null)
})

QUnit.test("remove map", function(assert) {
	var store = new TabGen4()
	store.createTable("lines")
	store.createTable("orders")
	store.createLink("lines", "order", "orders", "lines", "map")
	var ord = store.insert("orders", null, {name:"X1"})
	var line1 = store.insert("lines", null, {good: "g1", volume:10, order:ord.id})
	var line2 = store.insert("lines", null, {good: "g2", volume:20, order:ord.id})
	var line3 = store.insert("lines", null, {good: "g3", volume:30, order:ord.id})
	
	store.remove("orders", ord.id)
	
	assert.equal(line1.order, null)
	assert.equal(line2.order, null)
	assert.equal(line3.order, null)
})

QUnit.test("update", function(assert) {
	var store = createItems()
	var action = {
		table: "items",
		op: "insert",
		id: "abc",
		values: {
			name: "foo",
			price: 100,
			cool: true,
			days: [1, 2, 3],
			sides: {up:true, right:true}
		}
	}
	var expected = {
		items: {
			abc: {
				id: "abc",
				name: "foo2",
				price: 200,
				cool: false,
				place: "here",
				days: [1, 2, 3],
				sides: {up:true, right:true}
			}
		}
	}
	store.dispatch(action)
	var action2 = {
		table: "items",
		op: "update",
		id: "abc",
		values: {
			name: "foo2",
			price: 200,
			cool: false,
			place: "here"
		}
	}
	testAction(assert, store, action2, expected)
});

QUnit.test("mapAdd", function(assert) {
	var store = createItems()
	var action = {
		table: "items",
		op: "insert",
		id: "abc",
		values: {
			sides: {up:true, right:true}
		}
	}
	var expected = {
		items: {
			abc: {
				id: "abc",
				sides: {up:true, right:true, left:10}
			}
		}
	}
	store.dispatch(action)
	var action2 = {
		table: "items",
		op: "madd",
		id: "abc",
		field: "sides",
		key: "left",
		value: 10
	}
	testAction(assert, store, action2, expected)
});

QUnit.test("mapRemove", function(assert) {
	var store = createItems()
	var action = {
		table: "items",
		op: "insert",
		id: "abc",
		values: {
			sides: {up:true, right:true}
		}
	}
	var expected = {
		items: {
			abc: {
				id: "abc",
				sides: {up:true}
			}
		}
	}
	store.dispatch(action)
	var action2 = {
		table: "items",
		op: "mremove",
		id: "abc",
		field: "sides",
		key: "right"
	}
	testAction(assert, store, action2, expected)
});

QUnit.test("arrayPush", function(assert) {
	var store = createItems()
	var action = {
		table: "items",
		op: "insert",
		id: "abc",
		values: {
			days: [1, 2, 3]
		}
	}
	var expected = {
		items: {
			abc: {
				id: "abc",
				days: [1, 2, 3, 4]
			}
		}
	}
	store.dispatch(action)
	var action2 = {
		table: "items",
		op: "push",
		id: "abc",
		field: "days",
		value: 4
	}
	testAction(assert, store, action2, expected)
});

QUnit.test("arrayPop", function(assert) {
	var store = createItems()
	var action = {
		table: "items",
		op: "insert",
		id: "abc",
		values: {
			days: [1, 2, 3]
		}
	}
	var expected = {
		items: {
			abc: {
				id: "abc",
				days: [1, 2]
			}
		}
	}
	store.dispatch(action)
	var action2 = {
		table: "items",
		op: "pop",
		id: "abc",
		field: "days"
	}
	testAction(assert, store, action2, expected)
});

QUnit.test("arrayAdd", function(assert) {
	var store = createItems()
	var action = {
		table: "items",
		op: "insert",
		id: "abc",
		values: {
			days: [1, 2, 3]
		}
	}
	var expected = {
		items: {
			abc: {
				id: "abc",
				days: [1, 2, 4, 3]
			}
		}
	}
	store.dispatch(action)
	var action2 = {
		table: "items",
		op: "aadd",
		id: "abc",
		field: "days",
		value: 4,
		index: 2
	}
	testAction(assert, store, action2, expected)
});

QUnit.test("arrayRemove", function(assert) {
	var store = createItems()
	var action = {
		table: "items",
		op: "insert",
		id: "abc",
		values: {
			days: [1, 2, 3]
		}
	}
	var expected = {
		items: {
			abc: {
				id: "abc",
				days: [1, 3]
			}
		}
	}
	store.dispatch(action)
	var action2 = {
		table: "items",
		op: "aremove",
		id: "abc",
		field: "days",
		index: 1
	}
	testAction(assert, store, action2, expected)
});

