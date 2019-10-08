local clock = require("clock")
local fiber = require("fiber")
local fio = require("fio")
local log = require("log")
local io = require("io")

price_cfg = {
	products = {
		basic = {
			name = "PROD_BASIC",
			price = 0,
			min_users = 1,
			max_users = 1000,
			max_diagrams = 1000000,
			max_spaces = 10000,
			period_mon = 12 * 20
		},
		extended = {
			name = "PROD_EXTENDED",
			price = 6.00,
			min_users = 1,
			max_users = 1,
			max_diagrams = 1000000,
			max_spaces = 8,
			period_mon = 12
		},
		team = {
			name = "PROD_TEAM",
			price = 4.00,
			min_users = 3,
			max_users = 1000,
			max_diagrams = 1000000,
			max_spaces = 10000,
			period_mon = 12
		},
		trial = {
			name = "PROD_TRIAL",
			price = 0,
			min_users = 3,
			max_users = 3,
			max_diagrams = 1000000,
			max_spaces = 10000,
			period_mon = 12
		}
	},
	currency = "EUR",
	min_payment = 10,
	mva = 0.0,
	trial_days = 14
}

global_cfg.max_search_chunk = 100
global_cfg.search_delay = 0.5

globs = {
	searches = {}
}
	

local function create_simple_table(name)

	box.schema.space.create(name, {
		if_not_exists = true,
	})

	local tab = box.space[name]

	tab:create_index(
		"primary",
		{
			type = "hash",
			unique = true,
			parts = {1, "str"},
			if_not_exists = true
		}
	)
	
	return tab
end

local function create_auto_table(name)

	box.schema.space.create(name, {
		if_not_exists = true,
	})

	local tab = box.space[name]

	tab:create_index(
		"primary",
		{
			type = "tree",
			unique = true,
			parts = {1, "unsigned"},
			if_not_exists = true
		}
	)
	
	return tab
end

local function add_index_2(tab, index_name)
	tab:create_index(
		index_name,
		{
			type = "tree",
			unique = false,
			parts = {2, "str"},
			if_not_exists = true
		}
	)
end

local function create_indexed_table(name, index_name)
	local tab = create_auto_table(name)
	add_index_2(tab, index_name)	
	return tab
end

local function create_sessions_table()
	if box.space.sessions == nil or box.space.sessions.temporary then
		if box.space.sessions and box.space.sessions.temporary then
			box.space.sessions:drop()
		end
		local sessions = box.schema.create_space("sessions")
		sessions:create_index("primary", {
			type = "hash",
			unique = true,
			parts = {1, "str"}
		})
		sessions:create_index("by_user", {
			type = "tree",
			unique = false,
			parts = {2, "str"}
		})
	end
end

local function create_schema()
	if global_cfg.db == "mysqldb" then
		create_sessions_table()
		return
	end
	if box.space.users == nil then
		local users = box.schema.create_space("users")
		users:create_index("primary", {
			type = "hash",
			unique = true,
			parts = {1, "str"}
		})
		users:create_index("by_email", {
			type = "hash",
			unique = true,
			parts = {2, "str"}
		})
	end

	if box.space.creds == nil then
		local creds = box.schema.create_space("creds")
		creds:create_index("primary", {
			type = "hash",
			unique = true,
			parts = {1, "str"}
		})
	end
	
	create_sessions_table()

	if box.space.spaces == nil then
		local spaces = box.schema.create_space("spaces")
		spaces:create_index("primary", {
			type = "hash",
			unique = true,
			parts = {1, "str"}
		})
	end

	if box.space.folders == nil then
		local folders = box.schema.create_space("folders")
		folders:create_index("primary", {
			type = "tree",
			unique = true,
			parts = {1, "str", 2, "str"}
		})
	end
	
	if box.space.folder_tree == nil then
		local folder_tree = box.schema.create_space("folder_tree")
		folder_tree:create_index("primary", {
			type = "tree",
			unique = true,
			parts = {1, "str", 2, "str"}
		})
		folder_tree:create_index("by_parent", {
			type = "tree",
			unique = false,
			parts = {1, "str", 3, "str"}
		})		
	end
	

	if box.space.items == nil then
		local items = box.schema.create_space("items")
		items:create_index("primary", {
			type = "tree",
			unique = true,
			parts = {1, "str", 2, "str", 3, "str"}
		})
	end
	
	if box.space.trash == nil then
		local trash = box.schema.create_space("trash")
		trash:create_index("primary", {
			type = "tree",
			unique = true,
			parts = {1, "str", 2, "str"}
		})
	end	

	if box.space.usettings == nil or box.space.usettings.temporary then
		if box.space.usettings and box.space.usettings.temporary then
			box.space.usettings:drop()
		end
		local usettings = box.schema.create_space(
			"usettings",
			{
				temporary = false
			})
		usettings:create_index("primary", {
			type = "hash",
			unique = true,
			parts = {1, "str"}
		})
	end
	
	if box.space.rights == nil then
		local rights = box.schema.create_space("rights")
		rights:create_index("primary", {
			type = "tree",
			unique = true,
			parts = {1, "str", 2, "str", 3, "str"}
		})
		rights:create_index("by_user", {
			type = "tree",
			unique = false,
			parts = {2, "str"}
		})
	end	

	if box.space.recent == nil then
		local recent = box.schema.create_space("recent")
		recent:create_index("primary", {
			type = "tree",
			unique = true,
			parts = {1, "str", 2, "str", 3, "str"}
		})
		recent:create_index("by_user", {
			type = "tree",
			unique = false,
			parts = {3, "str"}
		})
	end

	box.once('schema', function()
		box.schema.user.grant('guest', 'read,write,execute', 'universe')
	end)
