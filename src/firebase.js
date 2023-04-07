import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAcT6YXqIRwvw4XLZ4Ycw8DTwjm5see_ro",
  authDomain: "sadigzadedev.firebaseapp.com",
  projectId: "sadigzadedev",
  storageBucket: "sadigzadedev.appspot.com",
  messagingSenderId: "507025080608",
  appId: "1:507025080608:web:ac89f225c88baa65779745",
  measurementId: "G-9GGBDTKRML",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
