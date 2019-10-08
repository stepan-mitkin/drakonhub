var cli = new Client();

var Config = cli.Config;

var Box = cli.test.Box;
var CanvasCache = cli.test.CanvasCache;
var Clicker = cli.test.Clicker;
var Command = cli.test.Command;
var DirectionProps = cli.test.DirectionProps;
var Dragger = cli.test.Dragger;
var Editor = cli.test.Editor;
var InfiniteScroll = cli.test.InfiniteScroll;
var Infinite_changeOffset = cli.test.Infinite_changeOffset;
var Infinite_getPos = cli.test.Infinite_getPos;
var Infinite_reset = cli.test.Infinite_reset;
var Infinite_scroll = cli.test.Infinite_scroll;
var LazyScroll = cli.test.LazyScroll;
var Lazy_origin = cli.test.Lazy_origin;
var Lazy_reset = cli.test.Lazy_reset;
var Lazy_set = cli.test.Lazy_set;
var Manhattan = cli.test.Manhattan;
var PhysicalGraph = cli.test.PhysicalGraph;
var PhysicalItem = cli.test.PhysicalItem;
var Point = cli.test.Point;
var Primitive = cli.test.Primitive;
var SimpleClicker = cli.test.SimpleClicker;
var Size = cli.test.Size;
var Smoother = cli.test.Smoother;
var Snapper = cli.test.Snapper;
var Socket = cli.test.Socket;
var SocketClicker = cli.test.SocketClicker;
var Storage = cli.test.Storage;
var StorageItem = cli.test.StorageItem;
var Undo = cli.test.Undo;
var WheelSnapper = cli.test.WheelSnapper;
var WheelSnapper_wheel = cli.test.WheelSnapper_wheel;
var action_fit = cli.test.action_fit;
var action_makeBox = cli.test.action_makeBox;
var action_render = cli.test.action_render;
var addItem = cli.test.addItem;
var addNotNilToSet = cli.test.addNotNilToSet;
var addToSmoother = cli.test.addToSmoother;
var addToUndo = cli.test.addToUndo;
var alignEdges = cli.test.alignEdges;
var alongLine = cli.test.alongLine;
var applyCommands = cli.test.applyCommands;
var assertNotNull = cli.test.assertNotNull;
var assertNull = cli.test.assertNull;
var beginPan = cli.test.beginPan;
var beginend_fit = cli.test.beginend_fit;
var beginend_makeBox = cli.test.beginend_makeBox;
var beginend_render = cli.test.beginend_render;
var boxFromPoint = cli.test.boxFromPoint;
var boxesIntersect = cli.test.boxesIntersect;
var buildExpandMenu = cli.test.buildExpandMenu;
var buildIconMenu = cli.test.buildIconMenu;
var buildInsertMenu = cli.test.buildInsertMenu;
var buildMenuForItem = cli.test.buildMenuForItem;
var buildMoveCommands = cli.test.buildMoveCommands;
var buildResizeCommands = cli.test.buildResizeCommands;
var buildSideMarks = cli.test.buildSideMarks;
var buildSockets = cli.test.buildSockets;
var calculateCommandUndo = cli.test.calculateCommandUndo;
var calculateIconHeight = cli.test.calculateIconHeight;
var calculateIconSize = cli.test.calculateIconSize;
var calculateUndo = cli.test.calculateUndo;
var canDeleteIfBranch = cli.test.canDeleteIfBranch;
var canDeleteItem = cli.test.canDeleteItem;
var canDeleteOnIfBranch = cli.test.canDeleteOnIfBranch;
var canDeleteQuestion = cli.test.canDeleteQuestion;
var canEditText = cli.test.canEditText;
var canGo = cli.test.canGo;
var canJoinTo = cli.test.canJoinTo;
var canTransplantFrom = cli.test.canTransplantFrom;
var changeNodeHeight = cli.test.changeNodeHeight;
var cloneDictionary = cli.test.cloneDictionary;
var cloneNotEmpty = cli.test.cloneNotEmpty;
var collapseBolt = cli.test.collapseBolt;
var connectEdge = cli.test.connectEdge;
var copyBox = cli.test.copyBox;
var copyObject = cli.test.copyObject;
var copyPoint = cli.test.copyPoint;
var copyState = cli.test.copyState;
var copyStorageItem = cli.test.copyStorageItem;
var createAndBindClicker = cli.test.createAndBindClicker;
var createAndBindDragger = cli.test.createAndBindDragger;
var createAndBindSimpleClicker = cli.test.createAndBindSimpleClicker;
var createClicker = cli.test.createClicker;
var createDragger = cli.test.createDragger;
var createEdge = cli.test.createEdge;
var createNode = cli.test.createNode;
var createPhysicalGraph = cli.test.createPhysicalGraph;
var createSimpleClicker = cli.test.createSimpleClicker;
var createTextBlock = cli.test.createTextBlock;
var createTextPrim = cli.test.createTextPrim;
var darkenSocket = cli.test.darkenSocket;
var deleteCanvasItem = cli.test.deleteCanvasItem;
var deleteItem = cli.test.deleteItem;
var deleteJunctionBetween = cli.test.deleteJunctionBetween;
var deleteLiana = cli.test.deleteLiana;
var deletePhysicalItem = cli.test.deletePhysicalItem;
var deleteQuestion = cli.test.deleteQuestion;
var deleteSimpleItem = cli.test.deleteSimpleItem;
var describeJunction = cli.test.describeJunction;
var deselectAll = cli.test.deselectAll;
var diagramToJson = cli.test.diagramToJson;
var disconnectEdge = cli.test.disconnectEdge;
var doDelete = cli.test.doDelete;
var doInsert = cli.test.doInsert;
var drawCandies = cli.test.drawCandies;
var drawCandy = cli.test.drawCandy;
var drawEdgeMark = cli.test.drawEdgeMark;
var drawMarks = cli.test.drawMarks;
var drawNodeMark = cli.test.drawNodeMark;
var drill = cli.test.drill;
var endViewPan = cli.test.endViewPan;
var endVisualDrag = cli.test.endVisualDrag;
var endsWithRightTurn = cli.test.endsWithRightTurn;
var eraseFromRender = cli.test.eraseFromRender;
var executeCommands = cli.test.executeCommands;
var expandBolt = cli.test.expandBolt;
var expandBox = cli.test.expandBox;
var extendEdge = cli.test.extendEdge;
var findCornerSocket = cli.test.findCornerSocket;
var findDownSocket = cli.test.findDownSocket;
var findHead = cli.test.findHead;
var findLeftSocket = cli.test.findLeftSocket;
var findMaxSkewerWidth = cli.test.findMaxSkewerWidth;
var findNextOnWall = cli.test.findNextOnWall;
var findOffset = cli.test.findOffset;
var findPhysicalItem = cli.test.findPhysicalItem;
var findPoisoned = cli.test.findPoisoned;
var findSocket = cli.test.findSocket;
var findTargetSockets = cli.test.findTargetSockets;
var findVisualItem = cli.test.findVisualItem;
var fireSocket = cli.test.fireSocket;
var fitAction = cli.test.fitAction;
var fitQuestion = cli.test.fitQuestion;
var forceDeletePNode = cli.test.forceDeletePNode;
var generateId = cli.test.generateId;
var getAdjacentEdges = cli.test.getAdjacentEdges;
var getBox = cli.test.getBox;
var getEdge = cli.test.getEdge;
var getEdgeHeight = cli.test.getEdgeHeight;
var getHead = cli.test.getHead;
var getIntersectionDelta = cli.test.getIntersectionDelta;
var getItem = cli.test.getItem;
var getItemCallback = cli.test.getItemCallback;
var getItemText = cli.test.getItemText;
var getMaxId = cli.test.getMaxId;
var getNeighbourDown = cli.test.getNeighbourDown;
var getNeighbourUp = cli.test.getNeighbourUp;
var getNode = cli.test.getNode;
var getNodeDown = cli.test.getNodeDown;
var getNodeLeft = cli.test.getNodeLeft;
var getNodeRight = cli.test.getNodeRight;
var getNodeUp = cli.test.getNodeUp;
var getSelectedItem = cli.test.getSelectedItem;
var getSkewer = cli.test.getSkewer;
var getTail = cli.test.getTail;
var getViewPan = cli.test.getViewPan;
var getZoneColor = cli.test.getZoneColor;
var glueHole = cli.test.glueHole;
var glueHoles = cli.test.glueHoles;
var grabBack = cli.test.grabBack;
var grabForward = cli.test.grabForward;
var hasItemsBelow = cli.test.hasItemsBelow;
var hasPipe = cli.test.hasPipe;
var hitBox = cli.test.hitBox;
var hitsAnyone = cli.test.hitsAnyone;
var horizontalCandy = cli.test.horizontalCandy;
var horizontal_fit = cli.test.horizontal_fit;
var horizontal_render = cli.test.horizontal_render;
var insertAndEdit = cli.test.insertAndEdit;
var insertCanvasItem = cli.test.insertCanvasItem;
var insertCanvasSocket = cli.test.insertCanvasSocket;
var insertItem = cli.test.insertItem;
var insertJunctionBetween = cli.test.insertJunctionBetween;
var insertPhysicalEdge = cli.test.insertPhysicalEdge;
var insertPhysicalItem = cli.test.insertPhysicalItem;
var insertPhysicalNode = cli.test.insertPhysicalNode;
var insertQuestion = cli.test.insertQuestion;
var insertSimpleItem = cli.test.insertSimpleItem;
var isBolt = cli.test.isBolt;
var isEdgeOnMainSkewer = cli.test.isEdgeOnMainSkewer;
var isFromTJoint = cli.test.isFromTJoint;
var isItemSelected = cli.test.isItemSelected;
var isNakedCorner = cli.test.isNakedCorner;
var isNodeOnMainSkewer = cli.test.isNodeOnMainSkewer;
var isRightHand = cli.test.isRightHand;
var isUpT = cli.test.isUpT;
var juncCandy = cli.test.juncCandy;
var junction_fit = cli.test.junction_fit;
var junction_makeBox = cli.test.junction_makeBox;
var junction_render = cli.test.junction_render;
var leftInnerCorner = cli.test.leftInnerCorner;
var leftInnerLine = cli.test.leftInnerLine;
var leftOuterCorner = cli.test.leftOuterCorner;
var leftOuterLine = cli.test.leftOuterLine;
var loadDiagram = cli.test.loadDiagram;
var makeAndDrawSocket = cli.test.makeAndDrawSocket;
var makeCommonWidth = cli.test.makeCommonWidth;
var makeDeletionPlan = cli.test.makeDeletionPlan;
var makeDirectionProps = cli.test.makeDirectionProps;
var makeFreeSpace = cli.test.makeFreeSpace;
var makeNewZone = cli.test.makeNewZone;
var makePipe = cli.test.makePipe;
var makePipeForEdge = cli.test.makePipeForEdge;
var makePipeForNode = cli.test.makePipeForNode;
var makeSecDeletionPlan = cli.test.makeSecDeletionPlan;
var makeSocket = cli.test.makeSocket;
var makeSweep = cli.test.makeSweep;
var markEdge = cli.test.markEdge;
var markEdgeLeft = cli.test.markEdgeLeft;
var markEdgeUp = cli.test.markEdgeUp;
var max = cli.test.max;
var mergeSets = cli.test.mergeSets;
var moveCanvasNode = cli.test.moveCanvasNode;
var moveDown = cli.test.moveDown;
var moveNode = cli.test.moveNode;
var moveNodeBox = cli.test.moveNodeBox;
var moveOne = cli.test.moveOne;
var moveRight = cli.test.moveRight;
var moveSkewer = cli.test.moveSkewer;
var moveToRightFrom = cli.test.moveToRightFrom;
var moveToRightFromCore = cli.test.moveToRightFromCore;
var nextPointBelow = cli.test.nextPointBelow;
var no = cli.test.no;
var noWidth = cli.test.noWidth;
var objectValues = cli.test.objectValues;
var onCanvasClick = cli.test.onCanvasClick;
var onInnerFloor = cli.test.onInnerFloor;
var onOuterFloor = cli.test.onOuterFloor;
var panViewTo = cli.test.panViewTo;
var performChange = cli.test.performChange;
var performRedo = cli.test.performRedo;
var performUndo = cli.test.performUndo;
var physicalDrag = cli.test.physicalDrag;
var planDeleteMain = cli.test.planDeleteMain;
var planDeleteSkewerEnd = cli.test.planDeleteSkewerEnd;
var pokeHor = cli.test.pokeHor;
var pokeOut = cli.test.pokeOut;
var pokeVer = cli.test.pokeVer;
var pullApartAndResize = cli.test.pullApartAndResize;
var pushDeleteEdge = cli.test.pushDeleteEdge;
var pushDeleteNode = cli.test.pushDeleteNode;
var pushInsertDown = cli.test.pushInsertDown;
var pushInsertHorizontal = cli.test.pushInsertHorizontal;
var pushInsertJunction = cli.test.pushInsertJunction;
var pushInsertNode = cli.test.pushInsertNode;
var pushLedgeLeft = cli.test.pushLedgeLeft;
var pushObjects = cli.test.pushObjects;
var pushPrimitive = cli.test.pushPrimitive;
var pushSkewerWidth = cli.test.pushSkewerWidth;
var question_fit = cli.test.question_fit;
var question_makeBox = cli.test.question_makeBox;
var question_render = cli.test.question_render;
var redrawCanvas = cli.test.redrawCanvas;
var removeItem = cli.test.removeItem;
var renderItem = cli.test.renderItem;
var renderText = cli.test.renderText;
var resetSmoother = cli.test.resetSmoother;
var restoreState = cli.test.restoreState;
var rightLine = cli.test.rightLine;
var runAndSaveCommands = cli.test.runAndSaveCommands;
var runItemDelete = cli.test.runItemDelete;
var runItemInsert = cli.test.runItemInsert;
var runNodeUpdate = cli.test.runNodeUpdate;
var scanLeftWall = cli.test.scanLeftWall;
var scanStartBelow = cli.test.scanStartBelow;
var scanStartBelowCore = cli.test.scanStartBelowCore;
var selectItem = cli.test.selectItem;
var setItemText = cli.test.setItemText;
var setViewPan = cli.test.setViewPan;
var shouldResize = cli.test.shouldResize;
var snapMove = cli.test.snapMove;
var snapUp = cli.test.snapUp;
var splitToLines = cli.test.splitToLines;
var standardCandy = cli.test.standardCandy;
var startEditText = cli.test.startEditText;
var startPhysicalDrag = cli.test.startPhysicalDrag;
var startVisualDrag = cli.test.startVisualDrag;
var submitCommands = cli.test.submitCommands;
var swapYesNo = cli.test.swapYesNo;
var topInnerCorner = cli.test.topInnerCorner;
var topOuterCorner = cli.test.topOuterCorner;
var transplantLiana = cli.test.transplantLiana;
var traverseDown = cli.test.traverseDown;
var traverseHorizontal = cli.test.traverseHorizontal;
var traverseRow = cli.test.traverseRow;
var traverseRowFromLink = cli.test.traverseRowFromLink;
var traverseRowFromNode = cli.test.traverseRowFromNode;
var traverseUp = cli.test.traverseUp;
var traverseVertical = cli.test.traverseVertical;
var unwrapClick = cli.test.unwrapClick;
var unwrapDoubleClick = cli.test.unwrapDoubleClick;
var updateCanvasEdge = cli.test.updateCanvasEdge;
var updateCanvasSockets = cli.test.updateCanvasSockets;
var updateDiagram = cli.test.updateDiagram;
var updateEdgeBox = cli.test.updateEdgeBox;
var updateNode = cli.test.updateNode;
var updateTouchBox = cli.test.updateTouchBox;
var verticalCandy = cli.test.verticalCandy;
var vertical_fit = cli.test.vertical_fit;
var vertical_render = cli.test.vertical_render;
var visualDrag = cli.test.visualDrag;
var wheelScroll = cli.test.wheelScroll;
var yes = cli.test.yes;
var yesWidth = cli.test.yesWidth;


