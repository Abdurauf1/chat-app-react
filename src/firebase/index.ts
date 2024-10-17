// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBf84cCzSpLr3kT1TOpiDAl5YulWPRHdVQ",
    authDomain: "chat-app-1c6fb.firebaseapp.com",
    projectId: "chat-app-1c6fb",
    storageBucket: "cha t-app-1c6fb.appspot.com",
    messagingSenderId: "114164759081",
    appId: "1:114164759081:web:55b45bd0ded9627e4f7a38",
    measurementId: "G-FEBNF24216"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);