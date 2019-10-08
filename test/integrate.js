QUnit.module( "Utils" );

function testCopyItem(assert, source, expected) {
	var src = JSON.parse(source);
	var exp = JSON.parse(expected);
	var copy = Utils.copyItem(src);
	assert.equal(setsDeepEqual(copy, exp), true);
}


function testCopyObject(assert, src) {
	var copy = Utils.copyObjectDeep(src)
	assert.deepEqual(copy, src)
}

QUnit.test("copyObjectDeep", function(assert) {
	testCopyObject(assert, undefined)
	testCopyObject(assert, null)
	testCopyObject(assert, {})
	testCopyObject(assert, [])
	testCopyObject(assert, {"name": "hello", "value":10, "cool":true})
	testCopyObject(assert, [true, 10, "one"])
})

QUnit.test("copyItem", function(assert) {

	testCopyItem(
		assert,
		'{ "text":"hello", "id":10, "x":"20" }',
		'{"content": { "txt": "hello", "txt2": "" }, "id":"10", "x":20 }'
	);

	testCopyItem(
		assert,
		'{"content": { "txt": "bye!", "txt2": "" }, "text":"hello", "id":10, "x":"20" }',
		'{"content": { "txt": "bye!", "txt2": "" }, "id":"10", "x":20 }'
	);

	testCopyItem(
		assert,
		'{"text":"hello", "content": { "txt": "bye!", "txt2": "" }, "id":10, "x":"20" }',
		'{"content": { "txt": "bye!", "txt2": "" }, "id":"10", "x":20 }'
	);

	testCopyItem(
		assert,
		'{"content": { "txt": "hello!", "txt2": "bye" }, "id":10, "x":"20" }',
		'{"content": { "txt": "hello!", "txt2": "bye" }, "id":"10", "x":20 }'
	);

});


QUnit.test("normalizeString", function(assert) {
	assert.equal(Utils.normalizeString("").text, "")
	assert.equal(Utils.normalizeString("abc").text, "abc")
	assert.equal(Utils.normalizeString("  What is  THIS? ").text, "what is this")
	assert.equal(Utils.normalizeString("\t\r\nWhat\nis\tTHIS?\n\n").text, "what is this")
	assert.equal(Utils.normalizeString("  What: (is-), THIS+/?").text, "what is this")
	
	assert.deepEqual(Utils.normalizeString("\t\r\nWhat\nis\tTHIS?\n\n").map[0], {pos:0, lineNo:1})
	assert.deepEqual(Utils.normalizeString("\t\r\nWhat\nis\tTHIS?\n\n").map[9], {pos:4, lineNo:2})
});

QUnit.test("findNormSubstring", function(assert) {	
	assert.equal(Utils.findNormSubstring("Abc", "abc").line, "Abc")
	assert.equal(Utils.findNormSubstring("Abc", "abc").start, 0)
	assert.equal(Utils.findNormSubstring("Abc", "abc").length, 3)
	
	assert.equal(Utils.findNormSubstring(" u  What is  THIS? ", "what is this").line, " u  What is  THIS? ")
	assert.equal(Utils.findNormSubstring(" u  What is  THIS? ", "what is this").start, 4)
	assert.equal(Utils.findNormSubstring(" u  What is  THIS? ", "what is this").length, 13)	
	
	assert.equal(Utils.findNormSubstring(" u  What is  \n THIS? ", "what is this").line, " u  What is  ")
	assert.equal(Utils.findNormSubstring(" u  What is  \n THIS? ", "what is this").start, 4)
	assert.equal(Utils.findNormSubstring(" u  What is  \n THIS? ", "what is this").length, 9)		
	
	assert.equal(Utils.findNormSubstring("yes\n u  What is  \n THIS? ", "what is this").line, " u  What is  ")
	assert.equal(Utils.findNormSubstring("yes\n u  What is  \n THIS? ", "what is this").start, 4)
	assert.equal(Utils.findNormSubstring("yes\n u  What is  \n THIS? ", "what is this").length, 9)			
});




