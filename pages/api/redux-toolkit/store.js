import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "./authentication/authenticationSlice";
import resourceSlice from "./resources/resourcesSlice";
import accountSettingsSlice from "./accountSttings/accountSettingsSlice";
import tourSlice from "./tour/tourSlice";
import usersSlice from "./users/usersSlice";
import buildShipmentSlice from "./buildShipment/buildShipmentSlice";
import alertsSlice from "./alerts/alertsSlice";
import historyTrackingSlice from "./historyTracking/historyTrackingSlice";
import dropOffSlice from "./dropOffs/dropOffSlice";
import pickupSlice from "./pickup/pickupSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['userToken','userDetails']
};

const persistedUserReducer = persistReducer(persistConfig, usersSlice);

export const store = configureStore({
  reducer: {
    authenticationSlice,
    resourceSlice,
    accountSettingsSlice,
    tourSlice,
    usersSlice: persistedUserReducer,
    buildShipmentSlice,
    alertsSlice,
    historyTrackingSlice,
    pickupSlice,
    dropOffSlice,
  },
});

export const persistor = persistStore(store);
