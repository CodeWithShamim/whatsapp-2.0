import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userInfo: "",
};
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUserInfo: (state, action) => {
            state.userInfo = action.payload
        }
    },
});
export const { addUserInfo } = userSlice.actions;
export default userSlice.reducer;