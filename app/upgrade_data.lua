
box.cfg {
	background = false,
	listen = 3301,
	pid_file = "/dewt/tarantool.pid",
	memtx_dir = "/dewt/data",
	wal_dir = "/dewt/data",
	vinyl_dir = "/dewt/data",
	work_dir = ".",
	log = "/dewt/logs/upgrade_data.txt",
	--memtx_memory = 0.5,
	checkpoint_interval = 36000,
	custom_proc_title = "upgrade_data"
}


utils = require("utils")


function replace_quoted(table_name, field_index, path, from, to)

	local action = function(old_value)
		return utils.replace_quoted_in_object(old_value, path, from, to)
	end

	local space = box.spaces[table_name]
	local count = utils.bulk_action(space, field_index, action)
	print(table_name .. ": " .. tostring(count) .. " replacements")
end

function get_rid_of_arimo()
	local from = "Arimo"
	local to = "Liberation Sans"
	replace_quoted("items", 4, {"content", "font"}, from, to)
	replace_quoted("folders", 3, {"font"}, from, to)
	replace_quoted("usettings", 2, {"font"}, from, to)
	box.snapshot()
end

get_rid_of_arimo()

console = require("console")
print("starting console...")
console.start()

