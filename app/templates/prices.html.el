<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"></meta>
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<link rel="shortcut icon" href="/static/favicon.ico" />
<link rel="icon" type="image/png" href="/static/favicon.png" />
<link rel="alternate" hreflang="x-default" href="https://drakonhub.com/prices" />
<link rel="alternate" hreflang="en" href="https://drakonhub.com/en/prices" />
<link rel="alternate" hreflang="ru" href="https://drakonhub.com/ru/prices" />


<title><%=trans("Prices")%> - DrakonHub</title>

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


<style>
table.price_table {
    border-collapse: separate;
    border-spacing: 10px;
    margin: -10px;
}


table.price_table td {
	background:white;
	border: solid 1px #69A2B3;
	height: 40px;
	width: 25%;
	padding: 10px;
	text-align:center;
	line-height: 1.2;
	vertical-align:middle;
}


table.price_table_small {
    border-collapse: separate;
    border-spacing: 10px;
    margin: 0px;
}


table.price_table_small td {
	background:white;
	border: solid 1px #69A2B3;
	height: 50px;
	width: 50%;
	padding: 10px;
	text-align:center;
	line-height: 1.2;	
	vertical-align:middle;
}

table td.legend {
	text-align:left;
	background: #CEE6ED;
	vertical-align:middle;
}

table td.price_header {
	font-weight: bold;
	font-size: 120%;
	vertical-align:middle;
}



a.buy_button, a.buy_button:visited {
	display: block;
	font-weight: bold;
	font-size: 120%;
	color: white;
	text-decoration:none;
	margin:0px;
	border:none; 
	border-radius:5px;
	padding:0px;
	text-align:center;
	padding-top:30px;
	padding-bottom:30px;	
}

table td.no_color {
	background:none; 
	border:none;
	padding: 0px;
}


table td.current_cell {
	background:none;
	border: none;
	padding: 0px;
	text-align:center;
	height: 15px;
}

.active_plan {
	display: none;
}


.bbutton_core {
	margin:0px;
	border:none; 
	border-radius:5px;
	padding:0px;
	text-align:center;
	padding-top:30px;
	padding-bottom:30px;
}

.price {
	font-weight:bold;
	font-size:110%;
}

</style>


</head>


<body style="">

