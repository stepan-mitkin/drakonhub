
box.cfg {
	background = false,
	listen = 3301,
	pid_file = "/dewt/tarantool.pid",
	memtx_dir = "/dewt/data",
	wal_dir = "/dewt/data",
	vinyl_dir = "/dewt/data",
	work_dir = "/home/stipan/drakonhub/app",
	log = "/dewt/logs/log.txt",
	memtx_memory = 512 * 1024 * 1024,
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
	diatest = "/home/stipan/drakonhub/diatest",
	host = "127.0.0.1",
	port = 8090,
	session_timeout = 3600,
	static_timeout = 1 * 3600,
	file_timeout = 2,
	static_dir = "/home/stipan/drakonhub/static",
	emails_dir = "/home/stipan/drakonhub/emails",
	feedback_dir = "/dewt/feedback",
	journal_dir = "/dewt/journal",
	content_dir = "/home/stipan/drakonhub/content",
	read_dir = "/home/stipan/drakonhub/read",
	password_timeout = 5,
	use_capture = false,
	max_recent = 20,
	max_log = 50000,
	tmp = "/dewt/tmp",
	files = "/dewt/files",
	debug_mail = true,
	mg = false,
	dead = false,
	feedback_email = "drakon.editor@gmail.com",
	create_license = "basic",
	licensing = true,
	https_sender_port = 3400,
	google_anal = false,
	my_site = "https://127.0.0.1",
	my_domain = "test.drakonhub.com",
	my_ip = "62.122.254.187",
	complete_delay = 2,
	on_premises = true,
	capterra = false,
	application = "DrakonHub",
	insecure_cookie = true
}

external_creds = require("external_creds")
require("init")


console = require("console")
print("starting console...")
console.start()

