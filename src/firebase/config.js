/** @format */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkUoV9sY5MmGw8GmbYQd8QBVirtpxAE-E",
  authDomain: "solvingzero-db.firebaseapp.com",
  projectId: "solvingzero-db",
  storageBucket: "solvingzero-db.appspot.com",
  messagingSenderId: "919135422843",
  appId: "1:919135422843:web:ecf9402c7ea2d8850415de",
  measurementId: "G-2HLGYPPPCW",
};

//init firebase
initializeApp(firebaseConfig);

// init firestore
const db = getFirestore();

export { db };
