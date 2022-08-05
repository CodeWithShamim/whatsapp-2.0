import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    message: [],
};
export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        getMessage: (state, action) => {
            state.message = action.payload
        }
    },
});
export const { getMessage } = messageSlice.actions;
export default messageSlice.reducer;