var Dragger_state_idle = cli.test.Dragger_state_idle;
var Dragger_state_dragging = cli.test.Dragger_state_dragging;
var Dragger_state_panning = cli.test.Dragger_state_panning;
var Clicker_state_idle = cli.test.Clicker_state_idle;
var Clicker_state_probation = cli.test.Clicker_state_probation;
var Clicker_state_moving = cli.test.Clicker_state_moving;
var Clicker_state_afterClick = cli.test.Clicker_state_afterClick;
var SimpleClicker_state_idle = cli.test.SimpleClicker_state_idle;
var SimpleClicker_state_probation = cli.test.SimpleClicker_state_probation;
var SimpleClicker_state_moving = cli.test.SimpleClicker_state_moving;
var SimpleClicker_state_afterClick = cli.test.SimpleClicker_state_afterClick;
var SocketClicker_state_idle = cli.test.SocketClicker_state_idle;
var SocketClicker_state_onsocket = cli.test.SocketClicker_state_onsocket;
var SocketClicker_state_offsocket = cli.test.SocketClicker_state_offsocket;
var itemCallbacks = cli.test.itemCallbacks;


QUnit.module( "Utils" );

QUnit.test( "copyBox copies fields", function( assert ) {
    var box = new Box(10, 20, 30, 40);
    var copy = copyBox(box);
    assert.deepEqual(copy, box);
});

QUnit.test( "copyBox makes a copy", function( assert ) {
    var box = new Box(10, 20, 30, 40);
    var copy = copyBox(box);
    assert.ok(copy !== box);
});

QUnit.test( "expandBox expands ok", function( assert ) {
    var box = new Box(10, 20, 30, 40);
    var expected = new Box(5, 15, 35, 45);
    var copy = expandBox(box, 5);
    assert.deepEqual(copy, expected);
});

QUnit.test( "expandBox makes a copy", function( assert ) {
    var box = new Box(10, 20, 30, 40);
    var copy = expandBox(box, 5);
    assert.ok(copy !== box);
});

QUnit.test( "mergeSets - empty - empty - empty", function( assert ) {
    var left  = {};
    var right = {};
    mergeSets(left, right);
    Utest.checkKeys(assert, left, []);
});

QUnit.test( "mergeSets - empty - right - right", function( assert ) {
    var left  = {};
    var right = {};
    right[10] = true;
    right[20] = true;
    mergeSets(left, right);
    Utest.checkKeys(assert, left, [20, 10]);
});

QUnit.test( "mergeSets - left - empty - left", function( assert ) {
    var left  = {};
    var right = {};
    left[10] = true;
    left[20] = true;
    mergeSets(left, right);
    Utest.checkKeys(assert, left, [20, 10]);
});

QUnit.test( "mergeSets - left - right - merged ok", function( assert ) {
    var left  = {};
    var right = {};
    left[10] = true;
    left[20] = true;
    right[40] = true;
    right[20] = true;
    right[30] = true;   
    mergeSets(left, right);
    Utest.checkKeys(assert, left, [20, 10, 30, 40]);
});

QUnit.test( "splitToLines - empty - empty", function( assert ) {
    var actual = splitToLines("");
    assert.deepEqual(actual, []);
});

QUnit.test( "splitToLines - null - empty", function( assert ) {
    var actual = splitToLines(null);
    assert.deepEqual(actual, []);
});

QUnit.test( "splitToLines - undefined - empty", function( assert ) {
    var actual = splitToLines(undefined);
    assert.deepEqual(actual, []);
});

QUnit.test( "splitToLines - 1 line - 1", function( assert ) {
    var actual = splitToLines("hello");
    assert.deepEqual(actual, ["hello"]);
});

QUnit.test( "splitToLines - 2 lines - 2", function( assert ) {
    var actual = splitToLines("hello\nworld");
    assert.deepEqual(actual, ["hello", "world"]);
});

QUnit.test( "splitToLines - 2 lines \\r\\n - 2", function( assert ) {
    var actual = splitToLines("hello\r\nworld");
    assert.deepEqual(actual, ["hello", "world"]);
});

QUnit.test( "splitToLines - 1 line leading and tailing space - 1 line leading space", function( assert ) {
    var actual = splitToLines("  hello  ");
    assert.deepEqual(actual, ["  hello"]);
});

QUnit.test( "splitToLines - 2 lines leading and tailing space - 2 lines leading space", function( assert ) {
    var actual = splitToLines("  hello  \n  world  ");
    assert.deepEqual(actual, ["  hello", "  world"]);
});

QUnit.test( "splitToLines - 2 lines leading and tailing tab - 2 lines leading space", function( assert ) {
    var actual = splitToLines("\thello\t\n\tworld\t");
    assert.deepEqual(actual, ["    hello", "    world"]);
});

QUnit.test( "splitToLines - 1 line tab inside - preserved space", function( assert ) {
    var actual = splitToLines("\thello\t \tworld\t");
    assert.deepEqual(actual, ["    hello         world"]);
});

QUnit.test( "splitToLines - 1 line space inside - preserved", function( assert ) {
    var actual = splitToLines("  hello   world ");
    assert.deepEqual(actual, ["  hello   world"]);
});

QUnit.test("snapMove - positive", function( assert ) {
    var snapper = new Snapper(10);
    snapper.snapMove(0);
    assert.equal(snapper.step, false);
    assert.equal(snapper.snapped, 0);
    snapper.snapMove(4);
    assert.equal(snapper.step, false);
    assert.equal(snapper.snapped, 0);
    snapper.snapMove(7);
    assert.equal(snapper.step, true);
    assert.equal(snapper.snapped, 10);
    snapper.snapMove(5);
    assert.equal(snapper.step, true);
    assert.equal(snapper.snapped, 10);
});

QUnit.test("snapMove - negative", function( assert ) {
    var snapper = new Snapper(10);
    snapper.snapMove(0);
    assert.equal(snapper.step, false);
    assert.equal(snapper.snapped, 0);
    snapper.snapMove(-4);
    assert.equal(snapper.step, false);
    assert.equal(snapper.snapped, 0);
    snapper.snapMove(-7);
    assert.equal(snapper.step, true);
    assert.equal(snapper.snapped, -10);
    snapper.snapMove(-5);
    assert.equal(snapper.step, true);
    assert.equal(snapper.snapped, -10);
    snapper.snapMove(-4);
    assert.equal(snapper.step, false);
    assert.equal(snapper.snapped, 0);    
});

QUnit.test("snapUp", function( assert ) {
    var old = Config.SIZE_SNAP;
    Config.SIZE_SNAP = 5;
    assert.equal(snapUp(0), 0);
    assert.equal(snapUp(5), 5);
    assert.equal(snapUp(10), 10);
    assert.equal(snapUp(20), 20);
    assert.equal(snapUp(30), 30);
    assert.equal(snapUp(1), 5);
    assert.equal(snapUp(9), 10);
    assert.equal(snapUp(15), 15);
    assert.equal(snapUp(34), 35);
    Config.SIZE_SNAP = old;
});

QUnit.test("max - empty - number min", function( assert ) {
    assert.equal(max([]), 0);
});

QUnit.test("max - same", function( assert ) {
    assert.equal(max([3, 3, 3]), 3);
});

QUnit.test("max - different", function( assert ) {
    assert.equal(max([3, 43, -3]), 43);
});




QUnit.module( "Manhattan" );
    

QUnit.test( "addItem - getItem", function( assert ) {
    var man = new Manhattan();
    
    addItem(man, { id: 10, isLine: false, x: 300, y: 1000 });
    addItem(man, { id: 20, isLine: false, x: 300, y: 1100 });
    addItem(man, { id: 30, isLine: false, x: 300, y: 1200 });
    addItem(man, { id: 40, isLine: false, x: 200, y: 1100 });
    addItem(man, { id: 50, isLine: false, x: 400, y: 1100 });
    
    addItem(man, { id: 11, isLine: true, isVertical: true, head: 10, tail: 20});
    addItem(man, { id: 12, isLine: true, isVertical: true, head: 20, tail: 30});
    addItem(man, { id: 13, isLine: true, isVertical: false, head: 40, tail: 20});
    addItem(man, { id: 14, isLine: true, isVertical: false, head: 20, tail: 50});
    
    var n10 = getNode(man, 10);
    var n20 = getNode(man, 20);
    var n30 = getNode(man, 30);
    var n40 = getNode(man, 40);
    var n50 = getNode(man, 50);
    
    var e11 = getEdge(man, 11);
    var e12 = getEdge(man, 12);
    var e13 = getEdge(man, 13);
    var e14 = getEdge(man, 14);
    
    assert.equal(n10.up, null);
    assert.equal(n10.left, null);
    assert.equal(n10.right, null);
    assert.equal(n10.down, 11);
    
    assert.equal(n20.up, 11);
    assert.equal(n20.left, 13);
    assert.equal(n20.right, 14);
    assert.equal(n20.down, 12);    
    
    assert.equal(n40.up, null);
    assert.equal(n40.left, null);
    assert.equal(n40.right, 13);
    assert.equal(n40.down, null);
    
    assert.equal(e11.id, 11);
    assert.equal(e12.id, 12);
    assert.equal(e13.id, 13);
    assert.equal(e14.id, 14);
    
    assert.equal(getItem(man, 10), n10);
    assert.equal(getItem(man, 20), n20);
    
    assert.equal(getItem(man, 11), e11);
    assert.equal(getItem(man, 12), e12);
    
    assert.equal(getMaxId(man), 50);
});

QUnit.test( "updateNode", function( assert ) {
    var man = new Manhattan();
    
    addItem(man, { id: 10, type: "action", isLine: false, x: 300, y: 1000 });
    addItem(man, { id: 20, type: "junction", isLine: false, x: 300, y: 1100 });
    addItem(man, { id: 30, type: "action", isLine: false, x: 300, y: 1200 });
    addItem(man, { id: 40, type: "action", isLine: false, x: 200, y: 1100 });
    addItem(man, { id: 50, type: "action", isLine: false, x: 400, y: 1100 });
    
    addItem(man, { id: 11, isLine: true, isVertical: true, head: 10, tail: 20});
    addItem(man, { id: 12, isLine: true, isVertical: true, head: 20, tail: 30});
    addItem(man, { id: 13, isLine: true, isVertical: false, head: 40, tail: 20});
    addItem(man, { id: 14, isLine: true, isVertical: false, head: 20, tail: 50});
    
    var n10old = getNode(man, 20);
    updateNode(man, { id: 20, x: 500, y: 444 });
    
    var n20 = getNode(man, 20);
    assert.equal(n20.id, 20); // old
    assert.equal(n20.isLine, false); // old
    assert.equal(n20.type, "junction"); // old
    assert.equal(n20.x, 500); // new
    assert.equal(n20.y, 444); // new
    
    assert.equal(n20.up, 11); // old
    assert.equal(n20.left, 13); // old
    assert.equal(n20.right, 14); // old
    assert.equal(n20.down, 12); // old
        
});

QUnit.test( "removeItem", function( assert ) {

    var man = new Manhattan();
    
    addItem(man, { id: 10, isLine: false, x: 300, y: 1000 });
    addItem(man, { id: 20, isLine: false, x: 300, y: 1100 });
    addItem(man, { id: 30, isLine: false, x: 300, y: 1200 });
    addItem(man, { id: 40, isLine: false, x: 200, y: 1100 });
    addItem(man, { id: 50, isLine: false, x: 400, y: 1100 });
    
    addItem(man, { id: 11, isLine: true, isVertical: true, head: 10, tail: 20});
    addItem(man, { id: 12, isLine: true, isVertical: true, head: 20, tail: 30});
    addItem(man, { id: 13, isLine: true, isVertical: false, head: 40, tail: 20});
    addItem(man, { id: 14, isLine: true, isVertical: false, head: 20, tail: 50});
    
    var n10 = getNode(man, 10);
    var n20 = getNode(man, 20);
    var n30 = getNode(man, 30);
    var n40 = getNode(man, 40);
    var n50 = getNode(man, 50);
    
    removeItem(man, 11);

    
    assert.equal(n10.up, null);
    assert.equal(n10.left, null);
    assert.equal(n10.right, null);
    assert.equal(n10.down, null);
    
    assert.equal(n20.up, null);
    assert.equal(n20.left, 13);
    assert.equal(n20.right, 14);
    assert.equal(n20.down, 12);
    
    assert.equal(man.items[11], undefined);
    assert.equal(man.edges[11], undefined);
    
    removeItem(man, 14);
    
    assert.equal(n20.up, null);
    assert.equal(n20.left, 13);
    assert.equal(n20.right, null);
    assert.equal(n20.down, 12);      
    
    assert.equal(n50.up, null);
    assert.equal(n50.left, null);
    assert.equal(n50.right, null);
    assert.equal(n50.down, null);
    
    assert.equal(man.items[14], undefined);
    assert.equal(man.edges[14], undefined);
    
    removeItem(man, 50);
    assert.equal(man.items[50], undefined);
    assert.equal(man.nodes[50], undefined);    
        
/*
    assert.equal(n10.up, undefined);
    assert.equal(n10.lefundefined);
    assert.equal(n10.righundefined);
    assert.equal(n10.down, 11);
    
    assert.equal(n20.up, 11);
    assert.equal(n20.lef13);
    assert.equal(n20.righ14);
    assert.equal(n20.down, 12);    
    
    assert.equal(n40.up, undefined);
    assert.equal(n40.lefundefined);
    assert.equal(n40.righ13);
    assert.equal(n40.down, undefined);
    
    assert.equal(e11.id, 11);
    assert.equal(e12.id, 12);
    assert.equal(e13.id, 13);
    assert.equal(e14.id, 14);
    
    assert.equal(getItem(man, 10), n10);
    assert.equal(getItem(man, 20), n20);
    
    assert.equal(getItem(man, 11), e11);
    assert.equal(getItem(man, 12), e12);
*/
});



QUnit.module( "PhysicalGraph" );

var edit;


function testInsertNode(id, x, y, text) {
    var box = boxFromPoint(x, y, 30, 15);
    insertPhysicalNode(edit, id, x, y, "action", null, box);
}

function testInsertVertical(id, head, tail) {
    insertPhysicalEdge(edit, id, head, tail, true);
}

function testInsertHorizontal(id, head, tail) {
    insertPhysicalEdge(edit, id, head, tail, false);
}

function testMakeCross() {
    testInsertNode(10, 50, 100, "one");
    testInsertNode(20, 50, 200, "two");
    testInsertNode(30, 50, 300, "three");
    testInsertNode(40, 50, 400, "four");
    testInsertNode(50, -50, 300, "five");
    testInsertNode(60, 150, 300, "six");
    testInsertNode(70, 250, 300, "seven");
    
    testInsertVertical(101, 10, 20);
    testInsertVertical(102, 20, 30);
    testInsertVertical(103, 30, 40);

    testInsertHorizontal(121, 50, 30);
    testInsertHorizontal(122, 30, 60);
    testInsertHorizontal(123, 60, 70);    
}

function initTestMan() {
    edit = new PhysicalGraph();
    testMakeCross();
}

QUnit.test( "startPhysicalDrag - traverse both", function( assert ) {
    initTestMan();
    
    startPhysicalDrag(edit, 30);
    
    var hor = edit.activeHor;
    var ver = edit.activeVer;
    Utest.checkKeys(assert, hor, [50, 60, 70, 30, 121, 122, 123]);
    Utest.checkKeys(assert, ver, [10, 20, 30, 40, 101, 102, 103]); 
});

