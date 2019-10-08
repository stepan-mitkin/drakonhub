local plan = 1

package.path = package.path .. ';../app/?.lua'
local utils = require("utils")

tap = require("tap")
http = require("http.client")
fiber = require("fiber")

json = require("json")
console = require("console")

local host = "localhost:8090"

local test_base = "/dewt/testdata/"



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

function setup()
	os.execute("rm -rf " .. test_base .. "*")
	os.execute("tarantool ../app/testcfg.lua")
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
	if payload ~= nil and payload ~= "" then
		payload = json.encode(payload)
	end
	local headers = {}
	if #session_id > 0 then
		headers["cookie"] = "session_id=" .. session_id
	end
	local url = host .. path
	print("    GET " .. url)
	if payload then print("    "..payload) end
	local result  = http.request("GET", url, payload, { headers = headers })
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
	if payload ~= "" then
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


teardown()
setup()
fiber.sleep(1)

t:plan(plan)


t:test("create user - errors", function(test)
	test:plan(13)
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
		name = "u40",
		email = "u40@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response = send_post("/api/create_user", session_id, data)
	test:is(response.status, 204)


	data = {
		name = "b40",
		email = "U40@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response = send_post("/api/create_user", session_id, data)
	test:is(response.status, 400)
	check_error(test, response, "ERR_USER_EMAIL_NOT_UNIQUE")

	data = {
		name = "hello",
		email = "hello@drakon-editor.com",
		password = "Hello123",
		lump = "lump"
	}
	response = send_post("/api/create_user", session_id, data)
	test:is(response.status, 400)
	check_error(test, response, "ERR_USER_ID_NOT_UNIQUE")
end)


teardown()

t:check()

