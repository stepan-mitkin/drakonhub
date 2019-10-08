<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<meta name="Description" content="<%=trans('MES_DRAKON_DESCR')%>"></meta>
<link rel="shortcut icon" href="/static/favicon.ico" />
<link rel="icon" type="image/png" href="/static/favicon.png" />
<link rel="alternate" hreflang="x-default" href="https://drakonhub.com/docs/drakon" />
<link rel="alternate" hreflang="en" href="https://drakonhub.com/en/docs/drakon" />
<link rel="alternate" hreflang="ru" href="https://drakonhub.com/ru/docs/drakon" />


<title>DrakonHub – <%=trans("MES_ABOUT_DRAKON")%></title>

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


h3 {
	text-align: center;
	color: #990000;
	font-size:130%;
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
	text-align: left;
}

em {
	font-style: italic;
}


.text_alg {
	font-style: italic;
}

b, strong {
	font-weight: bold;
}

.scenery {
	height:600px;
	background-image:url('/static/brun01.jpg');
	background-repeat:no-repeat;
	background-size:auto 100%;	
	background-position: center top;
}

.scenery_mob {
	height:300px;
	background-image:url('/static/brun01-s.jpg');
	background-position: center;
	background-repeat:no-repeat;
	background-size:auto auto;		
}

h2 {
	font-weight: bold;
	font-size: 160%;
	color: black;
	text-align:center;
	margin-top: 30px;
	margin-bottom: 20px;
}

h1 {
	font-weight: bold;
	font-size: 180%;
	color: black;
	text-align:center;
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
		background-position: right;
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

<style>
strong {
	font-weight: bold;
}

p {
	margin:10px;
	line-height: 130%;
	text-align: justify;
}


h2 {
	text-align: center;
	
	font-size:120%;
	font-weight:bold;
	padding: 5px;
	padding-top:10px;
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
	}

	.ex_text {
		background:none;
		display:table-cell;
	}	
	
	.ex_block {
		display:table-row;
	}
		
}

.action {
	padding:10px;
	font-size:140%;
	font-weight:bold;
	color:white;
	background:coral;
	border-radius:4px;
	text-decoration:none;	
}

a.action:active {
	transform: translate(0px, 2px);
}

a.nav_mob, a.nav_mob:visited {
	display: block;
	font-weight: bold;
	font-size: 110%;
	color: #BE2921;
	text-decoration:none;
	margin:5px;
	padding:0px;
	padding-left:5px;
	padding-right:5px;
	text-align:center;
	padding-top:10px;
	padding-bottom:10px;
	border: solid 2px #BE2921;
}

a.nav_mob:hover {
	color: white;
	background: #BE2921;
}

</style>


</head>


<body style="">


<div id="ui" class="">	
	
	<div class="desktop_only">
		<div id="menu01" style="height:40px;" class="wide">
			<img src="/static/logo-text-img-s.png" width="185" height="40" alt="DrakonHub" />
		</div>
		
		<div class="scenery"></div>

		<div style="position:absolute; top:40px; width:100%; height:600px;">
			<div>
				<div style="text-align:center;margin-top:200px; ">
					<h1 style="display:inline-block; background-color:rgba(255, 255, 255, 0.0); padding:10px; font-weight:normal; font-size:190%;"><%=trans('MES_ABOUT_DRAKON')%></h1>
				</div>
				
				<div style="display:inline-block; background:white; opacity:0.6; width:100%; height:250px; position:absolute; top:350px;"></div>
				<div style="display:inline-block; position:absolute; top:360px; width:100%; text-align:center;">
					<h2 style="font-size:150%; font-weight:normal; line-height:120%; margin-top:40px;"><%==trans('Visual tool long')%></h2>
					<div class="common_button" style="margin:auto; margin-top:30px; text-align:center;">
	% if user_id == "" then					
						<a href="/docs/start" style="text-decoration:none; font-size:210%; font-weight:bold; color:white; background:#990000; border-radius:10px; padding:10px; padding-left:40px; padding-right:40px;"><%=trans('Start')%></a>
	% else
						<a href="/ide/spaces" style="text-decoration:none; font-size:210%; font-weight:bold; color:white; background:#990000; border-radius:10px; padding:10px; padding-left:40px; padding-right:40px;"><%=trans('Documents')%></a>
	% end					
					</div>
				</div>
			</div>			
		</div>	
	</div>
	
	<div class="mobile_only">
		<div id="menu02" style="height:40px;" class="wide">
			<img src="/static/logo-text-img-s.png" width="185" height="40" alt="DrakonHub" />
		</div>
		<h1 style="background:#f0f0f0; padding:10px; margin-top:0px; font-weight:normal; font-size:190%;"><%=trans('MES_ABOUT_DRAKON')%></h1>
		<div class="scenery_mob"></div>
		<div style="background:#f0f0f0; padding-bottom:30px;">
			<h2 style="padding:10px; font-size:150%; font-weight:normal; line-height:120%; margin-top:0px; text-align:center;"><%==trans('Visual tool long')%></h2>
			<div class="common_button" style="margin:auto; margin-top:10px; text-align:center;">
	% if user_id == "" then					
				<a href="/docs/start" style="text-decoration:none; font-size:210%; font-weight:bold; color:white; background:#990000; border-radius:10px; padding:10px; padding-left:40px; padding-right:40px;"><%=trans('Start')%></a>
	% else
				<a href="/ide/spaces" style="text-decoration:none; font-size:210%; font-weight:bold; color:white; background:#990000; border-radius:10px; padding:10px; padding-left:40px; padding-right:40px;"><%=trans('Documents')%></a>
	% end					
			</div>
		</div>

	</div>	
			
	<div class="wide">
		
			

