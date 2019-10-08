
var Utest = {};

(function(ns, undefined) {

ns.CallListener = function(assert) {
    this.calls = [];
    
    this.call = function(name, args) {
        var callInfo = {
            name: name,
            args: args
        };
        this.calls.push(callInfo);
    }
    
    this.checkCall = function(index, name, args) {
        var callInfo = {
            name: name,
            args: args
        };
        var actualCall = this.calls[index];
        assert.ok(actualCall, "Call at " + index + " not done");
        assert.deepEqual(actualCall, callInfo);
    }
    
    this.count = function() {
        return this.calls.length;
    }
    
    this.clear = function() {
        this.calls = [];
    }
}

ns.checkKeys = function(assert, actual, expected) {
    var expKeys = {};
    var i;
    for (i = 0; i < expected.length; i++) {
        expKeys[expected[i]] = true;
    }
    assert.deepEqual(actual, expKeys);
}

ns.equivalent = function(assert, actual, expected) {
    var sorted = actual.sort(function(a, b) { return a - b; });
    assert.deepEqual(actual, sorted);
}

})(Utest);





function startFake(newRoot) {
    Utest.root = newRoot;
    Utest.calls = [];
    Utest.currentCall = 0;
    Utest.runningCall = 0;
    Utest.oldFunctions = {};
}

function endFake(assert) {
    var methods = Object.keys(Utest.oldFunctions);
    for (var i = 0; i < methods.length; i++) {
        var method = methods[i];
        Utest.root[method] = Utest.oldFunctions[method];
    }
    
    assert.equal(Utest.currentCall, Utest.runningCall,
        "More calls expected");
}


function expect(assert, name, args, returnedValue) {
    if (!(Utest.oldFunctions[name])) {
        Utest.oldFunctions[name] = Utest.root[name];
        Utest.calls[name] = {};
        Utest.root[name] = function() {
            var c = Utest.calls[name];            
            if (!c[Utest.runningCall]) {
                assert.ok(false, "Call not expected: " + name);
                return;
            }
            var ar = c[Utest.runningCall].args;
            var r = c[Utest.runningCall].returns;
            Utest.runningCall++;
            if (ar.length !== arguments.length) {
                assert.ok(false, "Wrong argument count: " + arguments.length);
                return;
            }
            
            for (var i = 0; i < ar.length; i++) {
                if (ar[i] === "_") continue;
                assert.deepEqual(arguments[i], ar[i], "Wrong argument at " + i + ", '" + 
                        arguments[i] + "' instead of '" + ar[i] + "'");
            }
            
            return r;
        }
    }
    
    var call = Utest.calls[name]
    call[Utest.currentCall] = {
        args: args,
        returns: returnedValue
    };
    
    Utest.currentCall++;
}


