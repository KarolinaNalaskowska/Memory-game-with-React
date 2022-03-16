// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCWsJK9QEmNtPd-0iyla9FAevcuJVH9vas",
    authDomain: "memory-game-kn.firebaseapp.com",
    projectId: "memory-game-kn",
    storageBucket: "memory-game-kn.appspot.com",
    messagingSenderId: "345545887263",
    appId: "1:345545887263:web:1308947b47c52b34044f2a",
    measurementId: "G-FGXKRDYC7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;