QUnit.test("findManySubstrings", function(assert) {
	assert.deepEqual(Utils.findManySubstrings("", ""), [])
	assert.deepEqual(Utils.findManySubstrings("abc", "abc", true), [{line:"abc", first:1, last:3, lineNo:1}])
	assert.deepEqual(Utils.findManySubstrings(" abc Abc", "abc", true), [{line:" abc Abc", first:2, last:4, lineNo:1}, {line:" abc Abc", first:6, last:8, lineNo:1}])
	assert.deepEqual(Utils.findManySubstrings(" abc Abc\nAbc abc", "abc", false), [{line:" abc Abc", first:2, last:4, lineNo:1}, {line:"Abc abc", first:5, last:7, lineNo:2}])
});


function co(text) {

	return new Utils.Content(text, "");
}

function checkEInter(assert, x1, y1, x2, y2, x3, y3, x4, y4, hasError) {
	var graph = new Utils.Manhattan()
	var node1 = {
		id: 1,
		isLine: false,
		x: x1,
		y: y1
	}
	var node2 = {
		id: 2,
		isLine: false,
		x: x2,
		y: y2
	}
	var node3 = {
		id: 3,
		isLine: false,
		x: x3,
		y: y3
	}
	var node4 = {
		id: 4,
		isLine: false,
		x: x4,
		y: y4
	}
		
	graph.addItem(node1)
	graph.addItem(node2)
	graph.addItem(node3)
	graph.addItem(node4)
	
	var edge5 = {
		id: 5,
		isLine: true,
		isVertical: node1.x == node2.x,
		head: 1,
		tail: 2
	}
	var edge6 = {
		id: 6,
		isLine: true,
		isVertical: node3.x == node4.x,
		head: 3,
		tail: 4
	}
	
	graph.addItem(edge5)
	graph.addItem(edge6)
	var error = graph.checkEdges()
	assert.equal((error != null), hasError)
}

function checkCardNumber(assert, number, plain, formatted) {
	var result = Utils.checkCardNumber(number)
	assert.equal(result.plain, plain)
	assert.equal(result.formatted, formatted)
}

QUnit.test( "caretToNonSpaces", function(assert) {
	assert.equal(Utils.caretToNonSpaces("", 0), 0)
	assert.equal(Utils.caretToNonSpaces("123", 0), 0)
	assert.equal(Utils.caretToNonSpaces("123", 3), 3)
	assert.equal(Utils.caretToNonSpaces("123", 2), 2)
	
	assert.equal(Utils.caretToNonSpaces(" 123 456 ", 6), 4)
	
	assert.equal(Utils.nonSpacesToCaret("", 0), 0)
	assert.equal(Utils.nonSpacesToCaret("123", 0), 0)
	assert.equal(Utils.nonSpacesToCaret("123", 3), 3)
	assert.equal(Utils.nonSpacesToCaret("123", 2), 2)
	
	assert.equal(Utils.nonSpacesToCaret(" 123 456 ", 4), 6)	
	
})

function extractUrls(text) {
	var parts = Utils.extractUrls(text)
	return parts.join(", ")
}

QUnit.test( "extractUrls", function(assert) {

	assert.equal(extractUrls(null), "")
	assert.equal(extractUrls(""), "")
	assert.equal(extractUrls(undefined), "")
	assert.equal(extractUrls(" "), "")
	assert.equal(extractUrls("hello"), "")
	assert.equal(extractUrls("what is that"), "")
	assert.equal(extractUrls("https://example.com"), "https://example.com")
	assert.equal(extractUrls("https://example.com http://example.com"), "https://example.com, http://example.com")
	assert.equal(extractUrls("wow,https://example-345.ru/foo/bar?moo=40&foo=ha#what-is,(http://example.com)"), "https://example-345.ru/foo/bar?moo=40&foo=ha#what-is, http://example.com")
})


