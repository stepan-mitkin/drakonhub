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

// Autogenerated with DRAKON Editor 1.33


function FitResult() {
    this.tb = null;
    this.tb2 = null;
    this.w = null;
    this.h = null;
    this.a = null;
}

function Primitive(id, xOffset, yOffset) {
    this.id = id;
    this.xOffset = xOffset;
    this.yOffset = yOffset;
}

function action_fit(item, render) {
    var link = getLink(item)
    return flowText(render, getText(item), item.content, item.w, link)
}

function action_makeBox(node, x, y, render) {
    return Utils.boxFromPoint(
    	x,
    	y,
    	node.w,
    	node.h
    );
}

function action_render(graph, item, render) {
    var texId = makeStandardTexture(render, item);
    render.drawShape(
    	texId,
    	"rectangle",
    	item.x,
    	item.y,
    	[item.w, item.h],
    	copyFormat(item, null)
    );
    var link = getLink(item)
    drawLink(
    	render,
    	texId,
    	item.x,
    	item.y,
    	item.w,
    	link
    )
    pushPrimitive(item, texId, 0, 0);
    renderTextTex(render, texId, item, "left", link)
}

function addDefaultHandles(handles, item) {
    var dims = {
    	x: item.x,
    	y: item.y,
    	w: item.w,
    	h: item.h
    };
    var id = item.id
    var left = item.x - item.w;
    var right = item.x + item.w;
    var top = item.y - item.h;
    var bottom = item.y + item.h;
    addGrip(
    	grips,
    	id,
    	left,
    	top,
    	Const.FR_LU,
    	dims
    );
    addGrip(
    	grips,
    	id,
    	item.x,
    	top,
    	Const.FR_UP,
    	dims
    );
    addGrip(
    	grips,
    	id,
    	right,
    	top,
    	Const.FR_RU,
    	dims
    );
    addGrip(
    	grips,
    	id,
    	right,
    	item.y,
    	Const.FR_RI,
    	dims
    );
    addGrip(
    	grips,
    	id,
    	right,
    	bottom,
    	Const.FR_RD,
    	dims
    );
    addGrip(
    	grips,
    	id,
    	item.x,
    	bottom,
    	Const.FR_DO,
    	dims
    );
    addGrip(
    	grips,
    	id,
    	left,
    	bottom,
    	Const.FR_LD,
    	dims
    );
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
    var handle = {
    	x: x,
    	y: y,
    	name: name
    }
    result.push(handle)
}

function addMore(name, render, size) {
    moreCallbacks[name] = {
    	render: render,
    	size: size
    }
}

function addMoreSize(name, w, h) {
    var size = function(content) {
    	return new Utils.Size(w, h)
    }
    moreCallbacks[name] = {
    	size: size
    }
}

function address_fit(item, render) {
    return case_fit(item, render);
}

function address_makeBox(node, x, y, render) {
    return Utils.boxFromPoint(
    	x,
    	y,
    	node.w,
    	node.h
    );
}

function address_render(graph, item, render) {
    var format = copyFormat(item, null)
    var texId = makeStandardTexture(render, item);
    render.drawShape(
    	texId,
    	"poly",
    	item.x,
    	item.y,
    	makeAddressPoints(item.w, item.h),
    	format
    );
    if (item.flag1) {
        var x = 0
        var y = 0
        var w = item.w
        var h = item.h
        var top = y - h
        var middle = top + 2.0 / 3.0 * h
        
        var tx0 = x - w / 2;
        var tx1 = x + w / 2;
        var ty = (top + middle) / 2;
        var markFormat = {
        	fillColor: format.lineColor
        }
        var points = [
         tx0, ty,
         x, top,    
         tx1, ty
        ]
        render.drawShape(
        	texId,
        	"poly",
        	item.x,
        	item.y,
        	points,
        	markFormat
        );
    }
    pushPrimitive(item, texId, 0, 0);
    var y = Math.floor(item.h / 3);
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
    return action_fit(item, render);
}

function beginend_makeBox(node, x, y, render) {
    return itemCallbacks.action.makeBox(
    	node,
    	x,
    	y
    );
}

function beginend_render(graph, item, render) {
    var texId = makeStandardTexture(render, item);
    render.drawShape(
    	texId,
    	"beginend",
    	item.x,
    	item.y,
    	[item.w,	item.h],
    	copyFormat(item, null)
    );
    var link = getLink(item)
    drawLink(
    	render,
    	texId,
    	item.x,
    	item.y,
    	item.w,
    	link
    )
    pushPrimitive(item, texId, 0, 0);
    renderTextTex(render, texId, item, "center", link)
}

function branch_fit(item, render) {
    return case_fit(item, render);
}

function branch_makeBox(node, x, y, render) {
    return Utils.boxFromPoint(
    	x,
    	y,
    	node.w,
    	node.h
    );
}

function branch_render(graph, item, render) {
    var format = copyFormat(item, null)
    var texId = makeStandardTexture(render, item);
    render.drawShape(
    	texId,
    	"poly",
    	item.x,
    	item.y,
    	makeCasePoints(item.w, item.h),
    	format
    );
    if (item.flag1) {
        var x = 0
        var y = 0
        var w = item.w
        var h = item.h
        var bottom = y + h
        var middle = bottom - 2.0 / 3.0 * h;
        
        var tx0 = x - w / 2;
        var tx1 = x + w / 2;
        var ty = (bottom + middle) / 2;
        var markFormat = {
        	fillColor: format.lineColor
        }
        var points = [
         tx0, ty,
         x, bottom,
         tx1, ty
        ]
        render.drawShape(
        	texId,
        	"poly",
        	item.x,
        	item.y,
        	points,
        	markFormat
        );
    }
    pushPrimitive(item, texId, 0, 0);
    var tpos = getMainTextPos(item)
    var link = getLink(item)
    drawLink(
    	render,
    	texId,
    	tpos.x,
    	tpos.y,
    	tpos.w,
    	link
    )
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
    var left = item.x - item.w;
    var right = item.x + item.w;
    var top = item.y - item.h;
    var bottom = item.y + item.h;
    addHandle(
    	left,
    	top,
    	Const.DRN_SIZE_L,
    	candies
    );
    addHandle(
    	left,
    	item.y,
    	Const.DRN_SIZE_L,
    	candies
    );
    addHandle(
    	left,
    	bottom,
    	Const.DRN_SIZE_L,
    	candies
    );
    addHandle(
    	right,
    	top,
    	Const.DRN_SIZE_R,
    	candies
    );
    addHandle(
    	right,
    	item.y,
    	Const.DRN_SIZE_R,
    	candies
    );
    addHandle(
    	right,
    	bottom,
    	Const.DRN_SIZE_R,
    	candies
    );
}

function buildFreeCandies(item, candies) {
    var left = item.x - item.w;
    var right = item.x + item.w;
    var top = item.y - item.h;
    var bottom = item.y + item.h;
    addHandle(
    	left,
    	top,
    	Const.FR_LU,
    	candies
    );
    addHandle(
    	item.x,
    	top,
    	Const.FR_UP,
    	candies
    );
    addHandle(
    	right,
    	top,
    	Const.FR_RU,
    	candies
    );
    addHandle(
    	right,
    	item.y,
    	Const.FR_RI,
    	candies
    );
    addHandle(
    	right,
    	bottom,
    	Const.FR_RD,
    	candies
    );
    addHandle(
    	item.x,
    	bottom,
    	Const.FR_DO,
    	candies
    );
    addHandle(
    	left,
    	bottom,
    	Const.FR_LD,
    	candies
    );
    addHandle(
    	left,
    	item.y,
    	Const.FR_LE,
    	candies
    );
}

function calculateIconHeight(padding, textSize) {
    return calculateIconSize(padding, textSize);
}

function calculateIconSize(padding, textSize) {
    var requested = textSize + padding * 2;
    var halfSize = requested / 2;
    var snaps = Math.ceil(halfSize / Config.SIZE_SNAP);
    return snaps * Config.SIZE_SNAP;
}

function callout_moveHandle(item, dx, dy, x, y) {
    var content = item.content
    var result
    var newX = x - item.x
    var newY = y - item.y
    var box = Utils.boxFromPoint(
    	0,
    	0,
    	item.w,
    	item.h
    )
    if (Utils.hitBox(box, newX, newY)) {
        result = content
    } else {
        result = Utils.copyObject(content)
        result.h0x = newX
        result.h0y = newY
    }
    return {
    	content: result
    }
}

function callout_render(graph, item, render) {
    var RADIUS = 5
    var BORDER = 0
    var content = item.content
    var texId = makeStandardTexture(render, item);
    var format = copyFormat(item, null)
    render.drawShape(
    	texId,
    	"rounded",
    	item.x,
    	item.y,
    	[item.w, item.h, RADIUS, BORDER],
    	format
    );
    pushPrimitive(item, texId, 0, 0);
    var link = getLink(item)
    drawLink(
    	render,
    	texId,
    	item.x,
    	item.y,
    	item.w,
    	link
    )
    renderTextTex(render, texId, item, "left", link)
    var arrowId = render.createCalloutArrow(
    	item.x, item.y, item.w, item.h,
    	content.h0x,
    	content.h0y,
    	format,
    	"free"
    )
    pushPrimitive(item, arrowId, 0, 0);
}

function case_fit(item, render) {
    var result = action_fit(item, render)
    result.h = result.h * 3.0 / 2.0
    return result
}

