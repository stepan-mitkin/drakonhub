local plan = 56

package.path = package.path .. ';../app/?.lua'

local mysql_config = {
	host = "127.0.0.1",
	user = "tara",
	password = "123456"
}

local use_mysql = false
local include_licensing = false

os = require("os")
tap = require("tap")
http = require("http.client")
fiber = require("fiber")
log = require("log")
local db = nil


json = require("json")
console = require("console")

local host = "localhost:8090"

local test_base = "/dewt/testdata/"

function print_array(array)
	if array then
		for k, v in ipairs(array) do
			print(v)
		end
	else
		print("<empty>")
	end
end

function print_table(obj)
	if obj then
		for k, v in pairs(obj) do
			if type(v) == "table" then
				print(tostring(k) .. "(")
				print_table(v)
				print(tostring(k) .. ")")
			else
				print(k .. " -> " .. tostring(v))
			end
		end
	else
		print("<empty>")
	end
end

function test_add_months(test, yyyy, mm, dd, h, m, s, add, yyyy2, mm2, dd2)
	local expected = os.time({year=yyyy2, month=mm2, day=dd2, hour=h, min=m, sec=s})
	local now = os.time({year=yyyy, month=mm, day=dd, hour=h, min=m, sec=s})
	local actual = utils.add_months(now, add)
	if expected ~= actual then
		print("now=" .. os.date("%c", now))
		print("add=" .. tostring(add))
		print("expected=" .. os.date("%c", expected))
		print("actual=" .. os.date("%c", actual))
	end
	test:is(actual, expected)
end

function schedule_for_date(agreement_id, time)
	local fields = db.scheduled_get(agreement_id)
	fields.due = time
	db.scheduled_upsert(
		agreement_id,
		fields
	)
end

function get_keys(obj)
	local keys = {}
	for k, v in pairs(obj) do
		table.insert(keys, k)
	end	
	return keys
end

