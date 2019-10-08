<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"></meta>
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

<link rel="shortcut icon" href="/static/favicon.ico" />
<link rel="icon" type="image/png" href="/static/favicon.png" />

<title><%=trans("unsubscribe")%></title>



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



.redHand {
    background-image: url('/static/red-hand.jpg');
    background-repeat: no-repeat;
    background-position: center; 
	height: 523px;
	background-color:#B6271F;
	text-align:center;
}

.redBack1 {
    background-image: url('/static/fon-1.jpg');
    background-repeat: no-repeat;
    background-position: center; 
	height: 507px;
	background-color:#AE251D;
	text-align:center;
}

.redBack2 {
    background-image: url('/static/fon-2.jpg');
    background-repeat: no-repeat;
    background-position: center; 
	height: 274px;
	background-color:#AE251D;
	text-align:center;
}

.greyBack1 {
    background-image: url('/static/fon-3-1.jpg');
    background-repeat: no-repeat;
    background-position: center; 
	height: 340px;
	background-color:#F3F2EE;
	text-align:center;
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

input[type=checkbox]
{
  /* Double-sized Checkboxes */
  -ms-transform: scale(1.5); /* IE */
  -moz-transform: scale(1.5); /* FF */
  -webkit-transform: scale(1.5); /* Safari and Chrome */
  -o-transform: scale(1.5); /* Opera */
 
}

</style>

</head>


<body style="background:white;">

<a href="/"><img src="/static/logo.png" width="80" height="40" id="logo"></img></a>
<br />
<h1 style="margin:20px;color:black;font-weight:bold;"><%=trans("unsubscribe from emails")%></h1>

<div id="before">
	<p><%==trans("explain unsubscribe")%></p>
	<div class="topMenuItem selectedTopMenuItem" style="margin-left:5px;" onclick="ctrl.unsubscribe()"><%=trans("unsubscribe")%></div>
</div>

<p id="after" style="display:none;"></p>

<a href="/"><div class="topMenuItem" style="margin-left:5px;"><%=trans("home")%></div></a>
<p id="message"></p>

<%==include("HtmlUtils")%>
<script>

function CodeBehindUnsubscribe(window, document) {

var strings = <%==messages%>
function translate(text) {
	if (text in strings) {
		return strings[text]
	}
	return text
}


function showMessage(message) {
	HtmlUtils.setText("message", message)
}

function errorText(data) {
	if (data.error) {
		return data.error
	}
	return "ERR_ERROR"
}

function unsubscribe() {
	get("before").style.display = "none"
	HtmlUtils.setText("message", translate("MES_WORKING"))

	function success() {
		get("message").style.display = "none"
		
		get("after").style.display = "block"
		
		HtmlUtils.setText("after", translate("MES_UNSUB_SUCCESS"))
	}

	function error(data) {
		var message = translate(errorText(data))
		showMessage(message)
	}

	var path = window.location.pathname
	var parts = path.split("/")
	var unid = parts[parts.length - 1]
	var userId = parts[parts.length - 2]
	var data = {
		unsubscribe_id: unid,
		user_id: userId
	}


	HtmlUtils.sendPost("/api/unsubscribe", data, success, error)

}

function get(id) {
	return document.getElementById(id)
}

function getValue(id) {
	return get(id).value || ""
}

function setValue(id, value) {
	console.log("setValue", id, value)
	get(id).value = value
}




this.unsubscribe = unsubscribe



}

var ctrl = new CodeBehindUnsubscribe(window, document)

</script>

</body>

