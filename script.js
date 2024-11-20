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
const googleBtn = document.getElementById("google-btn");
const loginBtn = document.getElementById("login-btn");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");

// Google Login
googleBtn.addEventListener("click", () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      window.location.href = 'profile.html';
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Email Login
loginBtn.addEventListener("click", () => {
  const email = emailInput.value;
  const password = passwordInput.value;
  
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      if (userCredential.user.emailVerified) {
        window.location.href = 'profile.html'; // Redirect to Profile
      } else {
        alert("Please verify your email first.");
      }
    })
    .catch((error) => {
      alert(error.message);
    });
});
