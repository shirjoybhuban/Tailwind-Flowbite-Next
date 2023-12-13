import { createSlice } from "@reduxjs/toolkit";
import { Constants, XHR_STATE } from "utility/constants";
import { authenticationAPIs } from "./authenticationApi";

export const initialState = {
  registerWithEmailPassword: {
    response: null,
    loading: XHR_STATE.ASLEEP,
    error: "",
  },
  authInfo:{
    token: null,
  },
  loginWithEmailPassword: {
    response: null,
    loading: XHR_STATE.ASLEEP,
    error: "",
  },
  forgotPassword: {
    response: null,
    loading: XHR_STATE.ASLEEP,
    error: "",
  },
  resendVerificationEmaill: {
    response: null,
    loading: XHR_STATE.ASLEEP,
    error: "",
  },
  resendVerificationEmail: {
    response: null,
    loading: XHR_STATE.ASLEEP,
    error: "",
  },
  verifyEmail: {
    response: null,
    loading: XHR_STATE.ASLEEP,
    error: "",
  },
  resetPassword: {
    response: null,
    loading: XHR_STATE.ASLEEP,
    error: "",
  },
  resendVerificationEmaill: {
    response: null,
    loading: XHR_STATE.ASLEEP,
    error: "",
  }

}

export const authenticationSlice = createSlice({
  name: "authenticationSlice",
  initialState,
  reducers: {
    // User Registration
    registerWithEmailPasswordStarts: (state, action) => {
      state.registerWithEmailPassword.loading = XHR_STATE.IN_PROGRESS
      state.registerWithEmailPassword.error = "";
    },
    registerWithEmailPasswordSuccess: (state, action) => {
      state.registerWithEmailPassword.loading = XHR_STATE.COMPLETE;
      state.registerWithEmailPassword.response = action.payload;
    },
    registerWithEmailPasswordError: (state, action) => {
      state.registerWithEmailPassword.loading = XHR_STATE.ASLEEP;
      state.registerWithEmailPassword.error =
        action.payload && action.payload.message
          ? `${action.payload.message}`
          : Constants.DEFAULT_ERROR_TEXT;
    },
    resetRegisterWithEmailPassword: (state, action) => {
      state.registerWithEmailPassword.loading = XHR_STATE.ASLEEP,
      state.registerWithEmailPassword.response = null;
      state.registerWithEmailPassword.error = ""
    },
    // Set Token
    setToken: (state, action) => {
      state.authInfo.token = action.payload;
    },
    // User Login
    loginWithEmailPasswordStarts: (state, action) => {
      state.loginWithEmailPassword.loading = XHR_STATE.IN_PROGRESS
      state.loginWithEmailPassword.error = "";
    },
    loginWithEmailPasswordSuccess: (state, action) => {
      state.loginWithEmailPassword.loading = XHR_STATE.COMPLETE;
      state.loginWithEmailPassword.response = action.payload;
      state.authInfo.token = action.payload.token;
    },
    loginWithEmailPasswordError: (state, action) => {
      state.loginWithEmailPassword.loading = XHR_STATE.ASLEEP;
      state.loginWithEmailPassword.error =
        action.payload && action.payload.message
          ? `${action.payload.message}`
          : Constants.DEFAULT_ERROR_TEXT;
    },
    resetLoginWithEmailPassword: (state, action) => {
      state.loginWithEmailPassword.loading = XHR_STATE.ASLEEP,
      state.loginWithEmailPassword.response = null;
      state.loginWithEmailPassword.error = ""
    },

    // Forgot Password
    forgotPasswordStarts: (state, action) => {
      state.forgotPassword.loading = XHR_STATE.IN_PROGRESS
      state.forgotPassword.error = "";
    },
    forgotPasswordSuccess: (state, action) => {
      state.forgotPassword.loading = XHR_STATE.COMPLETE;
      state.forgotPassword.response = action.payload;
    },
    forgotPasswordError: (state, action) => {
      state.forgotPassword.loading = XHR_STATE.ASLEEP;
      state.forgotPassword.error =
        action.payload && action.payload.message
          ? `${action.payload.message}`
          : Constants.DEFAULT_ERROR_TEXT;
    },

    // Resend verification Email
    resendVerificationEmaillStarts: (state, action) => {
      state.forgotPassword.loading = XHR_STATE.IN_PROGRESS
      state.forgotPassword.error = "";
    },
    resendVerificationEmaillSuccess: (state, action) => {
      state.forgotPassword.loading = XHR_STATE.COMPLETE;
      state.forgotPassword.response = action.payload;
    },
    resendVerificationEmaillError: (state, action) => {
      state.forgotPassword.loading = XHR_STATE.ASLEEP;
      state.forgotPassword.error =
        action.payload && action.payload.message
          ? `${action.payload.message}`
          : Constants.DEFAULT_ERROR_TEXT;
    },

    // Resend Verification Email
    resendVerificationEmailStarts: (state, action) => {
      state.resendVerificationEmail.loading = XHR_STATE.IN_PROGRESS
      state.resendVerificationEmail.error = "";
    },
    resendVerificationEmailSuccess: (state, action) => {
      state.resendVerificationEmail.loading = XHR_STATE.COMPLETE;
      state.resendVerificationEmail.response = action.payload;
    },
    resendVerificationEmailError: (state, action) => {
      state.resendVerificationEmail.loading = XHR_STATE.ASLEEP;
      state.resendVerificationEmail.error =
        action.payload && action.payload.message
          ? `${action.payload.message}`
          : Constants.DEFAULT_ERROR_TEXT;
    },

    // Verify Email
    verifyEmailStarts: (state, action) => {
      state.verifyEmail.loading = XHR_STATE.IN_PROGRESS
      state.verifyEmail.error = "";
    },
    verifyEmailSuccess: (state, action) => {
      state.verifyEmail.loading = XHR_STATE.COMPLETE;
      state.verifyEmail.response = action.payload;
    },
    verifyEmailError: (state, action) => {
      state.verifyEmail.loading = XHR_STATE.ASLEEP;
      state.verifyEmail.error =
        action.payload && action.payload.message
          ? `${action.payload.message}`
          : Constants.DEFAULT_ERROR_TEXT;
    },

    // Reset Password
    resetPasswordStarts: (state, action) => {
      state.resetPassword.loading = XHR_STATE.IN_PROGRESS
      state.resetPassword.error = "";
    },
    resetPasswordSuccess: (state, action) => {
      state.resetPassword.loading = XHR_STATE.COMPLETE;
      state.resetPassword.response = action.payload;
    },
    resetPasswordError: (state, action) => {
      state.resetPassword.loading = XHR_STATE.ASLEEP;
      state.resetPassword.error =
        action.payload && action.payload.message
          ? `${action.payload.message}`
          : Constants.DEFAULT_ERROR_TEXT;
    },
  }
});