% if language == "ru" then
		<h2>Что такое ДРАКОН?</h2>			

		<p>ДРАКОН — это улучшенные блок-схемы. Правила языка ДРАКОН нацелены на лёгкость понимания диаграмм человеком. Изначально визуальный язык ДРАКОН был создан для систем управления космическими аппаратами.</p><p>Со временем ДРАКОН стал применяться как язык требований, а также как язык программирования в самых разных приложениях, от автоматизации предприятий до микроконтроллеров. Помимо информационных технологий, ДРАКОН используется в других отраслях, например, в медицине. ДРАКОН пригодится везде, где требуется точно описать, как осуществить какое-либо действие.</p>

		<p><a href="/landbus"><%=trans("MES_DRAKON_BUSINESS")%></a></p>

		<h2>Видео-введение в ДРАКОН</h2>
		<h3>Часть 1</h3>
		<div style="display:table; margin:0 auto;">
			<div class="desktop_only">
				<iframe width="640" height="360" src="https://www.youtube.com/embed/j-M_z_7_Nkw" frameborder="0" allowfullscreen></iframe>
			</div>
			<div class="mobile_only">
				<a class="nav_mob" href="https://www.youtube.com/watch?v=j-M_z_7_Nkw" target="_blank"><%=trans("MES_SHOW_HOW")%></a>
			</div>	
		</div>
		<p><a href="/ide/doc/examples/20">Диаграммы из части 1</a></p>
		<h3>Часть 2</h3>	
		<div style="display:table; margin:0 auto;">
			<div class="desktop_only">
				<iframe width="640" height="360" src="https://www.youtube.com/embed/Q0YBdX9xazw" frameborder="0" allowfullscreen></iframe>
			</div>
			<div class="mobile_only">
				<a class="nav_mob" href="https://www.youtube.com/watch?v=Q0YBdX9xazw" target="_blank"><%=trans("MES_SHOW_COMPLEX")%></a>
			</div>
		</div>

		<p><a href="/ide/doc/examples/25">Диаграммы из части 2</a></p>


		% if user_id == "" then
		<div style="text-align:center; padding:30px; padding-top:50px;">
			<a href="/try-me" class="action"><%=trans("Start drawing")%></a>
		</div>
		% end

		<h2>Книги о языке ДРАКОН</h2>
		<ul>
		<li>Паронджанов В.Д. Учись писать, читать и понимать алгоритмы. Алгоритмы для правильного мышления. Основы алгоритмизации. <a href="http://www.ozon.ru/context/detail/id/137767316/">Купить бумажную книгу</a>.</li>
		<li>Паронджанов В.Д. Почему врачи убивают и калечат пациентов, или зачем врачу блок-схемы алгоритмов. <a href="http://www.ozon.ru/context/detail/id/137767308/">Купить бумажную книгу</a>.</li>
		</ul>
		<p><a href="http://drakon.su/knigi_vladimira_parondzhanova._skachat">Скачать книги бесплатно</a></p>

		<h2>Ссылки</h2>
		<ul>
		<li>Сайт языка ДРАКОН: <a href="http://drakon.su/">drakon.su</a></li>
		<li>Форум языка ДРАКОН: <a href="http://forum.drakon.su/">forum.drakon.su</a></li>
		</ul>



