import axios from "axios";
import { Constants } from "utility/constants";

export const historyTrackingAPIs = {
  viewShipments: async (token) => {
    const data = await axios({
      url: Constants.Api.historyTracking.shipments,
      method: "GET",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
    })
    return data.data;
  },
  searchShipments: async (search, tracking_status, courier, from_date, to_date, token,page) => {
    const data = await axios({
      url: Constants.Api.historyTracking.shipments + '?page=' + page + '&search=' + search + '&tracking_status=' + tracking_status + '&courier=' + courier + '&from_date=' + from_date + '&to_date=' + to_date,
      method: "GET",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
    })
    return data.data;
  },
  getTrackingData: async (trackingId, token) => {
    const data = await axios({
      url: Constants.Api.historyTracking.getTrackingData + "/" + trackingId + "/progress",
      method: "GET",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
    })
    return data.data;
  },
  downloadShipments: async (search, tracking_status, courier, from_date, to_date, token) => {
    const data = await axios({
      url: Constants.Api.historyTracking.shipments + "/download" + '?search=' + search + '&tracking_status=' + tracking_status + '&courier=' + courier + '&from_date=' + from_date + '&to_date=' + to_date,
      method: "GET",
      headers: {
        authorization: 'Bearer' + ' ' + token,
      },
    })
    return data.data;
  },
  deleteShipment: async (shipment_id, delete_pickup, token) => {
    const data = await axios({
      url: Constants.Api.historyTracking.shipments + '/' + shipment_id + '?delete_pickup=' + delete_pickup,
      method: "DELETE",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
    })
    return data.data;
  },
  fileClaimSubmit: async (shipment_id, payload, token) => {
    const data = await axios({
      url: Constants.Api.historyTracking.shipments + '/' + shipment_id + '/claim',
      method: "POST",
      headers: {
        authorization: 'Bearer' + ' ' + token,
        "Content-Type":'multipart/form-data'
      },
      data:payload
    })
    return data.data;
  },
}