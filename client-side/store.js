import { configureStore } from '@reduxjs/toolkit'
import messageReducer from './features/message/messageSlice'
import activeUserReducer from './features/user/activeUserSlice'
import userReducer from './features/user/userSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        message: messageReducer,
        activeUser: activeUserReducer
    },
})