function ItemsModule(translate) {

	var CollectionPadding = 6;
	var Q_PADDING = 20;
	var INSERTION = 6
	var gDurRadius = 5
	var CTRL_RADIUS = 20
	var gDiaLine = ""
	var gDiaLineThickness = 1
	var gUserSettings = {}

	var LoopAdd = 5

	var moreCallbacks = {}

	var itemCallbacks = {
		action: {},
		raction: {},
		collection: {},
		beginend: {},
		horizontal: {},
		junction: {},
		question: {},
		vertical: {},
		select: {},
		loopbegin: {},
		loopend: {},
		address: {},
		branch: {},
		pause: {},
		duration: {},
		comment: {},
		insertion: {},
		ctrlStart: {},
		ctrlEnd: {},
		timer: {},
		shelf: {},
		output: {},
		input: {},
		end: {},
		sinput: {},
		soutput: {},
		process: {},
		gdur: {},
		callout: {},
		f_rectangle: {},
		f_line: {},
		f_insertion: {},
		f_begin: {},
		f_shelf: {},
		f_rounded: {},
		f_ptr_right: {},
		f_ptr_left: {},
		f_label: {},
		f_more: {},
		f_circle: {},
		f_tab: {},
		f_tab2: {},
		f_placeholder: {},
		f_cloud: {},
		f_db: {}
	};

	itemCallbacks["case"] = {};
	itemCallbacks.action.fit = action_fit;
	itemCallbacks.action.makeBox = action_makeBox;
	itemCallbacks.action.render = action_render;
	itemCallbacks.raction.fit = action_fit;
	itemCallbacks.raction.makeBox = action_makeBox;
	itemCallbacks.raction.render = f_rounded_render;
	itemCallbacks.collection.fit = action_fit;
	itemCallbacks.collection.makeBox = action_makeBox;
	itemCallbacks.collection.render = collection_render;
	itemCallbacks.loopbegin.fit = loopbegin_fit;
	itemCallbacks.loopbegin.makeBox = loopbegin_makeBox;
	itemCallbacks.loopbegin.render = loopbegin_render;
	itemCallbacks.loopend.fit = loopend_fit;
	itemCallbacks.loopend.makeBox = loopend_makeBox;
	itemCallbacks.loopend.render = loopend_render;
	itemCallbacks.select.fit = select_fit;
	itemCallbacks.select.makeBox = select_makeBox;
	itemCallbacks.select.render = select_render;
	itemCallbacks.pause.fit = pause_fit;
	itemCallbacks.pause.makeBox = pause_makeBox;
	itemCallbacks.pause.render = pause_render;
	itemCallbacks.duration.fit = duration_fit;
	itemCallbacks.duration.makeBox = duration_makeBox;
	itemCallbacks.duration.render = pause_render;
	itemCallbacks.comment.fit = comment_fit;
	itemCallbacks.comment.makeBox = comment_makeBox;
	itemCallbacks.comment.render = comment_render;
	itemCallbacks["case"].fit = case_fit;
	itemCallbacks["case"].makeBox = case_makeBox;
	itemCallbacks["case"].render = case_render;
	itemCallbacks.beginend.fit = beginend_fit;
	itemCallbacks.beginend.makeBox = beginend_makeBox;
	itemCallbacks.beginend.render = beginend_render;
	itemCallbacks.end.fit = end_fit;
	itemCallbacks.end.makeBox = end_makeBox;
	itemCallbacks.end.render = end_render;
	itemCallbacks.horizontal.fit = horizontal_fit;
	itemCallbacks.horizontal.render = horizontal_render;
	itemCallbacks.junction.fit = junction_fit;
	itemCallbacks.junction.makeBox = junction_makeBox;
	itemCallbacks.junction.render = junction_render;
	itemCallbacks.question.fit = question_fit;
	itemCallbacks.question.makeBox = question_makeBox;
	itemCallbacks.question.render = question_render;
	itemCallbacks.vertical.fit = vertical_fit;
	itemCallbacks.vertical.render = vertical_render;
	itemCallbacks.address.fit = address_fit;
	itemCallbacks.address.makeBox = address_makeBox;
	itemCallbacks.address.render = address_render;
	itemCallbacks.branch.fit = branch_fit;
	itemCallbacks.branch.makeBox = branch_makeBox;
	itemCallbacks.branch.render = branch_render;
	itemCallbacks.insertion.fit = insertion_fit;
	itemCallbacks.insertion.makeBox = insertion_makeBox;
	itemCallbacks.insertion.render = insertion_render;
	itemCallbacks.timer.fit = timer_fit;
	itemCallbacks.timer.makeBox = timer_makeBox;
	itemCallbacks.timer.render = timer_render;
	itemCallbacks.shelf.fit = shelf_fit;
	itemCallbacks.shelf.makeBox = shelf_makeBox;
	itemCallbacks.shelf.render = shelf_render;
	itemCallbacks.output.fit = output_fit;
	itemCallbacks.output.makeBox = output_makeBox;
	itemCallbacks.output.render = output_render;
	itemCallbacks.input.fit = output_fit;
	itemCallbacks.input.makeBox = output_makeBox;
	itemCallbacks.input.render = input_render;
	itemCallbacks.soutput.fit = soutput_fit;
	itemCallbacks.soutput.makeBox = soutput_makeBox;
	itemCallbacks.soutput.render = soutput_render;
	itemCallbacks.sinput.fit = soutput_fit;
	itemCallbacks.sinput.makeBox = soutput_makeBox;
	itemCallbacks.sinput.render = sinput_render;
	itemCallbacks.process.fit = process_fit;
	itemCallbacks.process.makeBox = process_makeBox;
	itemCallbacks.process.render = process_render;

	itemCallbacks.f_rectangle.fit = action_fit
	itemCallbacks.f_rectangle.makeBox = action_makeBox
	itemCallbacks.f_rectangle.render = action_render

	itemCallbacks.f_tab.fit = action_fit
	itemCallbacks.f_tab.makeBox = action_makeBox
	itemCallbacks.f_tab.render = f_tab_render

	itemCallbacks.f_placeholder.fit = action_fit
	itemCallbacks.f_placeholder.makeBox = action_makeBox
	itemCallbacks.f_placeholder.render = f_placeholder_render


	itemCallbacks.f_circle.fit = action_fit
	itemCallbacks.f_circle.makeBox = action_makeBox
	itemCallbacks.f_circle.render = f_circle_render

	itemCallbacks.f_cloud.fit = f_cloud_fit
	itemCallbacks.f_cloud.makeBox = action_makeBox
	itemCallbacks.f_cloud.render = f_cloud_render

	itemCallbacks.f_db.fit = action_fit
	itemCallbacks.f_db.makeBox = action_makeBox
	itemCallbacks.f_db.render = f_db_render




	itemCallbacks.f_label.fit = action_fit
	itemCallbacks.f_label.makeBox = action_makeBox
	itemCallbacks.f_label.render = f_label_render

	itemCallbacks.f_rounded.fit = action_fit
	itemCallbacks.f_rounded.makeBox = action_makeBox
	itemCallbacks.f_rounded.render = f_rounded_render

	itemCallbacks.f_insertion.fit = insertion_fit
	itemCallbacks.f_insertion.makeBox = insertion_makeBox
	itemCallbacks.f_insertion.render = insertion_render

	itemCallbacks.f_begin.fit = action_fit
	itemCallbacks.f_begin.makeBox = action_makeBox
	itemCallbacks.f_begin.render = beginend_render

	itemCallbacks.f_shelf.fit = shelf_fit;
	itemCallbacks.f_shelf.makeBox = shelf_makeBox;
	itemCallbacks.f_shelf.render = shelf_render;

	itemCallbacks.f_line.fit = f_line_fit
	itemCallbacks.f_line.makeBox = f_line_makeBox
	itemCallbacks.f_line.render = f_line_render
	itemCallbacks.f_line.hit = f_line_hit
	itemCallbacks.f_line.candies = f_line_candies
	itemCallbacks.f_line.boxIntersect = f_line_boxIntersect

	itemCallbacks.f_ptr_right.fit = f_ptr_right_fit
	itemCallbacks.f_ptr_right.makeBox = action_makeBox
	itemCallbacks.f_ptr_right.render = f_ptr_right_render
	itemCallbacks.f_ptr_right.handles = f_ptr_right_handles
	itemCallbacks.f_ptr_right.moveHandle = f_ptr_right_moveHandle
	itemCallbacks.f_ptr_right.resize = f_ptr_right_resize

	itemCallbacks.f_ptr_left.fit = f_ptr_right_fit
	itemCallbacks.f_ptr_left.makeBox = action_makeBox
	itemCallbacks.f_ptr_left.render = f_ptr_left_render
	itemCallbacks.f_ptr_left.handles = f_ptr_left_handles
	itemCallbacks.f_ptr_left.moveHandle = f_ptr_left_moveHandle
	itemCallbacks.f_ptr_left.resize = f_ptr_right_resize

	itemCallbacks.f_more.fit = more_fit
	itemCallbacks.f_more.render = more_render
	itemCallbacks.f_more.makeBox = more_makeBox

	this.getItemCallback = getItemCallback;
	this.drawCandies = drawCandies;
	this.renderItem = renderItem;
	this.eraseFromRender = eraseFromRender;
	this.moveCanvasNode = moveCanvasNode;
	this.getHandles = getHandles
	this.moveHandle = moveHandle
	this.setDiaLine = setDiaLine
	this.getDiaLine = getDiaLine
	this.getCandies = getCandies
	this.resizeItem = resizeItem
	this.newMore = newMore
	this.getLinkHandle = getLinkHandle
	this.setUserSettings = setUserSettings

	itemCallbacks.ctrlStart.fit = action_fit;
	itemCallbacks.ctrlStart.makeBox = action_makeBox;
	itemCallbacks.ctrlStart.render = ctrlStart_render;

	itemCallbacks.ctrlEnd.fit = action_fit;
	itemCallbacks.ctrlEnd.makeBox = action_makeBox;
	itemCallbacks.ctrlEnd.render = ctrlEnd_render;

	itemCallbacks.gdur.fit = pause_fit
	itemCallbacks.gdur.makeBox = pause_makeBox
	itemCallbacks.gdur.render = gdur_render

	itemCallbacks.callout.fit = action_fit
	itemCallbacks.callout.makeBox = action_makeBox
	itemCallbacks.callout.render = callout_render

// Autogenerated with DRAKON Editor 1.32


function FitResult() {
    // item 1196
    this.tb = null;
    this.tb2 = null;
    this.w = null;
    this.h = null;
    this.a = null;
}

function Primitive(id, xOffset, yOffset) {
    // item 792
    this.id = id;
    this.xOffset = xOffset;
    this.yOffset = yOffset;
}

function action_fit(item, render) {
    // item 2791
    var link = getLink(item)
    // item 1208
    return flowText(render, getText(item), item.content, item.w, link)
}

function action_makeBox(node, x, y, render) {
    // item 164
    return Utils.boxFromPoint(
    	x,
    	y,
    	node.w,
    	node.h
    );
}

function action_render(graph, item, render) {
    // item 856
    var texId = makeStandardTexture(render, item);
    // item 155
    render.drawShape(
    	texId,
    	"rectangle",
    	item.x,
    	item.y,
    	[item.w, item.h],
    	copyFormat(item, null)
    );
    // item 2787
    var link = getLink(item)
    // item 2768
    drawLink(
    	render,
    	texId,
    	item.x,
    	item.y,
    	item.w,
    	link
    )
    // item 156
    pushPrimitive(item, texId, 0, 0);
    // item 157
    renderTextTex(render, texId, item, "left", link)
}

function addDefaultHandles(handles, item) {
    // item 2182
    var dims = {
    	x: item.x,
    	y: item.y,
    	w: item.w,
    	h: item.h
    };
    // item 2181
    var id = item.id
    // item 2172
    var left = item.x - item.w;
    var right = item.x + item.w;
    var top = item.y - item.h;
    var bottom = item.y + item.h;
    // item 2173
    addGrip(
    	grips,
    	id,
    	left,
    	top,
    	Const.FR_LU,
    	dims
    );
    // item 2179
    addGrip(
    	grips,
    	id,
    	item.x,
    	top,
    	Const.FR_UP,
    	dims
    );
    // item 2180
    addGrip(
    	grips,
    	id,
    	right,
    	top,
    	Const.FR_RU,
    	dims
    );
    // item 2176
    addGrip(
    	grips,
    	id,
    	right,
    	item.y,
    	Const.FR_RI,
    	dims
    );
    // item 2178
    addGrip(
    	grips,
    	id,
    	right,
    	bottom,
    	Const.FR_RD,
    	dims
    );
    // item 2177
    addGrip(
    	grips,
    	id,
    	item.x,
    	bottom,
    	Const.FR_DO,
    	dims
    );
    // item 2175
    addGrip(
    	grips,
    	id,
    	left,
    	bottom,
    	Const.FR_LD,
    	dims
    );
    // item 2174
    addGrip(
    	grips,
    	id,
    	left,
    	item.y,
    	Const.FR_LE,
    	dims
    );
}

function addHandle(x, y, name, result) {
    // item 2214
    var handle = {
    	x: x,
    	y: y,
    	name: name
    }
    // item 2215
    result.push(handle)
}

function addMore(name, render, size) {
    // item 2681
    moreCallbacks[name] = {
    	render: render,
    	size: size
    }
}

function addMoreSize(name, w, h) {
    // item 2704
    var size = function(content) {
    	return new Utils.Size(w, h)
    }
    // item 2703
    moreCallbacks[name] = {
    	size: size
    }
}

function address_fit(item, render) {
    // item 401
    return case_fit(item, render);
}

function address_makeBox(node, x, y, render) {
    // item 407
    return Utils.boxFromPoint(
    	x,
    	y,
    	node.w,
    	node.h
    );
}

function address_render(graph, item, render) {
    // item 1908
    var format = copyFormat(item, null)
    // item 1909
    var texId = makeStandardTexture(render, item);
    // item 1907
    render.drawShape(
    	texId,
    	"poly",
    	item.x,
    	item.y,
    	makeAddressPoints(item.w, item.h),
    	format
    );
    // item 1910
    if (item.flag1) {
        // item 1913
        var x = 0
        var y = 0
        var w = item.w
        var h = item.h
        var top = y - h
        var middle = top + 2.0 / 3.0 * h
        
        var tx0 = x - w / 2;
        var tx1 = x + w / 2;
        var ty = (top + middle) / 2;
        // item 1915
        var markFormat = {
        	fillColor: format.lineColor
        }
        // item 1918
        var points = [
         tx0, ty,
         x, top,    
         tx1, ty
        ]
        // item 1916
        render.drawShape(
        	texId,
        	"poly",
        	item.x,
        	item.y,
        	points,
        	markFormat
        );
    }
    // item 921
    pushPrimitive(item, texId, 0, 0);
    // item 918
    var y = Math.floor(item.h / 3);
    // item 1920
    renderTextTexCore(
    	render,
    	texId,
    	item,
    	"center",
    	item.x,
    	item.y + y,
    	item.w,
    	item.tb
    )
}

function beginend_fit(item, render) {
    // item 198
    return action_fit(item, render);
}

function beginend_makeBox(node, x, y, render) {
    // item 178
    return itemCallbacks.action.makeBox(
    	node,
    	x,
    	y
    );
}

function beginend_render(graph, item, render) {
    // item 901
    var texId = makeStandardTexture(render, item);
    // item 1765
    render.drawShape(
    	texId,
    	"beginend",
    	item.x,
    	item.y,
    	[item.w,	item.h],
    	copyFormat(item, null)
    );
    // item 2806
    var link = getLink(item)
    // item 2805
    drawLink(
    	render,
    	texId,
    	item.x,
    	item.y,
    	item.w,
    	link
    )
    // item 899
    pushPrimitive(item, texId, 0, 0);
    // item 900
    renderTextTex(render, texId, item, "center", link)
}

function branch_fit(item, render) {
    // item 380
    return case_fit(item, render);
}

function branch_makeBox(node, x, y, render) {
    // item 386
    return Utils.boxFromPoint(
    	x,
    	y,
    	node.w,
    	node.h
    );
}

function branch_render(graph, item, render) {
    // item 1889
    var format = copyFormat(item, null)
    // item 1892
    var texId = makeStandardTexture(render, item);
    // item 1888
    render.drawShape(
    	texId,
    	"poly",
    	item.x,
    	item.y,
    	makeCasePoints(item.w, item.h),
    	format
    );
    // item 1893
    if (item.flag1) {
        // item 1896
        var x = 0
        var y = 0
        var w = item.w
        var h = item.h
        var bottom = y + h
        var middle = bottom - 2.0 / 3.0 * h;
        
        var tx0 = x - w / 2;
        var tx1 = x + w / 2;
        var ty = (bottom + middle) / 2;
        // item 1898
        var markFormat = {
        	fillColor: format.lineColor
        }
        // item 1897
        var points = [
         tx0, ty,
         x, bottom,
         tx1, ty
        ]
        // item 1899
        render.drawShape(
        	texId,
        	"poly",
        	item.x,
        	item.y,
        	points,
        	markFormat
        );
    }
    // item 916
    pushPrimitive(item, texId, 0, 0);
    // item 913
    var tpos = getMainTextPos(item)
    // item 2807
    var link = getLink(item)
    // item 2808
    drawLink(
    	render,
    	texId,
    	tpos.x,
    	tpos.y,
    	tpos.w,
    	link
    )
    // item 1919
    renderTextTexCore(
    	render,
    	texId,
    	item,
    	"center",
    	tpos.x,
    	tpos.y,
    	tpos.w,
    	item.tb,
    	link
    )
}

function buildDrnCandies(item, candies) {
    // item 2216
    var left = item.x - item.w;
    var right = item.x + item.w;
    var top = item.y - item.h;
    var bottom = item.y + item.h;
    // item 2203
    addHandle(
    	left,
    	top,
    	Const.DRN_SIZE_L,
    	candies
    );
    // item 2204
    addHandle(
    	left,
    	item.y,
    	Const.DRN_SIZE_L,
    	candies
    );
    // item 2205
    addHandle(
    	left,
    	bottom,
    	Const.DRN_SIZE_L,
    	candies
    );
    // item 2206
    addHandle(
    	right,
    	top,
    	Const.DRN_SIZE_R,
    	candies
    );
    // item 2207
    addHandle(
    	right,
    	item.y,
    	Const.DRN_SIZE_R,
    	candies
    );
    // item 2208
    addHandle(
    	right,
    	bottom,
    	Const.DRN_SIZE_R,
    	candies
    );
}

function buildFreeCandies(item, candies) {
    // item 2224
    var left = item.x - item.w;
    var right = item.x + item.w;
    var top = item.y - item.h;
    var bottom = item.y + item.h;
    // item 2225
    addHandle(
    	left,
    	top,
    	Const.FR_LU,
    	candies
    );
    // item 2231
    addHandle(
    	item.x,
    	top,
    	Const.FR_UP,
    	candies
    );
    // item 2232
    addHandle(
    	right,
    	top,
    	Const.FR_RU,
    	candies
    );
    // item 2228
    addHandle(
    	right,
    	item.y,
    	Const.FR_RI,
    	candies
    );
    // item 2230
    addHandle(
    	right,
    	bottom,
    	Const.FR_RD,
    	candies
    );
    // item 2229
    addHandle(
    	item.x,
    	bottom,
    	Const.FR_DO,
    	candies
    );
    // item 2227
    addHandle(
    	left,
    	bottom,
    	Const.FR_LD,
    	candies
    );
    // item 2226
    addHandle(
    	left,
    	item.y,
    	Const.FR_LE,
    	candies
    );
}

function calculateIconHeight(padding, textSize) {
    // item 666
    return calculateIconSize(padding, textSize);
}

function calculateIconSize(padding, textSize) {
    // item 552
    var requested = textSize + padding * 2;
    var halfSize = requested / 2;
    // item 553
    var snaps = Math.ceil(halfSize / Config.SIZE_SNAP);
    // item 1031
    return snaps * Config.SIZE_SNAP;
}

function callout_moveHandle(item, dx, dy, x, y) {
    // item 1589
    var content = item.content
    var result
    var newX = x - item.x
    var newY = y - item.y
    // item 1590
    var box = Utils.boxFromPoint(
    	0,
    	0,
    	item.w,
    	item.h
    )
    // item 1591
    if (Utils.hitBox(box, newX, newY)) {
        // item 1595
        result = content
    } else {
        // item 1594
        result = Utils.copyObject(content)
        result.h0x = newX
        result.h0y = newY
    }
    // item 2279
    return {
    	content: result
    }
}

function callout_render(graph, item, render) {
    // item 2096
    var RADIUS = 5
    var BORDER = 0
    // item 1581
    var content = item.content
    // item 1579
    var texId = makeStandardTexture(render, item);
    // item 2080
    var format = copyFormat(item, null)
    // item 2079
    render.drawShape(
    	texId,
    	"rounded",
    	item.x,
    	item.y,
    	[item.w, item.h, RADIUS, BORDER],
    	format
    );
    // item 1577
    pushPrimitive(item, texId, 0, 0);
    // item 2842
    var link = getLink(item)
    // item 2841
    drawLink(
    	render,
    	texId,
    	item.x,
    	item.y,
    	item.w,
    	link
    )
    // item 1578
    renderTextTex(render, texId, item, "left", link)
    // item 1580
    var arrowId = render.createCalloutArrow(
    	item.x, item.y, item.w, item.h,
    	content.h0x,
    	content.h0y,
    	format,
    	"free"
    )
    // item 1582
    pushPrimitive(item, arrowId, 0, 0);
}

function case_fit(item, render) {
    // item 313
    var result = action_fit(item, render)
    // item 316
    result.h = result.h * 3.0 / 2.0
    // item 315
    return result
}

function case_makeBox(node, x, y, render) {
    // item 322
    return Utils.boxFromPoint(
    	x,
    	y,
    	node.w,
    	node.h
    );
}

function case_render(graph, item, render) {
    // item 1847
    var format = copyFormat(item, "select")
    // item 1852
    var texId = makeStandardTexture(render, item);
    // item 1846
    render.drawShape(
    	texId,
    	"poly",
    	item.x,
    	item.y,
    	makeCasePoints(item.w, item.h),
    	format
    );
    // item 1848
    var bottom = item.y + item.h
    var middle = bottom - 2.0 / 3.0 * item.h
    var left = item.x - item.w
    var right = item.x + item.w
    // item 1849
    render.drawShape(
    	texId,
    	"line",
    	left,
    	middle,
    	[right, middle],
    	format
    );
    // item 907
    pushPrimitive(item, texId, 0, 0);
    // item 2888
    var tpos = getMainTextPos(item)
    // item 2809
    var link = getLink(item)
    // item 2810
    drawLink(
    	render,
    	texId,
    	tpos.x,
    	tpos.y,
    	tpos.w,
    	link
    )
    // item 1850
    renderTextTexCore(
    	render,
    	texId,
    	item,
    	"center",
    	tpos.x,
    	tpos.y,
    	tpos.w,
    	item.tb,
    	link
    )
}

function collection_render(graph, item, render) {
    // item 3024
    var item2 = {
    	x: item.x,
    	y: item.y,
    	w: item.w + CollectionPadding,
    	h: item.h + CollectionPadding,
    	content: item.content
    }
    // item 3006
    var texId = makeStandardTexture(render, item2);
    // item 3022
    var format = copyFormat(item, "action")
    // item 3005
    render.drawShape(
    	texId,
    	"poly",
    	item.x,
    	item.y,
    	makeCollectionPoints(0, 0, item.w, item.h),
    	format
    );
    // item 3020
    var top = item.y - item.h
    var bottom = item.y + item.h
    var left = item.x - item.w + 0.5
    var right = item.x + item.w
    // item 3021
    render.drawShape(
    	texId,
    	"line",
    	left,
    	bottom,
    	[right, bottom],
    	format
    );
    // item 3023
    render.drawShape(
    	texId,
    	"line",
    	right,
    	top,
    	[right, bottom],
    	format
    );
    // item 3008
    var link = getLink(item)
    // item 3007
    drawLink(
    	render,
    	texId,
    	item.x,
    	item.y,
    	item.w,
    	link
    )
    // item 3003
    pushPrimitive(item, texId, 0, 0);
    // item 3004
    renderTextTex(render, texId, item, "left", link)
}

function comment_fit(item, render) {
    // item 2811
    var link = getLink(item)
    // item 1229
    var result = flowText(
      render, getText(item),
      item.content, item.w - 5,
      link
    )
    // item 2812
    result.h += 5
    result.w = item.w
    // item 1230
    return result
}

function comment_makeBox(node, x, y, render) {
    // item 470
    return Utils.boxFromPoint(
    	x,
    	y,
    	node.w,
    	node.h
    );
}

function comment_render(graph, item, render) {
    // item 1952
    var RADIUS = 10;
    // item 1951
    var BORDER = 5;
    // item 955
    var texId = makeStandardTexture(render, item);
    // item 1949
    var backFormat = copyFormat(item, null)
    backFormat.fillColor = backFormat.secondaryColor
    // item 1948
    render.drawShape(
    	texId,
    	"rectangle",
    	item.x,
    	item.y,
    	[item.w, item.h],
    	backFormat
    );
    // item 1950
    render.drawShape(
    	texId,
    	"rounded",
    	item.x,
    	item.y,
    	[item.w, item.h, RADIUS, BORDER],
    	copyFormat(item, null)
    );
    // item 953
    pushPrimitive(item, texId, 0, 0);
    // item 1023
    var color = getTextColor(item)
    // item 1025
    var left = item.x - item.w + getPadding(item.content);
    // item 2814
    var link = getLink(item)
    // item 2813
    drawLink(
    	render,
    	texId,
    	item.x,
    	item.y,
    	item.w,
    	link
    )
    // item 2540
    renderTextTex(render, texId, item, "left", link)
}

function complex_render(graph, item, render, makePoints, narrowUp) {
    // item 2050
    var format = copyFormat(item, null)
    // item 2044
    var texId = makeStandardTexture(render, item);
    // item 2043
    pushPrimitive(item, texId, 0, 0);
    // item 2046
    render.drawShape(
    	texId,
    	"poly",
    	item.x,
    	item.y,
    	makePoints(item),
    	format
    );
    // item 2049
    var borderFormat = {
    	lineThickness: format.lineThickness,
    	lineColor: format.lineColor
    }
    // item 2051
    render.drawShape(
    	texId,
    	"poly",
    	item.x,
    	item.y,
    	makeComplexLower(item),
    	borderFormat
    );
    // item 2045
    var left = item.x - item.w
     + getPadding(item.content);
    var upper = item.y - item.h + item.a;
    // item 2077
    var upperX = item.x
    var upperW = item.w - Config.INPUT_LEFT
    // item 2074
    if (narrowUp) {
        
    } else {
        // item 2078
        upperX = item.x + Config.INPUT_LEFT / 2
        upperW = item.w - Config.INPUT_LEFT / 2
    }
    // item 2048
    renderTextTexCore(
    	render,
    	texId,
    	item,
    	"left",
    	upperX,
    	upper,
    	upperW,
    	item.tb2
    )
    // item 2890
    var tpos = getMainTextPos(item)
    // item 2836
    var link = getLink(item)
    // item 2835
    drawLink(
    	render,
    	texId,
    	tpos.x,
    	tpos.y,
    	tpos.w,
    	link
    )
    // item 2047
    renderTextTexCore(
    	render,
    	texId,
    	item,
    	"left",
    	tpos.x,
    	tpos.y,
    	tpos.w,
    	item.tb,
    	link
    )
}

function complex_render2(graph, item, render, makePoints, narrowUp) {
    // item 2978
    var format = copyFormat(item, null)
    // item 2972
    var texId = makeStandardTexture(render, item);
    // item 2971
    pushPrimitive(item, texId, 0, 0);
    // item 2974
    render.drawShape(
    	texId,
    	"poly",
    	item.x,
    	item.y,
    	makePoints(item),
    	format
    );
    // item 2977
    var borderFormat = {
    	lineThickness: format.lineThickness,
    	lineColor: format.lineColor
    }
    // item 2979
    render.drawShape(
    	texId,
    	"poly",
    	item.x,
    	item.y,
    	makeComplexLower2(item),
    	borderFormat
    );
    // item 2973
    var left = item.x - item.w
     + getPadding(item.content);
    var upper = item.y - item.h + item.a;
    // item 2983
    var upperX = item.x + Config.INPUT_LEFT
    var upperW = item.w - Config.INPUT_LEFT
    // item 2980
    if (narrowUp) {
        
    } else {
        // item 2984
        upperX = item.x + Config.INPUT_LEFT / 2
        upperW = item.w - Config.INPUT_LEFT / 2
    }
    // item 2976
    renderTextTexCore(
    	render,
    	texId,
    	item,
    	"left",
    	upperX,
    	upper,
    	upperW,
    	item.tb2
    )
    // item 2987
    var tpos = getMainTextPos(item)
    tpos.x +=  Config.INPUT_LEFT * 2
    // item 2986
    var link = getLink(item)
    // item 2985
    drawLink(
    	render,
    	texId,
    	tpos.x,
    	tpos.y,
    	tpos.w,
    	link
    )
    // item 2975
    renderTextTexCore(
    	render,
    	texId,
    	item,
    	"left",
    	tpos.x,
    	tpos.y,
    	tpos.w,
    	item.tb,
    	link
    )
}

function copyFormat(item, customType) {
    // item 1763
    var result = {}
    // item 1762
    result.fillColor = getBackFill(item, customType)
    result.lineColor = getLineColor(item, customType)
    result.lineThickness = getThickness(item)
    result.lineStyle = getStyle(item)
    result.shadow = getShadow(item)
    result.secondaryColor = getSecondary(item)
    // item 3026
    if (result.lineColor == "none") {
        // item 3029
        result.lineThickness = 0
    }
    // item 1764
    return result
}

function copyLineFormat(item) {
    // item 2296
    var result = {}
    var content = item.content || {}
    // item 2295
    result.lineColor = content.lineColor || getDiaLine()
    result.lineThickness = getThickness(item) || 1
    result.lineStyle = getStyle(item)
    result.arrowStart = content.arrowStart
    result.arrowEnd = content.arrowEnd
    result.fillColor =  Theme.getIconBack("action")
    // item 2297
    return result
}

function createMinSize(w, h) {
    // item 673
    if (h < Config.MIN_ICON_HEIGHT) {
        // item 676
        h = Config.MIN_ICON_HEIGHT;
    }
    // item 677
    if (w < Config.MIN_ICON_WIDTH) {
        // item 680
        w = Config.MIN_ICON_WIDTH;
    }
    // item 672
    return new  Utils.Size(w, h);
}

function ctrlEnd_render(graph, item, render) {
    // item 998
    var texId = makeStandardTexture(render, item);
    // item 1947
    render.drawShape(
    	texId,
    	"ctrlend",
    	item.x,
    	item.y,
    	[item.w, item.h, CTRL_RADIUS],
    	copyFormat(item, null)
    );
    // item 996
    pushPrimitive(item, texId, 0, 0);
    // item 997
    renderTextTex(render, texId, item, "center");
}

function ctrlStart_render(graph, item, render) {
    // item 989
    var texId = makeStandardTexture(render, item);
    // item 1946
    render.drawShape(
    	texId,
    	"ctrlstart",
    	item.x,
    	item.y,
    	[item.w, item.h, CTRL_RADIUS],
    	copyFormat(item, null)
    );
    // item 987
    pushPrimitive(item, texId, 0, 0);
    // item 988
    renderTextTex(render, texId, item, "center");
}

function drawCandies(graph, free, render, selection) {
    // item 6970001
    var _ind697 = 0;
    var _col697 = selection;
    var _keys697 = Object.keys(_col697); 
    var _len697 = _keys697.length;
    while (true) {
        // item 6970002
        if (_ind697 < _len697) {
            
        } else {
            break;
        }
        // item 6970004
        var id = _keys697[_ind697]; var _ = _col697[id];
        // item 1397
        var item = free.get(id);
        // item 1398
        if (item) {
            
        } else {
            // item 699
            item = graph.getItem(id);
        }
        // item 853
        drawCandy(graph, item, render, selection);
        // item 6970003
        _ind697++;
    }
}

function drawCandy(graph, item, render, selection) {
    // item 852
    var sel = selection[item.id];
    // item 8430001
    if (sel === "green") {
        // item 606
        if (item.isLine) {
            // item 1380
            var head = graph.getHead(item)
            var tail = graph.getTail(item)
            // item 609
            if (item.isVertical) {
                // item 617
                if ((item.role === "down") || (item.role === "par-down")) {
                    // item 620
                    verticalCandy(
                    	head,
                    	tail,
                    	item,
                    	render,
                    	true
                    );
                } else {
                    // item 616
                    verticalCandy(
                    	head,
                    	tail,
                    	item,
                    	render,
                    	false
                    );
                }
            } else {
                // item 2081
                var drawPoint = Utils.canInsertInHorizontal(
                	graph,
                	item
                )
                // item 621
                horizontalCandy(
                	head,
                	tail,
                	item,
                	render,
                	drawPoint
                );
            }
        } else {
            // item 612
            if (item.type === "junction") {
                // item 615
                juncCandy(item, render);
            } else {
                // item 614
                standardCandy(item, render, "#00ff00");
            }
        }
        // item 2395
        drawHandles(render, item)
    } else {
        // item 8430002
        if (sel === "blue") {
            // item 851
            standardCandy(item, render, "#00ffff");
        }
    }
}

function drawHandles(render, item) {
    // item 1534
    var handles = getHandles(item)
    var color = "yellow"
    // item 15350001
    var _ind1535 = 0;
    var _col1535 = handles;
    var _len1535 = _col1535.length;
    while (true) {
        // item 15350002
        if (_ind1535 < _len1535) {
            
        } else {
            break;
        }
        // item 15350004
        var handle = _col1535[_ind1535];
        // item 1543
        var candyId = render.createJCandy(
        	handle.x,
        	handle.y,
        	color,
        	"free_candies"
        );
        // item 1544
        pushPrimitive(
        	item,
        	candyId,
        	handle.x - item.x,
        	handle.y - item.y
        );
        // item 15350003
        _ind1535++;
    }
}

function drawLink(render, texId, x, y, w, link) {
    // item 2801
    if (link) {
        // item 2904
        var pos = getLinkIconPos(x, y, w)
        // item 2797
        render.drawLinkIcon(
        	texId,
        	link,
        	pos.x,
        	pos.y
        )
    }
}

function duration_fit(item, render) {
    // item 1738
    render.setFont(item.content.font)
    // item 1262
    var block = Utils.buildBlock(
    	render,
    	getText(item)
    );
    // item 1261
    var h = calculateIconHeight(
    	getPadding(item.content),
    	block.height
    );
    // item 1251
    var w = calculateIconSize(
    	getPadding(item.content),
    	block.width + Config.INPUT_LEFT
    );
    // item 1257
    if (h < Config.MIN_ICON_HEIGHT) {
        // item 1260
        h = Config.MIN_ICON_HEIGHT;
    }
    // item 1252
    var minW = h * 2;
    // item 1253
    if (w < minW) {
        // item 1256
        w = minW;
    }
    // item 1263
    var result = new FitResult();
    result.w = w;
    result.h = h;
    result.tb = block;
    return result;
}

function duration_makeBox(node, x, y, render) {
    // item 948
    var box = Utils.boxFromPoint(
    	x,
    	y,
    	node.w,
    	node.h
    );
    // item 949
    box.right += Config.METRE;
    // item 950
    return box;
}

function end_fit(item, render) {
    // item 1740
    render.setFont(item.content.font)
    // item 1290
    var block = Utils.buildBlock(
    	render,
    	getText(item)
    );
    // item 1301
    var h = snapSize(block.height, Config.SNAP);
    // item 1302
    var w = snapSize(block.width, Config.SNAP);
    // item 1293
    w = Math.max(w, h * 2);
    // item 1291
    var result = new FitResult();
    result.w = w;
    result.h = h;
    result.tb = block;
    return result;
}

function end_makeBox(node, x, y, render) {
    // item 1273
    return itemCallbacks.action.makeBox(
    	node,
    	x,
    	y
    );
}

function end_render(graph, item, render) {
    // item 1282
    var texId = makeStandardTexture(render, item);
    // item 1766
    render.drawShape(
    	texId,
    	"beginend",
    	item.x,
    	item.y,
    	[item.w-5, item.h-5],
    	copyFormat(item, null)
    );
    // item 1280
    pushPrimitive(item, texId, 0, 0);
    // item 1281
    renderTextTex(render, texId, item, "center");
}

function eraseFromRender(render, item) {
    // item 802
    if (item.primitives) {
        // item 7980001
        var _ind798 = 0;
        var _col798 = item.primitives;
        var _len798 = _col798.length;
        while (true) {
            // item 7980002
            if (_ind798 < _len798) {
                
            } else {
                break;
            }
            // item 7980004
            var prim = _col798[_ind798];
            // item 800
            render.deleteItem(prim.id);
            // item 7980003
            _ind798++;
        }
        // item 801
        item.primitives = null;
    }
}

function f_circle_render(graph, item, render) {
    // item 2712
    var texId = makeStandardTexture(render, item);
    // item 2714
    render.drawShape(
    	texId,
    	"circle",
    	item.x,
    	item.y,
    	[item.w, item.h],
    	copyFormat(item, null)
    );
    // item 2710
    pushPrimitive(item, texId, 0, 0);
    // item 2851
    var link = getLink(item)
    // item 2850
    drawLink(
    	render,
    	texId,
    	item.x,
    	item.y,
    	item.w,
    	link
    )
    // item 2711
    renderTextTex(render, texId, item, "center", link)
}

function f_cloud_fit(item, render) {
    // item 2756
    var result = action_fit(item, render)
    // item 2758
    result.h = result.h * 3.0 / 2.0;
    // item 2757
    return result;
}

function f_cloud_render(graph, item, render) {
    // item 2745
    var texId = makeStandardTexture(render, item);
    // item 2746
    render.drawShape(
    	texId,
    	"cloud",
    	item.x,
    	item.y,
    	[item.w, item.h],
    	copyFormat(item, null)
    );
    // item 2743
    pushPrimitive(item, texId, 0, 0);
    // item 2754
    var y = Math.floor(item.h / 3);
    // item 2755
    renderTextTexCore(
    	render,
    	texId,
    	item,
    	"center",
    	item.x,
    	item.y + y,
    	item.w,
    	item.tb
    )
}

function f_db_render(graph, item, render) {
    // item 2766
    var texId = makeStandardTexture(render, item);
    // item 2767
    render.drawShape(
    	texId,
    	"db",
    	item.x,
    	item.y,
    	[item.w, item.h],
    	copyFormat(item, null)
    );
    // item 2764
    pushPrimitive(item, texId, 0, 0);
    // item 2765
    renderTextTex(render, texId, item, "center");
}

function f_label_render(graph, item, render) {
    // item 2549
    var texId = makeStandardTexture(render, item);
    // item 2546
    pushPrimitive(item, texId, 0, 0);
    // item 2547
    renderTextTex(render, texId, item, "left");
}

function f_line_boxIntersect(item, box) {
    // item 2305
    var lineBox = findLineBox(item)
    // item 2306
    return Utils.boxesIntersect(box, lineBox)
}

function f_line_candies(item) {
    // item 2244
    var candies = []
    // item 2246
    addHandle(
    	item.x,
    	item.y,
    	Const.LINE_START,
    	candies
    )
    // item 2247
    addHandle(
    	item.x + item.w,
    	item.y + item.h,
    	Const.LINE_END,
    	candies
    )
    // item 2245
    return candies
}

function f_line_fit(item, render) {
    // item 2551
    var text = getText(item)
    // item 2101
    var result = {
    	w: item.w,
    	h: item.h
    }
    // item 2552
    if (text) {
        // item 2585
        var w = Utils.snapUp(getLineLength(item) / 2)
        // item 2604
        w = Math.max(40, w)
        // item 2550
        var textSize = flowText(
        	render,
        	text,
        	item.content,
        	w
        );
        // item 2557
        result.tb = textSize.tb
    }
    // item 2556
    return result
}

function f_line_hit(item, x, y) {
    // item 2120
    if ((item.w == 0) || (item.h == 0)) {
        // item 2126
        return hitLineBox(item, x, y)
    } else {
        // item 2127
        return hitFreeLine(item, x, y)
    }
}

function f_line_makeBox(item, x, y, render) {
    // item 2111
    var box = findLineBox(item)
    // item 2307
    box.left += Config.TOUCH_MARGIN
    box.top += Config.TOUCH_MARGIN
    box.right -= Config.TOUCH_MARGIN
    box.bottom -= Config.TOUCH_MARGIN
    // item 2308
    return box
}

function f_line_moveHandle(item, handleType, dx, dy) {
    // item 2264
    var x1 = item.x
    var y1 = item.y
    var x2 = x1 + item.w
    var y2 = y1 + item.h
    // item 22570001
    if (handleType === "LINE_START") {
        // item 2275
        x1 += dx
        y1 += dy
    } else {
        // item 22570002
        if (handleType === "LINE_END") {
            
        } else {
            // item 22570003
            throw "Unexpected switch value: " + handleType;
        }
        // item 2282
        x2 += dx
        y2 += dy
    }
    // item 2283
    if ((x1 == x2) && (y1 == y2)) {
        // item 2255
        return {}
    } else {
        // item 2287
        return {
        	x: x1,
        	y: y1,
        	w: x2 - x1,
        	h: y2 - y1
        }
    }
}

function f_line_render(graph, item, render) {
    // item 2561
    var tb = item.tb
    // item 2562
    if (tb) {
        // item 2565
        var w = tb.width / 2
        var h = tb.height / 2
        var tx, ty, ta
        var h1 = h + Config.ICON_PADDING
        // item 2597
        var length = getLineLength(item)
        // item 2596
        var angle = Utils.findAngle(
        	0,
        	0,
        	item.w,
        	item.h
        )
        // item 2598
        if (item.w < 0) {
            // item 2602
            var tpos0 = new Utils.Point(
            	length / 2,
            	h1
            )
            // item 2601
            var tpos1 = Utils.rotatePoint(
            	angle,
            	tpos0
            )
            
            tx = tpos1.x
            ty = tpos1.y
            ta = Utils.oppositeAngle(angle)
        } else {
            // item 2595
            var tpos0 = new Utils.Point(
            	length / 2,
            	-h1
            )
            // item 2584
            var tpos1 = Utils.rotatePoint(
            	angle,
            	tpos0
            )
            
            tx = tpos1.x
            ty = tpos1.y
            ta = angle
        }
        // item 2603
        var left = Math.round(tx - w)
        var top = Math.round(ty - h)
        // item 2560
        render.setFont(item.content.font)
        // item 2559
        var texId = render.createTexture(
        	item.x,
        	item.y,
        	left,
        	top,
        	w * 2,
        	h * 2,
        	"free",
        	ta
        )
        // item 2566
        pushPrimitive(item, texId, 0, 0);
        // item 2594
        /*
        render.drawShape(
        	texId,
        	"rectangle",
        	item.x + tx,
        	item.y + ty,
        	[w, h],
        	copyFormat(item, null)
        );
        */
        // item 2567
        renderTextTexCore(
        	render,
        	texId,
        	item,
        	"center",
        	item.x + tx,
        	item.y + ty,
        	w,
        	tb
        )
    }
    // item 2237
    var primId = render.createLine(
    	item.x,
    	item.y,
    	item.w,
    	item.h,
    	copyLineFormat(item),
    	"free"
    );
    // item 2238
    pushPrimitive(item, primId, 0, 0);
}

function f_placeholder_render(graph, item, render) {
    // item 2723
    var texId = makeStandardTexture(render, item);
    // item 2726
    var format = copyFormat(item, null)
    // item 2719
    render.drawShape(
    	texId,
    	"rectangle",
    	item.x,
    	item.y,
    	[item.w, item.h],
    	format
    );
    // item 2725
    var left = item.x - item.w
    var top = item.y - item.h
    var right = item.x + item.w
    var bottom = item.y + item.h
    // item 2724
    render.drawShape(
    	texId,
    	"line",
    	left,
    	top,
    	[right, bottom],
    	format
    );
    // item 2727
    render.drawShape(
    	texId,
    	"line",
    	left,
    	bottom,
    	[right, top],
    	format
    );
    // item 2720
    pushPrimitive(item, texId, 0, 0);
}

function f_ptr_left_handles(item) {
    // item 2530
    var result = []
    // item 2529
    addHandle(
    	item.x - item.w + item.content.h0x,
    	item.y - item.h,
    	"H_EW",
    	result
    )
    // item 2531
    return result
}

function f_ptr_left_moveHandle(item, handleType, dx, dy) {
    // item 2520
    var content = item.content
    // item 2523
    var h0x = content.h0x + dx
    h0x = Math.max(h0x, 4)
    h0x = Math.min(item.w, h0x)
    // item 2522
    var result = Utils.copyObject(content)
    result.h0x = h0x
    // item 2521
    return {
    	content: result
    }
}

function f_ptr_left_render(graph, item, render) {
    // item 2501
    var texId = makeStandardTexture(render, item);
    // item 2502
    var depth = item.content.h0x
    // item 2500
    render.drawShape(
    	texId,
    	"poly",
    	item.x,
    	item.y,
    	makeLeftPtrPoints(0, 0, item.w, item.h, depth),
    	copyFormat(item, "action")
    );
    // item 2499
    pushPrimitive(item, texId, 0, 0);
    // item 2504
    var x = item.x + depth / 2
    var w = item.w - depth / 2
    // item 2503
    renderTextTexCore(
    	render,
    	texId,
    	item,
    	"left",
    	x,
    	item.y,
    	w,
    	item.tb
    )
}

function f_ptr_right_fit(item, render) {
    // item 2450
    var padding = item.content.h0x / 2
    // item 2449
    var partWidth = item.w - padding;
    // item 2448
    var result = flowText(
    	render,
    	getText(item),
    	item.content,
    	partWidth
    )
    // item 2452
    result.w = item.w;
    // item 2451
    return result;
}

function f_ptr_right_handles(item) {
    // item 2478
    var result = []
    // item 2477
    addHandle(
    	item.x + item.w - item.content.h0x,
    	item.y - item.h,
    	"H_EW",
    	result
    )
    // item 2479
    return result
}

function f_ptr_right_moveHandle(item, handleType, dx, dy) {
    // item 2458
    var content = item.content
    // item 2461
    var h0x = content.h0x - dx
    h0x = Math.max(h0x, 4)
    h0x = Math.min(item.w, h0x)
    // item 2460
    var result = Utils.copyObject(content)
    result.h0x = h0x
    // item 2459
    return {
    	content: result
    }
}

function f_ptr_right_render(graph, item, render) {
    // item 2436
    var texId = makeStandardTexture(render, item);
    // item 2491
    var depth = item.content.h0x
    // item 2435
    render.drawShape(
    	texId,
    	"poly",
    	item.x,
    	item.y,
    	makeOutputPoints(0, 0, item.w, item.h, depth),
    	copyFormat(item, "action")
    );
    // item 2433
    pushPrimitive(item, texId, 0, 0);
    // item 2493
    var x = item.x - depth / 2
    var w = item.w - depth / 2
    // item 2492
    renderTextTexCore(
    	render,
    	texId,
    	item,
    	"left",
    	x,
    	item.y,
    	w,
    	item.tb
    )
}

function f_ptr_right_resize(item, width, height, content) {
    // item 2484
    content.h0x = Math.min(content.h0x, width)
}

function f_rounded_moveHandle(item, dx) {
    // item 2360
    var content = item.content
    // item 2394
    var radius = content.radius - dx
    radius = Math.max(radius, 2)
    radius = Math.min(item.h, radius)
    radius = Math.min(item.w, radius)
    // item 2393
    var result = Utils.copyObject(content)
    result.radius = radius
    // item 2375
    return {
    	content: result
    }
}

function f_rounded_render(graph, item, render) {
    // item 2384
    var BORDER = 0
    // item 2382
    var texId = makeStandardTexture(render, item);
    // item 2385
    var radius = item.content.radius
    // item 2383
    render.drawShape(
    	texId,
    	"rounded",
    	item.x,
    	item.y,
    	[item.w, item.h, radius, BORDER],
    	copyFormat(item, "question")
    );
    // item 2381
    pushPrimitive(item, texId, 0, 0);
    // item 2853
    var link = getLink(item)
    // item 2852
    drawLink(
    	render,
    	texId,
    	item.x,
    	item.y,
    	item.w,
    	link
    )
    // item 3034
    if (item.type == "raction") {
        // item 3037
        renderTextTex(render, texId, item, "center", link)
    } else {
        // item 2386
        renderTextTex(render, texId, item, "left", link)
    }
}

function f_tab_render(graph, item, render) {
    // item 2735
    var texId = makeStandardTexture(render, item);
    // item 2736
    render.drawShape(
    	texId,
    	"tab",
    	item.x,
    	item.y,
    	[item.w, item.h],
    	copyFormat(item, null)
    );
    // item 2733
    pushPrimitive(item, texId, 0, 0);
    // item 2734
    renderTextTex(render, texId, item, "center");
}

function findLineBox(item) {
    // item 2298
    var x1 = item.x
    var x2 = x1 + item.w
    var y1 = item.y
    var y2 = y1 + item.h
    // item 2151
    var left = Math.min(x1, x2)
    var right = Math.max(x1, x2)
    var top = Math.min(y1, y2)
    var bottom = Math.max(y1, y2)
    // item 2152
    return new Utils.Box(
    	left - Config.TOUCH_MARGIN,
    	top - Config.TOUCH_MARGIN,
    	right + Config.TOUCH_MARGIN,
    	bottom + Config.TOUCH_MARGIN
    )
}

function fitQuestion(item, render) {
    // item 569
    var block = item.tb;
    // item 580
    var h = calculateIconHeight(
    	getPadding(item.content),
    	block.height
    );
    // item 567
    var w = calculateIconSize(
    	h,
    	block.width
    );
    // item 576
    if (h < Config.MIN_ICON_HEIGHT) {
        // item 579
        h = Config.MIN_ICON_HEIGHT;
    }
    // item 570
    var minW = h * 2;
    // item 571
    if (w < minW) {
        // item 574
        w = minW;
    }
    // item 575
    return new  Utils.Size(w, h);
}

function flowText(render, text, content, width, link) {
    // item 1613
    var padding = getPadding(content)
    // item 1206
    var textWidth = (width - padding) * 2;
    // item 2769
    if (link) {
        // item 2772
        textWidth -= Config.LINK_PADDING * 2
    }
    // item 1741
    if (content) {
        // item 1734
        render.setFont(content.font)
    }
    // item 1204
    var div = Utils.buildFlow(
    	render,
    	text,
    	textWidth
    );
    // item 1207
    var height = snapSize(div.height, padding)
    // item 1202
    var result = new FitResult();
    // item 1205
    result.w = width;
    result.h = height;
    result.tb = div;
    // item 1203
    return result;
}

function gdur_moveHandle(item, handleType, dx, dy) {
    // item 1514
    var result
    var content = item.content
    var upX = content.h0x
    var upY = content.h0y
    var downX = content.h1x
    var downY = content.h1y
    // item 15070001
    if (handleType === "FR_0") {
        // item 1520
        if (content.right) {
            // item 1525
            upX -= dx
            upY -= dy
        } else {
            // item 1526
            upX += dx
            upY -= dy
        }
        // item 1517
        upX = Math.max(upX, 30)
        downX = Math.max(downX, 30)
        // item 1518
        var minY = item.h + Config.METRE
        upY = Math.max(upY, minY)
        downY = Math.max(downY, minY)
        // item 1519
        result = Utils.copyObject(content)
        result.h0x = upX
        result.h0y = upY
        result.h1x = downX
        result.h1y = downY
    } else {
        // item 15070002
        if (handleType === "FR_1") {
            // item 1523
            if (content.right) {
                // item 1527
                downX -= dx
                downY += dy
            } else {
                // item 1528
                downX += dx
                downY += dy
            }
            // item 1517
            upX = Math.max(upX, 30)
            downX = Math.max(downX, 30)
            // item 1518
            var minY = item.h + Config.METRE
            upY = Math.max(upY, minY)
            downY = Math.max(downY, minY)
            // item 1519
            result = Utils.copyObject(content)
            result.h0x = upX
            result.h0y = upY
            result.h1x = downX
            result.h1y = downY
        } else {
            // item 1516
            result = content
        }
    }
    // item 2280
    return {
    	content: result
    }
}

function gdur_render(graph, item, render) {
    // item 1434
    var content = item.content
    // item 1438
    var top = -content.h0y
    var bottom = content.h1y
    var leftUp, rightUp
    var leftDown, rightDown
    // item 1435
    if (content.right) {
        // item 1462
        leftUp = -content.h0x + 0.5
        rightUp = 0
        // item 1463
        leftDown = -content.h1x + 0.5
        rightDown = 0
    } else {
        // item 1464
        leftUp = gDurRadius
        rightUp = content.h0x
        // item 1465
        leftDown = gDurRadius
        rightDown = content.h1x
    }
    // item 1554
    if (content.right) {
        // item 1564
        pushCorner(
        	render,
        	item,
        	0,
        	top,
        	"right-top"
        )
        // item 1565
        pushCorner(
        	render,
        	item,
        	0,
        	bottom,
        	"right-bottom"
        )
    } else {
        // item 1566
        pushCorner(
        	render,
        	item,
        	0,
        	top,
        	"left-top"
        )
        // item 1567
        pushCorner(
        	render,
        	item,
        	0,
        	bottom,
        	"left-bottom"
        )
    }
    // item 1432
    pushFreeVertical(
    	render,
    	item,
    	0,
    	top + gDurRadius,
    	content.h0y - gDurRadius
    )
    // item 1473
    pushFreeVertical(
    	render,
    	item,
    	0,
    	0,
    	content.h1y - gDurRadius
    )
    // item 1474
    pushFreeHorizontal(
    	render,
    	item,
    	leftUp,
    	top,
    	content.h0x - gDurRadius
    )
    // item 1478
    pushFreeHorizontal(
    	render,
    	item,
    	leftDown,
    	bottom,
    	content.h1x - gDurRadius
    )
    // item 1431
    pause_render(graph, item, render)
}

function getAlign(item, defaultAlign) {
    // item 1709
    var content = item.content
    // item 1704
    if ((content) && (content.align)) {
        // item 1707
        return content.align
    } else {
        // item 1703
        return defaultAlign
    }
}

function getBackFill(item, customType) {
    // item 1621
    var type = customType || item.type
    var content = item.content
    // item 1622
    if ((content) && (content.fillColor)) {
        // item 1633
        return content.fillColor
    } else {
        // item 1620
        return Theme.getIconBack(type)
    }
}

function getCandies(item) {
    // item 2905
    var result
    // item 2188
    var callback = itemCallbacks[item.type]
    // item 2189
    if (callback.candies) {
        // item 2191
        result = callback.candies(item)
    } else {
        // item 2195
        var candies = []
        // item 2192
        if (item.free) {
            // item 2218
            buildFreeCandies(item, candies)
        } else {
            // item 2217
            buildDrnCandies(item, candies)
        }
        // item 2196
        result = candies
    }
    // item 2906
    return result
}

function getCompX1(item) {
    // item 1958
    return -item.w
}

function getCompX2(item) {
    // item 1964
    return -item.w + Config.INPUT_LEFT
}

function getCompX3(item) {
    // item 1970
    return item.w - Config.INPUT_LEFT * 2
}

function getCompX4(item) {
    // item 1976
    return item.w - Config.INPUT_LEFT * 1.4
}

function getCompX5(item) {
    // item 1982
    return item.w
}

function getCompY1(item) {
    // item 1988
    return -item.h
}

function getCompY2(item) {
    // item 2006
    var y1 = getCompY1(item)
    var y4 = getCompY4(item)
    // item 2007
    return (y1 + y4) / 2
}

function getCompY3(item) {
    // item 2025
    return -item.h + item.a * 2
}

function getCompY4(item) {
    // item 2026
    return getCompY3(item) + Config.INPUT_OVERLAP
}

function getCompY5(item) {
    // item 2013
    return item.h
}

function getDiaLine() {
    // item 2094
    return gDiaLine || Theme.getLine()
}

function getDiaLineFormat(item) {
    // item 2329
    var result = {}
    // item 2328
    result.lineColor = getDiaLine()
    result.lineThickness = gDiaLineThickness
    // item 3058
    if ((item) && (item.isSkewer)) {
        // item 3061
        result.lineThickness += 2
    }
    // item 2330
    return result
}

function getHandles(item) {
    var _sw14060000_ = 0;
    // item 1413
    var result = []
    // item 2467
    var callback = itemCallbacks[item.type]
    // item 2468
    if (callback.handles) {
        // item 2471
        result = callback.handles(item)
    } else {
        // item 1416
        var content = item.content
        // item 14060000
        _sw14060000_ = item.type;
        // item 14060001
        if (_sw14060000_ === "gdur") {
            // item 1417
            if (content.right) {
                // item 1419
                result.push({
                	x: item.x - content.h0x,
                	y: item.y - content.h0y,
                	name: Const.FR_0
                })
                // item 1420
                result.push({
                	x: item.x - content.h1x,
                	y: item.y + content.h1y,
                	name: Const.FR_1
                })
            } else {
                // item 1421
                result.push({
                	x: item.x + content.h0x,
                	y: item.y - content.h0y,
                	name: Const.FR_0
                })
                // item 1422
                result.push({
                	x: item.x + content.h1x,
                	y: item.y + content.h1y,
                	name: Const.FR_1
                })
            }
        } else {
            // item 14060002
            if (_sw14060000_ === "callout") {
                // item 1598
                result.push({
                	x: item.x + content.h0x,
                	y: item.y + content.h0y,
                	name: Const.FR_0
                })
            } else {
                // item 14060003
                if (_sw14060000_ === "f_rounded") {
                    // item 2392
                    addHandle(
                    	item.x + item.w - content.radius,
                    	item.y - item.h,
                    	"H_EW",
                    	result
                    )
                }
            }
        }
    }
    // item 1414
    return result
}

function getItemCallback(type) {
    // item 686
    var callback = itemCallbacks[type];
    // item 687
    if (callback) {
        // item 691
        return callback;
    } else {
        // item 690
        throw "Unsupported item type: '" + type + "'";
    }
}

function getLineColor(item, customType) {
    // item 1668
    var type = customType || item.type
    var content = item.content
    // item 1663
    if ((content) && (content.lineColor)) {
        // item 1666
        return content.lineColor
    } else {
        // item 1661
        return Theme.getIconBorder(type)
    }
}

function getLineLength(item) {
    // item 2592
    var w = item.w
    var h = item.h
    // item 2591
    var length = Math.sqrt(w * w + h * h)
    // item 2593
    return Math.max(40, length)
}

function getLineThickness(item) {
    // item 1680
    var content = item.content
    // item 1675
    if (content) {
        // item 1681
        var thickStr = content.lineThickness
        var thick = parseInt(thickStr)
        // item 1679
        if (isNaN(thick)) {
            // item 1674
            return 1
        } else {
            // item 1678
            return thick
        }
    } else {
        // item 1674
        return 1
    }
}

function getLink(item) {
    // item 2782
    if (item.content) {
        // item 2804
        if (item.content.status) {
            // item 2962
            return item.content.status
        } else {
            // item 2846
            var link = item.content.link
            // item 2963
            if (link) {
                // item 2843
                if ((link.indexOf("youtube.com") == -1) && (link.indexOf("vimeo.com") == -1)) {
                    // item 2785
                    return "link"
                } else {
                    // item 2849
                    return "video"
                }
            } else {
                // item 2965
                return null
            }
        }
    } else {
        // item 2786
        return null
    }
}

function getLinkHandle(item) {
    // item 2937
    if ((item.content) && (item.content.link)) {
        // item 2942
        var tpos = getMainTextPos(item)
        // item 2943
        var pos = getLinkIconPos(
        	tpos.x,
        	tpos.y,
        	tpos.w
        )
        // item 2944
        var handle = {
        	x: pos.x,
        	y: pos.y,
        	name: "link",
        	link: item.content.link
        }
        // item 2946
        return handle
    } else {
        // item 2945
        return null
    }
}

function getLinkIconPos(x, y, w) {
    // item 2901
    var padding = Config.LINK_PADDING + Config.LINK_PADDING / 2
    // item 2902
    var x2 = x - w + padding - 1
    // item 2903
    return new Utils.Point(x2, y)
}

function getMainTextPos(item) {
    var _sw28590000_ = 0;
    // item 2866
    var x = item.x
    var y = item.y
    var w = item.w
    // item 28590000
    _sw28590000_ = item.type;
    // item 28590001
    if ((_sw28590000_ === "case") || (_sw28590000_ === "branch")) {
        // item 2867
        y -= Math.floor(item.h / 3)
    } else {
        // item 28590003
        if (((_sw28590000_ === "input") || (_sw28590000_ === "output")) || (_sw28590000_ === "process")) {
            // item 2874
            var left = item.x - item.w
             + getPadding(item.content)
            var h2 = item.h - item.a
            var lower = item.y + item.h - h2
            // item 2876
            x -= Config.INPUT_LEFT
            y = lower
            w -= Config.INPUT_LEFT
        } else {
            // item 28590006
            if (_sw28590000_ === "insertion") {
                // item 2883
                w -= INSERTION
            } else {
                // item 28590007
                if (_sw28590000_ === "shelf") {
                    // item 2886
                    var h2 = item.h - item.a;
                    var lower = item.y + item.h - h2;
                    // item 2887
                    y = lower
                }
            }
        }
    }
    // item 2873
    return {
    	x: x,
    	y: y,
    	w: w
    }
}

function getMore(subtype) {
    // item 2620
    var methods = moreCallbacks[subtype]
    // item 2617
    if (methods) {
        // item 2623
        return methods
    } else {
        // item 2621
        throw Error("Subtype '" + subtype + "' not found")
    }
}

function getPadding(content) {
    // item 1604
    if (content) {
        // item 1607
        var paddingStr = content.padding
        var padding = parseInt(paddingStr)
        // item 1614
        if (isNaN(padding)) {
            // item 1612
            return Config.ICON_PADDING
        } else {
            // item 1611
            return padding
        }
    } else {
        // item 1612
        return Config.ICON_PADDING
    }
}

function getSecondary(item) {
    // item 1641
    var content = item.content
    // item 1642
    if ((content) && (content.secondaryColor)) {
        // item 1653
        return content.secondaryColor
    } else {
        // item 3052
        if (item.type == "shelf") {
            // item 3055
            return Theme.getIconSecondaryBack("insertion")
        } else {
            // item 1640
            return Theme.getIconSecondaryBack(item.type)
        }
    }
}

function getShadow(item) {
    // item 1752
    if (item.content) {
        // item 1756
        return item.content.shadow
    } else {
        // item 1755
        return false
    }
}

function getStyle(item) {
    // item 2314
    if (item.content) {
        // item 2318
        return item.content.lineStyle
    } else {
        // item 2317
        return "solid"
    }
}

function getText(item) {
    // item 1214
    if (item.content) {
        // item 1217
        return item.content.txt || "";
    } else {
        // item 1218
        return "";
    }
}

function getText2(item) {
    // item 1224
    if (item.content) {
        // item 1227
        return item.content.txt2 || "";
    } else {
        // item 1228
        return "";
    }
}

function getTextColor(item) {
    // item 1693
    var content = item.content
    // item 1688
    if ((content) && (content.textColor)) {
        // item 1691
        return content.textColor
    } else {
        // item 1687
        return Theme.getIconFont(item.type);
    }
}

function getThickness(item) {
    // item 2320
    var content = item.content
    // item 1729
    if (content) {
        // item 2321
        var thickness = content.lineThickness
        // item 2319
        if (isNaN(parseInt(thickness))) {
            // item 3038
            return Theme.getThickness()
        } else {
            // item 1733
            return thickness
        }
    } else {
        // item 3038
        return Theme.getThickness()
    }
}

function hitFreeLine(item, x, y) {
    // item 2142
    if (hitLineBox(item, x, y)) {
        // item 2299
        var x1 = item.x
        var x2 = x1 + item.w
        var y1 = item.y
        var y2 = y1 + item.h
        // item 2153
        var line = Utils.lineFrom2Points(
        	x1,
        	y1,
        	x2,
        	y2
        )
        // item 2154
        var distance = line.distanceToPoint(x, y)
        // item 2155
        if (Math.abs(distance) < Config.TOUCH_MARGIN) {
            // item 2141
            return true
        } else {
            // item 2145
            return false
        }
    } else {
        // item 2145
        return false
    }
}

function hitLineBox(item, x, y) {
    // item 2134
    var box = findLineBox(item)
    // item 2135
    return Utils.hitBox(box, x, y)
}

function horizontalCandy(head, tail, item, render, valence) {
    // item 1384
    var x = head.x
    var y = head.y
    var w = tail.x - head.x
    // item 2082
    var left = x + head.w;
    var right = tail.x
    // item 649
    var candyId = render.createHCandy(
    	x,
    	y,
    	w,
    	valence,
    	left, right,
    	"line_candies"
    );
    // item 651
    pushPrimitive(item, candyId, 0, 0);
}

function horizontal_fit(item, render) {
    
}

function horizontal_render(graph, item, render) {
    // item 169
    var head = graph.getHead(item);
    var tail = graph.getTail(item);
    var w = tail.x - head.x;
    // item 170
    var primId = render.createHorizontal(
    	head.x,
    	head.y,
    	w,
    	item.role,
    	getDiaLineFormat(),
    	"lines"
    );
    // item 172
    pushPrimitive(item, primId, 0, 0);
}

function hscroll_size() {
    // item 2697
    return {
    	w: 80,
    	h: 10
    }
}

function initMore() {
    // item 2661
    addMoreSize("f_ui_vscroll", 10, 80)
    addMoreSize("f_ui_hscroll", 80, 10)
    addMoreSize("f_ui_cross", 20, 20)
    addMoreSize("f_ui_check", 20, 20)
    addMoreSize("f_ui_menu", 20, 20)
    addMoreSize("f_ui_combo", 20, 20)
    addMoreSize("f_ui_left", 20, 20)
    addMoreSize("f_ui_right", 20, 20)
    addMoreSize("f_ui_up", 20, 20)
    addMoreSize("f_ui_down", 20, 20)
    addMoreSize("f_ui_left2", 20, 20)
    addMoreSize("f_ui_right2", 20, 20)
    addMoreSize("f_ui_check_false", 20, 20)
    addMoreSize("f_ui_check_true", 20, 20)
    addMoreSize("f_ui_radio_false", 20, 20)
    addMoreSize("f_ui_radio_true", 20, 20)
    addMoreSize("f_ui_search", 20, 20)
    addMoreSize("f_ui_dots3v", 20, 20)
    addMoreSize("f_ui_dots3h", 20, 20)
    addMoreSize("f_ui_close", 50, 20)
    addMoreSize("f_ui_close_mac", 50, 20)
    // item 2737
    addMoreSize("f_ar_pc", 90, 60)
    addMoreSize("f_ar_human", 30, 70)
    addMoreSize("f_ar_server1", 30, 50)
    addMoreSize("f_ar_server2", 60, 20)
    addMoreSize("f_ar_phone", 20, 40)
    addMoreSize("f_ar_tablet", 40, 50)
    addMoreSize("f_ar_notebook", 70, 40)
    addMoreSize("f_ar_portrait", 30, 40)
}

function input_render(graph, item, render) {
    // item 2052
    complex_render2(
    	graph,
    	item,
    	render,
    	makeComplexInput,
    	true
    )
}

function insertion_fit(item, render) {
    // item 2818
    var link = getLink(item)
    // item 1231
    var result = flowText(
      render,
      getText(item),
      item.content,
      item.w - 5,
      link
    )
    // item 2819
    result.w = item.w
    // item 1232
    return result
}

function insertion_makeBox(node, x, y, render) {
    // item 970
    return Utils.boxFromPoint(
    	x,
    	y,
    	node.w,
    	node.h
    );
}

function insertion_render(graph, item, render) {
    // item 964
    var texId = makeStandardTexture(render, item);
    // item 1798
    var format = copyFormat(item, "action")
    // item 3030
    var qformat = Utils.copyObject(format)
    qformat.fillColor = format.secondaryColor
    // item 1779
    render.drawShape(
    	texId,
    	"rectangle",
    	item.x,
    	item.y,
    	[item.w, item.h],
    	format
    );
    // item 1796
    var lineFormat = copyFormat(item, null)
    lineFormat.fillColor = ""
    // item 3032
    var hi = Math.floor(INSERTION / 2)
    // item 1797
    var left = item.x - item.w + hi
    var right = item.x + item.w - hi
    // item 3031
    render.drawShape(
    	texId,
    	"rectangle",
    	left,
    	item.y,
    	[hi, item.h],
    	qformat
    );
    // item 3033
    render.drawShape(
    	texId,
    	"rectangle",
    	right,
    	item.y,
    	[hi, item.h],
    	qformat
    );
    // item 2892
    var tpos = getMainTextPos(item)
    // item 2821
    var link = getLink(item)
    // item 2891
    drawLink(
    	render,
    	texId,
    	tpos.x,
    	tpos.y,
    	tpos.w,
    	link
    )
    // item 962
    pushPrimitive(item, texId, 0, 0);
    // item 1828
    renderTextTexCore(
    	render,
    	texId,
    	item,
    	"left",
    	tpos.x,
    	tpos.y,
    	tpos.w,
    	item.tb,
    	link
    )
}

function juncCandy(item, render) {
    // item 592
    var candyId = render.createJCandy(
    	item.x,
    	item.y,
    	"#00ff00",
    	"icon_candies"
    );
    // item 594
    pushPrimitive(item, candyId, 0, 0);
}

function junction_fit(item, render) {
    // item 278
    return new  Utils.Size(0, 0);
}

function junction_makeBox(node, x, y, render) {
    // item 266
    return Utils.boxFromPoint(
    	x,
    	y,
    	0,
    	0
    );
}

function junction_render(graph, item, render) {
    
}

function loopbegin_fit(item, render) {
    // item 1303
    var padding = Math.floor(getPadding(item.content) / 2);
    // item 1233
    var result = flowText(
    	render,
    	getText(item),
    	item.content,
    	item.w - padding
    )
    // item 2817
    result.w = item.w
    // item 1234
    return result;
}

function loopbegin_makeBox(node, x, y, render) {
    // item 346
    return Utils.boxFromPoint(
    	x,
    	y,
    	node.w,
    	node.h
    );
}

function loopbegin_render(graph, item, render) {
    // item 1265
    var ADD = LoopAdd
    // item 1736
    render.setFont(item.content.font)
    // item 1868
    var w = item.w + ADD
    // item 926
    var texId = makeCustomTexture(
    	render,
    	item.x,
    	item.y,
    	w,
    	item.h
    );
    // item 1867
    render.drawShape(
    	texId,
    	"poly",
    	item.x,
    	item.y,
    	makeLoopBeginPoints(w, item.h),
    	copyFormat(item, null)
    );
    // item 924
    pushPrimitive(item, texId, 0, 0);
    // item 2816
    var link = getLink(item)
    // item 2815
    drawLink(
    	render,
    	texId,
    	item.x,
    	item.y,
    	item.w,
    	link
    )
    // item 925
    renderTextTex(render, texId, item, "center", link)
}

function loopend_fit(item, render) {
    // item 359
    return loopbegin_fit(item, render);
}

function loopend_makeBox(node, x, y, render) {
    // item 366
    return Utils.boxFromPoint(
    	x,
    	y,
    	node.w,
    	node.h
    );
}

function loopend_render(graph, item, render) {
    // item 1264
    var ADD = LoopAdd
    // item 1737
    render.setFont(item.content.font)
    // item 1870
    var w = item.w + ADD
    // item 938
    var texId = makeCustomTexture(
    	render,
    	item.x,
    	item.y,
    	w,
    	item.h
    );
    // item 1869
    render.drawShape(
    	texId,
    	"poly",
    	item.x,
    	item.y,
    	makeLoopEndPoints(w, item.h),
    	copyFormat(item, "loopbegin")
    );
    // item 928
    pushPrimitive(item, texId, 0, 0);
    // item 929
    renderTextTex(render, texId, item, "center");
}

function makeAddressPoints(w, h) {
    // item 1905
    var x = 0
    var y = 0
    var x0 = x - w;
    var x1 = x;
    var x2 = x + w;
    var top = y - h;
    var bottom = y + h;
    var middle = top + 2.0 / 3.0 * h;
    // item 1906
    return [
     x0, middle,
     x1, top,    
     x2, middle,
     x2, bottom,
     x0, bottom
    ]
}

function makeCasePoints(w, h) {
    // item 1836
    var x = 0
    var y = 0
    var x0 = x - w;
    var x1 = x;
    var x2 = x + w;
    var top = y - h;
    var bottom = y + h;
    var middle = bottom - 2.0 / 3.0 * h;
    // item 1837
    return [
    	x0, top,
    	x2, top,
    	x2, middle,
    	x1, bottom,
    	x0, middle
    ]
}

function makeCollectionPoints(x, y, w, h) {
    // item 3019
    //x += 0.5
    //y += 0.5
    // item 3017
    var x0 = x - w + 0.5
    var x1 = x0 + CollectionPadding - 0.5
    var x2 = x + w
    var x3 = x2 + CollectionPadding
    // item 3018
    var y0 = y - h
    var y1 = y0 + CollectionPadding
    var y2 = y + h
    var y3 = y2 + CollectionPadding
    // item 3016
    return [
      x0, y0,
      x2, y0,
      x2, y1,
      x3, y1,
      x3, y3,
      x1, y3,
      x1, y2,
      x0, y2
    ]
}

function makeComplexInput(item) {
    // item 2019
    var x1 = -item.w
    var x2 = -item.w + Config.INPUT_LEFT * 1.4
    var x3 = -item.w + Config.INPUT_LEFT * 2
    var x4 = item.w - Config.INPUT_LEFT
    var x5 = item.w
    // item 2020
    var y1 = getCompY1(item)
    var y2 = getCompY2(item)
    var y3 = getCompY3(item)
    var y4 = getCompY4(item)
    var y5 = getCompY5(item)
    // item 2063
    return [
    	x1, y1,
    	x4, y1,
    	x4, y3,
    	x5, y3,
    
    	x5, y5,
    	x3, y5,
    	x3, y4,
    
    	x1, y4,
    	x2, y2
    ]
}

function makeComplexLower(item) {
    // item 2032
    var x1 = getCompX1(item)
    var x3 = getCompX3(item)
    // item 2033
    var y3 = getCompY3(item)
    var y5 = getCompY5(item)
    // item 2034
    return [
    	x1, y5,
    	x1, y3,
    	x3, y3,
    	x3, y5
    ]
}

function makeComplexLower2(item) {
    // item 2993
    var x1 = getCompX1(item)
    var x3 = getCompX3(item)
    // item 2996
    var x1 = -item.w + Config.INPUT_LEFT * 2
    var x3 = item.w
    // item 2994
    var y3 = getCompY3(item)
    var y5 = getCompY5(item)
    // item 2995
    return [
    	x1, y5,
    	x1, y3,
    	x3, y3,
    	x3, y5
    ]
}

function makeComplexOutput(item) {
    // item 2058
    var x1 = getCompX1(item)
    var x2 = getCompX2(item)
    var x3 = getCompX3(item)
    var x4 = getCompX4(item)
    var x5 = getCompX5(item)
    // item 2059
    var y1 = getCompY1(item)
    var y2 = getCompY2(item)
    var y3 = getCompY3(item)
    var y4 = getCompY4(item)
    var y5 = getCompY5(item)
    // item 2062
    return [
    	x1, y5,
    	x1, y3,
    	x2, y3,
    	x2, y1,
    
    	x4, y1,
    	x5, y2,
    	x4, y4,
    
    	x3, y4,
    	x3, y5
    ]
}

function makeComplexProcess(item) {
    // item 2070
    var x1 = getCompX1(item)
    var x2 = getCompX2(item)
    var x3 = getCompX3(item)
    var x4 = getCompX4(item)
    var x5 = getCompX5(item)
    // item 2071
    var y1 = getCompY1(item)
    var y2 = getCompY2(item)
    var y3 = getCompY3(item)
    var y4 = getCompY4(item)
    var y5 = getCompY5(item)
    // item 2072
    return [
    	x1, y5,
    	x1, y3,
    	x2, y3,
    	x2, y1,
    
    	x5, y1,
    	x5, y4,
    
    	x3, y4,
    	x3, y5
    ]
}

function makeCustomTexture(render, x, y, w, h) {
    // item 936
    var texId = render.createTexture(
    	x,
    	y,
    	- w,
    	- h,
    	w * 2,
    	h * 2,
    	"icons"
    );
    // item 937
    return texId;
}

function makeInputPoints(x, y, w, h) {
    // item 3010
    x += 0.5
    y += 0.5
    // item 1930
    var x2 = x + w;
    var x0 = x - w;
    var x1 = x0 + Config.INPUT_LEFT * 1.4;
    // item 1931
    var y2 = y + h;
    var y0 = y - h;
    var y1 = y;
    // item 1928
    return [
      x0, y0,
      x2, y0,
      x2, y2,
      x0, y2,
      x1, y1
    ]
}

function makeLeftPtrPoints(x, y, w, h, depth) {
    // item 2538
    var x2 = x + w;
    var x0 = x - w;
    var x1 = x0 + depth;
    // item 2539
    var y2 = y + h;
    var y0 = y - h;
    var y1 = y;
    // item 2537
    return [
      x0, y1,
      x1, y0,
      x2, y0,
      x2, y2,
      x1, y2
    ]
}

function makeLoopBeginPoints(w, h) {
    // item 1858
    var x = 0
    var y = 0
    var notch = Q_PADDING;
    
    var x0 = x - w;
    var x1 = x0 + notch;
    var x3 = x + w;
    var x2 = x3 - notch;
    
    var top = y - h;
    var bottom = y + h;
    
    var middle = top + notch;
    // item 1859
    return [
     x0, bottom,
     x0, middle,
     x1, top,
     x2, top,
     x3, middle,
     x3, bottom
    ]
}

function makeLoopEndPoints(w, h) {
    // item 1865
    var x = 0
    var y = 0
    var notch = Q_PADDING;
    
    var x0 = x - w;
    var x1 = x0 + notch;
    var x3 = x + w;
    var x2 = x3 - notch;
    
    var top = y - h;
    var bottom = y + h;
    var middle = bottom - notch;
    // item 1866
    return [
     x0, top,
     x3, top,
     x3, middle,
     x2, bottom,
     x1, bottom,
     x0, middle
    ]
}

function makeOutputPoints(x, y, w, h, depth) {
    // item 3009
    x += 0.5
    y += 0.5
    // item 1943
    var x2 = x + w;
    var x0 = x - w;
    var x1 = x2 - depth;
    // item 1944
    var y2 = y + h;
    var y0 = y - h;
    var y1 = y;
    // item 1941
    return [
      x0, y0,
      x1, y0,
      x2, y1,
      x1, y2,
      x0, y2
    ]
}

function makePausePoints(w, h) {
    // item 1879
    var x = 0
    var y = 0
    // item 1877
    var x0 = x - w;
    var top = y - h;
    var width = w * 2;
    var height = h * 2;
    var bottom = top + height;
    
    var x3 = x0 + width;
    var x1 = x0 + Q_PADDING;
    var x2 = x3 - Q_PADDING;
    // item 1878
    return [
     x0, top,
     x3, top,
     x2, bottom,
     x1, bottom
    ]
}

function makeQuestionPoints(w, h) {
    // item 1876
    var x = 0
    var y = 0
    // item 1772
    var x0 = x - w;
    var x1 = x0 + Q_PADDING;
    var x3 = x + w;
    var x2 = x3 - Q_PADDING;
    var top = y - h;
    var bottom = y + h;
    // item 1775
    var result = [
    	x0, y,
    	x1, top,
    	x2, top,
    	x3, y,
    	x2, bottom,
    	x1, bottom
    ]
    // item 1776
    return result
}

function makeSelectPoints(w, h) {
    // item 1843
    var x = 0
    var y = 0
    var shift = Q_PADDING / 2
    var x0 = x - w;
    var x1 = x0 + shift;
    var x3 = x + w;
    var x2 = x3 - shift;
    var top = y - h;
    var bottom = y + h;
    // item 1844
    return [
    	x0, bottom,
    	x1, top,
    	x3, top,
    	x2, bottom
    ]
}

function makeStandardTexture(render, item) {
    // item 1388
    var layer
    // item 1385
    if (item.free) {
        // item 1389
        layer = "free"
    } else {
        // item 1390
        layer = "icons"
    }
    // item 1744
    if (item.content) {
        // item 1735
        render.setFont(item.content.font)
    }
    // item 896
    var texId = render.createTexture(
    	item.x,
    	item.y,
    	- item.w,
    	- item.h,
    	item.w * 2,
    	item.h * 2,
    	layer
    );
    // item 897
    return texId;
}

function more_fit(item, render) {
    // item 2689
    var subtype = item.content.subtype
    // item 2629
    var methods = getMore(subtype)
    var result
    // item 2630
    if (methods.fit) {
        // item 2635
        result = methods.fit(item, render)
    } else {
        // item 2633
        result = {
        	w: item.w,
        	h: item.h
        }
    }
    // item 2636
    return result
}

function more_makeBox(node, x, y, render) {
    // item 2655
    return Utils.boxFromPoint(
    	x,
    	y,
    	node.w,
    	node.h
    );
}

function more_render(graph, item, render) {
    // item 2690
    var subtype = item.content.subtype
    // item 2693
    var texId = makeStandardTexture(render, item);
    // item 2691
    render.drawShape(
    	texId,
    	"more",
    	item.x,
    	item.y,
    	[item.w, item.h, subtype],
    	copyFormat(item, null)
    );
    // item 2692
    pushPrimitive(item, texId, 0, 0);
}

function moveCanvasNode(render, id, node, x, y) {
    // item 810
    node.x = x;
    node.y = y;
    // item 8110001
    var _ind811 = 0;
    var _col811 = node.primitives;
    var _len811 = _col811.length;
    while (true) {
        // item 8110002
        if (_ind811 < _len811) {
            
        } else {
            break;
        }
        // item 8110004
        var prim = _col811[_ind811];
        // item 813
        var ix = x + prim.xOffset;
        var iy = y + prim.yOffset;
        
        render.moveItem(
        	prim.id,
        	ix,
        	iy
        );
        // item 8110003
        _ind811++;
    }
}

function moveHandle(item, handleType, dx, dy, x, y) {
    var _sw14910000_ = 0;
    // item 2472
    var callback = itemCallbacks[item.type]
    // item 2473
    if (callback.moveHandle) {
        // item 2476
        return callback.moveHandle(
        	item,
        	handleType,
        	dx,
        	dy
        )
    } else {
        // item 14910000
        _sw14910000_ = item.type;
        // item 14910001
        if (_sw14910000_ === "gdur") {
            // item 1500
            return gdur_moveHandle(
            	item,
            	handleType,
            	dx,
            	dy
            )
        } else {
            // item 14910002
            if (_sw14910000_ === "callout") {
                // item 3025
                return callout_moveHandle(
                	item,
                	dx,
                	dy,
                	x,
                	y
                )
            } else {
                // item 14910003
                if (_sw14910000_ === "f_line") {
                    // item 2250
                    return f_line_moveHandle(
                    	item,
                    	handleType,
                    	dx,
                    	dy
                    )
                } else {
                    // item 14910004
                    if (_sw14910000_ === "f_rounded") {
                        // item 2389
                        return f_rounded_moveHandle(
                        	item,
                        	dx
                        )
                    } else {
                        // item 2281
                        return {
                        	content: item.content
                        }
                    }
                }
            }
        }
    }
}

function newMore(content) {
    // item 2687
    var methods = getMore(content.subtype)
    // item 2688
    return methods.size(content)
}

function no() {
    // item 2957
    if (gUserSettings.no) {
        // item 2960
        return gUserSettings.no
    } else {
        // item 827
        return translate("DIA_NO")
    }
}

function noWidth(render) {
    // item 831
    return render.measureTextWidth(no());
}

function output_fit(item, render) {
    // item 2837
    var link = getLink(item)
    // item 1178
    var dx = Config.INPUT_LEFT;
    // item 1238
    var partWidth = item.w - dx;
    // item 1237
    var upSize = flowText(
    	render,
    	getText2(item),
    	item.content,
    	partWidth
    );
    // item 1239
    var downSize = flowText(
    	render,
    	getText(item),
    	item.content,
    	partWidth,
    	link
    )
    // item 1175
    var result = new FitResult();
    // item 1240
    result.w = item.w;
    result.h = upSize.h + downSize.h;
    result.a = upSize.h;
    result.tb2 = upSize.tb;
    result.tb = downSize.tb;
    // item 1179
    return result;
}

function output_makeBox(node, x, y, render) {
    // item 1167
    return Utils.boxFromPoint(
    	x,
    	y,
    	node.w,
    	node.h
    );
}

function output_render(graph, item, render) {
    // item 2064
    complex_render(
    	graph,
    	item,
    	render,
    	makeComplexOutput,
    	true
    )
}

function parallelDraw(ox, oy) {
    // item 495
    var leftSides = calcLeftSides(this, ox);
    var centers = calcCenters(this, leftSides);
    // item 494
    var r, c;
    // item 493
    var y = oy;
    // item 4980001
    r = 0;
    while (true) {
        // item 4980002
        if (r <= this.rowCount) {
            
        } else {
            break;
        }
        // item 500
        var jointRow = this.joints[r];
        // item 4960001
        c = 0;
        while (true) {
            // item 4960002
            if (c < this.columnCount) {
                
            } else {
                break;
            }
            // item 501
            var joint = jointRow[c];
            joint.x = centers[c];
            joint.y = y;
            gMan.addItem(joint);
            // item 4960003
            c++;
        }
        // item 503
        if (r < this.rowCount) {
            // item 502
            y += 3 * Config.METRE + this.heights[r];
        }
        // item 4980003
        r++;
    }
    // item 509
    y = oy + Config.METRE;
    // item 5120001
    r = 0;
    while (true) {
        // item 5120002
        if (r < this.rowCount) {
            
        } else {
            break;
        }
        // item 514
        var row = this.rows[r];
        // item 5100001
        c = 0;
        while (true) {
            // item 5100002
            if (c < this.columnCount) {
                
            } else {
                break;
            }
            // item 515
            var leftEdge = leftSides[c];
            var cell = row[c];
            cell.draw(leftEdge, y);
            // item 5100003
            c++;
        }
        // item 516
        y += this.heights[r] + Config.METRE * 3;
        // item 5120003
        r++;
    }
    // item 523
    drawMilestone(
    	this.joints[0],
    	"parallel"
    );
    // item 5240001
    r = 0;
    while (true) {
        // item 5240002
        if (r < this.rowCount) {
            
        } else {
            break;
        }
        // item 526
        var jointRow = this.joints[r + 1];
        // item 527
        drawMilestone(
        	jointRow,
        	null
        );
        // item 5240003
        r++;
    }
    // item 5310001
    r = 0;
    while (true) {
        // item 5310002
        if (r < this.rowCount) {
            
        } else {
            break;
        }
        // item 533
        var row2 = this.rows[r];
        // item 534
        var jointsAbove = this.joints[r];
        var jointsBelow = this.joints[r + 1];
        // item 5290001
        c = 0;
        while (true) {
            // item 5290002
            if (c < this.columnCount) {
                
            } else {
                break;
            }
            // item 535
            var cell2 = row2[c];
            // item 528
            connectVertical(
            	jointsAbove[c],
            	jointsBelow[c],
            	cell2,
            	"rend"
            );
            // item 5290003
            c++;
        }
        // item 5310003
        r++;
    }
}

function pause_fit(item, render) {
    // item 422
    return select_fit(item, render);
}

function pause_makeBox(node, x, y, render) {
    // item 428
    return Utils.boxFromPoint(
    	x,
    	y,
    	node.w,
    	node.h
    );
}

function pause_render(graph, item, render) {
    // item 942
    var texId = makeStandardTexture(render, item);
    // item 1880
    var points = makePausePoints(item.w, item.h)
    // item 1881
    render.drawShape(
    	texId,
    	"poly",
    	item.x,
    	item.y,
    	points,
    	copyFormat(item, "loopbegin")
    );
    // item 940
    pushPrimitive(item, texId, 0, 0);
    // item 941
    renderTextTex(render, texId, item, "center");
}

function process_fit(item, render) {
    // item 2834
    var link = getLink(item)
    // item 1374
    var dx = Config.INPUT_LEFT
    // item 1377
    var partWidth = item.w - dx;
    // item 1376
    var upSize = flowText(
    	render,
    	getText2(item),
    	item.content, 
    	partWidth
    );
    // item 1378
    var downSize = flowText(
    	render,
    	getText(item),
    	item.content,
    	partWidth,
    	link
    )
    // item 1373
    var result = new FitResult();
    // item 1379
    result.w = item.w;
    result.h = upSize.h + downSize.h;
    result.a = upSize.h;
    result.tb2 = upSize.tb;
    result.tb = downSize.tb;
    // item 1375
    return result;
}

function process_makeBox(node, x, y, render) {
    // item 1367
    return Utils.boxFromPoint(
    	x,
    	y,
    	node.w,
    	node.h
    );
}

function process_render(graph, item, render) {
    // item 2073
    complex_render(
    	graph,
    	item,
    	render,
    	makeComplexProcess,
    	false
    )
}

function pushCorner(render, item, x, y, direction) {
    // item 1562
    var primId = render.createRCorner(
    	item.x + x,
    	item.y + y,
    	getDiaLineFormat(),
    	direction,
    	gDurRadius,
    	"free"
    );
    // item 1563
    pushPrimitive(item, primId, x, y)
}

function pushFreeHorizontal(render, item, x, y, w) {
    // item 1484
    var primId = render.createFreeHorizontal(
    	item.x + x,
    	item.y + y,
    	w,
    	"dashed",
    	getDiaLineFormat(),
    	"free"
    );
    // item 1485
    pushPrimitive(item, primId, x, y);
}

function pushFreeVertical(render, item, x, y, h) {
    // item 1471
    var primId = render.createVertical(
    	item.x + x,
    	item.y + y,
    	h,
    	null,
    	getDiaLineFormat(),
    	"free"
    );
    // item 1472
    pushPrimitive(item, primId, x, y)
}

function pushPrimitive(item, primId, x, y) {
    // item 600
    var prim = new Primitive(
    	primId,
    	x,
    	y
    );
    item.primitives.push(prim);
}

function question_fit(item, render) {
    // item 2822
    var link = getLink(item)
    // item 272
    return loopbegin_fit(item, render, link)
}

function question_makeBox(node, x, y, render) {
    // item 228
    var box = itemCallbacks.action.makeBox(
    	node,
    	x,
    	y
    );
    // item 231
    box.right += Config.SNAP * 2;
    //box.bottom += Config.SNAP;
    // item 232
    return box;
}

function question_render(graph, item, render) {
    // item 1266
    var ADD = 5;
    // item 1267
    var diaWidth = item.w + ADD;
    // item 1739
    render.setFont(item.content.font)
    // item 247
    var wy = yesWidth(render) * 1.2;
    var wn = noWidth(render);
    var fontHeight = render.getFontHeight();
    // item 910
    var texId = render.createTexture(
    	item.x,
    	item.y,
    	- diaWidth,
    	- item.h,
    	diaWidth * 2 + Math.floor(1.5 * Math.max(wy, wn)),
    	item.h * 2 + fontHeight * 2,
    	"icons"
    );
    // item 260
    pushPrimitive(item, texId, 0, 0);
    // item 1778
    var shape = makeQuestionPoints(
    	item.w + ADD,
    	item.h
    )
    // item 1777
    render.drawShape(
    	texId,
    	"poly",
    	item.x,
    	item.y,
    	shape,
    	copyFormat(item, null)
    );
    // item 2824
    var link = getLink(item)
    // item 2823
    drawLink(
    	render,
    	texId,
    	item.x,
    	item.y,
    	item.w,
    	link
    )
    // item 912
    renderTextTex(render, texId, item, "center", link)
    // item 251
    var leftWidth;
    var rightWidth;
    var leftText;
    var rightText;
    // item 248
    if (item.flag1) {
        // item 253
        leftWidth = wy;
        rightWidth = wn;
        leftText = yes();
        rightText = no();
    } else {
        // item 252
        leftWidth = wn;
        rightWidth = wy;
        leftText = no();
        rightText = yes();
    }
    // item 254
    var leftX = -leftWidth - Math.floor(fontHeight / 4);
    var leftY = item.h + Math.floor(fontHeight * 1.2);
    var rightX = item.w + Math.floor(fontHeight * 0.6);
    var rightY = -Math.floor(fontHeight * 0.3);
    // item 854
    var labelColor = getDiaLine()
    // item 1029
    render.drawText(
    	texId,
    	leftText,
    	leftX + item.x,
    	leftY + item.y,
    	labelColor
    );
    // item 1030
    render.drawText(
    	texId,
    	rightText,
    	rightX + item.x,
    	rightY + item.y,
    	labelColor
    );
}

function renderBlockCenter(render, texId, block, cx, cy, color) {
    // item 1059
    var y = Math.ceil(cy - block.height / 2);
    // item 10600001
    var _ind1060 = 0;
    var _col1060 = block.lines;
    var _len1060 = _col1060.length;
    while (true) {
        // item 10600002
        if (_ind1060 < _len1060) {
            
        } else {
            break;
        }
        // item 10600004
        var line = _col1060[_ind1060];
        // item 1063
        var left = Math.round(cx - line.width / 2);
        // item 1062
        renderLine(render, texId, left, y, line, color);
        // item 10600003
        _ind1060++;
    }
}

function renderBlockLeft(render, texId, block, left, cy, color) {
    // item 1145
    if (block) {
        // item 1050
        var y = Math.ceil(cy - block.height / 2);
        // item 10510001
        var _ind1051 = 0;
        var _col1051 = block.lines;
        var _len1051 = _col1051.length;
        while (true) {
            // item 10510002
            if (_ind1051 < _len1051) {
                
            } else {
                break;
            }
            // item 10510004
            var line = _col1051[_ind1051];
            // item 1053
            renderLine(render, texId, left, y, line, color);
            // item 10510003
            _ind1051++;
        }
    }
}

function renderBlockRight(render, texId, block, right, cy, color) {
    // item 1719
    if (block) {
        // item 1715
        var y = Math.ceil(cy - block.height / 2);
        // item 17160001
        var _ind1716 = 0;
        var _col1716 = block.lines;
        var _len1716 = _col1716.length;
        while (true) {
            // item 17160002
            if (_ind1716 < _len1716) {
                
            } else {
                break;
            }
            // item 17160004
            var line = _col1716[_ind1716];
            // item 1722
            var left = Math.round(right - line.width)
            // item 1718
            renderLine(render, texId, left, y, line, color);
            // item 17160003
            _ind1716++;
        }
    }
}

function renderItem(graph, render, item, selection) {
    // item 709
    var callback = getItemCallback(item.type);
    // item 708
    eraseFromRender(render, item);
    // item 707
    item.primitives = [];
    // item 706
    callback.render(graph, item, render);
    // item 713
    drawCandy(graph, item, render, selection);
}

function renderLine(render, texId, left, top, line, color) {
    // item 1040
    var y = top + line.bottom;
    // item 10370001
    var _ind1037 = 0;
    var _col1037 = line.tokens;
    var _len1037 = _col1037.length;
    while (true) {
        // item 10370002
        if (_ind1037 < _len1037) {
            
        } else {
            break;
        }
        // item 10370004
        var token = _col1037[_ind1037];
        // item 1039
        var x = left + token.left;
        // item 1042
        if (token.type == "ws") {
            
        } else {
            // item 1041
            render.drawText(texId, token.text, x, y, color);
        }
        // item 10370003
        _ind1037++;
    }
}

function renderTextTex(render, texId, item, align, link) {
    // item 1821
    renderTextTexCore(
    	render,
    	texId,
    	item,
    	align,
    	item.x,
    	item.y,
    	item.w,
    	item.tb,
    	link
    )
}

function renderTextTexCore(render, texId, item, align, x, y, w, tb, link) {
    // item 2773
    if (link) {
        // item 2776
        x += Config.LINK_PADDING
        w -= Config.LINK_PADDING
    }
    // item 1813
    var color = getTextColor(item)
    var align = getAlign(item, align)
    // item 18070001
    if (align === "left") {
        // item 1814
        var left = x - w
         + getPadding(item.content);
        // item 1812
        renderBlockLeft(
        	render,
        	texId,
        	tb,
        	left,
        	y,
        	color
        );
    } else {
        // item 18070002
        if (align === "center") {
            // item 1816
            renderBlockCenter(
            	render,
            	texId,
            	tb,
            	x,
            	y,
            	color
            );
        } else {
            // item 18070003
            if (align === "right") {
                
            } else {
                // item 18070004
                throw "Unexpected switch value: " + align;
            }
            // item 1820
            var right = x + w
             - getPadding(item.content);
            // item 1819
            renderBlockRight(
            	render,
            	texId,
            	tb,
            	right,
            	y,
            	color
            );
        }
    }
}

function resizeItem(item, content, width, height) {
    var _sw24010000_ = 0;
    // item 2486
    var callback = itemCallbacks[item.type]
    // item 2487
    if (callback.resize) {
        // item 2490
        callback.resize(
        	item,
        	width,
        	height,
        	content
        )
    } else {
        // item 24010000
        _sw24010000_ = item.type;
        // item 24010001
        if (_sw24010000_ === "gdur") {
            // item 2413
            content.h0y = Math.max(
            	content.h0y,
            	height + Config.METRE
            )
            // item 2414
            content.h1y = Math.max(
            	content.h1y,
            	height + Config.METRE
            )
        } else {
            // item 24010002
            if (_sw24010000_ === "callout") {
                // item 2425
                var box = Utils.boxFromPoint(
                	0,
                	0,
                	width + Config.METRE,
                	height + Config.METRE
                )
                // item 2426
                if (Utils.hitBox(box, content.h0x, content.h0y)) {
                    // item 2417
                    if (content.h0x < 0) {
                        // item 2420
                        content.h0x = Math.min(
                        	content.h0x,
                        	-width - Config.METRE
                        )
                    } else {
                        // item 2415
                        content.h0x = Math.max(
                        	content.h0x,
                        	width + Config.METRE
                        )
                    }
                    // item 2421
                    if (content.h0y < 0) {
                        // item 2424
                        content.h0y = Math.min(
                        	content.h0y,
                        	-height - Config.METRE
                        )
                    } else {
                        // item 2416
                        content.h0y = Math.max(
                        	content.h0y,
                        	height + Config.METRE
                        )
                    }
                }
            } else {
                // item 24010003
                if (_sw24010000_ === "f_rounded") {
                    // item 2411
                    var radius = content.radius
                    radius = Math.min(width, radius)
                    radius = Math.min(height, radius)
                    // item 2412
                    content.radius = radius
                }
            }
        }
    }
}

function select_fit(item, render) {
    // item 2828
    var link = getLink(item)
    // item 1235
    var result = flowText(
      render,
      getText(item),
      item.content,
      item.w - 10,
      link
    )
    // item 2827
    result.w = item.w
    // item 1236
    return result
}

function select_makeBox(node, x, y, render) {
    // item 298
    return Utils.boxFromPoint(
    	x,
    	y,
    	node.w,
    	node.h
    );
}

function select_render(graph, item, render) {
    // item 905
    var texId = makeStandardTexture(render, item);
    // item 1845
    render.drawShape(
    	texId,
    	"poly",
    	item.x,
    	item.y,
    	makeSelectPoints(item.w, item.h),
    	copyFormat(item, null)
    );
    // item 2826
    var link = getLink(item)
    // item 2825
    drawLink(
    	render,
    	texId,
    	item.x,
    	item.y,
    	item.w,
    	link
    )
    // item 903
    pushPrimitive(item, texId, 0, 0);
    // item 904
    renderTextTex(render, texId, item, "center", link)
}

function setDiaLine(color, thickness) {
    // item 2088
    gDiaLine = color
    // item 3039
    if (thickness) {
        // item 2322
        gDiaLineThickness = thickness
    } else {
        // item 3042
        var tthick = Theme.getThickness()
        // item 3043
        if (tthick) {
            // item 3045
            gDiaLineThickness = tthick
        } else {
            // item 3047
            gDiaLineThickness = 1
        }
    }
}

function setUserSettings(settings) {
    // item 2952
    gUserSettings = Utils.copyObject(settings)
}

function shelf_fit(item, render) {
    // item 2840
    var link = getLink(item)
    // item 1243
    var upSize = flowText(
    	render,
    	getText2(item),
    	item.content,
    	item.w
    );
    // item 1244
    var downSize = flowText(
    	render,
    	getText(item),
    	item.content, 
    	item.w,
    	link
    );
    // item 1241
    var result = new FitResult();
    // item 1245
    result.w = item.w;
    result.h = upSize.h + downSize.h;
    result.a = upSize.h;
    result.tb2 = upSize.tb;
    result.tb = downSize.tb;
    // item 1242
    return result;
}

function shelf_makeBox(node, x, y, render) {
    // item 1116
    return Utils.boxFromPoint(
    	x,
    	y,
    	node.w,
    	node.h
    );
}

function shelf_render(graph, item, render) {
    // item 1827
    var format = copyFormat(item, "action")
    var format2 = Utils.copyObject(format)
    // item 1110
    var texId = makeStandardTexture(render, item);
    // item 1107
    pushPrimitive(item, texId, 0, 0);
    // item 1801
    render.drawShape(
    	texId,
    	"rectangle",
    	item.x,
    	item.y,
    	[item.w, item.h],
    	format
    );
    // item 1800
    var middle = item.y - item.h + item.a * 2;
    var right = item.x + item.w;
    var left = item.x - item.w;
    // item 1124
    var upper = item.y - item.h + item.a;
    // item 3050
    format2.fillColor = format2.secondaryColor
    // item 3051
    render.drawShape(
    	texId,
    	"rectangle",
    	item.x,
    	upper,
    	[item.w, item.a],
    	format2
    );
    // item 1824
    renderTextTexCore(
    	render,
    	texId,
    	item,
    	"left",
    	item.x,
    	upper,
    	item.w,
    	item.tb2
    )
    // item 2838
    var link = getLink(item)
    // item 2894
    var tpos = getMainTextPos(item)
    // item 2893
    drawLink(
    	render,
    	texId,
    	tpos.x,
    	tpos.y,
    	tpos.w,
    	link
    )
    // item 1825
    renderTextTexCore(
    	render,
    	texId,
    	item,
    	"left",
    	tpos.x,
    	tpos.y,
    	tpos.w,
    	item.tb,
    	link
    )
}

function sinput_render(graph, item, render) {
    // item 1927
    var texId = makeStandardTexture(render, item);
    // item 1926
    render.drawShape(
    	texId,
    	"poly",
    	item.x,
    	item.y,
    	makeInputPoints(0, 0, item.w, item.h),
    	copyFormat(item, "action")
    );
    // item 2831
    var link = getLink(item)
    // item 2830
    drawLink(
    	render,
    	texId,
    	item.x + Config.INPUT_LEFT,
    	item.y,
    	item.w,
    	link
    )
    // item 1347
    pushPrimitive(item, texId, 0, 0);
    // item 2997
    renderTextTexCore(
    	render,
    	texId,
    	item,
    	"left",
    	item.x + Config.INPUT_LEFT,
    	item.y,
    	item.w,
    	item.tb,
    	link
    )
}

function snapSize(textHeight, padding) {
    // item 1299
    var heightRaw = (textHeight / 2 + padding);
    var height = Math.round(heightRaw / Config.SIZE_SNAP) *
      Config.SIZE_SNAP;
    // item 1300
    return height;
}

function soutput_fit(item, render) {
    // item 2829
    var link = getLink(item)
    // item 1334
    var padding = Config.INPUT_LEFT;
    // item 1331
    var partWidth = item.w - padding;
    // item 1330
    var result = flowText(
    	render,
    	getText(item),
    	item.content,
    	partWidth,
    	link
    )
    // item 1340
    result.w = item.w;
    // item 1339
    return result;
}

function soutput_makeBox(node, x, y, render) {
    // item 1321
    return Utils.boxFromPoint(
    	x,
    	y,
    	node.w,
    	node.h
    );
}

function soutput_render(graph, item, render) {
    // item 1935
    var texId = makeStandardTexture(render, item);
    // item 1934
    render.drawShape(
    	texId,
    	"poly",
    	item.x,
    	item.y,
    	makeOutputPoints(0, 0, item.w, item.h, Config.INPUT_LEFT * 1.4),
    	copyFormat(item, "action")
    );
    // item 2833
    var link = getLink(item)
    // item 2832
    drawLink(
    	render,
    	texId,
    	item.x,
    	item.y,
    	item.w,
    	link
    )
    // item 1932
    pushPrimitive(item, texId, 0, 0);
    // item 1933
    renderTextTex(render, texId, item, "left", link)
}

function standardCandy(item, render, color) {
    // item 1394
    var layer
    // item 1391
    if (item.free) {
        // item 1395
        layer = "free_candies"
    } else {
        // item 1396
        layer = "icon_candies"
    }
    // item 2156
    var candies = getCandies(item)
    // item 21640001
    var _ind2164 = 0;
    var _col2164 = candies;
    var _len2164 = _col2164.length;
    while (true) {
        // item 21640002
        if (_ind2164 < _len2164) {
            
        } else {
            break;
        }
        // item 21640004
        var candy = _col2164[_ind2164];
        // item 2233
        var candyId = render.createJCandy(
        	candy.x,
        	candy.y,
        	color,
        	layer
        );
        // item 2166
        pushPrimitive(
        	item,
        	candyId,
        	candy.x - item.x,
        	candy.y - item.y
        );
        // item 21640003
        _ind2164++;
    }
}

function timer_fit(item, render) {
    // item 1101
    return select_fit(item, render);
}

function timer_makeBox(node, x, y, render) {
    // item 1088
    return Utils.boxFromPoint(
    	x,
    	y,
    	node.w,
    	node.h
    );
}

function timer_render(graph, item, render) {
    // item 1884
    var THICK = 8;
    // item 1097
    var texId = makeStandardTexture(render, item);
    // item 1882
    var points = makePausePoints(item.w, item.h)
    var points2 = makePausePoints(item.w - THICK, item.h)
    var fakeItem = Utils.copyObject(item)
    fakeItem.type = "insertion"
    var format = copyFormat(fakeItem, null)
    // item 3048
    var qformat = Utils.copyObject(format)
    qformat.fillColor = format.secondaryColor
    // item 1883
    render.drawShape(
    	texId,
    	"poly",
    	item.x,
    	item.y,
    	points,
    	qformat
    );
    // item 3049
    render.drawShape(
    	texId,
    	"poly",
    	item.x,
    	item.y,
    	points2,
    	format
    );
    // item 1885
    var left0 = item.x - item.w + THICK
    var left1 = left0 + Q_PADDING
    var right0 = item.x + item.w - THICK
    var right1 = right0 - Q_PADDING
    var top = item.y - item.h
    var bottom = item.y + item.h
    // item 1886
    render.drawShape(
    	texId,
    	"line",
    	left0,
    	top,
    	[left1, bottom],
    	qformat
    );
    // item 1887
    render.drawShape(
    	texId,
    	"line",
    	right0,
    	top,
    	[right1, bottom],
    	qformat
    );
    // item 1095
    pushPrimitive(item, texId, 0, 0);
    // item 1096
    renderTextTex(render, texId, item, "center");
}

function verticalCandy(head, tail, item, render, valence) {
    // item 1383
    var x = head.x
    var y = head.y
    var h = tail.y - head.y
    // item 657
    var top = y + head.h;
    var bottom = tail.y - tail.h;
    // item 658
    var primId = render.createVCandy(
    	x,
    	y,
    	h,
    	valence,
    	top, bottom,
    	"line_candies"
    );
    // item 660
    pushPrimitive(item, primId, 0, 0);
}

function vertical_fit(item, render) {
    
}

function vertical_render(graph, item, render) {
    // item 214
    var head = graph.getHead(item);
    var tail = graph.getTail(item);
    var h = tail.y - head.y;
    // item 215
    var primId = render.createVertical(
    	head.x,
    	head.y,
    	h,
    	item.role,
    	getDiaLineFormat(item),
    	"lines"
    );
    // item 217
    pushPrimitive(item, primId, 0, 0);
}

function vscroll_size() {
    // item 2671
    return {
    	w: 10,
    	h: 80
    }
}

function yes() {
    // item 2953
    if (gUserSettings.yes) {
        // item 2956
        return gUserSettings.yes
    } else {
        // item 823
        return translate("DIA_YES")
    }
}

function yesWidth(render) {
    // item 817
    return render.measureTextWidth(yes());
}


	initMore()
}
