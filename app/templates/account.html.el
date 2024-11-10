<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"></meta>
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>


<link rel="shortcut icon" href="/static/favicon.ico" />
<link rel="icon" type="image/png" href="/static/favicon.png" />

<title><%=application%> - <%=trans("page_account")%></title>


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
    font-family: 'lato';
    src: url('/static/fonts/lato-bold-webfont-webfont.eot');
    src: url('/static/fonts/lato-bold-webfont-webfont.eot?#iefix') format('embedded-opentype'),
         url('/static/fonts/lato-bold-webfont-webfont.woff2') format('woff2'),
         url('/static/fonts/lato-bold-webfont-webfont.woff') format('woff'),
         url('/static/fonts/lato-bold-webfont-webfont.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;

}




@font-face {
    font-family: 'lato';
    src: url('/static/fonts/lato-italic-webfont.eot');
    src: url('/static/fonts/lato-italic-webfont.eot?#iefix') format('embedded-opentype'),
         url('/static/fonts/lato-italic-webfont.woff2') format('woff2'),
         url('/static/fonts/lato-italic-webfont.woff') format('woff'),
         url('/static/fonts/lato-italic-webfont.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;

}


@font-face {
    font-family: 'lato';
    src: url('/static/fonts/lato-regular-webfont-webfont.eot');
    src: url('/static/fonts/lato-regular-webfont-webfont.eot?#iefix') format('embedded-opentype'),
         url('/static/fonts/lato-regular-webfont-webfont.woff2') format('woff2'),
         url('/static/fonts/lato-regular-webfont-webfont.woff') format('woff'),
         url('/static/fonts/lato-regular-webfont-webfont.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;

}

body, select, input, h1, h2, h3, p, ul, ol, a {
	font-family: lato, Arial, sans-serif;
}

body, select, input {
	font-size: 14pt;
}

strong {
	font-weight: bold;
}

h3 {
    font-size: 24px;
    margin-top: 50px;
    margin-bottom: 10px;
    line-height: 1.1;
    text-align: center;
    font-weight:bold;
}

p, li {
    font-size: 18px;
    line-height: 24px;
}

p {
	margin-bottom: 10px;
}


h1 {
	text-align: center;
	color: #800000;
	font-size:30px;

	margin-top:32px;
	margin-bottom:10px;
}

h2 {
	text-align: left;
	color: #800000;
	font-size:28px;

	margin-top: 70px;
	margin-bottom:10px;
}


h2 img {
	vertical-align: middle;
	margin-right:5px;
}


table.normal_table
{
	border-collapse: collapse;
}

table.normal_table td, th
{
	border: solid 1px grey;
	padding: 5px;
}

table.normal_table th
{
	font-weight: bold;
}

table.contents img {
	vertical-align: middle;
	margin-right:5px;
}




.illustration {
	text-align:center;
}

.illustration img {
	vertical-align:top;
}

.prices_block {
	text-align:center;
	padding-top:10px;
	padding-bottom:10px;
	margin-top:10px;
	margin-bottom:10px;
	background:#ECF3F9;
}

.prices_block img {
	vertical-align:top;
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
	text-align: left;
}

ol {
    list-style-type: decimal;
    padding-left:30px;
}

ol li {
	display: list-item;
	text-align: justify;
}

.top_menu {
	display:inline-block; position:fixed; left:0px; top:0px; width:100%;
	height:60px;
	background: #455A64;
/*	border-bottom: solid 1px #c0c0c0;
	box-shadow: 0px 3px 5px #f0f0f0; */
}

.under_top_menu {
	height:60px;
}

.top_menu_mob {
	height:50px;
	background: white;
/*	border-bottom: solid 1px #c0c0c0;
	box-shadow: 0px 3px 5px #f0f0f0; */
}

.menu_table {
	height:50px;
	margin:auto;
	max-width:900px;
}

table.menu_table td {
	vertical-align: middle;
}

.top_menu_item {
	display:inline-block;
	margin-left:3px;
	margin-right:3px;
	padding:3px;
	margin-top:11px;
	color: white;
}

.top_menu_item a {
	text-decoration:none;
	color: white;
}

.top_menu_item:hover {
	border-bottom: solid 2px white;
}

a.top_menu_item_wild {
	margin-left:5px;
	margin-right:5px;
	padding:10px;
	padding-bottom:10px;
	background: coral;
	color:white;
	text-size:110px;
	border-radius:5px;
	text-decoration:none;
}


.top_menu_item_wild a {
	text-decoration:none;
	color: white;
}

.top_menu_item_wild a:hover {
	text-decoration:none;
	color: white;
}


.popup {
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
	border: solid 1px #808080;
	color: black;
}

.footer_table {
	margin: auto;
	width: 100%;
}

.footer_table td, th {
	padding: 5px;
	border: none;
}

.footer_table td {
	text-align: left;
}

.footer_table a {
	text-decoration:none;
	color: white;
}

.footer_table a:hover {
	text-decoration:none;
	color: pink;
}


.footer_table th {
	color: pink;
	text-align: left;
}

.video-part {
	text-align: center;
	margin-top: 20px;
	margin-bottom: 20px;
}

.author {
	text-align: right;
}

.ex_pic {
	display: block;
	vertical-align: top;
}

.ex_text {
	display: block;
	vertical-align: top;
	
-webkit-column-break-inside: avoid;
          page-break-inside: avoid;
               break-inside: avoid;	
}

.ex_block {
	display: block;
}


@media (min-width: 700px) {	
	.ex_pic {
		display:table-cell;
		padding-left:10px;
	}

	.ex_text {
		background:none;
		display:table-cell;
	}	
	
	.ex_block {
		display:table-row;
	}
		
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

p.mob_menu_item {
	color: #880000;
	margin:20px;
}

p.mob_menu_item a {
	color: #880000;
	text-decoration: none;
}

a.mob_menu_item_link {
	color: #880000;
	text-decoration: none;
	display:block;
	padding:20px;
}

% if content_path ~= "logon"  and content_path ~= "start-mind-map" and content_path ~= "start-drakon" then
.red_back {
	
	background:#4B4B4B;
}
% else
.red_back {
	background:white;
}
% end

.white_back {
	background:white;
}

.cap_width {
	width: 288px;
}

.error_message {
	color:#900000;
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

textarea:focus, input:focus{
    outline: none;
}

input {
	font-size:13pt;
	padding:6px;
	border: solid 1px grey;
}

table.form_table td {
	padding-top:5px;
	padding-bottom:5px;
}

.field_error {
	color:#800000;
	display: none;
	font-weight: bold;
}

input[type=checkbox] {
	  -ms-transform: scale(2); /* IE */
  -moz-transform: scale(2); /* FF */
  -webkit-transform: scale(2); /* Safari and Chrome */
  -o-transform: scale(2); /* Opera */
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


.price_container {
	display: inline-block;
	border: none;
	margin: 20px;
	border-radius:4px;

	border-bottom: solid 1px silver;
}

.price_container h3 {
	margin:10px;
	color: #455A64;
	font-weight:normal;
	font-size:130%;
}

.price_container p {
	margin:10px;
	text-align:center;
}

.total {
	margin:10px;
	text-align:center;
	font-size:110%;
}

.the_number {
	font-weight:bold;
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

.choose_dia {
	text-align:center;
}

</style>

<style>

.big_block {
	display: block;
}

.left_meny {
	display: block;
}

.current_view {
	display: block;
}


table.grid_table td, table.grid_table th {
    border-bottom: 1px solid #c0c0c0;
}

table.grid_table th {
    border-top: 1px solid #c0c0c0;
}

table.grid_table {
	border-collapse: collapse;
	min-width:300px;
}

table.grid_table td {
	padding: 6px;
}


@media (min-width: 700px) {
	.big_block {
		display: table-row;
	}

	.left_meny {
		display: table-cell;
	}

	.current_view {
		display: table-cell;
	}
	
	.top_menu_big {
		display: block;
	}

	.top_menu_small {
		display: none;
	}	
}

.no_under {
	text-decoration: none;
}

.left_button {
	white-space: nowrap;
	cursor: pointer;
	padding: 10px;
	margin-bottom:5px;
}

.active_left {
	background:white;
	color:black;
}

.inactive_left {
	background:#455A64;
	color:white;
}

h2 {
	margin-top:10px;
}

.tech a {
	color: #FFC300;
}

</style>

</head>


<body style="background:white;">

<div id="loading" class="full_screen" style="">
	<div style="width:160px; position:absolute; left:calc(50% - 80px); top:calc(50vh - 97px);">
		<img src="/static/images/drakosha-loading.png" width="160" width="160"></img>
		<div style="color:#FF817D; text-align:center; font-size:25px;"><%=trans("loading")%></div>
	</div>
</div>


<div id="ui" style="display:none;">
	
	<div class="top_menu desktop_only">

		<table class="menu_table">
			<tr style="height:60px;">
				<td style="width:185px;">
					<a href="/">
						<img src="/static/logo-text-img-s-2-hub.png" width="140" height="40" alt="<%=application%> logo" draggable="false" style="vertical-align: middle; margin-left:5px;"></img>
					</a>
				</td>

				<td style="width:100%; text-align:right;">
					<span class="top_menu_item"><a href="/read/docs"><%=trans("Documentation")%></a></span>
					% if user_id == "" then

					% else

					<span class="top_menu_item common_button" id="account"><%= user_name %></span>
					<a href="/ide/dashboard" class="top_menu_item_wild"><%=trans("MES_MY_DIAGRAMS")%></a>

					% end

					<img id="languages" src="/static/earth2.png" width="40" height="40" alt="Change language" style="vertical-align: middle; margin-right:10px;" class="common_button"></img>
				</td>
			</tr>
		</table>
	</div>
	<div class="under_top_menu desktop_only"></div>
	<div class="top_menu_mob mobile_only">
		<table class="menu_table">
			<tr style="height:50px;">
				<td style="width:185px;">
					<a href="/">
						<img src="/static/logo-text-img-s-hub.png" width="120" height="40" alt="<%=application%> logo" draggable="false" style="vertical-align: middle; margin-left:5px;"></img>
					</a>
				</td>

				<td style="width:100%; text-align:right;">
					<img src="/static/red-menu.png" width="30" height="30" alt="Menu" id="mob_menu_butt" draggable="false" style="vertical-align: middle; margin-right:10px;"></img>
				</td>
			</tr>
		</table>
	</div>	

	<div class="center" style="max-width: 900px;">
		<div class="big_block" style="width:100%">

			<div class="left_menu" style="vertical-align: top;">
				<div style="background:#cFd1d2; padding:5px; padding-bottom:1px;">
					<div id="personal_tab" class="left_button"><%=trans("MES_PERSONAL_DETAILS")%></div>
					<div id="language_tab" class="left_button"><%=trans("MES_LANGUAGE")%></div>
					<div id="password_tab" class="left_button"><%=trans("MES_PASSWORD")%></div>
						
					<div id="subscription_tab" class="left_button"><%=trans("MES_SUBSCRIPTION")%></div>					
				</div>
			</div>
			<div class="current_view" style="background:white; vertical-align: top; padding-left:10px; padding-right:10px;">
				<div id="personal_view" style="display:none;">
					<h2><%=trans("MES_PERSONAL_DETAILS")%></h2>
					<div style="font-size:120%; margin-bottom:20px;"><%=user_name%></div>
					<label for="email"><%=trans("email")%></label><br />
					<div class="field_error" id="email_error" ></div>
					<input id="email" type="email" />
					<p id="personal_message"></p>
					<p style="text-align:left;">
						<div class="panic_button" style="display:inline-block; margin-left:0px;" onclick="account.savePersonal()"><%=trans("save changes")%></div>
					</p>
				</div>
				<div id="language_view" style="display:none;">
					<h2><%=trans("MES_INTERFACE_LANGUAGE")%></h2>
					<select id="language_combo" style="margin-top:10px;" onchange="account.languageSelected()">
					  <option value="en-us">English</option>
					  <option value="ru">Русский</option>
					</select>
					
					<div style="height:20px;"></div>
					<h2><%=trans("MES_DIAGRAM_LABELS")%></h2>
					<select id="suggest_combo" style="margin-top:10px; height:30px;" onchange="account.languageSuggested()">
					  <option value="from_interface"><%=trans("MES_FROM_INTERFACE")%></option>
					  <option value="custom"><%=trans("MES_CUSTOM")%></option>
					</select>
					<div style="height:10px;"></div>					
					<label for="yes_text"><%=trans("DIA_YES")%></label><br />
					<div class="field_error" id="yes_error" ></div>
					<input id="yes_text" type="text" />
					<div style="height:10px;"></div>
					<label for="no_text"><%=trans("DIA_NO")%></label><br />
					<div class="field_error" id="no_error" ></div>
					<input id="no_text" type="text" />
					<div style="height:10px;"></div>
					<label for="end_text"><%=trans("DIA_END")%></label><br />
					<div class="field_error" id="end_error" ></div>
					<input id="end_text" type="text" />
					<div style="height:10px;"></div>
					<p id="language_message"></p>
					<p style="text-align:left;">
						<div class="panic_button" style="display:inline-block; margin-left:0px;" onclick="account.saveYesNo()"><%=trans("save changes")%></div>
					</p>
				</div>
				<div id="password_view" style="display:none;">
					<h2><%=trans("MES_PASSWORD")%></h2>
					
					<label for="old_pass"><%=trans("old password")%></label><br />
					<div class="field_error" id="old_pass_error" ></div>
					<input id="old_pass" type="password" />							
					<div style="height:10px;"></div>
					<label for="password"><%=trans("new password")%></label><br />
					<div class="field_error" id="password_error" ></div>
					<input id="password" type="password" />
					<div style="height:10px;"></div>
					<label for="password2"><%=trans("repeat password")%></label><br />
					<div class="field_error" id="password2_error" ></div>
					<input id="password2" type="password" />				
								
					<p id="password_message"></p>
					<p style="text-align:left;">
						<div class="panic_button" style="display:inline-block; margin-left:0px;" onclick="account.changePassword()"><%=trans("update password")%></div>
					</p>
				</div>
				<div id="subscription_view" style="display:none;">
					<h2><%=trans("MES_SUBSCRIPTION")%></h2>
					<table class="grid_table">
						<tr>
							<td><%=trans("MES_PRODUCT_NAME")%></td>
							<td id="product_name"></td>
						</tr>
						<tr>
							<td><%=trans("MES_EXPIRY")%></td>
							<td id="expiry"></td>
						</tr>
						<tr>
							<td><%=trans("MES_MAX_USERS")%></td>
							<td id="max_users"></td>
						</tr>
						<tr>
							<td><%=trans("MES_MAX_SPACES")%></td>
							<td id="max_spaces"></td>
						</tr>
						<tr>
							<td><%=trans("MES_MAX_DIAGRAMS")%></td>
							<td id="max_diagrams"></td>
						</tr>
						<tr>
							<td><%=trans("MES_MONTHLY_PAYMENT")%></td>
							<td id="max_monthly"></td>
						</tr>
						<tr>
							<td><%=trans("MES_NEXT_PAYMENT")%></td>
							<td id="next_payment"></td>
						</tr>
						<tr>
							<td colspan="2" style="text-align:center;">
								<span id="active" style="background:#88ff88; padding:5px; display:none;"><%=trans("MES_LICENSE_ACTIVE")%></span>
								<span id="inactive" style="background:#ff8888; padding:5px; display:none;"><%=trans("MES_LICENSE_EXPIRED")%></span>
							</td>
						</tr>							
					</table>
					<div style="height:30px;"></div>
					<div id="cancel_sub" style="display:none; text-align:right;">
						<div class="panic_button" style="margin-left:0px; margin-right:0px; display:inline-block; font-size:10pt;" onclick="account.stopSubscription()"><%=trans("MES_CANCEL_SUBSCRIPTION")%></div>
					</div>
					<div id="delete_sub" style="text-align:right;">
						<div class="panic_button" style="margin-left:0px; margin-right:0px; margin-top:50px; display:inline-block; font-size:10pt; background:red;" onclick="account.deleteAccount()"><%=trans("MES_DELETE_ACCOUNT")%></div>
					</div>
				</div>
				<div id="transactions_view" style="display:none;">
					<h2><%=trans("MES_TRANSACTIONS")%></h2>
					
					<div id="no_trans" style="display:none; text-align:center; padding:20px;"><%=trans("MES_NO_TRANS")%></div>
					<div id="yes_trans" style="display:none;">
						<table id="transactions" class="grid_table" style="margin:5px;">
							<tr>
								<th><%=trans("MES_DATE")%></th>	
								<th><%=trans("MES_TYPE")%></th>	
								<th><%=trans("MES_PLAN")%></th>
								<th><%==trans("MES_NUM_USERS")%></th>
								<th><%=trans("MES_AMOUNT")%></th>
							</tr>
					</table>
					</div>
				
				</div>
				<div id="delete_view" style="display:none;">
					<h2><%=trans("MES_DELETE_ACCOUNT")%></h2>
					<p><%=trans("MES_DELETE_ACCOUNT_AND_DIAGRAMS")%></p>
					<div style="text-align:right;"><div class="panic_button" style="display:inline-block; background:red;" onclick="account.deleteAccount()"><%=trans("MES_DELETE_ACCOUNT")%></div></div>
				</div>
			</div>
		</div>
	</div>
</div>

<div id="warning_sub" class="center" style="width:300px; display:none;">
	<p><%==trans("MES_CANCEL_CONFIRM")%></p>
	<div class="panic_button" onclick="account.stop1()"><%=trans("MES_CANCEL_SUBSCRIPTION")%></div>
	<div class="panic_button" onclick="account.cancelDelete()"><%=trans("cancel")%></div>
</div>

<div id="warning1" class="center" style="width:300px; display:none;">
	<%==trans("MES_CONFIRM_DELETE_USER")%>
	<div class="panic_button" onclick="account.delete1()"><%=trans("MES_DELETE_ACCOUNT")%></div>
	<div class="panic_button" onclick="account.cancelDelete()"><%=trans("cancel")%></div>
</div>
<div id="warning2" class="center" style="width:300px; display:none;">
	<h2><%=user_name%></h2>
	<%==trans("MES_CONFIRM_DELETE_USER2")%>
	<ul id="shoot_list">
	</ul>
	<div class="panic_button" onclick="account.delete2()" style="background:red;"><%=trans("MES_DELETE_ACCOUNT")%></div>
	<div class="panic_button" onclick="account.cancelDelete()"><%=trans("cancel")%></div>
</div>


<div id="mob_menu" style="display:none;">
	<table class="menu_table">
		<tr style="height:50px;">
			<td style="width:185px;">
				<a href="/">
					<img src="/static/logo-text-img-s-hub.png" width="120" height="40" alt="<%=application%> logo" draggable="false" style="vertical-align: middle; margin-left:5px;"></img>
				</a>
			</td>

			<td style="width:100%; text-align:right;">
				<img src="/static/red-cross.png" width="30" height="30" alt="Menu" id="close_mob_menu_butt" draggable="false" style="vertical-align: middle; margin-right:10px;"></img>
			</td>
		</tr>
	</table>

	<p class="mob_menu_item" id="languages_mob"><%=trans("Language")%></p>
	
	% if user_id == "" then
	% else
	<a href="/ide/dashboard" class="mob_menu_item_link" style="font-weight:bold;"><%=trans("MES_MY_DIAGRAMS")%></a>
	% end	


	<a href="/read/docs" class="mob_menu_item_link" ><%=trans("Documentation")%></a>
	
	% if user_id == "" then
	<a href="/logon" class="mob_menu_item_link" id="logon_mob"><%=trans("Login")%></a>
	<a href="/signup" class="mob_menu_item_link" id="signup_mob"><%=trans("page_signup")%></a>
	% else
	<a href="/account" class="mob_menu_item_link" ><%= user_name %></a>
	<p class="mob_menu_item" onclick="code.logout()" ><%=trans("Logout")%></p>
	% end		
</div>

<div id="working" style="display:none">
	<p style="padding:10px;" id="working_text"><%=trans("working")%></p>
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





<div id="dialog"></div>




<%==include("Logon")%>
<%==include("DTools")%>
<%==include("Utils")%>
<%==include("HtmlUtils")%>
<%==include("Nav")%>
<%==include("Account")%>


<script>


% if on_premises then
var onPremises = true
% else
var onPremises = false
% end

var strings = <%==messages%>
function translate(text) {
	if (text in strings) {
		return strings[text]
	}
	return text
}

var gUser = {
	id: "<%=user_id%>",
	name: "<%=user_name%>"
}

var language = "<%=language%>"
var account = new Account(window, document, translate, language)
account.init()

var gUserId = "<%=user_id%>"
var gLanguage = "<%=language%>"





</script>

<%==google_anal%>

</body>


