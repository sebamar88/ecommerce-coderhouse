import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCT_76vlRViST3Buh3GRUb5xfr_dN24_Tc",
  authDomain: "coderhouse-ecommerce-f9063.firebaseapp.com",
  projectId: "coderhouse-ecommerce-f9063",
  storageBucket: "coderhouse-ecommerce-f9063.appspot.com",
  messagingSenderId: "120932051528",
  appId: "1:120932051528:web:8ca4e076605370e49e467d",
  measurementId: "G-E0QJH8D879",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
