// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC3-kwm5aGo3BrkwLAiJE0pbFtsKbgB6zo",
  authDomain: "dashtoon-dd39a.firebaseapp.com",
  projectId: "dashtoon-dd39a",
  storageBucket: "dashtoon-dd39a.appspot.com",
  messagingSenderId: "13011357859",
  appId: "1:13011357859:web:fdb6b716764424fb93ef16",
  measurementId: "G-GQ5ZNGF2GX"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
