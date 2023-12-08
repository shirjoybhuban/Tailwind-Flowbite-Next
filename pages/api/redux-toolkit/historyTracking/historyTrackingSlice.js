import { createSlice } from "@reduxjs/toolkit";
import { Constants, XHR_STATE } from "utility/constants";
import { historyTrackingAPIs } from "./historyTrackingApi";

export const initialState = {
    viewShipments: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    searchShipments: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    downloadShipments: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    getTrackingData: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    deleteShipment: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    fileClaimSubmit: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
}

export const historyTrackingSlice = createSlice({
    name: "historyTrackingSlice",
    initialState,
    reducers: {
        // View Shipments
        viewShipmentsStarts: (state, action) => {
            state.viewShipments.loading = XHR_STATE.IN_PROGRESS
            state.viewShipments.error = "";
        },
        viewShipmentsSuccess: (state, action) => {
            state.viewShipments.loading = XHR_STATE.COMPLETE;
            state.viewShipments.response = action.payload;
        },
        viewShipmentsError: (state, action) => {
            state.viewShipments.loading = XHR_STATE.ASLEEP;
            state.viewShipments.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // Search Shipments
        searchShipmentsStarts: (state, action) => {
            state.searchShipments.loading = XHR_STATE.IN_PROGRESS
            state.searchShipments.error = "";
        },
        searchShipmentsSuccess: (state, action) => {
            state.searchShipments.loading = XHR_STATE.COMPLETE;
            state.searchShipments.response = action.payload;
        },
        searchShipmentsError: (state, action) => {
            state.searchShipments.loading = XHR_STATE.ASLEEP;
            state.searchShipments.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // Download Shipments
        downloadShipmentsStarts: (state, action) => {
            state.downloadShipments.loading = XHR_STATE.IN_PROGRESS
            state.downloadShipments.error = "";
        },
        downloadShipmentsSuccess: (state, action) => {
            state.downloadShipments.loading = XHR_STATE.COMPLETE;
            state.downloadShipments.response = action.payload;
        },
        downloadShipmentsError: (state, action) => {
            state.downloadShipments.loading = XHR_STATE.ASLEEP;
            state.downloadShipments.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // Get Tracking Data
        getTrackingDataStarts: (state, action) => {
            state.getTrackingData.loading = XHR_STATE.IN_PROGRESS
            state.getTrackingData.error = "";
        },
        getTrackingDataSuccess: (state, action) => {
            state.getTrackingData.loading = XHR_STATE.COMPLETE;
            state.getTrackingData.response = action.payload;
        },
        getTrackingDataError: (state, action) => {
            state.getTrackingData.loading = XHR_STATE.ASLEEP;
            state.getTrackingData.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // Delete Shipment
        deleteShipmentStarts: (state, action) => {
            state.deleteShipment.loading = XHR_STATE.IN_PROGRESS
            state.deleteShipment.error = "";
        },
        deleteShipmentSuccess: (state, action) => {
            state.deleteShipment.loading = XHR_STATE.COMPLETE;
            state.deleteShipment.response = action.payload;
        },
        deleteShipmentError: (state, action) => {
            state.deleteShipment.loading = XHR_STATE.ASLEEP;
            state.deleteShipment.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // File a claim
        fileClaimSubmitStarts: (state, action) => {
            state.fileClaimSubmit.loading = XHR_STATE.IN_PROGRESS
            state.fileClaimSubmit.error = "";
        },
        fileClaimSubmitSuccess: (state, action) => {
            state.fileClaimSubmit.loading = XHR_STATE.COMPLETE;
            state.fileClaimSubmit.response = action.payload;
        },
        fileClaimSubmitError: (state, action) => {
            state.fileClaimSubmit.loading = XHR_STATE.ASLEEP;
            state.fileClaimSubmit.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        }
    }
});

export const historyTrackingDispatcher = {
    viewShipments:
        (token, options) => async (dispatch) => {
            try {
                dispatch(viewShipmentsStarts());
                const response = await historyTrackingAPIs.viewShipments(token);
                dispatch(viewShipmentsSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in viewShipments\n", error);
                dispatch(
                    viewShipmentsError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    searchShipments:
        (search, tracking_status, courier, from_date, to_date, token,page,options) => async (dispatch) => {
            try {
                dispatch(searchShipmentsStarts());
                const response = await historyTrackingAPIs.searchShipments(search, tracking_status, courier, from_date, to_date, token,page);
                dispatch(searchShipmentsSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in searchShipments\n", error);
                dispatch(
                    searchShipmentsError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    downloadShipments:
        (search, tracking_status, courier, from_date, to_date, token, options) => async (dispatch) => {
            try {
                dispatch(downloadShipmentsStarts());
                const response = await historyTrackingAPIs.downloadShipments(search, tracking_status, courier, from_date, to_date, token);
                dispatch(downloadShipmentsSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in downloadShipments\n", error);
                dispatch(
                    downloadShipmentsError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    getTrackingData:
        (trackingId, token, options) => async (dispatch) => {
            try {
                dispatch(getTrackingDataStarts());
                const response = await historyTrackingAPIs.getTrackingData(trackingId, token);
                dispatch(getTrackingDataSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in getTrackingData\n", error);
                dispatch(
                    getTrackingDataError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    deleteShipment:
        (shipment_id, delete_pickup, token, options) => async (dispatch) => {
            try {
                dispatch(deleteShipmentStarts());
                const response = await historyTrackingAPIs.deleteShipment(shipment_id, delete_pickup, token);
                dispatch(deleteShipmentSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in deleteShipment\n", error);
                dispatch(
                    deleteShipmentError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },

    fileClaimSubmit:
        (shipment_id, payload, token, options) => async (dispatch) => {
            try {
                dispatch(fileClaimSubmitStarts());
                const response = await historyTrackingAPIs.fileClaimSubmit(shipment_id, payload, token);
                dispatch(fileClaimSubmitSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in fileClaimSubmit\n", error);
                dispatch(
                    fileClaimSubmitError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        }
}

export const {
    viewShipmentsStarts,
    viewShipmentsSuccess,
    viewShipmentsError,
    searchShipmentsStarts,
    searchShipmentsSuccess,
    searchShipmentsError,
    downloadShipmentsStarts,
    downloadShipmentsSuccess,
    downloadShipmentsError,
    getTrackingDataStarts,
    getTrackingDataSuccess,
    getTrackingDataError,
    deleteShipmentStarts,
    deleteShipmentSuccess,
    deleteShipmentError,
    fileClaimSubmitStarts,
    fileClaimSubmitSuccess,
    fileClaimSubmitError,
} = historyTrackingSlice.actions;

export default historyTrackingSlice.reducer;