QUnit.test( "email", function(assert) {

	assert.equal(Utils.checkEmail("hello@buy.com"), true)
	assert.equal(Utils.checkEmail("long-email.hello@test.drakon-editor.com"), true)
	assert.equal(Utils.checkEmail("long-email.hello@test.drakon-editor.com"), true)
	assert.equal(Utils.checkEmail("one-two@drakon.editor.com"), true)
	assert.equal(Utils.checkEmail("one.two@drakon-editor.com"), true)
	assert.equal(Utils.checkEmail("f1@ya.ru"), true)
	assert.equal(Utils.checkEmail("f1@y1.ru"), true)
	assert.equal(Utils.checkEmail("42135@2345.no"), true)
	
	
	assert.equal(Utils.checkEmail("f1@y1.ru@"), false)
	assert.equal(Utils.checkEmail("@test.drakon-editor.com"), false)
	assert.equal(Utils.checkEmail("some.user@"), false)
	assert.equal(Utils.checkEmail("some.user@a"), false)
	assert.equal(Utils.checkEmail("drakon-editor.com"), false)
	assert.equal(Utils.checkEmail("hello world"), false)
	assert.equal(Utils.checkEmail("hello,world"), false)
	assert.equal(Utils.checkEmail(" "), false)
	assert.equal(Utils.checkEmail(""), false)
	assert.equal(Utils.checkEmail(null), false)
	assert.equal(Utils.checkEmail(undefined), false)
})

QUnit.test( "luhn", function(assert) {

	assert.equal(Utils.checkCardNumber(null), null)
	assert.equal(Utils.checkCardNumber(""), null)
	assert.equal(Utils.checkCardNumber("abc"), null)
	
	assert.equal(Utils.checkCardNumber("4106513006475686"), null)
	assert.equal(Utils.checkCardNumber("4106513ABC475686"), null)
	
	
	assert.equal(Utils.checkCardNumber("1234561"), null)
	assert.equal(Utils.checkCardNumber("123456789012345678906"), null)
	
	

	checkCardNumber(assert, "4106513036475686", "4106513036475686", "4106 5130 3647 5686")
	checkCardNumber(assert, "4106513026694551", "4106513026694551", "4106 5130 2669 4551")
	checkCardNumber(assert, "5189969985448552", "5189969985448552", "5189 9699 8544 8552")
	
	
	assert.equal(Utils.checkCardNumber("5189 9699 8546 8552"), null)
	
	checkCardNumber(assert, "5189 9699 8544 8552", "5189969985448552", "5189 9699 8544 8552")
	
	checkCardNumber(assert, "  4106 5130  3647\t5686\t\t", "4106513036475686", "4106 5130 3647 5686")
	checkCardNumber(assert, "  410651  30266 94551 ", "4106513026694551", "4106 5130 2669 4551")
})


QUnit.test( "hardWrap", function(assert) {
	var ut = new UtilsModule();
	assert.equal(ut.hardWrap(null, 10), null);
	assert.equal(ut.hardWrap(undefined, 10), undefined);
	assert.equal(ut.hardWrap("", 10), "");	
	assert.equal(ut.hardWrap(" hello! ", 10), " hello! ");
	assert.equal(ut.hardWrap(" hello! my fried! how are you?  ", 10), " hello! my\n fried! \nhow are \nyou?  ");
	assert.equal(ut.hardWrap(" hello! my 12345678901234567890123 fried how are you?  ", 10), " hello! my\n 123456789\n0123456789\n0123 fried\n how are \nyou?  ");	
	assert.equal(ut.hardWrap("one two three four\nfive six eight nine", 10), "one two \nthree four\nfive six \neight nine");
});

function setItemText(editor, id, text) {
	editor.test.setItemText(editor, id, new Utils.Content(text, ""));
}

function checkTokens(assert, text, expected) {
	var ut = new UtilsModule();
	var tokens = ut.tokenize(text, true);
	assert.equal(setsDeepEqual(tokens, expected), true);
}

