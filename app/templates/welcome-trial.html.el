<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"></meta>
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

<link rel="shortcut icon" href="/static/favicon.ico" />
<link rel="icon" type="image/png" href="/static/favicon.png" />


% if language == "ru" then
<title>Пробный период начался</title>
% else
<title>The trial period has started</title>
% end


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

p {
	margin-top: 5px;
	margin-bottom:10px;
	line-height: 130%;
	text-align: justify;
}

h1 {
	text-align: center;
	color: #990000;
	font-size:150%;

	margin-top:30px;
	margin-bottom:10px;
}

h2 {
	text-align: left;
	color: #990000;
	font-size:120%;

	margin-top:30px;
	margin-bottom:10px;
}

h3 {
	text-align: center;
	color: #990000;
	font-size:110%;

	margin-top:30px;
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

</style>
<body>

<div id="loading" style="padding:10px;">
% if language == "ru" then
	<p>Загрузка...</p>
% else
	<p>Loading...</p>
% end
</div>

<div id="ui" style="max-width: 600px; padding-left:10px; padding-right:10px; display:none;" class="center">
% if language == "ru" then

<h1 style="margin-top:10px;">Пробный период начался</h1>

<div class="illistration" style="margin-top:20px; margin-bottom:20px; text-align:center;">
<a href="/"><img src="/static/drakosha132.png" width="132" height="132"></img></a>
</div>

<p>Здравствуйте, <strong><span id="user"></span></strong>.</p>

<p>Начался пробный 14-дневный период бесплатного использования.</p>
<p>Вы можете приобрести обычную платную подписку в любое время.</p>

<p>Удачи!</p>

<div style="margin:auto; max-width:400px; margin-top:30px;">
	<div class="panic_button" style="margin-left:5px; margin-right:5px; background:coral; " onclick="goToDashboard()">Запустить редактор</div>
</div>

% else

<h1 style="margin-top:10px;">The trial has started</h1>

<div class="illistration" style="margin-top:20px; margin-bottom:20px; text-align:center;">
<a href="/"><img src="/static/drakosha132.png" width="132" height="132"></img></a>
</div>

<p>Hello, <strong><span id="user"></span></strong>!</p>

<p>A 14-day free trial period has started.</p>
<p>You can upgrade to a paid subscription any time.</p>

<p>Good luck!</p>

<div style="margin:auto; max-width:400px; margin-top:30px;">
	<div class="panic_button" style="margin-left:5px; margin-right:5px; background:coral; " onclick="goToDashboard()">Start the editor</div>
</div>


% end
</div>


<%==include("HtmlUtils")%>


<script>

function goToDashboard() {
	goTo("/ide/dashboard")
}

function goToDocs() {
	goTo("/read/sitemap")
}

function goTo(url) {
	window.location.href = url
}

function get(id) {
	return document.getElementById(id)
}

function onCompleted(data) {
	get("loading").style.display = "none"
	get("ui").style.display = "block"
	HtmlUtils.setText("user", data.name)
}

function onError(data) {
	//goTo("/")
	console.log(data)
}

function start() {
% if user_id ~= "" and is_trial then
	HtmlUtils.sendGet("/api/account", onCompleted, onError)
% end
}


start()

</script>


% if capterra then
<script>
var globalRef = "<%= ref %>"
var anyway = true
if (anyway || globalRef.substring(0, 4) == "cppc") {
	console.log("activating capterra")
	var capterra_vkey = '4fb17f518d2e8f5f0c83e406fceafa43',
	capterra_vid = '2117822',
	capterra_prefix = (('https:' == document.location.protocol) ? 'https://ct.capterra.com' : 'http://ct.capterra.com');

	(function() {
		var ct = document.createElement('script'); ct.type = 'text/javascript'; ct.async = true;
		ct.src = capterra_prefix + '/capterra_tracker.js?vid=' + capterra_vid + '&vkey=' + capterra_vkey;
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ct, s);
	})();
}
</script>
% end

</body>
</html>
