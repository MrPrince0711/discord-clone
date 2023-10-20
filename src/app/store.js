import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../app/features/userSlice';
import appReducer from '../app/features/appSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        app: appReducer, 
    }
})