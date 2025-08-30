import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import jobReducer from '../features/jobs/jobSlice'
export const store = configureStore({
    reducer: {
        auth: authReducer,
        nokri: jobReducer
    }
});
