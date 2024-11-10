
local src_path = "/home/stipan/code/drakonhub/"
local data_path = "/dewt/"

box.cfg {
	background = false,
	listen = 3301,
	pid_file = data_path .. "tarantool.pid",
	memtx_dir = data_path .. "data",
	wal_dir = data_path .. "data",
	vinyl_dir = data_path .. "data",
	work_dir = src_path .. "app",
	log = data_path .. "logs/log.txt",
	memtx_memory = 2048 * 1024 * 1024,
	checkpoint_interval = 600,
	custom_proc_title = "dew"
}

global_cfg = {
	skip_jobs = false,
	db = "tardb",
	--db = "mysqldb",
	mysql = {
		host = "127.0.0.1",
		db = "drakonhub",
		user = "tara",
		password = "123456",	
		size = 5
	},
	http_options = {
		log_requests = false
	},
	yandex_metrika = false,
	carrot = false,
	diatest = src_path .. "diatest",
	host = "127.0.0.1",
	port = 8090,
	session_timeout = 3600,
	static_timeout = 1 * 3600,
	file_timeout = 2,
	static_dir = src_path .. "static",
	emails_dir = src_path .. "emails",
	feedback_dir = data_path .. "feedback",
	journal_dir = data_path .. "journal",
	content_dir = src_path .. "content",
	read_dir = src_path .. "read",
	password_timeout = 5,
	use_capture = false,
	max_recent = 20,
	max_log = 50000,
	tmp = data_path .. "tmp",
	files = data_path .. "files",
	debug_mail = true,
	mg = false,
	dead = false,
	feedback_email = "support@example.com",
	create_license = "basic",
	licensing = true,
	https_sender_port = 3400,
	google_anal = false,
	my_site = "https://127.0.0.1",
	my_domain = "example.com",
	my_ip = "44.44.44.44",
	complete_delay = 2,
	on_premises = false,
	capterra = false,
	email_from = "DrakonHub Support <support@example.com>",
	application = "DrakonHub Local",
	insecure_cookie = true
}

external_creds = require("external_creds")
require("init")


console = require("console")
print("starting console...")
console.start()