function checkFlow(assert, text, width, expected) {
	var ut = new UtilsModule();
	var render = makeIntegrationRender();
	var div = ut.buildFlow(render, text, width);
	var actual = printDiv(div);
	assert.equal(setsDeepEqual(actual, expected), true);
}

function printDiv(block) {
	var result = [];

	for (var l = 0; l < block.lines.length; l++) {
		var line = block.lines[l];
		var text = line.bottom + "," + line.width + ":";
		for (var t = 0; t < line.tokens.length; t++) {
			text += line.tokens[t].text;
		}
		result.push(text);
	}

	return result;	
}

QUnit.test("checkEdges", function(assert) {
	checkEInter(assert, 10, 20, 10, 100, 20, 400, 50, 400, false)
	checkEInter(assert, 10, 20, 10, 100, 0, 400, 50, 400, false)
	checkEInter(assert, 10, 20, 10, 100, 20, 60, 50, 60, false)
	checkEInter(assert, 10, 20, 10, 100, 10, 20, 50, 20, false)
	checkEInter(assert, 10, 20, 10, 100, 10, 100, 50, 100, false)
	
	
	checkEInter(assert, 10, 20, 10, 100, 0, 60, 50, 60, true)
	checkEInter(assert, 10, 20, 10, 100, 10, 60, 50, 60, true)
	checkEInter(assert, 10, 20, 10, 100, 0, 20, 50, 20, true)
});

QUnit.test("distanceToPoint", function(assert) {
	var line = Utils.lineFrom2Points(0, 2, 4, 2)
	assert.equal(line.distanceToPoint(2, 3), 1)

	line = Utils.lineFrom2Points(1, 2, 3, 1)
	assert.equal(line.distanceToPoint(1, 2), 0)
	assert.equal(line.distanceToPoint(3, 1), 0)
	assert.equal(line.distanceToPoint(2, 3), 1.3416407864998738)

});

QUnit.test("buildFlow", function(assert) {
	checkFlow(assert, "", 30, ["22,0:"]);
	checkFlow(assert, null, 30, ["22,0:"]);
	checkFlow(assert, undefined, 30, ["22,0:"]);
	checkFlow(assert, "hi hello", 30, ["22,14:hi", "51,28:hell", "80,7:o"]);
	checkFlow(assert, "hello", 30, ["22,28:hell", "51,7:o"]);
	checkFlow(assert, "hello", 40, ["22,35:hello"]);
	checkFlow(assert, "20-30-40", 56, ["22,56:20-30-40"]);
	checkFlow(assert, "hello hi", 30, ["22,28:hell", "51,28:o hi"]);
	checkFlow(assert, "one-two-three", 49, ["22,49:one-two", "51,42:-three"]);
	checkFlow(assert, "one", 2, ["22,7:o", "51,7:n", "80,7:e"]);
	checkFlow(assert, "1234 5678", 28, ["22,28:1234", "51,28:5678"]);
	checkFlow(assert, "o n e", 2, ["22,7:o", "51,7:n", "80,7:e"]);
	checkFlow(assert, "hello\nworld", 40, ["22,35:hello", "51,35:world"]);
	checkFlow(assert, " one, (two)", 35, ["22,35: one,", "51,35:(two)"]);
});

