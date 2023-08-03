import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUzPfwhLu9ASz4X-LW1CxFrSBMA6ZN9Ao",
  authDomain: "portfolio-a5b33.firebaseapp.com",
  projectId: "portfolio-a5b33",
  storageBucket: "portfolio-a5b33.appspot.com",
  messagingSenderId: "111061181442",
  appId: "1:111061181442:web:3d13fac0ef80034ced731b",
  measurementId: "G-XGQ1TQBV7C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export const db = getFirestore(app);