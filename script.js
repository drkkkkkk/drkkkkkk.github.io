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
const googleBtn = document.getElementById("google-login-btn");
const loginBtn = document.getElementById("login-btn");
const emailInput = document.getElementById("login-email");
const passwordInput = document.getElementById("login-password");

// Google Login
googleBtn.addEventListener("click", () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      if (user) {
        alert(`Welcome, ${user.displayName}!`);
        window.location.href = 'profile.html';
      }
    })
    .catch((error) => {
      console.error("Error during Google Login:", error);
      alert(error.message);
    });
});

// Email Login
loginBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    alert("Please fill in both email and password.");
    return;
  }

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user.emailVerified) {
        alert("Login successful!");
        window.location.href = 'profile.html'; // Redirect to Profile
      } else {
        alert("Please verify your email first.");
      }
    })
    .catch((error) => {
      console.error("Error during Email Login:", error);
      alert(error.message);
    });
});
