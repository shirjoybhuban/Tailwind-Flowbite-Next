import axios from "axios";
import { Constants } from "utility/constants";

export const pickupAPIs = {
  getViewShipment: async (token) => {
    const data = await axios({
      url: Constants.Api.buildShipments.shipments + '/requires-action',
      method: "GET",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
    })
    return data.data;
  },
  updatePickups: async (payload, token) => {
    const data = await axios({
      url: Constants.Api.pickups.pickupDefaults,
      method: "PUT",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
      data: payload
    })
    return data.data;
  },
  getPickups: async (token) => {
    const data = await axios({
      url: Constants.Api.pickups.pickupDefaults,
      method: "GET",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
    })
    return data.data;
  },
  createPickups: async (pickupDetails, token) => {
    const data = await axios({
      url: Constants.Api.pickups.pickupDefaults,
      method: "POST",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
      data: pickupDetails
    })
    return data.data;
  },
  getPickupByID: async (token) => {
    const data = await axios({
      url: Constants.Api.pickups.pickupDefaults,
      method: "GET",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
    })
    return data.data;
  },
  addShipmentToPickup: async (pickupId, shipmentIds, token) => {
    const data = await axios({
      url: Constants.Api.pickups.pickupDefaults + "/" + pickupId + "/add",
      method: "POST",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
      data: shipmentIds
    })
    return data.data;
  },
  removeShipment: async (pickupId, shipmentIds, token) => {
    const data = await axios({
      url: Constants.Api.pickups.pickupDefaults + "/" + pickupId + "/remove",
      method: "POST",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
      data: shipmentIds
    })
    return data.data;
  },
  deletePickup: async (pickupId, token) => {
    const data = await axios({
      url: Constants.Api.pickups.pickupDefaults + '/' + pickupId,
      method: "DELETE",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
    })
    return data.data;
  },
  viewScheduledPickup: async (status, token) => {
    const data = await axios({
      url: Constants.Api.pickups.pickupDefaults + '?status=' + status,
      method: "GET",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
    })
    return data.data;
  },
}