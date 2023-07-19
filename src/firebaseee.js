// import firebase from "firebase"
import firebase from "firebase/app";
import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDkk4ibMZ6_AzV51WgcneneZYzt84MQQho",
    authDomain: "devconnect-8c904.firebaseapp.com",
    projectId: "devconnect-8c904",
    storageBucket: "devconnect-8c904.appspot.com",
    messagingSenderId: "522836775583",
    appId: "1:522836775583:web:ef5d8bb0b8ada275ef08aa",
    measurementId: "G-Q61DNCJ405"
  };

//   This code connects everything
const firebaseApp = initializeApp(firebaseConfig);

// gets the firebase database
// const db =firebaseApp.firestore();
const db = getFirestore(firebaseApp);

export { db }
// export default firebase;