QUnit.test( "startPhysicalDrag - traverse horizontal", function( assert ) {
    initTestMan();
    

    startPhysicalDrag(edit, 60);
    
    var hor = edit.activeHor;
    var ver = edit.activeVer;
    Utest.checkKeys(assert, hor, [50, 60, 70, 30, 121, 122, 123]);
    Utest.checkKeys(assert, ver, [60]); 
});

QUnit.test( "startPhysicalDrag - traverse vertical", function( assert ) {
    initTestMan();
    
    startPhysicalDrag(edit, 20);
    
    var hor = edit.activeHor;
    var ver = edit.activeVer;
    Utest.checkKeys(assert, hor, [20]);
    Utest.checkKeys(assert, ver, [10, 20, 30, 40, 101, 102, 103]); 
});

QUnit.test( "insert", function( assert ) {
    initTestMan();

    assert.equal(edit.graph.nodes[60].id, 60);
    assert.equal(edit.graph.items[60].id, 60);
    assert.equal(edit.graph.edges[101].id, 101);
    assert.equal(edit.graph.items[101].id, 101);
    var n30 = edit.graph.nodes[30];
    assert.equal(n30.left, 121);
    assert.equal(n30.right, 122);
    assert.equal(n30.up, 102);
    assert.equal(n30.down, 103);
    var l101 = edit.graph.edges[101];
    assert.equal(l101.head, 10);
    assert.equal(l101.tail, 20);
    var l121 = edit.graph.edges[121];
    assert.equal(l121.head, 50);
    assert.equal(l121.tail, 30);
});


QUnit.test( "delete", function( assert ) {
    edit = new PhysicalGraph();
    testInsertNode(10, 50, 100, "one");
    testInsertNode(20, 50, 200, "two");
    
    testInsertVertical(101, 10, 20);

    deletePhysicalItem(edit, 101);
    deletePhysicalItem(edit, 10);
    deletePhysicalItem(edit, 20);
  
    assert.equal(edit.graph.items[101], undefined);
    assert.equal(edit.graph.items[10], undefined);
    assert.equal(edit.graph.items[20], undefined);
});

QUnit.test( "makeSweep - line", function( assert ) {
    initTestMan();
    
    assert.deepEqual(
        makeSweep(
            edit.graph.edges[101].box,
            20,
            makeDirectionProps("horizontal")
        ),
        new Box(50, 100, 70, 200)
    )
    
    assert.deepEqual(
        makeSweep(
            edit.graph.edges[101].box,
            -20,
            makeDirectionProps("horizontal")
        ),
        new Box(30, 100, 50, 200)
    )
        
    assert.deepEqual(
        makeSweep(
            edit.graph.edges[121].box,
            -20,
            makeDirectionProps("vertical")
        ),
        new Box(-50, 280, 50, 300)
    )
    
    assert.deepEqual(
        makeSweep(
            edit.graph.edges[121].box,
            20,
            makeDirectionProps("vertical")
        ),
        new Box(-50, 300, 50, 320)
    )
});


QUnit.test( "makeSweep - node - left", function( assert ) {
    initTestMan();
    
    var node = edit.graph.nodes[10];
    var expected = copyBox(node.box);
    expected.left = expected.left - 20;
    var actual = makeSweep(
            node.box,
            -20,
            makeDirectionProps("horizontal")
    )  
    assert.deepEqual(expected, actual)
});

QUnit.test( "makeSweep - node - right", function( assert ) {
    initTestMan();
    
    var node = edit.graph.nodes[10];
    var expected = copyBox(node.box);
    expected.right = expected.right + 20;
    var actual = makeSweep(
            node.box,
            20,
            makeDirectionProps("horizontal")
    )  
    assert.deepEqual(expected, actual)
});


QUnit.test( "makeSweep - node - up", function( assert ) {
    initTestMan();
    
    var node = edit.graph.nodes[10];
    var expected = copyBox(node.box);
    expected.top = expected.top - 20;
    var actual = makeSweep(
            node.box,
            -20,
            makeDirectionProps("vertical")
    )  
    assert.deepEqual(expected, actual)
});

QUnit.test( "makeSweep - node - down", function( assert ) {
    initTestMan();
    
    var node = edit.graph.nodes[10];
    var expected = copyBox(node.box);
    expected.bottom = expected.bottom + 20;
    var actual = makeSweep(
            node.box,
            20,
            makeDirectionProps("vertical")
    )  
    assert.deepEqual(expected, actual)
});


QUnit.test( "findOffset - right behind - no", function( assert ) {
    initTestMan();

    var props = makeDirectionProps("horizontal");
    var box = new Box(50, 100, 150, 200);
    var sweep = new Box(150, 100, 300, 200);
    var old = {left:150, right:250};
    var offset = findOffset(old, sweep, box, props, 50);
    assert.equal(offset, 0);
});

QUnit.test( "findOffset - right behind touch - no", function( assert ) {
    initTestMan();

    var props = makeDirectionProps("horizontal");
    var box = new Box(50, 100, 150, 200);
    var sweep = new Box(100, 100, 300, 200);
    var old = {left:100, right:250};
    var offset = findOffset(old, sweep, box, props, 50);
    assert.equal(offset, 0);
});

QUnit.test( "findOffset - left behind - no", function( assert ) {
    initTestMan();

    var props = makeDirectionProps("horizontal");
    var box = new Box(50, 100, 150, 200);
    var sweep = new Box(150, 100, 300, 200);
    var old = {left:200, right:300};
    var offset = findOffset(old, sweep, box, props, -50);
    assert.equal(offset, 0);
});

QUnit.test( "findOffset - left behind touch - no", function( assert ) {
    initTestMan();

    var props = makeDirectionProps("horizontal");
    var box = new Box(50, 100, 150, 200);
    var sweep = new Box(150, 100, 300, 200);
    var old = {left:100, right:150};
    var offset = findOffset(old, sweep, box, props, -50);
    assert.equal(offset, 0);
});

QUnit.test( "findOffset - right before - no", function( assert ) {
    initTestMan();

    var props = makeDirectionProps("horizontal");
    var box = new Box(300, 100, 400, 200);
    var sweep = new Box(150, 100, 300, 200);
    var old = {left:150, right:250};
    var offset = findOffset(old, sweep, box, props, 50);
    assert.equal(offset, 0);
});

QUnit.test( "findOffset - left before - no", function( assert ) {
    initTestMan();

    var props = makeDirectionProps("horizontal");
    var box = new Box(300, 100, 400, 200);
    var sweep = new Box(150, 100, 300, 200);
    var old = {left:200, right:250};
    var offset = findOffset(old, sweep, box, props, -50);
    assert.equal(offset, 0);
});

QUnit.test( "findOffset - right higher - no", function( assert ) {
    initTestMan();

    var props = makeDirectionProps("horizontal");
    var box = new Box(150, 300, 300, 400);
    var sweep = new Box(150, 100, 300, 200);
    var old = {left:150, right:250};
    var offset = findOffset(old, sweep, box, props, 50);
    assert.equal(offset, 0);
});

QUnit.test( "findOffset - right lower - no", function( assert ) {
    initTestMan();

    var props = makeDirectionProps("horizontal");
    var box = new Box(150, 0, 300, 50);
    var sweep = new Box(150, 100, 300, 200);
    var old = {left:150, right:250};
    var offset = findOffset(old, sweep, box, props, 50);
    assert.equal(offset, 0);
});

QUnit.test( "findOffset - right hit - positive", function( assert ) {
    initTestMan();

    var props = makeDirectionProps("horizontal");
    var box = new Box(100, 100, 300, 200);
    var sweep = new Box(50, 100, 150, 200);
    var old = {left:50, right:100};
    var offset = findOffset(old, sweep, box, props, 50);
    assert.equal(offset, 50);
});

QUnit.test( "findOffset - left hit - negative", function( assert ) {
    initTestMan();

    var props = makeDirectionProps("horizontal");
    var box = new Box(100, 100, 200, 200);
    var sweep = new Box(150, 50, 250, 300);
    var old = {left:200, right:250};
    var offset = findOffset(old, sweep, box, props, -50);
    assert.equal(offset, -50);
});

QUnit.test( "findOffset - down hit - positive", function( assert ) {
    initTestMan();

    var props = makeDirectionProps("vertical");
    var box = new Box(100, 100, 200, 300);
    var sweep = new Box(100, 0, 200, 200);
    var old = {top:0, bottom:100};
    var offset = findOffset(old, sweep, box, props, 100);
    assert.equal(offset, 100);
});

QUnit.test( "findOffset - up hit - negative", function( assert ) {
    initTestMan();

    var props = makeDirectionProps("vertical");
    var box = new Box(50, 100, 100, 300);
    var sweep = new Box(50, 200, 300, 400);
    var old = {top:300, bottom:400};
    var offset = findOffset(old, sweep, box, props, -50);
    assert.equal(offset, -100);
});


QUnit.test( "findPhysicalItem - outside - no", function( assert ) {
    initTestMan();
    var item = findPhysicalItem(edit, 2000, 1000);
    assert.equal(item, null);
});

QUnit.test( "findPhysicalItem - hit - node", function( assert ) {
    initTestMan();
    var item = findPhysicalItem(edit, 55, 110);
    assert.equal(item, 10);
});

QUnit.test( "findPhysicalItem - hit - line", function( assert ) {
    initTestMan();
    var item = findPhysicalItem(edit, 55, 150);
    assert.equal(item, 101);
});

QUnit.test( "alongLine", function( assert ) {
    initTestMan();
    
    var node = edit.graph.nodes[10];
    var ver = edit.graph.edges[101];
    var hor = edit.graph.edges[121];
    var hor_props = makeDirectionProps("horizontal");
    var ver_props = makeDirectionProps("vertical");
    assert.equal(alongLine(node, hor_props), false);
    assert.equal(alongLine(node, ver_props), false);
    assert.equal(alongLine(ver, ver_props), true);
    assert.equal(alongLine(hor, hor_props), true);
    assert.equal(alongLine(hor, ver_props), false);
    assert.equal(alongLine(ver, hor_props), false);
});

QUnit.test("getAdjacentEdges", function(assert) {
    initTestMan();
    
    var nodes1 = {};
    nodes1[10] = true;
    nodes1[20] = true;
    Utest.checkKeys(assert, getAdjacentEdges(edit, nodes1), [101, 102]);
    
    var nodes2 = {};
    nodes2[60]=true;
    nodes2[70]=true;
    Utest.checkKeys(assert, getAdjacentEdges(edit, nodes2), [122, 123]);
});

function testEditNode(assert, id, x, y) {
    var node = edit.graph.nodes[id];
    assert.ok(node);
    assert.equal(node.x, x);
    assert.equal(node.y, y);
}

function testNode(drag, assert, id, x, y) { 
    testEditNode(assert, id, x, y);


    for (var i in drag.nodes) {
        var node = drag.nodes[i];
        
        if (node.id === id) {
            assert.equal(node.x, x);
            assert.equal(node.y, y);
            return;         
        }
    }

    assert.ok(false);
}

QUnit.test( "drag - simple - move node right", function( assert ) {
    edit = new PhysicalGraph();

    testInsertNode(30, 50, 300);
    testInsertNode(60, 150, 300);
    testInsertHorizontal(122, 30, 60);

    startPhysicalDrag(edit, 30);
    var drag = physicalDrag(edit, 1000, 0);

    testNode(drag, assert, 30, 1050, 300);
    testNode(drag, assert, 60, 1120, 300);
});


QUnit.test( "drag - move node right", function( assert ) {
    initTestMan();

    startPhysicalDrag(edit, 10);
    var drag = physicalDrag(edit, 1000, 0);
    
    testNode(drag, assert, 10, 1050, 100);
    testNode(drag, assert, 20, 1050, 200);
    testNode(drag, assert, 30, 1050, 300);
    testNode(drag, assert, 40, 1050, 400);
    
    testEditNode(assert, 50, -50, 300);
    testNode(drag, assert, 60, 1120, 300);
    testNode(drag, assert, 70, 1190, 300);
    
    
    Utest.equivalent(assert, drag.edges, [101, 102, 103, 121, 122, 123]);    
});

QUnit.test( "drag - move edge right", function( assert ) {
    initTestMan();

    startPhysicalDrag(edit, 101);
    var drag = physicalDrag(edit, 1000, 0);
    
    testNode(drag, assert, 10, 1050, 100);
    testNode(drag, assert, 20, 1050, 200);
    testNode(drag, assert, 30, 1050, 300);
    testNode(drag, assert, 40, 1050, 400);
    
    testEditNode(assert, 50, -50, 300);
    testNode(drag, assert, 60, 1120, 300);
    testNode(drag, assert, 70, 1190, 300);
});


QUnit.test( "drag - move node left", function( assert ) {
    initTestMan();

    startPhysicalDrag(edit, 10);
    var drag = physicalDrag(edit, -1000, 0);
    
    testNode(drag, assert, 10, -950, 100);
    testNode(drag, assert, 20, -950, 200);
    testNode(drag, assert, 30, -950, 300);
    testNode(drag, assert, 40, -950, 400);
    
    testNode(drag, assert, 50, -1020, 300);
    testEditNode(assert, 60, 150, 300);
    testEditNode(assert, 70, 250, 300);
});

QUnit.test( "drag - move edge left", function( assert ) {
    initTestMan();

    startPhysicalDrag(edit, 101);
    var drag = physicalDrag(edit, -1000, 0);
    
    testNode(drag, assert, 10, -950, 100);
    testNode(drag, assert, 20, -950, 200);
    testNode(drag, assert, 30, -950, 300);
    testNode(drag, assert, 40, -950, 400);
    
    testNode(drag, assert, 50, -1020, 300);
    testEditNode(assert, 60, 150, 300);
    testEditNode(assert, 70, 250, 300);
});


QUnit.test( "drag - move node up", function( assert ) {
    initTestMan();

    startPhysicalDrag(edit, 70);
    var drag = physicalDrag(edit, 0, -1000);
    
    testNode(drag, assert, 10, 50, -780);
    testNode(drag, assert, 20, 50, -740);
    testNode(drag, assert, 30, 50, -700);
    testEditNode(assert, 40, 50, 400);
    
    testNode(drag, assert, 50, -50, -700);
    testNode(drag, assert, 60, 150, -700);
    testNode(drag, assert, 70, 250, -700);
});

QUnit.test( "drag - move edge up", function( assert ) {
    initTestMan();

    startPhysicalDrag(edit, 123);
    var drag = physicalDrag(edit, 0, -1000);
    
    testNode(drag, assert, 10, 50, -780);
    testNode(drag, assert, 20, 50, -740);
    testNode(drag, assert, 30, 50, -700);
    testEditNode(assert, 40, 50, 400);
    
    testNode(drag, assert, 50, -50, -700);
    testNode(drag, assert, 60, 150, -700);
    testNode(drag, assert, 70, 250, -700);
});

function damn(assert, foo) {
    assert.equal(edit, foo);
}

QUnit.test( "drag - simple push", function( assert ) {
    edit = new PhysicalGraph();
    



    testInsertNode(8, 0, 0);
    testInsertNode(9, 70, 0);


    startPhysicalDrag(edit, 8);
    var drag = physicalDrag(edit, 1000, 0);
    

    testEditNode(assert, 8, 1000, 0);
    testEditNode(assert, 9, 1070, 0);
});

function test_setPhysicalGroup(nodeId, group) {
	var node = getNode(edit.graph, nodeId);
	node.group = group;
}


