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


.popup {
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
	border: solid 1px #808080;
	color: black;
}


.video-part {
	text-align: center;
	margin-top: 20px;
	margin-bottom: 20px;
}

.author {
	text-align: right;
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


.cap_width {
	width: 297px;
}

.error_message {
	color:#ff5050;
}

.panic_button {
	display: block;
	background: #455A64;
	color:white;
	border-radius: 3px;
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
	background:#ff2020;
	border: solid 3px #ff2020;
}

.try_button {
	color: #500000;
	background: white;
	border: solid 3px #500000;
}



textarea:focus, input:focus{
    outline: none;
}

input {
	font-size:14pt;
	padding:6px;
	border: none;
	border-radius:3px;
}

table.form_table td {
	padding-top:5px;
	padding-bottom:5px;
}

.field_error {
	color:#ff5050;
	display: none;
	font-weight: bold;
}

input[type=checkbox] {
	  -ms-transform: scale(2); /* IE */
  -moz-transform: scale(2); /* FF */
  -webkit-transform: scale(2); /* Safari and Chrome */
  -o-transform: scale(2); /* Opera */
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
	padding:20px;
	background:white;
	margin:10px;
	vertical-align:top;
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



@media (max-width: 760px) {

	h1, h2, h3, h3 {
		padding-left:10px;
		padding-right:10px;
	}
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


ul.check {
list-style-image: url('/static/checkmark.png');
}

ul.check li {
	line-height: 1.4;
	font-size:22px;
}

</style>

<style>
.mth2 {
	color:black;
	font-weight:bold;
	font-size:40px;
	text-align:center;
	margin:10px;
}

.mtbody p {
	text-align:center;
	margin:10px;
	font-size:22px;
	line-height:1.5;
}

.mtbody {
	margin-top:30px;
}

h3.item_h3 {
	margin:10px;
	margin-bottom:20px;
	text-align: left;
}


.vitems_item_2 {
	padding:10px;
	vertical-align:top;
	text-align:center;
}

.vitems_item_3 {
	padding:10px;
	vertical-align:top;
	text-align:center;
}

.vitems_item_4 {
	padding:10px;
	vertical-align:top;
	text-align:center;
}

@media (min-width: 760px) {

	.vitems_container {
		 display:table;
		 margin:10px;
		 max-width:1000px;	
		 margin:auto;
	}

	.vitems_row {
		display:table-row;
	}

	.vitems_item_2 {
		display:table-cell; width:50%; 
	}

	.vitems_item_3 {
		display:table-cell; width:33%; 
	}

	.vitems_item_4 {
		display:table-cell; width:25%; 
	}

}


.red_back {
	background: #404040;
}


.explaining2 {
	
	background-repeat: no-repeat;
	background-position:center top;

	
	background-size:cover;
}


@media (min-width: 760px) {
	.explaining2 {
		height:100vh;
	}
	
	.almost100 {
		height:calc(100vh - 45px);
	}
}

.clogo {
	vertical-align:middle;
	margin-left:10px;
	margin-right:10px;
}

.white {
	color:white;
	text-align:left;
}

td.white a {
	color:#ffffd0;
}

</style>


</head>
<body class="red_back">


<div id="ui">
	<div style="background:white; text-align:center;">
	% local iid = 1
	% for i, block in ipairs(blocks) do
		% if block.type == "middle-text" then
		<div style="margin:auto; max-width:500px;">
			<h2 class="mth2"><%= block.header %></h2>
			% if block.text then
				<div class="mtbody"> 
				% for ii, line in ipairs(block.text) do
					<p><%= line %></p> 
				% end
				</div>
			% end
		</div>
		% end
		% if block.type == "items" then
			
			% for it, item in ipairs(block.items) do
				% iid = iid + 1
				<div style="display:inline-block; margin:10px; width:100%; max-width:800px; margin:auto;">
					<div style="display:table-row;">
						<div style="display:table-cell; width:<%= item.image_width %>px; padding:10px; vertical-align:top;">
							<img src="<%= item.image %>" style="width:<%= item.image_width %>px" />
						</div>
						<div style="display:table-cell; vertical-align:top; padding-bottom:30px;">
							<h3 class="item_h3"><%= item.header %></h3>
							% for ii, line in ipairs(item.text) do
								<p style="margin:10px; text-align:left;"><%== line %></p>
							% end
							% if item.details then
							<div style="text-align:left;">
								<div class="panic_button try_button" style="display:inline-block; margin-left:10px;" id="show<%= iid %>" onclick="showDetail('<%= iid %>')"><%= trans("MES_SHOW")%></div>
								<div class="panic_button try_button" style="display:none; margin-left:10px;" id="hide<%= iid %>" onclick="hideDetail('<%= iid %>')"><%= trans("MES_HIDE")%></div>
							</div>
							% end
						</div>
					</div>
				</div>
				<br />
				% if item.details then
					<div style="text-align:center; margin-bottom:50px; display:none;" id="detail<%= iid %>">
						<img src="<%= item.details.image %>" alt="<%= item.header %>" style="width:<%= item.details.image_width %>px; max-width:100%; vertical-align:top;" />
					</div>			
				% end
			% end
			
			
		% end
		% if block.type == "vspace" then
			<div style="height:<%= block.height %>px;"></div>	
		% end
		% if block.type == "vitems" then
			<div class="vitems_container">
				<div class="vitems_row">
				% for it, item in ipairs(block.items) do
					<div class="vitems_item_<%= #block.items %>">
						<div style="margin:10px;"><img src="<%= item.image %>" style="width:<%= item.image_width %>px" /></div>
						<h3 class="item_h3" style="text-align:center;"><%= item.header %></h3>
						% for ii, line in ipairs(item.text) do
							<p style="margin:10px;"><%= line %></p>
						% end
					</div>
				% end
				</div>
			</div>
		% end
		% if block.type == "image" then
		<div style="text-align:center;">
			% if block.hidden then
				% iid = iid + 1
				<div class="panic_button try_button" style="display:inline-block; margin-left:10px;" id="show<%= iid %>" onclick="showDetail('<%= iid %>')"><%= block.hidden.show %></div>
				<div class="panic_button try_button" style="display:none; margin-left:10px;" id="hide<%= iid %>" onclick="hideDetail('<%= iid %>')"><%= block.hidden.hide %></div>				
				<div style="text-align:center; margin-bottom:50px; display:none;" id="detail<%= iid %>">
					<img src="<%= block.src %>" alt="<%= block.alt or "" %>" style="width:<%= block.width %>; max-width:100%; vertical-align:top;" />				
				</div>
			% else
				<img src="<%= block.src %>" alt="<%= block.alt or "" %>" style="width:<%= block.width %>; max-width:100%; vertical-align:top;" />
			% end
		</div>
		% end
		% if block.type == "goto_register" then
		<div class="desktop_only">
			<div class="no_user" style="text-align:center;">
				<a class="panic_button start_button" style="display:inline-block;" href="#ui"><%= trans("MES_REGISTER_FOR_FREE") %></a>
			</div>
		</div>
		<div class="mobile_only">
			<div class="no_user" style="text-align:center;">
				<a class="panic_button start_button" style="display:inline-block;" href="/signup"><%= trans("MES_REGISTER_FOR_FREE") %></a>
			</div>
		</div>	
		% end
		% if block.type == "register" then
		<div id="register">
			% if user_id == "" then
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
				
				<table style="margin:10px; margin-bottom:30px;">
					<tr>
						<td><input id="i_agree" onchange="" type="checkbox" name="checkbox" value="" style="margin-right:10px;"></input></td>		
						<td style="padding-left:10px;"><%==trans("MES_I_AGREE")%></td>
					</tr>
				</table>			
				
				<div id="create_account" class="panic_button start_button" style="margin-left: 5px; margin-right:5px; display:block;" onclick="code.signup('/drakon')"><%= trans("MES_REGISTER_FOR_FREE") %></div>
				<!--<div id="create_account_grey" class="grey" style="margin-left: 5px; margin-right:5px; display:block;" onclick=""><%=trans("create account")%></div>-->
			</div>
				
			% end
		</div>
		% end
		% if block.type == "big_banner_low" then
		<div class="explaining2" style="text-align:center; height:100vh; background-color:<%= block.background %>; background-image:url('<%= block.image %>');">
		
			<div style="text-align:left;">
					<img src="/static/logo-text-img-s-hub-white.png" width="150" height="40" alt="DrakonHub logo" draggable="false" style="vertical-align: middle; margin-left:5px; margin-top:5px;"></img>
			</div>		
			
			<div style="display:inline-block;">
				<div style="display:table-cell; vertical-align: bottom; height:calc(100vh - 45px);">
					% for i, headline in ipairs(block.headline) do
						<div style="color:white; font-weight:bold; font-size:55px; text-align:center; margin-left:10px; margin-right:10px;"><%= headline %></div>
					% end
					<div style="height:5vh;"></div>
					<div style="text-align:center;">
						<div style="display:inline-block; max-width:600px;">
							% for i, subheadline in ipairs(block.subheadline) do
								<p style="color:white; font-weight:normal; font-size:28px; text-align:center; line-height:1.3;"><%= subheadline %></p>
							% end
						</div>
					</div>
					<div style="height:10vh;"></div>
				</div>
			</div>
		</div> 
		% end
		% if block.type == "big_banner_right" then
		<div class="explaining2" style="text-align:center; background-color:<%= block.background %>; background-image:url('<%= block.image %>');">
		
			<div style="text-align:left;">
					<img src="/static/logo-text-img-s-hub-white.png" width="150" height="40" alt="DrakonHub logo" draggable="false" style="vertical-align: middle; margin-left:5px; margin-top:5px;"></img>
			</div>		
			
			<div style="display:inline-block;">
				<div class="almost100" style="display:table-cell; vertical-align: middle;">
					<div>
						<div style="">
							<div style="height:50px;"></div>
							% for i, headline in ipairs(block.headline) do
								<h1 style="color:white; font-weight:bold; font-size:55px; text-align:left; margin:10px; padding:0px;"><%= headline %></h1>
							% end
							<div style="height:30px;"></div>
							<div style="text-align:left; margin-left:10px; margin-right:10px;">
								<div style="display:inline-block; max-width:600px;">
									% for i, subheadline in ipairs(block.subheadline) do
										<h2 style="color:white; font-weight:normal; font-size:28px; text-align:left; line-height:1.3; margin:0px; margin-bottom:10px;padding:0px;"><%= subheadline %></h2>
									% end
								</div>
							</div>
						</div>
						<div style="height:20px;"></div>
						<div style="text-align:right;">
							% if user_id == "" then
							<div style="display:inline-block; width:320px; text-align:left; margin:20px;">
													
								<table class="form_table" style="margin-bottom:0px;">
									<tr>
										<td style="padding-left:5px;">
											<label for="userName_edit" style="color:white;"><%=trans("MES_CREATE_USERNAME")%></label><br />
											<div class="field_error" id="userName_error"></div>
											<input class="cap_width" id="userName_edit" type="text" onkeydown="code.onSignupUserDown(event)"/>
											<div style="margin-top:4px;">
												<span style="font-size:90%; color:#808080; margin-top:4px;"><%=trans("MES_CHARACTERS3")%></span>
											</div>
										</td>
									</tr>
									<tr>
										<td style="padding-left:5px;"><label for="email_edit" style="color:white;"><%=trans("email")%></label>
										<div class="field_error" id="email_error" ></div>
										<input class="cap_width" id="email_edit" type="email" onkeydown="code.onSignupEmailDown(event)"/></td>
									</tr>
									
								</table>		
								
								<div style="margin-left:5px;" id="captcha"></div>
								<div style="height:5px;"></div>
								<p id="signup_message" class="error_message"></p>
								
								<table style="margin:10px; margin-bottom:30px;">
									<tr>
										<td><input id="i_agree" onchange="" type="checkbox" name="checkbox" value="" style="margin-right:10px;"></input></td>		
										<td class="white" style="padding-left:10px;"><%==trans("MES_I_AGREE")%></td>
									</tr>
								</table>			
								
								<div id="create_account" class="panic_button start_button" style="margin-left: 5px; margin-right:5px; display:block;" onclick="code.signup('<%= block.target %>')"><%= trans("MES_REGISTER_FOR_FREE") %></div>
								<!--<div id="create_account_grey" class="grey" style="margin-left: 5px; margin-right:5px; display:block;" onclick=""><%=trans("create account")%></div>-->
							</div>	
							% end
						</div>
					</div>
				</div> 
			</div>
		</div> 		
		% end
		% if block.type == "logos" then
		<div class="desktop_only" style="text-align:center;">
			% for i, logo in ipairs(block.logos) do
				<img class="clogo" src="<%= logo.src %>" />
			% end
		</div>
		% end
		% if block.type == "reviews" then
		<div style="text-align:center;">
			% for i, review in ipairs(block.reviews) do
			<div class="review">
				<p><span class="reviewer"><%= review.reviewer %></span>, <%= review.position %></p>
				<p class="review_headline"><span class="bigq">“</span><%= review.header %></p>
				<p><%= review.text %></p>			
			</div>
			% end
		</div>		
		% end
	% end	


	</div>
	<div class="red_back">
		<div class="center" style="padding:10px; padding-top:20px; color:white; max-width:900px; text-align:center; padding-bottom:20px;">

			<div style="height:30px;"></div>
			<p style="text-align:center;"><%=trans("Feedback")%>: <a style="color:white;" href="mailto:drakon.editor@gmail.com">drakon.editor@gmail.com</a></p>
			<p style="text-align:center;">DRAKON Labs</p>
			<p style="text-align:center;"><a href="/terms" style="color:white;"><%=trans("MES_TERMS")%></a></p>
			<div style="margin:30px;"><a style="color:white; max-width:100px; margin-bottom:30px;" href="#ui"><%=trans("MES_TO_TOP")%></a></div>
		</div>
	</div>

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
					<img src="/static/logo-text-img-s-hub.png" width="120" height="40" alt="DrakonHub logo" draggable="false" style="vertical-align: middle; margin-left:5px;"></img>
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
	
	<a href="/read/blog" class="mob_menu_item_link" ><%=trans("MES_BLOG")%></a>
	<a href="/drakonhub-source" class="mob_menu_item_link" >Source</a>
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
function display(id, mode) {
	var element = document.getElementById(id)
	if (element) {
		element.style.display = mode
	}
}

function showDetail(id) {
	display("show" + id, "none")
	display("hide" + id, "inline-block")
	display("detail" + id, "block")
}

function hideDetail(id) {
	display("show" + id, "inline-block")
	display("hide" + id, "none")
	display("detail" + id, "none")
}

</script>

<script>
var gLanguage = "<%=language%>"
var gUserId = "<%=user_id%>"


var strings = <%==messages%>
function translate(text) {
	if (text in strings) {
		return strings[text]
	}
	return text
}


var code = new Main2(window, document, translate, "<%= content_path %>")

code.init()

</script>


</body>
</html>
