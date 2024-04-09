<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"></meta>
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<link rel="shortcut icon" href="/static/favicon.ico" />
<link rel="icon" type="image/png" href="/static/favicon.png" />


<title><%=trans("MES_SUBSCRIPTION_TITLE")%></title>


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
	font-size: 14pt;
}

input {
	border: solid 1px grey;
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
	
	font-size:110%;
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

a.panic_button {
	text-decoration: none;
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



table.grid_table td {
    border-bottom: 1px solid #c0c0c0;
}

table.grid_table {
	border-collapse: collapse;
	min-width:312px;
}

table.grid_table td {
	padding: 6px;
}

table.form_table td {
	padding: 5px;
}

table.form_table input {
	border: solid 1px grey;
	font-size: 14pt;
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
	font-size: 14pt;
	width: 284px;
	border: solid 1px grey;
}


.field_error {
	color:#800000;
	display: none;
	font-weight: bold;
}


select {
	font-family: LiberationSans, Arial;
	font-size: 12pt;
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

.grey_text {
	color: #606060;
}


#choose_team_users {
	width:70px;
	text-align: right;
}

.error_message {
	color:#900000;
}

input[type=number].acc::-webkit-inner-spin-button, 
input[type=number].acc::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0; 
}

.number_part {
	width: 53px;
	border: none;
	padding: 0px;
	margin: 0px;
	font-size:16pt;
}

input[type=number].number_part::-webkit-inner-spin-button, 
input[type=number].number_part::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0; 
}

.grey {
	display: block;
	background: grey;
	color:white;
	border-radius: 5px;
	padding: 10px;
	margin: 5px;
	text-align: center;
	cursor: default;
}

