
box.cfg {
	background = true,
	listen = 3302,
	pid_file = "/dewt/testdata/tarantool.pid",
	memtx_dir = "/dewt/testdata",
	wal_dir = "/dewt/testdata",
	vinyl_dir = "/dewt/testdata",
	work_dir = "/home/stipan/dew/app",
	log = "/dewt/testdata/log2.txt",
--	memtx_memory = 0.5,
	checkpoint_interval = 600,
}

global_cfg = {
	db = "tardb",
	--db = "mysqldb",
	-- Don't forget local use_mysql = true in api_test.cfg
	mysql = {
		host = "127.0.0.1",
		db = "testdb",
		user = "tara",
		password = "123456",	
		size = 5
	},
	host = "localhost",
	port = 8090,
	session_timeout = 4 * 60,
	static_timeout = 24 * 3600,
	file_timeout = 2,
	static_dir = "/home/stipan/dew/static",
	emails_dir = "/home/stipan/dew/emails",
	feedback_dir = "/dewt/testdata",
	journal_dir = "/dewt/testdata",
	content_dir = "/dewt/content",
	read_dir = "/dewt/read",	
	password_timeout = 1,
	use_capture = false,
	max_recent = 3,
	max_log = 500000,
	tmp = "/dewt/testdata",
	debug_mail = true,
	feedback_email = "drakon.editor@gmail.com",
	create_license = "basic",
	google_anal = false,
	my_site = "https://drakonhub.com",
	my_domain = "drakonhub.com",
	my_ip = "127.0.0.1"
}

external_creds = require("external_creds")
require("init")


