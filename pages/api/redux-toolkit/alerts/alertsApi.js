import axios from "axios";
import { Constants } from "utility/constants";

export const alertsAPIs = {
    getAlerts: async (token) => {
        const data = await axios({
            url: Constants.Api.alerts.alerts,
            method: "GET",
            headers: {
                authorization: 'Bearer' + ' ' + token
            },
        })
        return data.data;
    },
    viewAlert: async (alertId, token) => {
        const data = await axios({
            url: Constants.Api.alerts.alerts + '/' + alertId,
            method: "GET",
            headers: {
                authorization: 'Bearer' + ' ' + token
            },
        })
        return data.data;
    },
    createAlert: async (alertDetail, token) => {
        const data = await axios({
            url: Constants.Api.alerts.alerts,
            method: "POST",
            headers: {
                authorization: 'Bearer' + ' ' + token
            },
            data: alertDetail
        })
        return data.data;
    },
    updateAlert: async (alertDetail, alertId, token) => {
        const data = await axios({
            url: Constants.Api.alerts.alerts + '/' + alertId,
            method: "PUT",
            headers: {
                authorization: 'Bearer' + ' ' + token
            },
            data: alertDetail
        })
        return data.data;
    },
    deleteAlert: async (alertId, token) => {
        const data = await axios({
            url: Constants.Api.alerts.alerts + '/' + alertId,
            method: "DELETE",
            headers: {
                authorization: 'Bearer' + ' ' + token
            },
        })
        return data.data;
    },
}