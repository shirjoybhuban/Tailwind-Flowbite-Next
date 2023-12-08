import axios from 'axios'
import { Constants } from 'utility/constants'

export const ltlApis = {
	sendLtlMail: async (formData, token) => {
		const data = await axios({
			url: Constants.Api.ltl.ltlSendMail,
			method: 'POST',
			headers: {
				authorization: 'Bearer' + ' ' + token,
			},
			data: formData,
		})
		return data.data
	},
}
