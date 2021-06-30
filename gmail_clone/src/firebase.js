// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAamNkYuXWaJFJU8Py5aq0n46dU6C93ae4",
    authDomain: "clone-new-ec4dd.firebaseapp.com",
    projectId: "clone-new-ec4dd",
    storageBucket: "clone-new-ec4dd.appspot.com",
    messagingSenderId: "496833677869",
    appId: "1:496833677869:web:4bd5fcd9f5810bfcc286a4",
    measurementId: "G-4YNTVTCQ22"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  export {db,auth,provider};