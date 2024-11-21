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

// DOM Elements
const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("login-email");
const passwordInput = document.getElementById("login-password");
const loginBtn = document.getElementById("login-btn");
const googleLoginBtn = document.getElementById("google-login-btn");
const errorMessage = document.getElementById("error-message-login");
const successMessage = document.getElementById("success-message-login");

// Email/Password Login
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "profile.html"; // Redirect to profile page
    })
    .catch((error) => {
      successMessage.style.display = "none";
      errorMessage.style.display = "block";
      errorMessage.textContent = `Error: ${error.message}`;
    });
});

// Google OAuth Login
googleLoginBtn.addEventListener("click", () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      const user = result.user;

      // Optional: Save user details to localStorage
      localStorage.setItem("userName", user.displayName);
      localStorage.setItem("userEmail", user.email);
      localStorage.setItem("userPhoto", user.photoURL);

      window.location.href = "profile.html"; // Redirect to profile page
    })
    .catch((error) => {

    });
});
