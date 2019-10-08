<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<link rel="shortcut icon" href="/static/favicon.ico" />
<link rel="icon" type="image/png" href="/static/favicon.png" />



<title><%=trans("Get started")%></title>

<!-- Copyright 2015-2018 DRAKON Labs -->

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


body, select, input, h1, h2, h3, p, ul, ol, a {
	font-family: Ubuntu, Arial;
}

body, select, input {
	font-size: 13pt;
}

strong {
	font-weight: bold;
}

p {
	margin:10px;
	line-height: 130%;
	text-align: justify;
}

h1 {
	text-align: center;	
	font-size:120%;
	font-weight:bold;
}

h3 {
	text-align: left;
	color: #455A64;
	font-size:100%;
	font-weight:bold;
	margin: 5px;
	margin-top:30px;
}

.center {
	margin:auto;
}

.full_screen {
	width:100%;
	height:100vh;
	position: absolute;
	left:0px;
	top:0px;
}

.abs {
	position:absolute;
	left:0px;
	top:0px;
	display:none;
}


.common_button {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
}

.common_button:active {
	transform: translate(0px, 2px);
}

.list_item {
	cursor:pointer;
	
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;	
}

.list_item:hover {
	background:#E2EDF5;
	color:black;
}

.list_item:active {
	background:silver;
	color:black;
}

.list_item_marked {
	background: #B6DBF6;
	color:black;
	cursor: pointer;
}

.list_item_marked:hover {
	background:#E2EDF5;
	color:black;
}

.list_item_marked:active {
	background:silver;
	color:black;
}

.black_hover:hover {
	background:#455A64;
}

.internal_button {
	background:#455A64;
	color: white;
	text-align: center;
	padding:3px;
	border-radius:4px;
}

ul {
    list-style-type: disc;
    margin:10px;
    padding-left:30px;
}

ul li {
	display: list-item;
	line-height: 130%;
	text-align: left;
}

#tooltip {
	position: absolute;
	background-color: #ffffdd;
	color: black;
	padding: 5px;
	border: solid 1px #909000;
	border-radius: 5px;
	white-space: nowrap;
}

.why_hive {
	width:100%;
	padding-bottom:0px;
	column-count: 1;
	-moz-column-count: 1;
	-webkit-column-count: 1;
}

.why {
	display: inline-block;
	border: none;
	width: 380px;
	vertical-align: top;
}

.whys {
	display: block;
	border: none;
	vertical-align: top;
	
	-webkit-column-break-inside:avoid;
	-moz-column-break-inside:avoid;
	-o-column-break-inside:avoid;
	-ms-column-break-inside:avoid;
	column-break-inside:avoid;
}

.whys2 {
	display: block;
	border: none;
	vertical-align: top;
	margin-bottom:10px;
}

.why_bullet {
	vertical-align:middle; text-align:center; width:35px;
	padding-left:10px;	
}

.whys2 td {
	text-align: justify;
	padding:0px;
}


.why_header {
	color: black;
	font-weight: bold;
	font-size: 130%;
	margin:5px;
	line-height: 110%;
	text-align:left;
}

.why_body {
	color: black;
	margin:5px;
	line-height: 130%;
}

.why_header2 {
	color: black;
	font-weight: bold;
	font-size: 130%;
	margin:5px;
	line-height: 110%;
}

.why_body2 {
	color: black;
	margin:5px;
	line-height: 130%;
}

.textMenuItem {
	color: #990000;
}

.textMenuItemSelected {
	color: #990000;
	font-weight: bold;
}


.list_item {	
	cursor:pointer;
	color:#990000;
}

.list_item:hover {
	background:#E2EDF5;
	color:black;
}

.list_item:active {
	background:silver;
	color:black;
}

.popup {
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
	border: solid 1px #808080;
}

.scenery {
	height:700px;
	background-image:url('/static/explaining.jpg');
	background-position: center;
	background-repeat:no-repeat;
	background-size:auto 100%;	
	background-position: right;
}

.scenery_mob {
	height:300px;
	background-image:url('/static/explaining-s.jpg');
	background-position: center;
	background-repeat:no-repeat;
	background-size:auto auto;		
}

h2 {
	font-weight: bold;
	font-size: 160%;
	color: #990000;
	text-align:center;
	margin-top: 30px;
	margin-bottom: 20px;
}

h1 {
	font-weight: bold;
	font-size: 180%;
	color: black;
	text-align:center;
	margin-top: 30px;
	margin-bottom: 20px;
}

.example_hive {
	text-align: center;
}

.example_item {
	display: inline-block;
	margin:5px;
	border: solid 1px #d0d0ff;
}

.example_item:hover {
	border: solid 1px #000090;
}


.mobile_only {
	display: block;
}

.desktop_only {
	display: none;
}

.wide {
	width: 100%;
	margin: 0px;
}

@media (min-width: 700px) {
	.mobile_only {
		display: none;
	}

	.desktop_only {
		display: block;
	}	
}

