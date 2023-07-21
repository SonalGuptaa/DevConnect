import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuwQGrOc4p5fxwWKfy30YJKsDOWmQcOOU",
  authDomain: "dev-connect-7be94.firebaseapp.com",
  databaseURL: "https://dev-connect-7be94-default-rtdb.firebaseio.com",
  projectId: "dev-connect-7be94",
  storageBucket: "dev-connect-7be94.appspot.com",
  messagingSenderId: "317012679381",
  appId: "1:317012679381:web:23aa9aaaf601ae9fbfa05c"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;