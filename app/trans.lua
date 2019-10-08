local log = require("log")
local json = require("json")
local utils = require("utils")

setfenv(1, {}) 

local languages = {}

function translate(language, page, text)

	local for_language = languages[language]
	if for_language == nil then
		log.error("translations for language '" .. language .. "' not found")
		return text
	end
	local for_page = for_language[page]
	if for_page == nil then
		log.error("translations for page '" .. page .. "' not found")
		return text
	end
	local translation = for_page[text]
	if translation == nil then
		log.error("translation for text '" .. text .. "' not found")
		return text
	end
	return translation
end

function add(language, page, filename)
	local content = utils.read_all_bytes(filename)
	local data = json.decode(content)
	local for_language = languages[language]
	if for_language == nil then
		for_language = {}
		languages[language] = for_language
	end
	for_language[page] = data
end


return {
	translate = translate,
	add = add
}
