import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeUser: [],
};
export const activeUserSlice = createSlice({
    name: 'activeUser',
    initialState,
    reducers: {
        addActiveUser: (state, action) => {
            state.activeUser = action.payload
        }
    },
});
export const { addActiveUser } = activeUserSlice.actions;
export default activeUserSlice.reducer;