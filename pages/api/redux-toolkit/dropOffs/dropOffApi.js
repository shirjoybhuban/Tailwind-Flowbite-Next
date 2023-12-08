import axios from "axios";
import { Constants } from "utility/constants";

export const dropOffAPIs = {
    getDropOffs: async (token) => {
        const data = await axios({
            url: Constants.Api.dropOff.dropOffs,
            method: "GET",
            headers: {
                authorization: 'Bearer' + ' ' + token
            },
        })
        return data.data;
    },
    addToDropOff: async (shipmentId, token) => {
        const data = await axios({
            url: Constants.Api.buildShipments.shipments + '/' + shipmentId + '/dropoff',
            method: "PATCH",
            headers: {
                authorization: 'Bearer' + ' ' + token
            },
        })
        return data.data;
    },
    deleteDropOff: async (shipmentId, token) => {
        const data = await axios({
            url: Constants.Api.buildShipments.shipments + '/' + shipmentId + '/dropoff',
            method: "DELETE",
            headers: {
                authorization: 'Bearer' + ' ' + token
            },
        })
        return data.data;
    },
}