QUnit.test("tokenize", function(assert) {
	checkTokens(assert, null, []);
	checkTokens(assert, undefined, []);
	checkTokens(assert, "", []);
	checkTokens(assert, "hello", [{type:"id", text:"hello"}]);
	checkTokens(assert, "hello123", [{type:"id", text:"hello123"}]);
	checkTokens(assert, "1234567890", [{type:"num", text:"1234567890"}]);
	checkTokens(assert, "0xabcde0", [{type:"num", text:"0xabcde0"}]);
	checkTokens(assert, " ", [{type:"ws", text:" "}]);
	checkTokens(assert, "\t", [{type:"ws", text:"\t"}]);
	checkTokens(assert, "\n", [{type:"ws", text:"\n"}]);
	checkTokens(assert, "\r", []);

	checkTokens(assert, 'var hello = who(voo.x[0],p+4)', [
		{type:"id", text:"var"},
		{type:"ws", text:" "},
		{type:"id", text:"hello"},
		{type:"ws", text:" "},
		{type:"op", text:"="},
		{type:"ws", text:" "},
		{type:"id", text:"who"},
		{type:"op", text:"("},
		{type:"id", text:"voo"},
		{type:"op", text:"."},
		{type:"id", text:"x"},
		{type:"op", text:"["},
		{type:"num", text:"0"},
		{type:"op", text:"]"},
		{type:"op", text:","},
		{type:"id", text:"p"},
		{type:"op", text:"+"},
		{type:"num", text:"4"},
		{type:"op", text:")"}
	]);
});

function testSortLinkedList(assert, items, expected) {
	var sorted = Utils.sortLinkedList(items, "foo")
	var actual = sorted.map(function(item) { return item.foo })
	assert.deepEqual(actual, expected)
}

QUnit.test("checkSpaceName", function(assert) {
	assert.equal(Utils.checkSpaceName(null), "ERR_EMPTY_NAME")
	assert.equal(Utils.checkSpaceName(), "ERR_EMPTY_NAME")
	assert.equal(Utils.checkSpaceName(""), "ERR_EMPTY_NAME")	
	assert.equal(Utils.checkSpaceName("a"), "ERR_NAME_TOO_SHORT")	
	assert.equal(Utils.checkSpaceName("hi12345678901234567890hi12345678901234567890hi12345678901234567890hi12345678901234567890"), "ERR_NAME_TOO_LONG")
	
	assert.equal(Utils.checkSpaceName("hello world"), "ERR_NAME_INVALID")
	assert.equal(Utils.checkSpaceName("hello\nworld"), "ERR_NAME_INVALID")
	assert.equal(Utils.checkSpaceName("-._"), "ERR_NAME_INVALID")
	assert.equal(Utils.checkSpaceName("hello/world"), "ERR_NAME_INVALID")
	assert.equal(Utils.checkSpaceName("hello:world"), "ERR_NAME_INVALID")
	
	assert.equal(Utils.checkSpaceName("helloworld"), null)
	assert.equal(Utils.checkSpaceName("HW"), null)
	assert.equal(Utils.checkSpaceName("hello-world"), null)
	assert.equal(Utils.checkSpaceName("hello.world"), null)
	assert.equal(Utils.checkSpaceName("hello_world"), null)
	assert.equal(Utils.checkSpaceName("123456"), null)
})


QUnit.test("sortLinkedList", function(assert) {
	testSortLinkedList(assert, [], [])
	testSortLinkedList(assert, {
         a: {foo: ""},
         b: {foo:"a"},
		 c: {foo:"d"},
         d: {foo:"b"}
	}, ["d", "b", "a", ""])
})

function testFontString(assert, fontString, italic, bold, size, family) {
	var info = Utils.parseFontString(fontString)
	assert.equal(info.italic, italic)
	assert.equal(info.bold, bold)
	assert.equal(info.size, size)
	assert.equal(info.family, family)
	var str2 = Utils.buildFontString(italic, bold, size, family)
	assert.equal(str2, fontString)
}

QUnit.test("parseFontString", function(assert) {
	testFontString(assert, "10px Arial", false, false, 10, "Arial")
	testFontString(assert, "bold 10px Arial", false, true, 10, "Arial")
	testFontString(assert, "italic 10px Arial", true, false, 10, "Arial")
	testFontString(assert, "italic bold 10px Arial", true, true, 10, "Arial")
	testFontString(assert, "italic bold 10px 'PT Sans'", true, true, 10, "PT Sans")
	testFontString(assert, "12px 'PT Sans'", false, false, 12, "PT Sans")
})


