import axios from "axios";
import { Constants } from "utility/constants";

export const accountSettingsAPIs = {
  getAccountSettings: async (token) => {
    const data = await axios({
      url: Constants.Api.accountSettings.accountDefaults,
      method: "GET",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
    })
    return data.data;
  },
  updateAccountSettings: async (payload, token) => {
    const data = await axios({
      url: Constants.Api.accountSettings.accountDefaults,
      method: "PUT",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
      data: payload
    })
    return data.data;
  },
  downloadAddressesBookSample: async (token) => {
    const data = await axios({
      url: Constants.Api.addressBooks.addressBook + "/example-download",
      method: "GET",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
    })
    return data.data;
  },
  getAddressesBook: async (token) => {
    const data = await axios({
      url: Constants.Api.addressBooks.addressBook,
      method: "GET",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
    })
    return data.data;
  },
  createAddressesBook: async (addressDetails, token) => {
    const data = await axios({
      url: Constants.Api.addressBooks.addressBook,
      method: "POST",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
      data: addressDetails
    })
    return data.data;
  },
  updateAddressesBook: async (addressDetails, addressId, token) => {
    const data = await axios({
      url: Constants.Api.addressBooks.addressBook + "/" + addressId,
      method: "PUT",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
      data: addressDetails
    })
    return data.data;
  },
  deleteAddressesBook: async (addressId, token) => {
    const data = await axios({
      url: Constants.Api.addressBooks.addressBook + "/" + addressId,
      method: "DELETE",
      headers: {
        authorization: 'Bearer' + ' ' + token
      }
    })
    return data.data;
  },
  bulkUpload: async (formData, token) => {
    const data = await axios({
      url: Constants.Api.addressBooks.bulkUpload,
      method: "POST",
      headers: {
        authorization: 'Bearer' + ' ' + token,
        'Content-Type': 'multipart/form-data'
      },
      data: formData
    })
    return data.data;
  },
  provinceByCountry: async (countryCode, token) => {
    const data = await axios({
      url: Constants.Api.resources.provinceByCountry+ '/' + countryCode,
      method: "GET",
      headers: {
        authorization: 'Bearer' + ' ' + token
      }
    })
    return data.data;
  },
  getTrackingSettings: async (token) => {
    const data = await axios({
      url: Constants.Api.trackingSettings.tracking,
      method: "GET",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
    })
    return data.data;
  },
  updateTrackingSettings: async (settings, token, type) => {
    const data = await axios({
      url: Constants.Api.trackingSettings.tracking + '/' + type,
      method: "PUT",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
      data: settings
    })
    return data.data;
  },
  getBillingCards: async (token) => {
    const data = await axios({
      url: Constants.Api.billing.billingCards,
      method: "GET",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
    })
    return data.data;
  },
}