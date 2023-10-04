// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5h1jDruTgOJGO4xoKMSWFLG26ALH8sX0",
  authDomain: "react-dragon-news-projec-de29d.firebaseapp.com",
  projectId: "react-dragon-news-projec-de29d",
  storageBucket: "react-dragon-news-projec-de29d.appspot.com",
  messagingSenderId: "133269093488",
  appId: "1:133269093488:web:29c4cebea39dfd8be708b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;