QUnit.test("px2CalculatePayment", function(assert) {

	
	checkPx2CalculatePayment(
		assert,
		"extended",
		1,
		{
			products: {
				extended: { price: 5.00, maxUsers: 1, minUsers: 1}
			}
		},
		{
			price: 5.00,
			total: 5.00,
			sum: 5.00,
			mva: 0,
			errorDetails:""
		}
	)
	
	checkPx2CalculatePayment(
		assert,
		"extended",
		1,
		{
			products: {
				extended: { price: 5.00, maxUsers: 1, minUsers: 1}
			},
			mva: 0.2
		},
		{
			price: 5.00,
			total: 5.00,
			sum: 4.16,
			mva: 0.84,
			errorDetails:""
		}
	)
	
	checkPx2CalculatePayment(
		assert,
		"extended",
		2,
		{
			products: {
				extended: { price: 5.00, maxUsers: 1, minUsers: 1}
			},
			mva: 0.2
		},
		{
			error: "ERR_NUM_USERS_TOO_LARGE",
			errorDetails:1
		}
	)
	
	checkPx2CalculatePayment(
		assert,
		"team",
		4,
		{
			products: {
				team: { price: 4.00, maxUsers: 1000, minUsers: 5}
			},
			mva: 0.2
		},
		{
			error: "ERR_NUM_USERS_TOO_LITTLE",
			errorDetails:5
		}
	)

	checkPx2CalculatePayment(
		assert,
		"team",
		10,
		{
			products: {
				team: { price: 4.00, maxUsers: 1000, minUsers: 5}
			},
			mva: 0.0
		},
		{
			price: 4.00,
			total: 40.00,
			sum: 40.00,
			mva: 0.00,
			errorDetails:""
		}
	)
	
	checkPx2CalculatePayment(
		assert,
		"team",
		10,
		{
			products: {
				team: { price: 4.00, maxUsers: 1000, minUsers: 5}
			},
			mva: 0.2
		},
		{
			price: 4.00,
			total: 40.00,
			sum: 33.33,
			mva: 6.67,
			errorDetails:""
		}
	)

	
	
})

