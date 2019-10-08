var HtmlUtils = {};

(function(ns, document, window, undefined) {

var gMovable = {}
var gErrorReporter = null

function make(parent, tag) {
	var element = document.createElement(tag)
	parent.appendChild(element)
	return element
}

function get(id) {
    var element = document.getElementById(id)
    if (element) {
        return element
    } else {
        throw Error("Element '" + id + "' not found")
    }
}

function coverUpException(action) {
    var wrapped = function(arg1) {
    	try {
    		action(arg1)
    	} catch (e) {
			console.log(e)
			ns.reportError(e)
    	}
    }
    return wrapped
}

function hidePopup() {
	var popupBase = getTopDialog()
	if (popupBase) {	

		var dialogsRoot = get("dialog")
		dialogsRoot.removeChild(popupBase)
		
		dialogStack.pop()
		delete popupBase
		
		if (dialogStack.length == 0) {
			gMovable = {}
		}			
	}
}

ns.hidePopup = hidePopup

ns.hasPopup = function() {
	var popupBase = getTopDialog()
	if (popupBase) {
		return true
	}
	return false
}


function displayWatermark(inputBox, text) {
	inputBox.value = text
	inputBox.style.color = "grey"
}

function clearWatermark(inputBox, text) {
	inputBox.value = ""
	inputBox.style.color = "black"
}

function watermark(inputBox, text) {
	if (inputBox.value.length > 0) {
		if (inputBox.value == text) {
			clearWatermark(inputBox, text)
		}
	} else {
		displayWatermark(inputBox, text)
	}
}

function passwordWatermark(inputBox, label, text) {
	if (inputBox.value.length > 0) {
		label.style.display = "none"
	} else {
		label.style.display = "inline"
	}
}

ns.setWatermark = function(input, text) {
	input.onfocus = function() { watermark(input, text) }
	input.onblur = function() { watermark(input, text) }
	watermark(input, text)
}

ns.setPasswordWatermark = function(input, label, text) {
	var handler = function() { passwordWatermark(input, label, text) }
	input.onfocus = function() { label.style.display = "none" }
	input.onblur = handler
}

function makeFullScreen(div) {
    var style = div.style

    style.width = null
    style.height = null
    style.display = "inline-block"
    style.position = "fixed"
    style.left = "0px"
    style.top = "0px"
    style.right = "0px"
    style.bottom = "0px"
}

ns.makeFullScreen = makeFullScreen


ns.noContext = function(div) {
    div.oncontextmenu = function() { return false }
}


function onBackgroundTouchStart(evt, onBackClick) {
	ns.preventDefaultHandling(evt)
	var evt2 = ns.touchToMouse(evt)
	onBackgroundMouseDown(evt2, onBackClick)
}

function onBackgroundMouseDown(evt, onBackClick) {
	ns.preventDefaultHandling(evt)
	if (gModalPopup) {
		return
	}
	
	hidePopup()
	if (onBackClick) {
		onBackClick(evt)
	}	
}

var dialogStack = []
var gModalPopup = false

function getTopDialog() {
	var length = dialogStack.length
	if (length != 0) {
		return dialogStack[length - 1]
	} else {
		return null
	}
}


function hit(box, x, y) {
	if (x < box.left) return false
	if (x > box.right) return false
	if (y < box.top) return false
	if (y > box.bottom) return false
	return true
}


function isSoftHit(evt) {
	if (ns.soft) {
		var rect = ns.soft.popup.getBoundingClientRect()
		if (hit(rect, evt.clientX, evt.clientY)) {
			return true
		}
	}
	if (ns.softRect) {
		if (hit(ns.softRect, evt.clientX, evt.clientY)) {
			return true
		}
	}		
	return false
}


function toMouse(evt) {
	if ("clientX" in evt) {
		return evt
	} else {
		return ns.touchToMouse(evt)
	}
}

function onSoftUp(evt) {
	evt = toMouse(evt)
	var hit = isSoftHit(evt)
	ns.soft.ignored = !hit
	if (!hit) {	
		
		if (evt.stopPropagation) {
			evt.stopPropagation()
		}
		ns.hideSoftPopup()
	}	
}

function softIgnore(evt) {
	evt = toMouse(evt)
	var hit = isSoftHit(evt)
	ns.soft.ignored = !hit	
	if (!hit) {
		if (evt.stopPropagation) {
			evt.stopPropagation()
		}
	}	
}

function softStop(evt) {
	if (ns.soft.ignored) {
		if (evt.stopPropagation) {
			evt.stopPropagation()
		}		
	}
}

function addSoftBack(left, top, width, height, color) {
	var back = make(document.body, "div")
	back.style.display = "inline-block"	
	back.style.position = "absolute"
	back.style.top = top + "px"
	back.style.width = width + "px"
	back.style.left = left + "px"
	back.style.height = height + "px"
	back.style.zIndex = 30
	//back.style.background = color
	//back.style.opacity = 0.5
	ns.soft.backs.push(back)
	
	back.onmouseup = ns.hideSoftPopup
	back.ontouchend = ns.hideSoftPopup
	back.ontouchmove = ns.preventDefaultHandling
}

ns.hasSoftPopup = function(evt) {
	if (!ns.soft) {
		return false
	}
	return !!ns.soft.popup
}

ns.createSoftPopup = function(rect, onHide) {
	var addBack = false
	ns.soft = {
		backs: []
	}
	ns.soft.onHide = onHide

	ns.soft.rect = {
		left: rect.left,
		top: rect.top,
		right: rect.left + rect.width,
		bottom: rect.top + rect.height
	}
	var w = window.innerWidth
	var h = window.innerHeight
	if (addBack) {
		if (ns.soft.rect.top > 0) {
			addSoftBack(0, 0, w, ns.soft.rect.top, "red")
		}
		if (ns.soft.rect.left > 0) {
			addSoftBack(0, ns.soft.rect.top, ns.soft.rect.left, ns.soft.rect.bottom - ns.soft.rect.top, "green")
		}
		if (ns.soft.rect.right < w) {
			addSoftBack(ns.soft.rect.right, ns.soft.rect.top, w - ns.soft.rect.right, ns.soft.rect.bottom - ns.soft.rect.top, "blue")
		}
		if (ns.soft.rect.top > 0) {
			addSoftBack(0, ns.soft.rect.bottom, w, h - ns.soft.rect.bottom, "yellow")
		}
	}
	
	var div = make(document.body, "div")
	ns.soft.popup = div
	ns.soft.ignored = false
	
	div.style.display = "inline-block"
	div.style.zIndex = 31

	return div
}

ns.getSoftPopup = function() {
	if (ns.soft && ns.soft.popup) {
		return ns.soft.popup
	}
	return null
}

ns.hideSoftPopup = function() {
	var i
	if (ns.soft && ns.soft.popup) {
		if (ns.soft.onHide) {
			ns.soft.onHide()
		}
		document.body.removeChild(ns.soft.popup)
		for (i = 0; i < ns.soft.backs.length; i++) {
			document.body.removeChild(ns.soft.backs[i])
		}
		ns.soft.popup = null
		ns.soft.backs = []
		ns.soft.onHide = null
	}
}
	

ns.makePopupModal = function() {
	gModalPopup = true
}

function calculateZIndex() {
		return 20 + dialogStack.length * 10
}

ns.createPopup = function(onBackClick, dark) {
	gModalPopup = false
	var dialogsRoot = get("dialog")
	var popupBase = make(dialogsRoot, "div")
	dialogStack.push(popupBase)	

    popupBase.style.display = "block"

    var background = make(popupBase, "div")
    background.oncontextmenu = function() { return false }
    if (dark) {
		background.style.background = "black"
		background.style.opacity = 0.3
	}
    makeFullScreen(background)
    
    var backZIndex = calculateZIndex()
    background.style.zIndex = backZIndex

    background.onmousedown = coverUpException(function(evt) {
		onBackgroundMouseDown(evt, onBackClick)
	})
	
    background.ontouchstart = coverUpException(function(evt) {
		onBackgroundTouchStart(evt, onBackClick)
	})

    var div = make(popupBase, "div")
    div.style.display = "inline-block"
    div.style.zIndex = backZIndex + 1
    return div
}

ns.showUnder = function(anchor, div) {
    var pos = ns.leftBottom(anchor)

    div.style.display = "inline-block"
    div.style.position = "absolute"

    ns.setPosCorrected(
    	pos.x,
    	pos.y,
    	div
    )
}


ns.goBack = function() {
	if (window.history && window.history.go) {
		window.history.go(-1)
	}
}

function updateMoverPos() {
	var div = gMovable.div
	var mover = get("popup_mover")
	mover.style.display = "inline-block"
	mover.style.position = "absolute"
	var rect = div.getBoundingClientRect();

	setDivRect(
		mover,
		rect.left,
		rect.top,
		rect.width - gMovable.height,
		gMovable.height,
		null
	)	
}

function registerEvent(div, name, callback) {
	var wrapped = coverUpException(callback)
	var eventName = "on" + name
	div[eventName] = wrapped	
}

function onMoverMouseDown(evt) {
	var pos = ns.leftTop(gMovable.div)
	gMovable.pos = pos
	gMovable.mx = evt.clientX
	gMovable.my = evt.clientY
	gMovable.drag = true
	
	
	var mover = get("popup_mover")
	makeFullScreen(mover)
	ns.preventDefaultHandling(evt)
}

function onMoverMouseMove(evt) {
	if (!gMovable.drag) {
		return
	}
	var dx = evt.clientX - gMovable.mx
	var dy = evt.clientY - gMovable.my
	gMovable.mx = evt.clientX
	gMovable.my = evt.clientY
	gMovable.pos.x += dx
	gMovable.pos.y += dy

	var corrected = ns.correctPosition(
		gMovable.pos.x,
		gMovable.pos.y,
		gMovable.div
	)
	
	gMovable.pos = corrected;
	setDivPos(
		gMovable.div,
		corrected.x,
		corrected.y
	)	
	ns.preventDefaultHandling(evt)
}

function onMoverMouseUp(evt) {
	if (!gMovable.drag) {
		return
	}
	gMovable.drag = false
	updateMoverPos()
	ns.preventDefaultHandling(evt)
}

ns.setUpMovable = function(div, height) {
	gMovable = {
		div: div,
		drag: false,
		height: height		
	}
	
	var base = getTopDialog()
	if (!base) {
		throw new Exception("Cannot set up movable: no dialog")
	}
		
	var mover = make(base, "div")
	mover.id = "popup_mover"
	mover.style.zIndex = calculateZIndex() + 1
	//mover.style.background = "orange"
	//mover.style.opacity = 0.3
	mover.oncontextmenu = function() { return false }
	
	registerEvent(mover, "mousedown", onMoverMouseDown)
	registerEvent(mover, "mousemove", onMoverMouseMove)
	registerEvent(mover, "mouseup", onMoverMouseUp)
	
	registerEvent(mover, "touchstart", function(evt) {
		ns.preventDefaultHandling(evt)
		var evt2 = ns.touchToMouse(evt)
		onMoverMouseDown(evt2)
	})
	registerEvent(mover, "touchmove",  function(evt) {
		ns.preventDefaultHandling(evt)
		var evt2 = ns.touchToMouse(evt)
		onMoverMouseMove(evt2)
	})
	registerEvent(mover, "touchend", onMoverMouseUp)	
	registerEvent(mover, "touchcancel", onMoverMouseUp)	
	
	updateMoverPos()	
}

ns.insertAfter = function(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

ns.hide = function(id) {
	var element = document.getElementById(id)
	if (element) {
		element.style.display = "none"
	}
}

ns.show = function(id, display) {
	var element = document.getElementById(id)
	if (element) {
		element.style.display = display
	}
}

ns.stopPropagation = function(evt) {
	if (evt.stopPropagation) {
		evt.stopPropagation()
	} else if (window.event) {
		window.event.cancelBubble = true
	}
}

ns.isRetina = function() {
	// http://stackoverflow.com/questions/19689715/what-is-the-best-way-to-detect-retina-support-on-a-device-using-javascript
	return (
		(window.matchMedia
			&& (
				window.matchMedia('only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)').matches
				|| window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)').matches
			)
	    )
		|| (window.devicePixelRatio && window.devicePixelRatio > 1.3)
	)
}

ns.getRetinaFactor = function() {
	if (window.devicePixelRatio) {
		return window.devicePixelRatio
	} else if (ns.isRetina()) {
		return 2.0
	} else {
		return 1
	}
}

ns.isBrowserSupported = function() {
	
	if (!window.requestAnimationFrame) {
		return false
	}
	
	var canvas = document.createElement("canvas");
	if (!canvas) {
		return false
	}
	
	var context = canvas.getContext("2d")
	if (!context) {
		return false
	}
	
	if (!context.setLineDash) {
		return false
	}
	
	if (!window.history) {
		return false
	}

	if (!window.history.pushState) {
		return false
	}

	if (!window.history.replaceState) {
		return false
	}
	
	return true
}

function stripPx(value) {
    // item 7660
    if ((value) && (!(value == "initial"))) {
        // item 7650
        var noPx = value.substring(0, value.length - 2)
        // item 7651
        return parseFloat(noPx)
    } else {
        // item 7663
        return 0
    }
}

function px(number) {
	return number + "px"
}

function setDivRect(div, left, top, width, height, position) {
	
	position = position || "absolute"
	
    var style = div.style
    var leftPadding = stripPx(style.paddingLeft)
    var rightPadding = stripPx(style.paddingRight)
    var leftBorder = stripPx(style.borderLeftWidth)
    var rightBorder = stripPx(style.borderRightWidth)
    
    var topPadding = stripPx(style.paddingTop)
    var bottomPadding = stripPx(style.paddingBottom)
    var topBorder = stripPx(style.borderTopWidth)
    var bottomBorder = stripPx(style.borderBottomWidth)    
	
	height = height - topPadding - bottomPadding
      - topBorder - bottomBorder
	
	width = width - leftPadding - rightPadding
      - leftBorder - rightBorder
	
	div.style.display = "inline-block"
	div.style.position = position
	div.style.left = px(left)
	div.style.top = px(top)
	div.style.width = px(width)
	div.style.height = px(height)	
}

function setDivPos(div, left, top) {
	div.style.left = px(left)
	div.style.top = px(top)
}

ns.showAtCenter = function(element) {
    var rect = element.getBoundingClientRect();

	var width = rect.width
	var height = rect.height
	
	var x = Math.ceil((document.body.clientWidth - width)/2)
	var y = Math.ceil((window.innerHeight - height)/3)
	
	ns.setPosCorrected(x, y, element)
}

ns.setPosCorrected = function(left, top, element) {
	
    var rect = element.getBoundingClientRect();

	var width = rect.width
	var height = rect.height

	var right = left + width
	if (right > document.body.clientWidth) {
		left = document.body.clientWidth - width - 2
	}
	if (left < 0) {
		left = 0
	}
	var bottom = top + height
	if (bottom > window.innerHeight) {
		top = window.innerHeight - height - 2
	}
	if (top < 0) {
		top = 0
	}
	
	width = Math.min(width, window.innerWidth - 2)
	height = Math.min(height, window.innerHeight - 2)
	
	setDivRect(element, left, top, width, height, "fixed")
}

ns.correctPosition = function(left, top, element) {
    var rect = element.getBoundingClientRect();

	var width = rect.width
	var height = rect.height

	var right = left + width
	if (right > document.body.clientWidth) {
		left = document.body.clientWidth - width - 2
	}
	if (left < 0) {
		left = 0
	}
	var bottom = top + height
	if (bottom > window.innerHeight) {
		top = window.innerHeight - height - 2
	}
	if (top < 0) {
		top = 0
	}

    return { x: left, y: top };
}


ns.hideChildren = function(id) {
	var div = document.getElementById(id)
	if (div) {
		var children = div.children
		for (var i = 0; i < children.length; i++) {
			var child = children[i]
			child.style.display = "none"
		}			
	}
}

ns.rect = function(element) {
    var rect = element.getBoundingClientRect()
	return rect
}

ns.below = function(element, x, y, margin) {
	var rect = ns.rect(element)
	return (y - rect.bottom) > margin
}

ns.leftBottom = function(element) {
    var rect = element.getBoundingClientRect();
	var left = rect.left
	var top = rect.bottom
	return { x:left, y:top}
}

ns.leftTop = function(element) {
    var rect = element.getBoundingClientRect();
	var left = rect.left
	var top = rect.top
	return { x:left, y:top}
}


ns.rightBottom = function(element) {
    var rect = element.getBoundingClientRect();
	var left = rect.right
	var top = rect.bottom
	return { x:left, y:top}
}

ns.placeUnderLeft = function(parent, child) {
	var pos = ns.leftBottom(parent)
	ns.correntPosition(pos.x, pos.y, element)
}

ns.width = function() {
	return window.innerWidth
}

ns.height = function() {
	return window.innerHeight
}

ns.isOutside = function(evt) {
	var x = evt.clientX
	var y = evt.clientY

	if (x < 0 || y < 0 || x >= window.innerWidth || y >= window.innerHeight) {
		return true
	}
	return false
}

ns.getValue = function(id) {
	var element = document.getElementById(id)
	return element.value || "";
}

ns.setValue = function(id, value) {
	var element = document.getElementById(id)
	element.value = value
}


ns.setText = function(name, text) {
	var element = document.getElementById(name);
	if (element) {
		ns.setDivText(element, text);
	}
}

ns.setChecked = function(name, value) {
	var element = document.getElementById(name);
	if (element) {
		element.checked = value
	}
}

ns.getChecked = function(name) {
	var element = document.getElementById(name);
	if (element) {
		return element.checked
	}
	return false
}

ns.setDivText = function(div, text) {
	if (div) {
		div.innerHTML = "";
		var t = document.createTextNode(text);
		div.appendChild(t);
	}	
}

ns.clear = function(id) {
	var element = document.getElementById(id);
	if (element) {
		element.innerHTML = ""
	}
}

ns.focus = function(id) {
	var element = document.getElementById(id);
	if (element) {
		element.focus()
	}
}

ns.preventDefaultHandling = function(evt) {
    if (evt.preventDefault) {  // W3C variant
        evt.preventDefault()
    } else { // IE<9 variant:
        evt.returnValue = false
    }
}

ns.schedule = function(receiver, milliseconds) {
    var timerObject;
    timerObject = window.setInterval(
        function() {
            window.clearInterval(timerObject);
            receiver.timeout();
        },
        milliseconds
    );
    return timerObject;
}

ns.elementToClient = function(element, point) {
    var p = {
        x: point.x + element.offsetLeft,
        y: point.y + element.offsetTop
    };
    
    var parent = element.offsetParent;
    if (parent === null) {
        return p;
    } else {
        return ns.elementToClient(parent, p);
    }
}

var oldClientX = 0;
var oldClientY = 0;

ns.touchToMouse = function(evt) {
    var touch = evt.touches[0];
    oldClientX = touch.clientX;
    oldClientY = touch.clientY;
    var result = {
		buttons: 0,
    	screenX: touch.screenX,
    	screenY: touch.screenY,
        clientX: touch.clientX,
        clientY: touch.clientY,
        pageX: touch.pageX,
        pageY: touch.pageY,
        target: touch.target
    };  
    
    return result;
}

function genericMouseEvent(evt, callback) {

    if (evt.button == 0) {
        callback(evt);
    }
}

function genericTouchEvent(evt, callback) {
    var mouseEvent = ns.touchToMouse(evt);
    callback(mouseEvent);
}

function touchUp(evt, callback) {
    var mouseEvent = {
        clientX: oldClientX,
        clientY: oldClientY,
        pageX: evt.pageX,
        pageY: evt.pageY
    }; 
    callback(mouseEvent);
}

ns.registerDown = function(element, callback) {
    element.addEventListener("mousedown", function(evt) {
        genericMouseEvent(evt, callback);
		ns.preventDefaultHandling(evt);
    });
    element.addEventListener("touchstart", function(evt) {
        genericTouchEvent(evt, callback);
		ns.preventDefaultHandling(evt);
    });
}


function suppress(evt) {
	ns.preventDefaultHandling(evt);
	return false;
}

ns.registerClick = function(element, callback) {
	/*
	element.addEventListener("touchmove", suppress);
	element.addEventListener("touchstart", suppress);
    element.addEventListener("touchend", function(evt) {
		touchUp(evt, callback);
		ns.preventDefaultHandling(evt);
    });
    */
    element.addEventListener("click", function(evt) {
        callback(evt);
		ns.preventDefaultHandling(evt);
    }, true);
}

ns.registerMove = function(element, callback) {
    element.addEventListener("mousemove", function(evt) {
        genericMouseEvent(evt, callback);
		ns.preventDefaultHandling(evt);
    }, true);
    element.addEventListener("touchmove", function(evt) {
        genericTouchEvent(evt, callback);
		ns.preventDefaultHandling(evt);
    }, true);
}

ns.registerMoveWithDefault = function(element, callback) {
    element.addEventListener("mousemove", function(evt) {
        genericMouseEvent(evt, callback, false);
    }, true);
    element.addEventListener("touchmove", function(evt) {
        genericTouchEvent(evt, callback, false);
    }, true);
}

ns.registerUp = function(element, callback) {
    element.addEventListener("mouseup", function(evt) {
        genericMouseEvent(evt, callback);
		ns.preventDefaultHandling(evt);
    });
    element.addEventListener("touchend", function(evt) {
		touchUp(evt, callback);
		ns.preventDefaultHandling(evt);
    });
}

ns.getWheelDelta = function(evt) {
	var dx, dy;
	if (evt.wheelDeltaX != undefined) {
		dx = evt.wheelDeltaX;
	} else if (evt.deltaX != undefined) {
		dx = evt.deltaX;
	} else {
		dx = 0;
	}
	if (evt.wheelDeltaY != undefined) {
		dy = evt.wheelDeltaY;
	} else if (evt.deltaY != undefined) {
		dy = evt.deltaY;
	} else {
		dy = 0;
	}	
	return { x:dx, y:dy };

}

function getResponseBody(xmlhttp) {
	if (xmlhttp.responseText) {
		try {
			var obj = JSON.parse(xmlhttp.responseText);
			return obj;
		} catch (err) {
			return xmlhttp.responseText;
		}
	} else {
		return "";
	}
}

function encodeRequest(requestBody) {
	if (!requestBody) {
		return "";
	}
	
	return JSON.stringify(requestBody);
}

ns.setErrorReporter = function(fun) {
	gErrorReporter = fun
}

ns.reportError = function(e) {
	if (gErrorReporter) {
		gErrorReporter(e)
	}
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
				data = data || "Connection problem";
				try {
					error(data, xmlhttp.status);
				} catch (e) {
					// swallow
				}
			}
		}
	}
	xmlhttp.send(requestText);
}

