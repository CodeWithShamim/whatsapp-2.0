import { configureStore } from '@reduxjs/toolkit'
import messageReducer from './features/message/messageSlice'
import userReducer from './features/user/userSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        message: messageReducer
    },
})