<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"></meta>
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<meta name="Description" content="<%= description %>"></meta>
<link rel="shortcut icon" href="/static/favicon.ico" />
<link rel="icon" type="image/png" href="/static/favicon.png" />
<link rel="canonical" href="<%= my_site %>/<%= short_language %>/<%= content_path %>" />
<link rel="alternate" hreflang="x-default" href="<%= my_site %><%= content_path %>" />
<link rel="alternate" hreflang="en" href="<%= my_site %>/en<%= content_path %>" />
<link rel="alternate" hreflang="ru" href="<%= my_site %>/ru<%= content_path %>" />


<title><%= title %>—DrakonHub</title>


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
	margin-top: 5px;
	margin-bottom:10px;
	line-height: 130%;
	text-align: justify;
}

h1 {
	text-align: center;
	color: #800000;
	font-size:160%;

	margin-top:30px;
	margin-bottom:10px;
}

h2 {
	text-align: left;
	color: #800000;
	font-size:140%;

	margin-top:30px;
	margin-bottom:10px;
}

h3 {
	text-align: center;
	color: #800000;
	font-size:120%;

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
	padding-top:10px;
	padding-bottom:10px;
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
    margin:10px;
    padding-left:30px;
}

ul li {
	display: list-item;
	line-height: 130%;
	text-align: left;
}

ol {
    list-style-type: decimal;
    margin:10px;
    padding-left:30px;
}

