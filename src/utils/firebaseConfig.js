// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBrEGrkDx8FafLS6GXq_61nYj9I4wrPto",
  authDomain: "eulogy-f7499.firebaseapp.com",
  projectId: "eulogy-f7499",
  storageBucket: "eulogy-f7499.appspot.com",
  messagingSenderId: "256075135295",
  appId: "1:256075135295:web:0316057eb6108921983b8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;