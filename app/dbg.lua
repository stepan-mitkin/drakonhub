
box.cfg {
	background = false,
	listen = 3301,
	pid_file = "/dewt/tarantool.pid",
	memtx_dir = "/dewt/data",
	wal_dir = "/dewt/data",
	vinyl_dir = "/dewt/data",
	work_dir = "/dewt/app",
	log = "/dewt/logs/log.txt",
	memtx_memory = 512 * 1024 *1024,
	checkpoint_interval = 7200,
	custom_proc_title = "dew"
}


global_cfg = {
	db = "tardb"
}

console = require("console")
print("starting console...")
console.start()

