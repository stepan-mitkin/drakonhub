
box.cfg {
	background = true,
	listen = 3301,
	pid_file = "/dewt/tarantool.pid",
	memtx_dir = "/dewt/data",
	wal_dir = "/dewt/data",
	vinyl_dir = "/dewt/data",
	work_dir = "/dewt/app",
	log = "/dewt/logs/log.txt",
--	memtx_memory = 0.2,
	checkpoint_interval = 7200,
	custom_proc_title = "dew"
}

global_cfg = {
	db = "tardb",
	yandex_metrika = false,
	carrot = false,
	host = "127.0.0.1",
	port = 8090,
	session_timeout = 30 * 24 * 3600,
	static_timeout = 1 * 3600,
	file_timeout = 30,
	static_dir = "/dewt/static",
	emails_dir = "/dewt/emails",
	feedback_dir = "/dewt/feedback",
	journal_dir = "/dewt/journal",
	content_dir = "/dewt/content",
	read_dir = "/dewt/read",
	password_timeout = 5,
	use_capture = false,
	max_recent = 20,
	max_log = 500000,
	tmp = "/dewt/tmp",
	debug_mail = false,
	mg = true,
	feedback_email = "drakon.editor@gmail.com",
	create_license = "basic",
	licensing = true,
	https_sender_port = 3400,
	paypal_details = "/dewt/paypal",
--	paypal_address = "http://localhost:4010"
	paypal_address = "https://api.sandbox.paypal.com",
	google_anal = false,
	my_site = "https://test.drakonhub.com",
	my_domain = "test.drakonhub.com",
	my_ip = "185.125.168.7",
	complete_delay = 1,
	on_premises = false,
	capterra = false,
	application = "DrakonHub"
}

external_creds = require("external_creds")
require("init")

