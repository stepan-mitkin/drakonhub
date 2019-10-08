
utils = require("utils")
stats = require("stats")

function resummarize_history()
	local first = utils.date(2016, 08, 28)
	local day = 3600 * 24
	local current = os.time() - day
	while current >= first do
		stats.summarize_day(current)
		current = current - day
	end
end
