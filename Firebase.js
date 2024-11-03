// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdgqoI3kYOSbylB5ZDixchqxqhFWhJBiM",
    authDomain: "city-75d2e.firebaseapp.com",
    projectId: "city-75d2e",
    storageBucket: "city-75d2e.appspot.com",
    messagingSenderId: "753628752715",
    appId: "1:753628752715:web:ff7a4b96c320062b3bd6ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
export default app