input[type=checkbox] {
	  -ms-transform: scale(2); /* IE */
  -moz-transform: scale(2); /* FF */
  -webkit-transform: scale(2); /* Safari and Chrome */
  -o-transform: scale(2); /* Opera */
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


<body style="background:white;">

<div id="wide" class="wide">

		<div id="topLine" style="">
			<div class="center" style="max-width:768px;">
				<table style="width:100%;">
					<tr>
						<td width="52" style=""><a href="/"><img width="52" height="52" src="/static/images/drakosha104b.png" style="vertical-align: top;"></img></a></td>
						<td width="100%" style="text-align:right;"><h1 id="main_header" style="color:#BE2921; font-size:110%; font-weight:bold; margin:0px;"><%=trans("MES_SUBSCRIPTION_TITLE")%></h1></td>
						<td width="" id="user_name"></td>
					</tr>
				</table>
			</div>
		</div>
		<div style="background:white">
			<div id="dialog" class="center" style="max-width:768px; min-height:300px; padding-bottom:20px;">
				<div style="display:block;" id="loading">					
					<p style="padding:20px; text-align:center;"><%=trans("loading")%>...</p>
				</div>				
				
				<div style="display:none;" id="two_buttons">					
					<table width="100%" style="">
						<tr>
							<td width="30%">
							</td>
							<td style="min-width:312px;">
								<p id="two_buttons_text"></p>						
								<div id="two_buttons_upper" class="panic_button"></div>
								<div id="two_buttons_lower"class="panic_button low_panic"></div>
								<div style="text-align:center; margin:30px;"><a href="javascript:void(0)" onclick="window.history.back()" class=""><%=trans("cancel")%></a></div>
							</td>
							<td width="30%">
							</td>					
						</tr>
					</table>
				</div>
				
				<div style="display:none;" id="one_button">
					
					<table width="100%" style="">
						<tr>
							<td width="30%">
							</td>							
							<td style="min-width:312px;">
								<p id="one_button_text"></p>
								<div style="height:20px;"></div>
								<div id="one_button_button" class="panic_button"></div>
							</td>
							<td width="30%">
							</td>					
						</tr>
					</table>
				</div>
				
				<div style="display:none;" id="signup">
					<table width="100%">
						<tr>
							<td width="30%">
							</td>							
							<td>
								<h2><%=trans("Sign up")%></h2>					
								<table class="form_table" style="margin-bottom:0px;">
									<tr>
										<td><label for="userName_edit"><%=trans("MES_CREATE_USERNAME")%></label><br />
										<div class="field_error" id="userName_error"></div>
										<input class="cap_width" id="userName_edit" type="text" onkeydown=""/><br />
										<span style="font-size:90%; color:#808080; padding-top:2px;"><%=trans("MES_CHARACTERS3")%></span>
										</td>
									</tr>
									<tr>
										<td><label for="email_edit"><%=trans("email")%></label>
										<div class="field_error" id="email_error" ></div>
										<input class="cap_width" id="email_edit" type="email" onkeydown=""/></td>
									</tr>
									<!--
									<tr>
										<td><label for="pass_edit"><%=trans("password")%></label>
										<div class="field_error" id="pass_error" ></div>
										<input class="cap_width" id="pass_edit" type="password" onkeydown=""/></td>
									</tr>
									<tr>
										<td><label for="pass2_edit"><%=trans("repeat password")%></label>
										<div class="field_error" id="pass2_error" ></div>
										<input class="cap_width" id="pass2_edit" type="password" onkeydown=""/></td>
									</tr>
									-->
									
								</table>		
								
								<div style="margin-left:5px;" id="captcha"></div>
								<div style="height:5px;"></div>
								<p id="signup_message" class="error_message"></p>
								
								<table style="margin:10px; margin-bottom:20px;">
									<tr>
										<td><input id="i_agree" onchange="" type="checkbox" name="checkbox" value="" style="margin-right:10px;"></input></td>		
										<td style="padding-left:10px;"><%==trans("MES_I_AGREE")%></td>
									</tr>
								</table>			
								
								<div id="create_account" class="panic_button" style="margin-left: 5px; margin-right:5px; background:coral; display:block;" onclick="signup()"><%=trans("create account")%></div>
								<!--<div id="create_account_grey" class="grey" style="margin-left: 5px; margin-right:5px; display:block;" onclick=""><%=trans("create account")%></div>-->
								<div class="panic_button low_panic" style="margin-left:5px; margin-right:5px;" onclick="ctrl.showStart()"><%=trans("cancel")%></div>															

							</td>
							<td width="30%">
							</td>					
						</tr>
					</table>				
				</div>
				
				<div style="display:none;" id="login">
					<table width="100%">
						<tr>
							<td width="30%">
							</td>							
							<td>
								<h2><%=trans("Login")%></h2>					
								<table class="form_table" style="">
									<tr>
										<td><label for="userNameLogin"><%=trans("user name")%></label><br /><input class="cap_width" id="userNameLogin" type="text" onkeydown="view.onLoginUserDown(event)"/></td>
									</tr>
									<tr>
										<td><label for="passLogin"><%=trans("password")%></label><br /><input class="cap_width" id="passLogin" type="password" onkeydown="view.onLoginPassDown(event)"/></td>
									</tr>									
								</table>
								<p style="text-align:right;"><a href="/reset"><%=trans("forgot_pass")%></a></p>
								
								<div style="height:20px;"></div>
								<p id="logon_message" class="error_message"></p>
								<div class="panic_button" style="margin-left:5px; margin-right:5px; background:coral;" onclick="view.logon()"><%=trans("Login")%></div>
								<div class="panic_button low_panic" style="margin-left:5px; margin-right:5px;" onclick="ctrl.showStart()"><%=trans("cancel")%></div>
								
							</td>
							<td width="30%">
							</td>					
						</tr>
					</table>				
				</div>
				
				<div style="display:none;" id="choose">
					<table width="100%">
						<tr>
							<td width="30%">
							</td>							
							<td>
								<div id="paysys" style="padding:5px;">
									% if paysys == "payex" then
									<table style="width:100%">
										<tr>
											<td>
												<img src="/static/visa-master.png" width="54" height="54"></img>
											</td>
											<td width="100%" style="text-align:right; font-size:80%;">
												<%=trans("MES_HANDLED_BY")%>
											</td>											
											<td>
												<a href="http://payex.no/" target="_blank" style="float:right;"><img src="/static/payments_processed_by_transparent.gif" width="101" height="50"></img></a>
											</td>
										</tr>
									</table>
									% end
								</div>								
								<p style="font-weight:bold;"><%=trans("Choose product")%>
								
								<select style="margin:10px; padding:5px;" id="product" onchange="view.onProductChanged()">
								  <option value="extended"><%=trans("PROD_EXTENDED")%></option>
								  <option value="team"><%=trans("PROD_TEAM")%></option>
								</select>
								</p>
								
								<div id="extended_price" style="display:none;">
									<table class="grid_table" style="">
											<tr class="grey_text"><td><%=trans("MES_PRICE_PER_USER")%></td><td class="value_cell"><span id="choose_ext_price"></span></td></tr>
											<tr class="grey_text"><td><%==trans("MES_NUM_USERS")%></td><td class="value_cell">1</td></tr>
											<tr class="grey_text"><td><%=trans("MES_MVA")%></td><td class="value_cell"><span id="choose_ext_mva"></span></td></tr>
											<tr style="font-weight:bold;"><td><%=trans("MES_MONTHLY_PAYMENT")%></td><td class="value_cell"><span id="choose_ext_total"></span></td></tr>									
									</table>
								</div>
								<div id="team_price" style="display:none;">
									<table class="grid_table" style="">											
											<tr class="grey_text"><td><%=trans("MES_PRICE_PER_USER")%></td><td class="value_cell"><span id="choose_team_price"></span></td></tr>
											<tr class="grey_text"><td><%==trans("MES_NUM_USERS")%></td><td class="value_cell"><input id="choose_team_users" type="number" oninput="view.onNumUsers()" min="3" max="1000"></input></td></tr>
											<tr class="grey_text"><td><%=trans("MES_MVA")%></td><td class="value_cell"><span id="choose_team_mva"></span></td></tr>
											<tr style="font-weight:bold;"><td><%=trans("MES_MONTHLY_PAYMENT")%></td><td class="value_cell"><span id="choose_team_total"></span></td></tr>									
									</table>
								</div>								
								
								<p><%=trans("Coupon")%><input type="text" id="coupon" style="width:200px; margin:5px;"></input></p>
								<p id="choose_error" class="error_message"></p>
								<div style="font-size:11pt; margin-left:5px; margin-right:5px;"><%==trans("MES_THIS_WILL_RECUR")%></div>
								<div id="choose_continue" class="panic_button" style="margin-left:5px; margin-right:5px; background:coral;" onclick="view.onChooseContinue()"><%=trans("MES_CONTINUE")%></div>
								<div id="disabled_continue" class="panic_button" style="display: none; margin-left:5px; margin-right:5px; background:grey;"><%=trans("MES_CONTINUE")%></div>
								<div class="panic_button low_panic" style="margin-left:5px; margin-right:5px;" onclick="HtmlUtils.goBack()"><%=trans("cancel")%></a>
							</td>
							<td width="30%">
							</td>					
						</tr>
					</table>				
				</div>			

				<div style="display:none;" id="confirm">					
					<table width="100%">
						<tr>
							<td width="30%">
							</td>							
							<td>								
								<h2><%=trans("MES_REVIEW_ORDER")%></h2>
								
								<div id="paysys" style="padding:5px;">
									% if paysys == "payex" then
									<table style="width:100%">
										<tr>
											<td>
												<img src="/static/visa-master.png" width="54" height="54"></img>
											</td>
											<td width="100%" style="text-align:right;">
												<%=trans("MES_HANDLED_BY")%>
											</td>											
											<td>
												<a href="http://payex.no/" target="_blank" style="float:right;"><img src="/static/payments_processed_by_transparent.gif" width="101" height="50"></img></a>
											</td>
										</tr>
									</table>
									% end
								</div>
								
								<table class="grid_table" style="">
									<tr><td><%=trans("MES_PRODUCT_NAME")%></td><td class="value_cell" style="font-weight:bold;" id="confirm_product"></td></tr>
									<tr><td><%=trans("MES_MAX_DIAGRAMS")%></td><td class="value_cell" id="confirm_max_diagrams"></td></tr>
									<tr><td><%=trans("MES_MAX_SPACES")%></td><td class="value_cell" id="confirm_max_projects"></td></tr>
									<tr><td><%=trans("MES_PRICE_PER_USER")%></td><td class="value_cell"><span id="confirm_price"></span></td></tr>
									<tr><td><%==trans("MES_NUM_USERS")%></td><td class="value_cell"><span id="confirm_users"></span></td></tr>
									<tr><td><%=trans("MES_NO_MONTHS")%></td><td class="value_cell">12</td></tr>
									<tr><td><%=trans("MES_SUM")%></td><td class="value_cell"><span id="confirm_sum"></span></td></tr>
									<tr><td><%=trans("MES_REMAINING")%></td><td class="value_cell"><span id="confirm_remaining"></span></td></tr>
									<tr><td><%=trans("MES_MVA")%></td><td class="value_cell"><span id="confirm_mva"></span></td></tr>
									<tr style="font-weight:bold;"><td><%=trans("MES_TOTAL")%></td><td class="value_cell"><span id="confirm_total"></span></td></tr>
								</table>
								
								<div style="height:5px;"></div>

								<div id="confirm_free" class="panic_button" style="margin-left:5px; margin-right:5px; background:coral;" onclick="ctrl.onConfirmFree()"><%=trans("MES_GET_FOR_FREE")%></div>
								<div id="confirm_pay">									
									<div class="panic_button" style="margin-left:5px; margin-right:5px; background:coral;" onclick="ctrl.onConfirmPay()"><%=trans("MES_PROCEED_TO_PAY")%></div>
								</div>

								<div class="panic_button low_panic" style="margin-left:5px; margin-right:5px;" onclick="ctrl.onConfirmCancel()"><%=trans("cancel")%></div>
							</td>
							<td width="30%">
							</td>					
						</tr>
					</table>				
				</div>
				
				<div style="display:none;" id="card">					
					<table width="100%">
						<tr>
							<td width="30%">
							</td>							
							<td>								
								<h2><%=trans("MES_PAYMENT")%></h2>
								
								<table class="grid_table" style="">
									<tr><td><%=trans("MES_PRODUCT_NAME")%></td><td class="value_cell" style="font-weight:bold;" id="card_product"></td></tr>
									<tr style="font-weight:bold;"><td><%=trans("MES_TOTAL")%></td><td class="value_cell"><span id="card_total"></span></td></tr>
								</table>
								
								<div id="card_type_border" style="margin-top:10px; padding:2px; background:red; display:inline-block;">
									<select style="margin:0px; padding:3px;" id="card_type" onchange="">
										  <option value="none"><%=trans("card_type")%></option>
										  <option value="visa">VISA</option>
										  <option value="mastercard">Mastercard</option>
										  <option value="amex">American Express</option>
									</select>
									
								</div>
								<img src="/static/3_Card_Multicard_horizontal.jpg" width="108" height="34" style="vertical-align:bottom;"></img>
								
								
								<div style="margin-top:10px;">
									<label for="card_number" style="margin:5px;"><%=trans("card_number")%></label><br />
									<div id="card_number_border" style="display:inline-block; margin:3px; padding:2px; background:#00ff00;">

										<input class="cap_width acc" style="margin:0px;" id="card_number" type="tel" maxlength="23" onkeydown="" autocomplete="off"/>

									</div>
								</div>

								<div style="margin-top:0px;">										
									<div id="expire_month_border" style="display:inline-block; margin:3px; padding:2px; background:red;">
										<select style="margin:0px; padding:3px;" id="expire_month" onchange="">
										  <option value="none"><%=trans("expire_month")%></option>
										</select>
									</div>

									<div id="expire_year_border" style="display:inline-block; margin:3px; padding:2px; background:#00ff00;">
										<select style="margin:0px; padding:3px;" id="expire_year" onchange="">
										  <option value="none"><%=trans("expire_year")%></option>
										</select>
									</div>
									
									<div style="display:inline-block;">
										<label for="cvv2" style="margin:5px;"><%=trans("cvv2")%></label><br />
										<div id="cvv2_border" style="display:inline-block; margin:3px; padding:2px; background:#00ff00;">
											<input class="cap_width" style="width:50px; margin:0px;" id="cvv2" type="tel" maxlength="4" onkeydown=""/>
										</div>
									</div>
								</div>
								
								<table class="form_table" style="margin-top:10px;">
									<tr>
										<td width="50%" style="padding:0px">
											<label for="first_name" style="margin:5px;"><%=trans("first_name")%></label><br />
											<div id="first_name_border" style="display:inline-block; margin:3px; padding:2px; background:#00ff00;">
												<input class="cap_width" style="width:130px; margin:0px;" id="first_name" type="text" maxlength="25" onkeydown=""/>											
											</div>
										</td>
										<td width="50%" style="padding:0px">
											<label for="last_name" style="margin:5px;"><%=trans("last_name")%></label><br />
											<div id="last_name_border" style="display:inline-block; margin:3px; padding:2px; background:#00ff00;">
												<input class="cap_width" style="width:130px; margin:0px;" id="last_name" type="text" maxlength="25" onkeydown=""/>
											</div>
										</td>
									</tr>
								</table>
								
								
								<div style="height:20px;"></div>
								<div style="margin:5px; color:#a00000" id="card_error"></div>

								<div class="panic_button" style="margin-left:5px; margin-right:5px; background:coral;" onclick="view.onCardPay()"><%=trans("MES_PAY")%></div>

								<div class="panic_button low_panic" style="margin-left:5px; margin-right:5px;" onclick="ctrl.onCardCancel()"><%=trans("cancel")%></div>
							</td>
							<td width="30%">
							</td>					
						</tr>
					</table>				
				</div>				
				
				<div style="display:none;" id="success">
					<table width="100%">
						<tr>
							<td width="30%">
							</td>							
							<td style="min-width:312px;">
								<h2><%=trans("MES_PURCHASE_COMPLETED")%></h2>
								<p><%==trans("MES_PURCHASE_COMPLETED_TEXT")%></p>
								<p><%==trans("MES_ORDER_ID")%>: <span id="success_trans_id"></span></p>
								<div id="success_receipt">
									<p><%==trans("MES_PAYSYS_ID")%>: <span id="success_trans_number"></span></p>
									<p><%==trans("MES_ORDER_DATE")%>: <span id="success_date"></span></p>									
									<p><%==trans("MES_PRODUCT_NAME")%>: <span id="success_product"></span></p>
									<p><%==trans("MES_NUM_USERS")%>: <span id="success_users"></span></p>
									<p style="font-weight:bold;"><%==trans("MES_TOTAL")%>: <span id="success_total"></span></p>
								</div>
								<p><%==trans("MES_CONTACT_SUPPORT")%>: <a href="mailto:drakon.editor@gmail.com">drakon.editor@gmail.com</a><br /></p>
								<div style="height:20px;"></div>
								<a href="/ide/spaces" class="panic_button" style="margin-left:5px; margin-right:5px; background:coral;"><%=trans("workspaces")%></a>
								<a href="/account" class="panic_button low_panic" style="margin-left:5px; margin-right:5px;"><%=trans("Account")%></a>
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
							<td style="min-width:312px;">
								<h2 id="failure_header"></h2>
								<p id="failure_text"></p>
								
								<div style="height:20px;"></div>
								
								<a href="/buy" class="panic_button" style="margin-left:5px; margin-right:5px;"><%=trans("back")%></a>
								
							</td>
							<td width="30%">
							</td>					
						</tr>
					</table>				
				</div>				

			</div>
		</div>
		
		<div>
			<div class="center" style="padding-top:40px; color:#8b0000; max-width:768px; text-align:center; padding-bottom:20px; line-height:130%; font-size:90%;">
				DRAKON Labs Stepan Mitkin<br />				
				Org nr 915415431<br />
				<a style="color:#8b0000;" href="mailto:drakon.editor@gmail.com">drakon.editor@gmail.com</a><br />
				<a href="/terms" style="color:#8b0000;"><%=trans("MES_TERMS")%></a>
				
				<div style="padding:10px;">Copyright 2015-2018 DRAKON Labs</div>

					
			</div>
		</div>		
	</div>	
	
</div>


<div id="working" class="full_screen abs" style="text-align:center; display:none;">
	<div class="full_screen abs" style="display:inline-block; background:black; opacity:0.3"></div>
	<div style="display:inline-block; position:absolute; background:white; cursor:default; padding-top:10px; margin:0px; border: solid 1px grey; width:120px; height:20px; left:calc(50% - 60px); top:calc(50vh - 15px);"><%=trans("working")%></div>
</div>

<div id="panic" class="full_screen" style="display:none; background:white;">
	<div style="width:300px; position:absolute; left:calc(50% - 150px); top:calc(50vh - 97px); text-align:center;">
		<div id="panic_message" style="margin-bottom:30px; text-align:center; padding:5px;"></div>

		<div style="display:inline-block;">
			<div class="panic_button" onclick="window.location.reload()" ><%=trans("dia_reload")%></div>
			<div class="panic_button" onclick="window.history.back()" ><%=trans("dia_back")%></div>
			<a href="/" class="panic_button" style="background:coral;"><%=trans("dia_home")%></a>
		</div>

	</div>
</div>


</div>

<%==include("Config")%>
<%==include("CallTrace")%>
<%==include("HtmlUtils")%>
<%==include("Logon")%>
<%==include("Signup")%>
<%==include("PayView")%>
<%==include("PayCtrl")%>


<%==include("Config")%>
<%==include("DTools")%>
<%==include("Utils")%>

<script>

var gLanguage = "<%=language%>"

% if use_capture then
var gUseCapture = true
% else
var gUseCapture = false
% end

var strings = <%==messages%>
function translate(text) {
	if (text in strings) {
		return strings[text]
	}
	return text
}

var gReferer = "<%=referer%>"

% if url_language ~= "" then
HtmlUtils.setCookie("language", "<%=url_language%>")
% end

var prices = {
	products: {
		basic: {
			name: "PROD_BASIC",
			price: 0,
			minUsers: 1,
			maxUsers: 1,
			maxDiagrams: <%=basic_max_diagrams%>,
			maxSpaces: <%=basic_max_spaces%>,
			periodMon: <%=basic_period%>
		},
		extended: {
			name: "PROD_EXTENDED",
			price: <%=extended_price%>,
			minUsers: 1,
			maxUsers: 1,
			maxDiagrams: <%=extended_max_diagrams%>,
			maxSpaces: <%=extended_max_spaces%>,
			periodMon: <%=extended_period%>
		},
		team: {
			name: "PROD_TEAM",
			price: <%=team_price%>,
			minUsers: <%=team_min_users%>,
			maxUsers: <%=team_max_users%>,
			maxDiagrams: <%=team_max_diagrams%>,
			maxSpaces: <%=team_max_spaces%>,
			periodMon: <%=team_period%>
		}
	},
	currency: "EUR",
	minPayment: <%=min_payment%>,
	paysys: "<%=paysys%>",
	completeDelay: <%=complete_delay%>,
	mva: <%=mva%>
}

var logonCtrl = new Logon(window, document, translate)

var user = {
	id: "<%=user_id%>",
	name: "<%=user_name%>"
}

var view = new PayView(window, document, translate, prices)
view.init()
window.onerror = view.onError


var ctrl = new PayCtrl(translate, prices, user)
ctrl.view = view

window.onload = function() {
	ctrl.init(window.location.search)
}


var signupCtrl = new Signup(window, document, translate,
	"userName", "email", "pass", "pass2", "signup_message", view.showWorking, ctrl.onLogon, view.hideWorking, gUseCapture)


function signup() {
	var iagree = document.getElementById("i_agree")
	if (iagree.checked) {
		signupCtrl.signup("buy")
	} else {
		HtmlUtils.setText(
			"signup_message",
			translate("MES_AGREE")
		)
	}
}

function onCaptureLoadCallback() {
	signupCtrl.onCaptureLoadCallback(grecaptcha)
};


</script>

<%==google_anal%>

</body>
</html>