end

local function make_space_public(space_id)
	local make_public = {
		spaceId = space_id,
		blocks = {},
		setPublicAccess = true,
		publicAccess = true
	}

	space.multi_access(make_public, "admin", true)	
end

local function create_admin()
	local admin = db.user_get("admin")
	if admin == nil then
		vud.create_user("admin", "no email", "drakon")
		space.create_space("admin", "admin")
		space.create_space("examples", "admin")
		make_space_public("examples")
	
		local adprops = db.user_get("admin")[3]
		adprops.admin = true
		db.user_update("admin", "no email", adprops)
	end
end

local function get_log_dir()
	local file = "log.txt"
	local full = box.cfg.log
	return full:sub(1, #full - #file)
end

local function log_rotator_job()
	log.info("log rotator started")
	while true do
		local logfile = box.cfg.log
		local info = fio.lstat(logfile)
		if info ~= nil then
			if info.size > global_cfg.max_log then
				local d = clock.time()
				local archive = get_log_dir() .. os.date("%Y%m%d-%H%M%S.log", d)
				print("rotating log to " .. archive)
				os.rename(logfile, archive)
				log.rotate()
			end
		end
		fiber.sleep(30)
	end
end

function build_summaries_job()
	log.info("build summaries job started")
	while true do
		stats.summarize_yesterday()
		fiber.sleep(20 * 60)
	end
end

function init_build_id()
	local build_id = utils.read_all_bytes("version.txt")
	if build_id then
		global_cfg.build_id = utils.trim(build_id)
	else
		global_cfg.build_id = ""
	end
end

function logoff_job()
	log.info("logoff job started")
	while true do
		for k, row in box.space.sessions:pairs() do
			local session_id = row[1]
			if g_check_due then
				vud.check_logoff(session_id)			
			end
			fiber.sleep(0.1)
		end
		fiber.sleep(60)
	end
end

function expiration_job()
	log.info("expiration job started")
	while true do
		local all_users = db.user_get_all()
		for k, row in ipairs(all_users) do
			local user_id = row[1]
			if g_check_due then
				web.check_license(user_id)			
			end
			fiber.sleep(0.2)
		end
		fiber.sleep(60)
	end
end

function payment_retry_job()
	log.info("payment retry job started")
	while true do
		local scheduled = db.scheduled_get_all()
		for k, row in ipairs(scheduled) do
			local agreement_id = row[1]
			if g_check_due then
				web.check_scheduled(agreement_id)			
			end
			fiber.sleep(0.1)
		end
		fiber.sleep(60)
	end
end

function give_free_licenses()
	for k, row in db.user_get_all() do
		local user_id = row[1]
		web.create_default_license(user_id, "early_adopter")		
	end
	
	log.info("giving free licenses completed")
end

function start_jobs()
	if not global_cfg.skip_jobs then
		db.run_in_fiber(logoff_job, "Logoff job")
		db.run_in_fiber(log_rotator_job, "Log rotator job")
		--db.run_in_fiber(expiration_job, "Expiration job")
		--db.run_in_fiber(payment_retry_job, "Payment retry job")
		db.run_in_fiber(build_summaries_job, "Build summaries job")
	end
end

function get_free_space()
	local command = "df -h " .. box.cfg.memtx_dir
	local handle = io.popen(command)
	local result = handle:read("*a")
	handle:close()
	return result
end

function get_tarantool_status()
	
	return {
		slab = box.slab.info(),
		disk = get_free_space()
	}
end

create_schema()

db = require(global_cfg.db)
stats = require("stats")
utils = require("utils")
space = require("space")
vud = require("vud")
web = require("web")
lic = require("lic")
trans = require("trans")

init_build_id()
g_check_due = true

if global_cfg.import then
	local import = require("import")
	import.run_import()
else
	create_admin()
	web.start()
end

trans.add("ru", "index", "ru-index.json")
trans.add("en-us", "index", "en-us-index.json")
global_cfg.messages = {}
global_cfg.messages["ru"] = utils.read_all_bytes("ru-messages.json")
global_cfg.messages["en-us"] = utils.read_all_bytes("en-us-messages.json")

start_jobs()


return {
	price_cfg = price_cfg
}

