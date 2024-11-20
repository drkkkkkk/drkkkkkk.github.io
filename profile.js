// Firebase Configuration
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

// DOM Elements
const logoutBtn = document.getElementById("logout-btn");
const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");

// Handle user sign-out
logoutBtn.addEventListener("click", () => {
  firebase.auth().signOut()
    .then(() => {
      window.location.href = 'index.html'; // Redirect to Login
    });
});

// Update UI with user details
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    userName.innerText = user.displayName || user.email;
    userEmail.innerText = user.email;
  } else {
    window.location.href = 'index.html'; // Redirect to Login if not logged in
  }
});
