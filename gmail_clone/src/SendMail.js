import React from 'react';
import './SendMail.css';
import {useForm} from "react-hook-form";
import {Button} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import {useDispatch} from "react-redux";
import { closeSendMessage } from './features1/mailSlice';
import {db} from './firebase.js';
import firebase from 'firebase';
function SendMail() {
    const dispatch=useDispatch();
    const {register,handleSubmit,watch,errors}=useForm();
    const onSubmit=(formdata) => {
        console.log(formdata);
      db.collection("emails").add({
          to:formdata.to,
          subject:formdata.subject,
          message:formdata.message,
          timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      });
      dispatch(closeSendMessage());
    };
    return (
        <div className="sendMail">
           <div className="sendMail_header">
               <h3>New Message</h3>
               <CloseIcon onClick={()=> dispatch(closeSendMessage())} className="sendMail_close"></CloseIcon>
           </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                name="to"
                type="email"
                placeholder="To"
                ref={register({required:true})}/>
                {errors.to && <p className="sendMail_error">To is required!</p>}
                <input
                name="subject"
                type="text"
                placeholder="Subject"
                ref={register({required:true})}/>
                {errors.subject && <p className="sendMail_error">Subject is required!</p>}
                <input
                name="message"
                type="text"
                className="sendMail_message"
                placeholder="Message..."
                ref={register({required:true})}/>
                {errors.message && <p className="sendMail_error">Message is required!</p>}
                <div className="sendMail_options">
                <Button 
                className="sendMail_send"
                variants="contained"
                colors="primary"
                type="submit">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
