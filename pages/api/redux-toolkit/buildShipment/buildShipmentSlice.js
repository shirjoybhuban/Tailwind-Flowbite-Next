import { createSlice } from "@reduxjs/toolkit";
import { Constants, XHR_STATE } from "utility/constants";
import { buildShipmentAPIs } from "./buildShipmentApi";

export const initialState = {
    createShipment: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    updateShipmentAddress: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    updateAddress: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    addParcelsToShipment: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    addOptionsToShipment: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    getShipmentRates: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    previewShipment: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    purchaseLabel: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    pendingPaymentRetry: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    viewShipment: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    downloadLabel: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    viewLabel: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    viewInvoice: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    loadingMessages: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    internationalShipmentCreate: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    internationalShipmentItemsCreate: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    internationalShipmentWithItemsView: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    downloadInvoice: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    }
}

export const buildShipmentSlice = createSlice({
    name: "buildShipmentSlice",
    initialState,
    reducers: {
        // Create Shipment
        createShipmentStarts: (state, action) => {
            state.createShipment.loading = XHR_STATE.IN_PROGRESS
            state.createShipment.error = "";
        },
        createShipmentSuccess: (state, action) => {
            state.createShipment.loading = XHR_STATE.COMPLETE;
            state.createShipment.response = action.payload;
        },
        createShipmentError: (state, action) => {
            state.createShipment.loading = XHR_STATE.ASLEEP;
            state.createShipment.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // Update Shipment Address
        updateShipmentAddressStarts: (state, action) => {
            state.updateShipmentAddress.loading = XHR_STATE.IN_PROGRESS
            state.updateShipmentAddress.error = "";
        },
        updateShipmentAddressSuccess: (state, action) => {
            state.updateShipmentAddress.loading = XHR_STATE.COMPLETE;
            state.updateShipmentAddress.response = action.payload;
        },
        updateShipmentAddressError: (state, action) => {
            state.updateShipmentAddress.loading = XHR_STATE.ASLEEP;
            state.updateShipmentAddress.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // Update Address
        updateAddressStarts: (state, action) => {
            state.updateAddress.loading = XHR_STATE.IN_PROGRESS
            state.updateAddress.error = "";
        },
        updateAddressSuccess: (state, action) => {
            state.updateAddress.loading = XHR_STATE.COMPLETE;
            state.updateAddress.response = action.payload;
        },
        updateAddressError: (state, action) => {
            state.updateAddress.loading = XHR_STATE.ASLEEP;
            state.updateAddress.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // Add Parcel To Shipment
        addParcelsToShipmentStarts: (state, action) => {
            state.addParcelsToShipment.loading = XHR_STATE.IN_PROGRESS
            state.addParcelsToShipment.error = "";
        },
        addParcelsToShipmentSuccess: (state, action) => {
            state.addParcelsToShipment.loading = XHR_STATE.COMPLETE;
            state.addParcelsToShipment.response = action.payload;
        },
        addParcelsToShipmentError: (state, action) => {
            state.addParcelsToShipment.loading = XHR_STATE.ASLEEP;
            state.addParcelsToShipment.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // Add Option To Shipment
        addOptionsToShipmentStarts: (state, action) => {
            state.addOptionsToShipment.loading = XHR_STATE.IN_PROGRESS
            state.addOptionsToShipment.error = "";
        },
        addOptionsToShipmentSuccess: (state, action) => {
            state.addOptionsToShipment.loading = XHR_STATE.COMPLETE;
            state.addOptionsToShipment.response = action.payload;
        },
        addOptionsToShipmentError: (state, action) => {
            state.addOptionsToShipment.loading = XHR_STATE.ASLEEP;
            state.addOptionsToShipment.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // Get Shipment Rates
        getShipmentRatesStarts: (state, action) => {
            state.getShipmentRates.loading = XHR_STATE.IN_PROGRESS
            state.getShipmentRates.error = "";
        },
        getShipmentRatesSuccess: (state, action) => {
            state.getShipmentRates.loading = XHR_STATE.COMPLETE;
            state.getShipmentRates.response = action.payload;
        },
        getShipmentRatesError: (state, action) => {
            state.getShipmentRates.loading = XHR_STATE.ASLEEP;
            state.getShipmentRates.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // Preview Shipment
        previewShipmentStarts: (state, action) => {
            state.previewShipment.loading = XHR_STATE.IN_PROGRESS
            state.previewShipment.error = "";
        },
        previewShipmentSuccess: (state, action) => {
            state.previewShipment.loading = XHR_STATE.COMPLETE;
            state.previewShipment.response = action.payload;
        },
        previewShipmentError: (state, action) => {
            state.previewShipment.loading = XHR_STATE.ASLEEP;
            state.previewShipment.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // Purchase Label
        purchaseLabelStarts: (state, action) => {
            state.purchaseLabel.loading = XHR_STATE.IN_PROGRESS
            state.purchaseLabel.error = "";
        },
        purchaseLabelSuccess: (state, action) => {
            state.purchaseLabel.loading = XHR_STATE.COMPLETE;
            state.purchaseLabel.response = action.payload;
        },
        purchaseLabelError: (state, action) => {
            state.purchaseLabel.loading = XHR_STATE.ASLEEP;
            state.purchaseLabel.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // Retry Payment
        pendingPaymentRetryStarts: (state, action) => {
            state.pendingPaymentRetry.loading = XHR_STATE.IN_PROGRESS
            state.pendingPaymentRetry.error = "";
        },
        pendingPaymentRetrySuccess: (state, action) => {
            state.pendingPaymentRetry.loading = XHR_STATE.COMPLETE;
            state.pendingPaymentRetry.response = action.payload;
        },
        pendingPaymentRetryError: (state, action) => {
            state.pendingPaymentRetry.loading = XHR_STATE.ASLEEP;
            state.pendingPaymentRetry.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // View Shipment
        viewShipmentStarts: (state, action) => {
            state.viewShipment.loading = XHR_STATE.IN_PROGRESS
            state.viewShipment.error = "";
        },
        viewShipmentSuccess: (state, action) => {
            state.viewShipment.loading = XHR_STATE.COMPLETE;
            state.viewShipment.response = action.payload;
        },
        viewShipmentError: (state, action) => {
            state.viewShipment.loading = XHR_STATE.ASLEEP;
            state.viewShipment.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // Download Label
        downloadLabelStarts: (state, action) => {
            state.downloadLabel.loading = XHR_STATE.IN_PROGRESS
            state.downloadLabel.error = "";
        },
        downloadLabelSuccess: (state, action) => {
            state.downloadLabel.loading = XHR_STATE.COMPLETE;
            state.downloadLabel.response = action.payload;
        },
        downloadLabelError: (state, action) => {
            state.downloadLabel.loading = XHR_STATE.ASLEEP;
            state.downloadLabel.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // View Label
        viewLabelStarts: (state, action) => {
            state.viewLabel.loading = XHR_STATE.IN_PROGRESS
            state.viewLabel.error = "";
        },
        viewLabelSuccess: (state, action) => {
            state.viewLabel.loading = XHR_STATE.COMPLETE;
            state.viewLabel.response = action.payload;
        },
        viewLabelError: (state, action) => {
            state.viewLabel.loading = XHR_STATE.ASLEEP;
            state.viewLabel.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },
        viewInvoiceStarts: (state, action) => {
            state.viewInvoice.loading = XHR_STATE.IN_PROGRESS
            state.viewInvoice.error = "";
        },
        viewInvoiceSuccess: (state, action) => {
            state.viewInvoice.loading = XHR_STATE.COMPLETE;
            state.viewInvoice.response = action.payload;
        },
        viewInvoiceError: (state, action) => {
            state.viewInvoice.loading = XHR_STATE.ASLEEP;
            state.viewInvoice.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },
        loadingMessageStarts: (state, action) => {
            state.loadingMessages.loading = XHR_STATE.IN_PROGRESS
            state.loadingMessages.error = "";
        },
        loadingMessageSuccess: (state, action) => {
            state.loadingMessages.loading = XHR_STATE.COMPLETE;
            state.loadingMessages.response = action.payload;
        },
        loadingMessageError: (state, action) => {
            state.loadingMessages.loading = XHR_STATE.ASLEEP;
            state.loadingMessages.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // International Shipment
        internationalShipmentCreateStarts: (state, action) => {
            state.internationalShipmentCreate.loading = XHR_STATE.IN_PROGRESS
            state.internationalShipmentCreate.error = "";
        },
        internationalShipmentCreateSuccess: (state, action) => {
            state.internationalShipmentCreate.loading = XHR_STATE.COMPLETE;
            state.internationalShipmentCreate.response = action.payload;
        },
        internationalShipmentCreateError: (state, action) => {
            state.internationalShipmentCreate.loading = XHR_STATE.ASLEEP;
            state.internationalShipmentCreate.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },
        internationalShipmentItemsCreateStarts: (state, action) => {
            state.internationalShipmentItemsCreate.loading = XHR_STATE.IN_PROGRESS
            state.internationalShipmentItemsCreate.error = "";
        },
        internationalShipmentItemsCreateSuccess: (state, action) => {
            state.internationalShipmentItemsCreate.loading = XHR_STATE.COMPLETE;
            state.internationalShipmentItemsCreate.response = action.payload;
        },
        internationalShipmentItemsCreateError: (state, action) => {
            state.internationalShipmentItemsCreate.loading = XHR_STATE.ASLEEP;
            state.internationalShipmentItemsCreate.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },
        internationalShipmentWithItemsViewStarts: (state, action) => {
            state.internationalShipmentWithItemsView.loading = XHR_STATE.IN_PROGRESS
            state.internationalShipmentWithItemsView.error = "";
        },
        internationalShipmentWithItemsViewSuccess: (state, action) => {
            state.internationalShipmentWithItemsView.loading = XHR_STATE.COMPLETE;
            state.internationalShipmentWithItemsView.response = action.payload;
        },
        internationalShipmentWithItemsViewError: (state, action) => {
            state.internationalShipmentWithItemsView.loading = XHR_STATE.ASLEEP;
            state.internationalShipmentWithItemsView.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // Download Label
        downloadInvoiceStarts: (state, action) => {
            state.downloadInvoice.loading = XHR_STATE.IN_PROGRESS
            state.downloadInvoice.error = "";
        },
        downloadInvoiceSuccess: (state, action) => {
            state.downloadInvoice.loading = XHR_STATE.COMPLETE;
            state.downloadInvoice.response = action.payload;
        },
        downloadInvoiceError: (state, action) => {
            state.downloadInvoice.loading = XHR_STATE.ASLEEP;
            state.downloadInvoice.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },


    }
});

export const buildShipmentDispatcher = {
    createShipment:
        (token, options) => async (dispatch) => {
            try {
                dispatch(createShipmentStarts());
                const response = await buildShipmentAPIs.createShipment(token);
                dispatch(createShipmentSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in createShipment\n", error);
                dispatch(
                    createShipmentError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    updateShipmentAddress:
        (addressDetails, shipment_id, token, options) => async (dispatch) => {
            try {
                dispatch(updateShipmentAddressStarts());
                const response = await buildShipmentAPIs.updateShipmentAddress(addressDetails, shipment_id, token);
                dispatch(updateShipmentAddressSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in updateShipmentAddress\n", error);
                dispatch(
                    updateShipmentAddressError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    updateAddress:
        (addressDetails, shipment_id, type, token, options) => async (dispatch) => {
            try {
                dispatch(updateAddressStarts());
                const response = await buildShipmentAPIs.updateAddress(addressDetails, shipment_id, type, token);
                dispatch(updateAddressSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in updateAddress\n", error);
                dispatch(
                    updateAddressError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    addParcelsToShipment:
        (parcels, shipment_id, token, options) => async (dispatch) => {
            try {
                dispatch(addParcelsToShipmentStarts());
                const response = await buildShipmentAPIs.addParcelsToShipment(parcels, shipment_id, token);
                dispatch(addParcelsToShipmentSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in addParcelsToShipment\n", error);
                dispatch(
                    addParcelsToShipmentError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    addOptionsToShipment:
        (shipmentOptions, token, options) => async (dispatch) => {
            try {
                dispatch(addOptionsToShipmentStarts());
                const response = await buildShipmentAPIs.addOptionsToShipment(shipmentOptions, token);
                dispatch(addOptionsToShipmentSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in addOptionsToShipment\n", error);
                dispatch(
                    addOptionsToShipmentError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    removeInsuranceFromShipment:
        (shipmentOptions, token, options) => async (dispatch) => {
            try {
                dispatch(addOptionsToShipmentStarts());
                const response = await buildShipmentAPIs.removeInsuranceFromShipment(shipmentOptions, token);
                dispatch(addOptionsToShipmentSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in remove insurance\n", error);
                dispatch(
                    addOptionsToShipmentError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    addInsuranceFromShipment:
        (shipmentOptions, token, options) => async (dispatch) => {
            try {
                dispatch(addOptionsToShipmentStarts());
                const response = await buildShipmentAPIs.addInsuranceFromShipment(shipmentOptions, token);
                dispatch(addOptionsToShipmentSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in remove insurance\n", error);
                dispatch(
                    addOptionsToShipmentError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    getShipmentRates:
        (shipment_id, token, integration = null, options) => async (dispatch) => {
            try {
                dispatch(getShipmentRatesStarts());
                const response = await buildShipmentAPIs.getShipmentRates(shipment_id, token, integration);
                dispatch(getShipmentRatesSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in getShipmentRates\n", error);
                dispatch(
                    getShipmentRatesError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    getShipmentRateQuickQuote:
        (integration = null, qq_id = null, token, body, options) => async (dispatch) => {
            try {
                dispatch(getShipmentRatesStarts());
                const response = await buildShipmentAPIs.getShipmentRateQuickQuote(integration, qq_id, token, body);
                dispatch(getShipmentRatesSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in getShipmentRates\n", error);
                dispatch(
                    getShipmentRatesError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    previewShipment:
        (shipment_id, rate_id, token, options) => async (dispatch) => {
            try {
                dispatch(previewShipmentStarts());
                const response = await buildShipmentAPIs.previewShipment(shipment_id, rate_id, token);
                dispatch(previewShipmentSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in previewShipment\n", error);
                dispatch(
                    previewShipmentError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    purchaseLabel:
        (shipment_id, rate_id, token, options) => async (dispatch) => {
            try {
                dispatch(purchaseLabelStarts());
                const response = await buildShipmentAPIs.purchaseLabel(shipment_id, rate_id, token);
                dispatch(purchaseLabelSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in purchaseLabel\n", error);
                dispatch(
                    purchaseLabelError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    pendingPaymentRetry:
        (shipment_id, token, options) => async (dispatch) => {
            try {
                dispatch(pendingPaymentRetryStarts());
                const response = await buildShipmentAPIs.pendingPaymentRetry(shipment_id, token);
                dispatch(pendingPaymentRetrySuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in pendingPaymentRetry\n", error);
                dispatch(
                    pendingPaymentRetryError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    viewShipment:
        (shipment_id, token, options) => async (dispatch) => {
            try {
                dispatch(viewShipmentStarts());
                const response = await buildShipmentAPIs.viewShipment(shipment_id, token);
                dispatch(viewShipmentSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in viewShipment\n", error);
                dispatch(
                    viewShipmentError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    downloadLabel:
        (shipment_id, token, options) => async (dispatch) => {
            try {
                dispatch(downloadLabelStarts());
                const response = await buildShipmentAPIs.downloadLabel(shipment_id, token);
                dispatch(downloadLabelSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in downloadLabel\n", error);
                dispatch(
                    downloadLabelError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    viewLabel:
        (shipment_id, token, options) => async (dispatch) => {
            try {
                dispatch(viewLabelStarts());
                const response = await buildShipmentAPIs.viewLabel(shipment_id, token);
                dispatch(viewLabelSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in viewLabel\n", error);
                dispatch(
                    viewLabelError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    viewInvoice:
        (shipment_id, token, options) => async (dispatch) => {
            try {
                dispatch(viewInvoiceStarts());
                const response = await buildShipmentAPIs.viewInvoice(shipment_id, token);
                dispatch(viewInvoiceSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in viewInvoice\n", error);
                dispatch(
                    viewInvoiceError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    loadingMessages:
        (token, options) => async (dispatch) => {
            try {
                dispatch(loadingMessageStarts());
                const response = await buildShipmentAPIs.getLoadingMessages(token);
                dispatch(loadingMessageSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in getLoadingMessages\n", error);
                dispatch(
                    loadingMessageError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    internationalShipmentCreate:
        (shipmentOptions, token, options) => async (dispatch) => {
            try {
                dispatch(internationalShipmentCreateStarts());
                const response = await buildShipmentAPIs.internationalShipmentCreate(shipmentOptions, token);
                dispatch(internationalShipmentCreateSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in internationalShipmentCreate\n", error);
                dispatch(
                    internationalShipmentCreateError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    internationalShipmentItemsCreate:
        (shipmentOptions, token, options) => async (dispatch) => {
            try {
                dispatch(internationalShipmentCreateStarts());
                const response = await buildShipmentAPIs.internationalShipmentItemsCreate(shipmentOptions, token);
                dispatch(internationalShipmentCreateSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in internationalShipmentCreate\n", error);
                dispatch(
                    internationalShipmentCreateError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    internationalShipmentWithItemsView:
        (international_shipment_id, token, options) => async (dispatch) => {
            try {
                dispatch(internationalShipmentWithItemsViewStarts());
                const response = await buildShipmentAPIs.internationalShipmentWithItemsView(international_shipment_id, token);
                dispatch(internationalShipmentWithItemsViewSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in internationalShipmentWithItemsView\n", error);
                dispatch(
                    internationalShipmentWithItemsViewError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    downloadInvoice:
        (shipment_id, token, options) => async (dispatch) => {
            try {
                dispatch(downloadInvoiceStarts());
                const response = await buildShipmentAPIs.downloadInvoice(shipment_id, token);
                dispatch(downloadInvoiceSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in downloadInvoice\n", error);
                dispatch(
                    downloadInvoiceError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
}

export const {
    createShipmentStarts,
    createShipmentSuccess,
    createShipmentError,
    updateShipmentAddressStarts,
    updateShipmentAddressSuccess,
    updateShipmentAddressError,
    updateAddressStarts,
    updateAddressSuccess,
    updateAddressError,
    removeInsuranceFromShipment,
    addParcelsToShipmentStarts,
    addParcelsToShipmentSuccess,
    addParcelsToShipmentError,
    addOptionsToShipmentStarts,
    addOptionsToShipmentSuccess,
    addOptionsToShipmentError,
    getShipmentRatesStarts,
    getShipmentRatesSuccess,
    getShipmentRatesError,
    previewShipmentStarts,
    previewShipmentSuccess,
    previewShipmentError,
    purchaseLabelStarts,
    purchaseLabelSuccess,
    purchaseLabelError,
    pendingPaymentRetryStarts,
    pendingPaymentRetrySuccess,
    pendingPaymentRetryError,
    viewShipmentStarts,
    viewShipmentSuccess,
    viewShipmentError,
    downloadLabelStarts,
    downloadLabelSuccess,
    downloadLabelError,
    downloadInvoiceStarts,
    downloadInvoiceSuccess,
    downloadInvoiceError,
    viewLabelStarts,
    viewLabelSuccess,
    viewLabelError,
    viewInvoiceStarts,
    viewInvoiceSuccess,
    viewInvoiceError,
    loadingMessageStarts,
    loadingMessageSuccess,
    loadingMessageError,
    internationalShipmentCreateStarts,
    internationalShipmentCreateSuccess,
    internationalShipmentCreateError,
    internationalShipmentItemsCreateStarts,
    internationalShipmentItemsCreateSuccess,
    internationalShipmentItemsCreateError,
    internationalShipmentWithItemsViewStarts,
    internationalShipmentWithItemsViewSuccess,
    internationalShipmentWithItemsViewError,
    addInsuranceFromShipment
} = buildShipmentSlice.actions;

export default buildShipmentSlice.reducer;