ns.sendRequest = sendRequest;

ns.sendGet = function(url, success, error) {
	sendRequest("GET", url, null, success, error);
}

ns.sendPost = function(url, requestBody, success, error) {
	sendRequest("POST", url, requestBody, success, error);
}

ns.sendRawPost = function(url, requestData, success, error) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("POST", url, true);	
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4) {
			var data = getResponseBody(xmlhttp);		
			if (xmlhttp.status == 200 || xmlhttp.status == 204) {
				success(data);
			} else {
				data = data || "Connection problem";
				try {
					error(data, xmlhttp.status);
				} catch (e) {
					// swallow
				}
			}
		}
	}
	xmlhttp.send(requestData);
}

ns.setCookie = function(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/"
}

ns.deleteCookie = function(name) {
	ns.setCookie(name, "", -1)
}

ns.getCookie = function(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

ns.initYoutube = function() {
  var tag = document.createElement('script');
  tag.id = 'youtube-code';
  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);	
}

ns.onYoutubeApiReady = function(ids) {
	var i;
	ns.players = {}
	for (i = 0; i < ids.length; i++) {
		var id = ids[i]
		var player = new YT.Player(id, {
			events: {}
		});
		ns.players[id] = player
	}	
}

ns.openInNewTab = function(url) {
	window.open(url, '_blank')
}