QUnit.test("calculatePayment", function(assert) {

	checkcalculatePayment(
		assert,
		undefined,
		"extended",
		null,
		{
			products: {
				extended: { price: 2.99, maxUsers: 1, minUsers: 1}
			}
		},
		makeDate(2016, 8, 15, 16, 30, 0),
		{
			error: "ERR_NUM_USERS_SPECIFY",
			price: 2.99
		}
	)
	
	checkcalculatePayment(
		assert,
		"",
		"extended",
		null,
		{
			products: {
				extended: { price: 2.99, maxUsers: 1, minUsers: 1}
			}
		},
		makeDate(2016, 8, 15, 16, 30, 0),
		{
			error: "ERR_NUM_USERS_SPECIFY",
			price: 2.99
		}
	)		
	
	checkcalculatePayment(
		assert,
		-1,
		"extended",
		null,
		{
			products: {
				extended: { price: 2.99, maxUsers: 1, minUsers: 1}
			}
		},
		makeDate(2016, 8, 15, 16, 30, 0),
		{
			error: "ERR_NUM_USERS_TOO_LITTLE",
			price: 2.99
		}
	)
	
	checkcalculatePayment(
		assert,
		10,
		"extended",
		null,
		{
			products: {
				extended: { price: 2.99, maxUsers: 1, minUsers: 1}
			}
		},
		makeDate(2016, 8, 15, 16, 30, 0),
		{
			error: "ERR_NUM_USERS_TOO_LARGE",
			price: 2.99
		}
	)		
	
	
	checkcalculatePayment(
		assert,
		1,
		"extended",
		null,
		{
			products: {
				extended: { price: 2.99, maxUsers: 1, minUsers: 1, periodMon: 12}
			}
		},
		makeDate(2016, 8, 15, 16, 30, 0),
		{
			sum: 35.88,
			price: 2.99,
			total: 35.88,
			period: oneYear() + oneDay(),
			remainingValue: 0,
			effectiveStart: makeDate(2016, 8, 15, 16, 30, 0),
			expiry: makeDate(2016, 8, 15, 16, 30, 0) + oneYear() + oneDay(),
			mva: 0
		}
	)
	
	checkcalculatePayment(
		assert,
		1,
		"extended",
		{
			productId: "basic",
			users: 1,
			expiry: makeDate(2017, 8, 27, 10, 0, 0),
		},
		{
			products: {
				extended: { price: 2.99, maxUsers: 1, minUsers: 1, periodMon: 12}
			}
		},
		makeDate(2016, 8, 15, 16, 30, 0),
		{
			sum: 35.88,
			price: 2.99,
			total: 35.88,
			period: oneYear() + oneDay(),
			remainingValue: 0,
			effectiveStart: makeDate(2016, 8, 15, 16, 30, 0),
			expiry: makeDate(2016, 8, 15, 16, 30, 0) + oneYear() + oneDay(),
			mva: 0
		}
	)	
	
	checkcalculatePayment(
		assert,
		1,
		"extended",
		{
			users: 1,
			expiry: makeDate(2016, 8, 27, 16, 30, 0),
			sum: 35.88,
			period: oneYear() + oneDay()		
		},
		{
			products: {
				extended: { price: 2.99, maxUsers: 1, minUsers: 1, periodMon: 12}
			}
		},
		makeDate(2016, 8, 15, 16, 30, 0),
		{
			sum: 35.88,
			price: 2.99,
			total: 34.7,
			period: oneYear() + oneDay(),
			remainingValue: 1.18,
			effectiveStart: makeDate(2016, 8, 15, 16, 30, 0),
			expiry: makeDate(2016, 8, 15, 16, 30, 0) + oneYear() + oneDay(),
			mva: 0
		}
	)
	
	checkcalculatePayment(
		assert,
		1,
		"extended",
		{
			users: 1,
			expiry: makeDate(2016, 8, 27, 16, 30, 0)
		},
		{
			products: {
				extended: { price: 2.99, maxUsers: 1, minUsers: 1, periodMon: 12}
			}
		},
		makeDate(2016, 8, 15, 16, 30, 0),
		{
			sum: 35.88,
			price: 2.99,
			total: 35.88,
			period: oneYear() + oneDay(),
			remainingValue: 0,
			effectiveStart: makeDate(2016, 8, 15, 16, 30, 0),
			expiry: makeDate(2016, 8, 15, 16, 30, 0) + oneYear() + oneDay(),
			mva: 0
		}
	)	
	
	checkcalculatePayment(
		assert,
		5,
		"team",
		{
			users: 1,
			expiry: makeDate(2016, 8, 27, 16, 30, 0),
			sum: 35.88,
			period: oneYear() + oneDay()
		},
		{
			products: {
				team: { price: 3.99, maxUsers: 1000, minUsers: 5, periodMon: 12}
			}
		},
		makeDate(2016, 8, 15, 16, 30, 0),
		{
			sum: 239.4,
			price: 3.99,
			total: 238.22,
			period: oneYear() + oneDay(),
			remainingValue: 1.18,
			effectiveStart: makeDate(2016, 8, 15, 16, 30, 0),
			expiry: makeDate(2016, 8, 15, 16, 30, 0) + oneYear() + oneDay(),
			mva: 0
		}
	)
	
	checkcalculatePayment(
		assert,
		1000,
		"team",
		null,
		{
			products: {
				team: { price: 3.99, maxUsers: 1000, minUsers: 5, periodMon: 12}
			}
		},
		makeDate(2016, 8, 15, 16, 30, 0),
		{
			sum: 47880,
			price: 3.99,
			total: 47880,
			period: oneYear() + oneDay(),
			remainingValue: 0,
			effectiveStart: makeDate(2016, 8, 15, 16, 30, 0),
			expiry: makeDate(2016, 8, 15, 16, 30, 0) + oneYear() + oneDay(),
			mva: 0
		}
	)
	
	checkcalculatePayment(
		assert,
		1000,
		"team",
		null,
		{
			products: {
				team: { price: 3.99, maxUsers: 1000, minUsers: 5, periodMon: 12}
			},
			mva: 0.1
		},
		makeDate(2016, 8, 15, 16, 30, 0),
		{
			sum: 47880,
			price: 3.99,
			total: 52668,
			period: oneYear() + oneDay(),
			remainingValue: 0,
			effectiveStart: makeDate(2016, 8, 15, 16, 30, 0),
			expiry: makeDate(2016, 8, 15, 16, 30, 0) + oneYear() + oneDay(),
			mva: 4788
		}
	)
})