function case_makeBox(node, x, y, render) {
    return Utils.boxFromPoint(
    	x,
    	y,
    	node.w,
    	node.h
    );
}

function case_render(graph, item, render) {
    var format = copyFormat(item, "select")
    var texId = makeStandardTexture(render, item);
    render.drawShape(
    	texId,
    	"poly",
    	item.x,
    	item.y,
    	makeCasePoints(item.w, item.h),
    	format
    );
    var bottom = item.y + item.h
    var middle = bottom - 2.0 / 3.0 * item.h
    var left = item.x - item.w
    var right = item.x + item.w
    render.drawShape(
    	texId,
    	"line",
    	left,
    	middle,
    	[right, middle],
    	format
    );
    pushPrimitive(item, texId, 0, 0);
    var tpos = getMainTextPos(item)
    var link = getLink(item)
    drawLink(
    	render,
    	texId,
    	tpos.x,
    	tpos.y,
    	tpos.w,
    	link
    )
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
    var item2 = {
    	x: item.x,
    	y: item.y,
    	w: item.w + CollectionPadding,
    	h: item.h + CollectionPadding,
    	content: item.content
    }
    var texId = makeStandardTexture(render, item2);
    var format = copyFormat(item, "action")
    render.drawShape(
    	texId,
    	"poly",
    	item.x,
    	item.y,
    	makeCollectionPoints(0, 0, item.w, item.h),
    	format
    );
    var top = item.y - item.h
    var bottom = item.y + item.h
    var left = item.x - item.w + 0.5
    var right = item.x + item.w
    render.drawShape(
    	texId,
    	"line",
    	left,
    	bottom,
    	[right, bottom],
    	format
    );
    render.drawShape(
    	texId,
    	"line",
    	right,
    	top,
    	[right, bottom],
    	format
    );
    var link = getLink(item)
    drawLink(
    	render,
    	texId,
    	item.x,
    	item.y,
    	item.w,
    	link
    )
    pushPrimitive(item, texId, 0, 0);
    renderTextTex(render, texId, item, "left", link)
}

function comment_fit(item, render) {
    var link = getLink(item)
    var result = flowText(
      render, getText(item),
      item.content, item.w - 5,
      link
    )
    result.h += 5
    result.w = item.w
    return result
}

function comment_makeBox(node, x, y, render) {
    return Utils.boxFromPoint(
    	x,
    	y,
    	node.w,
    	node.h
    );
}

function comment_render(graph, item, render) {
    var RADIUS = 10;
    var BORDER = 5;
    var texId = makeStandardTexture(render, item);
    var backFormat = copyFormat(item, null)
    backFormat.fillColor = backFormat.secondaryColor
    render.drawShape(
    	texId,
    	"rectangle",
    	item.x,
    	item.y,
    	[item.w, item.h],
    	backFormat
    );
    render.drawShape(
    	texId,
    	"rounded",
    	item.x,
    	item.y,
    	[item.w, item.h, RADIUS, BORDER],
    	copyFormat(item, null)
    );
    pushPrimitive(item, texId, 0, 0);
    var color = getTextColor(item)
    var left = item.x - item.w + getPadding(item.content);
    var link = getLink(item)
    drawLink(
    	render,
    	texId,
    	item.x,
    	item.y,
    	item.w,
    	link
    )
    renderTextTex(render, texId, item, "left", link)
}

function complex_render(graph, item, render, makePoints, narrowUp) {
    var format = copyFormat(item, null)
    var texId = makeStandardTexture(render, item);
    pushPrimitive(item, texId, 0, 0);
    render.drawShape(
    	texId,
    	"poly",
    	item.x,
    	item.y,
    	makePoints(item),
    	format
    );
    var borderFormat = {
    	lineThickness: format.lineThickness,
    	lineColor: format.lineColor
    }
    render.drawShape(
    	texId,
    	"poly",
    	item.x,
    	item.y,
    	makeComplexLower(item),
    	borderFormat
    );
    var left = item.x - item.w
     + getPadding(item.content);
    var upper = item.y - item.h + item.a;
    var upperX = item.x
    var upperW = item.w - Config.INPUT_LEFT
    if (narrowUp) {
        
    } else {
        upperX = item.x + Config.INPUT_LEFT / 2
        upperW = item.w - Config.INPUT_LEFT / 2
    }
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
    var tpos = getMainTextPos(item)
    var link = getLink(item)
    drawLink(
    	render,
    	texId,
    	tpos.x,
    	tpos.y,
    	tpos.w,
    	link
    )
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
    var format = copyFormat(item, null)
    var texId = makeStandardTexture(render, item);
    pushPrimitive(item, texId, 0, 0);
    render.drawShape(
    	texId,
    	"poly",
    	item.x,
    	item.y,
    	makePoints(item),
    	format
    );
    var borderFormat = {
    	lineThickness: format.lineThickness,
    	lineColor: format.lineColor
    }
    render.drawShape(
    	texId,
    	"poly",
    	item.x,
    	item.y,
    	makeComplexLower2(item),
    	borderFormat
    );
    var left = item.x - item.w
     + getPadding(item.content);
    var upper = item.y - item.h + item.a;
    var upperX = item.x + Config.INPUT_LEFT
    var upperW = item.w - Config.INPUT_LEFT
    if (narrowUp) {
        
    } else {
        upperX = item.x + Config.INPUT_LEFT / 2
        upperW = item.w - Config.INPUT_LEFT / 2
    }
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
    var tpos = getMainTextPos(item)
    tpos.x +=  Config.INPUT_LEFT * 2
    var link = getLink(item)
    drawLink(
    	render,
    	texId,
    	tpos.x,
    	tpos.y,
    	tpos.w,
    	link
    )
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
    var result = {}
    result.fillColor = getBackFill(item, customType)
    result.lineColor = getLineColor(item, customType)
    result.lineThickness = getThickness(item)
    result.lineStyle = getStyle(item)
    result.shadow = getShadow(item)
    result.secondaryColor = getSecondary(item)
    if (result.lineColor == "none") {
        result.lineThickness = 0
    }
    return result
}

function copyLineFormat(item) {
    var result = {}
    var content = item.content || {}
    result.lineColor = content.lineColor || getDiaLine()
    result.lineThickness = getThickness(item) || 1
    result.lineStyle = getStyle(item)
    result.arrowStart = content.arrowStart
    result.arrowEnd = content.arrowEnd
    result.fillColor =  Theme.getIconBack("action")
    return result
}

function createMinSize(w, h) {
    if (h < Config.MIN_ICON_HEIGHT) {
        h = Config.MIN_ICON_HEIGHT;
    }
    if (w < Config.MIN_ICON_WIDTH) {
        w = Config.MIN_ICON_WIDTH;
    }
    return new  Utils.Size(w, h);
}

function ctrlEnd_render(graph, item, render) {
    var texId = makeStandardTexture(render, item);
    render.drawShape(
    	texId,
    	"ctrlend",
    	item.x,
    	item.y,
    	[item.w, item.h, CTRL_RADIUS],
    	copyFormat(item, null)
    );
    pushPrimitive(item, texId, 0, 0);
    renderTextTex(render, texId, item, "center");
}

function ctrlStart_render(graph, item, render) {
    var texId = makeStandardTexture(render, item);
    render.drawShape(
    	texId,
    	"ctrlstart",
    	item.x,
    	item.y,
    	[item.w, item.h, CTRL_RADIUS],
    	copyFormat(item, null)
    );
    pushPrimitive(item, texId, 0, 0);
    renderTextTex(render, texId, item, "center");
}

function drawCandies(graph, free, render, selection) {
    var _ind697 = 0;
    var _col697 = selection;
    var _keys697 = Object.keys(_col697); 
    var _len697 = _keys697.length;
    while (true) {
        if (_ind697 < _len697) {
            
        } else {
            break;
        }
        var id = _keys697[_ind697]; var _ = _col697[id];
        var item = free.get(id);
        if (item) {
            
        } else {
            item = graph.getItem(id);
        }
        drawCandy(graph, item, render, selection);
        _ind697++;
    }
}

function drawCandy(graph, item, render, selection) {
    var sel = selection[item.id];
    if (sel === "green") {
        if (item.isLine) {
            var head = graph.getHead(item)
            var tail = graph.getTail(item)
            if (item.isVertical) {
                if ((item.role === "down") || (item.role === "par-down")) {
                    verticalCandy(
                    	head,
                    	tail,
                    	item,
                    	render,
                    	true
                    );
                } else {
                    verticalCandy(
                    	head,
                    	tail,
                    	item,
                    	render,
                    	false
                    );
                }
            } else {
                var drawPoint = Utils.canInsertInHorizontal(
                	graph,
                	item
                )
                horizontalCandy(
                	head,
                	tail,
                	item,
                	render,
                	drawPoint
                );
            }
        } else {
            if (item.type === "junction") {
                juncCandy(item, render);
            } else {
                standardCandy(item, render, "#00ff00");
            }
        }
        drawHandles(render, item)
    } else {
        if (sel === "blue") {
            standardCandy(item, render, "#00ffff");
        }
    }
}

function drawHandles(render, item) {
    var handles = getHandles(item)
    var color = "yellow"
    var _ind1535 = 0;
    var _col1535 = handles;
    var _len1535 = _col1535.length;
    while (true) {
        if (_ind1535 < _len1535) {
            
        } else {
            break;
        }
        var handle = _col1535[_ind1535];
        var candyId = render.createJCandy(
        	handle.x,
        	handle.y,
        	color,
        	"free_candies"
        );
        pushPrimitive(
        	item,
        	candyId,
        	handle.x - item.x,
        	handle.y - item.y
        );
        _ind1535++;
    }
}

