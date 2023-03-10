import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxVe07kQOlzsThcNjFrgK_HVd5qU4zgjI",
  authDomain: "jazmina-ae75f.firebaseapp.com",
  projectId: "jazmina-ae75f",
  storageBucket: "jazmina-ae75f.appspot.com",
  messagingSenderId: "372706828711",
  appId: "1:372706828711:web:8e171da8974bd38f6d1682"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

