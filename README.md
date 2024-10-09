# DrakonHub

Here, you can find the source code and releases for the web-based **DrakonHub** diagram editor.

To get the desktop version of **DrakonHub**, go to https://github.com/stepan-mitkin/drakonhub_desktop

DrakonHub server runs on [tarantool 2](https://www.tarantool.io) and requires Linux.

DrakonHub is written in DRAKON-JavaScript and DRAKON-Lua.

Use [DRAKON Editor](https://github.com/stepan-mitkin/drakon_editor) to open .drn files.
Most of .js and .lua files are generated from the respective .drn files.

Tcl 8.6 and Java are needed to build DrakonHub.

## License

PUBLIC DOMAIN


## System requirements

- Ubuntu Linux. Other Linux distributives could work but that is not tested.
- Tarantool 2.x.

## How to install DrakonHub


### Install Tarantool

Install Tarantool 2. Follow instructions here:

https://www.tarantool.io/en/download/os-installation/ubuntu/

### Install tarantool modules

sudo apt-get install luarocks

sudo luarocks install luautf8

### Security note

Close ports 3301 and 8090 from external access in the production environment.
If this is not done, the database will be available to the outside world, and DrakonHub server will be available without HTTPS.

### Download DrakonHub

- Download a DrakonHub release from GitHub Releases https://github.com/stepan-mitkin/drakonhub/releases
- Unzip the release into a folder on your Linux machine. The config expects the path to be /drakonhub.
- Put the proper configuration values in app/dewt.lua

### Configuration

- Make sure the installation folder matches **src_path** variable in dewt.lua
- **memtx_memory** property is the size of the in-memory database. It must not be larger than 50% of the RAM.
- **listen** property is the port that the tarantool server is listening on.
- **port** property is the port that the DrakonHub server is accepting HTTP requests on.
- Make sure the **host** property is the actual host value from the HTTP requests. For example, if DrakonHub runs behind nginx and in nginx configuration, the requests are forwarded to 127.0.0.1, the **host** property should be "127.0.0.1".

### Running in a virtual machine

- Make sure that network in the virtual machine is configured as Bridged Adapter.
- Put the proper value in the **host** property in the DrakonHub configuration file (app/dewt.lua or app/dbgcfg.lua). It should be the bridged IP address, for example 192.168.10.196.
- Add **insecure_cookie = true** in the **global_cfg** section.

### How to configure mailgun

By default, emails are saved in the **tmp** folder.

To start sending emails via Mailgun, do the following:
- Save your Mailgun key in app/external_creds.lua
- In dewt.lua, set **debug_mail** to false.
- In dewt.lua, set **mg** to true.

### How to start DrakonHub

- Go to **app** folder in your DrakonHub installation.
- tarantool dewt.lua

To run the server in the interactive mode, run

tarantool dbgcfg.lua

Do not forget to edit the dbgcfg.lua configuration file.


### How to stop DrakonHub

sudo killall tarantool

### How to connect to DrakonHub from our browser

http://localhost:8090/

In a production environment, put DrakonHub behind a proper HTTP server, for example nginx.

### Admin interface

http://localhost:8090/static/adm.html

To access this URL, logon as admin first.

Default admin credentials. User: *admin* password: *drakon*

**CHANGE THE ADMIN PASSWORD AFTER INSTALLATION!!!**