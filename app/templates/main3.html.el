<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<meta name="yandex-verification" content="" />
<meta name="Description" content="<%=trans('MES_META_DESC')%>"/>

<link rel="shortcut icon" href="/static/favicon.ico" />
<link rel="icon" type="image/png" href="/static/favicon.png" />
<link rel="alternate" hreflang="x-default" href="https://drakonhub.com" />
<link rel="alternate" hreflang="en" href="https://drakonhub.com/en" />
<link rel="alternate" hreflang="ru" href="https://drakonhub.com/ru" />



<title><%=trans("MES_TITLE")%></title>

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

@font-face {
	font-family: 'Ubuntu';
	src: url('/static/fonts/Ubuntu-BoldItalic.ttf') format('truetype');
	font-style: italic;
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

b {
	font-weight: bold;
}

.what_is {
	font-weight: bold;
	font-size: 160%;
	color: #990000;
	text-align:center;
	margin-top: 30px;
}

.what_is_body {
	font-size: 120%;
	text-align: left;
}


ul {
    list-style-type: disc;
    margin:10px;
    padding-left:30px;
}


ol {
    list-style-type: decimal;
    margin:10px;
    padding-left:30px;
}

ol li ol {
    list-style-type: lower-alpha;
}

ol li {
	display: list-item;
	line-height: 130%;
	text-align: justify;
	text-align: left;
}


.scenery {
	height:600px;
	background-image:url('/static/explaining.jpg');
/*	background-image:url('/static/brun01.jpg'); */
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

a.more {
	display: inline-block;
	background: white;
	color:#990000;
	border:solid 3px #990000;
	border-radius: 6px;
	padding:10px;
	text-decoration:none;
	margin:10px;	
	min-width:250px;
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
		


<!--

		<div class="scenery"></div>
		<div style="position:absolute; top:40px; width:100%; height:700px;">
			<div>
				<div style="text-align:center;margin-top:250px; ">
					<h1 style="display:inline-block; background-color:rgba(255, 255, 255, 0.8); padding:10px; font-weight:normal; font-size:190%;"><%=trans('How to explain')%></h1>
				</div>
				<div style="display:inline-block; background:white; opacity:0.6; width:100%; height:250px; position:absolute; top:450px;"></div>
				<div style="display:inline-block; position:absolute; top:460px; width:100%; text-align:center;">
					<h2 style="font-size:150%; font-weight:normal; line-height:120%; margin-top:40px;"><%==trans('Just draw')%></h2>
					<div class="common_button" style="margin:auto; margin-top:30px; text-align:center;">
	% if user_id == "" then					
						<a href="/docs/start" style="text-decoration:none; font-size:210%; font-weight:bold; color:white; background:#990000; border-radius:10px; padding:10px; padding-left:40px; padding-right:40px;"><%=trans('Start')%></a>
	% else
						<a href="/ide/dashboard" style="text-decoration:none; font-size:210%; font-weight:bold; color:white; background:#990000; border-radius:10px; padding:10px; padding-left:40px; padding-right:40px;"><%=trans('Documents')%></a>
	% end					
					</div>
				</div>
			</div>			
		</div>	
-->



		<div class="scenery">
			<div style="background-color:rgba(255, 255, 255, 0.7); height:600px;">
					<div style="height:200px;"></div>
					<div style="text-align:center;margin-top:0px; ">
						<h1 style="display:inline-block; padding:10px; font-weight:normal; font-size:210%;"><%=trans('How to explain')%></h1>
					</div>

					<div style="text-align:center; margin-top:90px;">
						<h2 style="font-size:150%; font-weight:normal; line-height:120%; margin-top:40px;"><%==trans('Just draw')%></h2>
						<div class="common_button" style="margin:auto; margin-top:30px; text-align:center;">
		% if user_id == "" then					
							<a href="/docs/start" style="text-decoration:none; font-size:210%; font-weight:bold; color:white; background:#990000; border-radius:10px; padding:10px; padding-left:40px; padding-right:40px;"><%=trans('Start')%></a>
		% else
							<a href="/ide/dashboard" style="text-decoration:none; font-size:210%; font-weight:bold; color:white; background:#990000; border-radius:10px; padding:10px; padding-left:40px; padding-right:40px;"><%=trans('Documents')%></a>
		% end					
						</div>
					</div>

			</div>	
		</div>
		
		
	</div>

	<div class="mobile_only">
		<div id="menu02" style="height:40px;" class="wide">
			<img src="/static/logo-text-img-s.png" width="185" height="40" alt="DrakonHub" />
		</div>
		<h1 style="background:#f0f0f0; padding:10px; margin-top:0px; font-weight:normal; font-size:190%;"><%=trans('How to explain')%></h1>
		<div class="scenery_mob"></div>
		<div style="background:#f0f0f0; padding-bottom:30px;">
			<h2 style="padding:10px; font-size:150%; font-weight:normal; line-height:120%; margin-top:0px; text-align:center;"><%==trans('Just draw')%></h2>
			<div class="common_button" style="margin:auto; margin-top:10px; text-align:center;">
	% if user_id == "" then					
				<a href="/docs/start" style="text-decoration:none; font-size:210%; font-weight:bold; color:white; background:#990000; border-radius:10px; padding:10px; padding-left:40px; padding-right:40px;"><%=trans('Start')%></a>
	% else
				<a href="/ide/dashboard" style="text-decoration:none; font-size:210%; font-weight:bold; color:white; background:#990000; border-radius:10px; padding:10px; padding-left:40px; padding-right:40px;"><%=trans('Documents')%></a>
	% end					
			</div>
		</div>

	</div>	
	
	<div class="wide">
        <h1 style="font-size:150%; font-weight:normal; color:black; line-height:120%; margin:10px; margin-top:20px; text-align:center;"><%==trans('Visual tool long')%></h1>
	
		<h2 class="what_is"><%=trans('What is DRAKON?')%></h2>
		<p class="what_is_body"><%==trans('DRAKON is a visual language')%></p>

		<h2 class="what_is"><%==trans('What is DRAKON good for?')%></h2>
		<p class="what_is_body"><%==trans('DRAKON captures')%></p>
		
		<h2 class="what_is"><%==trans('Why DRAKON?')%></h2>
		<div class="what_is_body"><%==trans('DRAKON easy')%></div>			
	
	
		<div class="desktop_only">
			<table style="margin:auto; margin-top:50px; margin-bottom:50px;">
				<tr>
					<td style="width:250px; padding-right:20px; padding-bottom:10px;font-weight:bold; font-size:120%; text-align:center;"><%=trans('Software development')%></td>
					<td style="width:250px; padding-left:20px; padding-bottom:10px;font-weight:bold; font-size:120%; text-align:center;border-left:solid 1px black;"><%==trans('Business')%></td>
				</tr>
				<tr>
					<td style="padding-right:20px;text-align:center;"><img src="/static/dev.png" width="140" height="140" /></td>
					<td style="padding-left:20px;text-align:center;border-left:solid 1px black;"><img src="/static/bis.png" width="140" height="140" /></td>
				</tr>
				<tr>
					<td style="padding-right:20px;">
						<ul>
							<li><%=trans('Software requirements')%></li>
							<li><%=trans('Use cases')%></li>
							<li><%=trans('Program documentation')%></li>
						</ul>
					</td>
					<td style="padding-left:20px;border-left:solid 1px black;">
						<ul>
							<li><%=trans('Business procedures')%></li>
							<li><%=trans('Checklists')%></li>
						</ul>
					</td>			
				</tr>
			</table>
		</div>
		
		<div class="mobile_only">
			<table style="margin:auto; margin-top:50px; margin-bottom:50px;">
				<tr>
					<td style="width:250px; padding-left:0px; padding-bottom:10px;font-weight:bold; font-size:120%; text-align:center;"><%=trans('Software development')%></td>
				</tr>
				<tr>
					<td style="padding-left:0px;text-align:center;"><img src="/static/dev.png" width="140" height="140" /></td>
				</tr>
				<tr>
					<td style="padding-left:0px;">
						<ul>
							<li><%=trans('Software requirements')%></li>
							<li><%=trans('Use cases')%></li>
							<li><%=trans('Program documentation')%></li>
						</ul>
					</td>
				</tr>
			</table>		
			<table style="margin:auto; margin-top:50px; margin-bottom:50px;">
				<tr>
					<td style="width:250px; padding-left:0px; padding-bottom:10px;font-weight:bold; font-size:120%; text-align:center;"><%==trans('Business')%></td>
				</tr>
				<tr>
					<td style="padding-left:0px;text-align:center;"><img src="/static/bis.png" width="140" height="140" /></td>
				</tr>
				<tr>
					<td style="padding-left:0px;">
						<ul>
							<li><%=trans('Business procedures')%></li>
							<li><%=trans('Checklists')%></li>
						</ul>
					</td>			
				</tr>
			</table>		
		</div>
		
		<div style="margin:auto; width:688px; margin-bottom:20px;" class="desktop_only vidos" videoId="j-M_z_7_Nkw">
			<img width="688" height="387" src="https://img.youtube.com/vi/j-M_z_7_Nkw/0.jpg" />
		</div>

		<div style="margin:auto; width:320px; margin-bottom:20px;" class="mobile_only vidos" videoId="j-M_z_7_Nkw">
			<img width="320" height="180" src="https://img.youtube.com/vi/j-M_z_7_Nkw/0.jpg" />
		</div>
	
		<div class="why_hive">
			<table class="whys">
				<tr>
					<td class="why_bullet"><img src="/static/why-create.png" width="30"/></td>
					<td>
						<div class="why_header"><%=trans('Finally faster')%></div>
					</td>				
				</tr>
				<tr>
					<td></td>
					<td>
						<div class="why_body"><%=trans('MES_WHY_FAST_BODY')%></div>
					</td>
				</tr>
			</table>
			
			
			<table class="whys">
				<tr>
					<td class="why_bullet"><img src="/static/why-space.png" width="30" height="30" /></td>
					<td>
						<div class="why_header"><%=trans('Clean and consistent')%></div>
					</td>
				</tr>			
				<tr>
					<td></td>
					<td>
						<div class="why_body"><%=trans('Clean and consistent body')%></div>
					</td>
				</tr>
			</table>			
			

			<table class="whys">
				<tr>
					<td class="why_bullet"><img src="/static/why-mobile.png" width="30" height="30" /></td>
					<td>
						<div class="why_header"><%=trans('MES_WHY_MOBILE_HEADER')%></div>
					</td>
				</tr>			
				<tr>
					<td></td>
					<td>
						<div class="why_body"><%==trans('MES_WHY_MOBILE_BODY')%></div>
					</td>
				</tr>
			</table>
			
			<table class="whys">
				
				<tr>
					<td class="why_bullet"><img src="/static/why-update.png" width="30" height="30" /></td>
					<td>
						<div class="why_header"><%=trans('MES_WHY_UPDATE_HEADER')%></div>
					</td>
				</tr>			
				<tr>
					<td></td>
					<td>
						<div class="why_body"><%==trans('MES_WHY_UPDATE_BODY')%></div>
					</td>
				</tr>
			</table>


			
			<table class="whys">
				<tr>
					<td class="why_bullet"><img src="/static/why-team.png" width="30" height="30" /></td>
					<td>
						<div class="why_header"><%=trans('MES_WHY_TEAM_HEADER')%></div>
					</td>
				</tr>			
				<tr>
					<td></td>
					<td>
						<div class="why_body"><%==trans('MES_WHY_TEAM_BODY')%></div>
					</td>
				</tr>
			</table>
			
		</div>	
	</div>
	
	<div class="wide" style="margin-top:20px;">
		<h2 class="what_is" style="margin-bottom:20px;"><%=trans('Read more about DRAKON')%></h2>
		<p style="text-align:center;">
			<a href="/docs/examples" class="more common_button"><%=trans('MES_EXAMPLES')%></a>
			<a href="/docs/drakon" class="more common_button"><%=trans('MES_ABOUT_DRAKON')%></a>
		</p>
	</div>
	
	<div class="center" style="padding-top:40px; color:#990000; padding-bottom:40px; text-align:center;">
		<%=trans("Feedback")%>: <a style="color:#990000;" href="mailto:drakon.editor@gmail.com">drakon.editor@gmail.com</a>
		<div style="font-size:100%; padding-top:10px;">Copyright 2015-2018 DRAKON Labs</div>
		

			<a href="/terms" style="color:990000;"><%=trans("MES_TERMS")%></a>
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

var code = new Main(window, document, gUserId, translate, gLanguage, "home")

Nav.stateCallback = code.stateCallback
window.onpopstate = Nav.onStateChange

window.onload = function() {
	code.onLoad()
	code.onResize()
	code.insertVideos()
	window.onresize = code.onResize
}

</script>

</body>
</html>
