import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import {Avatar,IconButton} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { auth } from './firebase';
import {logout,selectUser} from './features1/userSlice'; 
import {useSelector,useDispatch} from "react-redux";
function Header() {
   const user=useSelector(selectUser);
   const dispatch=useDispatch();
   const signOut= () => {
      auth.signOut().then(()=>{
         dispatch(logout());
      })
   }
    return (
        <div className="header">
          <div className="header_left">
            <IconButton>
               <MenuIcon/>
            </IconButton>
            <img src="https://i.pinimg.com/736x/ae/47/fa/ae47fa9a8fd263aa364018517020552d.jpg" alt="" />
          </div>
          <div className="header_middle">
             <SearchIcon/>
             <input type="text" placeholder="Search"></input>
             <ArrowDropDownIcon className="header__inputCaret"/>
          </div>
          <div className="header_right">
            <IconButton>
               <AppsIcon/>
            </IconButton>
            <IconButton>
               <NotificationsIcon/>
            </IconButton>
            <Avatar onClick={signOut} src={user?.photoUrl}/>
          </div>
            
            
        </div>
    )
}

export default Header
