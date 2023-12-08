import axios from "axios";
import { Constants } from "utility/constants";

export const resourcesAPIs = {
  menuLinks: async (token) => {
    const data = await axios({
      url: Constants.Api.resources.menuLinks,
      method: "GET",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
    })
    return data.data;
  },
  dropoffLocations: async (token) => {
    const data = await axios({
      url: Constants.Api.resources.dropOffLocations,
      method: "GET",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
    })
    return data.data;
  },
  shipmentOptions: async (token) => {
    const data = await axios({
      url: Constants.Api.resources.shipmentOptions,
      method: "GET",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
    })
    return data.data;
  },
  courierPickupTimes: async (token) => {
    const data = await axios({
      url: Constants.Api.resources.pickupTimes,
      method: "GET",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
    })
    return data.data;
  },
  getClientSecretKey: async (token) => {
    const data = await axios({
      url: Constants.Api.resources.intent,
      method: "GET",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
    })
    return data.data;
  },
}