<!--			
		<div class="desktop_only">
			<h2>Язык ДРАКОН: вводный курс</h2>
			<p><strong><a href="http://www.slideshare.net/stepan_mitkin/ss-21902495">Язык ДРАКОН: вводный курс, часть 1</a> </strong><a href="/files/drakon_part1_rus.pdf">Скачать PDF</a></p>
			<div style="display:table; margin:0 auto;">
				<iframe src="https://www.slideshare.net/slideshow/embed_code/key/10bv23luLI8Pqw" 
					width="640" height="480"
					frameborder="0" marginwidth="0" marginheight="0" scrolling="no" 
					style="border:1px solid #CCC;border-width:1px 1px 0;margin-bottom:5px" 
					allowfullscreen webkitallowfullscreen mozallowfullscreen> 
				</iframe>
			</div>

			<p><strong><a href="http://www.slideshare.net/stepan_mitkin/drakon-realtime-rus">Язык ДРАКОН: вводный курс, часть 2</a> </strong><a href="/files/drakon_part2_rus.pdf">Скачать PDF</a></p>
			<div style="display:table; margin:0 auto;">
				<iframe src="https://www.slideshare.net/slideshow/embed_code/key/lU1UbBNejY1cPA" 
					width="640" height="480"
					frameborder="0" marginwidth="0" marginheight="0" scrolling="no" 
					style="border:1px solid #CCC;border-width:1px 1px 0;margin-bottom:5px" 
					allowfullscreen webkitallowfullscreen mozallowfullscreen> 
				</iframe>
			</div>
			
			<p><strong><a href="http://www.slideshare.net/stepan_mitkin/drakon-advanced-rus">Язык ДРАКОН: вводный курс, часть 3</a> </strong><a href="/files/drakon_part3_rus.pdf">Скачать PDF</a></p>
			<div style="display:table; margin:0 auto;">
				<iframe src="https://www.slideshare.net/slideshow/embed_code/key/piODMK5bw2IXaK" 
					width="640" height="480" 
					frameborder="0" marginwidth="0" marginheight="0" scrolling="no" 
					style="border:1px solid #CCC;border-width:1px 1px 0;margin-bottom:5px" 
					allowfullscreen webkitallowfullscreen mozallowfullscreen> 
				</iframe>
			</div>
		</div>
-->		
% else


		<h2>What is DRAKON?</h2>			
		<p>DRAKON diagrams are improved flowcharts.</p><p>The DRAKON visual language was originally created to capture software specifications in the aerospace industry. Gradually, DRAKON has gained recognition as a language of requirements for other types of information systems, including web, desktop and mobile applications.</p><p>Besides information technology, DRAKON is used in other places where a precise “how to” knowledge is important. Prominent examples are medicine and law.</p>

		<p><a href="/landbus"><%=trans("MES_DRAKON_BUSINESS")%></a></p>

		<h2>Video introduction to DRAKON</h2>
		<h3>Part 1</h3>
		<div style="display:table; margin:0 auto;">
			<div style="margin:auto; width:688px; margin-bottom:20px;" class="desktop_only vidos" videoId="j-M_z_7_Nkw">
				<img width="688" height="387" src="https://img.youtube.com/vi/j-M_z_7_Nkw/0.jpg" />
			</div>
			<div class="mobile_only">
				<a class="nav_mob" href="https://www.youtube.com/watch?v=j-M_z_7_Nkw" target="_blank"><%=trans("MES_SHOW_HOW")%></a>
			</div>	
		</div>
		<p><a href="/ide/doc/examples/20">The diagrams from part 1</a></p>
		<h3>Part 2</h3>	
		<div style="display:table; margin:0 auto;">
			<div style="margin:auto; width:688px; margin-bottom:20px;" class="desktop_only vidos" videoId="Q0YBdX9xazw">
				<img width="688" height="387" src="https://img.youtube.com/vi/Q0YBdX9xazw/0.jpg" />
			</div>			

			<div class="mobile_only">
				<a class="nav_mob" href="https://www.youtube.com/watch?v=Q0YBdX9xazw" target="_blank"><%=trans("MES_SHOW_COMPLEX")%></a>
			</div>
		</div>

		<p><a href="/ide/doc/examples/25">The diagrams from part 2</a></p>

		% if user_id == "" then
		<div style="text-align:center; padding:30px; padding-top:50px;">
			<a href="/try-me" class="action"><%=trans("Start drawing")%></a>
		</div>
		% end

		<h2>Articles</h2>
		<p>About the DRAKON language: <a href="/files/DRAKON.pdf">DRAKON.pdf</a></p>	
		<p>ERIL, DRAKON's counterpart for structure diagrams: <a href="http://drakon-editor.sourceforge.net/eril.html">The ERIL Language</a></p>
		
