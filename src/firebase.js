import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
import { getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyARjwHgFxWoaB_6Ukcot4dju6H7lfkCHTI",
  authDomain: "todo-list-5cfb2.firebaseapp.com",
  databaseURL: "https://todo-list-5cfb2-default-rtdb.firebaseio.com",
  projectId: "todo-list-5cfb2",
  storageBucket: "todo-list-5cfb2.appspot.com",
  messagingSenderId: "313457523268",
  appId: "1:313457523268:web:c418679a743ca36ebdda11"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();