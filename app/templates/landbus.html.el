<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"></meta>
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<meta name="Description" content="<%=trans('MES_BUSINESS_DESCR')%>"></meta>
<link rel="shortcut icon" href="/static/favicon.ico" />
<link rel="icon" type="image/png" href="/static/favicon.png" />
<link rel="alternate" hreflang="x-default" href="https://drakonhub.com/landbus" />
<link rel="alternate" hreflang="en" href="https://drakonhub.com/en/landbus" />
<link rel="alternate" hreflang="ru" href="https://drakonhub.com/ru/landbus" />


<title>DrakonHub – <%=trans("LAND_TITLE")%></title>

<!-- Copyright 2015-2016 DRAKON Labs -->

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


body, select {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 12pt;
}

input {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 12pt;
	padding:5px;
}


input[type="text"], input[type="email"], input[type="password"]  {
    width: 280px;
}


input[type=checkbox] {
	  -ms-transform: scale(2); /* IE */
  -moz-transform: scale(2); /* FF */
  -webkit-transform: scale(2); /* Safari and Chrome */
  -o-transform: scale(2); /* Opera */
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
	
	font-size:150%;
	font-weight:bold;
	margin: 5px;
	margin-top:30px;
	color:white;
}

h2 {
	text-align: center;
	
	font-size:120%;
	font-weight:bold;
	padding: 5px;
	padding-top:10px;
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

h2 {
	color:#666699;
	margin:10px;
}

.explanation {
	color:#666699;
	text-align:center;
}

.what_header {
	font-weight:bold;
	color:#BE2921;
	text-align:center;
	margin:10px;
}

.what_body {
	color:#BE2921;
	text-align:left;
	margin:5px;
	line-height: 120%;
	padding:5px;
}

.what_footer {
	font-weight:bold;
	color:#9E2921;
	background:#dbcec5;
	text-align:center;
	margin:5px;
	line-height: 120%;
	padding:20px;
}

td {
	vertical-align:top;
}

.point {
	border: solid 0px #666699;
	padding: 5px;
	border-radius:10px;
	box-shadow: 0px 0px 5px #666666;
}

.point_item {
	height:70px;
	padding:5px;
}


.bigButton {
	font-size: 120%;
	font-weight: bold;
	display: inline-block;
	padding:20px;
	margin: 10px;
	border-radius: 30px;
	width:170px;
	cursor: pointer;
	text-decoration:none;
}



.startDrawing {
	border: 2px solid white;
	background: white;
	color: #BE2921;
}

table.form_table td {
	padding-top: 5px;
	padding-bottom: 5px;
}




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

.form_table label {
	color:white;
}

.w1 a, .w1 div {
	color: white;
}

.att {
	color:white;
	margin:20px;
	text-align: center;
	font-size:120%;
	font-weight:bold;
}


.topMenuItem {
	color: #BE2921;
	display: inline-block;
	padding:4px 6px 4px 6px;
	margin: 10px 1px 10px 1px;
	border-radius: 18px;
	border: 1px solid white;
	cursor: pointer;
	font-size: 13pt;
	text-decoration: none;
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

.topMenuItem:hover {
	background: #BE2921;
	color: white;
	border: 1px solid #BE2921;
}

a.nav_menu, a.nav_menu:visited {
	display: inline-block;
	font-weight: bold;
	font-size: 110%;
	color: #BE2921;
	text-decoration:none;
	margin:10px;
	border-radius:5px;
	padding:10px;
	text-align:center;
	padding-top:10px;
	padding-bottom:10px;
	border: solid 2px #BE2921;
}

a.nav_menu:hover {
	color: white;
	background: #BE2921;
}



.narrow {
	display: block;
}

.wide {
	display: none;
}

@media (min-width: 766px) {
	.narrow {
		display: none;
	}

	.wide {
		display: block;
	}
}

.field_error {
	color:red;
	background: white;
	padding:0px;
	text-align:left;
}


.video {
	margin-left:64px;
	margin-top:20px;
}

.svideo {
	margin-left:calc(50% - 120px);
	margin-top:20px;
}

</style>



</head>


<body style="">

<div id="cookies" style="padding:5px;background:#800000; display:none;">
	<div class="topMenuItem topButton" style="margin:0px;" onclick="ctrl.acceptCookies()"><%=trans("okay")%></div>
	<span style="color:white;"><%==trans("explain_cookies")%></span>
</div>

	
<div style="background-color:#B6271F; background-image:url('/static/red-hand.jpg'); background-repeat: no-repeat; background-position: center; min-height:523px;">
	<div style="margin:auto; min-height:523px; max-width:768px;">
		<a href="/"><img itemprop="image" src="/static/drakosha2.png" width="133" height="133" alt="DrakonHub"/></a>
		<img src="/static/logo-text2.png" style="margin-top:10px; vertical-align:top;" width="235" height="27" alt="<%=trans('MES_TITLE2')%>" style="vertical-align: top;"/>
		<h1><%=trans("LAND_TITLE")%></h1>
		<p class="att" style="margin-top:40px;"><%=trans("MES_WHY_FAST_HEADER")%></p>
		<p class="att"><%=trans("MES_WHY_SPACE_HEADER")%></p>
		<div style="padding-top:20px; padding-bottom:20px; text-align:center">
% if user_id == "" then			
			<a href="/try-me" class="bigButton startDrawing"><%=trans("LAND_START_DRAWING")%></a>
% end			
		</div>
	</div>
</div>

<div class="wide" style="max-width:768px; margin:auto; padding-bottom:20px;">
	<h2><%=trans("LAND_WHAT_DO_YOU_GAIN")%></h2>
	<table style="width:100%;">
		<tr>
			<td style="width:25%;">
				<div class="what_header"><%=trans("LAND_CONTROL")%></div>
				<div class="what_body"><%==trans("LAND_CONTROL_TEXT")%></div>
			</td>
			<td style="width:25%;">
				<div class="what_header"><%=trans("LAND_RISK")%></div>
				<div class="what_body"><%==trans("LAND_RISK_TEXT")%></div>
			</td>
			<td style="width:25%;">
				<div class="what_header"><%=trans("LAND_TRAINING")%></div>
				<div class="what_body"><%==trans("LAND_TRAINING_TEXT")%></div>
			</td>
			<td style="width:25%;">
				<div class="what_header"><%=trans("LAND_REGULATORS")%></div>
				<div class="what_body"><%==trans("LAND_REGULATORS_TEXT")%></div>
			</td>
		</tr>
	</table>
	<h2><%=trans("LAND_HOW_TO_DOCUMENT")%></h2>
	<p class="explanation"><%=trans("LAND_BUS_MUST_BE")%></p>
	<table style="width:100%;">
		<tr>
			<td style="width:50%; padding-right:5px;">
				<div class="point"">
					<div class="what_header"><%=trans("LAND_EASY_TO_UNDERSTAND")%></div>
					<div class="what_body point_item"><%==trans("LAND_TEXT_BORING")%></div>
					<div class="what_body point_item"><%==trans("LAND_FOREIGNERS")%></div>
					<div class="what_footer"><%=trans("LAND_WELL_TESTED")%></div>
				</div>
			</td>
			<td style="width:50%; padding-left:5px;">
				<div class="point">
					<div class="what_header"><%=trans("LAND_FLEXIBLE")%></div>
					<div class="what_body point_item"><%==trans("LAND_CHANGING")%></div>
					<div class="what_body point_item"><%==trans("LAND_KEEP")%></div>
					<div class="what_footer"><%=trans("LAND_UPDATE")%></div>
				</div>
			</td>
		</tr>
	</table>
	
	<iframe class="video" style="" width="640" height="360" src="https://www.youtube.com/embed/j-M_z_7_Nkw" frameborder="0" allowfullscreen></iframe>
	<iframe class="video" width="640" height="360" src="https://www.youtube.com/embed/Q0YBdX9xazw" frameborder="0" allowfullscreen></iframe>
</div>

<div class="narrow" style="max-width:768px; margin:auto; padding-bottom:20px;">
	<h2><%=trans("LAND_WHAT_DO_YOU_GAIN")%></h2>

	<div class="what_header"><%=trans("LAND_CONTROL")%></div>
	<div class="what_body"><%==trans("LAND_CONTROL_TEXT")%></div>

	<div class="what_header"><%=trans("LAND_RISK")%></div>
	<div class="what_body"><%==trans("LAND_RISK_TEXT")%></div>

	<div class="what_header"><%=trans("LAND_TRAINING")%></div>
	<div class="what_body"><%==trans("LAND_TRAINING_TEXT")%></div>

	<div class="what_header"><%=trans("LAND_REGULATORS")%></div>
	<div class="what_body"><%==trans("LAND_REGULATORS_TEXT")%></div>

	<h2><%=trans("LAND_HOW_TO_DOCUMENT")%></h2>
	<p class="explanation"><%=trans("LAND_BUS_MUST_BE")%></p>

	<div class="point" style="margin:5px;">
		<div class="what_header"><%=trans("LAND_EASY_TO_UNDERSTAND")%></div>
		<div class="what_body point_item"><%==trans("LAND_TEXT_BORING")%></div>
		<div class="what_body point_item"><%==trans("LAND_FOREIGNERS")%></div>
		<div class="what_footer"><%=trans("LAND_WELL_TESTED")%></div>
	</div>

	<div class="point" style="margin:5px; margin-top:20px;">
		<div class="what_header"><%=trans("LAND_FLEXIBLE")%></div>
		<div class="what_body point_item"><%==trans("LAND_CHANGING")%></div>
		<div class="what_body point_item"><%==trans("LAND_KEEP")%></div>
		<div class="what_footer"><%=trans("LAND_UPDATE")%></div>
	</div>


	<iframe class="svideo" style="" width="240" height="135" src="https://www.youtube.com/embed/j-M_z_7_Nkw" frameborder="0" allowfullscreen></iframe>
	<iframe class="svideo" width="240" height="135" src="https://www.youtube.com/embed/Q0YBdX9xazw" frameborder="0" allowfullscreen></iframe>
</div>

% if user_id == "" then
<div style="background:#B6271F;">
	<div style="margin:auto; width:300px;">
		<table class="form_table" style="">
			<tr>
				<td><label for="userName"><%=trans("user name")%></label>
					<div class="field_error" id="userName_error"></div>
					<input id="userName" type="text" onkeydown="ctrl.userDown(event)"/><br />
				<span style="font-size:90%; color:yellow; padding-top:2px;"><%=trans("characters")%></span>
				</td>
			</tr>
			<tr>
				<td><label for="email"><%=trans("email")%></label><br />
					<div class="field_error" id="email_error" ></div>
					<input id="email" type="email" onkeydown="ctrl.emailDown(event)"/>
				</td>
			</tr>
			<tr>
				<td><label for="pass"><%=trans("password")%></label><br />
				<div class="field_error" id="pass_error" ></div>
				<input id="pass" type="password" onkeydown="ctrl.passDown(event)"/></td>
			</tr>
			<tr>
				<td><label for="pass2"><%=trans("repeat password")%></label><br />
				<div class="field_error" id="pass2_error" ></div>
				<input id="pass2" type="password" onkeydown="ctrl.passDown2(event)"/></td>
			</tr>
			
		</table>		

		

		<p id="signup_message" class="field_error" style="padding:5px; display:none;"></p>
		<table style="margin-bottom:10px; margin-top:10px;" class="w1">
			<tr>
				<td><input id="i_agree" onchange="ctrl.agreeChanged(this.checked)" type="checkbox" name="checkbox" value="" style="margin-right:10px;"/></td>		
				<td style="padding-left:20px; color:white;"><%==trans("MES_I_AGREE")%></td>
			</tr>
		</table>
		
		<div style="text-align:center;">
			<div id="create_account" class="bigButton startDrawing" style="" onclick="ctrl.signup()"><%=trans("create account")%></div>
		</div>
		
		<div style="height:20px;"></div>
	</div>
</div>
% end
<div style="bacground:white;">

	<a class="nav_menu" style="margin-right:10px;" href="/docs/examples"><%=trans("MES_EXAMPLES")%></a>
	<a class="nav_menu" href="/docs/drakon" style="" ><%=trans("MES_ABOUT_DRAKON")%></a>


	<div style="font-size:100%; padding-top:10px; text-align:center; padding-bottom:20px;">Copyright 2015-2017 DRAKON Labs</div>

</div>

<%==include("CallTrace")%>
<%==include("HtmlUtils")%>
<%==include("Signup")%>


<%==include("Config")%>
<%==include("DTools")%>
<%==include("Utils")%>

<%==include("Landing")%>

<script>

var strings = <%==messages%>
function translate(text) {
	if (text in strings) {
		return strings[text]
	}
	return text
}

var gReferer = "<%=referer%>"


var ctrl = new Landing(window, document, translate)
window.onload = ctrl.init

</script>


</body>
</html>



