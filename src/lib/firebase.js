import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "reactchat-76022.firebaseapp.com",
    projectId: "reactchat-76022",
    storageBucket: "reactchat-76022.appspot.com",
    messagingSenderId: "708938309920",
    appId: "1:708938309920:web:431d884921fbf8152eb745"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()