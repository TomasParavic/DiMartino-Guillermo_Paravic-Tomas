import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCWkSy3ZXUdhxH5uTUGp_pDM3MOIo1qSas",
  authDomain: "chat-f1-c4318.firebaseapp.com",
  projectId: "chat-f1-c4318",
  storageBucket: "chat-f1-c4318.firebasestorage.app",
  messagingSenderId: "12931774693",
  appId: "1:12931774693:web:4eae4b73221d1cbffbbc0c",
  measurementId: "G-JF6B05Y43G"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);