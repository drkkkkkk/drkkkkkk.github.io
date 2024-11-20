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
const forgotPassword = document.getElementById("forgot-password");
const emailInput = document.getElementById("login-email");
const passwordInput = document.getElementById("login-password");

// Google Login
googleBtn.addEventListener("click", () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      alert(`Welcome, ${result.user.displayName}!`);
      window.location.href = 'profile.html';
    })
    .catch((error) => {
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
        window.location.href = 'profile.html';
      } else {
        alert("Please verify your email first.");
      }
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Forgot Password
forgotPassword.addEventListener("click", () => {
  const email = prompt("Please enter your email:");
  if (!email) return;

  firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      alert("Password reset email sent! Please check your inbox.");
    })
    .catch((error) => {
      alert(error.message);
    });
});
