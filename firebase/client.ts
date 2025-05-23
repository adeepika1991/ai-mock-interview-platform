// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJa79TmMNvOK29IOkBKZl0yiMun2fw_Ck",
  authDomain: "interviewgenius-e5f0b.firebaseapp.com",
  projectId: "interviewgenius-e5f0b",
  storageBucket: "interviewgenius-e5f0b.firebasestorage.app",
  messagingSenderId: "91113470400",
  appId: "1:91113470400:web:ee48a617d6481ed008b025",
  measurementId: "G-KLTYGMB18L"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);