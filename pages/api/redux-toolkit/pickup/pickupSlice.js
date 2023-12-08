import { createSlice } from "@reduxjs/toolkit";
import { Constants, XHR_STATE } from "utility/constants";
import { pickupAPIs } from "./pickupApi";

export const initialState = {
    getViewShipment: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    updatePickups: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    getPickups: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    createPickups: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    getPickupByID: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    addShipmentToPickup: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    removeShipment: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    deletePickup: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    viewScheduledPickup: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    unseenRequiredAction: 0,
}

export const pickupSlice = createSlice({
    name: "pickupSlice",
    initialState,
    reducers: {
        // Get Pickups 
        getpickupsStarts: (state, action) => {
            state.getPickups.loading = XHR_STATE.IN_PROGRESS
            state.getPickups.error = "";
        },
        setUnseenRequiredActions: (state, action) => {

            state.unseenRequiredAction = action.payload;

        },
        getpickupsSuccess: (state, action) => {
            state.getPickups.loading = XHR_STATE.COMPLETE;
            state.getPickups.response = action.payload;
        },
        getpickupsError: (state, action) => {
            state.getPickups.loading = XHR_STATE.ASLEEP;
            state.getPickups.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // Update Pickups
        updatepickupsStarts: (state, action) => {
            state.updatePickups.loading = XHR_STATE.IN_PROGRESS
            state.updatePickups.error = "";
        },
        updatepickupsSuccess: (state, action) => {
            state.updatePickups.loading = XHR_STATE.COMPLETE;
            state.updatePickups.response = action.payload;
        },
        updatepickupsError: (state, action) => {
            state.updatePickups.loading = XHR_STATE.ASLEEP;
            state.updatePickups.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // View Shipment
        getViewShipmentStarts: (state, action) => {
            state.getViewShipment.loading = XHR_STATE.IN_PROGRESS
            state.getViewShipment.error = "";
        },
        getViewShipmentSuccess: (state, action) => {
            state.getViewShipment.loading = XHR_STATE.COMPLETE;
            state.getViewShipment.response = action.payload;
        },
        getViewShipmentError: (state, action) => {
            state.getViewShipment.loading = XHR_STATE.ASLEEP;
            state.getViewShipment.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // Create Pickups
        createPickupsStarts: (state, action) => {
            state.createPickups.loading = XHR_STATE.IN_PROGRESS
            state.createPickups.error = "";
        },
        createPickupsSuccess: (state, action) => {
            state.createPickups.loading = XHR_STATE.COMPLETE;
            state.createPickups.response = action.payload;
        },
        createPickupsError: (state, action) => {
            state.createPickups.loading = XHR_STATE.ASLEEP;
            state.createPickups.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // Get Pickups By id
        getPickupByIDStarts: (state, action) => {
            state.getPickupByID.loading = XHR_STATE.IN_PROGRESS
            state.getPickupByID.error = "";
        },
        getPickupByIDSuccess: (state, action) => {
            state.getPickupByID.loading = XHR_STATE.COMPLETE;
            state.getPickupByID.response = action.payload;
        },
        getPickupByIDError: (state, action) => {
            state.getPickupByID.loading = XHR_STATE.ASLEEP;
            state.getPickupByID.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // Add Shipments to a Pickup 
        addShipmentToPickupStarts: (state, action) => {
            state.addShipmentToPickup.loading = XHR_STATE.IN_PROGRESS
            state.addShipmentToPickup.error = "";
        },
        addShipmentToPickupSuccess: (state, action) => {
            state.addShipmentToPickup.loading = XHR_STATE.COMPLETE;
            state.addShipmentToPickup.response = action.payload;
        },
        addShipmentToPickupError: (state, action) => {
            state.addShipmentToPickup.loading = XHR_STATE.ASLEEP;
            state.addShipmentToPickup.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // Remove Shipments from a Pickup 
        removeShipmentStarts: (state, action) => {
            state.removeShipment.loading = XHR_STATE.IN_PROGRESS
            state.removeShipment.error = "";
        },
        removeShipmentSuccess: (state, action) => {
            state.removeShipment.loading = XHR_STATE.COMPLETE;
            state.removeShipment.response = action.payload;
        },
        removeShipmentError: (state, action) => {
            state.removeShipment.loading = XHR_STATE.ASLEEP;
            state.removeShipment.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // Delete Pickup 
        deletePickupStarts: (state, action) => {
            state.deletePickup.loading = XHR_STATE.IN_PROGRESS
            state.deletePickup.error = "";
        },
        deletePickupSuccess: (state, action) => {
            state.deletePickup.loading = XHR_STATE.COMPLETE;
            state.deletePickup.response = action.payload;
        },
        deletePickupError: (state, action) => {
            state.deletePickup.loading = XHR_STATE.ASLEEP;
            state.deletePickup.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // View Scheduled Pickups 
        viewScheduledPickupStarts: (state, action) => {
            state.viewScheduledPickup.loading = XHR_STATE.IN_PROGRESS
            state.viewScheduledPickup.error = "";
        },
        viewScheduledPickupSuccess: (state, action) => {
            state.viewScheduledPickup.loading = XHR_STATE.COMPLETE;
            state.viewScheduledPickup.response = action.payload;
        },
        viewScheduledPickupError: (state, action) => {
            state.viewScheduledPickup.loading = XHR_STATE.ASLEEP;
            state.viewScheduledPickup.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },
    }
});

export const pickupsDispatcher = {
    getViewShipment:
        (token, options) => async (dispatch) => {
            try {
                dispatch(getViewShipmentStarts());
                const response = await pickupAPIs.getViewShipment(token);
                let counter = 0;
                for (let i = 0; i < response.data.length; i++) {
                    if (response.data[i].view_status === false) counter++;
                }
                dispatch(setUnseenRequiredActions(counter));
                dispatch(getViewShipmentSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in getViewShipment\n", error);
                dispatch(
                    getViewShipmentError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    updatePickups:
        (payload, token, options) => async (dispatch) => {
            try {
                dispatch(updatePickupsStarts());
                const response = await pickupAPIs.updatePickups(payload, token);
                dispatch(updatePickupsSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in updatePickups\n", error);
                dispatch(
                    updatePickupsError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    getPickups:
        (token, options) => async (dispatch) => {
            try {
                dispatch(getPickupsStarts());
                const response = await pickupAPIs.getPickups(token);
                dispatch(getPickupsSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in getPickups\n", error);
                dispatch(
                    getPickupsError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    createPickups:
        (pickupDetails, token, options) => async (dispatch) => {
            try {
                dispatch(createPickupsStarts());
                const response = await pickupAPIs.createPickups(pickupDetails, token);
                dispatch(createPickupsSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in createPickups\n", error);
                dispatch(
                    createPickupsError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    getPickupByID:
        (token, options) => async (dispatch) => {
            try {
                dispatch(getPickupByIDStarts());
                const response = await pickupAPIs.getPickupByID(token);
                dispatch(getPickupByIDSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in getPickupByID\n", error);
                dispatch(
                    getPickupByIDError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },

    addShipmentToPickup:
        (pickupId, shipmentIds, token, options) => async (dispatch) => {
            try {
                dispatch(addShipmentToPickupStarts());
                const response = await pickupAPIs.addShipmentToPickup(pickupId, shipmentIds, token);
                dispatch(addShipmentToPickupSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in addShipmentToPickup\n", error);
                dispatch(
                    addShipmentToPickupError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },

    removeShipment:
        (pickupId, shipmentIds, token, options) => async (dispatch) => {
            try {
                dispatch(removeShipmentStarts());
                const response = await pickupAPIs.removeShipment(pickupId, shipmentIds, token);
                dispatch(removeShipmentSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in removeShipment\n", error);
                dispatch(
                    removeShipmentError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },

    deletePickup:
        (pickupId, token, options) => async (dispatch) => {
            try {
                dispatch(deletePickupStarts());
                const response = await pickupAPIs.deletePickup(pickupId, token);
                dispatch(deletePickupSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in deletePickup\n", error);
                dispatch(
                    deletePickupError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },

    viewScheduledPickup:
        (status, token, options) => async (dispatch) => {
            try {
                dispatch(viewScheduledPickupStarts());
                const response = await pickupAPIs.viewScheduledPickup(status, token);
                dispatch(viewScheduledPickupSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in viewScheduledPickup\n", error);
                dispatch(
                    viewScheduledPickupError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
}

export const {
    getViewShipmentStarts,
    getViewShipmentSuccess,
    setUnseenRequiredActions,
    getViewShipmentError,
    updatePickupsStarts,
    updatePickupsSuccess,
    updatePickupsError,
    getPickupsStarts,
    getPickupsSuccess,
    getPickupsError,
    createPickupsStarts,
    createPickupsSuccess,
    createPickupsError,
    getPickupByIDStarts,
    getPickupByIDSuccess,
    getPickupByIDError,
    addShipmentToPickupStarts,
    addShipmentToPickupSuccess,
    addShipmentToPickupError,
    removeShipmentStarts,
    removeShipmentSuccess,
    removeShipmentError,
    deletePickupStarts,
    deletePickupSuccess,
    deletePickupError,
    viewScheduledPickupStarts,
    viewScheduledPickupSuccess,
    viewScheduledPickupError
} = pickupSlice.actions;

export default pickupSlice.reducer;