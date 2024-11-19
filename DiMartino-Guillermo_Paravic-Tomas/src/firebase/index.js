import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDblJXF4qM2XtcUP4ToaA41_r2a9Pec-f0",
  authDomain: "parcial02-clientes-web-dwn4av.firebaseapp.com",
  projectId: "parcial02-clientes-web-dwn4av",
  storageBucket: "parcial02-clientes-web-dwn4av.firebasestorage.app",
  messagingSenderId: "69284764963",
  appId: "1:69284764963:web:86f6a079082e7aacf4c096"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {auth, db};