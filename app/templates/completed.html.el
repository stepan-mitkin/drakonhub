<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"></meta>
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<link rel="shortcut icon" href="/static/favicon.ico" />
<link rel="icon" type="image/png" href="/static/favicon.png" />



<title><%=trans("MES_ORDER")%></title>

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

@font-face {
	font-family: 'LiberationSans';
	src: url('/static/fonts/LiberationSans.ttf') format('truetype');
}

@font-face {
	font-family: 'LiberationSans';
	src: url('/static/fonts/LiberationSans-Italic.ttf') format('truetype');
	font-style: italic;
}

@font-face {
	font-family: 'LiberationSans';
	src: url('/static/fonts/LiberationSans-Bold.ttf') format('truetype');
	font-weight: bold;
}

@font-face {
	font-family: 'LiberationSans';
	src: url('/static/fonts/LiberationSans-BoldItalic.ttf') format('truetype');
	font-style: italic;
	font-weight: bold;
}

body, select, input {
	font-family: LiberationSans, Arial;
	font-size: 11pt;
}

strong {
	font-weight: bold;
}

p {
	padding:5px;
	line-height: 130%;
	text-align: left;
}

h1 {
	text-align: center;
	
	font-size:140%;
	font-weight:bold;
	margin: 5px;
	margin-top:30px;
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

.panic_button {
	display: block;
	background: #455A64;
	color:white;
	border-radius: 5px;
	padding: 10px;
	margin: 5px;
	text-align: center;
	cursor: pointer;	
}

.low_panic {
	margin-top:10px;
}

.panic_button:active {
	transform: translate(0px, 2px);
}

.no_under {
	text-decoration: none;
}

.black_link {
	color:black;
}


.top_line {
	background: #455A64;
	color:white;
}

textarea:focus, input:focus{
    outline: none;
}

input {
	border: none;
	font-size:13pt;
	padding:6px;
}


.shadow {
	box-shadow: 0px 0px 5px #000000;
}


.feedback {

	display: inline-block;
	position: absolute;
	right: 3px;
	bottom: 3px;
	color: white;
	background: #ff4f30;
	padding:3px;
	cursor:pointer;
	border-radius: 3px;
	border: solid 1px black;
}

.feedback:active {

	transform: translate(0px, 2px);
}



table.grid_table, table.grid_table td {
    border: 1px solid #c0c0c0;
}

table.grid_table {
	border-collapse: collapse;
	min-width:312px;
}

table.grid_table td {
	padding: 10px;
}

table.form_table td {
	padding: 5px;
}

table.form_table input {
	border: solid 1px grey;
	font-size: 11pt;
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


.link1:link {
    text-decoration: none;
    color: #455A64;
}

.link1:visited {
    text-decoration: none;
    color: #455A64;
}

.link1:hover {
    text-decoration: underline;
    color: #455A64;
}

.link1:active {
    text-decoration: underline;
	 color: #455A64;
}


.user_input {
	font-family: LiberationSans, Arial;
	font-size: 12pt;
	width: 290px;
}


.planet {
	display: inline-block;
	padding:0px 5px 6px 10px;
	cursor: pointer;
	vertical-align:middle;	
}


.lang_list {
	display:inline-block;
	margin:0px;
	padding: 0px;
}

.lang_option {
	margin:5px;
	padding: 10px;
	cursor: pointer;
	color: #BE2921;
	background: white;
}

.lang_option:hover {
	color: white;
	background: #BE2921;
}

.cap_width {
	width: 288px;
}

.value_cell {
	text-align: right;
	white-space: nowrap;
}

#choose_team_users {
	width:70px;
	text-align: right;
}

.error_message {
	color:#900000;
}

</style>


</head>


<body style="background:white;">

<div id="wide" class="wide">

		<div id="topLine" style="">
			<div class="center" style="max-width:768px;">
				<table style="width:100%;">
					<tr>
						<td width="52" style=""><a href="/"><img width="52" height="52" src="/static/images/drakosha104b.png" style="vertical-align: top;"></img></a></td>
						<td width="100%" style="text-align:right;"><h1 id="main_header" style="color:#BE2921; font-size:150%; font-weight:bold; margin:0px;"><%=trans("MES_ORDER")%></h1></td>
						<td width="" id="user_name"></td>
					</tr>
				</table>
			</div>
		</div>
		<div style="background:#EFF1F2">
			<div id="dialog" class="center" style="max-width:768px; min-height:300px; padding-bottom:20px;">
				
				<div style="display:none;" id="loading">					
					<p style="padding:20px; text-align:center;"><%=trans("loading")%>...</p>
				</div>

				<div style="display:none;" id="success">
					<table width="100%">
						<tr>
							<td width="30%">
							</td>							
							<td>
								<h2><%=trans("MES_PURCHASE_COMPLETED")%></h2>
								<p><%==trans("MES_PURCHASE_COMPLETED_TEXT")%></p>
								<div style="height:20px;"></div>
								<a href="/ide/spaces" class="no_under"><div class="panic_button" style="margin-left:5px; margin-right:5px; background:coral;"><%=trans("workspaces")%></div></a>
								<a href="/account" class="no_under"><div class="panic_button low_panic" style="margin-left:5px; margin-right:5px;"><%=trans("Account")%></div></a>
							</td>
							<td width="30%">
							</td>					
						</tr>
					</table>				
				</div>
				
				<div style="display:none;" id="failure">
					<table width="100%">
						<tr>
							<td width="30%">
							</td>							
							<td>
								<h2 id="failure_header"></h2>
								<p id="failure_text"></p>
								
								<div style="height:20px;"></div>
								
								<a href="/prices" class="no_under"><div class="panic_button" style="margin-left:5px; margin-right:5px;"><%=trans("Prices")%></div></a>
								<a href="/account" class="no_under"><div class="panic_button low_panic" style="margin-left:5px; margin-right:5px;"><%=trans("Account")%></div></a>
								
							</td>
							<td width="30%">
							</td>					
						</tr>
					</table>				
				</div>
				
			</div>
		</div>
		
		<div>
			<div class="center" style="padding-top:70px; color:#8b0000; max-width:768px; text-align:center;">
				<%=trans("Feedback")%>: <a style="color:#8b0000;" href="mailto:drakon.editor@gmail.com">drakon.editor@gmail.com</a>
				<div style="font-size:110%; padding:10px;">Copyright 2015-2018 DRAKON Labs</div>
			</div>
		</div>		
	</div>	
	
</div>


<div id="panic" class="full_screen" style="display:none; background:white;">
	<div style="width:300px; position:absolute; left:calc(50% - 150px); top:calc(50vh - 97px); text-align:center;">
		<div id="panic_message" style="margin-bottom:30px; text-align:center; padding:5px;"></div>

		<div style="display:inline-block;">
			<div class="panic_button" onclick="window.location.reload()" ><%=trans("dia_reload")%></div>
			<div class="panic_button" onclick="window.history.back()" ><%=trans("dia_back")%></div>
			<a href="/" class="no_under"><div class="panic_button" style="background:coral;"><%=trans("dia_home")%></div></a>
		</div>

	</div>
</div>


</div>


<%==include("CallTrace")%>
<%==include("HtmlUtils")%>


<%==include("Config")%>
<%==include("DTools")%>
<%==include("Utils")%>

<script>

var strings = <%==messages%>
function translate(text) {
	if (text in strings) {
		return strings[text]
	}
	return text
}

function CompletedCtrl(window, document) {
	
	function showError(headerId, textId) {
		var header = translate(headerId)
		var text = translate(textId)
		HtmlUtils.setText("failure_header", header)
		HtmlUtils.setText("failure_text", text)
		HtmlUtils.show("failure", "block")
	}
	
	function showSuccess() {
		HtmlUtils.show("success", "block")
	}
	
	function severeFailure() {
		showError("ERR_ERROR", "ERR_LOADING_PAGE")
	}
	
	function onSuccess(data) {
		if (data.result == "ok") {
			showSuccess()
		} else if (data.result) {
			showError("ERR_ERROR", data.result)
		} else {
			showError("ERR_ERROR", "ERR_PAYMENT_FAILED")
		}
	}
	
	function beginCheckTrans(transId) {
		var url = "/api/check_trans/" + transId
		HtmlUtils.sendGet(url, onSuccess, severeFailure)
	}
	
	this.init = function() {
		var search = Utils.parseSearch(window.location.search)
		if (search.type == "coupon") {
				var trans_id = search.trans_id
				if (!trans_id) {
					severeFailure()
				} else {
					beginCheckTrans(trans_id)
				}
		} else {
			severeFailure()
		}
	}
}

var ctrl = new CompletedCtrl(window, document)

ctrl.init()

</script>

</body>
</html>


