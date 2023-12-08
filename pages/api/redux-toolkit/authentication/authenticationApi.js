import axios from "axios";
import { Constants } from "utility/constants";
import axiosInstance from "utility/interceptor";
import { setHeaders } from "utility/utilityFunctions";

export const authenticationAPIs = {
  registerWithEmailPassword: async (userCredentials) => {
    const { data } = await axios.post(
      Constants.Api.authentication.registerWithEmailPassword,
      userCredentials
    );
    return data;
  },
  loginWithEmailPassword: async (userCredentials) => {
    const { data } = await axios.post(
      Constants.Api.authentication.loginWithEmailPassword,
      userCredentials
    );
    return data;
  },
  forgotPassword: async (userEmail, token) => {
    const data = await axios({
      url: Constants.Api.authentication.forgotPassword,
      method: "POST",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
      data: userEmail,
    });
    return data.data;
  },
  resendVerificationEmail: async (token) => {
    const data = await axios({
      url: Constants.Api.authentication.resendVerificationEmail,
      method: "POST",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
    })
    return data.data;
  },
  resendVerificationEmaill: async (userEmail, token) => {
    const data = await axios({
      url: Constants.Api.authentication.resendVerificationEmaill,
      method: "POST",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
      data: userEmail,
    });
    return data.data;
  },
  verifyEmail: async (verification_code) => {
    const data = await axios({
      url: Constants.Api.authentication.verifyEmail + verification_code,
      method: "GET",
    });
    return data.data;
  },
  resetPassword: async (updatedCredentials, token) => {
    const data = await axios({
      url: Constants.Api.authentication.resetPassword,
      method: "POST",
      headers: {
        authorization: 'Bearer' + ' ' + token
      },
      data: updatedCredentials
    })
    return data.data;
  },
}