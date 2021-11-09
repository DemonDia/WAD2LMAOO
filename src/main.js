import { createApp } from 'vue'
import App from './App.vue'
import router from "./routes/routes"
import firebase from 'firebase/compat/app';
// import { initializeApp } from 'firebase/app';

  // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDirB4uVg6Y0tXtKii6G9kRaDqVaogOV8A",
    authDomain: "projeck-aff0e.firebaseapp.com",
    databaseURL: "https://projeck-aff0e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "projeck-aff0e",
    storageBucket: "projeck-aff0e.appspot.com",
    messagingSenderId: "256471083858",
    appId: "1:256471083858:web:0bd5563feee4ea6e4c688b",
    measurementId: "G-H0KT7M1YD7"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);



// console.log(app)

createApp(App).use(router).mount('#app')