QUnit.test("group", function( assert) {

	edit = new PhysicalGraph();
	
    testInsertNode(10, 100, 100, "top");
    testInsertNode(20, 100, 300, "left-middle");
    testInsertNode(30, 100, 500, "left-bottom");
    testInsertNode(40, 500, 300, "right-middle");
    testInsertNode(50, 500, 500, "right-bottom");
    
    
    
    testInsertVertical(101, 10, 20);
    testInsertVertical(102, 20, 30);
    testInsertHorizontal(103, 20, 40);
    testInsertVertical(104, 40, 50);
    
    test_setPhysicalGroup(10, 7);
    test_setPhysicalGroup(20, 7);
    test_setPhysicalGroup(40, 7);        

    
    startPhysicalDrag(edit, 20);
    var drag = physicalDrag(edit, -10, 20);

    testEditNode(assert, 10, 90, 120);
    testEditNode(assert, 20, 90, 320);
    testEditNode(assert, 30, 90, 500);
    testEditNode(assert, 40, 500, 320);
    testEditNode(assert, 50, 500, 500);
});


QUnit.test("group - by edge", function( assert) {

	edit = new PhysicalGraph();
	
    testInsertNode(10, 100, 100, "top");
    testInsertNode(20, 100, 300, "left-middle");
    testInsertNode(30, 100, 500, "left-bottom");
    testInsertNode(40, 500, 300, "right-middle");
    testInsertNode(50, 500, 500, "right-bottom");
    
    
    
    testInsertVertical(101, 10, 20);
    testInsertVertical(102, 20, 30);
    testInsertHorizontal(103, 20, 40);
    testInsertVertical(104, 40, 50);
    
    test_setPhysicalGroup(10, 7);
    test_setPhysicalGroup(20, 7);
    test_setPhysicalGroup(40, 7);        

    
    startPhysicalDrag(edit, 103);
    var drag = physicalDrag(edit, -10, -20);

    testEditNode(assert, 10, 100, 80);
    testEditNode(assert, 20, 100, 280);
    testEditNode(assert, 30, 100, 500);
    testEditNode(assert, 40, 500, 280);
    testEditNode(assert, 50, 500, 500);
});

QUnit.test( "drag - sliding", function( assert ) {
    edit = new PhysicalGraph();


    testInsertNode(8, 0, 0);
    testInsertNode(9, 65, 40);


    startPhysicalDrag(edit, 8);
    var drag = physicalDrag(edit, 23, 12);
    

    testEditNode(assert, 8, 23, 12);
    testEditNode(assert, 9, 65, 52);
});


QUnit.test( "drag - sliding 2", function( assert ) {
    edit = new PhysicalGraph();


    testInsertNode(8, 0, 0);
    testInsertNode(9, 65, 40);


    startPhysicalDrag(edit, 8);
    var drag = physicalDrag(edit, 23, 12);
    

    testEditNode(assert, 8, 23, 12);
    testEditNode(assert, 9, 65, 52);
});


QUnit.test( "junction is goThrough", function( assert ) {
    edit = new PhysicalGraph();
    
    insertPhysicalNode(edit, 800, 40, 50, "junction", null, boxFromPoint(40, 50, 0, 0));
    
    var node = edit.graph.nodes[800];
    assert.equal(node.goThrough, true);
    assert.deepEqual(node.box, new Box(40, 50, 40, 50));
    assert.deepEqual(node.touchBox, new Box(30, 40, 50, 60));
});



QUnit.module( "Dragger" );


function initDraggerWithFake(item, calls) {

    var findItem = function(x, y) {
        calls.call("findItem", [x, y]);
        return item;
    }
	var startPan = function() { calls.call("startPan", []); }
    var startDrag = function(item) { calls.call("startDrag", [item]); }
    var drag = function(dx, dy) { calls.call("drag", [dx, dy]); }
    var endDrag = function() { calls.call("endDrag", []); }
    var pan = function(x, y) { calls.call("pan", [x, y]); }
    var endPan = function() { calls.call("endPan", []); }
    var getOrigin = function() { return new Point(0, 0); }
    
    return createDragger(
        findItem,
        startDrag,
        drag,
        endDrag,
        startPan,
        pan,
        endPan,
        getOrigin
    );
}

function testMachine(assert, calls, machineCtr, init, method, message, endState, expectedCalls) {
    try {
        var machine = machineCtr();
        for (var property in init.properties) {
            machine[property] = init.properties[property];
        }
        machine.state = init.state;
     
        machine[method](message);
        
        assert.equal(machine.state.state_name, endState);
        assert.equal(calls.count(), expectedCalls.length);
        var i;
        for (i = 0; i < expectedCalls.length; i++) {
            var expectedCall = expectedCalls[i];
            calls.checkCall(i, expectedCall.name, expectedCall.args);
        }
    } finally {
        calls.clear();
    }
}

QUnit.test( "Dragger - idle - mouseDown - finds item - dragging", function( assert ) {
    var calls = new Utest.CallListener(assert);
    
    testMachine(
        assert,
        calls,
        function() {
            
            var m = initDraggerWithFake(400, calls);
            return m;
        },
        {
            properties : { item: 400 },
            state : Dragger_state_idle
        },
        "mouseDown",
        {x: 30, y: 40},
        "dragging",
        [
            {
                name: "findItem",
                args: [30, 40]
            },
            {
                name: "startDrag",
                args: [ 400 ]
            }
        ]
    );
});

QUnit.test( "Dragger - idle - mouseDown - does not find item - panning", function( assert ) {
    var calls = new Utest.CallListener(assert);
    
    testMachine(
        assert,
        calls,
        function() {
            
            var m = initDraggerWithFake(null, calls);
            return m;
        },
        {
            properties : { },
            state : Dragger_state_idle
        },
        "mouseDown",
        {x: 30, y: 40},
        "panning",
        [
            {
                name: "findItem",
                args: [30, 40]
            },
            {
            	name: "startPan",
            	args: []
            }
        ]
    );
});

QUnit.test( "Dragger - idle - mouseMove - idle", function( assert ) {
    var calls = new Utest.CallListener(assert);
    
    testMachine(
        assert,
        calls,
        function() {
            
            var m = initDraggerWithFake(null, calls);
            return m;
        },
        {
            properties : { },
            state : Dragger_state_idle
        },
        "mouseMove",
        {x: 30, y: 40},
        "idle",
        []
    );
});

QUnit.test( "Dragger - idle - mouseUp - idle", function( assert ) {
    var calls = new Utest.CallListener(assert);
    
    testMachine(
        assert,
        calls,
        function() {
            
            var m = initDraggerWithFake(null, calls);
            return m;
        },
        {
            properties : { },
            state : Dragger_state_idle
        },
        "mouseUp",
        {x: 30, y: 40},
        "idle",
        []
    );
});

QUnit.test( "Dragger - dragging - mouseDown - idle", function( assert ) {
    var calls = new Utest.CallListener(assert);
    
    testMachine(
        assert,
        calls,
        function() {
            
            var m = initDraggerWithFake(null, calls);
            return m;
        },
        {
            properties : { },
            state : Dragger_state_dragging
        },
        "mouseDown",
        {x: 30, y: 40},
        "idle",
        []
    );
});

QUnit.test( "Dragger - dragging - mouseMove - dragging", function( assert ) {
    var calls = new Utest.CallListener(assert);
    
    testMachine(
        assert,
        calls,
        function() {
            
            var m = initDraggerWithFake(null, calls);
            return m;
        },
        {
            properties : { item : 400 },
            state : Dragger_state_dragging
        },
        "mouseMove",
        {x: 30, y: 40, dx: 5, dy: 10},
        "dragging",
        [
            {
                name: "drag",
                args: [5, 10]
            }
        ]
    );
});

QUnit.test( "Dragger - dragging - mouseUp - idle", function( assert ) {
    var calls = new Utest.CallListener(assert);
    
    testMachine(
        assert,
        calls,
        function() {
            
            var m = initDraggerWithFake(null, calls);
            return m;
        },
        {
            properties : { item : 400 },
            state : Dragger_state_dragging
        },
        "mouseUp",
        {x: 30, y: 40},
        "idle",
        [
            {
                name: "endDrag",
                args: []
            }
        ]
    );
});

QUnit.test( "Dragger - panning - mouseDown - idle", function( assert ) {
    var calls = new Utest.CallListener(assert);
    
    testMachine(
        assert,
        calls,
        function() {
            
            var m = initDraggerWithFake(null, calls);
            return m;
        },
        {
            properties : { item : 400 },
            state : Dragger_state_panning
        },
        "mouseDown",
        {x: 30, y: 40},
        "idle",
        []
    );
});

QUnit.test( "Dragger - panning - mouseMove - panning", function( assert ) {
    var calls = new Utest.CallListener(assert);
    
    testMachine(
        assert,
        calls,
        function() {
            
            var m = initDraggerWithFake(null, calls);
            return m;
        },
        {
            properties : { item : 400, originX: 100, originY: 200 },
            state : Dragger_state_panning
        },
        "mouseMove",
        {x: 30, y: 40, dx: 5, dy: 10},
        "panning",
        [
            {
                name: "pan",
                args: [95, 190]
            }
        ]
    );
});

QUnit.test( "Dragger - panning - mouseUp - idle", function( assert ) {
    var calls = new Utest.CallListener(assert);
    
    testMachine(
        assert,
        calls,
        function() {
            
            var m = initDraggerWithFake(null, calls);
            return m;
        },
        {
            properties : { item : 400, originX: 100, originY: 200 },
            state : Dragger_state_panning
        },
        "mouseUp",
        {x: 30, y: 40, dx: 5, dy: 10},
        "idle",
        [
            {
                name: "endPan",
                args: []
            }
        ]
    );
});


QUnit.module( "InfiniteScroll" );



QUnit.test( "Constructor requires redraw", function( assert ) {

    var scroll = new InfiniteScroll(100);
    
    assert.equal(scroll.redraw, true);
    assert.equal(scroll.offset, 100);
    assert.equal(scroll.canvasLeft, -100);
    assert.equal(scroll.getPos(), 0);
    
});

QUnit.test( "Scroll within limit - no redraw", function( assert ) {

    var scroll = new InfiniteScroll(100);
    
    scroll.scroll(50);
    
    assert.equal(scroll.redraw, false);
    assert.equal(scroll.offset, 150);
    assert.equal(scroll.canvasLeft, -100);
    assert.equal(scroll.getPos(), 50);
});

QUnit.test( "Scroll within limit (negative) - no redraw", function( assert ) {

    var scroll = new InfiniteScroll(100);
    
    scroll.scroll(-50);
    
    assert.equal(scroll.redraw, false);
    assert.equal(scroll.offset, 50);
    assert.equal(scroll.canvasLeft, -100);
    assert.equal(scroll.getPos(), -50);
});

QUnit.test( "Scroll beyond limit - redraw", function( assert ) {

    var scroll = new InfiniteScroll(100);
    
    scroll.scroll(250);
    
    assert.equal(scroll.redraw, true);
    assert.equal(scroll.offset, 100);
    assert.equal(scroll.canvasLeft, 150);
    assert.equal(scroll.getPos(), 250);
});

QUnit.test( "Scroll beyond limit (negative) - redraw", function( assert ) {

    var scroll = new InfiniteScroll(100);
    
    scroll.scroll(-500);
    
    assert.equal(scroll.redraw, true);
    assert.equal(scroll.offset, 100);
    assert.equal(scroll.canvasLeft, -600);
    assert.equal(scroll.getPos(), -500);
});


QUnit.test( "reset", function( assert ) {

    var scroll = new InfiniteScroll(100);
    
    scroll.scroll(50);
    
    assert.equal(scroll.redraw, false);
    assert.equal(scroll.offset, 150);
    assert.equal(scroll.canvasLeft, -100);
    assert.equal(scroll.getPos(), 50);
    
    scroll.reset(800);
    assert.equal(scroll.redraw, true);
    assert.equal(scroll.offset, 100);
    assert.equal(scroll.canvasLeft, 700);
    assert.equal(scroll.getPos(), 800);
});

QUnit.module( "LazyScroll" );

QUnit.test( "set", function( assert ) {

    var scroll = new LazyScroll();
    
    scroll.set(20, 30);
    assert.equal(scroll.offset.x, 20);
    assert.equal(scroll.offset.y, 30);
    assert.equal(scroll.slide.x, 0);
    assert.equal(scroll.slide.y, 0);
    assert.equal(scroll.getOrigin().x, 20);
    assert.equal(scroll.getOrigin().y, 30);

});

QUnit.test( "reset", function( assert ) {

    var scroll = new LazyScroll();
    
    scroll.set(20, 30);
    scroll.slide.x = 50;
    scroll.slide.y = 100;
    
    assert.equal(scroll.getOrigin().x, -30);
    assert.equal(scroll.getOrigin().y, -70);    
    
    scroll.reset();
    
    assert.equal(scroll.offset.x, -30);
    assert.equal(scroll.offset.y, -70);
    assert.equal(scroll.slide.x, 0);
    assert.equal(scroll.slide.y, 0);
    
    assert.equal(scroll.getOrigin().x, -30);
    assert.equal(scroll.getOrigin().y, -70);     

});

QUnit.module( "CanvasCache" );

function RenderFake() {
    this.id = 1;
    this.items = {};
    this.dirty = false;
    
    var self = this;
    
    this.makeDirty = function() {
        self.dirty = false;
    }
    
    function nextId() {
        self.id++;
        return self.id;
    }
    
    this.getFontHeight = function() {
        return 20;
    }
    
    this.measureTextWidth = function(text) {
        return text.length * 20;
    }
    
    this.createHorizontal = function(x, y, w, color, layer) {
        var id = nextId();
        
        var item = {
            id: id,
            x: x,
            y: y,
            w: w,
            color: color,
            layer: layer
        };
        
        this.items[id] = item;
        
        return id;
    }
    
    this.createVertical = function(x, y, h, color, layer) {
        var id = nextId();
        var item = {
            id: id,
            x: x,
            y: y,
            h: h,
            color: color,
            layer: layer
        };
        
        this.items[id] = item;
        
        return id;
    }
    
    this.moveItem = function(id, x, y) {

        var item = this.items[id];
        item.x = x;
        item.y = y;
    }
    
    this.deleteItem = function(id) {
        delete this.items[id];
    }
        
    this.createRectangle = function(x, y, w, h, back, fore, layer) {
        var id = nextId();
        var item = {
            id: id,
            x: x,
            y: y,
            w: w,
            h: h,
            back: back,
            fore: fore,
            layer: layer
        };

        this.items[id] = item;
        
        return id;
    }
    
	this.createIf = function(x, y, w, h, back, fore, layer) {
        var id = nextId();
        var item = {
            id: id,
            x: x,
            y: y,
            w: w,
            h: h,
            back: back,
            fore: fore,
            layer: layer
        };

        this.items[id] = item;
        
        return id;
	}
    
    
	this.createSelect = function(x, y, w, h, back, fore, layer) {
        var id = nextId();
        var item = {
            id: id,
            x: x,
            y: y,
            w: w,
            h: h,
            back: back,
            fore: fore,
            layer: layer
        };

        this.items[id] = item;
        
        return id;
	}
    
	this.createCase = function(x, y, w, h, back, fore, layer) {
        var id = nextId();
        var item = {
            id: id,
            x: x,
            y: y,
            w: w,
            h: h,
            back: back,
            fore: fore,
            layer: layer
        };

        this.items[id] = item;
        
        return id;
	}
    
	this.createBranch = function(x, y, w, h, back, fore, layer) {
        var id = nextId();
        var item = {
            id: id,
            x: x,
            y: y,
            w: w,
            h: h,
            back: back,
            fore: fore,
            layer: layer
        };

        this.items[id] = item;
        
        return id;
	}    

	this.createAddress = function(x, y, w, h, back, fore, layer) {
        var id = nextId();
        var item = {
            id: id,
            x: x,
            y: y,
            w: w,
            h: h,
            back: back,
            fore: fore,
            layer: layer
        };

        this.items[id] = item;
        
        return id;
	}    

    
	this.createLoopBegin = function(x, y, w, h, back, fore, layer) {
        var id = nextId();
        var item = {
            id: id,
            x: x,
            y: y,
            w: w,
            h: h,
            back: back,
            fore: fore,
            layer: layer
        };

        this.items[id] = item;
        
        return id;
	}    
    
	this.createLoopEnd = function(x, y, w, h, back, fore, layer) {
        var id = nextId();
        var item = {
            id: id,
            x: x,
            y: y,
            w: w,
            h: h,
            back: back,
            fore: fore,
            layer: layer
        };

        this.items[id] = item;
        
        return id;
	}      
    
    this.createBegin = function(x, y, w, h, back, fore, layer) {
        var id = nextId();
        var item = {
            id: id,
            x: x,
            y: y,
            w: w,
            h: h,
            back: back,
            fore: fore,
            layer: layer
        };

        this.items[id] = item;
        
        return id;
    }    
    
    this.createText = function(x, y, text, color, layer) {
        var id = nextId();
        var item = {
            x: x,
            y: y,
            text: text,
            color: color,
            layer: layer
        };
        this.items[id] = item;
        
        return id;
    }
    
    this.getOrigin = function() {
        return new Point(0, 0);
    }
    
    this.panTo = function(ox, oy) {
    }
    
    this.endPan = function() {}
    this.reset = function() {}
    this.redraw = function() {}
    this.setTitle = function() {}
    this.createCandy = function() { return 800; }
    this.setPan = function(ox, oy) { }
}


