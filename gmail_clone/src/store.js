import {configureStore} from "@reduxjs/toolkit";
import mailReducer from './mailSlice.js';
export default configureStore({
    reducer:{
        mail:mailReducer,
    },
});