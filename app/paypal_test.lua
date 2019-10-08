

utils = require("utils")
log = require("log")

paypal = "https://api.sandbox.paypal.com"
--paypal = "http://localhost:4010"

user = "AZkR-KuYnstrpFecIDqaDdaUH4X5bQ_6eIymEda7kHCN43SUdgOXJgeKhKr1vi4eued-oIJJKfZctyIV:EJydWhRYHV4S0WYQz8ovdgIfYc5j1I4PR3tGKRBx016ZqHi_Ze9DgBGIshIBpqTQ_8H2UHfqukHrtrrs"

headers = {
	"Accept: application/json",
	"Accept-Language: en_US"
}


body = {
	url = paypal .. "/v1/oauth2/token",
	data = "grant_type=client_credentials",
	mime = "application/x-www-form-urlencoded",
	headers = headers,
	user = user
}


result = utils.msgpack_call("localhost", 3400, body)

print(result.access_token)
print(result.error)

access_token = result.access_token



payment = {
	intent = "sale",
	payer = {
		payment_method = "credit_card",
		funding_instruments = {
			{
				credit_card = {
					number = "4727732872543303",
					type = "visa",
					expire_month = 11,
					expire_year = 2021,
					cvv2 = 111,
					first_name = "Stepan",
					last_name = "Mitkin"
				}
			}
		}
	},
	transactions = {
		{
			amount = {
			  total = "7.47",
			  currency = "EUR"
			},
			description = "This is the payment transaction description."
		}
	}
}

headers = {
	"Authorization: Bearer " .. access_token
}

body = {
	url = paypal .. "/v1/payments/payment",
	data = payment,
	headers = headers
}

result = utils.msgpack_call("localhost", 3400, body)
print(result.state)
print(result.id)
