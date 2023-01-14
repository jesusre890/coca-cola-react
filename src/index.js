import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn7HPnZtr6tO4i3YpLF0tYVQNc20zHVsE",
  authDomain: "coca-colapp.firebaseapp.com",
  projectId: "coca-colapp",
  storageBucket: "coca-colapp.appspot.com",
  messagingSenderId: "304880226319",
  appId: "1:304880226319:web:63a95dfbeb087f7bffd37a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);