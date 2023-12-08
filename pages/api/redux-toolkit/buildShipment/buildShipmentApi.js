import axios from "axios";
import { Constants } from "utility/constants";
import axiosInstance from "utility/interceptor";

export const buildShipmentAPIs = {
    createShipment: async (token) => {
        const data = await axios({
            url: Constants.Api.buildShipments.shipments,
            method: "POST",
            headers: {
                authorization: 'Bearer' + ' ' + token
            },
        })
        return data.data;
    },
    updateShipmentAddress: async (addressDetails, shipment_id, token) => {
        const data = await axios({
            url: Constants.Api.buildShipments.shipments + '/' + shipment_id,
            method: "PATCH",
            headers: {
                authorization: 'Bearer' + ' ' + token,
                "access-control-allow-origin": "*"
            },
            data: addressDetails
        })
        return data.data;
    },
    updateAddress: async (addressDetails, shipment_id, type, token) => {
        const data = await axios({
            url: Constants.Api.buildShipments.shipments + '/' + shipment_id + '/address/' + type,
            method: "PATCH",
            headers: {
                authorization: 'Bearer' + ' ' + token,
                "access-control-allow-origin": "*"
            },
            data: addressDetails
        })
        return data.data;
    },
    addParcelsToShipment: async (parcels, shipment_id, token) => {
        const data = await axios({
            url: Constants.Api.buildShipments.shipments + '/' + shipment_id + '/parcel',
            method: "PUT",
            headers: {
                authorization: 'Bearer' + ' ' + token
            },
            data: parcels
        })
        return data.data;
    },
    addOptionsToShipment: async (shipmentOptions, token) => {
        const data = await axios({
            url: Constants.Api.buildShipments.addOptionsToShipment,
            method: "POST",
            headers: {
                authorization: 'Bearer' + ' ' + token
            },
            data: shipmentOptions
        })
        return data.data;
    },
    removeInsuranceFromShipment: async (shipmentOptions, token) => {
        const data = await axios({
            url: Constants.Api.buildShipments.removeInsuranceAPI+ '/' + shipmentOptions.shipment_id,
            method: "GET",
            headers: {
                authorization: 'Bearer' + ' ' + token
            }
        })
        return data.data;
    },
    addInsuranceFromShipment: async (shipmentOptions, token) => {
        const data = await axios({
            url: Constants.Api.buildShipments.addInsuranceAPI,
            method: "POST",
            headers: {
                authorization: 'Bearer' + ' ' + token
            },
            data: shipmentOptions
        })
        return data.data;
    },
    
    getShipmentRates: async (shipment_id, token, integration) => {
        const data = await axios({
            url: Constants.Api.buildShipments.shipments + '/' + shipment_id + '/rates/' + integration,
            method: "GET",
            headers: {
                authorization: 'Bearer' + ' ' + token,
                "access-control-allow-origin": "*"
            },
        })
        return data.data;
    },
    getShipmentRateQuickQuote: async (integration, qq_id, token, body) => {
        const data = await axios({
            url: Constants.Api.buildShipments.shipments + '/' + 'shipment-quick-rate/'+ integration,
            method: "POST",
            headers: {
                authorization: 'Bearer' + ' ' + token,
                "access-control-allow-origin": "*"
            },
            data: body
        })
        return data.data;
    },
    previewShipment: async (shipment_id, rate_id, token) => {
        const data = await axios({
            url: Constants.Api.buildShipments.shipments + '/' + shipment_id + '/preview/' + rate_id,
            method: "GET",
            headers: {
                authorization: 'Bearer' + ' ' + token,
                "access-control-allow-origin": "*"
            },
        })
        return data.data;
    },
    purchaseLabel: async (shipment_id, rate_id, token) => {
        const data = await axios({
            url: Constants.Api.buildShipments.shipments + '/' + shipment_id + '/rates/' + rate_id + '/buy',
            method: "POST",
            headers: {
                authorization: 'Bearer' + ' ' + token,
                "access-control-allow-origin": "*"
            },
            data: {}
        })
        return data.data;
    },
    pendingPaymentRetry: async (shipment_id, token) => {
        const data = await axios({
            url: Constants.Api.buildShipments.pendingPayment + '/' + shipment_id,
            method: "POST",
            headers: {
                authorization: 'Bearer' + ' ' + token,
                "access-control-allow-origin": "*"
            },
            data: {}
        })
        return data.data;
    },
    viewShipment: async (shipment_id, token) => {
        const data = await axios({
            url: Constants.Api.buildShipments.shipments + '/' + shipment_id,
            method: "GET",
            headers: {
                authorization: 'Bearer' + ' ' + token,
                "access-control-allow-origin": "*"
            },
        })
        return data.data;
    },
    downloadLabel: async (shipment_id, token) => {
        const data = await axios({
            url: Constants.Api.buildShipments.shipments + '/' + shipment_id + '/label-download',
            method: "GET",
            headers: {
                authorization: 'Bearer' + ' ' + token,
                "access-control-allow-origin": "*",
                Accept: '*/*'
            },
            responseType: 'blob'
        })
        return data.data;
    },
    viewLabel: async (shipment_id, token) => {
        const data = await axios({
            url: Constants.Api.buildShipments.shipments + '/' + shipment_id + '/label-view',
            method: "GET",
            headers: {
                authorization: 'Bearer' + ' ' + token,
                "access-control-allow-origin": "*",
                Accept: '*/*'
            },
            responseType: 'blob'
        })
        return data.data;
    },
    viewInvoice: async (shipment_id, token) => {
        const data = await axios({
            url: Constants.Api.buildShipments.shipments + '/' + shipment_id + '/invoice-view',
            method: "GET",
            headers: {
                authorization: 'Bearer' + ' ' + token,
                "access-control-allow-origin": "*",
                Accept: '*/*'
            },
            responseType: 'blob'
        })
        return data.data;
    },
    getLoadingMessages: async (token) => {
        const data = await axios({
            url: Constants.Api.resources.loadingMessages,
            method: "GET",
            headers: {
                authorization: 'Bearer' + ' ' + token,
                "access-control-allow-origin": "*",
                Accept: '*/*'
            }
        })
        return data.data;
    },
    internationalShipmentCreate: async (shipmentOptions, token) => {
        const data = await axios({
            url: Constants.Api.buildShipments.internationalShipment,
            method: "POST",
            headers: {
                authorization: 'Bearer' + ' ' + token
            },
            data: shipmentOptions
        })
        return data.data;
    },
    internationalShipmentItemsCreate: async (shipmentOptions, token) => {
        const data = await axios({
            url: Constants.Api.buildShipments.internationalShipmentItems,
            method: "POST",
            headers: {
                authorization: 'Bearer' + ' ' + token
            },
            data: shipmentOptions
        })
        return data.data;
    },
    internationalShipmentWithItemsView: async (international_shipment_id, token) => {
        const data = await axios({
            url: Constants.Api.buildShipments.internationalShipment+ '/' + international_shipment_id,
            method: "GET",
            headers: {
                authorization: 'Bearer' + ' ' + token
            }
        })
        return data.data;
    },
    downloadInvoice: async (shipment_id, token) => {
        const data = await axios({
            url: Constants.Api.buildShipments.shipments + '/' + shipment_id + '/invoice-download',
            method: "GET",
            headers: {
                authorization: 'Bearer' + ' ' + token,
                "access-control-allow-origin": "*",
                Accept: '*/*'
            },
            responseType: 'blob'
        })
        return data.data;
    }
}