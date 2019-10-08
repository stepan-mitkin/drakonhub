function Logon(window, document, translate, undefined) {

var self = this
self.stopped = false
var gWorking = false
var gMessage



function get(id) {
	return document.getElementById(id)
}

function getValue(id) {
	var element = get(id)
	return element.value || ""
}

function setElementText(node, text) {
	node.innerHTML = "";
	if (text) {
		var tNode = document.createTextNode(text);
		node.appendChild(tNode);
	}
}



function setText(nodeId, text) {
	var node = get(nodeId);
	setElementText(node, text);
}

function showMessage(message) {
	setText(gMessage, message);
}

var gUser = null
var gPassword = null
var gMessage = null

function logon(userElementName, passwordElementName, messageElementName, onSuccess) {
	gUser = userElementName
	gPassword = passwordElementName
	gMessage = messageElementName

	if (gWorking) return
	gMessage = messageElementName
	var user = getValue(gUser).trim().toLowerCase()
	var password = getValue(gPassword)
	if (!user) {
		complain(gUser, translate("ERR_USER_NAME_EMPTY"))
	} else if (!password) {
		complain(gPassword, translate("ERR_PASSWORD_EMPTY"))
	} else {
		beginLogon(user, password, onSuccess)
	}
}

function show(id, display) {
	var element = get(id)
	element.style.display = display
}

function complain(elementId, message) {
	showMessage(message)
	if (self.onError) {
		self.onError()
	}
	if (elementId) {
		get(elementId).focus()
	}
}

function showWorking() {
	gWorking = true
	showMessage(translate("MES_WORKING"))
}

function hideWorking() {
	gWorking = false
	showMessage("")
}

function handleError(data) {
	hideWorking()
	if (data.error) {
		complain(null, translate(data.error))
	} else if (typeof data == "string") {
		complain(null, data)
	} else {
		complain(null, translate("ERR_ERROR"))
	}
}

function reportLogonToCarrot(data) {
	if (window.carrotquest) {
		window.carrotquest.track(
			"$authorized",
			{"$email": data.email, "$name": data.name, "$user_id": data.id}
		)
	}
}

function beginLogon(userName, password, onSuccess) {
	self.stopped = false
	var userId = userName.toLowerCase()
	function success(data) {
		if (self.stopped) {
			return
		}		
		HtmlUtils.setValue(gPassword, "")
		showMessage(translate("MES_SUCCESS"))
		reportLogonToCarrot(data)
		onSuccess(data)
	}

	function error(data) {
		if (self.stopped) {
			return
		}

		handleError(data)
	}		

	showWorking()
	HtmlUtils.sendPost(
		"/api/logon",
		{
			user: userId,
			password: password
		},
		success,
		error
	)
}

function logout() {
	function success() {
		window.location.href = "/"
	}

	window.localStorage.removeItem("clipboard");
	window.localStorage.removeItem("clipboard type");	
	HtmlUtils.sendPost("/api/logout", {}, success, success);
}

this.logon = logon
this.logout = logout
}

