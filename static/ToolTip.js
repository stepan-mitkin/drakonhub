function ToolTip(window, document) {

	function ToolTipObject(target, text) {

		var self = this;
		target.addEventListener("mousemove", onMouseOver);
		target.addEventListener("mouseout", onMouseOut);

		function onTimeout() {
			if (!self.timer) return;
			self.timer = "done";
			show();
		}		
	
		function onMouseOver(mouseEvent) {
			self.x = mouseEvent.pageX;
			self.y = mouseEvent.pageY;
			if (!self.timer) {
				self.timer = window.setTimeout(onTimeout, 500);			
			}
		}
	
		function onMouseOut(mouseEvent) {
			close()
		}
	
		function close() {
			hideTooptip()

			if (self.timer && self.timer != "done") {
				window.clearTimeout(self.timer);
			}
			if (self.closeTimer) {
				window.clearTimeout(self.closeTimer)
			}
			self.timer = null
			self.closeTimer = null
		}

		function show() {		
			var ttip = document.getElementById("tooltip");
			HtmlUtils.setDivText(ttip, text)
			var x = (self.x + 10)
			var y = (self.y + 10)			

			ttip.style.display = "inline-block";
			var pos = HtmlUtils.correctPosition(x, y, ttip)
			ttip.style.left = pos.x + "px";
			ttip.style.top = pos.y + "px";			
			
			self.closeTimer = window.setTimeout(close, 3000)
		}
	}
	
	function hideTooptip() {
		var ttip = document.getElementById("tooltip");		
		ttip.style.display = "none";		
	}
	
	this.hideTooptip = hideTooptip
	this.makeFromElement = function(element, text) {
		if (HtmlUtils.isMobile()) {
			return
		}		
		new ToolTipObject(element, text)
	}

	this.make = function(id, text) {
		if (HtmlUtils.isMobile()) {
			return
		}
		var element
		if (typeof id == "string") {
			element = document.getElementById(id)
		} else {
			element = id
		}
		if (element) {
			new ToolTipObject(element, text)
		}
	}
}

