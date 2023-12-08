import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    currentTourStep: {
        currentStep: '',
        isTourEnabled: false
    },
}

export const tourSlice = createSlice({
    name: "tourSlice",
    initialState,
    reducers: {
        currentTourStepStarts: (state, action) => {
            state.currentTourStep.isTourEnabled = true,
            state.currentTourStep.currentStep = action.payload.currentTourStep;
        },
    }
});

export const tourDispatcher = {
    currentTourStep:
    (tourStatus, options) => (dispatch) => {
      try {
        dispatch(currentTourStepStarts(tourStatus));
        if (options && options.success) {
            options.success(true)};
      } catch (error) {
        console.error("error.response\n", error.response);
        if (options && options.error) options.error(false);
      }
    },
}

export const {
    currentTourStepStarts
} = tourSlice.actions;

export default tourSlice.reducer;