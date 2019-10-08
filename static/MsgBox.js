
function MessageBox(window, document) {

var ns = this;

ns.visible = false;


    
var msgbox_background = document.getElementById("msgbox_background");
var msgbox_text = document.getElementById("msgbox_text");
var msgbox_header = document.getElementById("msgbox_header");
var msgbox_error = document.getElementById("msgbox_error");
var save_dialog_butt = document.getElementById("save_dialog_butt");
var cancel_dialog_butt = document.getElementById("cancel_dialog_butt");

var gDialog = Dialogs.createMovable(
	msgbox_background,
	msgbox_body,
	msgbox_header,
	30,
	onHide
)



cancel_dialog_butt.onclick = closeEdit;


gDialog.addOnMove(msgbox_text)
gDialog.addOnUp(msgbox_text)
gDialog.addOnMove(msgbox_error)

msgbox_text.onfocus = fixIPadKeyboard;


var oldPageX = 0;
var oldPageY = 0;

function showEdit(x, y) {
    msgbox_background.style.display = "inline-block";
    msgbox_body.style.display = "inline-block";
    msgbox_text.focus();
	ns.visible = true;
	gDialog.show(x, y)
}

ns.close = closeEdit;

function closeEdit() {
	gDialog.hide()
	fixIPadKeyboard()
}

function onHide() {
	ns.visible = false
}




function fixIPadKeyboard() {
	if (window.scrollTo) {
		window.scrollTo(0, 0);
	}
	document.body.scrollTop = 0;
	document.body.scrollLeft = 0;
}

ns.fixIPadKeyboard = fixIPadKeyboard;

ns.newLine = function() {
	msgbox_text.value += "\n";
}

ns.show = function(async, header, text, callback, validator) {
    
    msgbox_error.style.display = "none";
    
    HtmlUtils.setDivText(msgbox_header, header);
    msgbox_text.value = text;
    
   

    ns.save = function() {
        if (validator) {
            var message = validator(msgbox_text.value);
            if (message) {
                HtmlUtils.setDivText(msgbox_error, message);
                msgbox_error.style.display = "block";
                return;
            }
        }
        
        callback(msgbox_text.value);
		if (!async) {
        	closeEdit();
			fixIPadKeyboard();
		}
    };

    save_dialog_butt.onclick = function() {  ns.save(); };
    
	var x = 0
	var y = 0
    showEdit(x, y)

}




}

