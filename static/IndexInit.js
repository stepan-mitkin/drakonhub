function IndexInit(window, document, undefined) {

var gWorking = false;

var gUserName = "";
var gUserId = "";
var gSpaceId = "";

function getResponseBody(xmlhttp) {
	if (xmlhttp.responseText) {
		try {
			var obj = JSON.parse(xmlhttp.responseText);
			return obj;
		} catch (err) {
			return xmlhttp.responseText;
		}
	} else {
		return {};
	}
}

function encodeRequest(requestBody) {
	if (!requestBody) {
		return "";
	}
	
	return JSON.stringify(requestBody);
}

function sendRequest(method, url, requestBody, success, error) {
	var requestText = encodeRequest(requestBody);
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open(method, url, true);	
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4) {
			var data = getResponseBody(xmlhttp);		
			if (xmlhttp.status == 200 || xmlhttp.status == 204) {
				success(data);
			} else {
				error(data, xmlhttp.status);
			}
		}
	}
	xmlhttp.send(requestText);
}


function sendGet(url, success, error) {
	sendRequest("GET", url, null, success, error);
}

function sendPost(url, requestBody, success, error) {
	sendRequest("POST", url, requestBody, success, error);
}


function setElementText(node, text) {
	node.innerHTML = "";
	var tNode = document.createTextNode(text);
	node.appendChild(tNode);
}


function setText(nodeId, text) {
	var node = get(nodeId);
	setElementText(node, text);
}

function complain(message) {
	setText("message", message);
}

function get(id) {
	return document.getElementById(id);
}

function focusElement(id) {

	var element = get(id);
	element.focus();
}



function logon() {
	if (gWorking) return;
	var user = getValue("userName").trim().toLowerCase();
	var password = getValue("password");
	if (!user) {
		complain("User name not specified");
	} else if (!password) {
		complain("Password not specified");
	} else {
		beginLogon(user, password);
	}
}

function show(id, display) {
	var element = get(id);
	element.style.display = display;
}



function showWorking() {
	gWorking = true;
	show("logon_butt", "none");
	show("working_label", "inline-block");
}

function hideWorking() {
	gWorking = false;
	show("logon_butt", "inline-block");
	show("working_label", "none");

}

function beginLogon(userName, password) {
	function success(data) {
		var userId = userName.toLowerCase();
		openMyDiagrams(userId);
	}

	function error(data) {
		hideWorking();
		if (data.error) {
			complain(data.error);
		} else if (typeof data == "string") {
			complain(data);
		} else {
			complain("Error occured");
		}
	}		

	
	complain("");
	showWorking();
	sendPost(
		"/api/logon",
		{
			user: userName,
			password: password
		},
		success,
		error
	);
}

function openMyDiagrams(userId) {
	window.location.href = "/project/#/folder/" + userId;
}

function logout() {
	function success() {
		window.location.reload();
	}

	window.localStorage.removeItem("clipboard");
	window.localStorage.removeItem("clipboard type");	
	sendPost("/api/logout", {}, success, success);
}

function getValue(id) {
	var element = get(id);
	return element.value || "";
}

this.userDown = function(evt) {
	if (evt.keyCode == 13) {
		focusElement("password");
	}
}


this.passDown = function(evt) {
	if (evt.keyCode == 13) {
		logon();
	}
}

function noOp() { }



this.checkIfLogged = function() {
	function success(data) {
		gUserName = data.name;
		gUserId = data.user_id;
		gSpaceId = data.my_space;
		show("user_block", "inline-block");
		show("logged", "block");
		show("not_logged", "none");
		show("logon_block", "none");
		show("puppy", "none");
		show("out", "none");
		show("puppy_logged", "inline-block");
		show("out_logged", "inline-block");
		setText("user_name", gUserName);
		var myDocs = get("docs_link");
		myDocs.href = "/project/#/folder/" + gUserId;
	}

	sendGet("/api/account", success, noOp);
}

this.logon = logon;
this.logout = logout;



}

