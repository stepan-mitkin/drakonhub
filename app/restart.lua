
fiber = require("fiber")

function read_all_text(filename)
	local file = io.open(filename, "rb")
	if file then
		local content = file:read()
		file:close()
		return content
	else
		return nil
	end
end



function main(script)
	local pid = read_all_text("/dewt/tarantool.pid")	
	if pid then
		print("killing old tarantool, pid=" .. pid)
		os.execute("kill " .. pid)
	end
        
        fiber.sleep(2)
	
	print("start tarantool with " .. script)
	os.execute("tarantool " .. script)
end


main("dewt.lua")