ns.scrollIntoViewCore = function(parent, element) {
	var elementRect = element.getBoundingClientRect()
	var parentRect = parent.getBoundingClientRect()
	
	if (elementRect.top < parentRect.top || elementRect.bottom > parentRect.bottom) {
		var targetScroll = element.offsetTop - Math.floor(parentRect.height / 2)
		parent.scrollTop = targetScroll
	}	
}

ns.scrollIntoView = function(element) {
	if (!element) {
		return
	}
	var parent = element.parentNode
	ns.scrollIntoViewCore(parent, element)
}


ns.unfocus = function() {
	if (document.activeElement) {
		document.activeElement.blur()
	}
}

ns.isMobile = function() {
	if (!navigator || !navigator.userAgent) {
		return false
	}
	return navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)
}

// https://videlais.com/2014/03/16/the-many-and-varied-problems-with-measuring-font-height-for-html5-canvas/
function calculateFontSize(fontStyle, ignored) {
	var body = document.getElementsByTagName('body')[0];
	var dummy = document.createElement('div');

	var dummyText = document.createTextNode('M');
	dummy.appendChild(dummyText);
	dummy.setAttribute('style', fontStyle + ';position:absolute;top:0;left:0');
	body.appendChild(dummy);
	var result = dummy.offsetHeight;
	body.removeChild(dummy);
	return result
}

