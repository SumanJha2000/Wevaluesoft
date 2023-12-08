import { createReducer } from "@reduxjs/toolkit";

// userReducer
const initialState = {
    user: [],
    loading: false,
    error: null,
};

export const userReducer = createReducer(initialState, (builder) => {
    builder
        .addCase("userRequest", (state, action) => {
            state.loading = true;
            state.user = [];
        })
        .addCase("userSuccess", (state, action) => {
            console.log(action.payload, 'action')
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        })
        .addCase("userFailure", (state, action) => {
            state.loading = false;
            state.user = [];
            state.error = action.payload;
        })
        .addCase("clearError", (state, action) => {
            state.loading = false;
            state.user = [];
            state.error = null;
        });
});
