<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"></meta>
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"></meta>
<link rel="shortcut icon" href="/static/favicon.ico" />
<link rel="icon" type="image/png" href="/static/favicon.png" />

<title>DrakonHub</title>



<!-- Copyright 2018 DRAKON Labs -->

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

td {
	vertical-align: middle;
}
</style>

<style>

@font-face {
	font-family: 'Liberation Sans';
	src: url('/static/fonts/LiberationSans.ttf') format('truetype');
}

@font-face {
	font-family: 'Liberation Sans';
	src: url('/static/fonts/LiberationSans-Italic.ttf') format('truetype');
	font-style: italic;
}

@font-face {
	font-family: 'Liberation Sans';
	src: url('/static/fonts/LiberationSans-Bold.ttf') format('truetype');
	font-weight: bold;
}

@font-face {
	font-family: 'Liberation Sans';
	src: url('/static/fonts/LiberationSans-BoldItalic.ttf') format('truetype');
	font-style: italic;
	font-weight: bold;
}


body, select, input {
	font-family: 'Liberation Sans', Arial;
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
	margin: 5px;
	margin-top:30px;
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

.menu_item {
	cursor:pointer;
	
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;	
}

.menu_item:hover {
	background:black;

}

.menu_item:active {
	background:#000080;

}

a.white_link {
	color:DarkBlue;
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


#tooltip {
	position: absolute;
	background-color: #ffffdd;
	color: black;
	padding: 5px;
	border: solid 1px #909000;
	border-radius: 5px;
	white-space: nowrap;
}

.dumb {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.popup {
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
	border: solid 1px #808080;
}

.appearing {
	transition: opacity .25s ease-in-out, transform .25s;
	-moz-transition: opacity .25s ease-in-out, transform .25s;
	-webkit-transition: opacity .25s ease-in-out, transform .25s;
}


/* editor */
.toolbar {
	background: #f2f2f2;
	border-right: solid 1px #b0b0b0;
	overflow-y: auto;
}


.toolbox {
	border-collapse: collapse;
	margin-bottom: 5px;
	
}
.toolbox img {
	border: 1px solid #EEEEEE;
	vertical-align: middle;
	margin:3px;
	padding:0px;
	border-radius: 11px;
	box-shadow: 1px 1px 1px #c5c5c5;
	cursor: pointer;
	transition: box-shadow 0.3s;
}

.toolbox img:active {
	box-shadow: none;
	transform: translate(0px, 2px);
}

.dlg_button {
	display: block;
	background: #455A64;
	color:white;
	border-radius: 5px;
	padding: 10px;
	margin: 3px;
	text-align: center;
	cursor: pointer;
}

/* help */

.fixed_back {
	background-color: black;
	position: absolute;
    left: 0px;
    top: 0px;	
    height: 100%;
    width: 100%;
    opacity: 0.2;
    display: "none";
}

.right_aligned_dialog {
	background-color: white;
	position: absolute;
	top: 0px;
	right: 0px;
	width:580px;	
	max-height:100%;
	overflow-y: auto;
	overflow-x: hide;
}

h2.exp {
	font-weight: bold;
	font-size: 130%;
	text-align: center;
	margin:5px;
	margin-top:10px;
}

h3.exp {
	font-weight: bold;
	font-size: 110%;
	text-align: left;
	margin:5px;
	color:#455A64;
}

p.exp {
	margin: 5px;
	text-align:left;
}

table.exp td {
	padding:5px;
	line-height: 130%;
}

.exp_button {
	cursor: pointer;
}

.exp_button:active {
	transform: translate(0px, 2px);
}

a.nav_menu, a.nav_menu:visited {
	display: block;
	font-weight: bold;
	font-size: 110%;
	color: #BE2921;
	text-decoration:none;
	margin:10px;
	margin-left:30px;
	margin-right:30px;
	border-radius:5px;
	padding:0px;
	text-align:center;
	padding-top:10px;
	padding-bottom:10px;
	border: solid 2px #BE2921;
}

a.nav_menu:hover {
	color: white;
	background: #BE2921;
}


/* Panic */
.panic_button {
	display: block;
	background: #455A64;
	color:white;
	border-radius: 5px;
	padding: 10px;
	margin: 10px;
	text-align: center;
	cursor: pointer;
}

.panic_button:active {
	transform: translate(0px, 2px);
}

.common_button:active {
	transform: translate(0px, 2px);
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    white-space: nowrap;	
}

.no_under {
	text-decoration: none;
}


.big_picture_button {
	border: solid Silver;
	cursor: pointer;
	text-align: center;
}

.big_picture_button:hover {
	border: solid #455A64;
}

.big_picture_button:active {
	transform: translate(0px, 2px);
}

input[type=checkbox] {
  -ms-transform: scale(1.7); /* IE */
  -moz-transform: scale(1.7); /* FF */
  -webkit-transform: scale(1.7); /* Safari and Chrome */
  -o-transform: scale(1.7); /* Opera */
}

.disabled_button {
	display: block;
	background: grey;
	color:white;
	border-radius: 5px;
	padding: 10px;
	margin: 0px;
	text-align: center;
	cursor: default;
	
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    white-space: nowrap;		
}

.default_button {
	display: block;
	background: coral;
	color:white;
	border-radius: 5px;
	padding: 10px;
	margin: 0px;
	text-align: center;
	cursor: pointer;
}

.default_button:active {
	transform: translate(0px, 2px);
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    white-space: nowrap;	
}

</style>

% if carrot then
<!-- CarrotQuest BEGIN -->
<script type="text/javascript">
    (function(){
      function Build(name, args){return function(){window.carrotquestasync.push(name, arguments);} }
      if (typeof carrotquest === 'undefined') {
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true;
        s.src = '//cdn.carrotquest.io/api.min.js';
        var x = document.getElementsByTagName('head')[0]; x.appendChild(s);
        window.carrotquest = {}; window.carrotquestasync = []; carrotquest.settings = {};
        var m = ['connect', 'track', 'identify', 'auth', 'open', 'onReady', 'addCallback', 'removeCallback', 'trackMessageInteraction'];
        for (var i = 0; i < m.length; i++) carrotquest[m[i]] = Build(m[i]);
      }
    })();
  carrotquest.connect('16683-d288f87c6be486b5993543ef12');
</script>
<!-- CarrotQuest END -->

<script>
carrotquest.onReady(function () { carrotquest.removeChat(); });
</script>

% end

</head>

<body style="overflow:hidden;">


<div id="loading" class="full_screen" style="background:white;">
	<div style="width:160px; position:absolute; left:calc(50% - 80px); top:calc(50vh - 97px);">
		<img src="/static/images/drakosha-loading.png" width="160" width="160"></img>
		<div style="color:#FF817D; text-align:center; font-size:25px;"><%=trans("loading")%></div>
	</div>
</div>

<canvas id="exportCanvas" style="display:none;"></canvas>

<div id="wide" style="display:none;">
</div>

<div id="central" style="display: none;"></div>

<div id="dialog"></div>

<div id="tooltip" style="display: none;">
</div>

<div id="popup" style="display: none; cursor:pointer;">
	<table>
		<tr>
			<td id="popup_text" style="padding:10px;"></td>
			<td id="popup_close" style="padding: 10px;"><%=trans("Close")%></td>
		</tr>
	</table>
</div>

<div id="demo" style="display:none;z-index:30;">
</div>

<div id="help_wide" style="position:absolute; left:0px; top:0px; width:100%; height:100%; display:none; font-size: 12pt; z-index:30;">
	<div class="fixed_back" onclick="ide.hideHelp()"></div>
	<div class="right_aligned_dialog screen_high">		

		<div style="display:inline-block; position:absolute; right:0px; top:0px;">
			<img class="exp_button" src="/static/images/cross.png" width="26" height="26" onclick="ide.hideHelp()" class="common_button" style="background: #455A64;"/>
		</div>

		<table>
			<tr>
				<td style="vertical-align:top;">
					<h2 class="exp"><%=trans("MES_HOW_TO_SCROLL")%></h2>
					<table>
						<tr>
							<td>
								<img src="/static/images/double-swipe.png" width="93" height="126" />
							</td>
							<td style="padding-right:20px;">
								<h3 class="exp"><%=trans("MES_ON_MOBILE")%></h3>
								<p class="exp"><%=trans("MES_SWIPE_2")%></p>
							</td>
						</tr>
						<tr>
							<td>
								<img src="/static/images/middle-mouse.png" width="93" height="115" />
							</td>
							<td style="padding-right:20px;">
								<h3 class="exp"><%=trans("MES_WITH_MOUSE")%></h3>
								<p class="exp"><%=trans("MES_DRAG_MOUSE")%></p>
								<p class="exp"><%=trans("MES_DRAG_MOUSE_ALT")%></p>
							</td>
						</tr>	
					</table>
				</td>
				<td style="vertical-align:top; padding-right:40px;">
					<div class="drakon_only">
						<h2 class="exp"><%=trans("MES_SHORTCUTS")%></h2>
						<table class="exp">
							<tr><td>A</td><td><%=trans("MES_INSERT_ACTION")%></td></tr>
							<tr><td>Q</td><td><%=trans("MES_INSERT_QUESTION")%></td></tr>
							<tr><td>L</td><td><%=trans("MES_INSERT_LOOP")%></td></tr>
							<tr><td>N</td><td><%=trans("MES_INSERT_INSERTION")%></td></tr>
							<tr><td>F</td><td><%=trans("MES_INSERT_SHELF")%></td></tr>
							<tr><td>M</td><td><%=trans("MES_INSERT_COMMENT")%></td></tr>
							<tr><td>S</td><td><%=trans("MES_INSERT_SELECT")%></td></tr>
							<tr><td>C</td><td><%=trans("MES_INSERT_CASE")%></td></tr>
							<tr><td>B</td><td><%=trans("MES_INSERT_BRANCH")%></td></tr>
						</table>
					</div>
				</td>
			</tr>
		</table>
		
		<h2 class="exp"><%=trans("MES_DID_YOU_KNOW")%></h2>
		<p class="exp"><%=trans("MES_YOU_CAN_COPY_BETWEEN")%></p>
		<div class="drakon_only">
			<h2 class="exp"><%=trans("MES_ABOUT_DRAKON")%></h2>
			<p><a href="https://drakonhub.com/drakon"><%=trans("title-drakon")%></a></p>
			<p><a href="https://drakonhub.com/how-to-flowchart"><%=trans("title-how-to-flowchart")%></a></p>
			<p><a href="https://drakonhub.com/drakon-reference"><%=trans("title-drakon-reference")%></a></p>
			<p><a href="https://drakonhub.com/video-how-to-flowchart"><%=trans("title-video-how-to-flowchart")%></a></p>
			<p><a href="https://drakonhub.com/drakon-examples"><%=trans("title-drakon-examples")%></a></p>
		</div>
		<div class="mind_only">
			<h2 class="exp"><%=trans("Mind maps")%></h2>
			<p><a href="https://drakonhub.com/how-to-mind-map"><%=trans("title-how-to-mind-map")%></a></p>
			<p><a href="https://drakonhub.com/video-how-to-mind-map"><%=trans("title-video-how-to-mind-map")%></a></p>
		</div>	
	</div>
</div>

<div id="help_narrow" style="position:absolute; left:0px; top:0px; width:100%; height:100%; display:none; font-size: 12pt; background:white;">
	<div style="text-align:right">
		<img class="exp_button" src="/static/images/cross.png" width="26" height="26" onclick="ide.hideHelp()" class="common_button" style="background: #455A64;"/>
	</div>

	<h2 class="exp"><%=trans("MES_HOW_TO_SCROLL")%></h2>
	<table>
		<tr>
			<td>
				<img src="/static/images/double-swipe.png" width="93" height="126" />
			</td>
			<td style="padding-right:20px;">
				<h3 class="exp"><%=trans("MES_ON_MOBILE")%></h3>
				<p class="exp"><%=trans("MES_SWIPE_2")%></p>
			</td>
		</tr>
	</table>

	<h2 class="exp"><%=trans("MES_DID_YOU_KNOW")%></h2>
	<p class="exp"><%=trans("MES_YOU_CAN_COPY_BETWEEN")%></p>

	<div class="drakon_only">
		<h2 class="exp"><%=trans("MES_ABOUT_DRAKON")%></h2>
		<p><a href="https://drakonhub.com/drakon"><%=trans("title-drakon")%></a></p>
		<p><a href="https://drakonhub.com/how-to-flowchart"><%=trans("title-how-to-flowchart")%></a></p>
		<p><a href="https://drakonhub.com/drakon-reference"><%=trans("title-drakon-reference")%></a></p>
		<p><a href="https://drakonhub.com/video-how-to-flowchart"><%=trans("title-video-how-to-flowchart")%></a></p>
		<p><a href="https://drakonhub.com/drakon-examples"><%=trans("title-drakon-examples")%></a></p>
	</div>	
	
	<div class="mind_only">
		<h2 class="exp"><%=trans("Mind maps")%></h2>
		<p><a href="https://drakonhub.com/how-to-mind-map"><%=trans("title-how-to-mind-map")%></a></p>
		<p><a href="https://drakonhub.com/video-how-to-mind-map"><%=trans("title-video-how-to-mind-map")%></a></p>
	</div>		
</div>


<div id="working" class="full_screen abs" style="text-align:center; display:none; zIndex:80;">
	<div style="display:inline-block; background:white; padding:10px; margin-top:45vh; border: solid 1px grey;"><%=trans("working")%></div>
</div>

<div id="panic" class="full_screen" style="display:none; background:white;">
	<div style="width:300px; position:absolute; left:calc(50% - 150px); top:calc(50vh - 97px); text-align:center;">
		<div id="panic_message" style="margin-bottom:30px; text-align:center; padding:5px;"></div>

		<div style="display:inline-block;">
			<div class="panic_button" onclick="window.location.reload()" ><%=trans("dia_reload")%></div>
			<div class="panic_button" onclick="window.history.back()" ><%=trans("dia_back")%></div>
			<a href="/ide/dashboard" class="no_under" id="panicDashboard" style="display:none;"><div class="panic_button" style="background:coral;"><%=trans("dia_home")%></div></a>
			<a href="/" class="no_under" id="panicHome" style="display:none;"><div class="panic_button" style="background:coral;"><%=trans("dia_home")%></div></a>
		</div>

	</div>
</div>

<%==include("CallTrace")%>
<%==include("HtmlUtils")%>

<script>

var gUserId = "<%=user_id%>"
gUserId = gUserId || null


var pagePanic = function(text) {
	window.onbeforeunload = null
	HtmlUtils.hide("loading")
	HtmlUtils.hide("wide")
	HtmlUtils.hide("working")
	HtmlUtils.hide("popup")
	if (gUserId) {
		HtmlUtils.show("panicDashboard", "block")
	} else {
		HtmlUtils.show("panicHome", "block")
	}
	HtmlUtils.show("panic", "inline-block")
	document.getElementById("panic").style.zIndex = 1000
	HtmlUtils.setText("panic_message", text)		
}

window.onerror = pagePanic

</script>


<script src="/static/libs/mousetrap.js"></script>
<script src="/static/libs/fontfaceobserver.js"></script>

<%==include("Logon")%>
<%==include("Signup")%>

<%==include("Nav")%>
<%==include("ContextMenu")%>
<%==include("InputBox")%>
<%==include("ToolTip")%>
<%==include("Popup")%>

<%==include("Config")%>
<%==include("DTools")%>
<%==include("Utils")%>
<%==include("Theme")%>
<%==include("TabGen4")%>
<%==include("Multitouch")%>
<%==include("PhysicalGraph")%>
<%==include("Items")%>
<%==include("Drakon")%>
<%==include("Mind")%>
<%==include("ViewWidget")%>
<%==include("Canvas")%>
<%==include("Editor")%>
<%==include("Behaviour")%>

<%==include("EditorCtrl")%>
<%==include("DraWidgets")%>
<%==include("browser")%>
<%==include("Ide3")%>
<%==include("Ide3Logic")%>

<script src="/static/libs/canvas2svg.js"></script>

<script>

var gLanguage = "<%=language%>"

var ServerVars = {
	isTrial: false,
	hadTrial: false,
	currentPlan: "<%= current_plan   %>",
	userId: "<%= user_id  %>",
	userName: "<%= user_name %>"
}

% if is_trial then
ServerVars.isTrial = true
% end

% if had_trial then
ServerVars.hadTrial = true
% end

% if use_capture then
var gUseCapture = true
% else
var gUseCapture = false
% end

var overlayOn = false
var overlayItems = []

% if debug then
document.getElementById("overlay").style.display = "inline-block"
DTools.enableDebugLog("overlay", "right", 30)
% end

% if on_premises then
var onPremises = true
% else
var onPremises = false
% end

% if application then
var application = "<%=application%>"
% else
var application = ""
% end

var strings = <%==messages%>
function translate(text) {
	if (text in strings) {
		return strings[text]
	}
	return text
}


var onCaptureLoadCallback = null

var ide = null
var logic = null

if (HtmlUtils.isBrowserSupported()) {
	
	ide = new Ide3(window, document, translate, gUserId, pagePanic)
	logic = new Ide3Logic(gUserId, ide, translate)
	ide.logic = logic
	
	
	window.onerror = ide.onError
	
	onCaptureLoadCallback = function() {
		ide.onCaptureLoadCallback(grecaptcha)
	}

	window.onpopstate = function (e) {
		if (e.state) {
			ide.onStateChange(e)	
		}
	}

	window.onresize = ide.orderResize	
	
	window.onmouseout = function(evt) { evt.preventDefault() }
	
	ide.init()
	
} else {
	HtmlUtils.hide("loading")
	HtmlUtils.show("panic", "block")
	var message = translate("ERR_BROWSER_NOT_SUPPORTED")
	HtmlUtils.setText("panic_message", message)
}


</script>

</body>
</html>
