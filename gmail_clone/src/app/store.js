import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features1/mailSlice';
import userReducer from '../features1/userSlice'; 
export default configureStore({
  reducer: {
    mail: mailReducer,
    user:userReducer,
  },
});
