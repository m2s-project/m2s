// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { enableIndexedDbPersistence, getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCDjJhoLTZ3q0WKDql7IHtfvlZgta42-4",
  authDomain: "m2s-xgmao.firebaseapp.com",
  projectId: "m2s-xgmao",
  storageBucket: "m2s-xgmao.appspot.com",
  messagingSenderId: "700339512295",
  appId: "1:700339512295:web:072310ff03684ebc7f1342"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication
const auth = getAuth(app);

// Storage
const storage = getStorage(app);

// Activer la persistance pour une mise en cache locale (IndexedDB)
const db = getFirestore(app);

enableIndexedDbPersistence(db).catch((err) => {
  if (err.code === 'failed-precondition') {
    console.error("Persistance échouée (failed-precondition)");
  } else if (err.code === 'unimplemented') {
    console.error("Persistance non disponible (unimplemented)");
  }
});


// Export Firebase services
export { auth, db, storage };