function RenderFake() {
    this.id = 1;
    this.items = {};
    this.dirty = false;
    
    var self = this;
    

	this.createTexture = function() { return 0; }
	this.drawText = function() { return 0; }
	this.drawAction = function() { return 0; }
	this.drawBegin = function() { return 0; }
	this.drawSelect = function() { return 0; }
	this.drawCase = function() { return 0; }
	this.drawQuestion = function() { return 0; }
	this.drawAddress = function() { return 0; }
	this.drawBranch = function() { return 0; }
	this.drawLoopBegin = function() { return 0; }
	this.drawLoopEnd = function() { return 0; }
	this.drawPause = function() { return 0; }


    this.makeDirty = function() {
        self.dirty = false;
    }
    
    function nextId() {
        self.id++;
        return self.id;
    }
    
    this.getFontHeight = function() {
        return 20;
    }
    
    this.measureTextWidth = function(text) {
        return text.length * 20;
    }
    
    this.createHorizontal = function(x, y, w, color, layer) {
        var id = nextId();
        
        var item = {
            id: id,
            x: x,
            y: y,
            w: w,
            color: color,
            layer: layer
        };
        
        this.items[id] = item;
        
        return id;
    }
    
    this.createVertical = function(x, y, h, color, layer) {
        var id = nextId();
        var item = {
            id: id,
            x: x,
            y: y,
            h: h,
            color: color,
            layer: layer
        };
        
        this.items[id] = item;
        
        return id;
    }
    
    this.moveItem = function(id, x, y) {

        var item = this.items[id];
        item.x = x;
        item.y = y;
    }
    
    this.deleteItem = function(id) {
        delete this.items[id];
    }
        
    this.createAction = function(x, y, w, h, back, fore, layer) {
        var id = nextId();
        var item = {
            id: id,
            x: x,
            y: y,
            w: w,
            h: h,
            back: back,
            fore: fore,
            layer: layer
        };

        this.items[id] = item;
        
        return id;
    }
    
	this.createQuestion = function(x, y, w, h, back, fore, layer) {
        var id = nextId();
        var item = {
            id: id,
            x: x,
            y: y,
            w: w,
            h: h,
            back: back,
            fore: fore,
            layer: layer
        };

        this.items[id] = item;
        
        return id;
	}
    
    
	this.createSelect = function(x, y, w, h, back, fore, layer) {
        var id = nextId();
        var item = {
            id: id,
            x: x,
            y: y,
            w: w,
            h: h,
            back: back,
            fore: fore,
            layer: layer
        };

        this.items[id] = item;
        
        return id;
	}
    
	this.createCase = function(x, y, w, h, back, fore, layer) {
        var id = nextId();
        var item = {
            id: id,
            x: x,
            y: y,
            w: w,
            h: h,
            back: back,
            fore: fore,
            layer: layer
        };

        this.items[id] = item;
        
        return id;
	}
    
	this.createBranch = function(x, y, w, h, back, fore, layer) {
        var id = nextId();
        var item = {
            id: id,
            x: x,
            y: y,
            w: w,
            h: h,
            back: back,
            fore: fore,
            layer: layer
        };

        this.items[id] = item;
        
        return id;
	}    

	this.createAddress = function(x, y, w, h, back, fore, layer) {
        var id = nextId();
        var item = {
            id: id,
            x: x,
            y: y,
            w: w,
            h: h,
            back: back,
            fore: fore,
            layer: layer
        };

        this.items[id] = item;
        
        return id;
	}    

    
	this.createLoopBegin = function(x, y, w, h, back, fore, layer) {
        var id = nextId();
        var item = {
            id: id,
            x: x,
            y: y,
            w: w,
            h: h,
            back: back,
            fore: fore,
            layer: layer
        };

        this.items[id] = item;
        
        return id;
	}    
    
	this.createLoopEnd = function(x, y, w, h, back, fore, layer) {
        var id = nextId();
        var item = {
            id: id,
            x: x,
            y: y,
            w: w,
            h: h,
            back: back,
            fore: fore,
            layer: layer
        };

        this.items[id] = item;
        
        return id;
	}      
    
    this.createBegin = function(x, y, w, h, back, fore, layer) {
        var id = nextId();
        var item = {
            id: id,
            x: x,
            y: y,
            w: w,
            h: h,
            back: back,
            fore: fore,
            layer: layer
        };

        this.items[id] = item;
        
        return id;
    }    
    
    this.createText = function(x, y, text, color, layer) {
        var id = nextId();
        var item = {
            x: x,
            y: y,
            text: text,
            color: color,
            layer: layer
        };
        this.items[id] = item;
        
        return id;
    }
    
    this.getOrigin = function() {
        return new Point(0, 0);
    }
    
    this.panTo = function(ox, oy) {
    }
    
    this.endPan = function() {}
    this.reset = function() {}
    this.clear = function() {}    
    this.redraw = function() {}
    this.setTitle = function() {}
    this.createCandy = function() { return 800; }
    this.setPan = function(ox, oy) { }
}
