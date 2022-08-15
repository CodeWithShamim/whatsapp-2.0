import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    message: [],
    typingMessage: [],
    notificationMessage: []
};
export const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        getMessage: (state, action) => {
            state.message = action.payload;
        },
        getLastMessage: (state, action) => {
            state.message = [...state.message, action.payload];
        },
        getSocketMessage: (state, action) => {
            state.message = [...state.message, action.payload];
        },
        getTypingMessage: (state, action) => {
            state.typingMessage = action.payload;
        },
        getNotificationMessage: (state, action) => {
            state.notificationMessage = action.payload;
        }
    },
});
export const { getMessage, getLastMessage, getSocketMessage, getTypingMessage, getNotificationMessage } = messageSlice.actions;
export default messageSlice.reducer;