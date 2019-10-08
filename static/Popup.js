function Popup(window, document) {

var popup = document.getElementById("popup");
var popupText = document.getElementById("popup_text");
var popupClose = document.getElementById("popup_close");
popup.onclick = function() {
	self.hide()
}


var globals = {}

var self = this

function fadeWarning() {
	globals.warningTimer = null;
	popup.style.transition = "opacity 0.5s";
	popup.style.opacity = 0;
}

function hideWarning() {
	globals.warningTimer2 = null;
	
	popup.style.display = "none";
}

function cancelWarningTimers() {
	

	if (globals.warningTimer) {
		window.clearTimeout(globals.warningTimer);
		globals.warningTimer = null;
	}
	
	if (globals.warningTimer2) {
		window.clearTimeout(globals.warningTimer2);		
		globals.warningTimer2 = null;
	}	
}

self.show = function(text) {
	cancelWarningTimers();
	popup.style.display = "inline-block";	
	popup.style.position = "absolute";
	popup.style.left = "10px";
	popup.style.top = "10px";
	popup.style.background = "#ffffff";
	popup.style.padding = "0px";
	popup.style.border = "1px solid #9090ff";
	popup.style.borderLeft = "10px solid #9090ff"
	popup.style.borderRadius = "5px";
	popup.style.verticalAlign = "middle";
	popup.style.boxShadow="5px 5px 20px black";
	popup.style.visibility = "visible";

	popup_close.style.background = "#9090ff"

	popup.style.transition = "opacity 0.2s";
	popup.style.opacity = 1;	
	HtmlUtils.setDivText(popupText, text);
	globals.warningTimer = window.setTimeout(fadeWarning, 4000);
	globals.warningTimer2 = window.setTimeout(hideWarning, 4500);	
}

self.hide = function() {
	cancelWarningTimers();
	popup.style.display = "none";
}




}
