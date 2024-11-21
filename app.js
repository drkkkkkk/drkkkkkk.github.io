// Import Firebase and Firestore using compat version
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Your Firebase config object
const firebaseConfig = {
    apiKey: "AIzaSyAV3IOUukiU3a_7coFFKX7DNHHJ8uMswCo",
    authDomain: "drks-debadges.firebaseapp.com",
    projectId: "99406338166",
    storageBucket: "drks-debadges.appspot.com",
    messagingSenderId: "99406338166",
    appId: "1:99406338166:web:9cb98d74ed0c7856e5a757"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

// Wait until the DOM is fully loaded before attaching the event listener
document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('addUser');

    if (addButton) {
        addButton.addEventListener('click', function () {
            // Get user input
            const userName = document.getElementById('userName').value;
            const userEmail = document.getElementById('userEmail').value;

            // Add user to Firestore
            db.collection("users").add({
                name: userName,
                email: userEmail
            })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
        });
    }
});
