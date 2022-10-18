// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR6c50vhHJ1FocSsDTzKPTdXfuYwyVxVQ",
  authDomain: "dragon-news-7b2ad.firebaseapp.com",
  projectId: "dragon-news-7b2ad",
  storageBucket: "dragon-news-7b2ad.appspot.com",
  messagingSenderId: "128528675401",
  appId: "1:128528675401:web:d59652e6509cb5f4e38598"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;