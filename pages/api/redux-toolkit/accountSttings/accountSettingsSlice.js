import { createSlice } from "@reduxjs/toolkit";
import { Constants, XHR_STATE } from "utility/constants";
import { accountSettingsAPIs } from "./accountSettingsApi";

export const initialState = {
    getAccountSettings: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    updateAccountSettings: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    getTrackingSettings: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    updateTrackingSettings: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    getAddressesBook: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    createAddressesBook: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    getBillingCards: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    downloadAddressesBookSample: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    updateAddressesBook: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    deleteAddressesBook: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    bulkUpload: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    provinceByCountry: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    }
}

export const accountSettingsSlice = createSlice({
    name: "accountSettingsSlice",
    initialState,
    reducers: {
        // Get Account Settings
        getAccountSettingsStarts: (state, action) => {
            state.getAccountSettings.loading = XHR_STATE.IN_PROGRESS
            state.getAccountSettings.error = "";
        },
        getAccountSettingsSuccess: (state, action) => {
            state.getAccountSettings.loading = XHR_STATE.COMPLETE;
            state.getAccountSettings.response = action.payload;
        },
        getAccountSettingsError: (state, action) => {
            state.getAccountSettings.loading = XHR_STATE.ASLEEP;
            state.getAccountSettings.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // Update Account Settings
        updateAccountSettingsStarts: (state, action) => {
            state.updateAccountSettings.loading = XHR_STATE.IN_PROGRESS
            state.updateAccountSettings.error = "";
        },
        updateAccountSettingsSuccess: (state, action) => {
            state.updateAccountSettings.loading = XHR_STATE.COMPLETE;
            state.updateAccountSettings.response = action.payload;
        },
        updateAccountSettingsError: (state, action) => {
            state.updateAccountSettings.loading = XHR_STATE.ASLEEP;
            state.updateAccountSettings.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // Update Account Settings
        getTrackingSettingsStarts: (state, action) => {
            state.getTrackingSettings.loading = XHR_STATE.IN_PROGRESS
            state.getTrackingSettings.error = "";
        },
        getTrackingSettingsSuccess: (state, action) => {
            state.getTrackingSettings.loading = XHR_STATE.COMPLETE;
            state.getTrackingSettings.response = action.payload;
        },
        getTrackingSettingsError: (state, action) => {
            state.getTrackingSettings.loading = XHR_STATE.ASLEEP;
            state.getTrackingSettings.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // Update Account Settings
        updateTrackingSettingsStarts: (state, action) => {
            state.updateTrackingSettings.loading = XHR_STATE.IN_PROGRESS
            state.updateTrackingSettings.error = "";
        },
        updateTrackingSettingsSuccess: (state, action) => {
            state.updateTrackingSettings.loading = XHR_STATE.COMPLETE;
            state.updateTrackingSettings.response = action.payload;
        },
        updateTrackingSettingsError: (state, action) => {
            state.updateTrackingSettings.loading = XHR_STATE.ASLEEP;
            state.updateTrackingSettings.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // Update Account Settings
        getAddressesBookStarts: (state, action) => {
            state.getAddressesBook.loading = XHR_STATE.IN_PROGRESS
            state.getAddressesBook.error = "";
        },
        getAddressesBookSuccess: (state, action) => {
            state.getAddressesBook.loading = XHR_STATE.COMPLETE;
            state.getAddressesBook.response = action.payload;
        },
        getAddressesBookError: (state, action) => {
            state.getAddressesBook.loading = XHR_STATE.ASLEEP;
            state.getAddressesBook.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // Update Account Settings
        createAddressesBookStarts: (state, action) => {
            state.createAddressesBook.loading = XHR_STATE.IN_PROGRESS
            state.createAddressesBook.error = "";
        },
        createAddressesBookSuccess: (state, action) => {
            state.createAddressesBook.loading = XHR_STATE.COMPLETE;
            state.createAddressesBook.response = action.payload;
        },
        createAddressesBookError: (state, action) => {
            state.createAddressesBook.loading = XHR_STATE.ASLEEP;
            state.createAddressesBook.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        //Billing Cards
        getBillingCardsStarts: (state, action) => {
            state.getBillingCards.loading = XHR_STATE.IN_PROGRESS
            state.getBillingCards.error = "";
        },
        getBillingCardsSuccess: (state, action) => {
            state.getBillingCards.loading = XHR_STATE.COMPLETE;
            state.getBillingCards.response = action.payload;
        },
        getBillingCardsError: (state, action) => {
            state.getBillingCards.loading = XHR_STATE.ASLEEP;
            state.getBillingCards.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        //Download Address
        downloadAddressesBookSampleStarts: (state, action) => {
            state.downloadAddressesBookSample.loading = XHR_STATE.IN_PROGRESS
            state.downloadAddressesBookSample.error = "";
        },
        downloadAddressesBookSampleSuccess: (state, action) => {
            state.downloadAddressesBookSample.loading = XHR_STATE.COMPLETE;
            state.downloadAddressesBookSample.response = action.payload;
        },
        downloadAddressesBookSampleError: (state, action) => {
            state.downloadAddressesBookSample.loading = XHR_STATE.ASLEEP;
            state.downloadAddressesBookSample.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        //Update Address
        updateAddressesBookStarts: (state, action) => {
            state.updateAddressesBook.loading = XHR_STATE.IN_PROGRESS
            state.updateAddressesBook.error = "";
        },
        updateAddressesBookSuccess: (state, action) => {
            state.updateAddressesBook.loading = XHR_STATE.COMPLETE;
            state.updateAddressesBook.response = action.payload;
        },
        updateAddressesBookError: (state, action) => {
            state.updateAddressesBook.loading = XHR_STATE.ASLEEP;
            state.updateAddressesBook.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        //Delete Address
        deleteAddressesBookStarts: (state, action) => {
            state.deleteAddressesBook.loading = XHR_STATE.IN_PROGRESS
            state.deleteAddressesBook.error = "";
        },
        deleteAddressesBookSuccess: (state, action) => {
            state.deleteAddressesBook.loading = XHR_STATE.COMPLETE;
            state.deleteAddressesBook.response = action.payload;
        },
        deleteAddressesBookError: (state, action) => {
            state.deleteAddressesBook.loading = XHR_STATE.ASLEEP;
            state.deleteAddressesBook.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        //Bulk Upload
        bulkUploadStarts: (state, action) => {
            state.bulkUpload.loading = XHR_STATE.IN_PROGRESS
            state.bulkUpload.error = "";
        },
        bulkUploadSuccess: (state, action) => {
            state.bulkUpload.loading = XHR_STATE.COMPLETE;
            state.bulkUpload.response = action.payload;
        },
        bulkUploadError: (state, action) => {
            state.bulkUpload.loading = XHR_STATE.ASLEEP;
            state.bulkUpload.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        provinceByCountryStarts: (state, action) => {
            state.provinceByCountry.loading = XHR_STATE.IN_PROGRESS
            state.provinceByCountry.error = "";
        },
        provinceByCountrySuccess: (state, action) => {
            state.provinceByCountry.loading = XHR_STATE.COMPLETE;
            state.provinceByCountry.response = action.payload;
        },
        provinceByCountryError: (state, action) => {
            state.provinceByCountry.loading = XHR_STATE.ASLEEP;
            state.provinceByCountry.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },
    }
});

export const accountSettingsDispatcher = {
    getAccountSettings:
        (token, options) => async (dispatch) => {
            try {
                dispatch(getAccountSettingsStarts());
                const response = await accountSettingsAPIs.getAccountSettings(token);
                dispatch(getAccountSettingsSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in getAccountSettings\n", error);
                dispatch(
                    getAccountSettingsError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    updateAccountSettings:
        (payload, token, options) => async (dispatch) => {
            try {
                dispatch(updateAccountSettingsStarts());
                const response = await accountSettingsAPIs.updateAccountSettings(payload, token);
                dispatch(updateAccountSettingsSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in updateAccountSettings\n", error);
                dispatch(
                    updateAccountSettingsError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    getTrackingSettings:
        (token, options) => async (dispatch) => {
            try {
                dispatch(getTrackingSettingsStarts());
                const response = await accountSettingsAPIs.getTrackingSettings(token);
                dispatch(getTrackingSettingsSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in getTrackingSettings\n", error);
                dispatch(
                    getTrackingSettingsError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    updateTrackingSettings:
        (settings, token, type, options) => async (dispatch) => {
            try {
                dispatch(updateTrackingSettingsStarts());
                const response = await accountSettingsAPIs.updateTrackingSettings(settings, token, type);
                dispatch(updateTrackingSettingsSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in updateTrackingSettings\n", error);
                dispatch(
                    updateTrackingSettingsError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    getAddressesBook:
        (token, options) => async (dispatch) => {
            try {
                dispatch(getAddressesBookStarts());
                const response = await accountSettingsAPIs.getAddressesBook(token);
                dispatch(getAddressesBookSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in getAddressesBook\n", error);
                dispatch(
                    getAddressesBookError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    createAddressesBook:
        (addressDetails, token, options) => async (dispatch) => {
            try {
                dispatch(createAddressesBookStarts());
                const response = await accountSettingsAPIs.createAddressesBook(addressDetails, token);
                dispatch(createAddressesBookSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in createAddressesBook\n", error);
                dispatch(
                    createAddressesBookError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    updateAddressesBook:
        (addressDetails, addressId, token, options) => async (dispatch) => {
            try {
                dispatch(updateAddressesBookStarts());
                const response = await accountSettingsAPIs.updateAddressesBook(addressDetails, addressId, token);
                dispatch(updateAddressesBookSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in updateAddressesBook\n", error);
                dispatch(
                    updateAddressesBookError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    deleteAddressesBook:
        (addressId, token, options) => async (dispatch) => {
            try {
                dispatch(deleteAddressesBookStarts());
                const response = await accountSettingsAPIs.deleteAddressesBook(addressId, token);
                dispatch(deleteAddressesBookSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in deleteAddressesBook\n", error);
                dispatch(
                    deleteAddressesBookError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    bulkUpload:
        (formData, token, options) => async (dispatch) => {
            try {
                dispatch(bulkUploadStarts());
                const response = await accountSettingsAPIs.bulkUpload(formData, token);
                dispatch(bulkUploadSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in bulkUpload\n", error);
                dispatch(
                    bulkUploadError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    downloadAddressesBookSample:
        (token, options) => async (dispatch) => {
            try {
                dispatch(downloadAddressesBookSampleStarts());
                const response = await accountSettingsAPIs.downloadAddressesBookSample(token);
                dispatch(downloadAddressesBookSampleSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in downloadAddressesBookSample\n", error);
                dispatch(
                    downloadAddressesBookSampleError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    getBillingCards:
        (token, options) => async (dispatch) => {
            try {
                dispatch(getBillingCardsStarts());
                const response = await accountSettingsAPIs.getBillingCards(token);
                dispatch(getBillingCardsSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in getBillingCards\n", error);
                dispatch(getBillingCardsError(
                    (error.response && error.response.data) || null
                )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    provinceByCountry:
        (countryCode, token, options) => async (dispatch) => {
            try {
                dispatch(provinceByCountryStarts());
                const response = await accountSettingsAPIs.provinceByCountry(countryCode, token);
                dispatch(provinceByCountrySuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in provinceByCountry\n", error);
                dispatch(
                    provinceByCountryError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
}

export const {
    getAccountSettingsStarts,
    getAccountSettingsSuccess,
    getAccountSettingsError,
    updateAccountSettingsStarts,
    updateAccountSettingsSuccess,
    updateAccountSettingsError,
    getTrackingSettingsStarts,
    getTrackingSettingsSuccess,
    getTrackingSettingsError,
    updateTrackingSettingsStarts,
    updateTrackingSettingsSuccess,
    updateTrackingSettingsError,
    getAddressesBookStarts,
    getAddressesBookSuccess,
    getAddressesBookError,
    createAddressesBookStarts,
    createAddressesBookSuccess,
    createAddressesBookError,
    downloadAddressesBookSampleStarts,
    downloadAddressesBookSampleSuccess,
    downloadAddressesBookSampleError,
    getBillingCardsStarts,
    getBillingCardsSuccess,
    getBillingCardsError,
    updateAddressesBookStarts,
    updateAddressesBookSuccess,
    updateAddressesBookError,
    deleteAddressesBookStarts,
    deleteAddressesBookSuccess,
    deleteAddressesBookError,
    bulkUploadStarts,
    bulkUploadSuccess,
    bulkUploadError,
    provinceByCountryStarts,
    provinceByCountrySuccess,
    provinceByCountryError,
} = accountSettingsSlice.actions;

export default accountSettingsSlice.reducer;