function calculateFontSizeCanvas(fontStyle, pxSize) {
	var fontDraw = document.createElement("canvas");
	fontDraw.width = pxSize * 2
	fontDraw.height = pxSize * 2
	var ctx = fontDraw.getContext('2d');
	ctx.fillRect(0, 0, fontDraw.width, fontDraw.height);
	ctx.textBaseline = 'top';
	ctx.fillStyle = 'white';
	ctx.font = fontStyle;
	ctx.fillText('Mg', 0, 0);
	var pixels = ctx.getImageData(0, 0, fontDraw.width, fontDraw.height).data;
	var start = -1;
	var end = -1;
	for (var row = 0; row < fontDraw.height; row++) 
	{
	  for (var column = 0; column < fontDraw.width; column++) 
	  {
		var index = (row * fontDraw.width + column) * 4;
		if (pixels[index] === 0) {
		  if (column === fontDraw.width - 1 && start !== -1) {
			end = row;
			row = fontDraw.height;
			break;
		  }
		  continue;
		}
		else 
		{
		  if (start === -1) 
		  {
			start = row;
		  }
		  break;
		}
	  }
	}
	var result = end - start;	
	return result
}


ns.fontFaces = {}

ns.fontFaceLoaded = function(face) {
	ns.fontFaces[face] = {}
}

ns.getFontHeight = function(face, size, font) {	
	var sizes = ns.fontFaces[face]
	if (!sizes) {
		return null
	}
	if (size in sizes) {
		return sizes[size]
	}
	var height = calculateFontSizeCanvas(font, size)
	sizes[size] = height
	return height
}

})(HtmlUtils, document, window);
