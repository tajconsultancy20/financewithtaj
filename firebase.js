// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBctAYSnRDgmX_pBSGMCcQzr1uS0EjIaNs",
  authDomain: "finance-portal-f1f84.firebaseapp.com",
  projectId: "finance-portal-f1f84",
  storageBucket: "finance-portal-f1f84.firebasestorage.app",
  messagingSenderId: "454088803574",
  appId: "1:454088803574:web:550311aeed4e72122e18d7",
  measurementId: "G-ZRYW88JC65"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
