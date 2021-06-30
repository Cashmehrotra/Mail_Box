import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Login from './Login.js';
import {
  BrowserRouter as Router,
  Switch,Route,Link
} from "react-router-dom";
import Mail from './Mail.js';
import EmailList from './EmailList.js';
import SendMail from './SendMail';
import {useSelector,useDispatch} from "react-redux";
import { selectSendMessageOpen } from './features1/mailSlice.js'; 
import { selectUser } from './features1/userSlice';
import { useEffect } from 'react';
import { auth } from './firebase';
import {login} from './features1/userSlice'; 
function App() {
  const sendMessageopen = useSelector(selectSendMessageOpen);
  const user=useSelector(selectUser);
  const dispatch=useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user){
        dispatch(login({
          displayName:user.displayName,
          email:user.email,
          photoUrl:user.photoURL,
      }));
      }
    })
  },[])
  return (
    <Router>
    {!user ? (
      <Login/>
    ):(
      <div className="App">
      <Header/>
      <div className="app_body">
         <Sidebar/>
         <Switch>
           <Route path='/mail'>
             <Mail/>
           </Route>
           <Route path='/'>
             <EmailList/>
           </Route>
         </Switch>
         {sendMessageopen && <SendMail/>}
      </div> 
    </div>
    
    )}
    </Router>   
  );
}

export default App;
