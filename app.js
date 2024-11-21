// Firebase configuration
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

// Get Firestore and Firebase Auth references
const db = firebase.firestore();
const auth = firebase.auth();

// Get the HTML elements
const loadUsersBtn = document.getElementById("loadUsersBtn");
const userList = document.getElementById("userList");

// Event listener for "Load Users" button
loadUsersBtn.addEventListener("click", loadUsers);

// Function to load users from Firestore
function loadUsers() {
    // Clear any existing user data
    userList.innerHTML = "";

    // Fetch users from Firestore collection "users"
    db.collection("users").get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                const user = doc.data();
                displayUser(user);
            });
        })
        .catch((error) => {
            console.error("Error getting users:", error);
        });
}

// Function to display each user in the list
function displayUser(user) {
    const userDiv = document.createElement("div");
    userDiv.classList.add("user");

    userDiv.innerHTML = `
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
    `;

    userList.appendChild(userDiv);
}
