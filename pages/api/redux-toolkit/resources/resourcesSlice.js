import { createSlice } from "@reduxjs/toolkit";
import { Constants, XHR_STATE } from "utility/constants";
import { resourcesAPIs } from "./resourcesApi";

export const initialState = {
    menuLinks: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    dropoffLocations: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    shipmentOptions: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    courierPickupTimes: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    getClientSecretKey: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
}

export const resourceSlice = createSlice({
    name: "resourceSlice",
    initialState,
    reducers: {
        // Resources
        menuLinksStarts: (state, action) => {
            state.menuLinks.loading = XHR_STATE.IN_PROGRESS
            state.menuLinks.error = "";
        },
        menuLinksSuccess: (state, action) => {
            state.menuLinks.loading = XHR_STATE.COMPLETE;
            state.menuLinks.response = action.payload;
        },
        menuLinksError: (state, action) => {
            state.menuLinks.loading = XHR_STATE.ASLEEP;
            state.menuLinks.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // Drop Off Locations
        dropoffLocationsStarts: (state, action) => {
            state.dropoffLocations.loading = XHR_STATE.IN_PROGRESS
            state.dropoffLocations.error = "";
        },
        dropoffLocationsSuccess: (state, action) => {
            state.dropoffLocations.loading = XHR_STATE.COMPLETE;
            state.dropoffLocations.response = action.payload;
        },
        dropoffLocationsError: (state, action) => {
            state.dropoffLocations.loading = XHR_STATE.ASLEEP;
            state.dropoffLocations.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // Shipment Options
        shipmentOptionsStarts: (state, action) => {
            state.shipmentOptions.loading = XHR_STATE.IN_PROGRESS
            state.shipmentOptions.error = "";
        },
        shipmentOptionsSuccess: (state, action) => {
            state.shipmentOptions.loading = XHR_STATE.COMPLETE;
            state.shipmentOptions.response = action.payload;
        },
        shipmentOptionsError: (state, action) => {
            state.shipmentOptions.loading = XHR_STATE.ASLEEP;
            state.shipmentOptions.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // Courier Pickup Times
        courierPickupTimesStarts: (state, action) => {
            state.courierPickupTimes.loading = XHR_STATE.IN_PROGRESS
            state.courierPickupTimes.error = "";
        },
        courierPickupTimesSuccess: (state, action) => {
            state.courierPickupTimes.loading = XHR_STATE.COMPLETE;
            state.courierPickupTimes.response = action.payload;
        },
        courierPickupTimesError: (state, action) => {
            state.courierPickupTimes.loading = XHR_STATE.ASLEEP;
            state.courierPickupTimes.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // Client Secret Key
        getClientSecretKeyStarts: (state, action) => {
            state.getClientSecretKey.loading = XHR_STATE.IN_PROGRESS
            state.getClientSecretKey.error = "";
        },
        getClientSecretKeySuccess: (state, action) => {
            state.getClientSecretKey.loading = XHR_STATE.COMPLETE;
            state.getClientSecretKey.response = action.payload;
        },
        getClientSecretKeyError: (state, action) => {
            state.getClientSecretKey.loading = XHR_STATE.ASLEEP;
            state.getClientSecretKey.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },
    }
});

export const resourceDispatcher = {
    menuLinks:
        (token, options) => async (dispatch) => {
            try {
                dispatch(menuLinksStarts());
                const response = await resourcesAPIs.menuLinks(token);
                dispatch(menuLinksSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in menu\n", error);
                dispatch(
                    menuLinksError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    dropoffLocations:
        (token, options) => async (dispatch) => {
            try {
                dispatch(dropoffLocationsStarts());
                const response = await resourcesAPIs.dropoffLocations(token);
                dispatch(dropoffLocationsSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in dropoff\n", error);
                dispatch(
                    dropoffLocationsError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    shipmentOptions:
        (token, options) => async (dispatch) => {
            try {
                dispatch(shipmentOptionsStarts());
                const response = await resourcesAPIs.shipmentOptions(token);
                dispatch(shipmentOptionsSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in shipmentOptions\n", error);
                dispatch(
                    shipmentOptionsError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    courierPickupTimes:
        (token, options) => async (dispatch) => {
            try {
                dispatch(courierPickupTimesStarts());
                const response = await resourcesAPIs.courierPickupTimes(token);
                dispatch(courierPickupTimesSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in courierPickupTimes\n", error);
                dispatch(
                    courierPickupTimesError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    getClientSecretKey:
        (token, options) => async (dispatch) => {
            try {
                dispatch(getClientSecretKeyStarts());
                const response = await resourcesAPIs.getClientSecretKey(token);
                dispatch(getClientSecretKeySuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in getClientSecretKey\n", error);
                dispatch(
                    getClientSecretKeyError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
}

export const {
    menuLinksStarts,
    menuLinksSuccess,
    menuLinksError,
    dropoffLocationsStarts,
    dropoffLocationsSuccess,
    dropoffLocationsError,
    shipmentOptionsStarts,
    shipmentOptionsSuccess,
    shipmentOptionsError,
    courierPickupTimesStarts,
    courierPickupTimesSuccess,
    courierPickupTimesError,
    getClientSecretKeyStarts,
    getClientSecretKeySuccess,
    getClientSecretKeyError
} = resourceSlice.actions;

export default resourceSlice.reducer;