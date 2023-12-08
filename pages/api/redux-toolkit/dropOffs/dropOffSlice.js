import { createSlice } from "@reduxjs/toolkit";
import { Constants, XHR_STATE } from "utility/constants";
import { dropOffAPIs } from "./dropOffApi";

export const initialState = {
    getDropOffs: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    addToDropOff: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    deleteDropOff: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    }
}

export const dropOffSlice = createSlice({
    name: "dropOffSlice",
    initialState,
    reducers: {
        // Get DropOffs
        getDropOffsStarts: (state, action) => {
            state.getDropOffs.loading = XHR_STATE.IN_PROGRESS
            state.getDropOffs.error = "";
        },
        getDropOffsSuccess: (state, action) => {
            state.getDropOffs.loading = XHR_STATE.COMPLETE;
            state.getDropOffs.response = action.payload;
        },
        getDropOffsError: (state, action) => {
            state.getDropOffs.loading = XHR_STATE.ASLEEP;
            state.getDropOffs.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // Update DropOff
        addToDropOffStarts: (state, action) => {
            state.addToDropOff.loading = XHR_STATE.IN_PROGRESS
            state.addToDropOff.error = "";
        },
        addToDropOffSuccess: (state, action) => {
            state.addToDropOff.loading = XHR_STATE.COMPLETE;
            state.addToDropOff.response = action.payload;
        },
        addToDropOffError: (state, action) => {
            state.addToDropOff.loading = XHR_STATE.ASLEEP;
            state.addToDropOff.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // Delete Drop Off
        deleteDropOffStarts: (state, action) => {
            state.deleteDropOff.loading = XHR_STATE.IN_PROGRESS
            state.deleteDropOff.error = "";
        },
        deleteDropOffSuccess: (state, action) => {
            state.deleteDropOff.loading = XHR_STATE.COMPLETE;
            state.deleteDropOff.response = action.payload;
        },
        deleteDropOffError: (state, action) => {
            state.deleteDropOff.loading = XHR_STATE.ASLEEP;
            state.deleteDropOff.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },
    }
});

export const dropOffDispatcher = {
    getDropOffs:
        (token, options) => async (dispatch) => {
            try {
                dispatch(getDropOffsStarts());
                const response = await dropOffAPIs.getDropOffs(token);
                dispatch(getDropOffsSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in getDropOffs\n", error);
                dispatch(
                    getDropOffsError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    addToDropOff:
        (shipmentId, token, options) => async (dispatch) => {
            try {
                dispatch(addToDropOffStarts());
                const response = await dropOffAPIs.addToDropOff(shipmentId, token);
                dispatch(addToDropOffSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in addToDropOff\n", error);
                dispatch(
                    addToDropOffError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    deleteDropOff:
        (shipmentId, token, options) => async (dispatch) => {
            try {
                dispatch(deleteDropOffStarts());
                const response = await dropOffAPIs.deleteDropOff(shipmentId, token);
                dispatch(deleteDropOffSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in deleteDropOff\n", error);
                dispatch(
                    deleteDropOffError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
}

export const {
    getDropOffsStarts,
    getDropOffsSuccess,
    getDropOffsError,
    addToDropOffStarts,
    addToDropOffSuccess,
    addToDropOffError,
    deleteDropOffStarts,
    deleteDropOffSuccess,
    deleteDropOffError,
} = dropOffSlice.actions;

export default dropOffSlice.reducer;