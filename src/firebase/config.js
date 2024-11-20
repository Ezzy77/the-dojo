import "firebase/firestore";
import "firebase/auth";
import firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8i4eD01bPKYbbXk8qM-98dfPyK3aE4ZU",
    authDomain: "thedojosite-79a02.firebaseapp.com",
    projectId: "thedojosite-79a02",
    storageBucket: "thedojosite-79a02.firebasestorage.app",
    messagingSenderId: "611046604901",
    appId: "1:611046604901:web:2f9feaa41dcabfb9c5068c"
};

firebase.initializeApp(firebaseConfig);

// init service
const timestamp = firebase.firestore.Timestamp;
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth, timestamp };