<div id="ui">
	<div id="narrow" class="mobile_only">

		<div id="menu02" style="height:40px;" class="wide">
			<img src="/static/logo-text-img-s.png" width="185" height="40" alt="DrakonHub" />
		</div>
		
		<div class="" style="background:white;">			
				<h2><%=trans("MES_SUBSCRIPTION_TYPES")%></h2>			
				<div style="height:30px;"></div>
				<table class="price_table_small">
					<tr>
						<td class="price_header" style="background:#b4eeb4; border:solid 1px #008000;"><%=trans("PROD_EXTENDED")%></td>
						<td class="no_color">
							<a id="buy_extended_link_small" href="/buy?product=extended" class="buy_button" style="background:#007000;"></a>
						</td>
					</tr>
					<tr>
						<td class="legend"><%=trans("MES_PRICE_PER_MONTH")%>*</td>
						<td class="price" ><%=currency%> <%=extended_price%></td>
					</tr>
					<tr>
						<td class="legend"><%=trans("MES_NUM_USERS")%></td>
						<td><%=extended_max_users%></td>
					</tr>						
					<tr>
						<td class="legend"><%=trans("MES_MAX_SPACES")%></td>
						<td><%=extended_max_spaces%></td>
					</tr>


				</table>
				
				<div style="height:30px;"></div>
				
				<table class="price_table_small">
					<tr>
						
						<td class="price_header" style="background:#c6e2ff; border:solid 1px #003366;"><%=trans("PROD_TEAM")%></td>
						<td class="no_color">
							<a id="buy_team_link_small" href="/buy?product=team" class="buy_button" style="background:#003366;"></a>
						</td>
					</tr>
					<tr>
						<td class="legend"><%=trans("MES_PRICE_PER_MONTH")%>*</td>
						<td class="price" style=""><%=trans("MES_FROM")%> <%=currency%> <%=team_price * team_min_users%></td>
					</tr>
					<tr>
						<td class="legend"><%=trans("MES_NUM_USERS")%></td>
						<td><%=team_min_users%> <%=trans("MES_AND_MORE")%></td>
					</tr>
					<tr>
						<td class="legend"><%=trans("MES_MAX_SPACES")%></td>
						<td><%=trans("MES_UNLIMITED_B")%></td>
					</tr>


				</table>
				
				
				<p style="padding-bottom:20px">*<%=trans("MES_CHARGED_ANNUALLY")%></p>
				<h2><%=trans("MES_EDUCATIONAL_LICENSE")%></h2>
				<p style="padding-bottom:10px; text-align:left;"><%=trans("MES_DEW_IS_FREE_FOR_STUDENTS")%> <a style="color:#8b0000;" href="mailto:drakon.editor@gmail.com">drakon.editor@gmail.com</a>.</p>			
		</div>
		

		<div class="center" style="padding-top:70px; color:#8b0000; text-align:center; padding-bottom:20px;">
			<%=trans("Feedback")%>: <a style="color:#8b0000;" href="mailto:drakon.editor@gmail.com">drakon.editor@gmail.com</a>
			<div style="font-size:110%; padding:10px;">Copyright 2015-2018 DRAKON Labs</div>
			<a href="/terms" style="color:#8b0000;"><%=trans("MES_TERMS")%></a>
		</div>



	</div>

	<div id="wide" class="desktop_only">
		
		<div id="menu01" style="height:40px;" class="wide">
			<img src="/static/logo-text-img-s.png" width="185" height="40" alt="DrakonHub" />
		</div>	
		
		<div class="" style="background:white">	
			<div class="center" style="width:768px;">
				<h2><%=trans("MES_SUBSCRIPTION_TYPES")%></h2>
				<table class="price_table" style="margin-top:0px">				
					<tr>
						<td class="legend"><%=trans("MES_PRODUCT_NAME")%></td>
						<td class="price_header" style="background:#b4eeb4; border:solid 1px #008000;"><%=trans("PROD_EXTENDED")%></td>
						<td class="price_header" style="background:#c6e2ff; border:solid 1px #003366;"><%=trans("PROD_TEAM")%></td>
					</tr>
					<tr>
						<td class="legend"><%=trans("MES_MAX_SPACES")%></td>
						<td><%=extended_max_spaces%></td>
						<td><%=trans("MES_UNLIMITED_B")%></td>
					</tr>
					<tr>
						<td class="legend"><%=trans("MES_NUM_USERS")%></td>
						<td><%=extended_max_users%></td>
						<td><%=team_min_users%> <%=trans("MES_AND_MORE")%></td>
					</tr>
					<tr>
						<td class="legend"><%=trans("MES_PRICE_PER_MONTH")%>*</td>
						<td class="price" style=""><%=currency%> <%=extended_price%></td>
						<td class="price" style=""><%=trans("MES_FROM")%> <%=currency%> <%=team_price * team_min_users%></td>
					</tr>
					<tr>
						<td class="current_cell"></td>
						<td class="current_cell"><div id="active_ext" class="active_plan"><%=trans("MES_CURRENT_PLAN")%></div></td>
						<td class="current_cell"><div id="active_team" class="active_plan"><%=trans("MES_CURRENT_PLAN")%></div></td>
					</tr>				
					<tr>
						<td style="opacity:0; border-style: none;"></td>
						<td class="no_color">
							<a id="buy_extended_link" href="/buy?product=extended" class="buy_button" style="background:#007000;">						
							</a>
						</td>

						<td class="no_color">
							<a id="buy_team_link" href="/buy?product=team" class="buy_button" style="background:#003366;">
							</a>
						</td>
					</tr>
				</table>
				<p style="padding-bottom:20px">*<%=trans("MES_CHARGED_ANNUALLY")%></p>
				
				<h2><%=trans("MES_EDUCATIONAL_LICENSE")%></h2>
				<p style="padding-bottom:10px; text-align:left;"><%=trans("MES_DEW_IS_FREE_FOR_STUDENTS")%> <a style="color:#8b0000;" href="mailto:drakon.editor@gmail.com">drakon.editor@gmail.com</a>.</p>
			</div>
			
		</div>
		
		<div class="">
			<div class="center" style="padding-top:70px; color:#8b0000; width:768px; text-align:center; padding-bottom:20px;  font-size:90%;">
				<%=trans("Feedback")%>: <a style="color:#8b0000;" href="mailto:drakon.editor@gmail.com">drakon.editor@gmail.com</a>
				<div style="padding:10px;">Copyright 2015-2018 DRAKON Labs</div>
				<a href="/terms" style="color:#8b0000;"><%=trans("MES_TERMS")%></a>
			</div>
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

