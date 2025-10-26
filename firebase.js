import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSy8105faJakAf0T_gMGBmqub4P4PsECuJ7N",
    authDomain: "allforone-d6b15.firebaseapp.com",
    projectId: "allforone-d6b15",
    storageBucket: "allforone-d6b15.firebasestorage.app",
    messagingSenderId: "788684299219",
    appId: "1:788684299219:web:9b2d07da84a276b70638f6",
    measurementId: "G-1EZZSYR69P"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;