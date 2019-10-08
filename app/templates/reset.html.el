<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"></meta>
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<meta name="Description" content="<%=trans('MES_RESET_DESCR')%>"></meta>

% if on_premises then
<link rel="shortcut icon" href="/static/branding132.ico" />
<link rel="icon" type="image/png" href="/static/branding132.png" />
% else
<link rel="shortcut icon" href="/static/favicon.ico" />
<link rel="icon" type="image/png" href="/static/favicon.png" />
% end

<title><%=application%> - <%=trans("page_reset")%></title>



<style>
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
/* -- end of reset.css -- */

</style>



<style>

@font-face {
	font-family: 'Ubuntu';
	src: url('/static/fonts/Ubuntu-Regular.ttf') format('truetype');
}

@font-face {
	font-family: 'Ubuntu';
	src: url('/static/fonts/Ubuntu-Italic.ttf') format('truetype');
	font-style: italic;
}

@font-face {
	font-family: 'Ubuntu';
	src: url('/static/fonts/Ubuntu-Bold.ttf') format('truetype');
	font-weight: bold;
}

@font-face {
	font-family: 'Ubuntu';
	src: url('/static/fonts/Ubuntu-BoldItalic.ttf') format('truetype');
	font-style: italic;
	font-weight: bold;
}

body, select {
	font-family: Ubuntu, Arial;
	font-size: 11pt;
}

.redText {
	color: #BE2921;
}

strong {
	font-weight: bold;
}

p {
	margin:10px;
	line-height: 130%;
	text-align: justify;
}

h3 {
	text-align: center;
	color: #BE2921;
	font-size:140%;
	font-weight:bold;
	margin-top:10px;
}

.advantage {
	text-align: center;
	color: #BE2921;
}

.bigButton {
	font-size: 110%;
	font-weight: bold;
	display: inline-block;
	padding:20px;
	margin: 10px;
	border-radius: 30px;
	width:160px;
	cursor: pointer;
}

div.bigButton:active {
	border: 2px solid #BE2921;
	background: #ffd0c0;
	color: #BE2921;	
}

.startDrawing {
	border: 2px solid white;
	background: white;
	color: #BE2921;
}

.registerNow {
	border: 2px solid white;
	color: white;
}

.startDrawing2 {
	border: 2px solid #BE2921;
	background: #BE2921;
	color: white;
}

.registerNow2 {
	border: 2px solid #BE2921;
	color: #BE2921;
}



.topMenuItem {
	color: #BE2921;
	display: inline-block;
	padding:4px 9px 4px 9px;
	margin: 10px 2px 10px 0px;
	border-radius: 18px;
	border: 1px solid white;
	cursor: pointer;
}

.topButton {
	background: white;
	color: #BE2921;
	border: 1px solid #BE2921;
}

.selectedTopMenuItem {
	background: #BE2921;
	color: white;
	border: 1px solid #BE2921;
}

div.topMenuItem:hover {
	background: #BE2921;
	color: white;
	border: 1px solid #BE2921;
}


.center {
	margin:auto;
}

.whiteCell {
	padding: 40px 0px 40px 0px;
}

.overArrow {
	background:black;
	opacity:0.0;
	width:100%;
	height:100%;
}

div.overArrow:hover {
	opacity:0.2;
}

div.overArrow:active {
	opacity:0.5;
}

table.form_table td {
	padding: 5px;
}

input {
	font-family: Ubuntu, Arial;
	font-size: 12pt;
	width: 300px;
}

</style>

</head>


<body style="background:white;">
<div style="margin-bottom:20px">
% if on_premises then	
	<a href="/"><img src="/static/branding-text-img-s.png" width="185" height="40" /></a>	
% else
	<a href="/"><img src="/static/logo-text-img-s.png" width="185" height="40" alt="<%=application%>" /></a>
% end
	<h1 style="font-weight:bold; font-size:120%; display:inline"><%=trans("reset password")%></h1>
</div>

% if on_premises then

<p>Please contact your administrator to reset your password.</p>
% else

<div id="ui">
	<div style="margin:10px; margin-left:5px;">
		<label for="userIdEmail"><%=trans("user name or email")%></label><br />
		<input id="userIdEmail" type="text"/>
	</div>
	
	<p style="margin:5px;"><%=trans("reset explain")%></p>
	<div class="topMenuItem selectedTopMenuItem" style="margin-left:5px;" onclick="ctrl.reset()"><%=trans("reset password")%></div>
</div>	
<a id="home" href="/">
	<div class="topMenuItem" style="margin-left:5px;"><%=trans("home")%></div>
</a>

<p id="message" style="margin:10px; margin-top:20px; display:none;"></p>

<div id="logon" style="display:none;">
	<a href="/logon">
		<div class="topMenuItem" style="margin-left:5px;"><%=trans("login_new")%></div>
	</a>
</div>
% end


<%==include("HtmlUtils")%>
<script type="text/javascript">
var strings = <%==messages%>
function translate(text) {
	if (text in strings) {
		return strings[text]
	}
	return text
}


function ResetCtrl() {

	function get(id) {
		return document.getElementById(id)
	}

	function getId() {
		var input = get("userIdEmail")
		var value = input.value || ""
		return value.trim()
	}

	function setDisplay(id, display) {
		var ui = get(id)
		ui.style.display = display
	}


	function showMessage(message) {
		var m = translate(message)
		setDisplay("message", "block")
		HtmlUtils.setText("message", m)
	}

	function onSuccess(data) {
		setDisplay("ui", "none")
		setDisplay("home", "none")
		var pre = translate("MES_RESET_SUCCESS")
		var message = pre
		setDisplay("message", "block")
		setDisplay("logon", "block")
		HtmlUtils.setText("message", message)
	}

	function onError() {
		setDisplay("ui", "block")
		showMessage("MES_RESET_FAIL")
	}


	this.reset = function() {

		HtmlUtils.setText("message", "")
		var id = getId()
		if (!id) {
			showMessage("ERR_ID_EMAIL_EMPTY")
		} else {
			setDisplay("ui", "none")
			showMessage("MES_WORKING")
			var body = {
				user_email: id
			}
			HtmlUtils.sendPost("/api/reset_pass", body, onSuccess, onError)
		}
	}
}

var ctrl = new ResetCtrl()
</script>

</body>
