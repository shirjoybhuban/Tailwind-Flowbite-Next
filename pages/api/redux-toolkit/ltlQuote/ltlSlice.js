import { Constants, XHR_STATE } from 'utility/constants'
import { createSlice } from '@reduxjs/toolkit'
import { ltlApis } from './ltlApi'

const initialState = {
	sendLtlMail: {
		response: null,
		loading: XHR_STATE.ASLEEP,
		error: '',
	},
}

const ltlSlice = createSlice({
	name: 'ltlSlice',
	initialState,
	reducers: {
		// LTL QUOTE FORM SUBMIT
		sendLtlMailStarts: (state, action) => {
			state.sendLtlMail.loading = XHR_STATE.IN_PROGRESS
			state.sendLtlMail.error = ''
		},
		sendLtlMailSuccess: (state, action) => {
			state.sendLtlMail.loading = XHR_STATE.COMPLETE
			state.sendLtlMail.response = action.payload
		},
		sendLtlMailError: (state, action) => {
			state.sendLtlMail.loading = XHR_STATE.ASLEEP
			state.sendLtlMail.error =
				action.payload && action.payload.message
					? `${action.payload.message}`
					: Constants.DEFAULT_ERROR_TEXT
		},
	},
})

export const ltlDispatcher = {
	sendLtlMail: (formData, token, options) => async (dispatch) => {
		try {
			dispatch(sendLtlMailStarts())
			const response = await ltlApis.sendLtlMail(formData, token)
			dispatch(sendLtlMailSuccess(response))
			if (options && options.success) options.success(response)
		} catch (error) {
			console.error('error.response in LTL Quote submissinon\n', error)
			dispatch(
				sendLtlMailError((error.response && error.response.data) || null)
			)
			if (options && options.error) options.error(error.response)
		}
	},
}

export const { sendLtlMailStarts, sendLtlMailSuccess, sendLtlMailError } =
	ltlSlice.actions

export default ltlSlice.reducer
