// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAV3IOUukiU3a_7coFFKX7DNHHJ8uMswCo",
    authDomain: "drks-debadges.firebaseapp.com",
    projectId: "99406338166",
    storageBucket: "drks-debadges.appspot.com",
    messagingSenderId: "99406338166",
    appId: "1:99406338166:web:9cb98d74ed0c7856e5a757"
  };

// Initialize Firebase App
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

// Add User to Firestore
document.getElementById('addUser').addEventListener('click', function() {
    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;

    // Add user data to Firestore
    db.collection("users").add({
        name: userName,
        email: userEmail
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        // Clear input fields
        document.getElementById('userName').value = '';
        document.getElementById('userEmail').value = '';
        // Refresh the user list
        loadUsers();
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});

// Load and Display Users
function loadUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = ''; // Clear the list before displaying updated data

    // Fetch users from Firestore
    db.collection("users").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            const user = doc.data();
            const li = document.createElement('li');
            li.textContent = `Name: ${user.name}, Email: ${user.email}`;
            userList.appendChild(li);
        });
    }).catch(function(error) {
        console.error("Error getting documents: ", error);
    });
}

// Initially load users when the page loads
window.addEventListener('DOMContentLoaded', function() {
    loadUsers();
});
