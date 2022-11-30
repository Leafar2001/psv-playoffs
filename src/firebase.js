import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBz0-YfxVeczvSxKe9ihgYoNUH9VNVQJuM",
  authDomain: "psv-playoffs.firebaseapp.com",
  projectId: "psv-playoffs",
  storageBucket: "psv-playoffs.appspot.com",
  messagingSenderId: "663608911204",
  appId: "1:663608911204:web:176ec66e8cc210d4664671",
  measurementId: "G-09214T82N3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
