// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "x-next-6a4f7.firebaseapp.com",
  projectId: "x-next-6a4f7",
  storageBucket: "x-next-6a4f7.appspot.com",
  messagingSenderId: "344321498678",
  appId: "1:344321498678:web:96c17625882c2f3016c297"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);