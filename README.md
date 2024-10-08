# DrakonHub

The source code for **DrakonHub** diagram editor.

DrakonHub server runs on [tarantool 1.10](https://www.tarantool.io) and requires Linux.

DrakonHub is written in DRAKON-JavaScript and DRAKON-Lua.

Use [DRAKON Editor](https://github.com/stepan-mitkin/drakon_editor) to open .drn files.
Most of .js and .lua files are generated from the respective .drn files.

Tcl 8.6 and Java are needed to build DrakonHub.

## License

PUBLIC DOMAIN


## System requirements

Ubuntu or Debian Linux. Other Linux distributives could work but that is not tested.

## How to install DrakonHub



**Install Tarantool**

Install Tarantool 1.10. Follow instructions here:

https://www.tarantool.io/en/doc/1.10/book/cartridge/cartridge_cli/installation/

**Stop the example instance**

After installation of tarantool, an example application instance might be installed.
If it is, we need to remove it.

sudo tarantoolctl stop example
sudo rm /etc/tarantool/instances.enabled/example.lua


**Install tarantool modules**

sudo apt-get install luarocks
sudo luarocks install luautf8


**Security note**

Close ports 3301 and 8090 from external access.
If this is not done, the database will be available to the outside world.

**Download DrakonHub**

- Download a DrakonHub release from GitHub Releases https://github.com/stepan-mitkin/drakonhub/releases
- Unzip the release into a folder on your Linux machine. The config expects the path to be /drakonhub.
- Change the configuration values in app/dewt.lua
- Copy dewt.lua to /etc/tarantool/instances.available
- Make a soft link from /etc/tarantool/instances.available/dewt.lua to /etc/tarantool/instances.enabled

**Configuration**

- Make sure the path where the DrakonHub release was unzipped to matches **src_path** variable in dewt.lua
- **memtx_memory** property is the size of the in-memory database. It must not be larger than 50% of the RAM.
- **listen** property is the port that the tarantool server is listening on.
- **port** property is the port that the DrakonHub server is accepting HTTP requests on.

**How to configure mailgun**

By default, emails are saved in the **tmp** folder.

To start sending emails via Mailgun, do the following:
- Save your Mailgun key in app/external_creds.lua
- In dewt.lua, set **debug_mail** to false.
- In dewt.lua, set **mg** to true.

**How to start DrakonHub**

sudo tarantoolctl start dewt

**How to stop DrakonHub**

sudo tarantoolctl stop dewt

**How to connect to DrakonHub from our browser**

http://localhost:8090/

In a production environment, put DrakonHub behind a proper HTTP server, for example nginx.

**Admin interface**

http://localhost:8090/static/adm.html

To access this URL, logon as admin first.

Default admin credentials. User: *admin* password: *drakon*

**CHANGE THE ADMIN PASSWORD AFTER INSTALLATION!!!**