QUnit.test( "createTextBlock - empty - 0, 0", function( assert ) {
    var render = new RenderFake();
    
    var actual = createTextBlock(render, "", "left");
    var expected = { size: new Size(0, 0), fragments: [] };
    
    assert.deepEqual(actual, expected);
});


QUnit.test( "createTextBlock - one line", function( assert ) {
    var render = new RenderFake();
    
    var actual = createTextBlock(render, "hello", "left");
    var expected = { size: new Size(100, 20), fragments: [ { x:0, y:0, text:"hello" }] };
    
    assert.deepEqual(actual, expected);
});

QUnit.test( "createTextBlock - two lines", function( assert ) {
    var render = new RenderFake();
    
    var actual = createTextBlock(render, "hello\n  world!   ", "left");
    var expected = { size: new Size(160, 40), fragments: [
        { x:0, y:-10, text:"hello" },
        { x:0, y:10, text:"  world!" }
    ] };
    
    assert.deepEqual(actual, expected);
});

QUnit.test( "createTextBlock - two lines, center", function( assert ) {
    var render = new RenderFake();
    
    var actual = createTextBlock(render, "hello\n  world!   ", "center");
    var expected = { size: new Size(160, 40), fragments: [
        { x:-50, y:-10, text:"hello" },
        { x:-80, y:10, text:"  world!" }
    ] };
    
    assert.deepEqual(actual, expected);
});


QUnit.test( "insertCanvasItem - action", function( assert ) {
    
    var render = new RenderFake();
    var can = new CanvasCache(render);
    
    
    
    var node = {
        id: 30,
        type: "action",
        isLine: false,
        text: "hello\nworld",
        x: 10, y: 20,
        w: 25, h: 20
    };
    
    insertCanvasItem(can, node);
    
    var n = getNode(can.pgraph.graph, 30);
    assert.equal(n.x, 10);
    assert.equal(n.y, 20);
    assert.equal(n.id, 30);
    
    assert.equal(n.box.left, -15);
    assert.equal(n.box.right, 35);     
    assert.equal(n.box.top, 0);
    assert.equal(n.box.bottom, 40);   

    
    var rn = render.items[2];
    
    assert.equal(rn.x, 10);
    assert.equal(rn.y, 20);
    
    var t1 = render.items[3];
    var t2 = render.items[4];
    
    assert.equal(t1.x, -5);
    assert.equal(t1.y, 10);
    assert.equal(t2.x, -5);
    assert.equal(t2.y, 30);
    
    assert.equal(t1.text, "hello");
    assert.equal(t2.text, "world");
    
});

QUnit.test( "deleteCanvasItem", function( assert ) {
    
    var render = new RenderFake();
    var can = new CanvasCache(render);
    
    
    
    var node = {
        id: 30,
        type: "action",
        isLine: false,
        text: "hello\nworld",
        x: 10, y: 20,
        w: 25, h: 20
    };
    
    insertCanvasItem(can, node);
    
    var pnode = getNode(can.pgraph.graph, 30);
    assert.ok(pnode);
    var node = getNode(can.graph, 30);
    assert.ok(node);
    assert.ok(render.items[2]);
    assert.ok(render.items[3]);
    assert.ok(render.items[4]);
    
    deleteCanvasItem(can, 30);
    
    assert.equal(can.pgraph.graph.items[30], undefined);
    assert.equal(can.graph.items[30], undefined);
    assert.equal(render.items[2], undefined);
    assert.equal(render.items[3], undefined);
    assert.equal(render.items[4], undefined);
});

QUnit.test( "moveNode - action", function( assert ) {
    
    var render = new RenderFake();
    var can = new CanvasCache(render);
    
    
    
    var node = {
        id: 30,
        type: "action",
        isLine: false,
        text: "hello\nworld",
        x: 10, y: 20,
        w: 25, h: 20
    };
    
    insertCanvasItem(can, node);
    moveCanvasNode(can, 30, 100, 200);
    
    var n = getNode(can.graph, 30);
    
    assert.equal(n.x, 100);
    assert.equal(n.y, 200);
    assert.equal(n.id, 30);
    
    var rn = render.items[2];
    
    assert.equal(rn.x, 100);
    assert.equal(rn.y, 200);
    
    var t1 = render.items[3];
    var t2 = render.items[4];
    
    assert.equal(t1.x, 85);
    assert.equal(t1.y, 190);
    assert.equal(t2.x, 85);
    assert.equal(t2.y, 210);
    
});



QUnit.test( "insert - vertical", function( assert ) {
    
    var render = new RenderFake();
    var can = new CanvasCache(render);
    
    
    
    var node1 = {
        id: 30,
        type: "action",
        isLine: false,
        text: "hello\nworld",
        x: 10, y: 20,
        w: 25, h: 20
    };
    
    var node2 = {
        id: 40,
        type: "action",
        isLine: false,
        text: "bye\nworld",
        x: 10, y: 120,
        w: 25, h: 20
    };    
    
    insertCanvasItem(can, node1);
    insertCanvasItem(can, node2);
    
    var e1 = {
        id: 31,
        type: "vertical",
        isLine: true,
        isVertical: true,
        head: 30,
        tail: 40
    };

    insertCanvasItem(can, e1);
    
    var e = getEdge(can.pgraph.graph, 31);
    assert.equal(e.id, 31);
    assert.equal(e.head, 30);
    assert.equal(e.tail, 40);
    assert.equal(e.isLine, true);
    assert.equal(e.isVertical, true);
    
    var ec = getEdge(can.pgraph.graph, 31);
    assert.equal(e.id, 31);
    assert.equal(e.head, 30);
    assert.equal(e.tail, 40);
    assert.equal(e.isLine, true);
    assert.equal(e.isVertical, true);
    
    var r = render.items[render.id];
    assert.equal(r.x, 10);
    assert.equal(r.y, 20);
    assert.equal(r.h, 100);
});



QUnit.test( "updateEdge - vertical", function( assert ) {
    
    var render = new RenderFake();
    var can = new CanvasCache(render);
    
    
    
    var node1 = {
        id: 30,
        type: "action",
        isLine: false,
        text: "hello\nworld",
        x: 10, y: 20,
        w: 25, h: 20
    };
    
    var node2 = {
        id: 40,
        type: "action",
        isLine: false,
        text: "bye\nworld",
        x: 10, y: 120,
        w: 25, h: 20
    };    
    
    insertCanvasItem(can, node1);
    insertCanvasItem(can, node2);
    
    var e1 = {
        id: 31,
        type: "vertical",
        isLine: true,
        isVertical: true,
        head: 30,
        tail: 40
    };
    
    insertCanvasItem(can, e1);
    
    var oldId = render.id;
    
    moveCanvasNode(can, 30, 80, 500);
    moveCanvasNode(can, 40, 80, 550);
    updateCanvasEdge(can, 31, {});
    
    var oldR = render.items[oldId];
    
    assert.equal(oldR, undefined);
    
    
    var r = render.items[render.id];
    assert.equal(r.x, 80);
    assert.equal(r.y, 500);
    assert.equal(r.h, 50);
});

QUnit.module( "Items" );




QUnit.test( "calculateIconSize", function( assert ) {
    var old = Config.SIZE_SNAP;
    Config.SIZE_SNAP = 5;
    assert.equal(calculateIconSize(10, 22), 25);
    assert.equal(calculateIconSize(10, 20), 20);
    assert.equal(calculateIconSize(10, 30), 25);
	Config.SIZE_SNAP = old;
});

QUnit.test( "createNode - action", function( assert ) {

    var render = new RenderFake();
    var node = createNode(render, 888, "action", 1000, 2000, "hello", 0);
    assert.equal(node.id, 888);
    assert.equal(node.type, "action");
    assert.equal(node.isLine, false);
    assert.equal(node.isVertical, false);
    assert.equal(node.x, 1000);
    assert.equal(node.y, 2000);    
    assert.equal(node.w, 60);
    assert.equal(node.h, 20);
    assert.equal(node.text, "hello");
});

QUnit.test( "createNode - question", function( assert ) {
    var old = Config.SIZE_SNAP;
    Config.SIZE_SNAP = 5;
    var render = new RenderFake();
    var node = createNode(render, 888, "question", 1000, 2000, "hello\ndear", 1);
    assert.equal(node.id, 888);
    assert.equal(node.type, "question");
    assert.equal(node.isLine, false);
    assert.equal(node.isVertical, false);
    assert.equal(node.x, 1000);
    assert.equal(node.y, 2000);    
    assert.equal(node.w, 80);
    assert.equal(node.h, 30);
    assert.equal(node.text, "hello\ndear");
    assert.equal(node.flag1, 1);
	Config.SIZE_SNAP = old;    
});

QUnit.test( "createEdge - vertical", function( assert ) {

    var render = new RenderFake();
    var graph = new Manhattan();
    
    var node1 = createNode(render, 888, "question", 1000, 2000, "hello\ndear", 1);
    var node2 = createNode(render, 999, "action", 1000, 2100, "bye", 0);
    addItem(graph, node1);
    addItem(graph, node2);
    
    var edge = createEdge(render, 777, "vertical", 888, 999);
    assert.equal(edge.id, 777);
    assert.equal(edge.type, "vertical");
    assert.equal(edge.isLine, true);
    assert.equal(edge.isVertical, true);
    assert.equal(edge.head, 888);
    assert.equal(edge.tail, 999);
});

QUnit.test( "createEdge - horizontal", function( assert ) {

    var render = new RenderFake();
    var graph = new Manhattan();
    
    var node1 = createNode(render, 888, "question", 1000, 2000, "hello\ndear", 1);
    var node2 = createNode(render, 999, "action", 1100, 2000, "bye", 0);
    addItem(graph, node1);
    addItem(graph, node2);
    
    var edge = createEdge(render, 777, "horizontal", 888, 999);
    assert.equal(edge.id, 777);
    assert.equal(edge.type, "horizontal");
    assert.equal(edge.isLine, true);
    assert.equal(edge.isVertical, false);
    assert.equal(edge.head, 888);
    assert.equal(edge.tail, 999);
});

QUnit.module( "Undo" );

QUnit.test( "runItemInsert - do - insert", function(assert) {
    var man = new Manhattan();
    
    runItemInsert(man, { id: 10, exec: { isLine: false, x: 300, y: 1000 } }, false);
    runItemInsert(man, { id: 20, exec: { isLine: false, x: 300, y: 1100 } }, false);
    
    runItemInsert(man, { id: 11, exec: { isLine: true, isVertical: true, head: 10, tail: 20 } }, false);

    var n10 = getNode(man, 10);
    var n20 = getNode(man, 20);
    
    var e11 = getEdge(man, 11);
    
    assert.equal(n10.down, 11);
    assert.equal(n20.up, 11);
    assert.equal(e11.head, 10);
    assert.equal(e11.tail, 20);
});

QUnit.test( "runItemInsert - undo - delete", function(assert) {
    var man = new Manhattan();
    
    runItemInsert(man, { id: 10, exec: { isLine: false, x: 300, y: 1000 } }, false);
    runItemInsert(man, { id: 20, exec: { isLine: false, x: 300, y: 1100 } }, false);
    
    runItemInsert(man, { id: 11, exec: { isLine: true, isVertical: true, head: 10, tail: 20 } }, false);

    runItemInsert(man, { id: 11, exec: { isLine: true, isVertical: true, head: 10, tail: 20 } }, true);
    runItemInsert(man, { id: 20, exec: { isLine: false, x: 300, y: 1000 } }, true);
    runItemInsert(man, { id: 10, exec: { isLine: false, x: 300, y: 1100 } }, true);
    assert.equal(man.items[10], undefined);
    assert.equal(man.items[20], undefined);
    assert.equal(man.items[11], undefined);
});


QUnit.test( "runItemDelete - do - delete", function(assert) {
    var man = new Manhattan();
    
    runItemInsert(man, { id: 10, exec: { isLine: false, x: 300, y: 1000 } }, false);
    runItemInsert(man, { id: 20, exec: { isLine: false, x: 300, y: 1100 } }, false);
    runItemInsert(man, { id: 11, exec: { isLine: true, isVertical: true, head: 10, tail: 20 } }, false);
    
    assert.ok(getItem(man, 10));
    assert.ok(getItem(man, 20));
    assert.ok(getItem(man, 11));

    runItemDelete(man, { id: 11, undo: { isLine: true, isVertical: true, head: 10, tail: 20 } }, false);
    runItemDelete(man, { id: 20, undo: { isLine: false, x: 300, y: 1000 } }, false);
    runItemDelete(man, { id: 10, undo: { isLine: false, x: 300, y: 1100 } }, false);
    
    assert.equal(man.items[10], undefined);
    assert.equal(man.items[20], undefined);
    assert.equal(man.items[11], undefined);    
});

QUnit.test( "runItemDelete - undo - insert", function(assert) {
    var man = new Manhattan();
    
    assert.ok(true);

    runItemInsert(man, { id: 10, exec: { isLine: false, x: 300, y: 1000 } }, false);
    runItemInsert(man, { id: 20, exec: { isLine: false, x: 300, y: 1100 } }, false);
    runItemInsert(man, { id: 11, exec: { isLine: true, isVertical: true, head: 10, tail: 20 } }, false);
    

    runItemDelete(man, { id: 11 }, false);
    runItemDelete(man, { id: 20 }, false);
    runItemDelete(man, { id: 10 }, false);
 


    runItemDelete(man, { id: 10, undo: { isLine: false, x: 300, y: 1000 } }, true);
    runItemDelete(man, { id: 20, undo: { isLine: false, x: 300, y: 1100 } }, true);    
    runItemDelete(man, { id: 11, undo: { isLine: true, isVertical: true, head: 10, tail: 20 } }, true);
    
    var n10 = getNode(man, 10);
    var n20 = getNode(man, 20);
    
    var e11 = getEdge(man, 11);
    
    assert.equal(n10.down, 11);
    assert.equal(n20.up, 11);
    assert.equal(e11.head, 10);
    assert.equal(e11.tail, 20);
});


