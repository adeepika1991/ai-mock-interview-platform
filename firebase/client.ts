// firebase/client.ts

import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJa79TmMNvOK29IOkBKZl0yiMun2fw_Ck",
  authDomain: "interviewgenius-e5f0b.firebaseapp.com",
  projectId: "interviewgenius-e5f0b",
  storageBucket: "interviewgenius-e5f0b.appspot.com", // fixed typo here too
  messagingSenderId: "91113470400",
  appId: "1:91113470400:web:ee48a617d6481ed008b025",
  measurementId: "G-KLTYGMB18L"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);          // ✅ Client SDK Auth
export const db = getFirestore(app);       // ✅ Client SDK Firestore
