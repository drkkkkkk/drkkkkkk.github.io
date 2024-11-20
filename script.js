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
const auth = firebase.auth();

// DOM Elements
const googleBtn = document.getElementById("google-btn");
const emailLoginForm = document.getElementById("email-login");
const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");
const logoutBtn = document.getElementById("logout-btn");
const toggleTextSpan = document.getElementById("toggle-text-span");
const authTitle = document.getElementById("auth-title");

let isSignUpMode = false;

// Google Login
googleBtn.addEventListener("click", () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      updateUI();
    })
    .catch((error) => {
      console.error(error);
    });
});

// Toggle Login/Sign Up Mode
toggleTextSpan.addEventListener("click", () => {
  isSignUpMode = !isSignUpMode;
  updateUI();
});

// Email Login / Sign Up
loginBtn.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (isSignUpMode) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        updateUI();
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        updateUI();
      })
      .catch((error) => {
        console.error(error);
      });
  }
});

// Sign Out
logoutBtn.addEventListener("click", () => {
  firebase.auth().signOut()
    .then(() => {
      updateUI();
    })
    .catch((error) => {
      console.error(error);
    });
});

// Update UI based on authentication state
firebase.auth().onAuthStateChanged(user => {
  updateUI(user);
});

function updateUI(user = null) {
  if (user) {
    document.getElementById("auth-container").style.display = "none";
    logoutBtn.style.display = "block";
  } else {
    document.getElementById("auth-container").style.display = "flex";
    logoutBtn.style.display = "none";
  }

  if (isSignUpMode) {
    authTitle.textContent = "Sign Up";
    signupBtn.style.display = "block";
    loginBtn.style.display = "none";
  } else {
    authTitle.textContent = "Login";
    signupBtn.style.display = "none";
    loginBtn.style.display = "block";
  }
}
