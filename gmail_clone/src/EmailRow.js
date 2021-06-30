import { IconButton } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import React from 'react';
import './EmailRow.css';
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {selectMail} from "./features1/mailSlice.js";
function EmailRow({id,title,subject,descr,time}) {
    const history=useHistory(); 
    const dispatch=useDispatch();
    const openMail=() => {
      dispatch(
        selectMail({
          id,title,subject,descr,time,
        })
      );
      history.push('/mail');
    }
    return (
        <div className="emailRow" onClick={openMail}>
            <div className="emailRow_options">
              <Checkbox/>
              <IconButton>
                  <StarBorderOutlinedIcon/>
              </IconButton>
              <IconButton>
                  <LabelImportantOutlinedIcon/>
              </IconButton>

            </div>
            <div className="emailRow_title">
              {title}
            </div>
            <div className="emailRow_message">
              <h4>{subject}<div className="emailRow_description">- {descr}</div></h4>
            </div>
            
            <div className="emailRow_time">{time}</div>
        </div>
    )
}

export default EmailRow
