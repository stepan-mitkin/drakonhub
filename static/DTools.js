function DToolsModule(window, document) {

	var globals = {}

	var self = this

	function get(id) {
		return document.getElementById(id)
	}

	function setDivText(element, text) {
		if (!element) return
		var t = document.createTextNode(text)
		element.appendChild(t)
	}

	self.print = function(message) {
		if (!globals.overlayName) return

		message = message || ""
		if (typeof message != "string") {
			message = JSON.stringify(message)
		}

		var overlay = get(globals.overlayName)
		if (!overlay) return

		globals.count++
		if (globals.count > globals.maxLength) {
			overlay.innerHTML = ""
			globals.count = 1
		}

		var p = document.createElement("p")
		p.style.margin = "0px"
		p.style.textAlign = globals.textAlign
		setDivText(p, message)
		overlay.appendChild(p)
	}

	self.clear = function() {
		if (!globals.overlayName) return

		var overlay = get(globals.overlayName)
		if (!overlay) return

		overlay.innerHTML = ""
		globals.count = 0
	}

	self.enableDebugLog = function(overlayName, textAlign, maxLength) {
		globals.count = 0
		globals.overlayName = overlayName
		globals.textAlign = textAlign
		globals.maxLength = maxLength
	}
	
	self.isOn = function() {
		return !!globals.overlayName
	}
}

var DTools = new DToolsModule(window, document)