function oneYear() {
	var days = 365.25
	return Math.round(3600 * 24 * days)
}

function oneDay() {
	return 3600 * 24
}

function makeDate(year, month, day, hours, mins, secs) {
	var date = new Date(year, month, day, hours, mins, secs, 0)
	return Math.round(date.getTime()/1000)
}

function checkcalculatePayment(assert, numUsers, productId, oldLicense, pricing, now, expected) {
	var ctrl = new PayCtrl()
	var actual = ctrl.calculatePayment(numUsers, productId, oldLicense, pricing, now)
	assert.equal(setsDeepEqual(actual, expected), true)
	
}

function checkPx2CalculatePayment(assert, productId, numUsers, pricing, expected) {
	var ctrl = new PayCtrl()
	var actual = ctrl.px2CalculatePayment(numUsers, productId, pricing)
	assert.equal(setsDeepEqual(actual, expected), true)
	
}

function setsDeepEqual(left, right) {
	var leftKeys = Object.keys(left);
	var rightKeys = Object.keys(right);
	var leftLength = leftKeys.length;
	var rightLength = rightKeys.length;
	if (leftLength != rightLength) {
		console.log("different sizes:", leftLength, rightLength, leftKeys, rightKeys);
		return false;
	}
	
	for (var i = 0; i < leftLength; i++) {
		var leftKey = leftKeys[i];
		var rightKey = rightKeys[i];		
		if (!(leftKey in right)) {
			console.log("left key not present in right:", leftKey, right);
			return false;
		}
		if (!(rightKey in left)) {
			console.log("right key not present in left:", rightKey, left);		
			return false;
		}
		var leftValue = left[leftKey];
		var rightValue = right[leftKey];
		if ((typeof leftValue == "object") && (typeof rightValue == "object")) {
			if (!setsDeepEqual(leftValue, rightValue)) {
				console.log("different object values for key:", leftKey, leftValue, rightValue);
				return false;
			}
		} else if (leftValue != rightValue) {
			console.log("different simple values for key:", leftKey, leftValue, rightValue, left, right);
			return false;
		}
	}
	
	return true;
}



function makeIntegrationRender() {
	var render = new RenderFake();
	
	render.getFontHeight = function() {
        return 22;
    }
    
    render.measureTextWidth = function(text) {
        return text.length * 7;
    }
	return render;
}

function testMakeEditor() {
	var render = makeIntegrationRender();
	var utils = new UtilsModule();
	var items = new ItemsModule(utils);
	var persistence = new FakePersistence();
	var editor = new Editor(render, persistence, utils, items);
	return editor;
}	


function testCanDelete(assert, dia, id, can) {
    var editor = testMakeEditor();

    setTestDiagram(
    	editor,
    	dia
    );

	var item = editor.storage.graph.items[id];
    var actual = editor.test.canDeleteItem(editor, item);
	
	assert.equal(actual, can);
}

function testEditAction(assert, start, end, action) {
    var editor = testMakeEditor();
	
    setTestDiagram(
    	editor,
    	start
    );

	action(editor);
   
    assertDiagram(
    	assert,
    	editor,
    	end
    );
}



function FakePersistence() {
var self = this;

self.add = function(item) {

}

self.remove = function(id) {

}

self.update = function(item) {
}

self.updateDiagram = function(name) {
	self.name = name;
}


self.persist = function() {

}
}


