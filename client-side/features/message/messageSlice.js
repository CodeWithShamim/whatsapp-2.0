import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    message: [],
};
export const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        getMessage: (state, action) => {
            state.message = action.payload;
        },
        getSocketMessage: (state, action) => {
            state.message = [...state.message, action.payload];
        },
    },
});
export const { getMessage, getSocketMessage } = messageSlice.actions;
export default messageSlice.reducer;