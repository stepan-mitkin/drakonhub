
local src_path = "/drakonhub/"
local data_path = src_path


box.cfg {
	background = true,
	listen = 3301,
	pid_file = data_path .. "tarantool.pid",
	memtx_dir = data_path .. "data",
	wal_dir = data_path .. "data",
	vinyl_dir = data_path .. "data",
	work_dir = src_path .. "app",
	log = data_path .. "logs/log.txt",
	memtx_memory = 512 * 1024 *1024,
	checkpoint_interval = 7200,
	custom_proc_title = "dew"
}

global_cfg = {
	db = "tardb",
	yandex_metrika = true,
	http_options = {
		log_requests = false
	},	
	carrot = false,
	host = "127.0.0.1",
	port = 8090,
	session_timeout = 30 * 24 * 3600,
	static_timeout = 1 * 3600,
	file_timeout = 30,
	static_dir = src_path .. "static",
	emails_dir = src_path .. "emails",
	feedback_dir = data_path .. "feedback",
	journal_dir = data_path .. "journal",
	content_dir = src_path .. "content",
	read_dir = src_path .. "read",
	password_timeout = 5,
	use_capture = false,
	max_recent = 20,
	max_log = 500000,
	tmp = data_path .. "tmp",
	files = data_path .. "files",
	debug_mail = true,
	mg = false,
	feedback_email = "support@example.com",
	create_license = "basic",
	licensing = false,
	my_site = "https://example.com",
	my_domain = "example.com",
	my_ip = "44.44.44.44",
	complete_delay = 0,
	on_premises = false,
	capterra = false,
	email_from = "DrakonHub Support <support@example.com>",
	application = "DrakonHub"
}

external_creds = require("external_creds")
require("init")

