import { createSlice } from "@reduxjs/toolkit";
import { Constants, XHR_STATE } from "utility/constants";
import { usersAPIs } from "./usersApi";

export const initialState = {
    viewUserProfile: {
        isLoading: true,
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    createUserProfile: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    inviteUsers: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    inviteUserSetPassword: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    inviteUserSetOriginAddress: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    inviteUsersList: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    getLoginUser: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    updateUserProfile: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    },
    updateProfile: {
        response: null,
        loading: XHR_STATE.ASLEEP,
        error: "",
    }
}

export const usersSlice = createSlice({
    name: "usersSlice",
    initialState,
    reducers: {
        // View User Profile
        viewUserProfileStarts: (state, action) => {
            state.viewUserProfile.isLoading = true;
            state.viewUserProfile.loading = XHR_STATE.IN_PROGRESS
            state.viewUserProfile.error = "";
        },
        viewUserProfileSuccess: (state, action) => {
            state.viewUserProfile.loading = XHR_STATE.COMPLETE;
            state.viewUserProfile.response = action.payload;
            state.viewUserProfile.isLoading = false;
        },
        viewUserProfileError: (state, action) => {
            state.viewUserProfile.isLoading = false;
            state.viewUserProfile.loading = XHR_STATE.ASLEEP;
            state.viewUserProfile.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // Create User Profile
        createUserProfileStarts: (state, action) => {
            state.createUserProfile.loading = XHR_STATE.IN_PROGRESS
            state.createUserProfile.error = "";
        },
        createUserProfileSuccess: (state, action) => {
            state.createUserProfile.loading = XHR_STATE.COMPLETE;
            state.createUserProfile.response = action.payload;
        },
        createUserProfileError: (state, action) => {
            state.createUserProfile.loading = XHR_STATE.ASLEEP;
            state.createUserProfile.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },
        inviteUsersStarts: (state, action) => {
            state.inviteUsers.loading = XHR_STATE.IN_PROGRESS
            state.inviteUsers.error = "";
        },
        inviteUsersSuccess: (state, action) => {
            state.inviteUsers.loading = XHR_STATE.COMPLETE;
            state.inviteUsers.response = action.payload;
        },
        inviteUsersError: (state, action) => {
            state.inviteUsers.loading = XHR_STATE.ASLEEP;
            state.inviteUsers.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },
        inviteUserSetPasswordStarts: (state, action) => {
            state.inviteUserSetPassword.loading = XHR_STATE.IN_PROGRESS
            state.inviteUserSetPassword.error = "";
        },
        inviteUserSetPasswordSuccess: (state, action) => {
            state.inviteUserSetPassword.loading = XHR_STATE.COMPLETE;
            state.inviteUserSetPassword.response = action.payload;
        },
        inviteUserSetPasswordError: (state, action) => {
            state.inviteUserSetPassword.loading = XHR_STATE.ASLEEP;
            state.inviteUserSetPassword.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },
        inviteUserSetOriginAddressStarts: (state, action) => {
            state.inviteUserSetOriginAddress.loading = XHR_STATE.IN_PROGRESS
            state.inviteUserSetOriginAddress.error = "";
        },
        inviteUserSetOriginAddressSuccess: (state, action) => {
            state.inviteUserSetOriginAddress.loading = XHR_STATE.COMPLETE;
            state.inviteUserSetOriginAddress.response = action.payload;
        },
        inviteUserSetOriginAddressError: (state, action) => {
            state.inviteUserSetOriginAddress.loading = XHR_STATE.ASLEEP;
            state.inviteUserSetOriginAddress.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },
        inviteUsersListStart: (state, action) => {
            state.inviteUsersList.loading = XHR_STATE.IN_PROGRESS
            state.inviteUsersList.error = "";
        },
        inviteUsersListSuccess: (state, action) => {
            state.inviteUsersList.loading = XHR_STATE.COMPLETE;
            state.inviteUsersList.response = action.payload;
        },
        inviteUsersListError: (state, action) => {
            state.inviteUsersList.loading = XHR_STATE.ASLEEP;
            state.inviteUsersList.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },
        getLoginUserStarts: (state, action) => {
            state.getLoginUser.loading = XHR_STATE.IN_PROGRESS
            state.getLoginUser.error = "";
        },
        getLoginUserSuccess: (state, action) => {
            state.getLoginUser.loading = XHR_STATE.COMPLETE;
            state.getLoginUser.response = action.payload;
        },
        getLoginUserError: (state, action) => {
            state.getLoginUser.loading = XHR_STATE.ASLEEP;
            state.getLoginUser.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // Update User Profile
        updateUserProfileStarts: (state, action) => {
            state.updateUserProfile.loading = XHR_STATE.IN_PROGRESS
            state.updateUserProfile.error = "";
        },
        updateUserProfileSuccess: (state, action) => {
            state.updateUserProfile.loading = XHR_STATE.COMPLETE;
            state.updateUserProfile.response = action.payload;
        },
        updateUserProfileError: (state, action) => {
            state.updateUserProfile.loading = XHR_STATE.ASLEEP;
            state.updateUserProfile.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },

        // Update User Profile
        updateProfileStarts: (state, action) => {
            state.updateProfile.loading = XHR_STATE.IN_PROGRESS
            state.updateProfile.error = "";
        },
        updateProfileSuccess: (state, action) => {
            state.updateProfile.loading = XHR_STATE.COMPLETE;
            state.updateProfile.response = action.payload;
        },
        updateProfileError: (state, action) => {
            state.updateProfile.loading = XHR_STATE.ASLEEP;
            state.updateProfile.error =
                action.payload && action.payload.message
                    ? `${action.payload.message}`
                    : Constants.DEFAULT_ERROR_TEXT;
        },
    }
});

export const usersDispatcher = {
    viewUserProfile:
        (userId, token, options) => async (dispatch) => {
            try {
                dispatch(viewUserProfileStarts());
                const response = await usersAPIs.viewUserProfile(userId, token);
                dispatch(viewUserProfileSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in viewUserProfile\n", error);
                dispatch(
                    viewUserProfileError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    getLoginUser:
        (token, options) => async (dispatch) => {
            try {
                dispatch(getLoginUserStarts());
                const response = await usersAPIs.getLoginUser(token);
                dispatch(getLoginUserSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in getLoginUser\n", error);
                dispatch(
                    getLoginUserError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    createUserProfile:
        (profileDetails, token, options) => async (dispatch) => {
            try {
                dispatch(createUserProfileStarts());
                const response = await usersAPIs.createUserProfile(profileDetails, token);
                dispatch(createUserProfileSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in create user profile\n", error);
                dispatch(
                    createUserProfileError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    inviteUsers:
        (emails, billingType, token, options) => async (dispatch) => {
            try {
                dispatch(inviteUsersStarts());
                const response = await usersAPIs.inviteUsers(emails, billingType, token);
                dispatch(inviteUsersSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in inviting users", error);
                dispatch(
                    inviteUsersError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    inviteUserSetPassword:
        (data, token, options) => async (dispatch) => {
            try {
                dispatch(inviteUserSetPasswordStarts());
                const response = await usersAPIs.inviteUserSetPassword(data, token);
                dispatch(inviteUserSetPasswordSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in inviting user set password", error);
                dispatch(
                    inviteUserSetPasswordError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    inviteUserSetOriginAddress:
        (data, token, options) => async (dispatch) => {
            try {
                dispatch(inviteUserSetOriginAddressStarts());
                const response = await usersAPIs.inviteUserSetOriginAddress(data, token);
                dispatch(inviteUserSetOriginAddressSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in inviting user set origin address", error);
                dispatch(
                    inviteUserSetOriginAddressError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    inviteUsersList:
        (token, options) => async (dispatch) => {
            try {
                dispatch(inviteUsersStarts());
                const response = await usersAPIs.inviteUsersList(token);
                dispatch(inviteUsersSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {

                if (error.response == undefined) {
                        dispatch(
                            inviteUsersError('Your account is disable')
                            );
                            return new Error('Your account is disable!');
                } else if(error.response && error.response.data) {
                        dispatch(
                                inviteUsersError(
                                    (error.response && error.response.data) || null
                                )
                        );
                } else{
                         dispatch(
                                inviteUsersError(null)
                        );
                }
                
                if (options && options.error) options.error(error.response);
            }
        },
    updateUser:
        (data, userId, token, options) => async (dispatch) => {
            try {
                dispatch(inviteUsersStarts());
                const response = await usersAPIs.updateInvitedUser(data, userId, token);
                dispatch(inviteUsersSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in invited user list", error);
                dispatch(
                    inviteUsersError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    deleteUser:
        (userId, token, options) => async (dispatch) => {
            try {
                dispatch(inviteUsersStarts());
                const response = await usersAPIs.deleteUser(userId, token);
                dispatch(inviteUsersSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in invited user list", error);
                dispatch(
                    inviteUsersError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    updateUserProfile:
        (userId, profileStatus, token, options) => async (dispatch) => {
            try {
                dispatch(updateUserProfileStarts());
                const response = await usersAPIs.updateUserProfile(userId, profileStatus, token);
                dispatch(updateUserProfileSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in user profile\n", error);
                dispatch(
                    updateUserProfileError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
    updateProfile:
        (profileDetails, userId, token, options) => async (dispatch) => {
            try {
                dispatch(updateProfileStarts());
                const response = await usersAPIs.updateProfile(profileDetails, userId, token);
                dispatch(updateProfileSuccess(response));
                if (options && options.success) options.success(response);
            } catch (error) {
                console.error("error.response in update user profile\n", error);
                dispatch(
                    updateProfileError(
                        (error.response && error.response.data) || null
                    )
                );
                if (options && options.error) options.error(error.response);
            }
        },
}

export const {
    viewUserProfileStarts,
    viewUserProfileSuccess,
    viewUserProfileError,
    createUserProfileStarts,
    createUserProfileSuccess,
    createUserProfileError,
    inviteUsersStarts,
    inviteUsersSuccess,
    inviteUsersError,
    inviteUserSetPasswordStarts,
    inviteUserSetPasswordSuccess,
    inviteUserSetPasswordError,
    inviteUserSetOriginAddressStarts,
    inviteUserSetOriginAddressSuccess,
    inviteUserSetOriginAddressError,
    getLoginUserStarts,
    getLoginUserSuccess,
    getLoginUserError,
    updateUser,
    updateUserProfileStarts,
    updateUserProfileSuccess,
    updateUserProfileError,
    updateProfileStarts,
    updateProfileSuccess,
    updateProfileError,
} = usersSlice.actions;

export default usersSlice.reducer;