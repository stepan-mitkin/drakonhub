QUnit.module( "TabGen3" );

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
	var undo = store.buildUndo(action)
	var before = copyDeep(store.getState())
	store.dispatch(action)
	var after = copyDeep(store.getState())
	assert.deepEqual(after, expected)
	store.dispatch(undo)
	var after2 = copyDeep(store.getState())
	assert.deepEqual(after2, before)
}

function createItems() {
	var store = new TabGen3()
	store.createTable("items")
	return store
}

QUnit.test("add", function(assert) {
	var store = createItems()
	var action = {
		table: "items",
		op: "add",
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
});

QUnit.test("remove", function(assert) {
	var store = createItems()
	var action = {
		table: "items",
		op: "add",
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

QUnit.test("update", function(assert) {
	var store = createItems()
	var action = {
		table: "items",
		op: "add",
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

QUnit.test("setAdd", function(assert) {
	var store = createItems()
	var action = {
		table: "items",
		op: "add",
		id: "abc",
		values: {
			sides: {up:true, right:true}
		}
	}
	var expected = {
		items: {
			abc: {
				id: "abc",
				sides: {up:true, right:true, left:true}
			}
		}
	}
	store.dispatch(action)
	var action2 = {
		table: "items",
		op: "setAdd",
		id: "abc",
		field: "sides",
		value: "left"
	}
	testAction(assert, store, action2, expected)
});

QUnit.test("setRemove", function(assert) {
	var store = createItems()
	var action = {
		table: "items",
		op: "add",
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
		op: "setRemove",
		id: "abc",
		field: "sides",
		value: "right"
	}
	testAction(assert, store, action2, expected)
});

QUnit.test("arrayPush", function(assert) {
	var store = createItems()
	var action = {
		table: "items",
		op: "add",
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
		op: "arrayPush",
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
		op: "add",
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
		op: "arrayPop",
		id: "abc",
		field: "days"
	}
	testAction(assert, store, action2, expected)
});

QUnit.test("arrayAdd", function(assert) {
	var store = createItems()
	var action = {
		table: "items",
		op: "add",
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
		op: "arrayAdd",
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
		op: "add",
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
		op: "arrayRemove",
		id: "abc",
		field: "days",
		index: 1
	}
	testAction(assert, store, action2, expected)
});

QUnit.test("proc", function(assert) {
	var store = createItems()
	var action = {
		table: "items",
		op: "add",
		id: "abc",
		values: {
			days: [1, 2, 3]
		}
	}
	var expectedRow = {
		id: "abc",
		days: [1, 2, 3]
	}
	store.dispatch(action)
	var action2 = {
		table: "items",
		op: "proc",
		id: "abc"
	}
	var actual = null
	store.subscribe((action, row) => actual = row)
	store.dispatch(action2)
	assert.deepEqual(actual, expectedRow)	
});