QUnit.test( "runNodeUpdate - do - change", function(assert) {
    var man = new Manhattan();
    
    runItemInsert(man, { id: 10, exec: { id: 10, isLine: false, x: 300, y: 1000 } }, false);
    
    runNodeUpdate(man, { 
            id: 10, 
            exec: { id: 10, x: 888, y: 777 }, 
            undo: { id: 10, x: 300, y: 1000 } 
        }, false);

    var n10 = getNode(man, 10);
    assert.equal(n10.x, 888);
    assert.equal(n10.y, 777);
});

QUnit.test( "runNodeUpdate - undo - reverse change", function(assert) {
    var man = new Manhattan();
    
    runItemInsert(man, { id: 10, exec: { id: 10, isLine: false, x: 300, y: 1000 } }, false);
    var command = { 
            id: 10, 
            exec: { id: 10, x: 888, y: 777 }, 
            undo: { id: 10, x: 300, y: 1000 } 
        };
    runNodeUpdate(man, command, false);

    var n10 = getNode(man, 10);
    assert.equal(n10.x, 888);
    assert.equal(n10.y, 777);
    
    runNodeUpdate(man, command, true);
    n10 = getNode(man, 10);
    assert.equal(n10.x, 300);
    assert.equal(n10.y, 1000);    
});

QUnit.test( "updateDiagram - do - rename", function(assert) {
    var storage = new Storage();
    storage.name = "old name";
    
    var command = { exec: { name: "new name" }, undo: { name: "old name" } };
    updateDiagram(storage, command, false);
    
    assert.equal(storage.name, "new name");
});

QUnit.test( "updateDiagram - undo - rename back", function(assert) {
    var storage = new Storage();
    storage.name = "old name";
    
    var command = { exec: { name: "new name" }, undo: { name: "old name" } };
    updateDiagram(storage, command, false);
    updateDiagram(storage, command, true);
    
    assert.equal(storage.name, "old name");
});

QUnit.test( "performChange - diagrams - rename", function(assert) {
    var storage = new Storage();
    storage.name = "old name";
    
    var command = { type: "update", table: "diagrams", exec: { name: "new name" }, undo: { name: "old name" } };
    performChange(storage, command, false);
    
    assert.equal(storage.name, "new name");
});

QUnit.test( "performChange - nodes - insert", function(assert) {
    var storage = new Storage();
    storage.name = "old name";
    
    var command = { type: "insert", table: "nodes", id: 10, exec: {  text: "hi" }, undo: {} };
    performChange(storage, command, false);
    
    var n10 = getNode(storage.graph, 10);
    assert.equal(n10.text, "hi");
});

QUnit.test( "performChange - nodes - update", function(assert) {
    var storage = new Storage();
    storage.name = "old name";
    
    var command = { type: "insert", table: "nodes", id: 10, exec: { text: "hi" }, undo: {} };
    performChange(storage, command, false);
    var command2 = { type: "update", table: "nodes", id: 10, exec: { text: "bye" }, undo: { text: "hi" } };
    performChange(storage, command2, false);    
    
    var n10 = getNode(storage.graph, 10);
    assert.equal(n10.text, "bye");
});

QUnit.test( "performChange - nodes - delete", function(assert) {
    var storage = new Storage();
    storage.name = "old name";
    
    var command = { type: "insert", table: "nodes", id: 10, exec: { text: "hi" }, undo: {} };
    performChange(storage, command, false);
    var command2 = { type: "delete", table: "nodes", id: 10, exec: { }, undo: { text: "hi" } };
    performChange(storage, command2, false);    
    
    assert.equal(storage.graph.nodes[10], undefined);
});

QUnit.test( "performChange - edges - insert", function(assert) {
    var storage = new Storage();
    storage.name = "old name";
    
    var command = { type: "insert", table: "nodes", id: 10, exec: { x: 10, y: 20 }, undo: {} };
    performChange(storage, command, false);
    var command2 = { type: "insert", table: "nodes", id: 20, exec: { x: 10, y: 80 }, undo: {} };
    performChange(storage, command2, false);
    
    var command3 = { type: "insert", table: "edges", id: 11, exec: { isLine: true, isVertical: true, head: 10, tail: 20 }, undo: {} };
    performChange(storage, command3, false);    
            
    var e = getEdge(storage.graph, 11);
    assert.equal(e.head, 10);
});

QUnit.test( "performChange - edges - delete", function(assert) {
    var storage = new Storage();
    storage.name = "old name";
    
    var command = { type: "insert", table: "nodes", id: 10,exec: {  x: 10, y: 20 }, undo: {} };
    performChange(storage, command, false);
    var command2 = { type: "insert", table: "nodes", id: 20, exec: {  x: 10, y: 80 }, undo: {} };
    performChange(storage, command2, false);
    
    var command3 = { type: "insert", table: "edges", id: 11, exec: { isLine: true, isVertical: true, head: 10, tail: 20 }, undo: {} };
    performChange(storage, command3, false);    
            
    var command4 = { type: "delete", table: "edges", id: 11 };
    performChange(storage, command4, false);             
            
    assert.equal(storage.graph.edges[11], undefined);
});


QUnit.test( "executeCommands", function(assert) {
    var editor = new Editor();


    
    editor.storage.name = "old name";
    editor.undo.initial = "s0";
    var commands1 = [
        {
            id: 10,
            type: "insert",
            table: "nodes",
            exec: { id: 10, x: 100, y: 200 }
        },
        
        {
            id: 20,
            type: "insert",
            table: "nodes",
            exec: { id: 20, x: 100, y: 400 }
        },
        {
            type: "update",
            table: "diagrams",
            exec: { name: "new name" }
        },
        {
            id: 11,
            type: "insert",
            table: "edges",
            exec: { id: 11, isLine: true, isVertical: true, head: 10, tail: 20 }
        }
    ];
    var step1 = {
        commands: commands1,
        after: "s1"
    };
    var commands2 = [
        {
            id: 10,
            type: "update",
            table: "nodes",
            exec: { id: 10, x: 400, y: 500 }
        },
        {
            id: 20,
            type: "update",
            table: "nodes",
            exec: { id: 20, x: 400, y: 800 }
        }
    ];
    var step2 = {
        commands: commands2,
        after: "s2"
    };    
    calculateUndo(editor.storage, commands1);
    executeCommands(editor, step1.commands, step1.after, false, false);
    
    var n10 = getNode(editor.storage.graph, 10);
    assert.equal(n10.x, 100);
    assert.equal(n10.y, 200);
    var n20 = getNode(editor.storage.graph, 20);
    assert.equal(n20.x, 100);
    assert.equal(n20.y, 400);    
    var e = getEdge(editor.storage.graph, 11);
    assert.equal(e.head, 10);
    assert.equal(e.tail, 20);
    assert.equal(editor.storage.name, "new name");
    
    calculateUndo(editor.storage, commands2);
    executeCommands(editor, step2.commands, step2.after, false, false);    
    n10 = getNode(editor.storage.graph, 10);
    assert.equal(n10.x, 400);
    assert.equal(n10.y, 500); 
    n20 = getNode(editor.storage.graph, 20);
    assert.equal(n20.x, 400);
    assert.equal(n20.y, 800);       
    var commands3 = [
        {
            id: 11,
            type: "delete",
            table: "edges"
        },    
        {
            id: 10,
            type: "delete",
            table: "nodes"
        },
        {
            id: 20,
            type: "delete",
            table: "nodes"
        }
    ];
    var step3 = {
        commands: commands3,
        after: "s3"
    };     
    calculateUndo(editor.storage, commands3);
    executeCommands(editor, step3.commands, step3.after, false, false);
    
    assert.equal(editor.storage.graph.items[11], undefined);   
    assert.equal(editor.storage.graph.items[10], undefined);
    assert.equal(editor.storage.graph.items[20], undefined);
    
    executeCommands(editor, step3.commands, step2.after, true, false);
    n10 = getNode(editor.storage.graph, 10);
    assert.equal(n10.x, 400);
    assert.equal(n10.y, 500); 
    n20 = getNode(editor.storage.graph, 20);
    assert.equal(n20.x, 400);
    assert.equal(n20.y, 800);     
    e = getEdge(editor.storage.graph, 11);
    assert.equal(e.head, 10);
    assert.equal(e.tail, 20);
    
    executeCommands(editor, step2.commands, step1.after, true, false);
    n10 = getNode(editor.storage.graph, 10);
    assert.equal(n10.x, 100);
    assert.equal(n10.y, 200); 
    n20 = getNode(editor.storage.graph, 20);
    assert.equal(n20.x, 100);
    assert.equal(n20.y, 400);     

    executeCommands(editor, step1.commands, editor.undo.initial, true, false);
    assert.equal(editor.storage.graph.items[11], undefined);   
    assert.equal(editor.storage.graph.items[10], undefined);
    assert.equal(editor.storage.graph.items[20], undefined);
    
    assert.equal(editor.storage.name, "old name");

});
/*
QUnit.test( "performRedo - empty - no action", function(assert) {
    var editor = new Editor();
    var old = executeCommands;
    executeCommands = function() {
        assert.ok(false);
    }
    
    performRedo(editor);
    
    executeCommands = old;
    
    assert.ok(true);
});

QUnit.test( "performUndo - empty - no action", function(assert) {
    var editor = new Editor();
    var old = executeCommands;
    executeCommands = function() {
        assert.ok(false);
    }
    
    performUndo(editor);
    
    executeCommands = old;
    assert.ok(true);
});

QUnit.test( "performUndo - performRedo - one action", function(assert) {
    var editor = new Editor();
    startFake(cli);
    
    expect(assert, "executeCommands", [editor, "command1", "s1", false, false]);
    expect(assert, "executeCommands", [editor, "command1", "s0", true, true]);
    expect(assert, "executeCommands", [editor, "command1", "s1", false, true]);
    expect(assert, "executeCommands", [editor, "command1", "s0", true, true]);
    expect(assert, "executeCommands", [editor, "command1", "s1", false, true]);    
    
    runAndSaveCommands(editor, "s0", "command1", "s1", false);
    
    performUndo(editor);
    performRedo(editor);
    performUndo(editor);
    performRedo(editor);
        
    endFake(assert);
});

QUnit.test( "performUndo - performRedo - 3 actions", function(assert) {
    var editor = new Editor();
    editor.undo.initial = "s0";
    startFake(window);
    
    expect(assert, "executeCommands", [editor, "command1", "s1", false, false]);
    expect(assert, "executeCommands", [editor, "command2", "s2", false, false]);
    expect(assert, "executeCommands", [editor, "command3", "s3", false, false]);
    expect(assert, "executeCommands", [editor, "command3", "s2-", true, true]);
    expect(assert, "executeCommands", [editor, "command2", "s1-", true, true]);
    expect(assert, "executeCommands", [editor, "command1", "s0-", true, true]);
    
    expect(assert, "executeCommands", [editor, "command1", "s1", false, true]);
    expect(assert, "executeCommands", [editor, "command2", "s2", false, true]);
    expect(assert, "executeCommands", [editor, "command3", "s3", false, true]);

    
    runAndSaveCommands(editor, "s0-", "command1", "s1", false);
    runAndSaveCommands(editor, "s1-", "command2", "s2", false);
    runAndSaveCommands(editor, "s2-", "command3", "s3", false);
    
    performUndo(editor);
    performUndo(editor);
    performUndo(editor);
    performUndo(editor);
    
    performRedo(editor);
    performRedo(editor);
    performRedo(editor);
    performRedo(editor);

        
    endFake(assert);
});


QUnit.test( "performUndo - performRedo - 3 actions - partial undo", function(assert) {
    var editor = new Editor();
    
    startFake(window);
    
    expect(assert, "executeCommands", [editor, "command1", "s1", false, false]);
    expect(assert, "executeCommands", [editor, "command2", "s2", false, false]);
    expect(assert, "executeCommands", [editor, "command3", "s3", false, false]);
    expect(assert, "executeCommands", [editor, "command3", "s2-", true, true]);
    expect(assert, "executeCommands", [editor, "command2", "s1-", true, true]);


    expect(assert, "executeCommands", [editor, "command2", "s2", false, true]);
    expect(assert, "executeCommands", [editor, "command3", "s3", false, true]);

    
    runAndSaveCommands(editor, "s0-", "command1", "s1", false);
    runAndSaveCommands(editor, "s1-", "command2", "s2", false);
    runAndSaveCommands(editor, "s2-", "command3", "s3", false);
    
    performUndo(editor);
    performUndo(editor);
  
    
    performRedo(editor);
    performRedo(editor);
    performRedo(editor);
    performRedo(editor);

        
    endFake(assert);
});

QUnit.test( "performUndo - performRedo - partial undo - do", function(assert) {
    var editor = new Editor();
    startFake(window);
    
    expect(assert, "executeCommands", [editor, "command1", "s1", false, false]);
    expect(assert, "executeCommands", [editor, "command2", "s2", false, false]);
    expect(assert, "executeCommands", [editor, "command3", "s3", false, false]);
    
    expect(assert, "executeCommands", [editor, "command3", "s2-", true, true]);
    
    expect(assert, "executeCommands", [editor, "command4", "s4", false, false]);
    expect(assert, "executeCommands", [editor, "command5", "s5", false, false]);
    
    expect(assert, "executeCommands", [editor, "command5", "s4-", true, true]); 
    expect(assert, "executeCommands", [editor, "command4", "s2-", true, true]);
    expect(assert, "executeCommands", [editor, "command2", "s1-", true, true]);
    expect(assert, "executeCommands", [editor, "command1", "s0-", true, true]);
    
    expect(assert, "executeCommands", [editor, "command1", "s1", false, true]);
    expect(assert, "executeCommands", [editor, "command2", "s2", false, true]);
    expect(assert, "executeCommands", [editor, "command4", "s4", false, true]);
    expect(assert, "executeCommands", [editor, "command5", "s5", false, true]);

    
    runAndSaveCommands(editor, "s0-", "command1", "s1", false);
    runAndSaveCommands(editor, "s1-", "command2", "s2", false);
    runAndSaveCommands(editor, "s2-", "command3", "s3", false);
    
    performUndo(editor);

    runAndSaveCommands(editor, "s2-", "command4", "s4", false);
    runAndSaveCommands(editor, "s4-", "command5", "s5", false);
  
    
    performUndo(editor);
    performUndo(editor);
    performUndo(editor);
    performUndo(editor);
    performUndo(editor);
    
    performRedo(editor);
    performRedo(editor);
    performRedo(editor);
    performRedo(editor);
    performRedo(editor);

        
    endFake(assert);
});

function Moo() {
    this.mul = function(x, y) { return x * y; }
    this.add = function(x, y) { return x + y; }
    
    this.hey = function(a, b) {

        var x = this.mul(a, b);
        var y = this.add(b, a);
        return x + y;
    }
}

QUnit.test( "performUndo - performRedo - partial undo - do", function(assert) {
    var math = new Moo();
    startFake(math);
    expect(assert, "mul", [5, 10], 50);
    expect(assert, "add", [10, 5], 15);
    assert.ok(math.hey(5, 10), 65);
    endFake(assert);
    
});
*/
QUnit.module( "Clicker" );

QUnit.test( "idle - mouseDown - probation", function(assert) {
    var target = {};
    var clicker = createClicker(target, null);
    startFake(target);
    expect(assert, "setTimeout", [clicker, 300])
    clicker.setTimeout = target.setTimeout;
    
    clicker.mouseDown({x: 20, y: 40});
    endFake(assert);
    assert.equal(clicker.state.state_name, "probation");
});

QUnit.test( "idle - mouseMove - idle", function(assert) {
    var target = {};
    var clicker = createClicker(target, null);
    
    clicker.mouseMove(null);
    assert.equal(clicker.state.state_name, "idle");
});

