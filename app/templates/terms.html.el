<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"></meta>
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<meta name="Description" content="<%=trans('MES_TERMS_DESCR')%>"></meta>
<link rel="shortcut icon" href="/static/favicon.ico" />
<link rel="icon" type="image/png" href="/static/favicon.png" />


<title><%=application%> Terms of Service</title>

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

body, select, input {
	font-family: Ubuntu, Arial;
	font-size: 11pt;
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
	margin: 10px;
	text-align: center;
	cursor: pointer;
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

.dia_button {
	display: inline-block;
	background: #455A64;
	color:white;
	border-radius: 5px;
	padding: 10px;
	margin: 10px;
	text-align: center;
	cursor: pointer;
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

.search_label {
	vertical-align: top;
/*
	border: solid 1px #455A64;
	border-radius:5px;
*/
}

.path {
	border-bottom: solid 1px #D9DCEC;
}

.path p {
	font-size: 13pt;
	margin:10px;
}

.line:hover {
	background:#E2EDF5;
}

.fav_line {
	background:#d3ffce;
}

.fav_line:hover {
	background:#E2EDF5;
}




#popup_menu {
	position:absolute;
	border: solid 1px #455A64;
	background:white;
}

.pm_item {
	padding:10px;
	cursor:pointer;
}

.pm_item:hover {
	background:#E2EDF5;
}

.pm_item:active {
	background:#455A64;
	color:white;
}

.pm_item:link {
	color:black;
}

.active_icon:hover {
	background:#455A64;
	color:white;
}

.mid {
	margin-left:5px;
	margin-right:5px;
	vertical-align:middle;
	cursor: pointer;
}

input[type=checkbox]
{
  /* Double-sized Checkboxes */
  -ms-transform: scale(1.5); /* IE */
  -moz-transform: scale(1.5); /* FF */
  -webkit-transform: scale(1.5); /* Safari and Chrome */
  -o-transform: scale(1.5); /* Opera */
 
}


.shadow {
	box-shadow: 0px 0px 5px #000000;
}

.msgbox_t {
  box-sizing: border-box;
  resize: none;
  outline: none;
  width: 100%;
  padding: 10px;
  border: none;
  height: 180px;
  margin: 0px;
  border: solid 1px #707070;

  vertical-align: top;
  
  	font-family: Ubuntu, Arial;
	font-size: 13pt;
}

.empty_td {

	width: 52px;
}

.micon {
	vertical-align:middle;
	margin-right: 5px;
}

.light_border {
	border: solid 1px #D9DCEC;
}

</style>


<style>



#tooltip {
	position: absolute;
	background-color: #ffffdd;
	color: black;
	padding: 5px;
	border: solid 1px #909000;
	border-radius: 5px;
	
}


.ro_label {
	position: absolute;
	display: inline-block;
	padding: 5px;
	background: Lavender;
	border-radius: 5px;
	top: 5px;
	right: 5px;
}


.normal_section {
	max-width:1100px; 
	margin:auto; 
	background:white; 
	height:100vh; 
}



.white_button {
	display: inline-block;
	cursor: pointer;
	margin: 0px;
	padding: 5px;
	color: #455A64;
	background:white;
	border-radius:8px;
}

