import { createSlice } from "@reduxjs/toolkit";
import { Constants, XHR_STATE } from "utility/constants";
import { alertsAPIs } from "./alertsApi";

export const initialState = {
    getAlerts: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    viewAlert: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    createAlert: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    updateAlert: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    deleteAlert: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    currentAlertFeatureCount: {
        count: 0,
    },
}

export const alertSlice = createSlice({
    name: "alertSlice",
    initialState,
    reducers: {
        // Get Alerts
        getAlertsStarts: (state, action) => {
            state.getAlerts.loading = XHR_STATE.IN_PROGRESS
            state.getAlerts.error = "";
        },
        getAlertsSuccess: (state, action) => {
            state.getAlerts.loading = XHR_STATE.COMPLETE;
            state.getAlerts.response = action.payload;
        },
        getAlertsError: (state, action) => {
            state.getAlerts.loading = XHR_STATE.ASLEEP;
            state.getAlerts.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // View Alert
        viewAlertStarts: (state, action) => {
            state.viewAlert.loading = XHR_STATE.IN_PROGRESS
            state.viewAlert.error = "";
        },
        viewAlertSuccess: (state, action) => {
            state.viewAlert.loading = XHR_STATE.COMPLETE;
            state.viewAlert.response = action.payload;
        },
        viewAlertError: (state, action) => {
            state.viewAlert.loading = XHR_STATE.ASLEEP;
            state.viewAlert.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // Create Alert
        createAlertStarts: (state, action) => {
            state.createAlert.loading = XHR_STATE.IN_PROGRESS
            state.createAlert.error = "";
        },
        createAlertSuccess: (state, action) => {
            state.createAlert.loading = XHR_STATE.COMPLETE;
            state.createAlert.response = action.payload;
        },
        createAlertError: (state, action) => {
            state.createAlert.loading = XHR_STATE.ASLEEP;
            state.createAlert.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // Update Alert
        updateAlertStarts: (state, action) => {
            state.updateAlert.loading = XHR_STATE.IN_PROGRESS
            state.updateAlert.error = "";
        },
        updateAlertSuccess: (state, action) => {
            state.updateAlert.loading = XHR_STATE.COMPLETE;
            state.updateAlert.response = action.payload;
        },
        updateAlertError: (state, action) => {
            state.updateAlert.loading = XHR_STATE.ASLEEP;
            state.updateAlert.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // Delete Alert
        deleteAlertStarts: (state, action) => {
            state.deleteAlert.loading = XHR_STATE.IN_PROGRESS
            state.deleteAlert.error = "";
        },
        deleteAlertSuccess: (state, action) => {
            state.deleteAlert.loading = XHR_STATE.COMPLETE;
            state.deleteAlert.response = action.payload;
        },
        deleteAlertError: (state, action) => {
            state.deleteAlert.loading = XHR_STATE.ASLEEP;
            state.deleteAlert.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        currentAlertFeatureCountStarts: (state, action) => {
            state.currentAlertFeatureCount.count = action.payload;
        },
    }
});

export const alertsDispatcher = {
    getAlerts:
        (token, options) => async (dispatch) => {
            try {
                dispatch(getAlertsStarts());
                const response = await alertsAPIs.getAlerts(token);
                dispatch(getAlertsSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in getAlerts\n", error);
                dispatch(
                    getAlertsError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    viewAlert:
        (alertId, token, options) => async (dispatch) => {
            try {
                dispatch(viewAlertStarts());
                const response = await alertsAPIs.viewAlert(alertId, token);
                dispatch(viewAlertSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in viewAlert\n", error);
                dispatch(
                    viewAlertError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    createAlert:
        (alertDetails, token, options) => async (dispatch) => {
            try {
                dispatch(createAlertStarts());
                const response = await alertsAPIs.createAlert(alertDetails, token);
                dispatch(createAlertSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in createAlert\n", error);
                dispatch(
                    createAlertError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    updateAlert:
        (alertDetails, alertId, token, options) => async (dispatch) => {
            try {
                dispatch(updateAlertStarts());
                const response = await alertsAPIs.updateAlert(alertDetails, alertId, token);
                dispatch(updateAlertSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in updateAlert\n", error);
                dispatch(
                    updateAlertError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    deleteAlert:
        (alertId, token, options) => async (dispatch) => {
            try {
                dispatch(deleteAlertStarts());
                const response = await alertsAPIs.deleteAlert(alertId, token);
                dispatch(deleteAlertSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in deleteAlert\n", error);
                dispatch(
                    deleteAlertError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    currentAlertFeatureCount:
        (count, options) => (dispatch) => {
            try {
                dispatch(currentAlertFeatureCountStarts(count));
                if (options && options.success) {
                    options.success(true)
                };
            } catch (error) {
                console.error("error.response\n", error.response);
                if (options && options.error) options.error(false);
            }
        },
}

export const {
    getAlertsStarts,
    getAlertsSuccess,
    getAlertsError,
    alertIdStarts,
    alertIdSuccess,
    alertIdError,
    createAlertStarts,
    createAlertSuccess,
    createAlertError,
    updateAlertStarts,
    updateAlertSuccess,
    updateAlertError,
    deleteAlertStarts,
    deleteAlertSuccess,
    deleteAlertError,
    currentAlertFeatureCountStarts
} = alertSlice.actions;

export default alertSlice.reducer;