QUnit.test( "idle - mouseUp - idle", function(assert) {
    var target = {};
    var clicker = createClicker(target, null);
    
    clicker.mouseUp(null);
    assert.equal(clicker.state.state_name, "idle");
});

QUnit.test( "probation - mouseDown - idle", function(assert) {
    var target = {};
    var clicker = createClicker(target, null);
    clicker.state = Clicker_state_probation;
    clicker.mouseDown({x: 20, y: 40});
    assert.equal(clicker.state.state_name, "idle");
});

QUnit.test( "probation - mouseMove (big) - moving", function(assert) {
    var target = {};
    var clicker = createClicker(target, null);
    startFake(target);
    expect(assert, "setTimeout", [clicker, 300])
    expect(assert, "mouseDown", [{x: 20, y: 40}])
    expect(assert, "mouseMove", [{x: -80, y: -160, dx:-100, dy:-200}])
    clicker.setTimeout = target.setTimeout;
    
    clicker.mouseDown({x: 20, y: 40});
    assert.equal(clicker.state.state_name, "probation");
    clicker.mouseMove({x: -80, y: -160, dx:-100, dy:-200});
    assert.equal(clicker.state.state_name, "moving");
    endFake(assert);
});

QUnit.test( "probation - mouseMove (small) - probation", function(assert) {
    var target = {};
    var clicker = createClicker(target, null);
    startFake(target);
    expect(assert, "setTimeout", [clicker, 300])
    clicker.setTimeout = target.setTimeout;
    
    clicker.mouseDown({x: 20, y: 40});
    assert.equal(clicker.state.state_name, "probation");
    clicker.mouseMove({x: 21, y: 42, dx:1, dy:2});
    assert.equal(clicker.state.state_name, "probation");
    assert.equal(clicker.moved.x, 1);
    assert.equal(clicker.moved.y, 2);
    assert.equal(clicker.current.x, 21);
    assert.equal(clicker.current.y, 42);
    endFake(assert);
});

QUnit.test( "probation - mouseMove (over threshold) - moving", function(assert) {
    var target = {};
    var clicker = createClicker(target, null);
    startFake(target);
    expect(assert, "setTimeout", [clicker, 300]);
    expect(assert, "mouseDown", [{x: 20, y: 40}])
    expect(assert, "mouseMove", [{x: 22, y: 44, dx:2, dy:4}])    
    clicker.setTimeout = target.setTimeout;
    
    clicker.mouseDown({x: 20, y: 40});
    assert.equal(clicker.state.state_name, "probation");
    clicker.mouseMove({x: 21, y: 42, dx:1, dy:2});
    assert.equal(clicker.state.state_name, "probation");
    clicker.mouseMove({x: 22, y: 44, dx:1, dy:2});
    assert.equal(clicker.state.state_name, "moving");
    endFake(assert);
});

QUnit.test( "probation - timeout - moving", function(assert) {
    var target = {};
    var clicker = createClicker(target, null);
    startFake(target);
    expect(assert, "setTimeout", [clicker, 300]);
    expect(assert, "mouseDown", [{x: 20, y: 40}])
    expect(assert, "mouseMove", [{x: 21, y: 42, dx:1, dy:2}])    
    clicker.setTimeout = target.setTimeout;
    
    clicker.mouseDown({x: 20, y: 40});
    assert.equal(clicker.state.state_name, "probation");
    clicker.mouseMove({x: 21, y: 42, dx:1, dy:2});
    assert.equal(clicker.state.state_name, "probation");
    clicker.timeout();
    assert.equal(clicker.state.state_name, "moving");
    endFake(assert);
});

QUnit.test( "probation - mouseUp - click", function(assert) {
	var aux = { oldItem: 10 };
    var target = {
        setTimeout: function() { },
        mouseDown: function() { },
        mouseMove: function() { },
        mouseUp: function() {  }
    };
    var clicker = createClicker(target, null);

    startFake(target);
    expect(assert, "setTimeout", [clicker, 300]);
    expect(assert, "click", [20, 40, aux]);
    expect(assert, "setTimeout", [clicker, 300]);
    clicker.setTimeout = target.setTimeout;
    
    clicker.mouseDown({x: 20, y: 40, aux: aux});
    assert.equal(clicker.state.state_name, "probation");
    clicker.mouseMove({x: 21, y: 42, dx:1, dy:2});
    assert.equal(clicker.state.state_name, "probation");
    clicker.mouseUp({x: 400, y: 500});
    assert.equal(clicker.state.state_name, "afterClick");
    endFake(assert);
});

QUnit.test( "moving - mouseDown - moving", function(assert) {
    var target = {};
    var clicker = createClicker(target, null);
    clicker.state = Clicker_state_moving;
    
    clicker.mouseDown({x: 20, y: 40});
    assert.equal(clicker.state.state_name, "moving");
});

QUnit.test( "moving - mouseMove - resend, moving", function(assert) {
    var target = {};
    var clicker = createClicker(target, null);
    clicker.state = Clicker_state_moving;
    var message = {
        x: 10,
        y: 20,
        dx: 30,
        dy: 40
    };
    startFake(target);
    expect(assert, "mouseMove", [message]);
    
    clicker.mouseMove(message);
    
    endFake(assert);
    assert.equal(clicker.state.state_name, "moving");
});

QUnit.test( "moving - mouseUp - resend, idle", function(assert) {
    var target = {};
    var clicker = createClicker(target, null);
    clicker.state = Clicker_state_moving;
    var message = {
        x: 10,
        y: 20
    };
    startFake(target);
    expect(assert, "mouseUp", [message]);
    
    clicker.mouseUp(message);
    
    endFake(assert);
    assert.equal(clicker.state.state_name, "idle");
});

QUnit.test( "afterClick - mouseDown - double click, idle", function(assert) {
    var target = {};
    var clicker = createClicker(target, null);
    clicker.state = Clicker_state_afterClick;
    clicker.start = new Point(10, 20);

    startFake(target);
    expect(assert, "doubleClick", [10, 20]);
    
    clicker.mouseDown({x: 100, y: 200});
    
    endFake(assert);
    assert.equal(clicker.state.state_name, "idle");
});

QUnit.test( "afterClick - timeout - idle", function(assert) {
    var target = {};
    var clicker = createClicker(target, null);
    clicker.state = Clicker_state_afterClick;
    
    clicker.timeout();
    assert.equal(clicker.state.state_name, "idle");
});

QUnit.test( "afterClick - mouseMove - afterClick", function(assert) {
    var target = {};
    var clicker = createClicker(target, null);
    clicker.state = Clicker_state_afterClick;
    
    clicker.mouseMove();
    assert.equal(clicker.state.state_name, "afterClick");
});

/*
QUnit.test( "afterClick - mouseUp - afterClick", function(assert) {
    var target = {};
    var clicker = createClicker(target, null);
    clicker.state = Clicker_state_afterClick;
    
    clicker.mouseUp();
    assert.equal(clicker.state.state_name, "afterClick");
});

QUnit.test( "onCanvasClick - no item - deselect", function(assert) {
    var editor = "editor";
    startFake(window);
    expect(assert, "findVisualItem", [editor, 100, 200], null );
    expect(assert, "deselectAll", [editor]);
    expect(assert, "redrawCanvas", [editor]);
    var result = onCanvasClick(editor, 100, 200);
    assert.equal(result.menu, null);
    endFake(assert);
});

QUnit.test( "onCanvasClick - found selected item - build menu", function(assert) {
    var editor = "editor";
    startFake(window);
    expect(assert, "findVisualItem", [editor, 100, 200], 14 );
    expect(assert, "isItemSelected", [editor, 14], true );
    expect(assert, "buildMenuForItem", [editor, 14], "menu");
    var result = onCanvasClick(editor, 100, 200);
    assert.equal(result.menu, "menu");
    endFake(assert);
});

QUnit.test( "onCanvasClick - found not selected item - deselect, select", function(assert) {
    var editor = "editor";
    startFake(window);
    expect(assert, "findVisualItem", [editor, 100, 200], 14 );
    expect(assert, "isItemSelected", [editor, 14], false );
    expect(assert, "deselectAll", [editor] );
    expect(assert, "selectItem", [editor, 14] );
    expect(assert, "redrawCanvas", [editor] );
    expect(assert, "buildMenuForItem", [editor, 14], "menu");
    var result = onCanvasClick(editor, 100, 200);
    assert.equal(result.menu, "menu");
    endFake(assert);
});
*/

QUnit.module( "Change text" );


function make9xDiagram(editor, type21, type22) {
    var n11 = {
        id: 10011,
        type: "action",
        x: 0,
        y: 0,
        w: 30,
        h: 20,
        isLine: false,
        isVertical: false
    };
    
    var n21 = {
        id: 10021,
        type: type21,
        x: 70,
        y: 0,
        w: 30,
        h: 20,
        isLine: false,
        isVertical: false
    };
    
    var n31 = {
        id: 10031,
        type: "action",
        x: 140,
        y: 0,
        w: 30,
        h: 20,
        isLine: false,
        isVertical: false
    };
    
    var n12 = {
        id: 10012,
        type: "action",
        x: 0,
        y: 50,
        w: 30,
        h: 20,
        isLine: false,
        isVertical: false
    };
    
    var n22 = {
        id: 10022,
        type: type22,
        x: 70,
        y: 50,
        w: 30,
        h: 20,
        isLine: false,
        isVertical: false
    };
    
    var n32 = {
        id: 10032,
        type: "action",
        x: 140,
        y: 50,
        w: 30,
        h: 20,
        isLine: false,
        isVertical: false
    };    

    var n13 = {
        id: 10013,
        type: "action",
        x: 0,
        y: 100,
        w: 30,
        h: 20,
        isLine: false,
        isVertical: false
    };
    
    var n23 = {
        id: 10023,
        type: "action",
        x: 70,
        y: 100,
        w: 30,
        h: 20,
        isLine: false,
        isVertical: false
    };
    
    var n33 = {
        id: 10033,
        type: "action",
        x: 140,
        y: 100,
        w: 30,
        h: 20,
        isLine: false,
        isVertical: false
    };
    
    addItem(editor.storage.graph, n11);
    addItem(editor.storage.graph, n21);
    addItem(editor.storage.graph, n31);
    addItem(editor.storage.graph, n12);
    addItem(editor.storage.graph, n22);
    addItem(editor.storage.graph, n32);
    addItem(editor.storage.graph, n13);
    addItem(editor.storage.graph, n23);
    addItem(editor.storage.graph, n33);
    
    addItem(editor.storage.graph, {
        id: 11121,
        type: "horizontal",
        isLine: true,
        isVertical: false,
        head: 10011,
        tail: 10021
    });
    addItem(editor.storage.graph, {
        id: 12131,
        type: "horizontal",
        isLine: true,
        isVertical: false,
        head: 10021,
        tail: 10031
    });

    addItem(editor.storage.graph, {
        id: 11112,
        type: "vertical",
        isLine: true,
        isVertical: true,
        head: 10011,
        tail: 10012
    });
    addItem(editor.storage.graph, {
        id: 12122,
        type: "vertical",
        isLine: true,
        isVertical: true,
        head: 10021,
        tail: 10022
    });
    addItem(editor.storage.graph, {
        id: 13132,
        type: "vertical",
        isLine: true,
        isVertical: true,
        head: 10031,
        tail: 10032
    });
    
    addItem(editor.storage.graph, {
        id: 11213,
        type: "vertical",
        isLine: true,
        isVertical: true,
        head: 10012,
        tail: 10013
    });
    addItem(editor.storage.graph, {
        id: 12223,
        type: "vertical",
        isLine: true,
        isVertical: true,
        head: 10022,
        tail: 10023
    });
    addItem(editor.storage.graph, {
        id: 13233,
        type: "vertical",
        isLine: true,
        isVertical: true,
        head: 10032,
        tail: 10033
    });
    
    addItem(editor.storage.graph, {
        id: 11222,
        type: "horizontal",
        isLine: true,
        isVertical: false,
        head: 10012,
        tail: 10022
    });
    addItem(editor.storage.graph, {
        id: 12232,
        type: "horizontal",
        isLine: true,
        isVertical: false,
        head: 10022,
        tail: 10032
    });
    
    
    addItem(editor.storage.graph, {
        id: 11323,
        type: "horizontal",
        isLine: true,
        isVertical: false,
        head: 10013,
        tail: 10023
    });
    addItem(editor.storage.graph, {
        id: 12333,
        type: "horizontal",
        isLine: true,
        isVertical: false,
        head: 10023,
        tail: 10033
    });
}

function checkItemPos(assert, editor, id, x, y) {
    var actual = getItem(editor.storage.graph, id);
    assert.equal(actual.x, x);
    assert.equal(actual.y, y);
}
function checkItemSize(assert, editor, id, w, h) {
    var actual = getItem(editor.storage.graph, id);
    assert.equal(actual.w, w);
    assert.equal(actual.h, h);
}

QUnit.test( "expand: change whole skewer, push left, right, down", function(assert) {
    var persistence = null;
    var render = new RenderFake();
    var editor = new Editor(render, persistence);
    
    var oldFit = itemCallbacks.action.fit;
    itemCallbacks.action.fit = function(item, render) {
        if (item.id === 10022) {
            return new Size(100, 40);
        } else {
            return new Size(30, 20);
        }
    }

    make9xDiagram(editor, "action", "action");
    
    setItemText(editor, 10022, "hello");
    
    checkItemPos(assert, editor, 10011, -70, 0);
    checkItemPos(assert, editor, 10021,  70, 0);
    checkItemPos(assert, editor, 10031, 210, 0);
    checkItemPos(assert, editor, 10012, -70, 70);
    checkItemPos(assert, editor, 10022,  70, 70);
    checkItemPos(assert, editor, 10032, 210, 70);
    checkItemPos(assert, editor, 10013, -70, 140);
    checkItemPos(assert, editor, 10023,  70, 140);
    checkItemPos(assert, editor, 10033, 210, 140);
    
    checkItemSize(assert, editor, 10011, 30, 20);
    checkItemSize(assert, editor, 10021,  100, 20);
    checkItemSize(assert, editor, 10031, 30, 20);
    checkItemSize(assert, editor, 10012, 30, 20);
    checkItemSize(assert, editor, 10022,  100, 40);
    checkItemSize(assert, editor, 10032, 30, 20);
    checkItemSize(assert, editor, 10013, 30, 20);
    checkItemSize(assert, editor, 10023,  100, 20);
    checkItemSize(assert, editor, 10033, 30, 20);
    
    var item = getItem(editor.storage.graph, 10022);
    assert.equal(item.text, "hello");
    
    itemCallbacks.action.fit = oldFit;
});

/*
QUnit.test( "shrink: change whole skewer, nothing more", function(assert) {
    var persistence = null;
    var render = new RenderFake();
    var editor = new Editor(render, persistence);
    
    var oldFit = itemCallbacks.action.fit;
    itemCallbacks.action.fit = function(item, render) {
        if (item.id === 10022) {
            return new Size(100, 40);
        } else {
            return new Size(30, 20);
        }
    }

    make9xDiagram(editor, "action", "action");
    
    setItemText(editor, 10022, "hello");
    
    itemCallbacks.action.fit = function(item, render) {
        if (item.id === 10022) {
            return new Size(5, 5);
        } else {
            return new Size(30, 20);
        }
    }
    
    setItemText(editor, 10022, "bye");
    
    
    checkItemPos(assert, editor, 10011, -70, 0);
    checkItemPos(assert, editor, 10021,  70, 0);
    checkItemPos(assert, editor, 10031, 210, 0);
    checkItemPos(assert, editor, 10012, -70, 70);
    checkItemPos(assert, editor, 10022,  70, 70);
    checkItemPos(assert, editor, 10032, 210, 70);
    checkItemPos(assert, editor, 10013, -70, 140);
    checkItemPos(assert, editor, 10023,  70, 140);
    checkItemPos(assert, editor, 10033, 210, 140);
    
    checkItemSize(assert, editor, 10011, 30, 20);
    checkItemSize(assert, editor, 10021,  30, 20);
    checkItemSize(assert, editor, 10031, 30, 20);
    checkItemSize(assert, editor, 10012, 30, 20);
    checkItemSize(assert, editor, 10022,  30, 5);
    checkItemSize(assert, editor, 10032, 30, 20);
    checkItemSize(assert, editor, 10013, 30, 20);
    checkItemSize(assert, editor, 10023,  30, 20);
    checkItemSize(assert, editor, 10033, 30, 20);    
    
    itemCallbacks.action.fit = oldFit;
});
*/