function drawLink(render, texId, x, y, w, link) {
    if (link) {
        var pos = getLinkIconPos(x, y, w)
        render.drawLinkIcon(
        	texId,
        	link,
        	pos.x,
        	pos.y
        )
    }
}

function duration_fit(item, render) {
    render.setFont(item.content.font)
    var block = Utils.buildBlock(
    	render,
    	getText(item)
    );
    var h = calculateIconHeight(
    	getPadding(item.content),
    	block.height
    );
    var w = calculateIconSize(
    	getPadding(item.content),
    	block.width + Config.INPUT_LEFT
    );
    if (h < Config.MIN_ICON_HEIGHT) {
        h = Config.MIN_ICON_HEIGHT;
    }
    var minW = h * 2;
    if (w < minW) {
        w = minW;
    }
    var result = new FitResult();
    result.w = w;
    result.h = h;
    result.tb = block;
    return result;
}

function duration_makeBox(node, x, y, render) {
    var box = Utils.boxFromPoint(
    	x,
    	y,
    	node.w,
    	node.h
    );
    box.right += Config.METRE;
    return box;
}

function end_fit(item, render) {
    render.setFont(item.content.font)
    var block = Utils.buildBlock(
    	render,
    	getText(item)
    );
    var h = snapSize(block.height, Config.SNAP);
    var w = snapSize(block.width, Config.SNAP);
    w = Math.max(w, h * 2);
    var result = new FitResult();
    result.w = w;
    result.h = h;
    result.tb = block;
    return result;
}

function end_makeBox(node, x, y, render) {
    return itemCallbacks.action.makeBox(
    	node,
    	x,
    	y
    );
}

function end_render(graph, item, render) {
    var texId = makeStandardTexture(render, item);
    render.drawShape(
    	texId,
    	"beginend",
    	item.x,
    	item.y,
    	[item.w-5, item.h-5],
    	copyFormat(item, null)
    );
    pushPrimitive(item, texId, 0, 0);
    renderTextTex(render, texId, item, "center");
}

function eraseFromRender(render, item) {
    if (item.primitives) {
        var _ind798 = 0;
        var _col798 = item.primitives;
        var _len798 = _col798.length;
        while (true) {
            if (_ind798 < _len798) {
                
            } else {
                break;
            }
            var prim = _col798[_ind798];
            render.deleteItem(prim.id);
            _ind798++;
        }
        item.primitives = null;
    }
}

function f_circle_render(graph, item, render) {
    var texId = makeStandardTexture(render, item);
    render.drawShape(
    	texId,
    	"circle",
    	item.x,
    	item.y,
    	[item.w, item.h],
    	copyFormat(item, null)
    );
    pushPrimitive(item, texId, 0, 0);
    var link = getLink(item)
    drawLink(
    	render,
    	texId,
    	item.x,
    	item.y,
    	item.w,
    	link
    )
    renderTextTex(render, texId, item, "center", link)
}

function f_cloud_fit(item, render) {
    var result = action_fit(item, render)
    result.h = result.h * 3.0 / 2.0;
    return result;
}

function f_cloud_render(graph, item, render) {
    var texId = makeStandardTexture(render, item);
    render.drawShape(
    	texId,
    	"cloud",
    	item.x,
    	item.y,
    	[item.w, item.h],
    	copyFormat(item, null)
    );
    pushPrimitive(item, texId, 0, 0);
    var y = Math.floor(item.h / 3);
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
    var texId = makeStandardTexture(render, item);
    render.drawShape(
    	texId,
    	"db",
    	item.x,
    	item.y,
    	[item.w, item.h],
    	copyFormat(item, null)
    );
    pushPrimitive(item, texId, 0, 0);
    renderTextTex(render, texId, item, "center");
}

function f_label_render(graph, item, render) {
    var texId = makeStandardTexture(render, item);
    pushPrimitive(item, texId, 0, 0);
    renderTextTex(render, texId, item, "left");
}

function f_line_boxIntersect(item, box) {
    var lineBox = findLineBox(item)
    return Utils.boxesIntersect(box, lineBox)
}

function f_line_candies(item) {
    var candies = []
    addHandle(
    	item.x,
    	item.y,
    	Const.LINE_START,
    	candies
    )
    addHandle(
    	item.x + item.w,
    	item.y + item.h,
    	Const.LINE_END,
    	candies
    )
    return candies
}

function f_line_fit(item, render) {
    var text = getText(item)
    var result = {
    	w: item.w,
    	h: item.h
    }
    if (text) {
        var w = Utils.snapUp(getLineLength(item) / 2)
        w = Math.max(40, w)
        var textSize = flowText(
        	render,
        	text,
        	item.content,
        	w
        );
        result.tb = textSize.tb
    }
    return result
}

function f_line_hit(item, x, y) {
    if ((item.w == 0) || (item.h == 0)) {
        return hitLineBox(item, x, y)
    } else {
        return hitFreeLine(item, x, y)
    }
}

function f_line_makeBox(item, x, y, render) {
    var box = findLineBox(item)
    box.left += Config.TOUCH_MARGIN
    box.top += Config.TOUCH_MARGIN
    box.right -= Config.TOUCH_MARGIN
    box.bottom -= Config.TOUCH_MARGIN
    return box
}

function f_line_moveHandle(item, handleType, dx, dy) {
    var x1 = item.x
    var y1 = item.y
    var x2 = x1 + item.w
    var y2 = y1 + item.h
    if (handleType === "LINE_START") {
        x1 += dx
        y1 += dy
    } else {
        if (handleType === "LINE_END") {
            
        } else {
            throw "Unexpected switch value: " + handleType;
        }
        x2 += dx
        y2 += dy
    }
    if ((x1 == x2) && (y1 == y2)) {
        return {}
    } else {
        return {
        	x: x1,
        	y: y1,
        	w: x2 - x1,
        	h: y2 - y1
        }
    }
}

