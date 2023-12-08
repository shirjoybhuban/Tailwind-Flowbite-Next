import axios from "axios";
import { Constants } from "utility/constants";

export const usersAPIs = {
  viewUserProfile: async (userId, token) => {
    const data = await axios({
      url: Constants.Api.users.userProfile + userId,
      method: "GET",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
    })
    return data.data;
  },
  getLoginUser: async (token) => {
    const data = await axios({
      url: Constants.Api.users.getLoginUser,
      method: "GET",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
    })
    return data.data;
  },
  createUserProfile: async (profileDetails, token) => {
    const data = await axios({
      url: Constants.Api.users.createUserProfile,
      method: "POST",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
      data: profileDetails
    })
    return data.data;
  },
  updateUserProfile: async (userId, profileStatus, token) => {
    let payload = {
      show_welcome_message: profileStatus
    }
    const data = await axios({
      url: Constants.Api.users.updateUser + userId,
      method: "PATCH",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
      data: payload
    })
    return data.data;
  },
  updateProfile: async (profileDetails, userId, token) => {
    const data = await axios({
      url: Constants.Api.users.updateUserProfile + userId,
      method: "PATCH",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
      data: profileDetails
    })
    return data.data;
  },
  inviteUsers: async (emails, billingType, token) => {
    const data = await axios({
      url: Constants.Api.users.inviteUsers,
      method: "POST",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
      data: {
        email: emails,
        billing_type: billingType
      }
    })
    return data.data;
  },
  updateInvitedUser: async (editedData, userId, token) => {
    const data = await axios({
      url: Constants.Api.users.updateInvitedUser + userId,
      method: "PATCH",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
      data: editedData,
    })
    return data.data;
  },
  deleteUser: async (userId, token) => {
    const data = await axios({
      url: Constants.Api.users.deleteInvitedUser + userId,
      method: "DELETE",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
      
    })
    return data.data;
  },
  inviteUserSetPassword: async (passwordData, token) => {
    const data = await axios({
      url: Constants.Api.users.inviteUserSetPassword,
      method: "POST",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
      data: passwordData
    })
    return data.data;
  },
  inviteUserSetOriginAddress: async (profileData, token) => {
    const data = await axios({
      url: Constants.Api.users.inviteUserSetOriginAddress,
      method: "POST",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
      data: profileData
    })
    return data.data;
  },
  inviteUsersList: async (token) => {
    const data = await axios({
      url: Constants.Api.users.inviteUsersList,
      method: "GET",
      headers: {
        authorization: 'Bearer' + ' ' + token
      }
    })
    return data.data;
  },
}