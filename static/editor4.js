"use strict";
var MegaTree = {
    modules: {},
    data: {}
};
(function(window, document, megaTree) {

function file1(megaTree) {
	
	this.init = function() {
		console.log("file1 init")
	}
	
	this.hello = function() {
		console.log("hello")
	}
}

MegaTree.modules.file1 = new file1(megaTree);

function file2(megaTree) {
	
	this.init = function() {
		console.log("file2 init")
	}	
	
	this.bye = function() {
		console.log("bye")
	}
}

MegaTree.modules.file2 = new file2(megaTree);
MegaTree.modules.file1.init();
MegaTree.modules.file2.init();
})(window, document, MegaTree);
