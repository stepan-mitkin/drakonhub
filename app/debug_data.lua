
local utils = require("utils")
local vud = require("vud")
local web = require("web")
local lic = require("lic")

local function set_license(user_id, product_id, expiry_type)
	local expiry
	if expiry_type == "valid" then
		expiry = os.time() + utils.days_to_secs(100)
	elseif expiry_type == "warning" then
		expiry = os.time() + utils.days_to_secs(20)
	else
		expiry = os.time() - 10
	end
	
	local user = vud.get_user(user_id)
	if not user then
		print("User not found " .. user_id)
		return
	end
	lic.update_license(
		user.license,
		{
			product_id = product_id,
			expiry = expiry
		}
	)
end


local function set_licenses()
	set_license("user-basic", "basic", "valid")
	set_license("user-extended", "extended", "valid")
	set_license("user-extended-warn", "extended", "warning")
	set_license("user-extended-exp", "extended", "expired")
	set_license("user-team", "team", "valid")
	set_license("user-team-warn", "team", "warning")
	set_license("user-team-exp", "team", "expired")
end



return {
	set_licenses = set_licenses
}
