import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  databaseURL: "https://pawarsetusuvidha-default-rtdb.asia-southeast1.firebasedatabase.app/",
  // Add other config values when you get them from Firebase console
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);