.white_button:active {
	transform: translate(0px, 2px);
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

</style>

<style>

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


.fixed_dialog {
	background-color: white;
	margin:auto;
	text-align: center;
	position: absolute;
	top: 10px;
	left:calc(50% - 160px);
	width:320px;

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

.type-button {
	border: solid 2px Silver;
	margin: 10px;
	padding: 5px;
	cursor: pointer; 
}

.type-button:hover {
	border: solid 2px #455A64;
}


.user_input {
	font-family: Ubuntu, Arial;
	font-size: 12pt;
	width: 290px;
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

.planet {
	display: inline-block;
	padding:0px 5px 6px 10px;
	cursor: pointer;
	vertical-align:middle;	
}

.redHand {
    background-image: url('/static/red-hand.jpg');
    background-repeat: no-repeat;
    background-position: center; 
	height: 523px;
	background-color:#B6271F;
	text-align:center;
}

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
}

table td.legend {
	text-align:left;
	background: #CEE6ED;
}

table td.price_header {
	font-weight: bold;
	font-size: 120%;
}

a.buy_button, a.buy_button:visited {
	font-weight: bold;
	font-size: 140%;
	color: white;
	text-decoration:none;
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


ul {
    list-style-type: disc;
    margin:10px;
    padding-left:30px;
}

ul li {
	display: list-item;
	line-height: 130%;
	text-align: justify;
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
}



</style>


</head>


<body style="">


<div id="wide" class="">
	
	<div id="topLine" style="height:52px; background:white;">
		
		<div class="center" style="max-width:768px;">
			<table style="width:100%;">
				<tr>
					<td width="52" style=""><a href="/"><img width="52" height="52" src="/static/images/drakosha104b.png" style="vertical-align: top;"></img></a></td>
					<td width="100%" style="text-align:right;"><h1 style="color:#BE2921; font-size:150%; font-weight:bold; margin:0px;"><%=application%> Terms of Service</h1></td>
				</tr>
			</table>
		</div>
	</div>	
	
	<div class="" style="background:white; padding-bottom:20px;">	
		<div class="center" style="max-width:768px;">
			


<h2 id="general_conditions">General conditions</h2>

<p>By using the Website and DRAKON Labs account ("Service") you agree to the following terms of service ("Terms") by DRAKON Labs Stepan Mitkin ("DRAKON Labs"). If you disagree with the Terms of Service, you must not use the Website and Service. </p>

<p>If you are entering into this agreement on behalf of a legal entity, the terms "you" and "your" shall refer to that entity. Further, by entering into this agreement you confirm that you have the necessary authority to bind the legal entity.</p>

<p>DRAKON Labs may revise the Terms at any time. DRAKON Labs will notify you by email or by posting a notice on the Website of such changes. The changes are effective immediately after such notice is given. If you continue to use the Service after such changes, this shall constitute your consent to the changes. </p>

<h2 id="account">Account</h2>

<p>Accounts registered by automated methods are not permitted.</p>

<p>If you are under the age of 18 years you need the consent of your guardians to open an account. </p>

<p>You must provide a valid email address and any other necessary information in order to complete the sign-up process. The login name does not need to be similar to your real name.</p>

<p>Multiple people may not share a single login, and you must not allow any other person to use your account to access the Website. However, one person may register several accounts with the Service.</p>

<p>You are responsible for maintaining the security of your account and password. You are responsible for any activity on the Website arising out of any failure to keep your account and password confidential, and may be held liable for any losses arising out of such a failure. You must notify DRAKON Labs in writing immediately if you become aware of any unauthorized use of your account or any disclosure of your password. </p>

<p>You are responsible for all content posted and activity that occurs under your account. </p>

<h2 id="payment_and_termination">Payment and termination of the Service</h2>

<p>DRAKON Labs offers paid and free plans. Different plans give you as a user different limits and levels of access to the service offered at the Website. When subscribing for a paid plan, you must provide the required payment information. </p>

<p>DRAKON Labs offers non-basic plans for free to students and teachers. In order to get a non-basic plan for free, students and teachers need to present proof of their employment or scholarship. DRAKON Labs reserves the right to refuse to provide such plans by own discretion and without giving any reason.</p>

<p>The paid plans are billed in advance. You need to pay before you are granted a paid plan.</p>

<p>After the prepaid period expires for a paid plan, the account will be downgraded to the Basic plan.</p>

<p>You can at any time terminate your account. If you choose to terminate your account, all stored content and features of your account will be deleted immediately and permanently together with your account information such as e-mail. DRAKON Labs does not accept any liability for losses that will arise from the termination of the account.</p>

<p>DRAKON Labs will not in any case give a refund for any prepaid period.</p>

<h2 id="methods_of_payment">Methods of payment</h2>

<p>Payments for the Service are accepted through PayEx payment system using VISA, MasterCard and Maestro payment cards.</p>
<p>After the payment has been successfully completed, the Website will send you the order confirmation by email.</p>
<p>DRAKON Labs is exempt from VAT.</p>
<p>Inquiries related to payments should be sent to the customer support by email: <a href="mailto:<%=feedback_email%>"><%=feedback_email%></a>.</p>

<h2 id="termination_due_to_breach">Termination of your account due to breach of the Terms</h2>

<p>If you violate any of the Terms, DRAKON Labs can without prior notice terminate your account and delete the material and information you have provided to the Service. Further, DRAKON Labs can temporarily or permanently suspend, prohibit, or block your access to the Service. DRAKON Labs may also send you one or more formal warnings. </p>

<p>If DRAKON Labs suspends, prohibits, or blocks your access to the Website and/or Service, you must not take any action to circumvent such suspension or probation or blocking (including without limitation creating and/or using a different account). </p>

<p>DRAKON Labs will not give a refund for any prepaid period that remains.</p>

<h2 id="intellectual_property">Intellectual property</h2>

<p>DRAKON Labs claims no intellectual property rights over the material you upload or create using the Service.</p>

<p>If you choose to grant access to your account to others, you assume full responsibility for protecting your intellectual property rights.</p>

<p>The code and design of the Service belongs to DRAKON Labs, all rights reserved. You may not duplicate, copy, or reuse any portion of the HTML/CSS, JavaScript, or visual images that are part of the Service without written permission from DRAKON Labs.</p>

<h2 id="prohibited_activity">Prohibited activity</h2>

<p>You must not use the Service in any way or take any action that causes, or may cause, damage to the Service or impairment of the integrity, availability, performance or accessibility of the Service. This includes, but is not limited to, the following prohibited activities:</p>

<ul>
<li>You must not modify, adapt or hack the Service.</li>
<li>You must not upload, post, host or transmit unsolicited email, SMSs, or "spam" messages.</li>
<li>You must not transmit any spyware, worms or viruses, code of a destructive nature or other malicious software.</li>
<li>You must not provide to the Service any material that is unlawful, offensive, threatening or which violates intellectual property of third parties.</li>
<li>You may not use the Service for any illegal or unauthorized purpose.</li>
<li>You may not conduct any systematic or automated data collection activities on or in relation to the Website and the Service.</li>
</ul>

<h2 id="privacy">Privacy</h2>

<p>DRAKON Labs shall not process personal data in any manner or for any other purpose than stipulated in this agreement without prior written consent. DRAKON Labs will only process the personal data in a secure way in order to grant you access to the Service according to these Terms and to improve the Service. DRAKON Labs will process and secure personal data according to the privacy legislation, which involves that the personal data will be properly handled in order to secure the confidentiality, integrity and accessibility of the personal data. </p>

<p>DRAKON Labs may use your personal information to send you newsletters, marketing or promotional information in addition to information regarding your account and the Service. </p>

<p>By using the Service, you agree that DRAKON Labs collects and uses the necessary personal data as stipulated in the Terms.</p>

<p>By using the Website and Service, you consent to and acknowledge the use of cookies on the Website. If you instruct your browser to refuse all cookies or to indicate when a cookie is being sent, you may experience that you are not able to use all parts of the Website and Service.</p>

<h2 id="modification_of_service">Modification of the Service</h2>

<p>DRAKON Labs has the right to modify the Service, its features and its content at any time without prior notice.</p>

<h2 id="price_changes">Price changes for the Service</h2>

<p>The paid plans offered by DRAKON Labs are based on the principle of prepayment. You are free to decline renewal of your paid plan. In case of automatic renewal of the plan and an increase of the payment fee, you will receive a notice of the change in the payment fee before the automatic renewal of the plan. If you do not downgrade or delete your account before the renewal date, you will according to the Terms have accepted the change in the payment.</p>

<p>If an automatic renewal is not enabled in your plan, you will not receive a notification of the price increase. If you downgrade or delete your account, no prepaid fee will be refunded. </p>

<h2 id="limitation_of_liability">Limitation of liability</h2>

<p>DRAKON Labs is not in any way responsible for the content posted on the Service by users.</p>

<p>When you accept the Terms, you expressly understand and agree that:</p>

<ol>
<li>Your use of the Service is at your sole risk. The Service is provided on an “as is” and “as available” basis. </li>
<li>DRAKON Labs does not warrant that:
<ol>
<li>The Service will meet all of your requirements.</li>
<li>The information published on the Website is complete and accurate or that the material on the Website is up to date.</li>
<li>The Service will be uninterrupted, timely, secure or error-free.</li>
<li>All errors in the software or service will be corrected.</li>
</ol></li>
<li>Your use of any material downloaded or otherwise obtained through the use of the Service is at your own discretion and risk, and you are solely responsible for any damage to your computer or other device or loss of data resulting from the download or use of any such material. </li>
<li>No advice or information, whether oral or written, obtained by you from DRAKON Labs or from the Service shall create any warranty not expressly stated in these Terms.</li>
<li>DRAKON Labs reserves the right to discontinue or alter any or all of the Website services, and to stop publishing the Website and Service, at any time in sole discretion without notice or explanation. You will not be entitled to any compensation or other payment upon the discontinuance or alteration of any Website service, or if DRAKON Labs stops publishing the Website. </li>
<li>To the maximum extent permitted by applicable law, DRAKON Labs excludes all representations and warranties relating to the subject matter of these terms and conditions, the Website and the use of the Website and the Service. </li>
</ol>

<p>Further, you expressly understand and agree that DRAKON Labs, its subsidiaries, affiliates, service providers, and licensors, and their respective officers, employees, agents and successor shall not be liable to you for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, income, revenue, use, production, goodwill, use, data, commercial opportunities, cover or other intangible losses (even if DRAKON Labs has been advised of the possibility of such damages), resulting from (but not limited to):</p>

<ol>
<li>The use or the inability to use the Service;</li>
<li>Unauthorized access to or the loss, corruption or alterations of your transmissions, content or data;</li>
<li>Your failure to protect the confidentiality of any passwords or access rights to your account information;</li>
<li>DRAKON Labs actions or omissions in reliance upon your account information and any changes thereto or notices received therefrom;</li>
<li>The termination of your account in accordance with the Terms;</li>
<li>Any other matter relating to the Service.</li>
</ol>

<p>For the unlikely event that DRAKON Labs or any of the above-mentioned parties should be held liable despite the total disclaimers above in this clause, any liability shall under no circumstances exceed an amount corresponding to the fees documented as payable or paid under these Terms.</p>

<h2 id="law_and_jurisdiction">Law and jurisdiction</h2>

<p>The Terms shall be governed by and construed in accordance with Norwegian law. Any disputes relating to the Terms and the use of the Service shall be subject to Oslo, Norway as the legal venue. </p>

<p>If a provision of the Terms is determined by any court or other competent authority to be unlawful and/or unenforceable, the other provisions will continue in effect. </p>

<h2 id="website_and_contact">Website and contact information</h2>


<p>You can contact DRAKON Labs by using the e-mail <a href="mailto:<%=feedback_email%>"><%=feedback_email%></a>. </p>


			
			
		</div>		
	</div>

	<div>
		<div class="center" style="padding-top:70px; color:#8b0000; max-width:768px; text-align:center;">
			<%=trans("Feedback")%>: <a style="color:#8b0000;" href="mailto:<%=feedback_email%>"><%=feedback_email%></a>
			<div style="font-size:110%; padding:10px;">Copyright 2015-2018 DRAKON Labs</div>
		</div>
	</div>		



	
</div>


</div>



<script>


</script>

</body>
</html>