@media (min-width: 1000px) {
	.wide {
		width: 1000px;
		margin: auto;
	}
	
	.why_hive {
		column-count: 2;
		-moz-column-count: 2;
		-webkit-column-count: 2;
	}
	.scenery {
		
		background-position: center;
		background-size:100% auto;	
	}	
}

</style>

</head>

<body style="background:white;">

<div itemscope itemtype="http://schema.org/SoftwareApplication" class="" id="ui">

	<div class="desktop_only">
		<div id="menu01" style="height:40px;" class="wide">
			<img src="/static/logo-text-img-s.png" width="185" height="40" alt="DrakonHub" />
		</div>
	</div>
	
	<div class="mobile_only">
		<div id="menu02" style="height:40px;" class="wide">
			<img src="/static/logo-text-img-s.png" width="185" height="40" alt="DrakonHub" />
		</div>
	</div>	
	
	<div class="wide">
		<h1><%=trans("Get started")%></h1>
		<h2><%=trans("Choose a diagram")%></h2>
		<div class="example_hive" id="example_hive">
							
		</div>
	</div>
</div>	

<div id="mobile_menu" style="display:none;">

</div>


<div id="cookie_warning" style="display:none; position:fixed; left:0px; bottom:0px; width:100%; background:#800000; color:white;">
	<table style="width:100%">
		<tr>
			<td style="padding:5px; vertical-align:middle;">
				<div class="common_button" style="text-align:center; margin:0px; padding:3px; color:#990000; background:white; border-radius:3px;" onclick="code.acceptCookies()"><%=trans("okay")%></div>
			</td>
			<td style="padding:5px 5px 5px 0px; vertical-align:middle;">
<span style="color:white;"><%==trans("explain_cookies")%></span>
			</td>
		</tr>
	</table>
</div>


<div id="dialog"></div>
<div id="tooltip" style="display: none;"></div>




<script src="/static/libs/fontfaceobserver.js"></script>
<%==include("Logon")%>

<%==include("DTools")%>
<%==include("Utils")%>
<%==include("ToolTip")%>
<%==include("TabGen4")%>
<%==include("DraWidgets")%>
<%==include("HtmlUtils")%>
<%==include("Nav")%>
<%==include("Main")%>


<script>

var examples = [
	{
		url: "/try-me?example=example01",
		image: "qexp01-good-day.png",
		ex: "/ide/doc/examples/45"
	},
	{
		url: "/try-me?example=example02",
		image: "qexp02-go-out.png",
		ex: "/ide/doc/examples/34"
	},
	{
		url: "/try-me?example=example03",
		image: "qexp03-buy-puppy.png",
		ex: "/ide/doc/examples/35"
	},
	{
		url: "/try-me?example=example12",
		image: "qexp12-layout.png",
		ex: "/ide/doc/examples/66"
	},	
	{
		url: "/try-me?example=example04",
		image: "qexp04-work-out-until.png",
		ex: "/ide/doc/examples/44"
	},
	{
		url: "/try-me?example=example05",
		image: "qexp05-work-out-while.png",
		ex: "/ide/doc/examples/22"
	},
	{
		url: "/try-me?example=example06",
		image: "qexp06-work-out-repeat.png",
		ex: "/ide/doc/examples/23"
	},
	{
		url: "/try-me?example=example07",
		image: "qexp07-park.png",
		ex: "/ide/doc/examples/21"
	},
	{
		url: "/try-me?example=example08",
		image: "qexp08-drunk-driving.png",
		ex: "/ide/doc/examples/24"
	},
	{
		url: "/try-me?example=example09",
		image: "qexp09-lunch.png",
		ex: "/ide/doc/examples/26"
	},
	{
		url: "/try-me?example=example10",
		image: "qexp10-facebook.png",
		ex: "/ide/doc/examples/33"
	},
	{
		url: "/try-me?example=example11",
		image: "qexp11-luhn.png",
		ex: "/ide/doc/examples/40"
	}
]



var gLanguage = "<%=language%>"
var gUserId = "<%=user_id%>"


var overlayOn = false
var overlayItems = []

% if debug then
document.getElementById("overlay").style.display = "inline-block"
DTools.enableDebugLog("overlay", "right", 30)
% end


var onPremises = false

var strings = <%==messages%>
function translate(text) {
	if (text in strings) {
		return strings[text]
	}
	return text
}

var gLanguage = "<%=language%>"

% if url_language ~= "" then
HtmlUtils.setCookie("language", "<%=url_language%>")
% end

var code = new Main(window, document, gUserId, translate, gLanguage, "started")

Nav.stateCallback = code.stateCallback

window.onresize = code.onResize
window.onpopstate = Nav.onStateChange

code.onLoad()
code.putExamples("example_hive", examples)

function onWindowLoaded() {
	window.setTimeout(code.onResize, 50)
}

window.onload = onWindowLoaded

</script>

</body>
</html>
