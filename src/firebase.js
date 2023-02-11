import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyATtzbo0TAJy17iV1Vq1Dgg94WvI3XGUwo",
    authDomain: "chat-30567.firebaseapp.com",
    projectId: "chat-30567",
    storageBucket: "chat-30567.appspot.com",
    messagingSenderId: "560025556191",
    appId: "1:560025556191:web:1bca1985b837c08d00456a"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
export const database = getDatabase();