function compare_objects(test, left, right)
	local left_keys = get_keys(left)
	local right_keys = get_keys(right)
	test:is(#left_keys, #right_keys, "key count")
	
	for i, key in ipairs(left_keys) do
		local left_obj = left[key]
		local right_obj = right[key]
		test:is(left_obj, right_obj, "objects for key " .. tostring(key))
	end
end

function sort_by(list, field)
	local comp = function(left, right)
		local lvalue = left[field]
		local rvalue = right[field]
		if lvalue < rvalue then
			return true
		else
			return false
		end
	end
	table.sort(list, comp)
end

function list_to_map(list)
	local result = {}
	if list then
		for i, item in ipairs(list) do
			local id = item.id
			--print(">>>> ", id, item.text)
			result[id] = item
		end
	end
	return result
end

function read_file(filename)
	local f = io.open(filename, "rb")
	if f == nil then
		print("could not read file: " .. filename)
		return nil
	else
		local data = f:read("*all")
		f:close()
		return data
	end
end

function drop_mysql_db()
	local mysql = require("mysql")
	local connection = mysql.connect(mysql_config)
	print("dropping old test MySQL database...")
	connection:execute("drop database if exists testdb;")
end

function setup()
	print("deleting old data: " .. test_base)
	if use_mysql then
		drop_mysql_db()
	end	
	os.execute("rm -rf " .. test_base .. "*")
	--os.execute("tarantool ../app/testcfg.lua")
	print("reading the config")
	require("testcfg")
	price_cfg.products.basic.max_diagrams = 5
	price_cfg.products.extended.price = 5
	global_cfg.max_search_chunk = 2
	global_cfg.search_delay = 0.01

	db = require(global_cfg.db)
end

function teardown()
	local path = test_base .. "tarantool.pid"
	--print("pid file: " .. path)
	local pid = read_file(path)
	if pid ~= nil then
		local command = "kill " .. pid
		--print(command)
		os.execute(command)
	else
		print("no existing test tarantool running")
	end
end

function send_get(path, session_id, payload)
	local headers = {}
	if #session_id > 0 then
		headers["cookie"] = "session_id=" .. session_id
	end
	local url = host .. path
	print("    GET " .. url)
	
	local result  = http.request("GET", url, nil, { headers = headers })
	return result
end

function send_delete(path, session_id, payload)
	if payload ~= nil and payload ~= "" then
		payload = json.encode(payload)
	end
	local headers = {}
	if #session_id > 0 then
		headers["cookie"] = "session_id=" .. session_id
	end
	local url = host .. path
	print("    DELETE " .. url)
	local result  = http.request("DELETE", url, payload, { headers = headers })
	return result
end

function send_put(path, session_id, payload)
	if payload ~= "" then
		payload = json.encode(payload)
	end

	local headers = {}
	if #session_id > 0 then
		headers["cookie"] = "session_id=" .. session_id
	end
	local url = host .. path
	print("    PUT " .. url)
	print("    "..payload)
	local result  = http.request("PUT", url, payload, { headers = headers })
	print("    " .. result.status)
	return result
end

function send_post(path, session_id, payload)
	if type(payload) ~= "string" then
		payload = json.encode(payload)
	end

	local headers = {}
	if #session_id > 0 then
		headers["cookie"] = "session_id=" .. session_id
	end
	local url = host .. path
	print("    POST " .. url)
	print("    "..payload)
	local result  = http.request("POST", url, payload, { headers = headers })
	print("    " .. result.status)
	return result
end

function has3(test, items, f1, f2, f3)
	for i, item in ipairs(items) do
		if f1 == item[1] and f2 == item[2] and f3 == item[3] then
			return
		end
	end
	test:is(false, tostring(f1) .. ", " .. tostring(f2) .. ", " .. tostring(f3))
end

function has2(test, items, f1, f2)
	for i, item in ipairs(items) do
		--print(item[1] .. " - " .. item[2])
		if f1 == item[1] and f2 == item[2] then
			return
		end
	end
	test:is(false, tostring(f1) .. ", " .. tostring(f2))
end


function get_session(response)
	local cookie = response.headers["set-cookie"]
	if cookie == nil then
		return ""
	end
	if cookie:match("session_id=") == nil then
		return ""
	end
	
	return cookie:sub(12, 12 + 42)
end
		

function check_error(test, response, message)
	print("    " .. response.body)
	local data = json.decode(response.body)
	test:is(data.error, message)
end

local t = tap.test("api test")


--teardown()
setup()
utils = require("utils")
vud = require("vud")
web = require("web")
space = require("space")
lic = require("lic")
fiber.sleep(1)

t:plan(plan)

t:test("db.space", function(test)
	test:plan(2)
	db.space_insert("s1", {foo=10})
	db.space_update("s1", {foo=11})
	local s = db.space_get("s1")
	test:is(s.foo, 11)
	db.space_delete("s1")
	s = db.space_get("s1")
	test:is(s, nil)
end)

t:test("db.folder", function(test)
	test:plan(6)
	db.space_insert("s1", {foo=10})
	db.folder_insert("s1", "f1", {bar=5})
	db.folder_insert("s1", "f2", {bar=7})
	local f = db.folder_get("s1", "f1")
	test:is(f.bar, 5)
	db.folder_update("s1", "f1", {bar=6})
	f = db.folder_get("s1", "f1")
	test:is(f.bar, 6)
	local fs = db.folder_get_by_space("s1")
	test:is(#fs, 2)
	local r1 = fs[1]
	local r2 = fs[2]
	if r1[2] == "f1" then
		test:is(r1[3].bar, 6)
		test:is(r2[3].bar, 7)
	else
		test:is(r1[3].bar, 7)
		test:is(r2[3].bar, 6)	
	end
	db.folder_delete("s1", "f1")
	f = db.folder_get("s1", "f1")
	test:is(f, nil)
	db.folder_delete("s1", "f2")
	db.space_delete("s1")	
end)


t:test("db.trash", function(test)
	test:plan(2)
	db.space_insert("s1", {foo=10})
	db.folder_insert("s1", "f1", {bar=1})
	db.folder_insert("s1", "f2", {bar=2})
	db.space_insert("s2", {foo=20})
	db.folder_insert("s2", "f1", {bar=11})
	db.folder_insert("s2", "f2", {bar=22})
	
	db.trash_insert("s1", "f1")
	db.trash_insert("s1", "f2")
	
	local rows = db.trash_get_by_space("s1")
	test:is(#rows, 2)
	has2(test, rows, "s1", "f1")
	has2(test, rows, "s1", "f2")
	
	db.trash_delete("s1", "f1")
	
	rows = db.trash_get_by_space("s1")
	test:is(#rows, 1)
	has2(test, rows, "s1", "f2")
	
	db.folder_delete("s1", "f1")
	db.folder_delete("s1", "f2")
	db.space_delete("s1")
	db.folder_delete("s2", "f1")
	db.folder_delete("s2", "f2")
	db.space_delete("s2")
end)

t:test("db.folder_tree", function(test)
	test:plan(3)
	db.space_insert("s1", {foo=10})
	db.folder_insert("s1", "f1", {bar=1})
	db.folder_insert("s1", "f2", {bar=2})
	db.folder_insert("s1", "f3", {bar=3})
	db.folder_tree_upsert("s1", "f2", "f1")
	db.folder_tree_upsert("s1", "f3", "f1")
	
	db.space_insert("s2", {foo=10})
	db.folder_insert("s2", "f400", {bar=400})
	db.folder_insert("s2", "f1", {bar=20000})	
	db.folder_tree_upsert("s2", "f400", "f1")
	
	local parent = db.folder_tree_get("s1", "f2")
	test:is(parent, "f1")
	
	local rows = db.folder_tree_get_by_parent("s1", "f1")
	test:is(#rows, 2)
	
	has3(test, rows, "s1", "f2", "f1")
	has3(test, rows, "s1", "f3", "f1")

	db.folder_tree_delete("s1", "f3")
	
	rows = db.folder_tree_get_by_parent("s1", "f1")
	test:is(#rows, 1)
	has3(test, rows, "s1", "f2", "f1")
	
	db.folder_tree_delete("s1", "f2")
	
	db.folder_delete("s1", "f1")
	db.folder_delete("s1", "f2")
	db.folder_delete("s1", "f3")
	db.space_delete("s1")
	
	db.folder_tree_delete("s2", "f400")
	db.folder_delete("s2", "f1")
	db.folder_delete("s2", "f400")
	db.space_delete("s2")	
end)

t:test("db.item", function(test)
	test:plan(6)
	db.space_insert("s1", {foo=10})
	db.folder_insert("s1", "f1", {bar=5})
	db.folder_insert("s1", "f2", {bar=7})
	db.item_insert("s1", "f1", "i1", {moo=1})
	db.item_insert("s1", "f1", "i2", {moo=2})
	db.item_insert("s1", "f2", "i1", {moo=10})
	local i1 = db.item_get("s1", "f1", "i1")
	test:is(i1.moo, 1)
	db.item_update("s1", "f1", "i1", {moo=1000})
	i1 = db.item_get("s1", "f1", "i1")
	test:is(i1.moo, 1000)
	local is = db.item_get_by_folder("s1", "f1")
	test:is(#is, 2)
	for i, row in ipairs(is) do
		if row[3] == "i1" then
			test:is(row[4].moo, 1000)
		else
			test:is(row[4].moo, 2)
		end
	end
	db.item_delete("s1", "f1", "i1")
	i1 = db.item_get("s1", "f1", "i1")
	test:is(i1, nil)
	db.item_delete("s1", "f1", "i2")
	db.item_delete("s1", "f2", "i1")	
	db.folder_delete("s1", "f1")
	db.folder_delete("s1", "f2")
	db.space_delete("s1")	
end)

t:test("db.recent", function(test)
	test:plan(4)
	db.space_insert("s1", {foo=10})
	db.folder_insert("s1", "f1", {bar=5})
	db.folder_insert("s1", "f2", {bar=5})
	db.user_insert("u1", "u1@uu.com", {u=20})
	db.user_insert("u2", "u2@uu.com", {u=21})
	-- f1 -- u1
	-- f1 -- u2
	-- f2 -- u1

	db.recent_upsert("s1", "f1", "u1",  {m=1})
	db.recent_upsert("s1", "f1", "u2",  {m=2})
	db.recent_upsert("s1", "f2", "u1",  {m=3})
	
	local ru1 = db.recent_get_by_user("u1")
	local f1 = db.recent_get_by_folder("s1", "f1")

	test:is(#ru1, 2)
	test:is(#f1, 2)
	
	db.recent_delete("s1", "f1", "u1")
	db.recent_delete("s1", "f1", "u2")
	db.recent_delete("s1", "f2", "u1")
	
	ru1 = db.recent_get_by_user("u1")
	f1 = db.recent_get_by_folder("s1", "f1")

	test:is(#ru1, 0)
	test:is(#f1, 0)	
	
	db.user_delete("u1")
	db.user_delete("u2")
	db.folder_delete("s1", "f1")
	db.folder_delete("s1", "f2")
	db.space_delete("s1")	
end)



t:test("db.rights", function(test)
	test:plan(9)
	db.space_insert("s1", {foo=10})
	db.space_insert("s2", {foo=20})
	db.user_insert("u1", "u1@uu.com", {u=20})
	db.user_insert("u2", "u2@uu.com", {u=21})
	-- s1 -- u1 -- admin
	-- s1 -- u2 -- admin
	-- s2 -- u1 -- admin

	db.rights_insert("s1", "u1", "admin", {r=1})
	db.rights_insert("s1", "u2", "admin",  {r=2})
	db.rights_insert("s2", "u1", "admin",  {r=3})
	
	local r1 = db.rights_get_by_space("s1")
	test:is(#r1, 2)
	local r2 = db.rights_get_by_space("s2")
	test:is(#r2, 1)
	
	has3(test, r1, "s1", "u1", "admin")
	has3(test, r1, "s1", "u2", "admin")
	has3(test, r2, "s2", "u1", "admin")
	
	r1 = db.rights_get_by_user("u1")
	r2 = db.rights_get_by_user("u2")
	
	test:is(#r1, 2)
	test:is(#r2, 1)
	
	has3(test, r1, "s1", "u1", "admin")
	has3(test, r1, "s2", "u1", "admin")	
	has3(test, r2, "s1", "u2", "admin")	
	
	db.rights_delete("s1", "u1", "admin")
	
	r1 = db.rights_get_by_user("u1")
	r2 = db.rights_get_by_user("u2")
	
	test:is(#r1, 1)
	test:is(#r2, 1)
	
	has3(test, r1, "s2", "u1", "admin")	
	has3(test, r2, "s1", "u2", "admin")		
	
	db.rights_delete_by_user("u1")
	r1 = db.rights_get_by_user("u1")
	r2 = db.rights_get_by_user("u2")
	
	test:is(#r1, 0)
	test:is(#r2, 1)
	
	db.rights_delete_by_space("s1")
	
	r2 = db.rights_get_by_user("u2")
	test:is(#r2, 0)		
end)

t:test("second request - session_id is reused", function(test)
	test:plan(3)
	local response1 = send_get("", "")
	test:is(response1.status, 200)
	local session_id = get_session(response1)
	test:is(#session_id > 0, true)
	local response2 = send_get("", session_id)
	local session_id2 = get_session(response2)
	test:is(session_id2, session_id)

end)

t:test("logout before logging on changes session", function(test)
	test:plan(3)
	local response1 = send_get("", "")
	local session_id = get_session(response1)
	test:is(#session_id > 0, true)
	local response2 = send_post("/api/logout", session_id, "")
	test:is(response2.status, 204)
	local response3 = send_get("", session_id)
	local session_id3 = get_session(response3)
	test:isnt(session_id3, session_id)

end)

t:test("create user - account", function(test)
	test:plan(7)
	local response1 = send_get("", "")
	local session_id = get_session(response1)
	local data = {
		name = "U001",
		email = "U001@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	local response2 = send_post("/api/create_user", session_id, data)
	session_id = get_session(response2)
	test:is(response2.status, 200)
	local response3 = send_get("/api/account", session_id)
	test:is(response3.status, 200)
	local body = json.decode(response3.body)
	test:is(body.user_id, "u001")
	test:is(body.email, "u001@drakon-editor.com")
	test:is(body.name, "U001")
	test:is(body.is_admin, false)
	test:is(body.is_active, true)
end)

t:test("create user - logout - logon - account", function(test)
	test:plan(4)
	local response1 = send_get("", "")
	local session_id = get_session(response1)
	local data = {
		name = "U002",
		email = "U002@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	local response2 = send_post("/api/create_user", session_id, data)
	session_id = get_session(response2)
	test:is(response2.status, 200)
	local response3 = send_post("/api/logout", session_id)
	test:is(response3.status, 204)

	local response4 = send_get("", "")
	local session_id2 = get_session(response4)
	local response5 = send_post("/api/logon", session_id2, {user="u002", password="Hello123"})
	test:is(response5.status, 200)
	session_id2 = get_session(response5)
	local response6 = send_get("/api/account", session_id2)
	test:is(response6.status, 200)
end)

t:test("create user - errors", function(test)
	test:plan(17)
	local response1 = send_get("", "")
	local session_id = get_session(response1)
	local response, data

	data = {
		email = "U002@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response = send_post("/api/create_user", session_id, data)
	test:is(response.status, 400)
	check_error(test, response, "ERR_BAD_REQUEST")

	data = {
		name = "U002",
		password = "Hello123",
		lump = "lump"
	}
	response = send_post("/api/create_user", session_id, data)
	test:is(response.status, 400)
	check_error(test, response, "ERR_BAD_REQUEST")

	data = {
		name = "U002",
		email = "U002@drakon-editor.com",
		lump = "lump"
	}
	response = send_post("/api/create_user", session_id, data)
	test:is(response.status, 400)
	check_error(test, response, "ERR_BAD_REQUEST")

	data = {
		name = "U002",
		email = "U002@drakon-editor.com",
		password = "Hello123"
	}
	response = send_post("/api/create_user", session_id, data)
	test:is(response.status, 400)
	check_error(test, response, "ERR_BAD_REQUEST")

	data = {
		name = "U",
		email = "U@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response = send_post("/api/create_user", session_id, data)
	test:is(response.status, 400)
	check_error(test, response, "ERR_USER_NAME_TOO_SHORT")

	data = {
		name = "HELLO world",
		email = "U@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response = send_post("/api/create_user", session_id, data)
	test:is(response.status, 400)
	check_error(test, response, "ERR_USER_NAME_BAD_SYMBOLS")

	data = {
		name = "u40",
		email = "u40@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response = send_post("/api/create_user", session_id, data)
	test:is(response.status, 200)

	data = {
		name = "U40",
		email = "UUUU@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response = send_post("/api/create_user", session_id, data)
	test:is(response.status, 400)
	check_error(test, response, "ERR_USER_ID_NOT_UNIQUE")

	data = {
		name = "b40",
		email = "U40@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response = send_post("/api/create_user", session_id, data)
	test:is(response.status, 400)
	check_error(test, response, "ERR_USER_EMAIL_NOT_UNIQUE")
end)

t:test("create user - bad passwords", function(test)
	test:plan(4)
	local response1 = send_get("", "")
	local session_id = get_session(response1)
	local response, data

	data = {
		name = "U003",
		email = "U002ppp@drakon-editor.com",
		password = "12345",
		lump = "lump"
	}
	response = send_post("/api/create_user", session_id, data)
	test:is(response.status, 400)
	check_error(test, response, "ERR_PASSWORD_TOO_SHORT")

	data = {
		name = "U003",
		email = "U003ppp@drakon-editor.com",
		password = "123454444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444",
		lump = "lump"
	}
	response = send_post("/api/create_user", session_id, data)
	test:is(response.status, 400)
	check_error(test, response, "ERR_PASSWORD_TOO_LONG")
end)


t:test("update user - bad passwords", function(test)
	test:plan(7)
	local response = send_get("", "")
	local session_id = get_session(response)
	local response, data

	data = {
		name = "U004",
		email = "U004@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response = send_post("/api/create_user", session_id, data)
	test:is(response.status, 200)

	data = {
		name = "U005",
		email = "U005@drakon-editor.com",
		password = "Hello456",
		lump = "lump"
	}
	response = send_post("/api/create_user", session_id, data)
	test:is(response.status, 200)
	session_id = get_session(response)

	response = send_post("/api/logout", session_id, {})
	test:is(response.status, 204)
	session_id = get_session(response)

	data = {user="u004@drakon-editor.com", password="Hello123"}
	response = send_post("/api/logon", session_id, data)
	test:is(response.status, 200)
	session_id = get_session(response)

	data = {email="u006@drakon-editor.com"}
	response = send_post("/api/update_user", session_id, data)
	test:is(response.status, 204)

	data = {email="u005@drakon-editor.com"}
	response = send_post("/api/update_user", session_id, data)
	test:is(response.status, 400)
	check_error(test, response, "ERR_USER_EMAIL_NOT_UNIQUE")
end)


t:test("change_password - success", function(test)
	test:plan(4)
	local response = send_get("", "")
	local session_id = get_session(response)
	local response, data

	data = {
		name = "U007",
		email = "U007@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response = send_post("/api/create_user", session_id, data)
	session_id = get_session(response)
	test:is(response.status, 200)

	data = {
		old_password = "Hello123",
		new_password = "Goodbye321"
	}
	response = send_post("/api/pass", session_id, data)
	test:is(response.status, 204)

	send_post("/api/logout", session_id, {})
	test:is(response.status, 204)
	session_id = get_session(response)

	data = {user="u007", password="Goodbye321"}
	response = send_post("/api/logon", session_id, data)
	test:is(response.status, 200)
end)

t:test("change_password - errors", function(test)
	test:plan(7)
	local response = send_get("", "")
	local session_id = get_session(response)
	local response, data

	data = {
		name = "U008",
		email = "U008@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response = send_post("/api/create_user", session_id, data)
	session_id = get_session(response)
	test:is(response.status, 200)

	data = {
		old_password = "11111111111111111",
		new_password = "Goodbye321"
	}
	response = send_post("/api/pass", session_id, data)
	test:is(response.status, 400)
	check_error(test, response, "ERR_WRONG_PASSWORD")

	local response2 = send_get("", "")
	local session_id2 = get_session(response2)
	data = {
		old_password = "Hello123",
		new_password = "Goodbye321"
	}
	response = send_post("/api/pass", session_id2, data)
	test:is(response.status, 401)
	check_error(test, response, "ERR_NOT_LOGGED_ON")

	data = {
		old_password = "Hello123",
		new_password = "Goodbye321"
	}
	response = send_post("/api/pass", session_id, data)
	test:is(response.status, 400)
	check_error(test, response, "ERR_ACCOUNT_TEMP_DISABLED")
end)



t:test("logon - errors", function(test)
	test:plan(6)
	local response = send_get("", "")
	local session_id = get_session(response)
	local response, data

	data = {
		name = "U009",
		email = "U009@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response = send_post("/api/create_user", session_id, data)
	session_id = get_session(response)
	test:is(response.status, 200)

	response = send_post("/api/logout", session_id, {})
	test:is(response.status, 204)
	session_id = get_session(response)

	data = {user="u009", password="badpassword"}
	response = send_post("/api/logon", session_id, data)
	test:is(response.status, 401)

	data = {user="u009", password="Hello123"}
	response = send_post("/api/logon", session_id, data)
	test:is(response.status, 401)
	check_error(test, response, "ERR_ACCOUNT_TEMP_DISABLED")
	
	fiber.sleep(1.1)
	
	data = {user="u009", password="Hello123"}
	response = send_post("/api/logon", session_id, data)
	test:is(response.status, 200)
end)

t:test("theme", function(test)
	test:plan(9)
	local response = send_get("", "")
	local session_id = get_session(response)
	local response, data

	data = {
		name = "U010",
		email = "U010@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response = send_post("/api/create_user", session_id, data)
	session_id = get_session(response)
	test:is(response.status, 200)

	response = send_get("/api/theme", session_id)
	test:is(response.status, 200)

	data = {
		theme = { text="hi"}
	}
	response = send_post("/api/theme", session_id, data)
	test:is(response.status, 204)

	response = send_get("/api/theme", session_id)
	test:is(response.status, 200)
	local set = json.decode(response.body)
	test:is(set.theme.text, "hi")

	data = {
		language = "se"
	}
	response = send_post("/api/theme", session_id, data)
	test:is(response.status, 204)

	response = send_get("/api/theme", session_id)
	test:is(response.status, 200)
	local set = json.decode(response.body)
	test:is(set.theme.text, "hi")
	test:is(set.language, "se")
end)

t:test("create_user saves language", function(test)
	test:plan(3)
	local response = send_get("", "")
	local session_id = get_session(response)
	local response, data

	data = {
		name = "UU010",
		email = "UU010@drakon-editor.com",
		password = "Hello123",
		lump = "lump",
		language = "ru"
	}
	response = send_post("/api/create_user", session_id, data)
	session_id = get_session(response)
	test:is(response.status, 200)

	response = send_get("/api/theme", session_id)
	test:is(response.status, 200)
	local set = json.decode(response.body)
	test:is(set.language, "ru")
end)



t:test("create folder", function(test)
	test:plan(15)
	local response = send_get("", "")
	local session_id = get_session(response)
	local response, data

	data = {
		name = "U011",
		email = "U011@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response = send_post("/api/create_user", session_id, data)
	session_id = get_session(response)
	test:is(response.status, 200)

	data = {
		parent = "1",
		name = "N17",
		type = "drakon"
	}
	response = send_post("/api/folder/u011", session_id, data)
	test:is(response.status, 200)
	data = json.decode(response.body)
	test:is(data.folder_id, "2")
	test:is(data.user_name, "U011")

	response = send_get("/api/folder/u011/2", session_id)
	test:is(response.status, 200)

	data = json.decode(response.body)
	test:is(data.id, "2")
	test:is(data.space_id, "u011")
	test:is(data.user_name, "U011")
	test:is(data.type, "drakon")
	test:is(data.parent, "1")
	test:is(data.access, "admin")
	test:is(data.tag, "", "tag should be empty for newly created")
	test:is(data.name, "N17")
	test:is(data.path[1].name, "<root>")
	test:is(data.path[2].name, "N17")
end)

t:test("edit", function(test)
	test:plan(12)
	local response = send_get("", "")
	local session_id = get_session(response)
	local response, data

	data = {
		name = "U012",
		email = "U012@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response = send_post("/api/create_user", session_id, data)
	session_id = get_session(response)
	test:is(response.status, 200)

	data = {
		parent = "1",
		name = "N17",
		type = "drakon"
	}
	response = send_post("/api/folder/u012", session_id, data)
	test:is(response.status, 200)

	data = {
		oldTag = "",
		tag = "tag1",
		name = "N17",
		added = { {id = "id1", text="one"}, {id = "id2", text="two", type="action"}, {id = "id0", text="up" }},
		updated = {{id="id0", text="down"}}
	}

	response = send_post("/api/edit/u012/2", session_id, data)
	test:is(response.status, 204)

	data = {
		oldTag = "tag1",
		tag = "tag2",
		name = "N18",
		background = "grey",
		added = { {id = "id3", text="ten"}},
		removed = { "id1" },
		updated = { {id = "id2", text="seven"} }
	}

	response = send_post("/api/edit/u012/2", session_id, data)
	test:is(response.status, 204)

	response = send_get("/api/folder/u012/2", session_id)
	test:is(response.status, 200)

	data = json.decode(response.body)
	test:is(data.name, "N18")
	test:is(data.background, "grey")
	local items = list_to_map(data.items)
	test:is(items["id1"], nil)
	test:is(items["id2"].text, "seven")
	test:is(items["id2"].type, "action")
	test:is(items["id3"].text, "ten")
	test:is(items["id0"].text, "down")
end)

function create_user(session_id, data)
	local response = send_post("/api/create_user", session_id, data)
	local session_id = get_session(response)
	return response, session_id
end

t:test("edit-replace", function(test)
	test:plan(8)
	local response = send_get("", "")
	local session_id = get_session(response)
	local response, data

	data = {
		name = "er12",
		email = "er@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)
	test:is(response.status, 200)

	data = {
		parent = "1",
		name = "N17",
		type = "drakon"
	}
	response = send_post("/api/folder/er12", session_id, data)
	test:is(response.status, 200)

	data = {
		oldTag = "",
		tag = "tag1",
		name = "N17",
		added = { {id = "id1", text="one"}, {id = "id2", text="two"}}
	}

	response = send_post("/api/edit/er12/2", session_id, data)
	test:is(response.status, 204)

	data = {
		oldTag = "tag1",
		tag = "tag2",
		name = "N170",
		editType = "replace",
		items = { {id = "id1", text="ten"}}
	}

	response = send_post("/api/edit/er12/2", session_id, data)
	test:is(response.status, 204)

	response = send_get("/api/folder/er12/2", session_id)
	test:is(response.status, 200)

	data = json.decode(response.body)
	test:is(data.name, "N170")
	test:is(#data.items, 1)
	local items = list_to_map(data.items)
	test:is(items["id1"].text, "ten")
end)


t:test("create_folder - fail if no access", function(test)
	test:plan(3)
	local response = send_get("", "")
	local session_id = get_session(response)
	local response, data

	data = {
		name = "U013",
		email = "U013@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)
	test:is(response.status, 200)

	data = {
		name = "U014",
		email = "U014@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)
	test:is(response.status, 200)
	

	data = {
		parent = "1",
		name = "N17",
		type = "drakon"
	}
	response = send_post("/api/folder/u013", session_id, data)
	test:is(response.status, 403)
end)

t:test("edit - fail if no access", function(test)
	test:plan(4)
	local response = send_get("", "")
	local session_id = get_session(response)
	local response, data

	data = {
		name = "U015",
		email = "U015@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)
	test:is(response.status, 200)

	data = {
		parent = "1",
		name = "N17",
		type = "drakon"
	}
	response = send_post("/api/folder/u015", session_id, data)
	test:is(response.status, 200)

	data = {
		name = "U016",
		email = "U016@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)
	test:is(response.status, 200)
	

	data = {
		oldTag = "",
		tag = "tag2",
		name = "N18"
	}

	response = send_post("/api/edit/u015/2", session_id, data)
	test:is(response.status, 403)
end)


t:test("get_folder - fail if no access", function(test)
	test:plan(4)
	local response = send_get("", "")
	local session_id = get_session(response)
	local response, data

	data = {
		name = "U017",
		email = "U017@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)
	test:is(response.status, 200)

	data = {
		parent = "1",
		name = "N17",
		type = "drakon"
	}
	response = send_post("/api/folder/u017", session_id, data)
	test:is(response.status, 200)

	data = {
		name = "U018",
		email = "U018@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)
	test:is(response.status, 200)



	response = send_get("/api/folder/u017/2", session_id)
	test:is(response.status, 403)
end)



t:test("tags", function(test)
	test:plan(7)
	local response = send_get("", "")
	local session_id = get_session(response)
	local response, data

	data = {
		name = "U019",
		email = "U019@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)
	test:is(response.status, 200)

	data = {
		parent = "1",
		name = "N17",
		type = "drakon"
	}
	response = send_post("/api/folder/u019", session_id, data)
	test:is(response.status, 200)

	data = {
		oldTag = "",
		tag = "tag1",
		name = "N17",
		added = { {id = "id1", text="one"}, {id = "id2", text="two"} }
	}

	response = send_post("/api/edit/u019/2", session_id, data)
	test:is(response.status, 204)

	data = {
		oldTag = "bad tag",
		tag = "tag2",
		name = "U200"
	}

	response = send_post("/api/edit/u019/2", session_id, data)
	test:is(response.status, 400)

	data = {
		oldTag = "tag1",
		tag = "tag2",
		name = "U200"
	}

	response = send_post("/api/edit/u019/2", session_id, data)
	test:is(response.status, 204, "edit successul")

	response = send_get("/api/tag/u019/2", session_id)
	test:is(response.status, 200, "getting the tag from edited folder")
	data = json.decode(response.body)
	test:is(data.tag, "tag2")
end)


t:test("create folder - children", function(test)
	test:plan(4)
	local response = send_get("", "")
	local session_id = get_session(response)
	local response, data

	data = {
		name = "U031",
		email = "U031@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)
	test:is(response.status, 200)

	data = {
		parent = "1",
		name = "N17",
		type = "drakon"
	}
	response = send_post("/api/folder/u031", session_id, data)
	test:is(response.status, 200)

	response = send_get("/api/folder/u031/1", session_id)
	test:is(response.status, 200)


	data = json.decode(response.body)
	test:is(data.children[1].name, "N17")
end)


t:test("update folder", function(test)
	test:plan(22)
	local response = send_get("", "")
	local session_id = get_session(response)
	local response, data

	data = {
		name = "U032",
		email = "U032@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)
	test:is(response.status, 200)

	data = {
		parent = "1",
		name = "F1",
		type = "folder"
	}
	response = send_post("/api/folder/u032", session_id, data)
	test:is(response.status, 200)

	data = {
		parent = "1",
		name = "N17",
		type = "drakon"
	}
	response = send_post("/api/folder/u032", session_id, data)
	test:is(response.status, 200)

	-- change background
	data = {
		background = "white"
	}
	response = send_put("/api/folder/u032/3", session_id, data)
	test:is(response.status, 204)

	response = send_get("/api/folder/u032/3", session_id)
	test:is(response.status, 200)
	data = json.decode(response.body)
	test:is(data.background, "white")

	-- rename
	data = {
		parent = "1",
		name = "N18"
	}
	response = send_put("/api/folder/u032/3", session_id, data)
	test:is(response.status, 204)

	response = send_get("/api/folder/u032/3", session_id)
	test:is(response.status, 200)
	data = json.decode(response.body)
	test:is(data.name, "N18")
	test:is(data.background, "white")



	-- change parent
	data = {
		parent = "2",
		name = "N18"
	}
	response = send_put("/api/folder/u032/3", session_id, data)
	test:is(response.status, 204)

	response = send_get("/api/folder/u032/3", session_id)
	test:is(response.status, 200)
	data = json.decode(response.body)
	test:is(data.parent, "2")

	response = send_get("/api/folder/u032/2", session_id)
	test:is(response.status, 200)
	data = json.decode(response.body)
	test:is(#data.children, 1)
	test:is(data.children[1].id, "3")

	response = send_get("/api/folder/u032/1", session_id)
	test:is(response.status, 200)
	data = json.decode(response.body)
	test:is(#data.children, 1)
	test:is(data.children[1].id, "2")

    -- change description
	data = {
		description = "des"
	}
	response = send_put("/api/folder/u032/3", session_id, data)
	test:is(response.status, 204)

	response = send_get("/api/folder/u032/3", session_id)
	test:is(response.status, 200)
	data = json.decode(response.body)
	test:is(data.description, "des")	
end)


t:test("update folder - cycle", function(test)
	test:plan(5)
	local response = send_get("", "")
	local session_id = get_session(response)
	local response, data

	data = {
		name = "U033",
		email = "U033@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)
	test:is(response.status, 200)

	data = {
		parent = "1",
		name = "F2",
		type = "folder"
	}
	response = send_post("/api/folder/u033", session_id, data)
	test:is(response.status, 200)

	data = {
		parent = "2",
		name = "F3",
		type = "folder"
	}
	response = send_post("/api/folder/u033", session_id, data)
	test:is(response.status, 200)

	data = {
		parent = "3",
		name = "F4",
		type = "folder"
	}
	response = send_post("/api/folder/u033", session_id, data)
	test:is(response.status, 200)

	data = {
		parent = "4"
	}
	response = send_put("/api/folder/u033/2", session_id, data)
	test:is(response.status, 400)
end)



t:test("delete many", function(test)
	test:plan(16)
	local response = send_get("", "")
	local session_id = get_session(response)
	local response, data

	data = {
		name = "U034",
		email = "U034@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)
	test:is(response.status, 200)

	data = {
		parent = "1",
		name = "N17",
		type = "drakon"
	}
	response = send_post("/api/folder/u034", session_id, data)
	test:is(response.status, 200)

	data = {
		parent = "1",
		name = "F1",
		type = "folder"
	}
	response = send_post("/api/folder/u034", session_id, data)
	test:is(response.status, 200)

	data = {
		operation = "delete",
		items = {
			{
				space_id = "u034",
				id = "2"
			},
			{
				space_id = "u034",
				id = "3"
			}
		}
	}
	response = send_post("/api/many", session_id, data)
	test:is(response.status, 204)

	response = send_get("/api/folder/u034/3", session_id)
	test:is(response.status, 404)
	response = send_get("/api/folder/u034/3", session_id)
	test:is(response.status, 404)
	response = send_get("/api/folder/u034/1", session_id)
	test:is(response.status, 200)
	data = json.decode(response.body)
	test:is(#data.children, 0)

	response = send_get("/api/trash/u034", session_id)
	test:is(response.status, 200)
	data = json.decode(response.body)
	sort_by(data.items, "id")
	
	test:is(data.space_id, "u034")
	test:is(data.items[1].id, "2")
	test:is(data.items[2].id, "3")

	response = send_post("/api/restore/u034/2", session_id, {})
	test:is(response.status, 204)

	response = send_get("/api/trash/u034", session_id)
	test:is(response.status, 200)
	data = json.decode(response.body)

	local items = data.items
	test:is(#items, 1)
	test:is(items[1].id, "3")
end)



t:test("delete many - clear trash", function(test)
	test:plan(9)
	local response = send_get("", "")
	local session_id = get_session(response)
	local response, data

	data = {
		name = "U035",
		email = "U035@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)
	test:is(response.status, 200)

	data = {
		parent = "1",
		name = "N17",
		type = "drakon"
	}
	response = send_post("/api/folder/u035", session_id, data)
	test:is(response.status, 200)

	data = {
		parent = "1",
		name = "F1",
		type = "folder"
	}
	response = send_post("/api/folder/u035", session_id, data)
	test:is(response.status, 200)

	data = {
		operation = "delete",
		items = {
			{
				space_id = "u035",
				id = "2"
			},
			{
				space_id = "u035",
				id = "3"
			}
		}
	}
	response = send_post("/api/many", session_id, data)
	test:is(response.status, 204)

	response = send_get("/api/trash/u035", session_id)
	test:is(response.status, 200)
	data = json.decode(response.body)
	test:is(#data.items, 2)

	response = send_delete("/api/trash/u035", session_id)
	test:is(response.status, 204)

	response = send_get("/api/trash/u035", session_id)
	test:is(response.status, 200)
	data = json.decode(response.body)
	test:is(#data.items, 0)
end)



t:test("delete many - nested", function(test)
	test:plan(10)
	local response = send_get("", "")
	local session_id = get_session(response)
	local response, data

	data = {
		name = "U036",
		email = "U036@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)
	test:is(response.status, 200)

	data = {
		parent = "1",
		name = "F2",
		type = "folder"
	}
	response = send_post("/api/folder/u036", session_id, data)
	test:is(response.status, 200)

	data = {
		parent = "2",
		name = "F3",
		type = "folder"
	}
	response = send_post("/api/folder/u036", session_id, data)
	test:is(response.status, 200)


    -- all subtree gets restored
	data = {
		operation = "delete",
		items = {
			{
				space_id = "u036",
				id = "2"
			}
		}
	}
	response = send_post("/api/many/", session_id, data)
	test:is(response.status, 204)

	response = send_post("/api/restore/u036/2", session_id, {})
	test:is(response.status, 204)

	response = send_get("/api/folder/u036/3", session_id)
	test:is(response.status, 200)
	data = json.decode(response.body)
	test:is(data.name, "F3")

	-- clear trash
	response = send_delete("/api/trash/u036", session_id)
	test:is(response.status, 204)

	response = send_get("/api/trash/u036", session_id)
	test:is(response.status, 200)
	data = json.decode(response.body)
	test:is(#data.items, 0)
end)



t:test("tree", function(test)
	test:plan(16)
	local response = send_get("", "")
	local session_id = get_session(response)
	local response, data

	data = {
		name = "U037",
		email = "U037@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)
	test:is(response.status, 200)

	data = {
		parent = "1",
		name = "F2",
		type = "folder"
	}
	response = send_post("/api/folder/u037", session_id, data)
	test:is(response.status, 200)

	data = {
		parent = "2",
		name = "F3",
		type = "folder"
	}
	response = send_post("/api/folder/u037", session_id, data)
	test:is(response.status, 200)

	data = {
		parent = "2",
		name = "F0",
		type = "folder"
	}
	response = send_post("/api/folder/u037", session_id, data)
	test:is(response.status, 200)

	data = {
		parent = "3",
		name = "D1",
		type = "drakon"
	}
	response = send_post("/api/folder/u037", session_id, data)
	test:is(response.status, 200)


	response = send_get("/api/tree/u037", session_id)
	test:is(response.status, 200)
	data = json.decode(response.body)
	test:is(#data.lines, 4)
	test:is(data.lines[2].id, "2")
	test:is(data.lines[2].name, "F2")
	test:is(data.lines[2].depth, 1)
	test:is(data.lines[3].id, "4")
	test:is(data.lines[3].name, "F0")
	test:is(data.lines[3].depth, 2)
	test:is(data.lines[4].id, "3")
	test:is(data.lines[4].name, "F3")
	test:is(data.lines[4].depth, 2)
end)




t:test("access", function(test)
	test:plan(12)
	local response = send_get("", "")
	local session_id = get_session(response)
	local response, data
	local space = require("space")

	data = {
		name = "a1",
		email = "a1@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)
	local s1 = get_session(response)

	data = {
		name = "a2",
		email = "a2@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response = send_post("/api/create_user", "", data)
	local s2 = get_session(response)

	data = {
		name = "a3",
		email = "a3@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response = send_post("/api/create_user", "", data)
	local s3 = get_session(response)

	data = {
		name = "a4",
		email = "a4@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response = send_post("/api/create_user", "", data)
	local s4 = get_session(response)
	
	data = {
		operation = "read",
		users = {"a2", "a3"},
		workspace = "a1"
	}
	
	space.set_space_limits("a1", 1000, 500)
	response = send_post("/api/access", s1, data)
	test:is(response.status, 204)

	response = send_get("/api/account", s2)
	data = json.decode(response.body)
	table.sort(data.spaces)
	test:is(#data.spaces, 2)
	test:is(data.spaces[1], "a1")
	test:is(data.spaces[2], "a2")

	response = send_get("/api/folder/a1/1", s2)
	data = json.decode(response.body)
	test:is(data.access, "read")

	data = {
		operation = "read",
		users = {"a2", "a3"},
		workspace = "a1"
	}
	response = send_delete("/api/access", s1, data)
	test:is(response.status, 204)

	response = send_get("/api/account", s2)
	data = json.decode(response.body)
	table.sort(data.spaces)
	test:is(#data.spaces, 1)
	test:is(data.spaces[1], "a2")

	response = send_get("/api/folder/a1/1", s2)
	test:is(response.status, 403)

	data = {
		operation = "admin",
		users = {"a1"},
		workspace = "a1"
	}
	response = send_delete("/api/access", s1, data)
	test:is(response.status, 400)

	data = {
		operation = "write",
		users = {"a4"},
		workspace = "a1"
	}
	space.set_space_limits("a1", 1000, 500)
	response = send_post("/api/access", s1, data)
	test:is(response.status, 204)

	data = {
		name = "F1",
		parent = "1",
		type = "folder"
	}
	response = send_post("/api/folder/a1", s4, data)
	test:is(response.status, 200)
end)



t:test("copy_many", function(test)
	test:plan(9)
	local response = send_get("", "")
	local session_id = get_session(response)
	local response, data
	local space = require("space")

	data = {
		name = "b1",
		email = "b1@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)
	local s1 = get_session(response)

	data = {
		name = "b2",
		email = "b2@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response = send_post("/api/create_user", "", data)
	local s2 = get_session(response)

	data = {
		parent = "1",
		name = "F2-1",
		type = "folder"
	}
	response = send_post("/api/folder/b1", s1, data)
	test:is(response.status, 200)

	data = {
		parent = "2",
		name = "F3-1",
		type = "folder"
	}
	response = send_post("/api/folder/b1", s1, data)
	test:is(response.status, 200)

	data = {
		parent = "3",
		name = "D3-1",
		type = "drakon"
	}
	response = send_post("/api/folder/b1", s1, data)
	test:is(response.status, 200)

	data = {
		oldTag = "",
		tag = "tag1",
		name = "D3-1",
		added = { {id = "id1", text="one"} }
	}

	response = send_post("/api/edit/b1/4", s1, data)
	test:is(response.status, 204)

	data = {
		operation = "read",
		users = {"b2"},
		workspace = "b1"
	}
	
	space.set_space_limits("b1", 1000, 500)
	response = send_post("/api/access", s1, data)
	test:is(response.status, 204)

	data = {
		items = { { id="2", space_id="b1" } },
		target = { space_id="b2", folder_id="1" },
		operation = "copy"
	}

	response = send_post("/api/many", s2, data)
	test:is(response.status, 204)

	response = send_get("/api/folder/b2/4", s2)
	test:is(response.status, 200)
	data = json.decode(response.body)
	test:is(data.name, "D3-1")
	test:is(data.items[1].text, "one")

end)



t:test("move_many", function(test)
	test:plan(16)
	
	
	
	local response = send_get("", "")
	local session_id = get_session(response)
	local response, data

	data = {
		name = "d1",
		email = "d1@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)
	local s1 = get_session(response)

	data = {
		parent = "1",
		name = "F2-1",
		type = "folder"
	}
	response = send_post("/api/folder/d1", s1, data)
	test:is(response.status, 200)

	data = {
		parent = "2",
		name = "F3-1",
		type = "folder"
	}
	response = send_post("/api/folder/d1", s1, data)
	test:is(response.status, 200)

	data = {
		parent = "3",
		name = "D3-1",
		type = "drakon"
	}
	response = send_post("/api/folder/d1", s1, data)
	test:is(response.status, 200)

	data = {
		oldTag = "",
		tag = "tag1",
		name = "D3-1",
		added = { {id = "id1", text="one"} }
	}

	response = send_post("/api/edit/d1/4", s1, data)
	test:is(response.status, 204)


	data = {
		items = { { id="3", space_id="d1" }, { id="4", space_id="d1" } },
		target = { space_id="d1", folder_id="1" },
		operation = "move"
	}

	response = send_post("/api/many", s1, data)
	data = json.decode(response.body)
	test:is(response.status, 200)
	sort_by(data.items, "id")
	test:is(data.items[1].id, "3")
	test:is(data.items[2].id, "4")

	response = send_get("/api/folder/d1/4", s1)
	test:is(response.status, 200)
	data = json.decode(response.body)
	test:is(data.parent, "1")

	response = send_get("/api/folder/d1/1", s1)
	test:is(response.status, 200)
	data = json.decode(response.body)
	test:is(#data.children, 3)
	sort_by(data.children, "id")
	test:is(data.children[1].id, "2")
	test:is(data.children[2].id, "3")
	test:is(data.children[3].id, "4")

	response = send_get("/api/folder/d1/3", s1)
	test:is(response.status, 200)
	data = json.decode(response.body)
	test:is(#data.children, 0)
end)

function create_folder(test, session_id, space, parent, type, name)
	local data = {
		parent = parent,
		name = name,
		type = type
	}
	local response = send_post("/api/folder/".. space, session_id, data)
	test:is(response.status, 200)
	local data2 = json.decode(response.body)
	return data2.folder_id
end

t:test("recent", function(test)
	test:plan(8)

	local response, data

	data = {
		name = "f1",
		email = "f1@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response = send_post("/api/create_user", "", data)
	local s1 = get_session(response)
	
	create_folder(test, s1, "f1", "1", "drakon", "D2")
	create_folder(test, s1, "f1", "1", "drakon", "D3")
	create_folder(test, s1, "f1", "1", "drakon", "D4")
	create_folder(test, s1, "f1", "1", "drakon", "D5")

	send_get("/api/visit/f1/2", s1)
	send_get("/api/visit/f1/5", s1)
	send_get("/api/visit/f1/3", s1)
	send_get("/api/visit/f1/4", s1)
	send_get("/api/visit/f1/2", s1)

	data = {
		operation = "delete",
		items = {
			{
				space_id = "f1",
				id = "4"
			}
		}
	}
	send_post("/api/many", s1, data)
	
	response = send_get("/api/recent", s1)

	test:is(response.status, 200)
	data = json.decode(response.body)
	test:is(#data.recent, 2)
	test:is(data.recent[1].name, "D2")
	test:is(data.recent[2].name, "D3")
end)

t:test("split", function(test)
	test:plan(10)
	local parts = utils.split(nil, "/")
	test:is(#parts, 0)

	parts = utils.split("", "/")
	test:is(#parts, 0)

	parts = utils.split("hi", "/")
	test:is(#parts, 1)
	test:is(parts[1], "hi")

	parts = utils.split("//hi/", "/")
	test:is(#parts, 1)
	test:is(parts[1], "hi")

	parts = utils.split("//hi/one//two/", "/")
	test:is(#parts, 3)
	test:is(parts[1], "hi")
	test:is(parts[2], "one")
	test:is(parts[3], "two")
end)

t:test("save_try", function(test)
	test:plan(8)

	local response, data

	data = {
		name = "h1",
		email = "h1@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response = send_post("/api/create_user", "", data)
	local s1 = get_session(response)

	local edges = {}
	local nodes = {}

	edges["e1"] = { id = "e1", text = "text1" }
	edges["e2"] = { id = "e2", text = "text2" }
	nodes["n1"] = { id = "n1", text = "ntext1" }
	nodes["n2"] = { id = "n2", text = "ntext2" }
	data = {
		name = "N1",
		edges = edges,
		nodes = nodes
	}
	response = send_post("/api/save_try", s1, data)
	test:is(response.status, 200)
	data = json.decode(response.body)
	test:is(data.diagram_id, "2")

	response = send_get("/api/folder/h1/2", s1)
	test:is(response.status, 200)

	data = json.decode(response.body)
	test:is(data.name, "N1")

	local items = {}
	for i, item in pairs(data.items) do
		items[item.id] = item
	end

	test:is(items["e1"].text, "text1")
	test:is(items["e2"].text, "text2")
	test:is(items["n1"].text, "ntext1")
	test:is(items["n2"].text, "ntext2")
end)

t:test("find users", function(test)
	test:plan(18)
	local response = send_get("", "")
	local session_id = get_session(response)
	local data
	data = {
		name = "Abcd",
		email = "Abcd@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)

	test:is(response.status, 200)

	data = {
		name = "Bcde",
		email = "Bcde@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)

	test:is(response.status, 200)

	data = {
		name = "Vuwxyz",
		email = "Vuwxyz@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)

	test:is(response.status, 200)

	data = {
		name = "MMXduu",
		email = "MMXduu@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)

	test:is(response.status, 200)

	data = {
		text = " AB "
	}
	response = send_post("/api/find_users", session_id, data)
	session_id = get_session(response)
	test:is(response.status, 200)
	data = json.decode(response.body)
	table.sort(data.found)
	test:is(#data.found, 1)
	test:is(data.found[1], "Abcd")

	data = {
		text = " BC "
	}
	response = send_post("/api/find_users", session_id, data)
	session_id = get_session(response)
	test:is(response.status, 200)
	data = json.decode(response.body)
	table.sort(data.found)
	test:is(#data.found, 2)
	test:is(data.found[1], "Abcd")
	test:is(data.found[2], "Bcde")

	data = {
		text = " X "
	}
	response = send_post("/api/find_users", session_id, data)
	session_id = get_session(response)
	test:is(response.status, 200)
	data = json.decode(response.body)
	table.sort(data.found)
	test:is(#data.found, 2)
	test:is(data.found[1], "MMXduu")
	test:is(data.found[2], "Vuwxyz")

	data = {
		text = "Abcd"
	}
	response = send_post("/api/find_users", session_id, data)
	session_id = get_session(response)
	test:is(response.status, 200)
	data = json.decode(response.body)
	table.sort(data.found)
	test:is(#data.found, 1)
	test:is(data.found[1], "Abcd")
end)



function create_license(user_id, product_id, contract, expiry, limits, activation, currency)
	local use_fake = true
	if use_fake then
		return 0
	else
		return lic.create_license(
			user_id,
			product_id,
			expiry,
			limits,
			nil,
			nil,
			"test"
		)
	end
end




t:test("create space", function(test)
	test:plan(8)
	local response = send_get("", "")
	local session_id = get_session(response)
	local data
	data = {
		name = "Cs01",
		email = "cs01@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)

	test:is(response.status, 200)
	
	
	local license_id = create_license(
		"cs01",
		"team",
		nil,
		os.time() + 3600 * 24,
		{max_users=1000, max_diagrams=10000, max_spaces=4},
		"test"
	)
	
	vud.set_user_prop("cs01", "license", license_id)		

	data = {
		name = "CS02"
	}
	response = send_post("/api/space", session_id, data)
	session_id = get_session(response)
	test:is(response.status, 204)

	-- not unique
	data = {
		name = "CS02"
	}
	response = send_post("/api/space", session_id, data)
	session_id = get_session(response)
	test:is(response.status, 400)

	-- too short
	data = {
		name = "a"
	}
	response = send_post("/api/space", session_id, data)
	session_id = get_session(response)
	test:is(response.status, 400)

	-- too long
	data = {
		name = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
	}
	response = send_post("/api/space", session_id, data)
	session_id = get_session(response)
	test:is(response.status, 400)

	-- invalid symbols
	data = {
		name = "hello kitty"
	}
	response = send_post("/api/space", session_id, data)
	session_id = get_session(response)
	test:is(response.status, 400)

	data = {
		name = "CS03"
	}
	response = send_post("/api/space", session_id, data)
	session_id = get_session(response)
	test:is(response.status, 204)

	data = {
		name = "CS04"
	}
	response = send_post("/api/space", session_id, data)
	session_id = get_session(response)
	test:is(response.status, 204)
end)

t:test("get access details", function(test)
	test:plan(20)
	local response = send_get("", "")
	local session_id = get_session(response)
	local data
	
	data = {
		name = "AD01",
		email = "AD01@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)

	test:is(response.status, 200)

	data = {
		name = "AD02",
		email = "AD02@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)

	test:is(response.status, 200)

	data = {
		name = "AD03",
		email = "AD03@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)

	test:is(response.status, 200)

	local license_id = create_license(
		"ad03",
		"team",
		nil,
		os.time() + 3600 * 24,
		{max_users=1000, max_diagrams=10000},
		"test"
	)
	
	vud.set_user_prop("ad03", "license", license_id)

	data = {
		setPublicAccess = true,
		publicAccess = true,
		spaceId = "ad03",
		blocks = {
			{
				action = "grant",
				operation = "read",
				users = {"ad01"},
				workspace = "ad03"
			},
			{
				action = "grant",
				operation = "write",
				users = {"ad02"},
				workspace = "ad03"
			}
		}
	}
	space.set_space_limits("ad03", 1000, 500)
	response = send_post("/api/multi_access", session_id, data)
	test:is(response.status, 204)

	response = send_get("/api/access/ad03", session_id)
	test:is(response.status, 200)
	data = json.decode(response.body)
	test:is(#data.readers, 1)
	test:is(data.readers[1], "AD01")
	test:is(#data.writers, 1)
	test:is(data.writers[1], "AD02")
	test:is(#data.admins, 1)
	test:is(data.admins[1], "AD03")
	test:is(data.public, true)

	data = {
		setPublicAccess = false,
		spaceId = "ad03",
		blocks = {
			{
				action = "revoke",
				operation = "read",
				users = {"ad01"},
				workspace = "ad03"
			}
		}
	}
	response = send_post("/api/multi_access", session_id, data)
	test:is(response.status, 204)

	
	response = send_get("/api/access/ad03", session_id)
	test:is(response.status, 200)
	data = json.decode(response.body)
	test:is(#data.readers, 0)
	test:is(#data.writers, 1)
	test:is(data.writers[1], "AD02")
	test:is(#data.admins, 1)
	test:is(data.admins[1], "AD03")
	test:is(data.public, true)
end)

t:test("delete space", function(test)
	test:plan(26)
	local response = send_get("", "")
	local session_id = get_session(response)
	local data

	data = {
		name = "ds01",
		email = "ds01@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)
	local ds01_session = get_session(response)
	test:is(response.status, 200)

	response = send_get("", "")
	session_id = get_session(response)
	data = {
		name = "ds02",
		email = "ds02@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)
	local ds02_session = get_session(response)
	test:is(response.status, 200)

	response = send_get("", "")
	session_id = get_session(response)
	data = {
		name = "ds03",
		email = "ds03@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)

	test:is(response.status, 200)

	local license_id = create_license(
		"ds03",
		"team",
		nil,
		os.time() + 3600 * 24,
		{max_users=1000, max_diagrams=10000, max_spaces=10},
		"test"
	)
	
	vud.set_user_prop("ds03", "license", license_id)	


	data = {
		name = "space01"
	}
	response = send_post("/api/space", session_id, data)
	session_id = get_session(response)
	test:is(response.status, 204)


	data = {
		parent = "1",
		name = "F1",
		type = "drakon"
	}
	response = send_post("/api/folder/space01", session_id, data)	
	session_id = get_session(response)
	test:is(response.status, 200)


	send_get("/api/visit/space01/2", session_id)
	
	response = send_get("/api/recent", session_id)

	test:is(response.status, 200)
	data = json.decode(response.body)
	test:is(#data.recent, 1)
	test:is(data.recent[1].name, "F1")	

	data = {
		operation = "read",
		users = {"ds01"},
		workspace = "space01"
	}
	
	space.set_space_limits("space01", 1000, 500)
	response = send_post("/api/access", session_id, data)
	test:is(response.status, 204)
	
	data = {
		operation = "write",
		users = {"ds02"},
		workspace = "space01"
	}
	response = send_post("/api/access", session_id, data)
	test:is(response.status, 204)

	response = send_get("/api/account", ds01_session)
	test:is(response.status, 200)
	data = json.decode(response.body)
	test:is(utils.contains(data.spaces, "space01"), true)

	response = send_get("/api/account", ds02_session)
	test:is(response.status, 200)
	data = json.decode(response.body)
	test:is(utils.contains(data.spaces, "space01"), true)
	
	response = send_get("/api/account", session_id)
	test:is(response.status, 200)
	data = json.decode(response.body)
	test:is(utils.contains(data.spaces, "space01"), true)	

	
	response = send_delete("/api/space/space01", session_id)
	test:is(response.status, 204)
	
	response = send_get("/api/recent", session_id)

	test:is(response.status, 200)
	data = json.decode(response.body)
	test:is(#data.recent, 0)
	
	response = send_get("/api/account", ds01_session)
	test:is(response.status, 200)
	data = json.decode(response.body)
	test:is(utils.contains(data.spaces, "space01"), false)

	response = send_get("/api/account", ds02_session)
	test:is(response.status, 200)
	data = json.decode(response.body)
	test:is(utils.contains(data.spaces, "space01"), false)
	
	response = send_get("/api/account", session_id)
	test:is(response.status, 200)
	data = json.decode(response.body)
	test:is(utils.contains(data.spaces, "space01"), false)
	
	response = send_get("/api/visit/space01/2", session_id)
	test:is(response.status, 404)
end)


t:test("max_diagrams", function(test)
	test:plan(13)
	local response = send_get("", "")
	local session_id = get_session(response)
	local data
	data = {
		name = "md01",
		email = "md01@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)
	local md01 = get_session(response)
	test:is(response.status, 200)

	response = send_get("", "")
	session_id = get_session(response)
	data = {
		name = "md02",
		email = "md02@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)
	local md02 = get_session(response)
	test:is(response.status, 200)
	
	local space = require("space")
	
	space.set_space_limits("md01", 5, 1)
	
	-- 2
	data = {
		parent = "1",
		name = "D1",
		type = "drakon"
	}
	response = send_post("/api/folder/md01", md01, data)
	test:is(response.status, 200)
	
	
	-- 3
	data = {
		parent = "1",
		name = "F1",
		type = "folder"
	}
	response = send_post("/api/folder/md01", md01, data)
	test:is(response.status, 200)

	-- 4
	data = {
		parent = "3",
		name = "D2",
		type = "free"
	}
	response = send_post("/api/folder/md01", md01, data)
	test:is(response.status, 200)


	data = {
		parent = "3",
		name = "D21",
		type = "free"
	}
	response = send_post("/api/folder/md01", md01, data)
	test:is(response.status, 200)
	data = {
		parent = "3",
		name = "D22",
		type = "free"
	}
	response = send_post("/api/folder/md01", md01, data)
	test:is(response.status, 200)
	data = {
		parent = "3",
		name = "D23",
		type = "free"
	}
	response = send_post("/api/folder/md01", md01, data)
	test:is(response.status, 200)

	-- hit the diagram limit, cannot create this one
	data = {
		parent = "1",
		name = "D3",
		type = "drakon"
	}
	response = send_post("/api/folder/md01", md01, data)
	test:is(response.status, 400)
	log.info(response.body)
	data = json.decode(response.body)
	test:is(data.suggested, "extended")		


	-- delete one diagram and it will be possible to create another one
	data = {
		operation = "delete",
		items = {
			{
				space_id = "md01",
				id = "2"
			}
		}
	}
	response = send_post("/api/many", md01, data)
	test:is(response.status, 204)

	data = {
		parent = "1",
		name = "D4",
		type = "drakon"
	}
	response = send_post("/api/folder/md01", md01, data)
	test:is(response.status, 200)
	data = json.decode(response.body)
	local d4 = data.folder_id

	-- can't copy (the folder with a diagram): hit the limit
	
	data = {
		items = { { id="3", space_id="md01" } },
		target = { space_id="md01", folder_id="1" },
		operation = "copy"
	}

	response = send_post("/api/many", md01, data)
	test:is(response.status, 400)	
end)

if include_licensing then

t:test("max users", function(test)
	test:plan(12)

	local response = send_get("", "")
	local session_id = get_session(response)
	local response, data

	data = {
		name = "mu01",
		email = "mu01@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)
	local mu01 = get_session(response)
	test:is(response.status, 200)

	response = send_get("", "")
	session_id = get_session(response)
	data = {
		name = "mu02",
		email = "mu02@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)
	local mu02 = get_session(response)
	test:is(response.status, 200)

	response = send_get("", "")
	session_id = get_session(response)
	data = {
		name = "mu03",
		email = "mu03@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)
	local mu03 = get_session(response)
	test:is(response.status, 200)

	response = send_get("", "")
	session_id = get_session(response)
	data = {
		name = "mu04",
		email = "mu04@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)
	local mu04 = get_session(response)
	test:is(response.status, 200)
	
	response = send_get("", "")
	session_id = get_session(response)
	data = {
		name = "mu05",
		email = "mu05@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)
	local mu05 = get_session(response)
	test:is(response.status, 200)	


	response = send_get("", "")
	session_id = get_session(response)
	data = {
		name = "mu06",
		email = "mu06@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)
	local mu06 = get_session(response)
	test:is(response.status, 200)	


	local license_id = create_license(
		"mu01",
		"team",
		nil,
		os.time() + 3600 * 24,
		{max_users=4, max_diagrams=10000},
		"test"
	)
	
	vud.set_user_prop("mu01", "license", license_id)

	space.set_space_limits("mu01", 10, 4)
	
	data = {
		setPublicAccess = false,
		publicAccess = false,
		spaceId = "mu01",
		blocks = {
			{
				action = "grant",
				operation = "write",
				users = {"mu02"},
				workspace = "mu01"
			},
			{
				action = "grant",
				operation = "write",
				users = {"mu03"},
				workspace = "mu01"
			},
			{
				action = "grant",
				operation = "admin",
				users = {"mu04"},
				workspace = "mu01"
			}
		}
	}
	
	response = send_post("/api/multi_access", mu01, data)
	test:is(response.status, 204)
	
	-- mu03 is already on the list of users (he is a writer)
	data = {
		setPublicAccess = false,
		publicAccess = false,
		spaceId = "mu01",
		blocks = {
			{
				action = "grant",
				operation = "admin",
				users = {"mu03"},
				workspace = "mu01"
			}
		}
	}
	response = send_post("/api/multi_access", mu01, data)
	test:is(response.status, 204)	

	-- mu05 is a new guy. he hits the limit.
	data = {
		setPublicAccess = false,
		publicAccess = false,
		spaceId = "mu01",
		blocks = {
			{
				action = "grant",
				operation = "write",
				users = {"mu05"},
				workspace = "mu01"
			}
		}
	}
	response = send_post("/api/multi_access", mu01, data)
	test:is(response.status, 400)	
	local data = json.decode(response.body)
	test:is(data.suggested, "team")	
	
	
	-- mu05 and mu06 are two new guys. team with additional number of
	-- users are required
	data = {
		setPublicAccess = false,
		publicAccess = false,
		spaceId = "mu01",
		blocks = {
			{
				action = "grant",
				operation = "write",
				users = {"mu05", "mu06"},
				workspace = "mu01"
			}
		}
	}
	response = send_post("/api/multi_access", mu01, data)
	test:is(response.status, 400)	
	local data = json.decode(response.body)
	test:is(data.suggested, "team")		
end)


t:test("max spaces", function(test)
	test:plan(3)
	local response = send_get("", "")
	local session_id = get_session(response)
	local data
	data = {
		name = "msp01",
		email = "msp01@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)
	local msp01 = get_session(response)
	test:is(response.status, 200)

	
	vud.set_user_prop("msp01", "max_spaces", 1)

	data = {
		name = "space430"
	}
	response = send_post("/api/space", msp01, data)
	session_id = get_session(response)
	test:is(response.status, 400)
	local data = json.decode(response.body)
	test:is(data.suggested, "extended")
end)



t:test("license expiry", function(test)
	test:plan(26)
	local response = send_get("", "")
	local session_id = get_session(response)
	local data
	local space = require("space")
	
	data = {
		name = "lex",
		email = "lex@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)

	test:is(response.status, 200)
	
	local now = os.time()

	local license_id = create_license(
		"lex",
		"team",
		nil,
		now + 100 * 3600 * 24,
		{max_users=400, max_diagrams=10000, max_spaces=90},
		"test"
	)
	
	vud.set_user_prop("lex", "license", license_id)

	space.set_space_limits("lex", 10000, 400)
	
	
	local remind_user_id = nil
	local remind_expiry = nil
	local notice_user_id = nil
	
	local remind = function(user_id, expiry)
		remind_user_id = user_id
		remind_expiry = expiry
	end
	
	local notice = function(user_id)
		notice_user_id = user_id
	end
	
	web.send_expiration_notice = notice
	web.send_expiration_soon = remind
	
	web.check_license("lex")



	local max_users
	local max_diagrams
	
	-- not expired yet
	max_users = db.space_get("lex").max_users
	max_diagrams = db.space_get("lex").max_diagrams	
	test:is(max_users, 400)
	test:is(max_diagrams, 10000)
	test:is(remind_user_id, nil)
	test:is(remind_expiry, nil)
	test:is(notice_user_id, nil)
	
	local expiry2 = now + utils.days_to_secs(2)
	lic.update_license(license_id, {expiry = expiry2})


	
	-- should get a notice
	
	web.check_license("lex")
	max_users = db.space_get("lex").max_users
	max_diagrams = db.space_get("lex").max_diagrams	
	test:is(max_users, 400)
	test:is(max_diagrams, 10000)
	test:is(remind_user_id, "lex")
	test:is(remind_expiry, expiry2)
	test:is(notice_user_id, nil)
	
	remind_user_id = nil
	remind_expiry = nil


	-- notice comes only once
	web.check_license("lex")
	max_users = db.space_get("lex").max_users
	max_diagrams = db.space_get("lex").max_diagrams	
	test:is(max_users, 400)
	test:is(max_diagrams, 10000)
	test:is(remind_user_id, nil)
	test:is(remind_expiry, nil)
	test:is(notice_user_id, nil)


	-- must expire
	lic.update_license(license_id, {expiry = now - 10})
	web.check_license("lex")
	max_users = db.space_get("lex").max_users
	max_diagrams = db.space_get("lex").max_diagrams	
	test:is(max_users, 1)
	test:is(max_diagrams, 5)
	test:is(remind_user_id, nil)
	test:is(remind_expiry, nil)
	test:is(notice_user_id, "lex")

	
	notice_user_id = nil


	-- expiry notice comes only once
	web.check_license("lex")
	max_users = db.space_get("lex").max_users
	max_diagrams = db.space_get("lex").max_diagrams	
	test:is(max_users, 1)
	test:is(max_diagrams, 5)
	test:is(remind_user_id, nil)
	test:is(remind_expiry, nil)
	test:is(notice_user_id, nil)
end)

end

function round(num, idp)
	local mult = 10^(idp or 0)
	return math.floor(num * mult + 0.5) / mult
end

function one_year()
	local days = 365.25
	return round(3600 * 24 * days)
end

function one_day()
	return 3600 * 24
end

function make_date(year, month, day, hours, mins, secs)
	local tt = {
		year = year,
		month = month,
		day = day,
		isdst = true,
		hour = hours,
		min = mins,
		sec = secs
	}
	return os.time(tt)
end

function check_calculate_payment(test, users, product, old, pricing, now, expected)
	local pay = require("pay")
	local actual = pay.calculate_payment(users, product, old, pricing, now)
	
	compare_objects(test, actual, expected)	
end

function check_px2_calculate_payment(test, product_id, num_users, pricing, expected)
	local pay = require("pay")
	local actual = pay.px2_calculate_payment(num_users, product_id, pricing)
	--log.info(actual.price)
	--log.info(actual.sum)
	--log.info(actual.mva)
	--log.info(actual.total)
	--log.info(actual.error)
	compare_objects(test, actual, expected)
end

t:test("px2_calculate_payment", function(test)
	test:plan(24)
	
	check_px2_calculate_payment(
		test,
		"extended",
		1,
		{
			products = {
				extended = { price = 5.00, max_users = 1, min_users = 1}
			}
		},
		{
			price = 5.00,
			total = 5.00,
			sum = 5.00,
			mva = 0
		}
	)
	
	check_px2_calculate_payment(
		test,
		"extended",
		1,
		{
			products = {
				extended = { price = 5.00, max_users = 1, min_users = 1}
			},
			mva = 0.2
		},
		{
			price = 5.00,
			total = 5.00,
			sum = 4.16,
			mva = 0.84
		}
	)
	
	check_px2_calculate_payment(
		test,
		"extended",
		2,
		{
			products = {
				extended = { price = 5.00, max_users = 1, min_users = 1}
			},
			mva = 0.2
		},
		{
			error = "ERR_NUM_USERS_TOO_LARGE"
		}
	)
	
	check_px2_calculate_payment(
		test,
		"team",
		4,
		{
			products = {
				team = { price = 4.00, max_users = 1000, min_users = 5}
			},
			mva = 0.2
		},
		{
			error = "ERR_NUM_USERS_TOO_LITTLE"
		}
	)

	check_px2_calculate_payment(
		test,
		"team",
		10,
		{
			products = {
				team = { price = 4.00, max_users = 1000, min_users = 5}
			},
			mva = 0.0
		},
		{
			price = 4.00,
			total = 40.00,
			sum = 40.00,
			mva = 0.00
		}
	)
	
	check_px2_calculate_payment(
		test,
		"team",
		10,
		{
			products = {
				team = { price = 4.00, max_users = 1000, min_users = 5}
			},
			mva = 0.2
		},
		{
			price = 4.00,
			total = 40.00,
			sum = 33.33,
			mva = 6.67
		}
	)
end)

t:test("calculate_payment", function(test)
	test:plan(71)

	check_calculate_payment(
		test,
		nil,
		"extended",
		nil,
		{
			products = {
				extended = { price = 2.99, max_users = 1, min_users = 1}
			}
		},
		make_date(2016, 8, 15, 16, 30, 0),
		{
			error = "ERR_NUM_USERS_SPECIFY"
		}
	)
	
	check_calculate_payment(
		test,
		"",
		"extended",
		nil,
		{
			products = {
				extended = { price = 2.99, max_users = 1, min_users = 1}
			}
		},
		make_date(2016, 8, 15, 16, 30, 0),
		{
			error = "ERR_NUM_USERS_SPECIFY"
		}
	)		
	
	check_calculate_payment(
		test,
		-1,
		"extended",
		nil,
		{
			products = {
				extended = { price = 2.99, max_users = 1, min_users = 1}
			}
		},
		make_date(2016, 8, 15, 16, 30, 0),
		{
			error = "ERR_NUM_USERS_TOO_LITTLE"
		}
	)
	
	check_calculate_payment(
		test,
		10,
		"extended",
		nil,
		{
			products = {
				extended = { price = 2.99, max_users = 1, min_users = 1}
			}
		},
		make_date(2016, 8, 15, 16, 30, 0),
		{
			error = "ERR_NUM_USERS_TOO_LARGE"
		}
	)		
	
	
	check_calculate_payment(
		test,
		1,
		"extended",
		nil,
		{
			products = {
				extended = { price = 2.99, max_users = 1, min_users = 1, period_mon=12}
			}
		},
		make_date(2016, 8, 15, 16, 30, 0),
		{
			sum = 35.88,
			price = 2.99,
			total = 35.88,
			period = one_year() + one_day(),
			remaining_value = 0,
			effective_start = make_date(2016, 8, 15, 16, 30, 0),
			expiry = make_date(2016, 8, 15, 16, 30, 0) + one_year() + one_day(),
			mva = 0
		}
	)
	
	check_calculate_payment(
		test,
		1,
		"extended",
		{
			product_id = "basic",
			users = 1,
			expiry = make_date(2017, 8, 27, 10, 0, 0),
		},
		{
			products = {
				extended = { price = 2.99, max_users = 1, min_users = 1, period_mon=12}
			}
		},
		make_date(2016, 8, 15, 16, 30, 0),
		{
			sum = 35.88,
			price = 2.99,
			total = 35.88,
			period = one_year() + one_day(),
			remaining_value = 0,
			effective_start = make_date(2016, 8, 15, 16, 30, 0),
			expiry = make_date(2016, 8, 15, 16, 30, 0) + one_year() + one_day(),
			mva = 0
		}
	)	
	
	check_calculate_payment(
		test,
		1,
		"extended",
		{
			users = 1,
			expiry = make_date(2016, 8, 27, 16, 30, 0),
			sum = 35.88,
			period = one_year() + one_day()
		},
		{
			products = {
				extended = { price = 2.99, max_users = 1, min_users = 1, period_mon=12}
			}
		},
		make_date(2016, 8, 15, 16, 30, 0),
		{
			sum = 35.88,
			price = 2.99,
			total = 34.7,
			period = one_year() + one_day(),
			remaining_value = 1.18,
			effective_start = make_date(2016, 8, 15, 16, 30, 0),
			expiry = make_date(2016, 8, 15, 16, 30, 0) + one_year() + one_day(),
			mva = 0
		}
	)

	check_calculate_payment(
		test,
		1,
		"extended",
		{
			users = 1,
			expiry = make_date(2016, 8, 27, 16, 30, 0)
		},
		{
			products = {
				extended = { price = 2.99, max_users = 1, min_users = 1, period_mon=12}
			}
		},
		make_date(2016, 8, 15, 16, 30, 0),
		{
			sum = 35.88,
			price = 2.99,
			total = 35.88,
			period = one_year() + one_day(),
			remaining_value = 0,
			effective_start = make_date(2016, 8, 15, 16, 30, 0),
			expiry = make_date(2016, 8, 15, 16, 30, 0) + one_year() + one_day(),
			mva = 0
		}
	)
	
	check_calculate_payment(
		test,
		5,
		"team",
		{
			users = 1,
			expiry = make_date(2016, 8, 27, 16, 30, 0),
			sum = 35.88,
			period = one_year() + one_day()
		},
		{
			products = {
				team = { price = 3.99, max_users = 1000, min_users = 5, period_mon=12}
			}
		},
		make_date(2016, 8, 15, 16, 30, 0),
		{
			sum = 239.4,
			price = 3.99,
			total = 238.22,
			period = one_year() + one_day(),
			remaining_value = 1.18,
			effective_start = make_date(2016, 8, 15, 16, 30, 0),
			expiry = make_date(2016, 8, 15, 16, 30, 0) + one_year() + one_day(),
			mva = 0
		}
	)
	
	check_calculate_payment(
		test,
		1000,
		"team",
		nil,
		{
			products = {
				team = { price = 3.99, max_users = 1000, min_users = 5, period_mon=12}
			}
		},
		make_date(2016, 8, 15, 16, 30, 0),
		{
			sum = 47880,
			price = 3.99,
			total = 47880,
			period = one_year() + one_day(),
			remaining_value = 0,
			effective_start = make_date(2016, 8, 15, 16, 30, 0),
			expiry = make_date(2016, 8, 15, 16, 30, 0) + one_year() + one_day(),
			mva = 0
		}
	)
	
	check_calculate_payment(
		test,
		1000,
		"team",
		nil,
		{
			products = {
				team = { price = 3.99, max_users = 1000, min_users = 5, period_mon=12}
			},
			mva = 0.1
		},
		make_date(2016, 8, 15, 16, 30, 0),
		{
			sum = 47880,
			price = 3.99,
			total = 52668,
			period = one_year() + one_day(),
			remaining_value = 0,
			effective_start = make_date(2016, 8, 15, 16, 30, 0),
			expiry = make_date(2016, 8, 15, 16, 30, 0) + one_year() + one_day(),
			mva = 4788
		}
	)	

end)


t:test("get_host_name", function(test)
	test:plan(8)
	
	test:is(utils.get_host_name(nil), "")
	test:is(utils.get_host_name(""), "")
	test:is(utils.get_host_name("https://drakon-editor.com/static/adm.html"), "drakon-editor.com")
	test:is(utils.get_host_name("http://drakon-editor.com/static/adm.html"), "drakon-editor.com")
	test:is(utils.get_host_name("https://drakon-editor.com/"), "drakon-editor.com")
	test:is(utils.get_host_name("https://drakon-editor.com:8080/"), "drakon-editor.com")
	test:is(utils.get_host_name("https://drakon-editor.com"), "drakon-editor.com")
	test:is(utils.get_host_name("https://drakon-editor.com:8080/asdf/asdf"), "drakon-editor.com")
end)


t:test("delete user", function(test)
	test:plan(26)
	local response = send_get("", "")
	local session_id = get_session(response)
	local data

	data = {
		name = "du01",
		email = "du01@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)
	local du01_session = get_session(response)
	test:is(response.status, 200)

	response = send_get("", "")
	session_id = get_session(response)
	data = {
		name = "du02",
		email = "du02@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)
	local du02_session = get_session(response)
	test:is(response.status, 200)

	local license_id = create_license(
		"du01",
		"team",
		nil,
		os.time() + 3600 * 24,
		{max_users=1000, max_diagrams=10000, max_spaces=10},
		"test"
	)
	
	vud.set_user_prop("du01", "license", license_id)

	local license_id2 = create_license(
		"du02",
		"team",
		nil,
		os.time() + 3600 * 24,
		{max_users=1000, max_diagrams=10000, max_spaces=10},
		"test"
	)
	
	vud.set_user_prop("du02", "license", license_id2)

	data = {
		name = "du01-2"
	}
	response = send_post("/api/space", du01_session, data)
	session_id = get_session(response)
	test:is(response.status, 204)	
	

	data = {
		parent = "1",
		name = "F1",
		type = "drakon"
	}
	response = send_post("/api/folder/du01-2", du01_session, data)	
	test:is(response.status, 200)


	data = {
		setPublicAccess = false,
		publicAccess = false,
		spaceId = "du01-2",
		blocks = {
			{
				action = "grant",
				operation = "admin",
				users = {"du02"},
				workspace = "du01-2"
			}
		}
	}	
	
	response = send_post("/api/multi_access", du01_session, data)
	test:is(response.status, 204)

	local x3 = db.rights_get_by_user("du02")
	print("--------------------" .. tostring(#x3))

	response = send_get("/api/visit/du01-2/2", du02_session)
	test:is(response.status, 200)
	
	data = {
		theme = { text="hi"}
	}
	response = send_post("/api/theme", du02_session, data)
	test:is(response.status, 204)
	
	response = send_get("/api/own_spaces", du02_session)
	test:is(response.status, 200)
	data = json.decode(response.body)
	test:is(#data.spaces, 1)
	test:is(data.spaces[1], "du02")
	
	local lic2 = vud.get_user("du02").license
	test:is(lic2, license_id2)

	response = send_get("/api/access/du01-2", du01_session)
	test:is(response.status, 200)
	data = json.decode(response.body)
	test:is(#data.admins, 2)
	test:is(data.admins[1], "du01")
	test:is(data.admins[2], "du02")
	
	response = send_post("/api/delete_user", du02_session, {})
	test:is(response.status, 204)
	
	test:is(vud.get_user("du02"), nil)
	test:is(db.user_get("du02"), nil)
	test:is(db.space_get("du02"), nil)
	test:is(db.folder_get("du02", "1"), nil)
	test:is(db.cred_get("du02"), nil)	
	test:is(db.usettings_get("du02"), nil)
	local recent = db.recent_get_by_user("du02")
	test:is(#recent, 0)
	
	response = send_get("/api/access/du01-2", du01_session)
	test:is(response.status, 200)
	data = json.decode(response.body)
	test:is(#data.admins, 1)
	test:is(data.admins[1], "du01")
end)

t:test("delete user - references to space get deleted", function(test)
	test:plan(7)
	local response = send_get("", "")
	local session_id = get_session(response)
	local data

	data = {
		name = "dru01",
		email = "dru01@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)
	local du01_session = get_session(response)
	test:is(response.status, 200)

	response = send_get("", "")
	session_id = get_session(response)
	data = {
		name = "dru02",
		email = "dru02@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)
	local du02_session = get_session(response)
	test:is(response.status, 200)
	

	local license_id = create_license(
		"dru02",
		"team",
		nil,
		os.time() + 3600 * 24,
		{max_users=1000, max_diagrams=10000, max_spaces=10},
		"test"
	)
	
	vud.set_user_prop("dru02", "license", license_id)

	data = {
		name = "dru02-2"
	}
	response = send_post("/api/space", du02_session, data)
	session_id = get_session(response)
	test:is(response.status, 204)	

	data = {
		setPublicAccess = false,
		publicAccess = false,
		spaceId = "dru02-2",
		blocks = {
			{
				action = "grant",
				operation = "read",
				users = {"dru01"},
				workspace = "dru02-2"
			}
		}
	}	
	
	response = send_post("/api/multi_access", du02_session, data)
	test:is(response.status, 204)
	
	local r1 = db.rights_get_by_space("dru02-2")
	test:is(#r1, 2)
	has3(test, r1, "dru02-2", "dru01", "read")
	has3(test, r1, "dru02-2", "dru01", "read")
	
	response = send_post("/api/delete_user", du02_session, {})
	test:is(response.status, 204)
	
	
	r1 = db.rights_get_by_space("dru02-2")
	test:is(#r1, 0)
end)


t:test("parse_query", function(test)
	test:plan(6)
	test:is(utils.parse_query(nil).foo, nil)
	test:is(utils.parse_query("").foo, nil)
	test:is(utils.parse_query("sdf").foo, nil)
	test:is(utils.parse_query("foo=bar").foo, "bar")
	test:is(utils.parse_query("one=123&two=345").one, "123")
	test:is(utils.parse_query("one=123&two=345").two, "345")
end)


t:test("parse_compound_name", function(test)
	test:plan(11)
	test:is(utils.parse_compound_name(nil), "")
	test:is(utils.parse_compound_name(""), "")
	test:is(utils.parse_compound_name(" "), "")
	test:is(utils.parse_compound_name(" \t "), "")
	test:is(utils.parse_compound_name("a"), "a")
	test:is(utils.parse_compound_name("hello"), "hello")
	test:is(utils.parse_compound_name("Hello"), "hello")
	test:is(utils.parse_compound_name("Привет"), "привет")
	test:is(utils.parse_compound_name("One Two Three"), "one two three")
	test:is(utils.parse_compound_name(" -Who is this? "), "who is this")
	test:is(utils.parse_compound_name("  why   so)"), "why so")
end)


if include_licensing then

function mock_payex_call(mock, method, user_id, props, agreement_id, out_props)
	if method == "CreateAgreement3" then
		return mock:mock_payex_create_agreement(props, agreement_id, out_props)
	elseif method == "Initialize8" then
		return mock:mock_payex_initialize(props, agreement_id, out_props)
	elseif method == "Complete" then
		return mock:mock_payex_complete(props, agreement_id, out_props)
	elseif method == "DeleteAgreement" then
		return mock:mock_payex_delete_agreement(props, agreement_id, out_props)
	elseif method == "AutoPay3" then
		return mock:mock_payex_autopay(props, agreement_id, out_props)		
	end
end

function get_xml_property(obj, name)
	for i, prop in ipairs(obj) do
		if prop.tag == name then
			return prop[1]
		end
	end
	return nil
end

function check_arguments(test, required, actual, method)
	if not required then
		return
	end
	for key, value in pairs(required) do
		local actual = get_xml_property(actual, key)
		if actual ~= value then
			print(tostring(actual) .. " expect:" .. tostring(value))
		end
		test:is(actual, value, method .. ": checking expected web call arg " .. key)
	end
end

function make_mock_payex(test)
	local this = {}
	
	this.test = test
	
	this.mock_payex_create_agreement = function(self, props, agreement_id, out_props)
		--db.rollback()
		check_arguments(self.test, self.ca_in, props, "create_agreement")
		self.ca_called = true
		return self.ca_ok, self.create_agreement_result
	end

	this.mock_payex_initialize = function(self, props, agreement_id, out_props)
		--db.rollback()
		check_arguments(self.test, self.i_in, props, "initialize")
		self.i_called = true
		return self.i_ok, self.initialize_result
	end

	this.mock_payex_complete = function(self, props, agreement_id, out_props)
		--db.rollback()
		check_arguments(self.test, self.c_in, props, "complete")
		self.c_called = true
		return self.c_ok, self.complete_result
	end
	
	this.mock_payex_delete_agreement = function(self, props, agreement_id, out_props)
		--db.rollback()
		check_arguments(self.test, self.d_in, props, "delete_agreement")
		self.d_called = true
		return self.d_ok, self.delete_result
	end	

	this.mock_payex_autopay = function(self, props, agreement_id, out_props)
		--db.rollback()
		check_arguments(self.test, self.a_in, props, "autopay")
		self.a_called = true
		return self.a_ok, self.autopay_result
	end	

	
	this.ca_ok = true
	this.i_ok = true
	this.c_ok = true
	this.d_ok = true
	this.a_ok = true
	
	this.delete_result = {errorCode="OK", description="OK"}
	
	return this
end

function find_user_payments(user_id)
	return db.payment_get_by_user(user_id)
end

t:test("px2_start px2_complete callback", function(test)
	test:plan(22)
	local response = send_get("", "")
	local session_id = get_session(response)
	local data

	data = {
		name = "px2_u001",
		email = "px2_u001@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)

	test:is(response.status, 200)
	
	local fake_payex = make_mock_payex(test)
	fake_payex.create_agreement_result = { errorCode="OK", description="OK", agreementRef="AGR01" }
	fake_payex.initialize_result = { errorCode="OK", description="OK", redirectUrl="URL01", orderRef="ORD01" }
	fake_payex.complete_result = { errorCode="OK", description="OK", transactionNumber="T001", paymentMethod="FAKE", paymentMethodExpireDate="20190301", transactionStatus=0 }
	
	fake_payex.ca_in = { merchantRef="extended", maxAmount=1500, description="DrakonHub subscription: extended" }
	fake_payex.i_in = { productNumber="extended", price=500, currency="EUR", agreementRef="AGR01", description="DrakonHub subscription: extended"}
	fake_payex.c_in = { orderRef="ORD01" }
	
	local payex = require("payex")
	payex.replace_call_payex(function(method, props, agreement_id, out_props)
		return mock_payex_call(fake_payex, method, props, agreement_id, out_props)
	end)
	
	web.inject_send_mail(function(user_id, to, subject, text, html, attach) print("sent email to " .. to) end)
	
	data = {
		product_id = "extended",
		users = 1
	}
	
	response = send_post("/api/px2_start", session_id, data)
	test:is(response.status, 200)
	print(response.body)
	data = json.decode(response.body)
	test:is(data.redirect, "URL01")
	
	local rows = db.agreement_get_by_order_ref("ORD01")
	
	data = {
		order_ref = "ORD01"
	}
	response = send_post("/api/px2_complete", session_id, data)
	test:is(response.status, 200)
	print(response.body)
	data = json.decode(response.body)
	test:is(data.total, "EUR 5.00")
	test:is(data.trans_number, "T001")
	local user = db.user_get("px2_u001")[3]
	local license = db.license_get(user.license)
	test:is(license.product_id, "extended")
	local agreement = db.agreement_get(license.agreement_id)
	test:is(agreement.user_id, "px2_u001")
	test:is(agreement.state, "active")
	
	local payment = find_user_payments("px2_u001")[1][3]
	test:is(payment.total, 5)
	
	response = send_post("/api/payex_callback", "", "transactionRef=T001&transactionNumber=TN34&orderRef=ORD01&orderId=" .. license.agreement_id)
	test:is(response.status, 200)

	fiber.sleep(0.1)
	
	local own_space = db.space_get("px2_u001")
	test:is(own_space == nil, false)
	send_post("/api/delete_user", session_id, {})
	local own_space2 = db.space_get("px2_u001")
	test:is(own_space2 == nil, true)
end)

function get_agreement_id_for_user(user_id)
	local user = db.user_get(user_id)[3]
	local license = db.license_get(user.license)
	print_table(license)
	print(user.license)
	return license.agreement_id
end

t:test("px2_start callback px2_complete", function(test)
	test:plan(18)
	local response = send_get("", "")
	local session_id = get_session(response)
	local data

	data = {
		name = "px2_u002",
		email = "px2_u002@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)

	test:is(response.status, 200)
	
	local fake_payex = make_mock_payex(test)
	fake_payex.create_agreement_result = { errorCode="OK", description="OK", agreementRef="AGR02" }
	fake_payex.initialize_result = { errorCode="OK", description="OK", redirectUrl="URL02", orderRef="ORD02" }
	fake_payex.complete_result = { errorCode="OK", description="OK", transactionNumber="T002", paymentMethod="FAKE", paymentMethodExpireDate="20190301", transactionStatus=0 }
	
	fake_payex.ca_in = { merchantRef="extended", maxAmount=1500 }
	fake_payex.i_in = { productNumber="extended", price=500, currency="EUR", agreementRef="AGR02"}
	fake_payex.c_in = { orderRef="ORD02" }
	
	local payex = require("payex")
	payex.replace_call_payex(function(method, props, agreement_id, out_props)
		return mock_payex_call(fake_payex, method, props, agreement_id, out_props)
	end)
	
	web.inject_send_mail(function(user_id, to, subject, text, html, attach) print("sent email to " .. to) end)
	
	data = {
		product_id = "extended",
		users = 1
	}
	
	response = send_post("/api/px2_start", session_id, data)
	test:is(response.status, 200)
	print(response.body)
	data = json.decode(response.body)
	test:is(data.redirect, "URL02")
	
	local agreement_id = data.agreement_id
	

	response = send_post("/api/payex_callback", "", "transactionRef=T001&transactionNumber=TN34&orderRef=ORD02&orderId=" .. agreement_id)
	test:is(response.status, 200)

	fiber.sleep(0.1)	
	
	data = {
		order_ref = "ORD02"
	}
	response = send_post("/api/px2_complete", session_id, data)
	test:is(response.status, 200)
	print(response.body)
	data = json.decode(response.body)
	test:is(data.total, "EUR 5.00")
	test:is(data.trans_number, "T002")
	local user = db.user_get("px2_u002")[3]
	local license = db.license_get(user.license)
	test:is(license.product_id, "extended")
	local agreement = db.agreement_get(license.agreement_id)
	test:is(agreement.user_id, "px2_u002")
	test:is(agreement.state, "active")
	
	local payment = find_user_payments("px2_u002")[1][3]
	test:is(payment.total, 5)
	

end)

t:test("px2_start px2_complete twice - old agreement is deleted", function(test)
	test:plan(22)
	local response = send_get("", "")
	local session_id = get_session(response)
	local data

	data = {
		name = "px2_u003",
		email = "px2_u003@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)

	test:is(response.status, 200)
	
	local fake_payex = make_mock_payex(test)
	
	fake_payex.delete_agreement_result = { errorCode="OK", description="OK", agreementRef="AGR03" }
	fake_payex.create_agreement_result = { errorCode="OK", description="OK", agreementRef="AGR03" }
	fake_payex.initialize_result = { errorCode="OK", description="OK", redirectUrl="URL03", orderRef="ORD03" }
	fake_payex.complete_result = { errorCode="OK", description="OK", transactionNumber="T003", paymentMethod="FAKE", paymentMethodExpireDate="20190101", transactionStatus=0 }
	
	fake_payex.ca_in = { merchantRef="extended", maxAmount=1500 }
	fake_payex.i_in = { productNumber="extended", price=500, currency="EUR", agreementRef="AGR03"}
	fake_payex.c_in = { orderRef="ORD03" }
	fake_payex.d_in = {agreementRef="AGR03"}
	
	local payex = require("payex")
	payex.replace_call_payex(function(method, props, agreement_id, out_props)
		return mock_payex_call(fake_payex, method, props, agreement_id, out_props)
	end)
	
	web.inject_send_mail(function(user_id, to, subject, text, html, attach) print("sent email to " .. to) end)
	
	data = {
		product_id = "extended",
		users = 1
	}
	
	
	
	response = send_post("/api/px2_start", session_id, data)
	test:is(response.status, 200)

	data = {
		order_ref = "ORD03"
	}
	response = send_post("/api/px2_complete", session_id, data)
	test:is(response.status, 200)
	print(response.body)
	data = json.decode(response.body)

	local user = db.user_get("px2_u003")[3]
	local license = db.license_get(user.license)
	local old_agreement = license.agreement_id
	




	fake_payex.create_agreement_result = { errorCode="OK", description="OK", agreementRef="AGR031" }
	fake_payex.initialize_result = { errorCode="OK", description="OK", redirectUrl="URL031", orderRef="ORD031" }
	fake_payex.complete_result = { errorCode="OK", description="OK", transactionNumber="T0031", paymentMethod="FAKE", paymentMethodExpireDate="20190101", transactionStatus=0 }
	
	fake_payex.ca_in = { merchantRef="team-3", maxAmount=3600 }
	fake_payex.i_in = { productNumber="team-3", price=1200, currency="EUR", agreementRef="AGR031"}
	fake_payex.c_in = { orderRef="ORD031" }
	fake_payex.d_in = {agreementRef="AGR03"}
	
	data = {
		product_id = "team",
		users = 3
	}

	response = send_post("/api/px2_start", session_id, data)
	test:is(response.status, 200)

	data = {
		order_ref = "ORD031"
	}
	response = send_post("/api/px2_complete", session_id, data)
	test:is(response.status, 200)
	print(response.body)
	data = json.decode(response.body)

	local user2 = db.user_get("px2_u003")[3]
	local license2 = db.license_get(user2.license)
	test:isnt(license2.agreement_id, old_agreement)
	
	test:is(db.agreement_get(old_agreement), nil)
	test:is(db.agreement_get(license2.agreement_id).user_id, "px2_u003")
end)

end

t:test("get_days_in_month", function(test)
	test:plan(27)

	test:is(utils.get_days_in_month(2016, 1), 31)
	test:is(utils.get_days_in_month(2016, 2), 29)
	test:is(utils.get_days_in_month(2016, 3), 31)
	test:is(utils.get_days_in_month(2016, 4), 30)
	test:is(utils.get_days_in_month(2016, 5), 31)
	test:is(utils.get_days_in_month(2016, 6), 30)
	test:is(utils.get_days_in_month(2016, 7), 31)
	test:is(utils.get_days_in_month(2016, 8), 31)
	test:is(utils.get_days_in_month(2016, 9), 30)
	test:is(utils.get_days_in_month(2016, 10), 31)
	test:is(utils.get_days_in_month(2016, 11), 30)
	test:is(utils.get_days_in_month(2016, 12), 31)
	
	test:is(utils.get_days_in_month(2017, 1), 31)
	test:is(utils.get_days_in_month(2017, 2), 28)
	test:is(utils.get_days_in_month(2017, 3), 31)
	test:is(utils.get_days_in_month(2017, 4), 30)
	test:is(utils.get_days_in_month(2017, 5), 31)
	test:is(utils.get_days_in_month(2017, 6), 30)
	test:is(utils.get_days_in_month(2017, 7), 31)
	test:is(utils.get_days_in_month(2017, 8), 31)
	test:is(utils.get_days_in_month(2017, 9), 30)
	test:is(utils.get_days_in_month(2017, 10), 31)
	test:is(utils.get_days_in_month(2017, 11), 30)
	test:is(utils.get_days_in_month(2017, 12), 31)	
	
	test:is(utils.get_days_in_month(2018, 2), 28)
	test:is(utils.get_days_in_month(2019, 2), 28)
	test:is(utils.get_days_in_month(2020, 2), 29)
end)


t:test("date8_to_expiry", function(test)
	test:plan(3)
	
	test:is(utils.date8_to_expiry("20170101"), os.time({year=2016, month=12, day=31, hour=23, min=59, sec=00}))
	test:is(utils.date8_to_expiry("20160301"), os.time({year=2016, month=2, day=29, hour=23, min=59, sec=00}))
	test:is(utils.date8_to_expiry(20160201), os.time({year=2016, month=1, day=31, hour=23, min=59, sec=00}))
	
end)



t:test("add_months", function(test)
	test:plan(3)
	
	test_add_months(test, 2016, 1, 5, 18, 52, 16, 1, 2016, 2, 5)
	test_add_months(test, 2016, 1, 31, 18, 52, 16, 1, 2016, 2, 29)
	test_add_months(test, 2016, 1, 31, 18, 52, 16, 13, 2017, 2, 28)
	
end)



if include_licensing then
t:test("autopay - success - retry - fail", function(test)
	test:plan(31)
	local response = send_get("", "")
	local session_id = get_session(response)
	local data

	data = {
		name = "px2_u005",
		email = "px2_u005@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)

	test:is(response.status, 200)
	
	local fake_payex = make_mock_payex(test)
	fake_payex.create_agreement_result = { errorCode="OK", description="OK", agreementRef="AGR05" }
	fake_payex.initialize_result = { errorCode="OK", description="OK", redirectUrl="URL05", orderRef="ORD05" }
	fake_payex.complete_result = { errorCode="OK", description="OK", transactionNumber="T005", paymentMethod="FAKE", paymentMethodExpireDate="20190301", transactionStatus=0 }
	
	fake_payex.ca_in = { merchantRef="extended", maxAmount=1500 }
	fake_payex.i_in = { productNumber="extended", price=500, currency="EUR", agreementRef="AGR05"}
	fake_payex.c_in = { orderRef="ORD05" }
	
	local payex = require("payex")
	payex.replace_call_payex(function(method, props, agreement_id, out_props)
		return mock_payex_call(fake_payex, method, props, agreement_id, out_props)
	end)
	
	local mail_sent = false
	web.inject_send_mail(function(user_id, to, subject, text, html, attach)
		print("sent email to " .. to) 
		mail_sent = true
	end)
	
	data = {
		product_id = "extended",
		users = 1
	}
	response = send_post("/api/px2_start", session_id, data)
	test:is(response.status, 200)
	print(response.body)

	data = {
		order_ref = "ORD05"
	}
	response = send_post("/api/px2_complete", session_id, data)
	test:is(response.status, 200)
	
	local user = db.user_get("px2_u005")[3]
	local license_id = user.license
	local license = lic.get_raw_license(license_id)
	test:is(license.product_id, "extended")
	local agreement_id = license.agreement_id
	local agreement = db.agreement_get(agreement_id)
	test:is(agreement.state, "active")	
	
	
	fake_payex.autopay_result = { errorCode="OK", description="OK", transactionNumber="T0051", paymentMethod="FAKE_AUTO"}
	
	-- Check the license. No autopay yet, it is too early.
	fake_payex.a_called = false
	mail_sent = false
	web.check_license("px2_u005")
	test:is(fake_payex.a_called, false)
	test:is(mail_sent, false)
	
	-- Set agreement due date to yesterday
	local now = os.time()
	local yesterday = now - 24 * 3600
	agreement.due = yesterday	
	db.agreement_update_data(
		agreement_id, agreement)

	-- Check the license. An autopay call should happen.
	fake_payex.a_called = false
	mail_sent = false
	web.check_license("px2_u005")
	test:is(fake_payex.a_called, true, "autopay should have been called")
	test:is(mail_sent, true, "autopay confirmation email shoudl have been sent")
	
	license = lic.get_raw_license(license_id)
	test:is(license.active, true, "the license is still active")	
	agreement = db.agreement_get(agreement_id)
	test:is(agreement.state, "active", "the agreement is still active")


	-- Set agreement due date to yesterday again
	agreement.due = yesterday	
	db.agreement_update_data(agreement_id, agreement)
		
	-- Make autopay return an error
	fake_payex.autopay_result = { errorCode="bad", description="bad"}


	-- Check the license. An autopay call should happen and fail
	fake_payex.a_called = false
	mail_sent = false
	web.check_license("px2_u005")
	test:is(fake_payex.a_called, true, "autopay should have been called")
	test:is(mail_sent, false, "autopay confirmation email should not have been sent")
	
	license = lic.get_raw_license(license_id)
	test:is(license.active, true, "the license is still active")	
	agreement = db.agreement_get(agreement_id)
	test:is(agreement.state, "retrying", "autopay has failed, the agreement is retrying")
	
	
	schedule_for_date(agreement_id, yesterday)
	-- Check the scheduled retry. An autopay call should happen and fail
	fake_payex.a_called = false
	mail_sent = false
	web.check_scheduled(agreement_id)
	test:is(fake_payex.a_called, true, "autopay should have been called")
	test:is(mail_sent, false, "autopay confirmation email should not have been sent")
	
	license = lic.get_raw_license(license_id)
	test:is(license.active, true, "the license is still active")	
	agreement = db.agreement_get(agreement_id)
	test:is(agreement.state, "retrying", "autopay has failed, the agreement is retrying")	

	schedule_for_date(agreement_id, yesterday)
	-- Check the scheduled retry. An autopay call should happen and fail
	-- This time, we give up
	fake_payex.a_called = false
	mail_sent = false
	web.check_scheduled(agreement_id)
	test:is(fake_payex.a_called, true, "autopay should have been called")
	test:is(mail_sent, true, "autopay give up email should have been sent")
	
	license = lic.get_raw_license(license_id)
	test:is(license.active, false, "the license is not active")
	agreement = db.agreement_get(agreement_id)
	test:is(agreement.state, "unpaid", "autopay has failed, we gave up retrying")	
	test:is(db.scheduled_get(agreement_id), nil, "the scheduled payment is deleted")
	
end)

t:test("autopay - success - retry - success", function(test)
	test:plan(21)
	local response = send_get("", "")
	local session_id = get_session(response)
	local data

	data = {
		name = "px2_u006",
		email = "px2_u006@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)

	test:is(response.status, 200)
	
	local fake_payex = make_mock_payex(test)
	fake_payex.create_agreement_result = { errorCode="OK", description="OK", agreementRef="AGR06" }
	fake_payex.initialize_result = { errorCode="OK", description="OK", redirectUrl="URL06", orderRef="ORD06" }
	fake_payex.complete_result = { errorCode="OK", description="OK", transactionNumber="T006", paymentMethod="FAKE", paymentMethodExpireDate="20190301", transactionStatus=0 }
	
	fake_payex.ca_in = { merchantRef="extended", maxAmount=1500 }
	fake_payex.i_in = { productNumber="extended", price=500, currency="EUR", agreementRef="AGR06"}
	fake_payex.c_in = { orderRef="ORD06" }
	
	local payex = require("payex")
	payex.replace_call_payex(function(method, props, agreement_id, out_props)
		return mock_payex_call(fake_payex, method, props, agreement_id, out_props)
	end)
	
	local mail_sent = false
	web.inject_send_mail(function(user_id, to, subject, text, html, attach)
		print("sent email to " .. to) 
		mail_sent = true
	end)
	
	data = {
		product_id = "extended",
		users = 1
	}
	response = send_post("/api/px2_start", session_id, data)
	test:is(response.status, 200)
	print(response.body)

	data = {
		order_ref = "ORD06"
	}
	response = send_post("/api/px2_complete", session_id, data)
	test:is(response.status, 200)
	
	local user = db.user_get("px2_u006")[3]
	local license_id = user.license
	local license = lic.get_raw_license(license_id)
	test:is(license.product_id, "extended")
	local agreement_id = license.agreement_id
	local agreement = db.agreement_get(agreement_id)
	test:is(agreement.state, "active")	
	
	-- Set agreement due date to yesterday
	local now = os.time()
	local yesterday = now - 24 * 3600
	agreement.due = yesterday	
	db.agreement_update_data(agreement_id, agreement)

	-- Make autopay return an error
	fake_payex.autopay_result = { errorCode="bad", description="bad"}

	-- Check the license. An autopay call should happen and fail
	fake_payex.a_called = false
	mail_sent = false
	web.check_license("px2_u006")
	test:is(fake_payex.a_called, true, "autopay should have been called")
	test:is(mail_sent, false, "autopay confirmation email should not have been sent")
	
	license = lic.get_raw_license(license_id)
	test:is(license.active, true, "the license is still active")	
	agreement = db.agreement_get(agreement_id)
	test:is(agreement.state, "retrying", "autopay has failed, the agreement is retrying")
	
	
	fake_payex.autopay_result = { errorCode="OK", description="OK", transactionNumber="T0062", paymentMethod="FAKE_AUTO"}
	schedule_for_date(agreement_id, yesterday)
	
	-- Check the scheduled retry. An autopay call should happen and succeed
	fake_payex.a_called = false
	mail_sent = false
	web.check_scheduled(agreement_id)
	test:is(fake_payex.a_called, true, "autopay should have been called")
	test:is(mail_sent, true, "autopay confirmation email should have been sent")
	
	license = lic.get_raw_license(license_id)
	test:is(license.active, true, "the license is active again")	
	agreement = db.agreement_get(agreement_id)
	test:is(agreement.state, "active", "autopay has succeeded, the agreement is active again")	
	
	test:is(db.scheduled_get(agreement_id), nil, "the scheduled payment is deleted")	
end)


t:test("stop subscription", function(test)
	test:plan(13)
	local response = send_get("", "")
	local session_id = get_session(response)
	local data

	data = {
		name = "px2_u007",
		email = "px2_u007@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)

	test:is(response.status, 200)
	
	local fake_payex = make_mock_payex(test)
	fake_payex.create_agreement_result = { errorCode="OK", description="OK", agreementRef="AGR07" }
	fake_payex.initialize_result = { errorCode="OK", description="OK", redirectUrl="URL07", orderRef="ORD07" }
	fake_payex.complete_result = { errorCode="OK", description="OK", transactionNumber="T007", paymentMethod="FAKE", paymentMethodExpireDate="20190301", transactionStatus=0 }
	
	fake_payex.ca_in = { merchantRef="extended", maxAmount=1500 }
	fake_payex.i_in = { productNumber="extended", price=500, currency="EUR", agreementRef="AGR07"}
	fake_payex.c_in = { orderRef="ORD07" }
	
	local payex = require("payex")
	payex.replace_call_payex(function(method, props, agreement_id, out_props)
		return mock_payex_call(fake_payex, method, props, agreement_id, out_props)
	end)
	
	local mail_sent = false
	web.inject_send_mail(function(user_id, to, subject, text, html, attach)
		print("sent email to " .. to)
		mail_sent = true
	end)
	
	data = {
		product_id = "extended",
		users = 1
	}
	response = send_post("/api/px2_start", session_id, data)
	test:is(response.status, 200)
	print(response.body)

	data = {
		order_ref = "ORD07"
	}
	response = send_post("/api/px2_complete", session_id, data)
	test:is(response.status, 200)
	
	
	data = {
	}
	response = send_post("/api/stop_subscription", session_id, data)
	test:is(response.status, 204)	
	
	local user = db.user_get("px2_u007")[3]
	local license_id = user.license
	local license = lic.get_raw_license(license_id)
	test:is(license.active, false)
	
	data = {
	}
	response = send_post("/api/stop_subscription", session_id, data)
	test:is(response.status, 400)		
end)

end

function create_folder(test, session_id, space_id, parent_id, name, type)
	local response, data

	data = {
		parent = parent_id,
		name = name,
		type = type
	}
	response = send_post("/api/folder/" .. space_id, session_id, data)
	test:is(response.status, 200)
	local body = json.decode(response.body)
	return body.folder_id
end


function check_items_present(test, items, property, values)
	for i, value in ipairs(values) do
		local found = false
		for ii, item in ipairs(items) do
			if item[property] == value then
				found = true
				break
			end
		end
		test:is(found, true, "value found: " .. value)
	end
end

t:test("find folders", function(test)
	test:plan(12)
	local response = send_get("", "")
	local session_id = get_session(response)
	local response, data
	local space_id = "fu01"
	
	

	data = {
		name = space_id,
		email = "fu01@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response, session_id = create_user(session_id, data)
	test:is(response.status, 200)
	
	local n1 = create_folder(test, session_id, space_id, "1", "n1", "folder")
	local foon1 = create_folder(test, session_id, space_id, "1", "FooN1", "drakon")
	local n1nu = create_folder(test, session_id, space_id, "1", "n1Nu", "free")
	local an1b = create_folder(test, session_id, space_id, "1", "aN1b", "free")
	local bad = create_folder(test, session_id, space_id, "1", "bad", "drakon")
	
	
	data = {
		spaces = { space_id },
		needle = "n1",
		type = "folders"
	}
	response = send_post("/api/search/", session_id, data)
	test:is(response.status, 200)
	
	local body = json.decode(response.body)

	check_items_present(test, body.folders, "folder_id", {n1, foon1, n1nu, an1b})
	test:is(#body.folders, 4)	
end)

function is_empty(obj)
	for k, v in pairs(obj) do
		return false
	end
	return true
end


t:test("find items", function(test)
	test:plan(15)
	local response = send_get("", "")
	local session_id = get_session(response)
	local response, data
	local space_id = "fu02"

	data = {
		name = space_id,
		email = "fu02@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	
	response, session_id = create_user(session_id, data)
	test:is(response.status, 200)
	

	local d1 = create_folder(test, session_id, space_id, "1", "d1", "free")
	local d2 = create_folder(test, session_id, space_id, "1", "d2", "free")
	local d3 = create_folder(test, session_id, space_id, "1", "d3", "free")

	local d1_edit = {  
	   editType = "edit",
	   name = "d1",
	   added = {
		  {  
			 id = "1",
			 type = "shelf",
			 x = 30,
			 y = 500,
			 w = 100,
			 h = 60,
			 a = 20,
			 content = {  
				txt = "two",
				txt2 = "one"
			 },
			 free = true,
			 next = ""
		  }
	   },
	   removed = {},
	   updated = {},
	   tag = "t2",
	   oldTag = ""
	}

	local d2_edit = {  
	   editType = "edit",
	   name = "d2",
	   added = {
		  {  
			 id = "1",
			 type = "action",
			 x = 30,
			 y = 500,
			 w = 100,
			 h = 60,
			 a = 20,
			 content = {  
				txt = "no one"
			 },
			 free = true,
			 next = ""
		  }
	   },
	   removed = {},
	   updated = {},
	   tag = "t2",
	   oldTag = ""
	}

	local d3_edit = {  
	   editType = "edit",
	   name = "d3",
	   added = {
		  {  
			 id = "1",
			 type = "action",
			 x = 30,
			 y = 500,
			 w = 100,
			 h = 60,
			 a = 20,
			 content = {  
				txt = "bar"
			 },
			 free = true,
			 next = ""
		  }
	   },
	   removed = {},
	   updated = {},
	   tag = "t2",
	   oldTag = ""
	}


	response = send_post("/api/edit/" .. space_id .. "/" .. d1, session_id, d1_edit)
	test:is(response.status, 204)
	response = send_post("/api/edit/" .. space_id .. "/" .. d2, session_id, d2_edit)
	test:is(response.status, 204)
	response = send_post("/api/edit/" .. space_id .. "/" .. d3, session_id, d3_edit)
	test:is(response.status, 204)


	local data = {
		spaces = { space_id },
		needle = "ON",
		type = "items"
	}
	response = send_post("/api/search/", session_id, data)
	test:is(response.status, 200)
	
	fiber.sleep(0.4)
	response = send_get("/api/search/", session_id)
	test:is(response.status, 200)
	print("===>", response.body)
	local body = json.decode(response.body)

	check_items_present(test, body.items, "folder_id", {d1, d2})
	check_items_present(test, body.items, "text", {"one", "no one"})
	test:is(#body.items, 2)
	
	test:is(is_empty(globs.searches), true)
end)


t:check()

os.exit()

--teardown()
