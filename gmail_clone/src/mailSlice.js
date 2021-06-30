import {createSlice} from "@reduxjs/toolkit";
export const mailSlice=createSlice({
    name:"mail",
    initialState:{
        sendMessageopen:false,
    },
    reducers:{
        openSendMessage:(state) => {
            state.sendMessageopen = true;
        },
        closeSendMessage:(state) => {
            state.sendMessageopen = true;
        }
    }
});
export const {openSendMessage,closeSendMessage}=mailSlice.actions;
export const selectSendMessageOpen=(state) => state.mail.sendMessageopen;
export default mailSlice.reducer;