QUnit.test( "expand header: change only icon, push left, right, down", function(assert) {
    var persistence = null;
    var render = new RenderFake();
    var editor = new Editor(render, persistence);
    
    var oldActionFit = itemCallbacks.action.fit;
    var oldBeginendFit = itemCallbacks.beginend.fit;
    
    itemCallbacks.action.fit = function(item, render) {
        if (item.id === 10022) {
            return new Size(100, 40);
        } else {
            return new Size(30, 20);
        }
    }
    itemCallbacks.beginend.fit = itemCallbacks.action.fit;

    make9xDiagram(editor, "action", "beginend");
    
    setItemText(editor, 10022, "hello");
    
    checkItemPos(assert, editor, 10011, -70, 0);
    checkItemPos(assert, editor, 10021,  70, 0);
    checkItemPos(assert, editor, 10031, 210, 0);
    checkItemPos(assert, editor, 10012, -70, 70);
    checkItemPos(assert, editor, 10022,  70, 70);
    checkItemPos(assert, editor, 10032, 210, 70);
    checkItemPos(assert, editor, 10013, -70, 140);
    checkItemPos(assert, editor, 10023,  70, 140);
    checkItemPos(assert, editor, 10033, 210, 140);

    checkItemSize(assert, editor, 10011, 30, 20);
    checkItemSize(assert, editor, 10021,  30, 20);
    checkItemSize(assert, editor, 10031, 30, 20);
    checkItemSize(assert, editor, 10012, 30, 20);
    checkItemSize(assert, editor, 10022,  100, 40);
    checkItemSize(assert, editor, 10032, 30, 20);
    checkItemSize(assert, editor, 10013, 30, 20);
    checkItemSize(assert, editor, 10023,  30, 20);
    checkItemSize(assert, editor, 10033, 30, 20);

    
    itemCallbacks.action.fit = oldActionFit;
    itemCallbacks.beginend.fit = oldBeginendFit;   
});

QUnit.test( "expand action: header not changed", function(assert) {
    var persistence = null;
    var render = new RenderFake();
    var editor = new Editor(render, persistence);
    
    var oldActionFit = itemCallbacks.action.fit;
    var oldBeginendFit = itemCallbacks.beginend.fit;
    
    itemCallbacks.action.fit = function(item, render) {
        if (item.id === 10022) {
            return new Size(100, 40);
        } else {
            return new Size(30, 20);
        }
    }
    itemCallbacks.beginend.fit = itemCallbacks.action.fit;

    make9xDiagram(editor, "beginend", "action");
    
    setItemText(editor, 10022, "hello");
    
    checkItemPos(assert, editor, 10011, -70, 0);
    checkItemPos(assert, editor, 10021,  70, 0);
    checkItemPos(assert, editor, 10031, 210, 0);
    checkItemPos(assert, editor, 10012, -70, 70);
    checkItemPos(assert, editor, 10022,  70, 70);
    checkItemPos(assert, editor, 10032, 210, 70);
    checkItemPos(assert, editor, 10013, -70, 140);
    checkItemPos(assert, editor, 10023,  70, 140);
    checkItemPos(assert, editor, 10033, 210, 140);

    checkItemSize(assert, editor, 10011, 30, 20);
    checkItemSize(assert, editor, 10021,  30, 20);
    checkItemSize(assert, editor, 10031, 30, 20);
    checkItemSize(assert, editor, 10012, 30, 20);
    checkItemSize(assert, editor, 10022,  100, 40);
    checkItemSize(assert, editor, 10032, 30, 20);
    checkItemSize(assert, editor, 10013, 30, 20);
    checkItemSize(assert, editor, 10023,  100, 20);
    checkItemSize(assert, editor, 10033, 30, 20);

    
    itemCallbacks.action.fit = oldActionFit;
    itemCallbacks.beginend.fit = oldBeginendFit;   
});


QUnit.test( "deleteSimpleItem", function(assert) {
    var persistence = null;
    var render = new RenderFake();
    var editor = new Editor(render, persistence);
    
    var oldActionFit = itemCallbacks.action.fit;
    
    itemCallbacks.action.fit = function(item, render) {
    	return new Size(30, 20);
    }
    
    var top = {
    	id: 100,
    	type: "action",
    	text: "top",
    	x: 0,
    	y: 0,
    	w: 100,
    	h: 30
    };

    var middle = {
    	id: 200,
    	type: "action",
    	text: "top",
    	x: 0,
    	y: 100,
    	w: 100,
    	h: 30    	
    };
    
	var bottom = {
    	id: 300,
    	type: "action",
    	text: "top",
    	x: 0,
    	y: 200,	
    	w: 100,
    	h: 30    	
    };
    
    var upper = {
    	id: 312,
    	type: "vertical",
    	isVertical: true,
    	head: 100,
    	tail: 200,
    	role: "down"
    };

    var lower = {
    	id: 323,
    	type: "vertical",
    	isVertical: true,
    	head: 200,
    	tail: 300,
    	role: "down"
    };
    
    var diagram = {
    	name: "test",
    	nodes: {},
    	edges: {},
    	selection: {}
    };
    

    diagram.nodes[top.id] = top;
    diagram.nodes[middle.id] = middle;
    diagram.nodes[bottom.id] = bottom;
    diagram.edges[upper.id] = upper;
    diagram.edges[lower.id] = lower;
    
    loadDiagram(editor, diagram);

    editor.storage.selection[middle.id] = true;
    
    deleteItem(editor, 200);
    
    var top2 = getItem(editor.storage.graph, 100);
    var bottom2 = getItem(editor.storage.graph, 300);
    assert.equal(editor.storage.graph.items[200], undefined);
    var edge2 = getItem(editor.storage.graph, top2.down);
    assert.equal(edge2.head, 100);
    assert.equal(edge2.tail, 300);
    assert.equal(top2.w, 30);
    assert.equal(bottom2.w, 30);
        
    itemCallbacks.action.fit = oldActionFit;    
});

function addTestNode(diagram, id, type, text, x, y, w, h) {
    var node = {
        id: id,
        type: type,
        isLine: false,
        text: text,
        x: x,
        y: y,
        w: w,
        h: h
    };
    
    diagram.nodes[id] = node;
}

function addTestVEdge(diagram, id, head, tail) {
    var edge = {
        id: id,
        type: "vertical",
        isLine: true,
        isVertical: true,
        head: head,
        tail: tail
    };
    
    diagram.edges[id] = edge;
}

function addTestHEdge(diagram, id, head, tail) {
    var edge = {
        id: id,
        type: "horizontal",
        isLine: true,
        isVertical: false,
        head: head,
        tail: tail
    };
    
    diagram.edges[id] = edge;
}




QUnit.module( "WheelSnapper" );

QUnit.test( "positive", function( assert ) {
	var snapper = new WheelSnapper();
	var actual;
	actual = snapper.wheel(25, 20);
	assert.deepEqual(actual, new Point(0, 0));
	actual = snapper.wheel(30, 5);
	assert.deepEqual(actual, new Point(55, 0));
	actual = snapper.wheel(20, 20);
	assert.deepEqual(actual, new Point(0, 45));
	actual = snapper.wheel(200, 25);
	assert.deepEqual(actual, new Point(220, 0));
	actual = snapper.wheel(0, 5);
	assert.deepEqual(actual, new Point(0, 30));	
});

QUnit.test( "negative", function( assert ) {
	var snapper = new WheelSnapper();
	var actual;
	actual = snapper.wheel(-25, -20);
	assert.deepEqual(actual, new Point(0, 0));
	actual = snapper.wheel(-30, -5);
	assert.deepEqual(actual, new Point(-55, 0));
	actual = snapper.wheel(-20, -20);
	assert.deepEqual(actual, new Point(0, -45));
	actual = snapper.wheel(-200, -25);
	assert.deepEqual(actual, new Point(-220, 0));
	actual = snapper.wheel(0, -5);
	assert.deepEqual(actual, new Point(0, -30));
});

QUnit.module( "Smoother" );

QUnit.test( "size 1 - no smoothing", function( assert ) {
	var smoother = new Smoother(1);
	var smoothed;
	smoothed = smoother.add(10);
	assert.equal(smoothed, 10);
	smoothed = smoother.add(20);
	assert.equal(smoothed, 20);	
});

QUnit.test( "size 4 - mean", function( assert ) {
	var smoother = new Smoother(4);
	var smoothed;
	smoothed = smoother.add(100);
	assert.equal(smoothed, 25);
	smoothed = smoother.add(200);
	assert.equal(smoothed, 75);
	smoothed = smoother.add(400);
	assert.equal(smoothed, 175);	
	smoothed = smoother.add(100);
	assert.equal(smoothed, 200);	
	smoothed = smoother.add(300);
	assert.equal(smoothed, 250);	
	
	smoother.reset();
	smoothed = smoother.add(20);
	assert.equal(smoothed, 5);	
});


QUnit.module( "SimpleClicker" );

QUnit.test( "idle - mouseDown - probation", function(assert) {
    var target = {};
    var clicker = createSimpleClicker(target, null);
    startFake(target);
    expect(assert, "mouseDown", [{x: 20, y: 40}]);
    
    clicker.mouseDown({x: 20, y: 40});
    endFake(assert);
    assert.equal(clicker.state.state_name, "probation");
    assert.deepEqual(clicker.current, new Point(20, 40));
    assert.deepEqual(clicker.start,  new Point(20, 40));
    assert.deepEqual(clicker.moved, new Point(0, 0));
});

QUnit.test( "idle - mouseMove - idle", function(assert) {
    var target = {};
    var clicker = createSimpleClicker(target, null);
    startFake(target);
    clicker.mouseMove({dx: 20, dy: 40});
    endFake(assert);
    assert.equal(clicker.state.state_name, "idle");
});

QUnit.test( "idle - mouseUp - idle", function(assert) {
    var target = {};
    var clicker = createSimpleClicker(target, null);
    startFake(target);
    clicker.mouseUp({x: 20, y: 40});
    endFake(assert);
    assert.equal(clicker.state.state_name, "idle");
});

QUnit.test( "probation - mouseDown - idle", function(assert) {
    var target = {};
    var clicker = createSimpleClicker(target, null);
    startFake(target);
    clicker.state = SimpleClicker_state_probation;
    clicker.mouseDown({x: 20, y: 40});
    endFake(assert);
    assert.equal(clicker.state.state_name, "idle");
});

QUnit.test( "probation - short mouseMove - probation", function(assert) {
    var target = {};
    var clicker = createSimpleClicker(target, null);
    startFake(target);
    expect(assert, "mouseDown", [{x: 10, y: 30}]);    
    clicker.mouseDown({x: 10, y: 30});
    clicker.mouseMove({x: 20, y: 40, dx:2, dy:1});
    endFake(assert);
    assert.equal(clicker.state.state_name, "probation");
});

QUnit.test( "probation - long mouseMove - moving", function(assert) {
    var target = {};
    var clicker = createSimpleClicker(target, null);
    startFake(target);
    expect(assert, "mouseDown", [{x: 10, y: 30}]);
    expect(assert, "mouseMove", [{x: 25, y: 45, dx:2, dy:5}]);
    clicker.mouseDown({x: 10, y: 30});
    clicker.mouseMove({x: 20, y: 40, dx:2, dy:1});
    clicker.mouseMove({x: 25, y: 45, dx:0, dy:4});    
    endFake(assert);
    assert.equal(clicker.state.state_name, "moving");
});

QUnit.test( "probation - mouseUp - afterClick", function(assert) {
	var aux = {f: 10};
    var target = {};
    var clicker = createSimpleClicker(target, null);
    startFake(target);
    
    expect(assert, "mouseDown", [{x: 10, y: 30}]);
    expect(assert, "click", [{x:10, y:30, aux:aux}]);    
    expect(assert, "mouseUp", [{x: 11, y: 45}]);
    expect(assert, "setTimeout", [clicker, 300]);
    clicker.setTimeout = target.setTimeout;
    
    clicker.mouseDown({x: 10, y: 30, aux:aux});
    clicker.mouseUp({x: 11, y: 45});
    endFake(assert);
    assert.equal(clicker.state.state_name, "afterClick");
});

QUnit.test( "moving - mouseDown - moving", function(assert) {
    var target = {};
    var clicker = createSimpleClicker(target, null);
    startFake(target);
    clicker.state = SimpleClicker_state_moving;
    clicker.mouseDown({x: 20, y: 40});
    endFake(assert);
    assert.equal(clicker.state.state_name, "moving");
});

QUnit.test( "moving - mouseMove - moving", function(assert) {
    var target = {};
    var clicker = createSimpleClicker(target, null);
    startFake(target);
    expect(assert, "mouseMove", [{x: 20, y: 40, dx:10, dy:15}]);
    clicker.state = SimpleClicker_state_moving;
    clicker.mouseMove({x: 20, y: 40, dx:10, dy:15});
    endFake(assert);
    assert.equal(clicker.state.state_name, "moving");
});

QUnit.test( "moving - mouseUp - idle", function(assert) {
    var target = {};
    var clicker = createSimpleClicker(target, null);
    startFake(target);
    expect(assert, "mouseUp", [{x: 20, y: 40}]);
    clicker.state = SimpleClicker_state_moving;
    clicker.mouseUp({x: 20, y: 40});
    endFake(assert);
    assert.equal(clicker.state.state_name, "idle");
});

QUnit.test( "afterClick - mouseDown - idle", function(assert) {
    var target = {};
    var clicker = createSimpleClicker(target, null);
    startFake(target);
    expect(assert, "mouseUp", [{x: 20, y: 40}]);
    expect(assert, "doubleClick", [{x:8, y:9}]);
    clicker.state = SimpleClicker_state_afterClick;
    clicker.start = new Point(8, 9);
    clicker.mouseDown({x: 20, y: 40});
    endFake(assert);
    assert.equal(clicker.state.state_name, "idle");
});

QUnit.test( "afterClick - timeout - idle", function(assert) {
    var target = {};
    var clicker = createSimpleClicker(target, null);
    startFake(target);
    clicker.state = SimpleClicker_state_afterClick;
    clicker.timeout();
    endFake(assert);
    assert.equal(clicker.state.state_name, "idle");
});

QUnit.test( "afterClick - mouseMove - idle", function(assert) {
    var target = {};
    var clicker = createSimpleClicker(target, null);
    startFake(target);
    clicker.state = SimpleClicker_state_afterClick;
    clicker.mouseMove({});
    endFake(assert);
    assert.equal(clicker.state.state_name, "idle");
});

QUnit.test( "afterClick - mouseUp - idle", function(assert) {
    var target = {};
    var clicker = createSimpleClicker(target, null);
    startFake(target);
    clicker.state = SimpleClicker_state_afterClick;
    clicker.mouseUp({});
    endFake(assert);
    assert.equal(clicker.state.state_name, "idle");
});
