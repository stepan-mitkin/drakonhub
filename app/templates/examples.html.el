<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"></meta>
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<meta name="Description" content="<%=trans('MES_EXAMPLES_DESCR')%>"></meta>
<link rel="shortcut icon" href="/static/favicon.ico" />
<link rel="icon" type="image/png" href="/static/favicon.png" />
<link rel="alternate" hreflang="x-default" href="https://drakonhub.com/docs/examples" />
<link rel="alternate" hreflang="en" href="https://drakonhub.com/en/docs/examples" />
<link rel="alternate" hreflang="ru" href="https://drakonhub.com/ru/docs/examples" />


<title>DrakonHub – <%=trans("MES_EXAMPLES")%></title>

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
	background-image:url('/static/pres.jpg');
	background-repeat:no-repeat;
	background-size:auto 100%;	
	background-position: left;
}

.scenery_mob {
	height:300px;
	background-image:url('/static/pres-s.jpg');
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
		
		background-position: top center;
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

</style>


</head>


<body style="">


<div id="ui" class="">	
			
			
			
	<div class="desktop_only">
		<div id="menu01" style="height:40px;" class="wide">
			<img src="/static/logo-text-img-s.png" width="185" height="40" alt="DrakonHub" />
		</div>
		
		<div class="scenery">
			<div style="background-color:rgba(255, 255, 255, 0.7); height:600px;">
					<div style="height:200px;"></div>
					<div style="text-align:center;margin-top:0px; ">
						<h1 style="display:inline-block; padding:10px; font-weight:normal; font-size:210%;"><%=trans('MES_DRAKON_EXAMPLES')%></h1>
					</div>

					<div style="text-align:center; margin-top:100px;">
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
		<h1 style="background:#f0f0f0; padding:10px; margin-top:0px; font-weight:normal; font-size:190%;"><%=trans('MES_DRAKON_EXAMPLES')%></h1>
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
			<h3>Как сделать, чтобы меня поняли?</h3>
			<p>Грамотно показать — значит достичь понимания среди людей.
			Правильно составленная диаграмма помогает понять сложные знания. Сначала понять, а при повторном просмотре и быстро вспомнить.</p>
			<p>При помощи блок-схем можно чётко и однозначно донести процедурные знания.
			То есть знания о том, <em>что именно нужно сделать</em> для выполнения задачи.
			Или описание того, <em>как работает</em> данное программное обеспечение.</p>
			<p>Визуальный язык ДРАКОН — это рекомендации по грамотному составлению блок-схем.
			Созданные в недрах Роскосмоса, эти рекомендации были разработаны на основе опыта реальных проектов.</p>
			<p>DrakonHub — инструмент для создания и <em>быстрого изменения</em> ДРАКОН-схем.</p>
			<p>Всё меняется, приходит новое понимание проблем, собранные ранее процедурные знания изменяются и дополняются.
			Диаграммы устаревают, отстают от жизни. А почему отстают?
			Потому что редактировать блок-схемы в графических редакторах общего назначения не всегда удобно и всегда долго.
			На помощь приходит DrakonHub. Он делает процесс редактирования легче и быстрее.</p>
			
			<p>Все диаграммы с этой страницы можно открыть <a href="https://drakonhub.com/ide/doc/examples/1">в онлайн-редакторе здесь</a>.
		    Эти диаграммы находятся в режиме "только чтение". Чтобы начать изменять их, нажмите кнопку "Сохранить" вверху окна редактора.</p>


			<h3>Удачный день</h3>
			<div class="ex_block">
				<div class="ex_text">
					<p>Вот элементарная ДРАКОН-схема. Она показывает простой алгоритм, в котором всего 3 шага:</p>
					<ol>
						<li>Позавтракай</li>
						<li>Пообедай</li>
						<li>Поужинай</li>
					</ol>
					<p>Название диаграммы находится в самом начале (<em>Удачный день</em>). Начало расположено вверху диаграммы.</p>
					<p>В каждом из прямоугольников содержится приказ.</p>
					<p>Внизу находится конец.</p>
					<p>Стрелки не нужны, потому что следующая икона — всегда внизу.</p>
				</div>
				<div class="ex_pic"><a href="/static/rexp01-good-day.png" target="_blank"><img src="/static/rexp01-good-day.png" alt="A good day" width="180" height="320" /></a></div>
			</div>

			<h3>Выход на улицу</h3>
			
			<div class="ex_block">
				<div class="ex_text">
					<p>Вот алгоритм посложнее. Прямоугольники — это приказы, как и раньше. Сплюснутый ромб содержит вопрос.
					Диаграмма описывает два случая использования (use case): с дождём и без дождя.</p>
					<p>Use case 1: выход на улицу без дождя</p>
					<ol>
						<li>Оденься</li>
						<li>Дождь идёт? Нет</li>
						<li>Покинь помещение</li>
					</ol>
					<p>Use case 2: выход на улицу под дождём</p>
					<ol>
						<li>Оденься</li>
						<li>Дождь идёт? Нет</li>
						<li>Возьми зонтик</li>
						<li>Покинь помещение</li>
					</ol>
					<p>В языке ДРАКОН не все ответы на вопрос одинаково приятные. Хороший ответ идёт вниз. Плохой ответ идёт вправо.</p>
					<p>Use case 2 не такой удачный, как use case 1. Поэтому путь, описывающий use case 2, обходит диаграмму по правой стороне.</p>
					<p><em>Чем правее, тем хуже.</em></p>
					<p>Главная вертикаль называется <em>шампуром.</em> Шампур показывает царскую дорогу (happy path).</p>
				</div>
				<div class="ex_pic"><a href="/static/rexp02-go-out.png" target="_blank"><img src="/static/rexp02-go-out.png" alt="Go out" width="310" height="410" /></a></div>
			</div>

			<h3>Покупка щенка</h3>
			<div class="ex_block">
				<div class="ex_text">
					<p>Рассмотрим ещё один пример правила <em>чем правее, тем хуже.</em></p>
					<p>Царская дорога (happy path) — это наиболее успешный сценарий. Он идёт по шампуру. На этой картинке "успех" выражается в покупке щенка.</p>
					<p>Иногда слова "хороший" и "плохой" не применимы. В таких случаях шампур должен показывать наиболее вероятный путь через алгоритм.</p>
				</div>
				<div class="ex_pic"><a href="/static/rexp03-buy-puppy.png" target="_blank"><img src="/static/rexp03-buy-puppy.png" alt="Buy a puppy" width="300" height="490" /></a></div>
			</div>


			<h3>Сесть на поезд</h3>
			<p>Когда на диаграмме несколько вертикалей, их нужно отсортировать слева-направо. Наилучший путь должен идти по шампуру.
			Наихудший — по правому краю. Остальные пути проходят через середину.</p>
			<p>Опять-таки, <em>чем правее, тем хуже</em>.</p>
			<p>На диаграмме внизу в качесве одного из шагов требуется припарковать автомобиль. Есть три возможности:</p>
			<ol>
				<li>Бесплатная стоянка свободна. Паркуемся бесплатно! Это идеальный сценарий. Он идёт по шампуру.</li>
				<li>Бесплатная стоянка занята, но есть места на платной парковке. Это хуже, но жить можно.</li>
				<li>Свободных мест вокруг станции нет. Это хуже всего. Придётся долго идти пешком. Самое ужасное происходит в правой части диаграммы.</li>
			</ol>
			<p>Обратите внимание, что сходные действия расположены на одной горизонтали. Этим показывается их связь. Этот визуальный приём называется <em>общая судьба</em>.</p>
			<div><a href="/static/rexp07-park.png" target="_blank"><img src="/static/rexp07-park.png" alt="Take a train" width="768" height="576" /></a></div>


			<h3>Пьяная езда в Греции</h3>
			<p>Далеко не на все вопросы можно ответить "да" или "нет". Когда есть несколько вариантов ответа, следует применять икону "Выбор".</p>
			<p>В целях повышения читаемости, отсортируйте ответы слева-направо по какому-либо признаку. Например, от малого к большому,
			от низкого к высокому или <em>от лучшего к худшему</em>.</p>
			<div><a href="/static/rexp08-drunk-driving.png" target="_blank"><img src="/static/rexp08-drunk-driving.png" alt="Drunk driving in Greece" width="768" height="392" /></a></div>


			<h3>Качалка ДО ТЕХ ПОР</h3>
			<div class="ex_block">
				<div class="ex_text">
					<p>Для обычного соединения икон стрелки не требуются, достаточно простых линий. Стрелки в ДРАКОНе имеют специальное назначение.
					Стрелка, которая ведёт вверх, означает цикл.</p>
					<p>Мы поднимаем вес, а потом отдыхаем. Повторяем, до тех пор пока не устали.</p>
					<p>Важно: мы поднимаем вес хотя бы один раз.</p>
				</div>
				<div class="ex_pic"><a href="/static/rexp04-work-out-until.png" target="_blank"><img src="/static/rexp04-work-out-until.png" alt="Work out with UNTIL" width="220" height="410" /></a></div>
			</div>

			<h3>Качалка ПОКА ЕЩЁ</h3>
			<div class="ex_block">
				<div class="ex_text">
					<p>Этот цикл похож на предыдущий. Отличие заключается в том, что мы проверяем условие выхода из цикла до того, как начать.</p>
					<p>На данной диаграмме мы даже не начинаем упражнение с весом, если слишком устали после разминки.</p>
				</div>
				<div class="ex_pic"><a href="/static/rexp05-work-out-while.png" target="_blank"><img src="/static/rexp05-work-out-while.png" alt="Work out with WHILE" width="370" height="390" /></a></div>
			</div>
			<h3>Качалка в цикле ДЛЯ</h3>
			<div class="ex_block">
				<div class="ex_text">
					<p>Структура, напоминающая гамбургер, на этой диаграмме — цикл ДЛЯ.</p>
					<p>Действия внутри гамбургера повторяются несколько раз. Текст в иконе цикл ДЛЯ имеет обычно следующий вид:</p>
					<ul>
						<li>ДЛЯ каждого человека в комнате</li>
						<li><strong>Или:</strong> ДЛЯ каждого числа в последовательности</li>
						<li><strong>Или:</strong> Повторить действие Н раз</li>
					</ul>
					<p>На данной диаграмме мы повторяем упражнение 10 раз. При этом мы выйдем из цикла, как только устанем.
					Так что может получиться, что мы сделаем не 10 повторений, а меньше.</p>
				</div>
				<div class="ex_pic"><a href="/static/rexp06-work-out-repeat.png" target="_blank"><img src="/static/rexp06-work-out-repeat.png" alt="Work out with FOR EACH" width="250" height="470" /></a></div>
			</div>

			<h3>Алгоритм Луна</h3>
			<div class="ex_block">
				<div class="ex_text">
					<p>Хватит с нас игрушечных диаграмм. Рассмотрим реальный алгоритм.</p>
					<p><a href="https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC_%D0%9B%D1%83%D0%BD%D0%B0">Алгоритм Луна</a> применяется для проверки
					номеров всех банковских карт в мире.</p>
					<p>Вот текстовое представление алгоритма.</p>
					<div class="text_alg">
					<ol>
						<li>Цифры проверяемой последовательности нумеруются справа налево.</li>
						<li>Цифры, оказавшиеся на нечётных местах, остаются без изменений.</li>
						<li>Цифры, стоящие на чётных местах, умножаются на 2.</li>
						<li>Если в результате такого умножения возникает число больше 9, оно заменяется суммой цифр получившегося произведения — однозначным числом, то есть цифрой.</li>
						<li>Все полученные в результате преобразования цифры складываются. Если сумма кратна 10, то исходные данные верны.</li>							
					</ol>
					</div>
					<p>Текст может занимать меньше места, чем диаграмма. Но ДРАКОН борется за ясность, а не за компактность.
					ДРАКОН не прячет сложность. Он не заставляет читателя распаковывать в голове скрытые структуры.
					Вся сложность показывается в явном виде.</p>
					<p><em>Каждая икона на ДРАКОН-схеме содержит только одну мысль.</em></p>
				</div>
				<div class="ex_pic"><a href="/static/rexp11-luhn.png" target="_blank"><img src="/static/rexp11-luhn.png" alt="Luhn algorithm" width="384" height="471" /></a></div>
			</div>
			
			<h3>Регистрация пользователя</h3>
			<p>Если и есть такое слово, которое делает ДРАКОН особенным, то это <em>силуэт</em>.</p>
			<p>Диаграммы, рассмотренные ранее, — так называемые <em>примитивы</em>. Примитивы подходят для простых случаев.
			Но реальные проблемы не всегда просты.</p>
			<p>Силуэт — это уникальная особенность ДРАКОНа, предназначенная для отображения сложных проблем.
			Силуэт разбивает проблему на логические части.</p>
			<p><a href="https://www.youtube.com/watch?v=Q0YBdX9xazw" target="_blank">Этот видеоролик</a> объясняет, что такое силуэт.</p>
			<p>Диаграмма ниже содержит реальную спецификацию для регистрации пользователей в DrakonHub.</p>
			<div><a href="/static/rexp12-user.png" target="_blank"><img src="/static/rmexp12-user.png" alt="Register user" width="768" height="203" /></a></div>

			<h3>Перерыв на обед</h3>
			<p>Этот силуэт — особенный. В нём есть ветка, которая выполняется несколько раз.
			Ветка "Перекуси" повторяется, до тех пор пока мы голодны.</p>
			<p>Повторение, которое осуществляется при помощи веток силуэта, называется <em>силуэтным циклом</em>.</p>
			<div><a href="/static/rexp09-lunch.png" target="_blank"><img src="/static/rexp09-lunch.png" alt="Lunch break" width="768" height="538" /></a></div>
			
			<h3>Вход через Фейсбук</h3>
			<p>А вот ещё один алгоритм из реальной жизни.
			Он описывает вход на сайт при помощи аутентификации Фейсбуком.</p>
			<p>На многих вебсайтах имеется кнопка "Вход через Фейсбук". Пользователи используют свой Фейсбук-логин, вместо того чтобы придумывать
			новый пароль для каждого сайта.</p>
			<p>Это просто с точки зрения пользователя, но реализация этой простоты требует некоторых хитростей.
			Данная диаграмма показывает взаимодействие между браузером, сервером веб-приложения и сервером Фейсбука.</p>
			<div><a href="/static/rexp10-facebook.png" target="_blank"><img src="/static/rmexp10-facebook.png" alt="Login with Facebook" width="768" height="463" /></a></div>
				
% else

			<h3>How to be understood?</h3>
			<p>To show something in the right way means to win understanding of people.
			A well-made diagram helps people understand complex knowledge.
			And when they come back it helps them recall.</p>
			<p>Flowcharts convey procedural knowledge clearly and unambiguously.
			Procedural knowledge tells <em>what exactly needs to be done</em> in order to achieve a goal.
			Another example of procedural knowledge is a description of how some piece of software <em>actually works</em>.</p>
			<p>The DRAKON visual language is a set of guidelines for drawing high-quality flowcharts.
			These guidelines were developed in the aerospace industry based on experience from real projects.</p>
			<p>DrakonHub is a tool for creation and <em>easy editing</em> of DRAKON flowcharts.</p>
			<p>Everything is changing, new understading of problems comes to us, procedural knowledge is being updated and expanded.
			Diagrams become outdated, they fall behind. Why does that happen? 
			That happens because changing a flowchart takes a lot of time and effort in general-purpose diagram editors.
			Luckily, DrakonHub comes to the rescue. Its editing engine is optimized for DRAKON flowcharts.
			Not only creation, but also keeping diagrams up-to-date becomes easy.</p>

			<p>All diagrams from this page can be opened <a href="https://drakonhub.com/ide/doc/examples/1">in the online editor here</a>.
			These diagrams are in read-only mode when you open them. To start editing, press the "Save" button at the top of the editor screen.</p>


			<h3>A good day</h3>
			<div class="ex_block">
				<div class="ex_text">
					<p>This is a very minimal DRAKON diagram. It shows a simple algorithm with only 3 steps:</p>
					<ol>
						<li>Eat breakfast</li>
						<li>Eat lunch</li>
						<li>Eat dinner</li>
					</ol>
					<p>The name of the diagram is in the start icon (<em>Good day</em>). It is located at the top of the diagram.</p>
					<p>Each rectangular box contains an order.</p>
					<p>The end is at the bottom.</p>
					<p>There is no need for arrows because the next icon is always below.</p>
				</div>
				<div class="ex_pic"><a href="/static/exp01-good-day.png" target="_blank"><img src="/static/exp01-good-day.png" alt="A good day" width="180" height="320" /></a></div>
			</div>

			<h3>Go out</h3>
			<div class="ex_block">
				<div class="ex_text">
					<p>This algorithm is more complex. The boxes contain orders, as before. The truncated diamond contains a question.
					The diagram includes two use cases: with rain and without rain.</p>
					<p>Use case 1: go out without rain</p>
					<ol>
						<li>Put on clothes</li>
						<li>Is it raining? No</li>
						<li>Leave the house</li>
					</ol>
					<p>Use case 2: go out with rain</p>
					<ol>
						<li>Put on clothes</li>
						<li>Is it raining? Yes</li>
						<li>Take umbrella</li>
						<li>Leave the house</li>
					</ol>
					<p>In DRAKON, answers to a question are not equal. The good answer goes down. The bad answer goes to the right.</p>
					<p>Use case 2 is slightly less pleasant than use case 1. Therefore, the path related to use case 2 goes through the right part of the diagram.</p>
					<p><em>The further to the right, the worse it is.</em></p>
					<p>The main vertical is called <em>the skewer.</em> The skewer shows the <strong>happy path</strong>.</p>
				</div>
				<div class="ex_pic"><a href="/static/exp02-go-out.png" target="_blank"><img src="/static/exp02-go-out.png" alt="Go out" width="310" height="410" /></a></div>
			</div>

			<h3>Buy a puppy</h3>
			<div class="ex_block">
				<div class="ex_text">
					<p>Here is another example of the rule <em>The further to the right, the worse it is.</em></p>
					<p>The happy path is the most successful scenario, the best outcome. It goes down the skewer. On this picture, success involves finding and buying the puppy.</p>
					<p>In some cases, the words "best" and "worst" are not applicable. Then the skewer should indicate the most probable path through the algorithm.</p>
				</div>
				<div class="ex_pic"><a href="/static/exp03-buy-puppy.png" target="_blank"><img src="/static/exp03-buy-puppy.png" alt="Buy a puppy" width="300" height="490" /></a></div>
			</div>


			<h3>Take a train</h3>
			<p>When there are many verticals on a diagram, they should be sorted from left to right. The best path follows the skewer.
			The worst path is the rightmost one. All others are somewhere in between.</p>
			<p>Again, <em>the further to the right, the worse it is</em>.</p>
			<p>In the example below, parking is one of the steps of the algorithm. There are three possibilities:</p>
			<ol>
				<li>The free parking is available. Park for free! This is the ideal scenario. It goes straight down the skewer.</li>
				<li>The free parking is not available. But the paid parking is. This is somehow worse.</li>
				<li>There are no parking spots in the vicinity. Damn. We'll have to walk a long way. The worst things happen on the rightmost path.</li>
			</ol>
			<p>Note that similar actions (parking) sit on the same horizontal. This is a way to show their connection. This visual trick is called <em>common fate</em>.</p>
			<div><a href="/static/exp07-park.png" target="_blank"><img src="/static/exp07-park.png" alt="Take a train" width="768" height="608" /></a></div>


			<h3>Drunk driving in Greece</h3>
			<p>Many questions can't be answered with just a "yes" and a "no". When there are several possible answers, use the "choice" icon.</p>
			<p>For best readability, arrange the answers: from smallest to largest, from lowest to highest, or <em>from best to worst</em>.</p>
			<div><a href="/static/exp08-drunk-driving.png" target="_blank"><img src="/static/exp08-drunk-driving.png" alt="Drunk driving in Greece" width="768" height="441" /></a></div>


			<h3>Work out UNTIL</h3>
			<div class="ex_block">
				<div class="ex_text">
					<p>DRAKON diagrams do not need arrows for normal connections, plain lines are enough. Arrows are reserved for special occasions. This upward-pointing arrow represents a cycle.</p>
					<p>We lift the weight and take a brief rest. Then we repeat until we are tired.</p>
					<p>Note: we lift the weight at least once.</p>
				</div>
				<div class="ex_pic"><a href="/static/exp04-work-out-until.png" target="_blank"><img src="/static/exp04-work-out-until.png" alt="Work out with UNTIL" width="220" height="410" /></a></div>
			</div>

			<h3>Work out WHILE</h3>
			<div class="ex_block">
				<div class="ex_text">
					<p>This loop is similar to the one above. The difference is that we check for the exit condition before we perform the repeated action.</p>
					<p>Here, we don't even start the lifting if we are already tired after the warm-up.</p>
				</div>
				<div class="ex_pic"><a href="/static/exp05-work-out-while.png" target="_blank"><img src="/static/exp05-work-out-while.png" alt="Work out with WHILE" width="370" height="440" /></a></div>
			</div>
			
			<h3>Work out with FOR EACH (repeat) loop</h3>
			<div class="ex_block">
				<div class="ex_text">
					<p>The hamburger-shaped formation on this picture is a FOR EACH loop.</p>
					<p>The actions inside the hamburger will be repeated several times. A typical text in a FOR EACH loop icon could look like this:</p>
					<ul>
						<li>For each person in the room</li>
						<li><strong>Or:</strong> For each number in the sequence</li>
						<li><strong>Or:</strong> Repeat the operation N times</li>
					</ul>
					<p>In the current example, we repeat the exercise 10 times. But we quit as soon as we get tired. So the ten repetitions might or might not be completed.</p>
				</div>
				<div class="ex_pic"><a href="/static/exp06-work-out-repeat.png" target="_blank"><img src="/static/exp06-work-out-repeat.png" alt="Work out with FOR EACH" width="250" height="470" /></a></div>
			</div>

			<h3>Luhn algorithm</h3>
			<div class="ex_block">
				<div class="ex_text">
					<p>Enough of toy diagrams. Let us take a real algorithm.</p>
					<p><a href="https://en.wikipedia.org/wiki/Luhn_algorithm">Luhn algorithm</a> is used for verifying numbers of all payment cards in the world.</p>
					<p>Here is the text representation of the algorithm.</p>
					<div class="text_alg">
					<ol>
						<li>From the rightmost digit, which is the check digit, and moving left, double the value of every second digit. If the result of this doubling operation is greater than 9 (e.g., 8 × 2 = 16), then add the digits of the product (e.g., 16: 1 + 6 = 7, 18: 1 + 8 = 9) or alternatively subtract 9 from the product (e.g., 16: 16 - 9 = 7, 18: 18 - 9 = 9).</li>
						<li>Take the sum of all the digits.</li>
						<li>If the total modulo 10 is equal to 0 (if the total ends in zero) then the number is valid according to the Luhn formula; else it is not valid.</li>
					</ol>
					</div>
					<p>The text form might be more compact than a diagram. But DRAKON strives for clarity, not compactness.
					It does not hide complexity. It does not force the reader to unpack hidden structures. Instead, all complexity is shown explicitly.</p>
					<p>Each icon on a DRAKON diagram should contain only one idea.</p>
				</div>
				<div class="ex_pic"><a href="/static/exp11-luhn.png" target="_blank"><img src="/static/exp11-luhn.png" alt="Luhn algorithm" width="384" height="492" /></a></div>
			</div>
			
			<h3>Register user</h3>
			<p>If there is one word that makes DRAKON special, it's <em>silhouette</em>.</p>
			<p>The diagrams above are <em>primitives</em>. Primitives are good for simple things. But real problems are not always simple.</p>
			<p>Silhouette is a unique feature of DRAKON that deals with complex problems. Silhouette breaks up a problem into logical parts.</p>
			<p><a href="https://www.youtube.com/watch?v=Q0YBdX9xazw" target="_blank">Here is a video</a> that explains silhouette.</p>
			<p>The diagram below is a real specification for registering new users in DrakonHub.</p>
			<div><a href="/static/exp12-user.png" target="_blank"><img src="/static/mexp12-user.png" alt="Register user" width="768" height="203" /></a></div>

			<h3>Lunch break</h3>
			<p>This silhouette is special. It has a branch that runs several times. The "Eat" branch is executed while we are still hungry.</p>
			<p>Repetition implemented with a silhouette is called <em>silhouette loop</em>.</p>
			<div><a href="/static/exp09-lunch.png" target="_blank"><img src="/static/exp09-lunch.png" alt="Lunch break" width="768" height="552" /></a></div>
			
			<h3>Logon with Facebook</h3>
			<p>Here is yet another real-life algorithm. It describes logging on to a third-party website using Facebook authentication.</p>
			<p>Many websites have a button "Logon with Facebook". Users can enter their Facebook credentials instead of making up a new password for that website.</p>
			<p>This is easy for the user, but the technical details behind the hood are tricky.
			This diagram shows the underlying cooperation between the browser, the website's server and the Facebook server.</p>
			<div><a href="/static/exp10-facebook.png" target="_blank"><img src="/static/mexp10-facebook.png" alt="Login with Facebook" width="768" height="560" /></a></div>
			
% end

% if user_id == "" then
			<div style="text-align:center; padding:30px; padding-top:50px;">
				<a href="/try-me" class="action"><%=trans("Start drawing")%></a>
			</div>
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

var code = new Main(window, document, gUserId, translate, gLanguage, "examples")

Nav.stateCallback = code.stateCallback
window.onpopstate = Nav.onStateChange

window.onload = function() {
	code.onLoad()
	code.onResize()
	window.onresize = code.onResize
}


</script>

</body>
</html>