var strings = <%==messages%>
function translate(text) {
	if (text in strings) {
		return strings[text]
	}
	return text
}

var gReferer = "<%=referer%>"

var logonCtrl = new Logon(window, document, translate)



function CodeBehindPrices(window, document) {
	var gUserId = "<%=user_id%>"
	
	function show(id) {
		HtmlUtils.show(id, "block")
	}
	
	function appendReferer(id) {
		if (gReferer) {
			var a = document.getElementById(id)
			a.href += "&ref=" + encodeURIComponent(gReferer)
		}
	}
	
	function onLicenseArrived(data) {
		var now = new Date().getTime()/1000
		var left = data.expiry - now
		var warning = 3600 * 24 * 40
		var active = (data.active && data.expiry > now)
		var buyExtended = "MES_BUY"
		var buyTeam = "MES_BUY"
		var displayExt = "none"
		var displayTeam = "none"
		show("buy_extended_link")
		show("buy_extended_link_small")
		if (data.product_id == "extended") {
			displayExt = "block"
			if (active) {
				if (left < warning) {
					buyExtended = "MES_RENEW"
				} else {
					HtmlUtils.hide("buy_extended_link")
					HtmlUtils.hide("buy_extended_link_small")
				}
			} else {
				buyExtended = "MES_RENEW"
			}
		} else if (data.product_id == "team") {
			displayTeam = "block"
			if (active) {
				if (left < warning) {
					buyTeam = "MES_ADD_USERS_RENEW"
				} else {
					buyTeam = "MES_ADD_USERS"
				}
				HtmlUtils.hide("buy_extended_link")
				HtmlUtils.hide("buy_extended_link_small")
			} else {
				buyTeam = "MES_ADD_USERS_RENEW"
			}
		}		
	

		HtmlUtils.show("active_ext", displayExt)
		HtmlUtils.show("active_team", displayTeam)
		
		HtmlUtils.setText("buy_extended_link_small", translate(buyExtended))
		HtmlUtils.setText("buy_team_link_small", translate(buyTeam))
		HtmlUtils.setText("buy_extended_link", translate(buyExtended))
		HtmlUtils.setText("buy_team_link", translate(buyTeam))		
		
		code.onResize()
	}
	
	function doNothing() {
	}
	
	this.initPage = function() {
		
		var search = Utils.parseSearch(window.location.search)
		if (search.ref) {
			gReferer = decodeURIComponent(search.ref)
		}
		
		appendReferer("buy_extended_link")
		appendReferer("buy_team_link")
		appendReferer("buy_team_link_small")
		appendReferer("buy_extended_link_small")
		
		var buyExtended, buyTeam
		if (gUserId) {
			HtmlUtils.sendGet("/api/license", onLicenseArrived, doNothing)
		} else {
			var buy = translate("MES_BUY")
			HtmlUtils.setText("buy_extended_link_small", buy)
			HtmlUtils.setText("buy_team_link_small", buy)
			HtmlUtils.setText("buy_extended_link", buy)
			HtmlUtils.setText("buy_team_link", buy)
			
			code.onResize()
		}
	}
	
	this.language = function() {
		HtmlUtils.show("language", "block")
	}

	this.languageSmall = function() {
		HtmlUtils.show("languageSmall", "block")
	}
	
	this.cancelLanguage = function() {
		HtmlUtils.hide("language")
		HtmlUtils.hide("languageSmall")
	}
	
	this.setLanguage = function(lang) {
		HtmlUtils.setCookie("language", lang)
		var noop = function() {}
		var reload = function() {
			window.location.href = "/prices"
		}	
		if (gUserId) {
			HtmlUtils.sendPost("/api/theme", {language: lang}, reload, noop)
		} else {
			reload()
		}
	}
	
	this.logout = function() {
		logonCtrl.logout()
	}
}

% if url_language ~= "" then
HtmlUtils.setCookie("language", "<%=url_language%>")
% end

var onPremises = false
var ctrl = new CodeBehindPrices(window, document)


var gLanguage = "<%=language%>"
var gUserId = "<%=user_id%>"

var code = new Main(window, document, gUserId, translate, gLanguage, "prices")

Nav.stateCallback = code.stateCallback

window.onresize = code.onResize
window.onpopstate = Nav.onStateChange




function onLoaded() {
	code.onLoad()
	ctrl.initPage()	
}

window.onload = onLoaded

</script>

<%==google_anal%>

</body>
</html>



