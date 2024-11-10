<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
% if page_code == "main" then
<meta name="yandex-verification" content="" />
<meta name="google-site-verification" content="" />
% end
<meta name="description" content="<%= description %>" />
<link rel="shortcut icon" href="/static/favicon.ico" />
<link rel="icon" type="image/png" href="/static/favicon.png" />
<link rel="canonical" href="<%= my_site %>/<%= short_language %>/<%= content_path %>" />
<link rel="alternate" hreflang="x-default" href="<%= my_site %>/<%= content_path %>" />
<link rel="alternate" hreflang="en" href="<%= my_site %>/en/<%= content_path %>" />
<link rel="alternate" hreflang="ru" href="<%= my_site %>/ru/<%= content_path %>" />


<title><%= title %></title>

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

h1, h2, h3, h4, h5 {
	line-height:1.3;
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

table.normal_table td, table.normal_table th
{
	border: solid 1px grey;
	padding: 5px;
}

table.normal_table th
{
	font-weight: bold;
	vertical-align: middle;
}

table.contents img {
	vertical-align: middle;
	margin-right:5px;
}




.illustration {
	text-align:center;
	padding-top:10px;
	padding-bottom:20px;
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
	background:#F0F0F0;
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
    padding-left:30px;
    margin-bottom:10px;
}

ul li {
	display: list-item;
	text-align: left;
}

ol {
    list-style-type: decimal;
    padding-left:30px;
    margin-bottom:10px;
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

@media (max-width: 800px) {
	.top_menu_item {
		margin-left:0px;
		margin-right:1px;
		padding:2px;
	}
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
	text-align:center;
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


@media (min-width: 760px) {	
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

@media (min-width: 760px) {
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

% if not skip_footer and content_path ~= "logon"  and content_path ~= "start-mind-map" and content_path ~= "start-drakon" and content_path ~= "signup-trial" and content_path ~= "trial" then
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
	line-height: 1.3;
}

a.panic_button {
	text-decoration: none;
}


.panic_button:active {
	transform: translate(0px, 2px);
}

.start_button {
	color: white;
	background: #800000;
	border: solid 2px #800000;
}

.try_button {
	color: #800000;
	background: white;
	border: solid 2px #800000;
}

.low_panic {
	margin-top:10px;
}

.price_name {
	color: grey;
	font-size:12pt;
}

.purchase_button {
	display: block;
	background: #7CB650;
	color:white;
	border-radius: 4px;
	border-bottom: solid 2px #537F32;
	padding: 10px;
	margin: 0px;
	text-align: center;
	cursor: pointer;	
}

a.purchase_button {
	text-decoration: none;
}


.purchase_button:active {
	transform: translate(0px, 2px);
}


textarea:focus, input:focus{
    outline: none;
}

input {
	font-size:14pt;
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
	width:200px;
	display: inline-block;
	vertical-align:top;
	border: none;
	margin: 5px;
	border-radius:4px;

	background: white;
	border-bottom: solid 1px silver;
}

.current_plan {
	height:30px;
}

.current_plan_selected {
	height: 25px;
	background: #455A64;
	color: white;
	font-size: 12pt;
	text-align: center;
	cursor: pointer;
	padding-top:5px;
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

.main_body {
	max-width: 900px;
	padding-left:10px;
	padding-right:10px;
	margin:auto;
	padding-bottom:20px;
}

.headline {
	font-size:200%;
	margin-bottom:10px;
	padding-top:10px;
	color:black;
	text-align:center;
}

.subheadline {
	font-size:130%;
	margin:20px;
	color:black;
	text-align:center;
}

.headline_mob {
	font-size:160%;
	margin:0px;
	color:black;
	text-align:center;
}

.subheadline_mob {
	font-size:130%;
	margin:20px;
	color:black;
	text-align:center;
}

.mobile_band {
	padding-bottom:20px;
	
    background-image: url('/static/20180418130643-bright-s.png');
    background-repeat: repeat;
    background-position: center center;	
}

.minimal {
	padding-top:20px;
	background:white;
	padding-bottom:30px;
}

.band1 { 
    background-image: url('/static/20180418130643-bright.png');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center top;
    
    height:60vh;
}

.band2 { 
    background-image: url('/static/explaining.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center top;
    
    height:60vh;
}

.pop {
	background:white;
	font-size:100%;
}

@media (min-width: 760px) {	
	.pop { 
		/*
		background-image: url('/static/popurri-s.jpg');
		background-repeat: repeat;
		background-attachment: fixed;
		background-position: left center;
		*/
		padding-top:60px; padding-bottom:60px;		
	}
}

.grey_band {
	padding-top:30px;
	padding-bottom:30px;
	background:#f0f0f0;
	font-size:100%;
}

div.grey_band h2 {
	text-align:center;
	margin-top:0px;
	font-size:150%;
}


div.pop h2 {
	text-align:center;
	margin-top:0px;
	font-size:150%;
	padding-top:20px;
}


.button_holder {
	margin:auto; 
	max-width:300px;
}

.reviewer {
	font-weight: bold;
}

.review_headline {
	font-size:130%;
}

.bigq {
	font-size:200%;
}

.review {
	display:inline-block;
	max-width:400px;
	padding:10px;
	background:white;
	margin:10px;
	vertical-align:top;
	border-radius:4px;
	border-bottom:solid 2px silver;
}

div.review p {
	text-align:left;
}

em {
	font-style:italic;
}

.scenery_mob {
	height:300px;
	background-image:url('/static/explaining-s.jpg');
	background-position: center;
	background-repeat:no-repeat;
	background-size:auto auto;		
}





.flex_img {
	max-width: 100%;
	height: auto;
	width: auto\9; /* ie8 */
}

.example_block {
	margin: 10px;
	background: #ffffd0;
	padding: 10px;
}

.blog_header {
	font-size:120%;
	color: #800000;
	
	margin-top:50px;
	margin-bottom:10px;
	
}

.blog_header a {
	color: #800000;
	text-decoration: none;
}

.tech a {
	color: #FFC300;
}

.docs a {
	color: #000070;
	text-decoration: none;
}

.docs a:hover {
	color: #000070;
	text-decoration: underline;
}

.anc {
	height:10px;
	transform: translateY(-50px);
}

.slide {
	min-height:calc(95vh - 100px);
}

.half {
	display:inline-block;
	vertical-align:middle;
}


.short_slide {
	margin-bottom:50px;
}

.front_column {
	display:block;
	padding-left:10px;
	padding-right:10px;
}

.front_column p, .front_column li {
	text-align: justify;
}

@media (min-width: 760px) {
	.front_column h3, .font_column h2 {
		margin-top:10px;
	}
}

@media (max-width: 760px) {

	h1, h2, h3, h3 {
		padding-left:10px;
		padding-right:10px;
	}
}

@media (min-width: 760px) {
		
	.front_column {
		display:inline-block;
		padding:0px;		
		vertical-align:top;
		max-width:350px;
		margin-left:20px;
		margin-right:20px;
	}
	
	.short_slide {
		margin: auto;
		text-align: center;
		margin-bottom:100px;
	}	
}


.buran_back {
	background-image:url('/static/buran-mria-blue-s.jpg');
    background-repeat: no-repeat;
    background-position: center; 
    height:473px;
}

.just p, .just li {
	text-align:justify;
}

.slide p, .slide li {
	text-align:justify;
}

% if user_id == "" then 
	.yes_user {
		display:none;
	}
	.no_user {
		display:block;
	}	
	.yes_user_ib {
		display:none;
	}
	.no_user_ib {
		display:inline-block;
	}
% else
	.yes_user {
		display:block;
	}
	.no_user {
		display:none;
	}	
	.yes_user_ib {
		display:inline-block;
	}
	.no_user_ib {
		display:none;
	}	
% end


.explaining {
	background-image:url('/static/explaining-light.jpg');
	background-repeat: no-repeat;
	background-position:center top;
	background-color:white;
	
	background-size:cover;
	margin-top:-20px;
	min-height:calc(95vh - 100px);
}

.explaining2 {
	background-image:url('/static/explaining-light.jpg');
	background-repeat: no-repeat;
	background-position:center top;
	background-color:white;
	
	background-size:cover;
}

@media (max-width: 1000px) {
	.explaining {
		/*background-size: auto 100%;*/
	}
}



.lh3 {
	font-size:28px;
}

.lh2 {
	font-size:36px;
	margin:10px;
	text-align:center;
	margin-top:40px;
}

.clogo {
	vertical-align:middle;
	margin-left:10px;
	margin-right:10px;
}

ul.check {
list-style-image: url('/static/checkmark.png');
}

ul.check li {
	line-height: 1.4;
	font-size:22px;
}

.agree {
	display:none;
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
<body class="red_back">



<div id="ui">
	<div style="background:white;">
% if not skip_header then
			
		<div class="top_menu desktop_only">
			<table class="menu_table">
				
				<tr style="height:60px;">
					<td style="width:185px;">
						<a href="/">
							<img src="/static/logo-text-img-s-2-hub.png" width="140" height="40" alt="<%=application%> logo" draggable="false" style="vertical-align: middle; margin-left:5px;"></img>
						</a>
					</td>

					<td style="width:100%; text-align:right;">
						% if content_path ~= "signup" then
							% if admin then
								<span class="top_menu_item"><a href="/static/adm.html">Administration</a></span>
							%end
							<span class="top_menu_item"><a href="/read/docs"><%=trans("Documentation")%></a></span>
							% if user_id == "" then
							<span class="top_menu_item"><a href="/logon" id="logon"><%=trans("Login")%></a></span>
							% if content_path ~= "signup" and content_path ~= "logon" and content_path ~= "start-drakon" and content_path ~= "start-mind-map" and content_path ~= "signup-trial" and content_path ~= "trial" then
							<a href="/signup" class="top_menu_item_wild" id="signup"><%=trans("title-signup")%></a>
							% end

							% else

							<span class="top_menu_item common_button" id="account"><%= user_name %></span>
							<a href="/ide/dashboard" class="top_menu_item_wild"><%=trans("MES_MY_DIAGRAMS")%></a>

							% end
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
		
		% if content_path == "logon" then
		<div style="margin:auto; width:320px;">

			<table width="100%">
				<tr>
					<td width="30%">
					</td>							
					<td>
						<h1><%=trans("Login")%></h1>					
						<table class="form_table" style="">
							<tr>
								<td><label for="userNameLogin"><%=trans("user name")%></label><br /><input class="cap_width" id="userNameLogin" type="text" onkeydown="code.onLoginUserDown(event)"/></td>
							</tr>
							<tr>
								<td><label for="passLogin"><%=trans("password")%></label><br /><input class="cap_width" id="passLogin" type="password" onkeydown="code.onLoginPassDown(event)"/></td>
							</tr>									
						</table>
						<p style="text-align:right;"><a href="/reset"><%=trans("forgot_pass")%></a></p>
						
						<div style="height:20px;"></div>
						<p id="logon_message" class="error_message"></p>
						<div class="panic_button" style="margin-left:5px; margin-right:5px; background:coral;" onclick="code.logon()"><%=trans("Login")%></div>
						<div class="panic_button low_panic" style="margin-left:5px; margin-right:5px;" onclick="window.history.back()"><%=trans("cancel")%></div>
					</td>
					<td width="30%">
					</td>					
				</tr>
			</table>				

		</div>
		
		% elseif content_path == "signup" then
		
		<div style="padding:10px;">
			<h1><%=trans("MES_REGISTER_FOR_FREE")%></h1>
		</div>
		<div style="margin:auto; width:320px;">
								
			<table class="form_table" style="margin-bottom:0px;">
				<tr>
					<td style="padding-left:5px;"><label for="userName_edit"><%=trans("MES_CREATE_USERNAME")%></label><br />
					<div class="field_error" id="userName_error"></div>
					<input class="cap_width" id="userName_edit" type="text" onkeydown="code.onSignupUserDown(event)"/><br />
					<span style="font-size:90%; color:#808080; padding-top:2px;"><%=trans("MES_CHARACTERS3")%></span>
					</td>
				</tr>
				<tr>
					<td style="padding-left:5px;"><label for="email_edit"><%=trans("email")%></label>
					<div class="field_error" id="email_error" ></div>
					<input class="cap_width" id="email_edit" type="email" onkeydown="code.onSignupEmailDown(event)"/></td>
				</tr>
				
			</table>		
			
			<div style="margin-left:5px;" id="captcha"></div>
			<div style="height:5px;"></div>
			<p id="signup_message" class="error_message"></p>
			
			<div class="agree">
				<table style="margin:10px; margin-bottom:30px;">
					<tr>
						<td><input id="i_agree" onchange="" type="checkbox" name="checkbox" value="" style="margin-right:10px;"></input></td>		
						<td style="padding-left:10px;"><%==trans("MES_I_AGREE")%></td>
					</tr>
				</table>			
			</div>
			
			<div id="create_account" class="panic_button" style="margin-left: 5px; margin-right:5px; background:coral; display:block;" onclick="code.signup()"><%=trans("create account")%></div>
			<!--<div id="create_account_grey" class="grey" style="margin-left: 5px; margin-right:5px; display:block;" onclick=""><%=trans("create account")%></div>-->
		</div>
		
		<div style="max-width: 900px; padding-left:10px; padding-right:10px; padding-bottom:20px;" class="center">
		% if language == "ru" then
			<h2>Что дальше?</h2>
			
			<p>Мы создадим для Вас учётную запись пользователя в <%=application%>.</p>
			<p>Мы не покажем Ваш email другим посетителям сайта.</p>
		% else
			<h2>What happens next?</h2>
			
			<p>We will create a user account for you at <%=application%>.</p>
			<p>We will not show your email to the outside world.</p>
		% end
		</div>
		
		% else
		<div class="main_body">
		<%== content %>
		</div>
		% end

% else
		<div class="">
		<%== content %>
		</div>
% end
	</div>
	
% if not skip_footer then

% if content_path ~= "logon"  and content_path ~= "start-mind-map" and content_path ~= "start-drakon" and content_path ~= "signup-trial" and content_path ~= "trial" then
	<div class="red_back">
		<div class="center" style="padding:10px; padding-top:20px; color:white; max-width:900px; text-align:center; padding-bottom:20px;">

			<div style="height:30px;"></div>
			<p style="text-align:center;"><%=trans("Feedback")%>: <a style="color:white;" href="mailto:<%=feedback_email%>"><%=feedback_email%></a></p>
			<p style="text-align:center;"><a href="/terms" style="color:white;"><%=trans("MES_TERMS")%></a></p>
			<div style="margin:30px;"><a style="color:white; max-width:100px; margin-bottom:30px;" href="#ui"><%=trans("MES_TO_TOP")%></a></div>
		</div>
	</div>
% end

% end

</div>


<div id="cookie_warning" style="display:none; position:fixed; left:0px; bottom:0px; width:100%; background:silver; color:black;">
	<table style="width:100%">
		<tr>
			<td style="padding:5px; vertical-align:middle;">
				<div class="common_button" style="text-align:center; margin:0px; padding:3px; color:black; background:white; border-radius:3px;" onclick="code.acceptCookies()"><%=trans("okay")%></div>
			</td>
			<td style="padding:5px 5px 5px 0px; vertical-align:middle;">
<span style="color:black;"><%==trans("explain_cookies")%></span>
			</td>
		</tr>
	</table>
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
	<a href="/signup" class="mob_menu_item_link" id="signup_mob"><%=trans("title-signup")%></a>
	% else
	<a href="/account" class="mob_menu_item_link" ><%= user_name %></a>
	<p class="mob_menu_item" onclick="code.logout()" ><%=trans("Logout")%></p>
	% end	
</div>

<div id="dialog"></div>

<%==include("HtmlUtils")%>
<%==include("Utils")%>
<%==include("Logon")%>
<%==include("Main2")%>
<%==include("Config")%>
<%==include("Signup")%>



<script>
var gLanguage = "<%=language%>"
var gUserId = "<%=user_id%>"
% if on_premises then
	var gOnPremises = true
% else
	var gOnPremises = false
% end

% if content_path == "start-drakon" then
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

% end

% if content_path == "start-mind-map" then
var examples = [
	{
		url: "/try-me?example=mind155",
		image: "mind155.png",
		ex: "/ide/doc/examples/155"
	},
	{
		url: "/try-me?example=mind160",
		image: "mind160.png",
		ex: "/ide/doc/examples/160"
	},
	{
		url: "/try-me?example=mind154",
		image: "mind154.png",
		ex: "/ide/doc/examples/154"
	},
	{
		url: "/try-me?example=mind153",
		image: "mind153.png",
		ex: "/ide/doc/examples/153"
	},
	{
		url: "/try-me?example=mind156",
		image: "mind156.png",
		ex: "/ide/doc/examples/156"
	},
	{
		url: "/try-me?example=mind158",
		image: "mind158.png",
		ex: "/ide/doc/examples/158"
	},
	{
		url: "/try-me?example=mind161",
		image: "mind161.png",
		ex: "/ide/doc/examples/161"
	},
	{
		url: "/try-me?example=mind157",
		image: "mind157.png",
		ex: "/ide/doc/examples/157"
	},
	{
		url: "/try-me?example=mind159",
		image: "mind159.png",
		ex: "/ide/doc/examples/159"
	}
]
% end


function setDivClass(id, className) {
	var div = document.getElementById(id)
	if (div) {
		div.className = className
	}
}

function goToSubscriptions() {
	window.location.href = "/account?page=subscription"
}

function markAsActive(id) {
	var div = document.getElementById(id)
	if (div) {
		div.onclick = goToSubscriptions
		setDivClass(id, "current_plan_selected")
	}
}

var strings = <%==messages%>
function translate(text) {
	if (text in strings) {
		return strings[text]
	}
	return text
}


var code = new Main2(window, document, translate, "<%= content_path %>")

code.init()

% if content_path == "logon" then
document.getElementById("userNameLogin").focus()
% end


% if content_path == "signup" then
document.getElementById("userName_edit").focus()
code.initTrial()
% end 


% if content_path == "start-drakon" or content_path == "start-mind-map" then
code.putExamples("example_hive", examples)
% end


</script>

</body>
</html>
