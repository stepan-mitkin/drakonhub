function HubToPro() {
    var unit = {};
    function connectTrees(diagram) {
        var ids, nodes, notJuncs, juncs, _var4, _var5, node, _var2, _var3, junction, _var6;
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                ids = Object.keys(diagram.nodes);
                nodes = ids.map(function (id) {
                    return diagram.nodes[id];
                });
                notJuncs = nodes.filter(function (node) {
                    return node.type !== 'junction';
                });
                juncs = nodes.filter(function (node) {
                    return node.type === 'junction';
                });
                __state = '11';
                break;
            case '10':
                return;
            case '11':
                _var4 = notJuncs;
                _var5 = 0;
                __state = '13';
                break;
            case '13':
                if (_var5 < _var4.length) {
                    node = _var4[_var5];
                    _var2 = juncs;
                    _var3 = 0;
                    __state = '15';
                } else {
                    __state = '10';
                }
                break;
            case '14':
                _var3++;
                __state = '15';
                break;
            case '15':
                if (_var3 < _var2.length) {
                    junction = _var2[_var3];
                    if (junction.owner) {
                        __state = '14';
                    } else {
                        _var6 = isInside(node, junction);
                        if (_var6) {
                            junction.owner = node;
                            node.subtree = junction;
                            __state = '14';
                        } else {
                            __state = '14';
                        }
                    }
                } else {
                    _var5++;
                    __state = '13';
                }
                break;
            default:
                return;
            }
        }
    }
    function fromHubToPro(content) {
        var name, obj, diagram, diagramStr, srcDiagram, filename, _var2;
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                obj = JSON.parse(content);
                name = makeFilename(obj.name);
                srcDiagram = connectHubGraph(obj);
                diagram = {
                    type: obj.type,
                    items: {}
                };
                _var2 = obj.type;
                if (_var2 === 'drakon') {
                    convertDrakonFromHub(srcDiagram, diagram);
                    __state = '8';
                } else {
                    if (_var2 === 'mind') {
                        diagram.type = 'graf';
                        convertGrafFromHub(srcDiagram, diagram);
                        __state = '8';
                    } else {
                        if (_var2 === 'free') {
                            convertFreeFromHub(srcDiagram, diagram);
                            __state = '8';
                        } else {
                            throw new Error('Unexpected case value: ' + _var2);
                        }
                    }
                }
                break;
            case '8':
                diagramStr = JSON.stringify(diagram, null, 4);
                filename = name + '.' + diagram.type;
                return {
                    filename: filename,
                    content: diagramStr
                };
            default:
                return;
            }
        }
    }
    function handleParBegin(node, stack, diagram) {
        var prev, current, beginNode, one, _var2;
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                current = goRight(node);
                prev = undefined;
                __state = '5';
                break;
            case '4':
                return undefined;
            case '5':
                __state = '21';
                break;
            case '16':
                addProNode(diagram, current.id, beginNode);
                prev = current;
                if (current.left) {
                    current = getLeft(current);
                    __state = '21';
                } else {
                    __state = '4';
                }
                break;
            case '21':
                _var2 = getDown(current);
                one = getNextHub(_var2);
                stack.push(one);
                beginNode = {
                    type: 'parbegin',
                    one: one.id
                };
                if (prev) {
                    beginNode.two = prev.id;
                    __state = '16';
                } else {
                    __state = '16';
                }
                break;
            default:
                return;
            }
        }
    }
    function addProNode(diagram, id, node) {
        diagram.items[id] = node;
        return;
    }
    function handleSelect(node, stack, diagram) {
        var below, selectNode, prev, junc, current, caseNode, one, _var2;
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                below = getDown(node);
                junc = goRight(below);
                prev = undefined;
                __state = '5';
                break;
            case '4':
                selectNode = {
                    type: 'select',
                    one: prev.id
                };
                copyContent(node, selectNode);
                addProNode(diagram, node.id, selectNode);
                return selectNode;
            case '5':
                __state = '21';
                break;
            case '16':
                addProNode(diagram, current.id, caseNode);
                copyNodeStyle(current, caseNode);
                prev = current;
                if (junc.left) {
                    junc = getLeft(junc);
                    __state = '21';
                } else {
                    __state = '4';
                }
                break;
            case '21':
                current = getDown(junc);
                _var2 = getDown(current);
                one = getNextHub(_var2);
                stack.push(one);
                caseNode = {
                    type: 'case',
                    one: one.id
                };
                copyContent(current, caseNode);
                if (prev) {
                    caseNode.two = prev.id;
                    __state = '16';
                } else {
                    __state = '16';
                }
                break;
            default:
                return;
            }
        }
    }
    function handleAction(node, stack, diagram) {
        var _var2;
        _var2 = handlePrim(node, stack, diagram, node.type);
        return _var2;
    }
    function addDuration(diagram, node, newNode) {
        var duration, left, _var2;
        var __state = '2';
        while (true) {
            switch (__state) {
            case '1':
                return;
            case '2':
                if (node.left) {
                    left = getLeft(node);
                    _var2 = getTxt(left);
                    duration = {
                        type: 'duration',
                        content: _var2
                    };
                    addProNode(diagram, left.id, duration);
                    newNode.side = left.id;
                    copyNodeStyle(left, duration);
                    __state = '1';
                } else {
                    __state = '1';
                }
                break;
            default:
                return;
            }
        }
    }
    function handleEnd(node, stack, diagram) {
        var newNode;
        newNode = { type: 'end' };
        addProNode(diagram, node.id, newNode);
        return newNode;
    }
    function handleQuestion(node, stack, diagram) {
        var newNode, one, two, _var2, _var3;
        _var2 = getDown(node);
        _var3 = getRight(node);
        one = getNextHub(_var2);
        two = getNextHub(_var3);
        newNode = {
            type: 'question',
            flag1: node.flag1,
            one: one.id,
            two: two.id
        };
        copyContent(node, newNode);
        addProNode(diagram, node.id, newNode);
        stack.push(two);
        stack.push(one);
        return newNode;
    }
    function handleDouble(node, stack, diagram) {
        var newNode, next, lower, upper, _var2;
        upper = getTxt2(node);
        lower = getTxt(node);
        _var2 = getDown(node);
        next = getNextHub(_var2);
        newNode = {
            type: node.type,
            secondary: upper,
            content: lower,
            one: next.id
        };
        addProNode(diagram, node.id, newNode);
        stack.push(next);
        return newNode;
    }
    function makeActionHandler(type) {
        var _var2;
        return function (node, stack, diagram) {
            _var2 = handlePrim(node, stack, diagram, type);
            return _var2;
        };
    }
    function handlePrim(node, stack, diagram, type) {
        var newNode, next, _var2;
        _var2 = getDown(node);
        next = getNextHub(_var2);
        newNode = {
            type: type,
            one: next.id
        };
        copyContent(node, newNode);
        addProNode(diagram, node.id, newNode);
        stack.push(next);
        return newNode;
    }
    function buildNodeHandlers() {
        var handlers;
        handlers = {};
        handlers['end'] = handleEnd;
        handlers['action'] = handleAction;
        handlers['loopbegin'] = handleAction;
        handlers['loopend'] = handleAction;
        handlers['parbegin'] = handleParBegin;
        handlers['parend'] = handleAction;
        handlers['arrow-loop'] = handleAction;
        handlers['question'] = handleQuestion;
        handlers['select'] = handleSelect;
        handlers['insertion'] = handleAction;
        handlers['pause'] = handleAction;
        handlers['timer'] = handleAction;
        handlers['comment'] = handleAction;
        handlers['sinput'] = makeActionHandler('simpleinput');
        handlers['soutput'] = makeActionHandler('simpleoutput');
        handlers['ctrlStart'] = makeActionHandler('ctrlstart');
        handlers['ctrlEnd'] = makeActionHandler('ctrlend');
        handlers['shelf'] = handleDouble;
        handlers['process'] = handleDouble;
        handlers['input'] = handleDouble;
        handlers['output'] = handleDouble;
        return handlers;
    }
    function copyFillColor(context, content, format) {
        var parts, color;
        var __state = '2';
        while (true) {
            switch (__state) {
            case '1':
                return;
            case '2':
                color = content.fillColor;
                if (color) {
                    context.hasValue = true;
                    parts = color.split(' ');
                    if (parts.length === 1) {
                        format.iconBack = color;
                        __state = '1';
                    } else {
                        format.iconBack = parts[parts.length - 1];
                        __state = '1';
                    }
                } else {
                    __state = '1';
                }
                break;
            default:
                return;
            }
        }
    }
    function isDefaultFont(type, role, font) {
        var defaultFont, defaultFontHeader, defaultFontBranch, _var2;
        defaultFont = '14px \'Liberation Sans\'';
        defaultFontHeader = 'bold 22px \'Liberation Sans\'';
        defaultFontBranch = 'bold 18px \'Liberation Sans\'';
        _var2 = type;
        if (_var2 === 'beginend') {
            if (role === 'header') {
                return font === defaultFontHeader;
            } else {
                return font === defaultFont;
            }
        } else {
            if (_var2 === 'branch') {
                return font === defaultFontBranch;
            } else {
                return font === defaultFont;
            }
        }
    }
    function copyDiaStyle(src, dst) {
        var context, format;
        var __state = '2';
        while (true) {
            switch (__state) {
            case '1':
                return;
            case '2':
                context = { hasValue: false };
                format = {};
                copyValue(src, 'background', format, 'background', context);
                copyValue(src, 'diaLine', format, 'lines', context);
                copyValue(src, 'diaLine', format, 'backText', context);
                copyValue(src, 'diaLineThickness', format, 'lineWidth', context);
                if (context.hasValue) {
                    dst.style = JSON.stringify(format);
                    __state = '1';
                } else {
                    __state = '1';
                }
                break;
            default:
                return;
            }
        }
    }
    function copyNodeStyle(src, dst) {
        var content, context, format, _var2, _var3, _var4, _var5;
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                content = src.content;
                if (content) {
                    context = { hasValue: false };
                    format = {};
                    copyFillColor(context, content, format);
                    copyValue(content, 'lineThickness', format, 'borderWidth', context);
                    copyValue(content, 'align', format, 'textAlign', context);
                    copyValue(content, 'textColor', format, 'color', context);
                    copyValue(content, 'arrowStart', format, 'tailStyle', context);
                    copyValue(content, 'arrowEnd', format, 'headStyle', context);
                    copyValue(content, 'lineThickness', format, 'lineWidth', context);
                    __state = '12';
                } else {
                    __state = '11';
                }
                break;
            case '11':
                return;
            case '12':
                _var5 = hasValue(content.lineColor);
                if (_var5) {
                    format.iconBorder = content.lineColor;
                    format.lines = content.lineColor;
                    context.hasValue = true;
                    __state = '_item2';
                } else {
                    __state = '_item2';
                }
                break;
            case '19':
                if (content.shadow) {
                    format.shadowOffsetX = 6;
                    format.shadowOffsetY = 8;
                    format.shadowColor = 'rgba(0, 0, 0, 0.5)';
                    format.shadowBlur = 2;
                    context.hasValue = true;
                    __state = '25';
                } else {
                    __state = '25';
                }
                break;
            case '25':
                if (context.hasValue) {
                    dst.style = JSON.stringify(format);
                    __state = '11';
                } else {
                    __state = '11';
                }
                break;
            case '_item2':
                _var2 = hasValue(content.lineStyle);
                if (_var2) {
                    format.borderStyle = convertBorderStyle(content.lineStyle);
                    format.lineStyle = format.borderStyle;
                    context.hasValue = true;
                    __state = '_item3';
                } else {
                    __state = '_item3';
                }
                break;
            case '_item3':
                _var3 = hasValue(content.font);
                if (_var3) {
                    _var4 = isDefaultFont(src.type, src.role, content.font);
                    if (_var4) {
                        __state = '19';
                    } else {
                        format.font = convertFont(content.font);
                        context.hasValue = true;
                        __state = '19';
                    }
                } else {
                    __state = '19';
                }
                break;
            default:
                return;
            }
        }
    }
    function convertBorderStyle(style) {
        var _var2;
        _var2 = style;
        if (_var2 === 's-1') {
            return 'dash1';
        } else {
            if (_var2 === 's-2') {
                return 'dash2';
            } else {
                if (_var2 === 's-3') {
                    return 'dash3';
                } else {
                    if (_var2 === 's-4') {
                        return 'dash4';
                    } else {
                        return '';
                    }
                }
            }
        }
    }
    function convertFont(font) {
        var parts, bold, italic, fontSize, size, newFont, _var2, _var3, part, _var4;
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                parts = font.split(' ');
                bold = false;
                italic = false;
                fontSize = 15;
                _var2 = parts;
                _var3 = 0;
                __state = '6';
                break;
            case '5':
                _var3++;
                __state = '6';
                break;
            case '6':
                if (_var3 < _var2.length) {
                    part = _var2[_var3];
                    if (part === 'bold') {
                        bold = true;
                        __state = '5';
                    } else {
                        if (part === 'italic') {
                            italic = true;
                            __state = '5';
                        } else {
                            size = parseInt(part);
                            _var4 = isNaN(size);
                            if (_var4) {
                                __state = '5';
                            } else {
                                fontSize = size;
                                __state = '5';
                            }
                        }
                    }
                } else {
                    __state = '15';
                }
                break;
            case '14':
                return newFont;
            case '15':
                newFont = fontSize + 'px Arimo';
                if (bold) {
                    newFont = 'bold ' + newFont;
                    __state = '19';
                } else {
                    __state = '19';
                }
                break;
            case '19':
                if (italic) {
                    newFont = 'italic ' + newFont;
                    __state = '14';
                } else {
                    __state = '14';
                }
                break;
            default:
                return;
            }
        }
    }
    function handleGrafNode(node, type) {
        var newNode;
        newNode = { type: type };
        copyContent(node, newNode);
        copyNodeStyle(node, newNode);
        return newNode;
    }
    function addGraf(handlers, from, to) {
        var _var2;
        handlers[from] = function (node) {
            _var2 = handleGrafNode(node, to);
            return _var2;
        };
        return;
    }
    function convertGrafFromHub(srcDiagram, diagram) {
        var treeType, root;
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                connectTrees(srcDiagram);
                treeType = buildTree(srcDiagram, diagram);
                convertHeadAndFree(srcDiagram, diagram, 'root');
                root = diagram.items['root'];
                if (root) {
                    __state = '11';
                } else {
                    root = { type: 'header' };
                    diagram.items['root'] = root;
                    __state = '11';
                }
                break;
            case '11':
                root.treeType = treeType;
                return;
            default:
                return;
            }
        }
    }
    function buildSubtree(handlers, parentId, start, treeType, diagram) {
        var below, junc, ordinal, child, _var2;
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                _var2 = treeType;
                if (_var2 === 'vertical') {
                    below = getDown(start);
                    if (below.type === 'junction') {
                        __state = '10';
                    } else {
                        __state = '35';
                    }
                } else {
                    if (_var2 === 'treeview') {
                        __state = '11';
                    } else {
                        throw new Error('Unexpected case value: ' + _var2);
                    }
                }
                break;
            case '9':
                return;
            case '10':
                below = getDown(start);
                junc = goLeft(below);
                ordinal = 0;
                __state = '19';
                break;
            case '11':
                junc = getDown(start);
                ordinal = 0;
                __state = '27';
                break;
            case '15':
                if (junc.right) {
                    junc = getRight(junc);
                    __state = '19';
                } else {
                    __state = '9';
                }
                break;
            case '19':
                if (junc.down) {
                    child = getDown(junc);
                    createGrafNode(handlers, parentId, ordinal, child, diagram);
                    ordinal++;
                    __state = '15';
                } else {
                    __state = '15';
                }
                break;
            case '27':
                child = goRight(junc);
                createGrafNode(handlers, parentId, ordinal, child, diagram);
                ordinal++;
                if (junc.down) {
                    junc = getDown(junc);
                    __state = '27';
                } else {
                    __state = '9';
                }
                break;
            case '35':
                ordinal = 0;
                createGrafNode(handlers, parentId, ordinal, below, diagram);
                __state = '9';
                break;
            default:
                return;
            }
        }
    }
    function buildGrafHandlers() {
        var handlers;
        handlers = {};
        addGraf(handlers, 'action', 'idea');
        addGraf(handlers, 'raction', 'ridea');
        return handlers;
    }
    function createGrafNode(handlers, parentId, ordinal, node, diagram) {
        var handler, newNode, start, nodeType, _var2;
        var __state = '2';
        while (true) {
            switch (__state) {
            case '1':
                return;
            case '2':
                handler = handlers[node.type];
                if (handler) {
                    __state = '8';
                } else {
                    handler = function (node) {
                        _var2 = handleGrafNode(node, 'idea');
                        return _var2;
                    };
                    __state = '8';
                }
                break;
            case '8':
                newNode = handler(node);
                if (node.down) {
                    start = node;
                    nodeType = 'vertical';
                    __state = '14';
                } else {
                    if (node.subtree) {
                        start = node.subtree;
                        nodeType = 'treeview';
                        __state = '14';
                    } else {
                        start = undefined;
                        nodeType = 'treeview';
                        __state = '14';
                    }
                }
                break;
            case '14':
                newNode.parent = parentId;
                newNode.treeType = nodeType;
                newNode.ordinal = ordinal;
                addProNode(diagram, node.id, newNode);
                if (start) {
                    buildSubtree(handlers, node.id, start, nodeType, diagram);
                    __state = '1';
                } else {
                    __state = '1';
                }
                break;
            default:
                return;
            }
        }
    }
    function buildTree(srcDiagram, diagram) {
        var header, handlers, start, treeType;
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                handlers = buildGrafHandlers();
                header = srcDiagram.header;
                if (header.left) {
                    start = getLeft(header);
                    treeType = 'treeview';
                    __state = '9';
                } else {
                    if (header.down) {
                        start = header;
                        treeType = 'vertical';
                        __state = '9';
                    } else {
                        treeType = 'vertical';
                        __state = '17';
                    }
                }
                break;
            case '9':
                buildSubtree(handlers, 'root', start, treeType, diagram);
                __state = '17';
                break;
            case '17':
                header.treeType = treeType;
                return treeType;
            default:
                return;
            }
        }
    }
    function objectIsEmpty(obj) {
        var keys;
        keys = Object.keys(obj);
        return keys.length === 0;
    }
    function getTxt(node) {
        if (node.content) {
            return node.content.txt || '';
        } else {
            return '';
        }
    }
    function charIsSpace(code) {
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                if (code === 9) {
                    __state = '15';
                } else {
                    if (code === 10) {
                        __state = '15';
                    } else {
                        if (code === 32) {
                            __state = '15';
                        } else {
                            if (code === 160) {
                                __state = '15';
                            } else {
                                if (code === 133) {
                                    __state = '15';
                                } else {
                                    return false;
                                }
                            }
                        }
                    }
                }
                break;
            case '15':
                return true;
            default:
                return;
            }
        }
    }
    function getTxt2(node) {
        if (node.content) {
            return node.content.txt2 || '';
        } else {
            return '';
        }
    }
    function makeFilename(raw) {
        var ch, code, result, checker, i, _var2, _var3, _var4;
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                checker = createFilenameSymbolChecker();
                result = '';
                i = 0;
                __state = '5';
                break;
            case '4':
                i++;
                __state = '5';
                break;
            case '5':
                if (i < raw.length) {
                    ch = raw[i];
                    code = raw.charCodeAt(i);
                    _var2 = charIsSpace(code);
                    if (_var2) {
                        result += ' ';
                        __state = '4';
                    } else {
                        if (code > 32) {
                            _var3 = checker.isGoodFileChar(ch);
                            if (_var3) {
                                result += ch;
                                __state = '4';
                            } else {
                                result += ' ';
                                __state = '4';
                            }
                        } else {
                            __state = '4';
                        }
                    }
                } else {
                    _var4 = result.trim();
                    return _var4;
                }
                break;
            default:
                return;
            }
        }
    }
    function copyValue(src, srcProp, dst, dstProp, context) {
        var value, _var2;
        var __state = '2';
        while (true) {
            switch (__state) {
            case '1':
                return;
            case '2':
                value = src[srcProp];
                _var2 = hasValue(value);
                if (_var2) {
                    dst[dstProp] = value;
                    context.hasValue = true;
                    __state = '1';
                } else {
                    __state = '1';
                }
                break;
            default:
                return;
            }
        }
    }
    function createFilenameSymbolChecker() {
        var bad, self;
        bad = {};
        bad['#'] = true;
        bad['%'] = true;
        bad['&'] = true;
        bad['{'] = true;
        bad['}'] = true;
        bad['/'] = true;
        bad['\\'] = true;
        bad[':'] = true;
        bad['"'] = true;
        bad['\''] = true;
        bad['?'] = true;
        bad['<'] = true;
        bad['>'] = true;
        bad['|'] = true;
        bad['`'] = true;
        bad['$'] = true;
        bad['='] = true;
        bad['!'] = true;
        bad['@'] = true;
        bad['+'] = true;
        bad['*'] = true;
        self = FilenameSymbolChecker();
        self.bad = bad;
        return self;
    }
    function clone(src) {
        var copy;
        copy = {};
        Object.assign(copy, src);
        return copy;
    }
    function hasValue(value) {
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                if (value === null) {
                    __state = '8';
                } else {
                    if (value === undefined) {
                        __state = '8';
                    } else {
                        if (value === '') {
                            __state = '8';
                        } else {
                            return true;
                        }
                    }
                }
                break;
            case '8':
                return false;
            default:
                return;
            }
        }
    }
    function FilenameSymbolChecker_isGoodFileChar(self, ch) {
        if (ch in self.bad) {
            return false;
        } else {
            return true;
        }
    }
    function getLink(node) {
        if (node.content) {
            return node.content.link || '';
        } else {
            return '';
        }
    }
    function isInside(node, point) {
        var left, right, top, bottom, x, y;
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                left = node.x - node.w;
                right = node.x + node.w;
                top = node.y - node.h;
                bottom = node.y + node.h;
                x = point.x;
                y = point.y;
                if (x >= left) {
                    if (x < right) {
                        if (y >= top) {
                            if (y < bottom) {
                                return true;
                            } else {
                                __state = '10';
                            }
                        } else {
                            __state = '10';
                        }
                    } else {
                        __state = '10';
                    }
                } else {
                    __state = '10';
                }
                break;
            case '10':
                return false;
            default:
                return;
            }
        }
    }
    function getLeft(node) {
        return node.left.head;
    }
    function getDown(node) {
        return node.down.tail;
    }
    function getUp(node) {
        return node.up.head;
    }
    function goLeft(node) {
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                __state = '6';
                break;
            case '6':
                if (node.left) {
                    node = getLeft(node);
                    __state = '6';
                } else {
                    return node;
                }
                break;
            default:
                return;
            }
        }
    }
    function getRight(node) {
        return node.right.tail;
    }
    function convertDrakonManhattan(handlers, firstNode, diagram) {
        var stack, node;
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                stack = [firstNode];
                __state = '11';
                break;
            case '10':
                if (stack.length === 0) {
                    return;
                } else {
                    __state = '11';
                }
                break;
            case '11':
                node = stack.pop();
                if (node.type === 'branch') {
                    __state = '10';
                } else {
                    if (node.id in diagram.items) {
                        __state = '10';
                    } else {
                        handleHubNode(handlers, node, diagram, stack);
                        __state = '10';
                    }
                }
                break;
            default:
                return;
            }
        }
    }
    function handleHubNode(handlers, node, diagram, stack) {
        var handler, newNode;
        var __state = '2';
        while (true) {
            switch (__state) {
            case '1':
                return;
            case '2':
                handler = handlers[node.type];
                if (handler) {
                    __state = '7';
                } else {
                    throw new Error('Node type not supported: ' + node.type + ', id: ' + node.id);
                }
                break;
            case '7':
                newNode = handler(node, stack, diagram);
                if (newNode) {
                    copyNodeStyle(node, newNode);
                    addDuration(diagram, node, newNode);
                    __state = '1';
                } else {
                    __state = '1';
                }
                break;
            default:
                return;
            }
        }
    }
    function goUp(node) {
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                __state = '6';
                break;
            case '6':
                if (node.up) {
                    node = getUp(node);
                    __state = '6';
                } else {
                    return node;
                }
                break;
            default:
                return;
            }
        }
    }
    function goRight(node) {
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                __state = '6';
                break;
            case '6':
                if (node.right) {
                    node = getRight(node);
                    __state = '6';
                } else {
                    return node;
                }
                break;
            default:
                return;
            }
        }
    }
    function getNextHub(node) {
        var target, text, _var2, _var3;
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                __state = '15';
                break;
            case '15':
                if (node.type === 'junction') {
                    _var2 = isArrowLoop(node);
                    if (_var2) {
                        return {
                            id: node.id,
                            type: 'arrow-loop',
                            down: node.down
                        };
                    } else {
                        _var3 = isParallel(node);
                        if (_var3) {
                            markParEnd(node);
                            return {
                                id: node.id,
                                type: 'parbegin',
                                down: node.down,
                                right: node.right
                            };
                        } else {
                            if (node.role === 'parend') {
                                return {
                                    id: node.id,
                                    type: 'parend',
                                    down: node.down
                                };
                            } else {
                                node = getNextAfterJunction(node);
                                __state = '15';
                            }
                        }
                    }
                } else {
                    if (node.type === 'address') {
                        text = getTxt(node);
                        target = getBranchByName(node, text);
                        return target;
                    } else {
                        return node;
                    }
                }
                break;
            default:
                return;
            }
        }
    }
    function isParallel(node) {
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                if (node.right) {
                    if (node.right.role === 'parallel') {
                        return true;
                    } else {
                        __state = '6';
                    }
                } else {
                    __state = '6';
                }
                break;
            case '6':
                return false;
            default:
                return;
            }
        }
    }
    function getBranchByName(node, name) {
        var bottom, leftBottom, leftTop, junc, branch, branchName;
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                bottom = goDown(node);
                leftBottom = goLeft(bottom);
                leftTop = goUp(leftBottom);
                junc = getRight(leftTop);
                __state = '14';
                break;
            case '10':
                return branch;
            case '14':
                branch = getDown(junc);
                branchName = getTxt(branch);
                if (branchName === name) {
                    __state = '10';
                } else {
                    if (junc.right) {
                        junc = getRight(junc);
                        __state = '14';
                    } else {
                        __state = '10';
                    }
                }
                break;
            default:
                return;
            }
        }
    }
    function getNextAfterJunction(node) {
        var up, _var2, _var3, _var4, _var5, _var6;
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                if (node.down) {
                    _var2 = getDown(node);
                    return _var2;
                } else {
                    if (node.right) {
                        if (node.right.role === 'right') {
                            __state = '_item3';
                        } else {
                            if (node.left) {
                                _var5 = getLeft(node);
                                return _var5;
                            } else {
                                __state = '_item3';
                            }
                        }
                    } else {
                        if (node.up.role === 'down') {
                            __state = '_item6';
                        } else {
                            if (node.up.role === 'par-down') {
                                __state = '_item6';
                            } else {
                                up = goUp(node);
                                _var4 = getLeft(up);
                                return _var4;
                            }
                        }
                    }
                }
                break;
            case '_item3':
                _var3 = getRight(node);
                return _var3;
            case '_item6':
                _var6 = getLeft(node);
                return _var6;
            default:
                return;
            }
        }
    }
    function markParEnd(node) {
        var topRight, bottomRight, bottomLeft;
        topRight = goRight(node);
        bottomRight = goDown(topRight);
        bottomLeft = goLeft(bottomRight);
        bottomLeft.role = 'parend';
        return;
    }
    function isArrowLoop(node) {
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                if (node.right) {
                    if (node.right.role === 'arrow') {
                        return true;
                    } else {
                        __state = '6';
                    }
                } else {
                    __state = '6';
                }
                break;
            case '6':
                return false;
            default:
                return;
            }
        }
    }
    function genNextId(srcDiagram) {
        var id;
        id = srcDiagram.nextId;
        srcDiagram.nextId++;
        return id;
    }
    function connectHubGraph(diagram) {
        var nodes, edges, item, srcNodes, srcEdges, srcFree, header, params, nextId, _var3, _var2, _var4, id, node, _var6, _var5, _var7, edge, _var9, _var8, _var10, element;
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                header = undefined;
                params = undefined;
                srcNodes = diagram.nodes || {};
                srcEdges = diagram.edges || {};
                srcFree = diagram.free || {};
                nextId = 1;
                nodes = {};
                edges = {};
                _var3 = srcNodes;
                _var2 = Object.keys(_var3);
                _var4 = 0;
                __state = '6';
                break;
            case '5':
                _var4++;
                __state = '6';
                break;
            case '6':
                if (_var4 < _var2.length) {
                    id = _var2[_var4];
                    node = _var3[id];
                    nextId = chooseNextId(nextId, id);
                    item = clone(node);
                    item.id = id;
                    nodes[id] = item;
                    if (item.role === 'header') {
                        header = item;
                        __state = '5';
                    } else {
                        if (item.type === 'action') {
                            if (item.role === 'params') {
                                params = item;
                                __state = '5';
                            } else {
                                __state = '5';
                            }
                        } else {
                            __state = '5';
                        }
                    }
                } else {
                    __state = '9';
                }
                break;
            case '8':
                return {
                    header: header,
                    params: params,
                    nodes: nodes,
                    edges: edges,
                    nextId: nextId,
                    free: diagram.free || {},
                    background: diagram.background,
                    diaLine: diagram.diaLine,
                    diaLineThickness: diagram.diaLineThickness
                };
            case '9':
                _var6 = srcEdges;
                _var5 = Object.keys(_var6);
                _var7 = 0;
                __state = '13';
                break;
            case '13':
                if (_var7 < _var5.length) {
                    id = _var5[_var7];
                    edge = _var6[id];
                    nextId = chooseNextId(nextId, id);
                    item = clone(edge);
                    item.id = id;
                    if (item.isVertical) {
                        connectHubItem(nodes, item, 'head', 'down');
                        connectHubItem(nodes, item, 'tail', 'up');
                        __state = '22';
                    } else {
                        connectHubItem(nodes, item, 'head', 'right');
                        connectHubItem(nodes, item, 'tail', 'left');
                        __state = '22';
                    }
                } else {
                    __state = '33';
                }
                break;
            case '22':
                edges[id] = item;
                _var7++;
                __state = '13';
                break;
            case '33':
                _var9 = srcFree;
                _var8 = Object.keys(_var9);
                _var10 = 0;
                __state = '35';
                break;
            case '35':
                if (_var10 < _var8.length) {
                    id = _var8[_var10];
                    element = _var9[id];
                    nextId = chooseNextId(nextId, id);
                    _var10++;
                    __state = '35';
                } else {
                    __state = '8';
                }
                break;
            default:
                return;
            }
        }
    }
    function connectHubItem(nodes, edge, edgeProp, nodeProp) {
        var nodeId, node;
        nodeId = edge[edgeProp];
        node = nodes[nodeId];
        edge[edgeProp] = node;
        node[nodeProp] = edge;
        return;
    }
    function chooseNextId(nextId, nodeId) {
        var id, _var2;
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                id = parseInt(nodeId);
                _var2 = isNaN(id);
                if (_var2) {
                    __state = '5';
                } else {
                    if (id >= nextId) {
                        return id + 1;
                    } else {
                        __state = '5';
                    }
                }
                break;
            case '5':
                return nextId;
            default:
                return;
            }
        }
    }
    function goDown(node) {
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                __state = '6';
                break;
            case '6':
                if (node.down) {
                    node = getDown(node);
                    __state = '6';
                } else {
                    return node;
                }
                break;
            default:
                return;
            }
        }
    }
    function convertSilhouetteFromHub(srcDiagram, diagram) {
        var handlers, silBranch, firstNode, branchId, branches, _var2, _var3, branch, _var4;
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                branches = makeBranchList(srcDiagram);
                handlers = buildNodeHandlers();
                branchId = 1;
                _var2 = branches;
                _var3 = 0;
                __state = '12';
                break;
            case '12':
                if (_var3 < _var2.length) {
                    branch = _var2[_var3];
                    _var4 = getDown(branch);
                    firstNode = getNextHub(_var4);
                    silBranch = {
                        type: 'branch',
                        branchId: branchId,
                        one: firstNode.id
                    };
                    addProNode(diagram, branch.id, silBranch);
                    copyNodeStyle(branch, silBranch);
                    copyContent(branch, silBranch);
                    convertDrakonManhattan(handlers, firstNode, diagram);
                    branchId++;
                    _var3++;
                    __state = '12';
                } else {
                    return;
                }
                break;
            default:
                return;
            }
        }
    }
    function makeBranchList(diagram) {
        var junc, result, branch;
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                result = [];
                junc = getDown(diagram.header);
                __state = '10';
                break;
            case '10':
                branch = getDown(junc);
                result.push(branch);
                if (junc.right) {
                    junc = getRight(junc);
                    __state = '10';
                } else {
                    return result;
                }
                break;
            default:
                return;
            }
        }
    }
    function findBranches(srcDiagram) {
        var result, _var3, _var2, _var4, id, node;
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                result = [];
                _var3 = srcDiagram.nodes;
                _var2 = Object.keys(_var3);
                _var4 = 0;
                __state = '6';
                break;
            case '5':
                _var4++;
                __state = '6';
                break;
            case '6':
                if (_var4 < _var2.length) {
                    id = _var2[_var4];
                    node = _var3[id];
                    if (node.type === 'branch') {
                        result.push(node);
                        __state = '5';
                    } else {
                        __state = '5';
                    }
                } else {
                    return result;
                }
                break;
            default:
                return;
            }
        }
    }
    function convertPrimitiveFromHub(srcDiagram, diagram) {
        var handlers, primBranch, primBranchId, firstNode, _var2;
        handlers = buildNodeHandlers();
        _var2 = getDown(srcDiagram.header);
        firstNode = getNextHub(_var2);
        convertDrakonManhattan(handlers, firstNode, diagram);
        primBranch = {
            type: 'branch',
            branchId: 0,
            one: firstNode.id
        };
        primBranchId = genNextId(srcDiagram);
        addProNode(diagram, primBranchId, primBranch);
        return;
    }
    function convertDrakonFromHub(srcDiagram, diagram) {
        var branches;
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                branches = findBranches(srcDiagram);
                if (srcDiagram.params) {
                    diagram.params = getTxt(srcDiagram.params);
                    __state = '4';
                } else {
                    __state = '4';
                }
                break;
            case '4':
                if (branches.length === 0) {
                    convertPrimitiveFromHub(srcDiagram, diagram);
                    __state = '21';
                } else {
                    convertSilhouetteFromHub(srcDiagram, diagram);
                    __state = '21';
                }
                break;
            case '21':
                convertHeadAndFree(srcDiagram, diagram, 'header');
                return;
            default:
                return;
            }
        }
    }
    function convertHeadAndFree(srcDiagram, diagram, headerId) {
        var headerNode;
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                headerNode = { type: 'header' };
                copyNodeStyle(srcDiagram.header, headerNode);
                if (headerNode.style) {
                    addProNode(diagram, headerId, headerNode);
                    __state = '8';
                } else {
                    __state = '8';
                }
                break;
            case '8':
                convertFreeFromHub(srcDiagram, diagram);
                return;
            default:
                return;
            }
        }
    }
    function addAux1(handlers, from, to, auxProp) {
        var newNode;
        handlers[from] = function (node) {
            newNode = handleSimpleFree(node, to);
            copyAux1(node, newNode, auxProp);
            return newNode;
        };
        return;
    }
    function addSimple(handlers, from, to) {
        handlers[from] = makeSimpleFreeHandler(to);
        return;
    }
    function handleFreeElement(handlers, node, diagram) {
        var handler, newNode;
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                handler = handlers[node.type];
                if (handler) {
                    __state = '7';
                } else {
                    console.log('Free element type not supported: ' + node.type + ', id: ' + node.id);
                    handler = makeSimpleFreeHandler('rectangle');
                    __state = '7';
                }
                break;
            case '7':
                newNode = handler(node);
                newNode.zIndex = node.zIndex;
                addProNode(diagram, node.id, newNode);
                return;
            default:
                return;
            }
        }
    }
    function copyContent(src, dst) {
        var upper, text, link, content;
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                upper = getTxt2(src);
                text = getTxt(src);
                link = getLink(src);
                if (upper) {
                    content = upper + '\n' + text;
                    __state = '8';
                } else {
                    content = text;
                    __state = '8';
                }
                break;
            case '7':
                dst.content = content;
                return;
            case '8':
                if (link) {
                    dst.link = link;
                    __state = '7';
                } else {
                    __state = '7';
                }
                break;
            default:
                return;
            }
        }
    }
    function handleMore(node) {
        var newNode, subtype, handlers, type;
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                subtype = node.content.subtype;
                handlers = buildMoreHandlers();
                type = handlers[subtype];
                if (type) {
                    __state = '4';
                } else {
                    type = 'rectangle';
                    __state = '4';
                }
                break;
            case '4':
                newNode = handleSimpleFree(node, type);
                return newNode;
            default:
                return;
            }
        }
    }
    function copyAux1(from, to, auxProp) {
        var __state = '2';
        while (true) {
            switch (__state) {
            case '1':
                return;
            case '2':
                if (from.content) {
                    to.aux = from.content[auxProp];
                    __state = '1';
                } else {
                    __state = '1';
                }
                break;
            default:
                return;
            }
        }
    }
    function handleCallout(node) {
        var newNode;
        newNode = handleSimpleFree(node, 'callout');
        newNode.px = node.content.h0x + node.w;
        newNode.py = node.content.h0y + node.h;
        return newNode;
    }
    function buildFreeHandlers() {
        var handlers;
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                handlers = {};
                addSimple(handlers, 'f_rectangle', 'rectangle');
                addSimple(handlers, 'f_insertion', 'rectangle');
                addSimple(handlers, 'f_circle', 'f_circle');
                addSimple(handlers, 'shelf', 'rectangle');
                addSimple(handlers, 'f_label', 'text');
                addSimple(handlers, 'f_begin', 'f_begin');
                addSimple(handlers, 'f_placeholder', 'placeholder');
                addAux1(handlers, 'f_ptr_left', 'f_ptr_left', 'h0x');
                addAux1(handlers, 'f_ptr_right', 'f_ptr_right', 'h0x');
                addAux1(handlers, 'f_rounded', 'rounded', 'radius');
                handlers['callout'] = handleCallout;
                handlers['f_tab'] = handleTab;
                handlers['f_line'] = handleLine;
                handlers['gdur'] = handleGroupDuration;
                __state = '21';
                break;
            case '20':
                return handlers;
            case '21':
                handlers['f_more'] = handleMore;
                addSimple(handlers, 'f_db', 'database');
                addSimple(handlers, 'f_cloud', 'cloud');
                __state = '20';
                break;
            default:
                return;
            }
        }
    }
    function buildMoreHandlers() {
        return {
            f_ar_human: 'human',
            f_ar_portrait: 'portrait',
            f_ar_pc: 'computer',
            f_ar_notebook: 'notebook',
            f_ar_server1: 'server1',
            f_ar_server2: 'server2',
            f_ar_phone: 'phone',
            f_ar_tablet: 'tablet',
            f_ui_menu: 'menu',
            f_ui_hscroll: 'hscroll',
            f_ui_vscroll: 'vscroll',
            f_ui_check_true: 'check_true',
            f_ui_check_false: 'check_false',
            f_ui_radio_true: 'radio_true',
            f_ui_radio_false: 'radio_false',
            f_ui_cross: 'cross',
            f_ui_check: 'check',
            f_ui_left: 'left-angle',
            f_ui_up: 'up-angle',
            f_ui_right: 'right-angle',
            f_ui_down: 'down-angle',
            f_ui_left2: 'left-angle2',
            f_ui_right2: 'right-angle2',
            f_ui_dots3h: 'dots3h',
            f_ui_dots3v: 'dots3v'
        };
    }
    function copyRectCoords(src, dst) {
        dst.left = src.x - src.w;
        dst.top = src.y - src.h;
        dst.width = src.w * 2;
        dst.height = src.h * 2;
        return;
    }
    function handleGroupDuration(node) {
        var newNode, content;
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                newNode = {
                    type: 'group-duration',
                    x: node.x,
                    y: node.y
                };
                copyContent(node, newNode);
                copyNodeStyle(node, newNode);
                content = node.content;
                if (content.right) {
                    newNode.flag1 = true;
                    newNode.loX = -content.h1x;
                    newNode.loY = content.h1y;
                    newNode.hiX = -content.h0x;
                    newNode.hiY = -content.h0y;
                    __state = '4';
                } else {
                    newNode.flag1 = false;
                    newNode.loX = content.h1x;
                    newNode.loY = content.h1y;
                    newNode.hiX = content.h0x;
                    newNode.hiY = -content.h0y;
                    __state = '4';
                }
                break;
            case '4':
                return newNode;
            default:
                return;
            }
        }
    }
    function handleSimpleFree(node, type) {
        var newNode;
        newNode = { type: type };
        copyRectCoords(node, newNode);
        copyContent(node, newNode);
        copyNodeStyle(node, newNode);
        return newNode;
    }
    function handleTab(node) {
        var newNode;
        newNode = handleSimpleFree(node, 'tab');
        newNode.aux = 10;
        return newNode;
    }
    function sortFreeIcons(srcItems) {
        var byNext, first, current, zIndex, result, _var3, _var2, _var4, id, element, _var6, _var5, _var7;
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                byNext = {};
                result = [];
                _var3 = srcItems;
                _var2 = Object.keys(_var3);
                _var4 = 0;
                __state = '7';
                break;
            case '4':
                return result;
            case '5':
                _var6 = srcItems;
                _var5 = Object.keys(_var6);
                _var7 = 0;
                __state = '10';
                break;
            case '6':
                _var4++;
                __state = '7';
                break;
            case '7':
                if (_var4 < _var2.length) {
                    id = _var2[_var4];
                    element = _var3[id];
                    if (element.next) {
                        byNext[element.next] = element;
                        __state = '6';
                    } else {
                        __state = '6';
                    }
                } else {
                    __state = '5';
                }
                break;
            case '10':
                if (_var7 < _var5.length) {
                    id = _var5[_var7];
                    element = _var6[id];
                    if (id in byNext) {
                        _var7++;
                        __state = '10';
                    } else {
                        first = element;
                        __state = '14';
                    }
                } else {
                    __state = '4';
                }
                break;
            case '14':
                zIndex = 1;
                current = first;
                __state = '29';
                break;
            case '29':
                current.zIndex = zIndex;
                zIndex++;
                result.push(current);
                if (current.next) {
                    current = srcItems[current.next];
                    __state = '29';
                } else {
                    __state = '4';
                }
                break;
            default:
                return;
            }
        }
    }
    function handleLine(node) {
        var newNode;
        newNode = {
            type: 'line',
            left: node.x,
            top: node.y,
            x2: node.w,
            y2: node.h
        };
        copyContent(node, newNode);
        copyNodeStyle(node, newNode);
        return newNode;
    }
    function convertFreeFromHub(srcDiagram, diagram) {
        var free, handlers, _var2, _var3, element;
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                free = sortFreeIcons(srcDiagram.free);
                handlers = buildFreeHandlers();
                _var2 = free;
                _var3 = 0;
                __state = '6';
                break;
            case '6':
                if (_var3 < _var2.length) {
                    element = _var2[_var3];
                    handleFreeElement(handlers, element, diagram);
                    _var3++;
                    __state = '6';
                } else {
                    copyDiaStyle(srcDiagram, diagram);
                    return;
                }
                break;
            default:
                return;
            }
        }
    }
    function makeSimpleFreeHandler(type) {
        var _var2;
        return function (node) {
            _var2 = handleSimpleFree(node, type);
            return _var2;
        };
    }
    function FilenameSymbolChecker() {
        var self = {};
        self.isGoodFileChar = function (ch) {
            return FilenameSymbolChecker_isGoodFileChar(self, ch);
        };
        return self;
    }
    unit.fromHubToPro = fromHubToPro;
    unit.FilenameSymbolChecker = FilenameSymbolChecker;
    return unit;
}
if (typeof module != 'undefined') {
    module.exports = HubToPro;
}