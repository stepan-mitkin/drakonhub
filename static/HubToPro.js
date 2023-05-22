function HubToPro() {
    var unit = {};
    function fromHubToPro(content) {
        var name, filename, obj, diagram, diagramStr, srcDiagram, _var2;
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                obj = JSON.parse(content);
                name = makeFilename(obj.name);
                filename = name + '.' + obj.type;
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
                    if (_var2 === 'graf') {
                        __state = '8';
                    } else {
                        if (_var2 === 'free') {
                            __state = '8';
                        } else {
                            throw new Error('Unexpected case value: ' + _var2);
                        }
                    }
                }
                break;
            case '8':
                diagramStr = JSON.stringify(diagram, null, 4);
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
        var below, selectNode, prev, junc, current, caseNode, one, _var2, _var3, _var4;
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
                _var2 = getTxt(node);
                selectNode = {
                    type: 'select',
                    content: _var2,
                    one: prev.id
                };
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
                _var4 = getDown(current);
                one = getNextHub(_var4);
                stack.push(one);
                _var3 = getTxt(current);
                caseNode = {
                    type: 'case',
                    content: _var3,
                    one: one.id
                };
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
        var newNode, content, one, two, _var2, _var3;
        _var2 = getDown(node);
        _var3 = getRight(node);
        one = getNextHub(_var2);
        two = getNextHub(_var3);
        content = getTxt(node);
        newNode = {
            type: 'question',
            content: content,
            flag1: node.flag1,
            one: one.id,
            two: two.id
        };
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
        var newNode, next, content, _var2;
        content = getTxt(node);
        _var2 = getDown(node);
        next = getNextHub(_var2);
        newNode = {
            type: type,
            content: content,
            one: next.id
        };
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
    function convertSilhouetteFromHub(srcDiagram, diagram) {
        var handlers, silBranch, firstNode, branchId, branches, _var2, _var3, branch, _var4, _var5;
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
                    _var5 = getDown(branch);
                    firstNode = getNextHub(_var5);
                    _var4 = getTxt(branch);
                    silBranch = {
                        type: 'branch',
                        branchId: branchId,
                        content: _var4,
                        one: firstNode.id
                    };
                    addProNode(diagram, branch.id, silBranch);
                    copyNodeStyle(branch, silBranch);
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
        var content, context, format, defaultFont, _var2, _var3;
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                content = src.content;
                if (content) {
                    context = { hasValue: false };
                    format = {};
                    copyValue(content, 'lineColor', format, 'iconBorder', context);
                    copyValue(content, 'fillColor', format, 'iconBack', context);
                    copyValue(content, 'lineThickness', format, 'borderWidth', context);
                    copyValue(content, 'align', format, 'textAlign', context);
                    copyValue(content, 'textColor', format, 'color', context);
                    __state = '12';
                } else {
                    __state = '11';
                }
                break;
            case '11':
                return;
            case '12':
                _var2 = hasValue(content.lineStyle);
                if (_var2) {
                    format.borderStyle = convertBorderStyle(content.lineStyle);
                    context.hasValue = true;
                    __state = '27';
                } else {
                    __state = '27';
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
            case '27':
                defaultFont = '14px \'Liberation Sans\'';
                _var3 = hasValue(content.font);
                if (_var3) {
                    if (content.font === defaultFont) {
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
    function genNextId(srcDiagram) {
        var id;
        id = srcDiagram.nextId;
        srcDiagram.nextId++;
        return id;
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
    function connectHubGraph(diagram) {
        var nodes, edges, item, srcNodes, srcEdges, header, params, nextId, _var3, _var2, _var4, id, node, _var6, _var5, _var7, edge;
        var __state = '2';
        while (true) {
            switch (__state) {
            case '2':
                header = undefined;
                params = undefined;
                srcNodes = diagram.nodes || {};
                srcEdges = diagram.edges || {};
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
                    if (item.type === 'beginend') {
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
                    __state = '8';
                }
                break;
            case '22':
                edges[id] = item;
                _var7++;
                __state = '13';
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
        var branches, headerNode;
        var __state = '2';
        while (true) {
            switch (__state) {
            case '1':
                return;
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
                    __state = '10';
                } else {
                    convertSilhouetteFromHub(srcDiagram, diagram);
                    __state = '10';
                }
                break;
            case '10':
                copyDiaStyle(srcDiagram, diagram);
                headerNode = { type: 'header' };
                copyNodeStyle(srcDiagram.header, headerNode);
                if (headerNode.style) {
                    addProNode(diagram, 'header', headerNode);
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
                    if (id > nextId) {
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