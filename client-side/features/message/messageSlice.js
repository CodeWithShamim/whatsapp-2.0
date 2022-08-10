import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    message: [],
    typingMessage: []
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
        getTypingMessage: (state, action) => {
            state.typingMessage = action.payload;
        },
    },
});
export const { getMessage, getSocketMessage, getTypingMessage } = messageSlice.actions;
export default messageSlice.reducer;