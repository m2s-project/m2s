// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  getDocs,
  collection,
  doc,
  setDoc,
  addDoc,
  updateDoc,
} from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9x7GjlogRUcot-i4SdK5cmhe8KcQCIx8",
  authDomain: "migas-ce0b0.firebaseapp.com",
  projectId: "migas-ce0b0",
  storageBucket: "migas-ce0b0.appspot.com",
  messagingSenderId: "104115429078",
  appId: "1:104115429078:web:bbe9ddb3bd59726283f377",
  measurementId: "G-GB6XM3JM1M"
};
// https://migas-ce0b0.web.app/
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

// Add a new document in collection "cities"

export async function addDocument(collection, doc) {
  const docRef = doc(db, collection, doc.uuid)
  await setDoc(docRef, doc);
   console.log("Document written : ", doc);

  //       const cityRef = doc(db, 'cities', 'BJ');
  // setDoc(cityRef, { capital: true }, { merge: true });

  // Add a new document with a generated id.
  // const docRef = await addDoc(collection(db, "cities"), {
  //   name: "Tokyo",
  //   country: "Japan"
  // });
  // console.log("Document written with ID: ", docRef.id);
}
export async function addCities() {
  await setDoc(doc(db, "cities", "LA"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA",
    tous: { name: "Los Angeles", state: "CA", country: "USA" },
    tab: [1, 2, 3],
  });

  //       const cityRef = doc(db, 'cities', 'BJ');
  // setDoc(cityRef, { capital: true }, { merge: true });

  // Add a new document with a generated id.
  // const docRef = await addDoc(collection(db, "cities"), {
  //   name: "Tokyo",
  //   country: "Japan"
  // });
  // console.log("Document written with ID: ", docRef.id);
}

// update doc of cities from your database
export async function updateDocument(document, doc) {
  const docRef = doc(db, document,doc.uuid);

  // Set the "capital" field of the city 'DC'
  await updateDoc(docRef, doc);
}
export async function updatetCities() {
  const washingtonRef = doc(db, "cities", "DC");

  // Set the "capital" field of the city 'DC'
  await updateDoc(washingtonRef, {
    capital: true,
  });
}

// Get a list of cities from your database
export async function getDocuments(collection) {
  let data = [];
  const documentCol = collection(db, collection);
  const documentSnapshot = await getDocs(documentCol);
  const documentList = documentSnapshot.docs.map((doc) => {
  
    return doc.data();
  });
 
  return documentList;
}
export async function getCities() {
  let data = [];
  const citiesCol = collection(db, "cities");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => {
  
    return doc.data();
  });
  // console.log(cityList);
  return cityList;
}
