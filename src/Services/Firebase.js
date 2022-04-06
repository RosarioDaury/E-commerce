import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAxMAxA7WpLApF45N6LLPd9nn6kfuCcAzU",
    authDomain: "e-commerce-5fbae.firebaseapp.com",
    projectId: "e-commerce-5fbae",
    storageBucket: "e-commerce-5fbae.appspot.com",
    messagingSenderId: "636044585294",
    appId: "1:636044585294:web:4009819aaa9d2e2353961f"
};

firebase.initializeApp(firebaseConfig);

export const DB = firebase.firestore();