function f_line_render(graph, item, render) {
    var tb = item.tb
    if (tb) {
        var w = tb.width / 2
        var h = tb.height / 2
        var tx, ty, ta
        var h1 = h + Config.ICON_PADDING
        var length = getLineLength(item)
        var angle = Utils.findAngle(
        	0,
        	0,
        	item.w,
        	item.h
        )
        if (item.w < 0) {
            var tpos0 = new Utils.Point(
            	length / 2,
            	h1
            )
            var tpos1 = Utils.rotatePoint(
            	angle,
            	tpos0
            )
            
            tx = tpos1.x
            ty = tpos1.y
            ta = Utils.oppositeAngle(angle)
        } else {
            var tpos0 = new Utils.Point(
            	length / 2,
            	-h1
            )
            var tpos1 = Utils.rotatePoint(
            	angle,
            	tpos0
            )
            
            tx = tpos1.x
            ty = tpos1.y
            ta = angle
        }
        var left = Math.round(tx - w)
        var top = Math.round(ty - h)
        render.setFont(item.content.font)
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
        pushPrimitive(item, texId, 0, 0);
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
    var primId = render.createLine(
    	item.x,
    	item.y,
    	item.w,
    	item.h,
    	copyLineFormat(item),
    	"free"
    );
    pushPrimitive(item, primId, 0, 0);
}

function f_placeholder_render(graph, item, render) {
    var texId = makeStandardTexture(render, item);
    var format = copyFormat(item, null)
    render.drawShape(
    	texId,
    	"rectangle",
    	item.x,
    	item.y,
    	[item.w, item.h],
    	format
    );
    var left = item.x - item.w
    var top = item.y - item.h
    var right = item.x + item.w
    var bottom = item.y + item.h
    render.drawShape(
    	texId,
    	"line",
    	left,
    	top,
    	[right, bottom],
    	format
    );
    render.drawShape(
    	texId,
    	"line",
    	left,
    	bottom,
    	[right, top],
    	format
    );
    pushPrimitive(item, texId, 0, 0);
}

function f_ptr_left_handles(item) {
    var result = []
    addHandle(
    	item.x - item.w + item.content.h0x,
    	item.y - item.h,
    	"H_EW",
    	result
    )
    return result
}

function f_ptr_left_moveHandle(item, handleType, dx, dy) {
    var content = item.content
    var h0x = content.h0x + dx
    h0x = Math.max(h0x, 4)
    h0x = Math.min(item.w, h0x)
    var result = Utils.copyObject(content)
    result.h0x = h0x
    return {
    	content: result
    }
}

function f_ptr_left_render(graph, item, render) {
    var texId = makeStandardTexture(render, item);
    var depth = item.content.h0x
    render.drawShape(
    	texId,
    	"poly",
    	item.x,
    	item.y,
    	makeLeftPtrPoints(0, 0, item.w, item.h, depth),
    	copyFormat(item, "action")
    );
    pushPrimitive(item, texId, 0, 0);
    var x = item.x + depth / 2
    var w = item.w - depth / 2
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
    var padding = item.content.h0x / 2
    var partWidth = item.w - padding;
    var result = flowText(
    	render,
    	getText(item),
    	item.content,
    	partWidth
    )
    result.w = item.w;
    return result;
}

function f_ptr_right_handles(item) {
    var result = []
    addHandle(
    	item.x + item.w - item.content.h0x,
    	item.y - item.h,
    	"H_EW",
    	result
    )
    return result
}

function f_ptr_right_moveHandle(item, handleType, dx, dy) {
    var content = item.content
    var h0x = content.h0x - dx
    h0x = Math.max(h0x, 4)
    h0x = Math.min(item.w, h0x)
    var result = Utils.copyObject(content)
    result.h0x = h0x
    return {
    	content: result
    }
}

function f_ptr_right_render(graph, item, render) {
    var texId = makeStandardTexture(render, item);
    var depth = item.content.h0x
    render.drawShape(
    	texId,
    	"poly",
    	item.x,
    	item.y,
    	makeOutputPoints(0, 0, item.w, item.h, depth),
    	copyFormat(item, "action")
    );
    pushPrimitive(item, texId, 0, 0);
    var x = item.x - depth / 2
    var w = item.w - depth / 2
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
    content.h0x = Math.min(content.h0x, width)
}

function f_rounded_moveHandle(item, dx) {
    var content = item.content
    var radius = content.radius - dx
    radius = Math.max(radius, 2)
    radius = Math.min(item.h, radius)
    radius = Math.min(item.w, radius)
    var result = Utils.copyObject(content)
    result.radius = radius
    return {
    	content: result
    }
}

function f_rounded_render(graph, item, render) {
    var BORDER = 0
    var texId = makeStandardTexture(render, item);
    var radius = item.content.radius
    render.drawShape(
    	texId,
    	"rounded",
    	item.x,
    	item.y,
    	[item.w, item.h, radius, BORDER],
    	copyFormat(item, "question")
    );
    pushPrimitive(item, texId, 0, 0);
    var link = getLink(item)
    drawLink(
    	render,
    	texId,
    	item.x,
    	item.y,
    	item.w,
    	link
    )
    if (item.type == "raction") {
        renderTextTex(render, texId, item, "center", link)
    } else {
        renderTextTex(render, texId, item, "left", link)
    }
}

function f_tab_render(graph, item, render) {
    var texId = makeStandardTexture(render, item);
    render.drawShape(
    	texId,
    	"tab",
    	item.x,
    	item.y,
    	[item.w, item.h],
    	copyFormat(item, null)
    );
    pushPrimitive(item, texId, 0, 0);
    renderTextTex(render, texId, item, "center");
}

function findLineBox(item) {
    var x1 = item.x
    var x2 = x1 + item.w
    var y1 = item.y
    var y2 = y1 + item.h
    var left = Math.min(x1, x2)
    var right = Math.max(x1, x2)
    var top = Math.min(y1, y2)
    var bottom = Math.max(y1, y2)
    return new Utils.Box(
    	left - Config.TOUCH_MARGIN,
    	top - Config.TOUCH_MARGIN,
    	right + Config.TOUCH_MARGIN,
    	bottom + Config.TOUCH_MARGIN
    )
}

function fitQuestion(item, render) {
    var block = item.tb;
    var h = calculateIconHeight(
    	getPadding(item.content),
    	block.height
    );
    var w = calculateIconSize(
    	h,
    	block.width
    );
    if (h < Config.MIN_ICON_HEIGHT) {
        h = Config.MIN_ICON_HEIGHT;
    }
    var minW = h * 2;
    if (w < minW) {
        w = minW;
    }
    return new  Utils.Size(w, h);
}

function flowText(render, text, content, width, link) {
    var padding = getPadding(content)
    var textWidth = (width - padding) * 2;
    if (link) {
        textWidth -= Config.LINK_PADDING * 2
    }
    if (content) {
        render.setFont(content.font)
    }
    var div = Utils.buildFlow(
    	render,
    	text,
    	textWidth
    );
    var height = snapSize(div.height, padding)
    var result = new FitResult();
    result.w = width;
    result.h = height;
    result.tb = div;
    return result;
}

function gdur_moveHandle(item, handleType, dx, dy) {
    var result
    var content = item.content
    var upX = content.h0x
    var upY = content.h0y
    var downX = content.h1x
    var downY = content.h1y
    if (handleType === "FR_0") {
        if (content.right) {
            upX -= dx
            upY -= dy
        } else {
            upX += dx
            upY -= dy
        }
        upX = Math.max(upX, 30)
        downX = Math.max(downX, 30)
        var minY = item.h + Config.METRE
        upY = Math.max(upY, minY)
        downY = Math.max(downY, minY)
        result = Utils.copyObject(content)
        result.h0x = upX
        result.h0y = upY
        result.h1x = downX
        result.h1y = downY
    } else {
        if (handleType === "FR_1") {
            if (content.right) {
                downX -= dx
                downY += dy
            } else {
                downX += dx
                downY += dy
            }
            upX = Math.max(upX, 30)
            downX = Math.max(downX, 30)
            var minY = item.h + Config.METRE
            upY = Math.max(upY, minY)
            downY = Math.max(downY, minY)
            result = Utils.copyObject(content)
            result.h0x = upX
            result.h0y = upY
            result.h1x = downX
            result.h1y = downY
        } else {
            result = content
        }
    }
    return {
    	content: result
    }
}

function gdur_render(graph, item, render) {
    var content = item.content
    var top = -content.h0y
    var bottom = content.h1y
    var leftUp, rightUp
    var leftDown, rightDown
    if (content.right) {
        leftUp = -content.h0x + 0.5
        rightUp = 0
        leftDown = -content.h1x + 0.5
        rightDown = 0
    } else {
        leftUp = gDurRadius
        rightUp = content.h0x
        leftDown = gDurRadius
        rightDown = content.h1x
    }
    if (content.right) {
        pushCorner(
        	render,
        	item,
        	0,
        	top,
        	"right-top"
        )
        pushCorner(
        	render,
        	item,
        	0,
        	bottom,
        	"right-bottom"
        )
    } else {
        pushCorner(
        	render,
        	item,
        	0,
        	top,
        	"left-top"
        )
        pushCorner(
        	render,
        	item,
        	0,
        	bottom,
        	"left-bottom"
        )
    }
    pushFreeVertical(
    	render,
    	item,
    	0,
    	top + gDurRadius,
    	content.h0y - gDurRadius
    )
    pushFreeVertical(
    	render,
    	item,
    	0,
    	0,
    	content.h1y - gDurRadius
    )
    pushFreeHorizontal(
    	render,
    	item,
    	leftUp,
    	top,
    	content.h0x - gDurRadius
    )
    pushFreeHorizontal(
    	render,
    	item,
    	leftDown,
    	bottom,
    	content.h1x - gDurRadius
    )
    pause_render(graph, item, render)
}

function getAlign(item, defaultAlign) {
    var content = item.content
    if ((content) && (content.align)) {
        return content.align
    } else {
        return defaultAlign
    }
}

function getBackFill(item, customType) {
    var type = customType || item.type
    var content = item.content
    if ((content) && (content.fillColor)) {
        return content.fillColor
    } else {
        return Theme.getIconBack(type)
    }
}

function getCandies(item) {
    var result
    var callback = itemCallbacks[item.type]
    if (callback.candies) {
        result = callback.candies(item)
    } else {
        var candies = []
        if (item.free) {
            buildFreeCandies(item, candies)
        } else {
            buildDrnCandies(item, candies)
        }
        result = candies
    }
    return result
}

function getCompX1(item) {
    return -item.w
}

function getCompX2(item) {
    return -item.w + Config.INPUT_LEFT
}

function getCompX3(item) {
    return item.w - Config.INPUT_LEFT * 2
}

function getCompX4(item) {
    return item.w - Config.INPUT_LEFT * 1.4
}

function getCompX5(item) {
    return item.w
}

function getCompY1(item) {
    return -item.h
}

function getCompY2(item) {
    var y1 = getCompY1(item)
    var y4 = getCompY4(item)
    return (y1 + y4) / 2
}

function getCompY3(item) {
    return -item.h + item.a * 2
}

function getCompY4(item) {
    return getCompY3(item) + Config.INPUT_OVERLAP
}

function getCompY5(item) {
    return item.h
}

function getDiaLine() {
    return gDiaLine || Theme.getLine()
}

function getDiaLineFormat(item) {
    var result = {}
    result.lineColor = getDiaLine()
    result.lineThickness = gDiaLineThickness
    if ((item) && (item.isSkewer)) {
        result.lineThickness += 2
    }
    return result
}

function getHandles(item) {
    var _sw14060000_ = 0;
    var result = []
    var callback = itemCallbacks[item.type]
    if (callback.handles) {
        result = callback.handles(item)
    } else {
        var content = item.content
        _sw14060000_ = item.type;
        if (_sw14060000_ === "gdur") {
            if (content.right) {
                result.push({
                	x: item.x - content.h0x,
                	y: item.y - content.h0y,
                	name: Const.FR_0
                })
                result.push({
                	x: item.x - content.h1x,
                	y: item.y + content.h1y,
                	name: Const.FR_1
                })
            } else {
                result.push({
                	x: item.x + content.h0x,
                	y: item.y - content.h0y,
                	name: Const.FR_0
                })
                result.push({
                	x: item.x + content.h1x,
                	y: item.y + content.h1y,
                	name: Const.FR_1
                })
            }
        } else {
            if (_sw14060000_ === "callout") {
                result.push({
                	x: item.x + content.h0x,
                	y: item.y + content.h0y,
                	name: Const.FR_0
                })
            } else {
                if (_sw14060000_ === "f_rounded") {
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
    return result
}

function getItemCallback(type) {
    var callback = itemCallbacks[type];
    if (callback) {
        return callback;
    } else {
        throw "Unsupported item type: '" + type + "'";
    }
}

function getLineColor(item, customType) {
    var type = customType || item.type
    var content = item.content
    if ((content) && (content.lineColor)) {
        return content.lineColor
    } else {
        return Theme.getIconBorder(type)
    }
}

function getLineLength(item) {
    var w = item.w
    var h = item.h
    var length = Math.sqrt(w * w + h * h)
    return Math.max(40, length)
}

function getLineThickness(item) {
    var content = item.content
    if (content) {
        var thickStr = content.lineThickness
        var thick = parseInt(thickStr)
        if (isNaN(thick)) {
            return 1
        } else {
            return thick
        }
    } else {
        return 1
    }
}

function getLink(item) {
    var disable = true
    if ((disable) || (!(item.content))) {
        return null
    } else {
        if (item.content.status) {
            return item.content.status
        } else {
            var link = item.content.link
            if (link) {
                if ((link.indexOf("youtube.com") == -1) && (link.indexOf("vimeo.com") == -1)) {
                    return "link"
                } else {
                    return "video"
                }
            } else {
                return null
            }
        }
    }
}

function getLinkHandle(item) {
    if (((item.content) && (item.content.link)) && (getLink(item))) {
        var tpos = getMainTextPos(item)
        var pos = getLinkIconPos(
        	tpos.x,
        	tpos.y,
        	tpos.w
        )
        var handle = {
        	x: pos.x,
        	y: pos.y,
        	name: "link",
        	link: item.content.link
        }
        return handle
    } else {
        return null
    }
}

function getLinkIconPos(x, y, w) {
    var padding = Config.LINK_PADDING + Config.LINK_PADDING / 2
    var x2 = x - w + padding - 1
    return new Utils.Point(x2, y)
}

function getMainTextPos(item) {
    var _sw28590000_ = 0;
    var x = item.x
    var y = item.y
    var w = item.w
    _sw28590000_ = item.type;
    if ((_sw28590000_ === "case") || (_sw28590000_ === "branch")) {
        y -= Math.floor(item.h / 3)
    } else {
        if (((_sw28590000_ === "input") || (_sw28590000_ === "output")) || (_sw28590000_ === "process")) {
            var left = item.x - item.w
             + getPadding(item.content)
            var h2 = item.h - item.a
            var lower = item.y + item.h - h2
            x -= Config.INPUT_LEFT
            y = lower
            w -= Config.INPUT_LEFT
        } else {
            if (_sw28590000_ === "insertion") {
                w -= INSERTION
            } else {
                if (_sw28590000_ === "shelf") {
                    var h2 = item.h - item.a;
                    var lower = item.y + item.h - h2;
                    y = lower
                }
            }
        }
    }
    return {
    	x: x,
    	y: y,
    	w: w
    }
}

function getMore(subtype) {
    var methods = moreCallbacks[subtype]
    if (methods) {
        return methods
    } else {
        throw Error("Subtype '" + subtype + "' not found")
    }
}

function getPadding(content) {
    if (content) {
        var paddingStr = content.padding
        var padding = parseInt(paddingStr)
        if (isNaN(padding)) {
            return Config.ICON_PADDING
        } else {
            return padding
        }
    } else {
        return Config.ICON_PADDING
    }
}

function getSecondary(item) {
    var content = item.content
    if ((content) && (content.secondaryColor)) {
        return content.secondaryColor
    } else {
        if (item.type == "shelf") {
            return Theme.getIconSecondaryBack("insertion")
        } else {
            return Theme.getIconSecondaryBack(item.type)
        }
    }
}

function getShadow(item) {
    if (item.content) {
        return item.content.shadow
    } else {
        return false
    }
}

function getStyle(item) {
    if (item.content) {
        return item.content.lineStyle
    } else {
        return "solid"
    }
}

function getText(item) {
    if (item.content) {
        return item.content.txt || "";
    } else {
        return "";
    }
}

function getText2(item) {
    if (item.content) {
        return item.content.txt2 || "";
    } else {
        return "";
    }
}

function getTextColor(item) {
    var content = item.content
    if ((content) && (content.textColor)) {
        return content.textColor
    } else {
        return Theme.getIconFont(item.type);
    }
}

function getThickness(item) {
    var content = item.content
    if (content) {
        var thickness = content.lineThickness
        if (isNaN(parseInt(thickness))) {
            return Theme.getThickness()
        } else {
            return thickness
        }
    } else {
        return Theme.getThickness()
    }
}

function hitFreeLine(item, x, y) {
    if (hitLineBox(item, x, y)) {
        var x1 = item.x
        var x2 = x1 + item.w
        var y1 = item.y
        var y2 = y1 + item.h
        var line = Utils.lineFrom2Points(
        	x1,
        	y1,
        	x2,
        	y2
        )
        var distance = line.distanceToPoint(x, y)
        if (Math.abs(distance) < Config.TOUCH_MARGIN) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

function hitLineBox(item, x, y) {
    var box = findLineBox(item)
    return Utils.hitBox(box, x, y)
}

function horizontalCandy(head, tail, item, render, valence) {
    var x = head.x
    var y = head.y
    var w = tail.x - head.x
    var left = x + head.w;
    var right = tail.x
    var candyId = render.createHCandy(
    	x,
    	y,
    	w,
    	valence,
    	left, right,
    	"line_candies"
    );
    pushPrimitive(item, candyId, 0, 0);
}

function horizontal_fit(item, render) {
    
}

function horizontal_render(graph, item, render) {
    var head = graph.getHead(item);
    var tail = graph.getTail(item);
    var w = tail.x - head.x;
    var primId = render.createHorizontal(
    	head.x,
    	head.y,
    	w,
    	item.role,
    	getDiaLineFormat(),
    	"lines"
    );
    pushPrimitive(item, primId, 0, 0);
}

function hscroll_size() {
    return {
    	w: 80,
    	h: 10
    }
}

function initMore() {
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
    complex_render2(
    	graph,
    	item,
    	render,
    	makeComplexInput,
    	true
    )
}

function insertion_fit(item, render) {
    var link = getLink(item)
    var result = flowText(
      render,
      getText(item),
      item.content,
      item.w - 5,
      link
    )
    result.w = item.w
    return result
}

function insertion_makeBox(node, x, y, render) {
    return Utils.boxFromPoint(
    	x,
    	y,
    	node.w,
    	node.h
    );
}

function insertion_render(graph, item, render) {
    var texId = makeStandardTexture(render, item);
    var format = copyFormat(item, "action")
    var qformat = Utils.copyObject(format)
    qformat.fillColor = format.secondaryColor
    render.drawShape(
    	texId,
    	"rectangle",
    	item.x,
    	item.y,
    	[item.w, item.h],
    	format
    );
    var lineFormat = copyFormat(item, null)
    lineFormat.fillColor = ""
    var hi = Math.floor(INSERTION / 2)
    var left = item.x - item.w + hi
    var right = item.x + item.w - hi
    render.drawShape(
    	texId,
    	"rectangle",
    	left,
    	item.y,
    	[hi, item.h],
    	qformat
    );
    render.drawShape(
    	texId,
    	"rectangle",
    	right,
    	item.y,
    	[hi, item.h],
    	qformat
    );
    var tpos = getMainTextPos(item)
    var link = getLink(item)
    drawLink(
    	render,
    	texId,
    	tpos.x,
    	tpos.y,
    	tpos.w,
    	link
    )
    pushPrimitive(item, texId, 0, 0);
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
    var candyId = render.createJCandy(
    	item.x,
    	item.y,
    	"#00ff00",
    	"icon_candies"
    );
    pushPrimitive(item, candyId, 0, 0);
}

function junction_fit(item, render) {
    return new  Utils.Size(0, 0);
}

function junction_makeBox(node, x, y, render) {
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
    var padding = Math.floor(getPadding(item.content) / 2);
    var result = flowText(
    	render,
    	getText(item),
    	item.content,
    	item.w - padding
    )
    result.w = item.w
    return result;
}

function loopbegin_makeBox(node, x, y, render) {
    return Utils.boxFromPoint(
    	x,
    	y,
    	node.w,
    	node.h
    );
}

function loopbegin_render(graph, item, render) {
    var ADD = LoopAdd
    render.setFont(item.content.font)
    var w = item.w + ADD
    var texId = makeCustomTexture(
    	render,
    	item.x,
    	item.y,
    	w,
    	item.h
    );
    render.drawShape(
    	texId,
    	"poly",
    	item.x,
    	item.y,
    	makeLoopBeginPoints(w, item.h),
    	copyFormat(item, null)
    );
    pushPrimitive(item, texId, 0, 0);
    var link = getLink(item)
    drawLink(
    	render,
    	texId,
    	item.x,
    	item.y,
    	item.w,
    	link
    )
    renderTextTex(render, texId, item, "center", link)
}

function loopend_fit(item, render) {
    return loopbegin_fit(item, render);
}

function loopend_makeBox(node, x, y, render) {
    return Utils.boxFromPoint(
    	x,
    	y,
    	node.w,
    	node.h
    );
}

function loopend_render(graph, item, render) {
    var ADD = LoopAdd
    render.setFont(item.content.font)
    var w = item.w + ADD
    var texId = makeCustomTexture(
    	render,
    	item.x,
    	item.y,
    	w,
    	item.h
    );
    render.drawShape(
    	texId,
    	"poly",
    	item.x,
    	item.y,
    	makeLoopEndPoints(w, item.h),
    	copyFormat(item, "loopbegin")
    );
    pushPrimitive(item, texId, 0, 0);
    renderTextTex(render, texId, item, "center");
}

function makeAddressPoints(w, h) {
    var x = 0
    var y = 0
    var x0 = x - w;
    var x1 = x;
    var x2 = x + w;
    var top = y - h;
    var bottom = y + h;
    var middle = top + 2.0 / 3.0 * h;
    return [
     x0, middle,
     x1, top,    
     x2, middle,
     x2, bottom,
     x0, bottom
    ]
}

function makeCasePoints(w, h) {
    var x = 0
    var y = 0
    var x0 = x - w;
    var x1 = x;
    var x2 = x + w;
    var top = y - h;
    var bottom = y + h;
    var middle = bottom - 2.0 / 3.0 * h;
    return [
    	x0, top,
    	x2, top,
    	x2, middle,
    	x1, bottom,
    	x0, middle
    ]
}

function makeCollectionPoints(x, y, w, h) {
    //x += 0.5
    //y += 0.5
    var x0 = x - w + 0.5
    var x1 = x0 + CollectionPadding - 0.5
    var x2 = x + w
    var x3 = x2 + CollectionPadding
    var y0 = y - h
    var y1 = y0 + CollectionPadding
    var y2 = y + h
    var y3 = y2 + CollectionPadding
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
    var x1 = -item.w
    var x2 = -item.w + Config.INPUT_LEFT * 1.4
    var x3 = -item.w + Config.INPUT_LEFT * 2
    var x4 = item.w - Config.INPUT_LEFT
    var x5 = item.w
    var y1 = getCompY1(item)
    var y2 = getCompY2(item)
    var y3 = getCompY3(item)
    var y4 = getCompY4(item)
    var y5 = getCompY5(item)
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
    var x1 = getCompX1(item)
    var x3 = getCompX3(item)
    var y3 = getCompY3(item)
    var y5 = getCompY5(item)
    return [
    	x1, y5,
    	x1, y3,
    	x3, y3,
    	x3, y5
    ]
}

function makeComplexLower2(item) {
    var x1 = getCompX1(item)
    var x3 = getCompX3(item)
    var x1 = -item.w + Config.INPUT_LEFT * 2
    var x3 = item.w
    var y3 = getCompY3(item)
    var y5 = getCompY5(item)
    return [
    	x1, y5,
    	x1, y3,
    	x3, y3,
    	x3, y5
    ]
}

function makeComplexOutput(item) {
    var x1 = getCompX1(item)
    var x2 = getCompX2(item)
    var x3 = getCompX3(item)
    var x4 = getCompX4(item)
    var x5 = getCompX5(item)
    var y1 = getCompY1(item)
    var y2 = getCompY2(item)
    var y3 = getCompY3(item)
    var y4 = getCompY4(item)
    var y5 = getCompY5(item)
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
    var x1 = getCompX1(item)
    var x2 = getCompX2(item)
    var x3 = getCompX3(item)
    var x4 = getCompX4(item)
    var x5 = getCompX5(item)
    var y1 = getCompY1(item)
    var y2 = getCompY2(item)
    var y3 = getCompY3(item)
    var y4 = getCompY4(item)
    var y5 = getCompY5(item)
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
    var texId = render.createTexture(
    	x,
    	y,
    	- w,
    	- h,
    	w * 2,
    	h * 2,
    	"icons"
    );
    return texId;
}

function makeInputPoints(x, y, w, h) {
    x += 0.5
    y += 0.5
    var x2 = x + w;
    var x0 = x - w;
    var x1 = x0 + Config.INPUT_LEFT * 1.4;
    var y2 = y + h;
    var y0 = y - h;
    var y1 = y;
    return [
      x0, y0,
      x2, y0,
      x2, y2,
      x0, y2,
      x1, y1
    ]
}

function makeLeftPtrPoints(x, y, w, h, depth) {
    var x2 = x + w;
    var x0 = x - w;
    var x1 = x0 + depth;
    var y2 = y + h;
    var y0 = y - h;
    var y1 = y;
    return [
      x0, y1,
      x1, y0,
      x2, y0,
      x2, y2,
      x1, y2
    ]
}

function makeLoopBeginPoints(w, h) {
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
    x += 0.5
    y += 0.5
    var x2 = x + w;
    var x0 = x - w;
    var x1 = x2 - depth;
    var y2 = y + h;
    var y0 = y - h;
    var y1 = y;
    return [
      x0, y0,
      x1, y0,
      x2, y1,
      x1, y2,
      x0, y2
    ]
}

function makePausePoints(w, h) {
    var x = 0
    var y = 0
    var x0 = x - w;
    var top = y - h;
    var width = w * 2;
    var height = h * 2;
    var bottom = top + height;
    
    var x3 = x0 + width;
    var x1 = x0 + Q_PADDING;
    var x2 = x3 - Q_PADDING;
    return [
     x0, top,
     x3, top,
     x2, bottom,
     x1, bottom
    ]
}

function makeQuestionPoints(w, h) {
    var x = 0
    var y = 0
    var x0 = x - w;
    var x1 = x0 + Q_PADDING;
    var x3 = x + w;
    var x2 = x3 - Q_PADDING;
    var top = y - h;
    var bottom = y + h;
    var result = [
    	x0, y,
    	x1, top,
    	x2, top,
    	x3, y,
    	x2, bottom,
    	x1, bottom
    ]
    return result
}

function makeSelectPoints(w, h) {
    var x = 0
    var y = 0
    var shift = Q_PADDING / 2
    var x0 = x - w;
    var x1 = x0 + shift;
    var x3 = x + w;
    var x2 = x3 - shift;
    var top = y - h;
    var bottom = y + h;
    return [
    	x0, bottom,
    	x1, top,
    	x3, top,
    	x2, bottom
    ]
}

function makeStandardTexture(render, item) {
    var layer
    if (item.free) {
        layer = "free"
    } else {
        layer = "icons"
    }
    if (item.content) {
        render.setFont(item.content.font)
    }
    var texId = render.createTexture(
    	item.x,
    	item.y,
    	- item.w,
    	- item.h,
    	item.w * 2,
    	item.h * 2,
    	layer
    );
    return texId;
}

function more_fit(item, render) {
    var subtype = item.content.subtype
    var methods = getMore(subtype)
    var result
    if (methods.fit) {
        result = methods.fit(item, render)
    } else {
        result = {
        	w: item.w,
        	h: item.h
        }
    }
    return result
}

function more_makeBox(node, x, y, render) {
    return Utils.boxFromPoint(
    	x,
    	y,
    	node.w,
    	node.h
    );
}

function more_render(graph, item, render) {
    var subtype = item.content.subtype
    var texId = makeStandardTexture(render, item);
    render.drawShape(
    	texId,
    	"more",
    	item.x,
    	item.y,
    	[item.w, item.h, subtype],
    	copyFormat(item, null)
    );
    pushPrimitive(item, texId, 0, 0);
}

function moveCanvasNode(render, id, node, x, y) {
    node.x = x;
    node.y = y;
    var _ind811 = 0;
    var _col811 = node.primitives;
    var _len811 = _col811.length;
    while (true) {
        if (_ind811 < _len811) {
            
        } else {
            break;
        }
        var prim = _col811[_ind811];
        var ix = x + prim.xOffset;
        var iy = y + prim.yOffset;
        
        render.moveItem(
        	prim.id,
        	ix,
        	iy
        );
        _ind811++;
    }
}

function moveHandle(item, handleType, dx, dy, x, y) {
    var _sw14910000_ = 0;
    var callback = itemCallbacks[item.type]
    if (callback.moveHandle) {
        return callback.moveHandle(
        	item,
        	handleType,
        	dx,
        	dy
        )
    } else {
        _sw14910000_ = item.type;
        if (_sw14910000_ === "gdur") {
            return gdur_moveHandle(
            	item,
            	handleType,
            	dx,
            	dy
            )
        } else {
            if (_sw14910000_ === "callout") {
                return callout_moveHandle(
                	item,
                	dx,
                	dy,
                	x,
                	y
                )
            } else {
                if (_sw14910000_ === "f_line") {
                    return f_line_moveHandle(
                    	item,
                    	handleType,
                    	dx,
                    	dy
                    )
                } else {
                    if (_sw14910000_ === "f_rounded") {
                        return f_rounded_moveHandle(
                        	item,
                        	dx
                        )
                    } else {
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
    var methods = getMore(content.subtype)
    return methods.size(content)
}

function no() {
    if (gUserSettings.no) {
        return gUserSettings.no
    } else {
        return translate("DIA_NO")
    }
}

function noWidth(render) {
    return render.measureTextWidth(no());
}

function output_fit(item, render) {
    var link = getLink(item)
    var dx = Config.INPUT_LEFT;
    var partWidth = item.w - dx;
    var upSize = flowText(
    	render,
    	getText2(item),
    	item.content,
    	partWidth
    );
    var downSize = flowText(
    	render,
    	getText(item),
    	item.content,
    	partWidth,
    	link
    )
    var result = new FitResult();
    result.w = item.w;
    result.h = upSize.h + downSize.h;
    result.a = upSize.h;
    result.tb2 = upSize.tb;
    result.tb = downSize.tb;
    return result;
}

function output_makeBox(node, x, y, render) {
    return Utils.boxFromPoint(
    	x,
    	y,
    	node.w,
    	node.h
    );
}

function output_render(graph, item, render) {
    complex_render(
    	graph,
    	item,
    	render,
    	makeComplexOutput,
    	true
    )
}

function parallelDraw(ox, oy) {
    var leftSides = calcLeftSides(this, ox);
    var centers = calcCenters(this, leftSides);
    var r, c;
    var y = oy;
    r = 0;
    while (true) {
        if (r <= this.rowCount) {
            
        } else {
            break;
        }
        var jointRow = this.joints[r];
        c = 0;
        while (true) {
            if (c < this.columnCount) {
                
            } else {
                break;
            }
            var joint = jointRow[c];
            joint.x = centers[c];
            joint.y = y;
            gMan.addItem(joint);
            c++;
        }
        if (r < this.rowCount) {
            y += 3 * Config.METRE + this.heights[r];
        }
        r++;
    }
    y = oy + Config.METRE;
    r = 0;
    while (true) {
        if (r < this.rowCount) {
            
        } else {
            break;
        }
        var row = this.rows[r];
        c = 0;
        while (true) {
            if (c < this.columnCount) {
                
            } else {
                break;
            }
            var leftEdge = leftSides[c];
            var cell = row[c];
            cell.draw(leftEdge, y);
            c++;
        }
        y += this.heights[r] + Config.METRE * 3;
        r++;
    }
    drawMilestone(
    	this.joints[0],
    	"parallel"
    );
    r = 0;
    while (true) {
        if (r < this.rowCount) {
            
        } else {
            break;
        }
        var jointRow = this.joints[r + 1];
        drawMilestone(
        	jointRow,
        	null
        );
        r++;
    }
    r = 0;
    while (true) {
        if (r < this.rowCount) {
            
        } else {
            break;
        }
        var row2 = this.rows[r];
        var jointsAbove = this.joints[r];
        var jointsBelow = this.joints[r + 1];
        c = 0;
        while (true) {
            if (c < this.columnCount) {
                
            } else {
                break;
            }
            var cell2 = row2[c];
            connectVertical(
            	jointsAbove[c],
            	jointsBelow[c],
            	cell2,
            	"rend"
            );
            c++;
        }
        r++;
    }
}

function pause_fit(item, render) {
    return select_fit(item, render);
}

function pause_makeBox(node, x, y, render) {
    return Utils.boxFromPoint(
    	x,
    	y,
    	node.w,
    	node.h
    );
}

function pause_render(graph, item, render) {
    var texId = makeStandardTexture(render, item);
    var points = makePausePoints(item.w, item.h)
    render.drawShape(
    	texId,
    	"poly",
    	item.x,
    	item.y,
    	points,
    	copyFormat(item, "loopbegin")
    );
    pushPrimitive(item, texId, 0, 0);
    renderTextTex(render, texId, item, "center");
}

function process_fit(item, render) {
    var link = getLink(item)
    var dx = Config.INPUT_LEFT
    var partWidth = item.w - dx;
    var upSize = flowText(
    	render,
    	getText2(item),
    	item.content, 
    	partWidth
    );
    var downSize = flowText(
    	render,
    	getText(item),
    	item.content,
    	partWidth,
    	link
    )
    var result = new FitResult();
    result.w = item.w;
    result.h = upSize.h + downSize.h;
    result.a = upSize.h;
    result.tb2 = upSize.tb;
    result.tb = downSize.tb;
    return result;
}

function process_makeBox(node, x, y, render) {
    return Utils.boxFromPoint(
    	x,
    	y,
    	node.w,
    	node.h
    );
}

function process_render(graph, item, render) {
    complex_render(
    	graph,
    	item,
    	render,
    	makeComplexProcess,
    	false
    )
}

function pushCorner(render, item, x, y, direction) {
    var primId = render.createRCorner(
    	item.x + x,
    	item.y + y,
    	getDiaLineFormat(),
    	direction,
    	gDurRadius,
    	"free"
    );
    pushPrimitive(item, primId, x, y)
}

function pushFreeHorizontal(render, item, x, y, w) {
    var primId = render.createFreeHorizontal(
    	item.x + x,
    	item.y + y,
    	w,
    	"dashed",
    	getDiaLineFormat(),
    	"free"
    );
    pushPrimitive(item, primId, x, y);
}

function pushFreeVertical(render, item, x, y, h) {
    var primId = render.createVertical(
    	item.x + x,
    	item.y + y,
    	h,
    	null,
    	getDiaLineFormat(),
    	"free"
    );
    pushPrimitive(item, primId, x, y)
}

function pushPrimitive(item, primId, x, y) {
    var prim = new Primitive(
    	primId,
    	x,
    	y
    );
    item.primitives.push(prim);
}

function question_fit(item, render) {
    var link = getLink(item)
    return loopbegin_fit(item, render, link)
}

function question_makeBox(node, x, y, render) {
    var box = itemCallbacks.action.makeBox(
    	node,
    	x,
    	y
    );
    box.right += Config.SNAP * 2;
    //box.bottom += Config.SNAP;
    return box;
}

function question_render(graph, item, render) {
    var ADD = 5;
    var diaWidth = item.w + ADD;
    render.setFont(item.content.font)
    var wy = yesWidth(render) * 1.2;
    var wn = noWidth(render);
    var fontHeight = render.getFontHeight();
    var texId = render.createTexture(
    	item.x,
    	item.y,
    	- diaWidth,
    	- item.h,
    	diaWidth * 2 + Math.floor(1.5 * Math.max(wy, wn)),
    	item.h * 2 + fontHeight * 2,
    	"icons"
    );
    pushPrimitive(item, texId, 0, 0);
    var shape = makeQuestionPoints(
    	item.w + ADD,
    	item.h
    )
    render.drawShape(
    	texId,
    	"poly",
    	item.x,
    	item.y,
    	shape,
    	copyFormat(item, null)
    );
    var link = getLink(item)
    drawLink(
    	render,
    	texId,
    	item.x,
    	item.y,
    	item.w,
    	link
    )
    renderTextTex(render, texId, item, "center", link)
    var leftWidth;
    var rightWidth;
    var leftText;
    var rightText;
    if (item.flag1) {
        leftWidth = wy;
        rightWidth = wn;
        leftText = yes();
        rightText = no();
    } else {
        leftWidth = wn;
        rightWidth = wy;
        leftText = no();
        rightText = yes();
    }
    var leftX = -leftWidth - Math.floor(fontHeight / 4);
    var leftY = item.h + Math.floor(fontHeight * 1.2);
    var rightX = item.w + Math.floor(fontHeight * 0.6);
    var rightY = -Math.floor(fontHeight * 0.3);
    var labelColor = getDiaLine()
    render.drawText(
    	texId,
    	leftText,
    	leftX + item.x,
    	leftY + item.y,
    	labelColor
    );
    render.drawText(
    	texId,
    	rightText,
    	rightX + item.x,
    	rightY + item.y,
    	labelColor
    );
}

function renderBlockCenter(render, texId, block, cx, cy, color) {
    var y = Math.ceil(cy - block.height / 2);
    var _ind1060 = 0;
    var _col1060 = block.lines;
    var _len1060 = _col1060.length;
    while (true) {
        if (_ind1060 < _len1060) {
            
        } else {
            break;
        }
        var line = _col1060[_ind1060];
        var left = Math.round(cx - line.width / 2);
        renderLine(render, texId, left, y, line, color);
        _ind1060++;
    }
}

function renderBlockLeft(render, texId, block, left, cy, color) {
    if (block) {
        var y = Math.ceil(cy - block.height / 2);
        var _ind1051 = 0;
        var _col1051 = block.lines;
        var _len1051 = _col1051.length;
        while (true) {
            if (_ind1051 < _len1051) {
                
            } else {
                break;
            }
            var line = _col1051[_ind1051];
            renderLine(render, texId, left, y, line, color);
            _ind1051++;
        }
    }
}

function renderBlockRight(render, texId, block, right, cy, color) {
    if (block) {
        var y = Math.ceil(cy - block.height / 2);
        var _ind1716 = 0;
        var _col1716 = block.lines;
        var _len1716 = _col1716.length;
        while (true) {
            if (_ind1716 < _len1716) {
                
            } else {
                break;
            }
            var line = _col1716[_ind1716];
            var left = Math.round(right - line.width)
            renderLine(render, texId, left, y, line, color);
            _ind1716++;
        }
    }
}

function renderItem(graph, render, item, selection) {
    var callback = getItemCallback(item.type);
    eraseFromRender(render, item);
    item.primitives = [];
    callback.render(graph, item, render);
    drawCandy(graph, item, render, selection);
}

function renderLine(render, texId, left, top, line, color) {
    var y = top + line.bottom;
    var _ind1037 = 0;
    var _col1037 = line.tokens;
    var _len1037 = _col1037.length;
    while (true) {
        if (_ind1037 < _len1037) {
            
        } else {
            break;
        }
        var token = _col1037[_ind1037];
        var x = left + token.left;
        if (token.type == "ws") {
            
        } else {
            render.drawText(texId, token.text, x, y, color);
        }
        _ind1037++;
    }
}

function renderTextTex(render, texId, item, align, link) {
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
    if (link) {
        x += Config.LINK_PADDING
        w -= Config.LINK_PADDING
    }
    var color = getTextColor(item)
    var align = getAlign(item, align)
    if (align === "left") {
        var left = x - w
         + getPadding(item.content);
        renderBlockLeft(
        	render,
        	texId,
        	tb,
        	left,
        	y,
        	color
        );
    } else {
        if (align === "center") {
            renderBlockCenter(
            	render,
            	texId,
            	tb,
            	x,
            	y,
            	color
            );
        } else {
            if (align === "right") {
                
            } else {
                throw "Unexpected switch value: " + align;
            }
            var right = x + w
             - getPadding(item.content);
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
    var callback = itemCallbacks[item.type]
    if (callback.resize) {
        callback.resize(
        	item,
        	width,
        	height,
        	content
        )
    } else {
        _sw24010000_ = item.type;
        if (_sw24010000_ === "gdur") {
            content.h0y = Math.max(
            	content.h0y,
            	height + Config.METRE
            )
            content.h1y = Math.max(
            	content.h1y,
            	height + Config.METRE
            )
        } else {
            if (_sw24010000_ === "callout") {
                var box = Utils.boxFromPoint(
                	0,
                	0,
                	width + Config.METRE,
                	height + Config.METRE
                )
                if (Utils.hitBox(box, content.h0x, content.h0y)) {
                    if (content.h0x < 0) {
                        content.h0x = Math.min(
                        	content.h0x,
                        	-width - Config.METRE
                        )
                    } else {
                        content.h0x = Math.max(
                        	content.h0x,
                        	width + Config.METRE
                        )
                    }
                    if (content.h0y < 0) {
                        content.h0y = Math.min(
                        	content.h0y,
                        	-height - Config.METRE
                        )
                    } else {
                        content.h0y = Math.max(
                        	content.h0y,
                        	height + Config.METRE
                        )
                    }
                }
            } else {
                if (_sw24010000_ === "f_rounded") {
                    var radius = content.radius
                    radius = Math.min(width, radius)
                    radius = Math.min(height, radius)
                    content.radius = radius
                }
            }
        }
    }
}

function select_fit(item, render) {
    var link = getLink(item)
    var result = flowText(
      render,
      getText(item),
      item.content,
      item.w - 10,
      link
    )
    result.w = item.w
    return result
}

function select_makeBox(node, x, y, render) {
    return Utils.boxFromPoint(
    	x,
    	y,
    	node.w,
    	node.h
    );
}

function select_render(graph, item, render) {
    var texId = makeStandardTexture(render, item);
    render.drawShape(
    	texId,
    	"poly",
    	item.x,
    	item.y,
    	makeSelectPoints(item.w, item.h),
    	copyFormat(item, null)
    );
    var link = getLink(item)
    drawLink(
    	render,
    	texId,
    	item.x,
    	item.y,
    	item.w,
    	link
    )
    pushPrimitive(item, texId, 0, 0);
    renderTextTex(render, texId, item, "center", link)
}

function setDiaLine(color, thickness) {
    gDiaLine = color
    if (thickness) {
        gDiaLineThickness = thickness
    } else {
        var tthick = Theme.getThickness()
        if (tthick) {
            gDiaLineThickness = tthick
        } else {
            gDiaLineThickness = 1
        }
    }
}

function setUserSettings(settings) {
    gUserSettings = Utils.copyObject(settings)
}

function shelf_fit(item, render) {
    var link = getLink(item)
    var upSize = flowText(
    	render,
    	getText2(item),
    	item.content,
    	item.w
    );
    var downSize = flowText(
    	render,
    	getText(item),
    	item.content, 
    	item.w,
    	link
    );
    var result = new FitResult();
    result.w = item.w;
    result.h = upSize.h + downSize.h;
    result.a = upSize.h;
    result.tb2 = upSize.tb;
    result.tb = downSize.tb;
    return result;
}

function shelf_makeBox(node, x, y, render) {
    return Utils.boxFromPoint(
    	x,
    	y,
    	node.w,
    	node.h
    );
}

function shelf_render(graph, item, render) {
    var format = copyFormat(item, "action")
    var format2 = Utils.copyObject(format)
    var texId = makeStandardTexture(render, item);
    pushPrimitive(item, texId, 0, 0);
    render.drawShape(
    	texId,
    	"rectangle",
    	item.x,
    	item.y,
    	[item.w, item.h],
    	format
    );
    var middle = item.y - item.h + item.a * 2;
    var right = item.x + item.w;
    var left = item.x - item.w;
    var upper = item.y - item.h + item.a;
    format2.fillColor = format2.secondaryColor
    render.drawShape(
    	texId,
    	"rectangle",
    	item.x,
    	upper,
    	[item.w, item.a],
    	format2
    );
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
    var link = getLink(item)
    var tpos = getMainTextPos(item)
    drawLink(
    	render,
    	texId,
    	tpos.x,
    	tpos.y,
    	tpos.w,
    	link
    )
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
    var texId = makeStandardTexture(render, item);
    render.drawShape(
    	texId,
    	"poly",
    	item.x,
    	item.y,
    	makeInputPoints(0, 0, item.w, item.h),
    	copyFormat(item, "action")
    );
    var link = getLink(item)
    drawLink(
    	render,
    	texId,
    	item.x + Config.INPUT_LEFT,
    	item.y,
    	item.w,
    	link
    )
    pushPrimitive(item, texId, 0, 0);
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
    var heightRaw = (textHeight / 2 + padding);
    var height = Math.round(heightRaw / Config.SIZE_SNAP) *
      Config.SIZE_SNAP;
    return height;
}

function soutput_fit(item, render) {
    var link = getLink(item)
    var padding = Config.INPUT_LEFT;
    var partWidth = item.w - padding;
    var result = flowText(
    	render,
    	getText(item),
    	item.content,
    	partWidth,
    	link
    )
    result.w = item.w;
    return result;
}

function soutput_makeBox(node, x, y, render) {
    return Utils.boxFromPoint(
    	x,
    	y,
    	node.w,
    	node.h
    );
}

function soutput_render(graph, item, render) {
    var texId = makeStandardTexture(render, item);
    render.drawShape(
    	texId,
    	"poly",
    	item.x,
    	item.y,
    	makeOutputPoints(0, 0, item.w, item.h, Config.INPUT_LEFT * 1.4),
    	copyFormat(item, "action")
    );
    var link = getLink(item)
    drawLink(
    	render,
    	texId,
    	item.x,
    	item.y,
    	item.w,
    	link
    )
    pushPrimitive(item, texId, 0, 0);
    renderTextTex(render, texId, item, "left", link)
}

function standardCandy(item, render, color) {
    var layer
    if (item.free) {
        layer = "free_candies"
    } else {
        layer = "icon_candies"
    }
    var candies = getCandies(item)
    var _ind2164 = 0;
    var _col2164 = candies;
    var _len2164 = _col2164.length;
    while (true) {
        if (_ind2164 < _len2164) {
            
        } else {
            break;
        }
        var candy = _col2164[_ind2164];
        var candyId = render.createJCandy(
        	candy.x,
        	candy.y,
        	color,
        	layer
        );
        pushPrimitive(
        	item,
        	candyId,
        	candy.x - item.x,
        	candy.y - item.y
        );
        _ind2164++;
    }
}

function timer_fit(item, render) {
    return select_fit(item, render);
}

function timer_makeBox(node, x, y, render) {
    return Utils.boxFromPoint(
    	x,
    	y,
    	node.w,
    	node.h
    );
}

function timer_render(graph, item, render) {
    var THICK = 8;
    var texId = makeStandardTexture(render, item);
    var points = makePausePoints(item.w, item.h)
    var points2 = makePausePoints(item.w - THICK, item.h)
    var fakeItem = Utils.copyObject(item)
    fakeItem.type = "insertion"
    var format = copyFormat(fakeItem, null)
    var qformat = Utils.copyObject(format)
    qformat.fillColor = format.secondaryColor
    render.drawShape(
    	texId,
    	"poly",
    	item.x,
    	item.y,
    	points,
    	qformat
    );
    render.drawShape(
    	texId,
    	"poly",
    	item.x,
    	item.y,
    	points2,
    	format
    );
    var left0 = item.x - item.w + THICK
    var left1 = left0 + Q_PADDING
    var right0 = item.x + item.w - THICK
    var right1 = right0 - Q_PADDING
    var top = item.y - item.h
    var bottom = item.y + item.h
    render.drawShape(
    	texId,
    	"line",
    	left0,
    	top,
    	[left1, bottom],
    	qformat
    );
    render.drawShape(
    	texId,
    	"line",
    	right0,
    	top,
    	[right1, bottom],
    	qformat
    );
    pushPrimitive(item, texId, 0, 0);
    renderTextTex(render, texId, item, "center");
}

function verticalCandy(head, tail, item, render, valence) {
    var x = head.x
    var y = head.y
    var h = tail.y - head.y
    var top = y + head.h;
    var bottom = tail.y - tail.h;
    var primId = render.createVCandy(
    	x,
    	y,
    	h,
    	valence,
    	top, bottom,
    	"line_candies"
    );
    pushPrimitive(item, primId, 0, 0);
}

function vertical_fit(item, render) {
    
}

function vertical_render(graph, item, render) {
    var head = graph.getHead(item);
    var tail = graph.getTail(item);
    var h = tail.y - head.y;
    var primId = render.createVertical(
    	head.x,
    	head.y,
    	h,
    	item.role,
    	getDiaLineFormat(item),
    	"lines"
    );
    pushPrimitive(item, primId, 0, 0);
}

function vscroll_size() {
    return {
    	w: 10,
    	h: 80
    }
}

function yes() {
    if (gUserSettings.yes) {
        return gUserSettings.yes
    } else {
        return translate("DIA_YES")
    }
}

function yesWidth(render) {
    return render.measureTextWidth(yes());
}


	initMore()
}