<!--
		<div class="desktop_only">
			<h2>DRAKON tutorial</h2>
			<p><strong><a href="http://www.slideshare.net/stepan_mitkin/drakon-part1-eng">DRAKON Visual Language: Tutorial. Part 1.</a> </strong><a href="/files/drakon_part1_eng.pdf">Download PDF</a></p>
			<div style="display:table; margin:0 auto;">
				<iframe src="https://www.slideshare.net/slideshow/embed_code/22563246" 
					width="640" height="480"
					frameborder="0" marginwidth="0" marginheight="0" scrolling="no" 
					style="border:1px solid #CCC;border-width:1px 1px 0;margin-bottom:5px" 
					allowfullscreen webkitallowfullscreen mozallowfullscreen> 
				</iframe>
			</div>
			<p><strong><a href="http://www.slideshare.net/stepan_mitkin/drakon-part2-eng">DRAKON Visual Language: Tutorial. Part 2.</a> </strong><a href="/files/drakon_part2_eng.pdf">Download PDF</a></p>
			<div style="display:table; margin:0 auto;">
				<iframe src="https://www.slideshare.net/slideshow/embed_code/22758304" 
					width="640" height="480"
					frameborder="0" marginwidth="0" marginheight="0" scrolling="no" 
					style="border:1px solid #CCC;border-width:1px 1px 0;margin-bottom:5px" 
					allowfullscreen webkitallowfullscreen mozallowfullscreen> 
				</iframe>
			</div>
			
			<p><strong><a href="http://www.slideshare.net/stepan_mitkin/drakon-part3-eng">DRAKON Visual Language: Tutorial. Part 3.</a> </strong><a href="/files/drakon_part3_eng.pdf">Download PDF</a></p>
			<div style="display:table; margin:0 auto;">
				<iframe src="https://www.slideshare.net/slideshow/embed_code/22894119" 
					width="640" height="480" 
					frameborder="0" marginwidth="0" marginheight="0" scrolling="no" 
					style="border:1px solid #CCC;border-width:1px 1px 0;margin-bottom:5px" 
					allowfullscreen webkitallowfullscreen mozallowfullscreen> 
				</iframe>
			</div>	
		</div>
-->		
	% end			

		<div class="">
			<div class="center" style="padding-top:20px; color:#8b0000; max-width:768px; text-align:center; padding-bottom:20px;">
				<a class="nav_mob" style="max-width:100px; margin-bottom:30px;" href="#ui"><%=trans("MES_TO_TOP")%></a>
				<%=trans("Feedback")%>: <a style="color:#8b0000;" href="mailto:drakon.editor@gmail.com">drakon.editor@gmail.com</a>
				<div style="font-size:110%; padding:10px;">Copyright 2015-2018 DRAKON Labs</div>
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
var gLanguage = "<%=language%>"
var gUserId = "<%=user_id%>"


var overlayOn = false
var overlayItems = []

% if debug then
document.getElementById("overlay").style.display = "inline-block"
DTools.enableDebugLog("overlay", "right", 30)
% end

var onPremises = false
var strings = <%==messages%>
function translate(text) {
	if (text in strings) {
		return strings[text]
	}
	return text
}

var gLanguage = "<%=language%>"

% if url_language ~= "" then
HtmlUtils.setCookie("language", "<%=url_language%>")
% end

var code = new Main(window, document, gUserId, translate, gLanguage, "drakon")

Nav.stateCallback = code.stateCallback
window.onpopstate = Nav.onStateChange

window.onload = function() {
	code.onLoad()
	code.onResize()
	code.insertVideos()
	window.onresize = code.onResize
}


</script>

</body>
</html>