export const authenticationDispatcher = {
  registerWithEmailPassword:
    (userCredentials, options) => async (dispatch) => {
      try {
        dispatch(registerWithEmailPasswordStarts(userCredentials));
        const response = await authenticationAPIs.registerWithEmailPassword(userCredentials);
        dispatch(registerWithEmailPasswordSuccess(response));
        if (options && options.success) options.success(response);
      } catch (error) {
        console.error("error.response\n", error);
        dispatch(
          registerWithEmailPasswordError(
            (error.response && error.response.data) || null
          )
        );
        if (options && options.error) options.error(error.response);
      }
    },
  loginWithEmailPassword:
    (userCredentials, options) => async (dispatch) => {
      try {
        dispatch(loginWithEmailPasswordStarts(userCredentials));
        const response = await authenticationAPIs.loginWithEmailPassword(userCredentials);
        dispatch(loginWithEmailPasswordSuccess(response));
        if (options && options.success) options.success(response);
      } catch (error) {
        console.error("error.response\n", error);
        dispatch(
          loginWithEmailPasswordError(
            (error.response && error.response.data) || null
          )
        );
        if (options && options.error) options.error(error.response);
      }
    },
  forgotPassword:
    (userEmail, options) => async (dispatch) => {
      try {
        dispatch(forgotPasswordStarts(userEmail));
        const response = await authenticationAPIs.forgotPassword(userEmail);
        dispatch(forgotPasswordSuccess(response));
        if (options && options.success) options.success(response);
      } catch (error) {
        dispatch(
          forgotPasswordError(
            (error.response && error.response.data) || null
          )
        );
        if (options && options.error) options.error(error.response);
      }
    },
  resendVerificationEmaill:
    (userEmail, token, options) => async (dispatch) => {
      try {
        dispatch(resendVerificationEmaillStarts(userEmail));
        const response = await authenticationAPIs.resendVerificationEmaill(userEmail, token);
        dispatch(resendVerificationEmaillSuccess(response));
        if (options && options.success) options.success(response);
      } catch (error) {
        console.error("error.response in resendVerificationEmaill\n", error);
        dispatch(
          resendVerificationEmaillError(
            (error.response && error.response.data) || null
          )
        );
        if (options && options.error) options.error(error.response);
      }
    },
  resendVerificationEmail:
    (userId, options) => async (dispatch) => {
      try {
        dispatch(resendVerificationEmailStarts(userId));
        const response = await authenticationAPIs.resendVerificationEmail(userId);
        dispatch(resendVerificationEmailSuccess(response));
        if (options && options.success) options.success(response);
      } catch (error) {
        console.error("error.response in resendVerificationEmail\n", error);
        dispatch(
          resendVerificationEmailError(
            (error.response && error.response.data) || null
          )
        );
        if (options && options.error) options.error(error.response);
      }
    },
  verifyEmail:
    (verification_code, options) => async (dispatch) => {
      try {
        dispatch(verifyEmailStarts());
        const response = await authenticationAPIs.verifyEmail(verification_code);
        dispatch(verifyEmailSuccess(response));
        if (options && options.success) options.success(response);
      } catch (error) {
        console.error("error.response\n", error);
        dispatch(
          verifyEmailError(
            (error.response && error.response.data) || null
          )
        );
        if (options && options.error) options.error(error.response);
      }
    },
  resetPassword:
    (updatedCredentials, options) => async (dispatch) => {
      try {
        dispatch(resetPasswordStarts());
        const response = await authenticationAPIs.resetPassword(updatedCredentials);
        dispatch(resetPasswordSuccess(response));
        if (options && options.success) options.success(response);
      } catch (error) {
        console.error("error.response in resetPassword\n", error);
        dispatch(
          resetPasswordError(
            (error.response && error.response.data) || null
          )
        );
        if (options && options.error) options.error(error.response);
      }
    },
}

export const {
  registerWithEmailPasswordStarts,
  registerWithEmailPasswordSuccess,
  registerWithEmailPasswordError,
  resetRegisterWithEmailPassword,
  setToken,
  loginWithEmailPasswordStarts,
  loginWithEmailPasswordSuccess,
  loginWithEmailPasswordError,
  resetLoginWithEmailPassword,
  forgotPasswordStarts,
  forgotPasswordSuccess,
  forgotPasswordError,
  resendVerificationEmaillStarts,
  resendVerificationEmaillSuccess,
  resendVerificationEmaillError,
  resendVerificationEmailStarts,
  resendVerificationEmailSuccess,
  resendVerificationEmailError,
  verifyEmailStarts,
  verifyEmailSuccess,
  verifyEmailError,
  resetPasswordStarts,
  resetPasswordSuccess,
  resetPasswordError
} = authenticationSlice.actions;

export default authenticationSlice.reducer;