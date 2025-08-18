import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDqICVo6V5rmpOEKCZHNkPKjtj5DIbtX4Q",
  authDomain: "pawarsetusuvidha.firebaseapp.com",
  projectId: "pawarsetusuvidha",
  storageBucket: "pawarsetusuvidha.firebasestorage.app",
  messagingSenderId: "328243173483",
  appId: "1:328243173483:web:860178a6e0f47eb259792e",
  measurementId: "G-6W02MPHHVH",
  databaseURL:
    "https://pawarsetusuvidha-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