ol li {
	display: list-item;
	line-height: 130%;
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
	margin-left:3px;
	margin-right:3px;
	padding:3px;	
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
	padding-bottom:14px;
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


.panic_button:active {
	transform: translate(0px, 2px);
}

.low_panic {
	margin-top:10px;
}

.price_name {
	color: grey;
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

.main_body {
	max-width: 900px;
	padding-left:10px;
	padding-right:10px;
	margin:auto;
	padding-bottom:20px;
}

.headline {
	font-size:150%;
	margin-bottom:10px;
	padding-top:10px;
	color:black;
	text-align:center;
	padding-left:10px;
}

.subheadline {
	font-size:120%;
	margin:20px;
	color:black;
	text-align:center;
	padding-left:10px;
}

@media (min-width: 700px) {		
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
	font-size:120%;
}

@media (min-width: 700px) {	
	.pop { 
		background-image: url('/static/popurri-s.jpg');
		background-repeat: repeat;
		background-attachment: fixed;
		background-position: left center;
	}
}

.grey_band {
	padding-top:30px;
	padding-bottom:30px;
	background:#f0f0f0;
	font-size:120%;
}

div.grey_band h2 {
	text-align:center;
	margin-top:0px;
	font-size:150%;
}

li {
	margin-bottom:10px;
}

div.pop h2 {
	text-align:center;
	margin-top:0px;
	font-size:150%;
	padding-top:20px;
}

li {
	margin-bottom:10px;
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
	border-bottom:solid 2px #6E5C03;
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

.no_user {
	display:none;
}

.yes_user {
	display:none;
}


.flex_img {
	max-width: 100%;
	height: auto;
	width: auto\9; /* ie8 */
}


.improve {
	max-width:100%;
	max-height:60vh;
}

@media (min-width: 895px) {		
	.improve {
		max-width:895px;
	}
}


</style>
<body style="background:white;">



% if language == "ru" then

<div id="ui">
	<a href="/">
		<img src="/static/logo-text-img-s.png" width="185" height="40" alt="На главную страницу, DrakonHub" draggable="false" style="vertical-align: middle; margin-left:5px;"></img>
	</a>
</div>

<div class="" style="background:white;">
	
	<div class="headline">
		Диаграммы особой ясности
	</div>
	<div class="subheadline">
		Онлайн-редактор блок-схем, основанный на стандартах аэрокосмической отрасли
	</div>
		
	<div class="illustration">
		<img src="/static/about-flowchart-no-text.png" class="improve"  alt="Как ДРАКОН улучшает блок-схемы"></img>
	</div>	
	
	<div class="button_holder" style="padding-top:0px; padding-bottom:20px;">
		<a href="/start-drakon" class="panic_button" style="color:white; background:#800000; margin-bottom:0px; font-size:120%;">Попробовать в браузере</a>
	</div>
</div>


<div class="grey_band" style="background:#3BAD4D;">
	<div class="main_body">
		<h2 style="color:white;">Что Вы получаете от DrakonHub</h2>
		<div class="ex_block" style="max-width:600px;">
			<div class="ex_pic desktop_only">
				<img src="/static/20180418134715.png" width="460" height="440" alt="Чистая и ясная блок-схема"></img>
				
			</div>
			<div class="mobile_only" style="text-align:center;">
				<img src="/static/20180418134715.png" width="230" height="220" alt="Чистая и ясная блок-схема"></img>
			</div>
			<div class="ex_text" style="color:white;">
				<ul>
					<li><strong>Ясные диаграммы</strong>. Вы сможете создавать приятные глазу диаграммы, в которых легко разобраться.</li>
					<li><strong>Лёгкость рисования</strong>. Вы потратите меньше времени на рисование, потому что DrakonHub делает процесс создания диаграмм невероятно простым.</li>
				</ul>
			</div>
		</div>
	</div>
</div>


<div class="grey_band" style="background:white;">
	<div class="main_body" style="background:white; padding-bottom:20px;">
		<h2>Космический редактор блок-схем</h2>	
		<p>ДРАКОН представляет собой стандарт блок-схем, разработанный в аэрокосмической отрасли.</p>

		<p>Этот стандарт нацелен на то, чтобы облегчить чтение и понимание диаграмм.
		Но в то же время ДРАКОН — это не просто хорошие блок-схемы.
		ДРАКОН включает в себя возможности, которых больше нигде нет:</p>

		<ul>
		<li>Он обозначает "царскую дорогу" (happy path) при помощи <em>шампура</em>.</li>
		<li>Он разбивает большие сложные схемы при помощи <em>силуэта</em>.</li>
		<li>Он показывает скрытые связи при помощи <em>общей судьбы</em>.</li>
		</ul>
	</div>
	
	<div class="video-part desktop_only">
		<iframe width="560" height="315" src="https://www.youtube.com/embed/PedK7omsqb0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
	</div>
	
	<div class="mobile_only" style="margin-left:-10px;">
		<div class="video-part">
			<iframe width="360" height="202" src="https://www.youtube.com/embed/PedK7omsqb0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
		</div>
	</div>
	
	<div class="button_holder" style="padding-top:20px; padding-bottom:20px;">
		<a href="/start-drakon" class="panic_button" style="color:white; background:#800000; margin-bottom:0px;">Попробовать в браузере</a>
	</div>		

</div>

<div class="grey_band" style="background:#B79B03; font-size:100%;">
	<div class="main_body">
		<div class="review">
			<p><span class="reviewer">Raymond Løberg</span>, программист</p>
			<p class="review_headline"><span class="bigq">“</span>Это один из немногих редакторов, который может составить конкуренцию бумаге и ручке</p>
			<p>Поражает, как быстро я могу набросать свои мысли в виде диаграммы. Не нужно беспокоиться о форматировании и выравнивании.</p>			
		</div>
		<div class="review">
			<p><span class="reviewer">Markus G</span>, технический директор, автоматизация производства</p>
			<p class="review_headline"><span class="bigq">“</span>Отличный и простой инструмент для описания софта в графическом виде</p>
			<p>Даже быстрые и небрежные рисунки принимают идеальную форму в течение нескольких минут. Этот инструмент мягко подталкивает вас привести в порядок вашу кучу мыслей.</p>			
		</div>
		<div class="review">
			<p><span class="reviewer">Hallvard Vassbotn</span>, руководитель разработки Терминала</p>
			<p class="review_headline"><span class="bigq">“</span>Делает рисование диаграмм прикольным</p>
			<p>Вся утомительная возня по выравниванию, установке размера и т.д. полностью автоматизирована.
			Редактор посказывает структуру, которая помогает организовать мысли в наглядном виде, а также передавать эти мысли другим.</p>
		</div>
		<div class="review">
			<p><span class="reviewer">Scott Hendrick</span>, руководитель проекта</p>
			<p class="review_headline"><span class="bigq">“</span>Очень удобно отображать процессы принятия решений, порядок действий пользователя и юз-кейсы</p>
			<p>Часто бывает, что некоторые процессы и процедуры выглядят просто на первый взгяд, но на самом деле содержат сложные деревья принятия решений и запутанные маршруты.
			В таких случаях ДРАКОН весьма полезен.
			</p>			
		</div>
		<div class="review">
			<p><span class="reviewer">Alan Lucero</span>, руководитель группы</p>
			<p class="review_headline"><span class="bigq">“</span>Позволяет объяснять сложные концепции другим людям</p>
			<p>Потрясающий инструмент для создания сложных диаграмм всего за пару минут. Экономит мне часы.</p>			
		</div>
		<div class="review">
			<p><span class="reviewer">Иван Петров</span>, программист</p>
			<p class="review_headline"><span class="bigq">“</span>Помогает мне говорить с не-программистами</p>
			<p>При помощи этой программы я могу легко объяснять, как работает система, тем, кто не очень хорошо разбирается в программировании.</p>
		</div>
	</div>
</div>


<div class="grey_band" style="background:white;">
	<div class="main_body">
		<h2>Много — это хорошо!</h2>
		
		<p>Если Вы будете пользоваться DrakonHub, у Вас будет очень много диаграмм. 
		Понятно почему: их же будет так легко рисовать.
		Но не беспокойтесь, Вы в них не потеряетесь.
		DrakonHub поможет Вам перемещаться по Вашей визуальной базе знаний.</p>

		<p>Вы будете держать всё под контролем при помощи удобного интерфейса пользователя и встроенного поиска.</p>

		<div class="video-part desktop_only">
			<img src="/static/screenshot7.png" width="480" height="280" alt="Снимок экрана DrakonHub"></img>
		</div>
		<div class="video-part mobile_only">
			<img src="/static/screenshot7.png" width="240" height="140" alt="Снимок экрана DrakonHub"></img>
		</div>	
	</div>
</div>

<div class="grey_band" style="">
	<div class="main_body">
		
		<h2>Работайте сообща</h2>

		<ul>
			<li>Пригласите коллег редактировать диаграммы в реальном времени.</li>
			<li>Делитесь ссылками на Ваши диаграммы со всем миром!</li>
		</ul>

		<div class="video-part desktop_only">
			<img src="/static/explaining-s.jpg" width="640" height="426" alt="Используем DrakonHub"></img>
		</div>	
	
	</div>
</div>


<div class="grey_band" style="background:white;">
	<div class="main_body">

		<h2>Планшеты и телефоны</h2>

		<p>В DrakonHub имеется полная поддержка устройств с сенсорным экраном.
		На практике это означает две вещи: </p>

		<ol>
			<li>Вы сможете редактировать Ваши диаграммы на телефоне где угодно и когда угодно.</li>
			<li>Хорошие новости для владельцев планшетных компьютеров, таких как Apple iPad, Microsoft Surface и планшеты Android.
			DrakonHub превратит Ваше устройство в настоящую переносную фабрику диаграмм.</li>
		</ol>

		<div class="video-part desktop_only">
			<img src="/static/mobile2.png" width="659" height="467" alt="DrakonHub на мобильном телефоне и планшете"></img>
		</div>	
		
		<div class="button_holder" style="margin-top:20px;">
			<a href="/start-drakon" class="panic_button" style="color:white; background:#800000; ">Попробовать в браузере</a>
		</div>			
	</div>
</div>



% else

<div id="ui">
	<a href="/">
		<img src="/static/logo-text-img-s.png" width="185" height="40" alt="DrakonHub logo" draggable="false" style="vertical-align: middle; margin-left:5px;"></img>
	</a>
</div>

<div class="" style="background:white;">
	
	
	<div class="headline">
		Modern, ultra-clear flowcharts
	</div>
	<div class="subheadline">
		An online tool for flowcharts based on the aerospace industry standards
	</div>
		
	<div class="illustration">
		<img src="/static/about-flowchart-no-text.png" class="improve"  alt="How DRAKON improves flowcharts"></img>
	</div>	
	
	<div class="button_holder" style="padding-top:0px; padding-bottom:20px;">
		<a href="/start-drakon" class="panic_button" style="color:white; background:#800000; margin-bottom:0px; font-size:120%;">Try in the browser</a>
	</div>
</div>





<div class="grey_band" style="background:#3BAD4D;">
	<div class="main_body">
		<h2 style="color:white;">What you get with DrakonHub</h2>
		<div class="ex_block" style="max-width:600px;">
			<div class="ex_pic desktop_only">
				<img src="/static/20180418134715.png" width="460" height="440" alt="A lean flowchart"></img>
				
			</div>
			<div class="mobile_only" style="text-align:center;">
				<img src="/static/20180418134715.png" width="230" height="220" alt="A lean flowchart"></img>
			</div>
			<div class="ex_text" style="color:white;">
				<ul>
					<li><strong>Lean diagrams:</strong> You can create good-looking diagrams that are easy to comprehend. </li>
					<li><strong>Productivity:</strong> You will spend less time drawing, as DrakonHub makes the process of diagram creation incredibly simple.</li>
				</ul>
			</div>
		</div>
	</div>
</div>


<div class=""><div class="grey_band" style="background:white;">
	<div class="main_body" style="background:white; padding-bottom:20px;">
		<h2>Flowchart software from space</h2>	
		<p>
		DRAKON is a standard for flowcharts, which was developed in the aerospace industry.</p> 
		<p>The main focus of this standard is to ensure that diagrams are easy to read.
		But DRAKON does not just mean better flowcharts. It has unique features that are not found anywhere else:</p>
		<ul>
			<li>It highlights the happy path with the <em>skewer</em>.</li>
			<li>It divides and conquers large flowcharts with the <em>silhouette</em>.</li>
			<li>It shows hidden connections with the <em>common fate</em>.</li>
		</ul>
		<p>With our software, you can use DRAKON in your work.</p>
	</div>
	
	<div class="desktop_only">
		<div class="video-part">
			<iframe width="560" height="315" src="https://www.youtube.com/embed/CIohJn7fAhU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
		</div>
	</div>

	<div class="mobile_only" style="margin-left:-10px;">
		<div class="video-part">
			<iframe width="360" height="202" src="https://www.youtube.com/embed/CIohJn7fAhU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
		</div>
	</div>
	
	<div class="button_holder" style="padding-top:20px; padding-bottom:20px;">
		<a href="/start-drakon" class="panic_button" style="color:white; background:#800000; margin-bottom:0px; font-size:120%;">Try in the browser</a>
	</div>		

</div>

<div class="grey_band" style="background:#B79B03; font-size:100%;">
	<div class="main_body">
		<div class="review">
			<p><span class="reviewer">Raymond Løberg</span>, software developer</p>
			<p class="review_headline"><span class="bigq">“</span>It is one of the few editors that can compete with pen-and-paper</p>
			<p>The biggest strength is how quickly I'm able to sketch out my thoughts in a diagram. I do not have to worry about formatting or alignment.</p>
		</div>
		<div class="review">
			<p><span class="reviewer">Markus G</span>, CTO/CEO, industrial automation</p>
			<p class="review_headline"><span class="bigq">“</span>A real great and easy tool to describe your software graphically</p>
			<p>Even quick and dirty drawings get a perfect shape in minutes. The tool is smoothly pushing you to sort your punch of ideas in well ordered wired way.</p>
		</div>
		<div class="review">
			<p><span class="reviewer">Hallvard Vassbotn</span>, head of Terminal Development</p>
			<p class="review_headline"><span class="bigq">“</span>Makes drawing diagrams fun</p>
			<p>All the boring cores of keeping things aligned, the same size etc are completely automated.
			The forced structure helps one organize thoughts and share ideas in an easily comprehensible format.</p>
		</div>
		<div class="review">
			<p><span class="reviewer">Scott Hendrick</span>, project manager</p>
			<p class="review_headline"><span class="bigq">“</span>Very useful for defining decision-making processes, user workflow and common use cases</p>
			<p>Often some processes and workflows seem simple at the outset but really contain complex decision trees and confusion paths, which would be greatly aided by usage of DRAKON.</p>
		</div>
		<div class="review">
			<p><span class="reviewer">Alan Lucero</span>, product team lead</p>
			<p class="review_headline"><span class="bigq">“</span>It's about being able to explain complex ideas to others</p>
			<p>Fantastic tool for creating complex diagrams in just a couple of minutes. It saves me many hours.</p>
		</div>
		<div class="review">
			<p><span class="reviewer">Ivan Petrov</span>, software developer</p>
			<p class="review_headline"><span class="bigq">“</span>It helps me talk to non-developers</p>
			<p>This software lets me easily explain how systems work to other people having limited software development knowledge.</p>
		</div>
	</div>
</div>





<div class="grey_band" style="background:white;">
	<div class="main_body">
		<h2>It's okay to have a lot</h2>	
		<p>With DrakonHub, you are going to have a lot of diagrams because they are so easy to make.
		But don’t worry—you will not get lost. DrakonHub will help you navigate through your visual knowledge base.
		Our powerful diagram explorer and the built-in search will ensure that you are always in control. </p>

		<div class="video-part desktop_only">
			<img src="/static/screenshot7.png" width="480" height="280" alt="DrakonHub screenshot"></img>
		</div>
		<div class="video-part mobile_only">
			<img src="/static/screenshot7.png" width="240" height="140" alt="DrakonHub screenshot"></img>
		</div>	
	</div>
</div>

<div class="grey_band" style="">
	<div class="main_body">
		
		<h2>Work together!</h2>

		<div style="">
			<ul>
			<li>Invite your colleagues to edit your diagrams in real time.</li>
			<li>Share your mind maps and flowcharts with the whole world!</li>
			</ul>
		</div>
	
		<div class="video-part desktop_only">
			<img src="/static/explaining-s.jpg" width="640" height="426" alt="Using DrakonHub"></img>
		</div>	
	
	</div>
</div>


<div class="grey_band" style="background:white;">
	<div class="main_body">
		<h2>Tablets and phones</h2>	
		<p>DrakonHub has full support for touchscreen devices, which means two things:</p>

		<ol>
		<li>You can edit your diagrams on your phone everywhere.</li>
		<li>It’s good news for the owners of tablet computers, such as Apple iPad, Microsoft Surface, and Android tablets. 
		DrakonHub can turn your already cool device into an unstoppable diagramming machine.</li>
		</ol>

		<div class="video-part desktop_only">
			<img src="/static/mobile2.png" width="659" height="467" alt="DrakonHub on a mobile phone and tablet"></img>
		</div>
		
		<div class="button_holder" style="padding-top:20px; padding-bottom:20px;">
			<a href="/start-drakon" class="panic_button" style="color:white; background:#800000; margin-bottom:0px; font-size:120%;">Try in the browser</a>
		</div>		
	</div>
</div>


<div class="red_back">
	<div class="center" style="padding:10px; padding-top:20px; color:white; max-width:900px; text-align:center; padding-bottom:20px;">

		<div style="height:30px;"></div>
		<p style="text-align:center;"><%=trans("Feedback")%>: <a style="color:white;" href="mailto:drakon.editor@gmail.com">drakon.editor@gmail.com</a></p>
		<div style="padding:10px;">Copyright 2015-2018 DRAKON Labs</div>
		<div style="margin:30px;"><a style="color:white; max-width:100px; margin-bottom:30px;" href="#ui"><%=trans("MES_TO_TOP")%></a></div>
	</div>
</div>

% end



<%==include("HtmlUtils")%>
<%==include("Utils")%>
<%==include("Logon")%>
<%==include("Config")%>
<%==include("Signup")%>
<%==include("Main2")%>


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
