
import { initializeApp } from "firebase/app";



const firebaseConfig = {
    apiKey: "AIzaSyCSwYJx34XRxMDUmiQwt6MCVm_hI9-T7Rs",
    authDomain: "la-taza-de-la-abuela-db.firebaseapp.com",
    projectId: "la-taza-de-la-abuela-db",
    storageBucket: "la-taza-de-la-abuela-db.firebasestorage.app",
    messagingSenderId: "842398047458",
    appId: "1:842398047458:web:d02cbdea87e80676c7d2bb"
};

export const app = initializeApp(firebaseConfig);