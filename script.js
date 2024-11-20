// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV3IOUukiU3a_7coFFKX7DNHHJ8uMswCo",
  authDomain: "drks-debadges.firebaseapp.com",
  projectId: "99406338166",
  storageBucket: "drks-debadges.appspot.com",
  messagingSenderId: "99406338166",
  appId: "1:99406338166:web:9cb98d74ed0c7856e5a757"
};

// Initialize Firebase only once
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

// DOM Elements
const googleBtn = document.getElementById("google-btn");
const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");
const toggleTextSpan = document.getElementById("toggle-text");
const logoutBtn = document.getElementById("logout-btn");
const profileContainer = document.getElementById("profile-container");
const authContainer = document.getElementById("auth-container");
const googleName = document.getElementById("google-name");
const userEmail = document.getElementById("user-email");
const popupContainer = document.getElementById("popup-container");
const popupText = document.getElementById("popup-text");
const popupClose = document.getElementById("popup-close");

let isSignUpMode = false;

// Google Login
googleBtn.addEventListener("click", () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      updateUI(result.user);
    })
    .catch((error) => {
      showError(error.message);
    });
});

// Toggle Login/Sign Up Mode
toggleTextSpan.addEventListener("click", () => {
  isSignUpMode = !isSignUpMode;
  updateUI();
});

// Email Login / Sign Up
loginBtn.addEventListener("click", () => {
  const email = document.getElementById("email-login").value;
  const password = document.getElementById("password-login").value;

  if (isSignUpMode) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        updateUI(userCredential.user);
      })
      .catch((error) => {
        showError(error.message);
      });
  } else {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        updateUI(userCredential.user);
      })
      .catch((error) => {
        showError(error.message);
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
      showError(error.message);
    });
});

// Update UI based on authentication state
firebase.auth().onAuthStateChanged(user => {
  updateUI(user);
});

// Show Pop-up Error
function showError(message) {
  popupText.textContent = message;
  popupContainer.style.display = 'flex';
}

// Update UI for logged-in/logged-out state
function updateUI(user = null) {
  if (user) {
    authContainer.style.display = "none";
    profileContainer.style.display = "block";
    googleName.textContent = user.displayName;
    userEmail.textContent = user.email;
    logoutBtn.style.display = "block";
  } else {
    authContainer.style.display = "flex";
    profileContainer.style.display = "none";
    logoutBtn.style.display = "none";
  }

  if (isSignUpMode) {
    document.getElementById("auth-title").textContent = "Sign Up";
    signupBtn.style.display = "block";
    loginBtn.style.display = "none";
  } else {
    document.getElementById("auth-title").textContent = "Login";
    signupBtn.style.display = "none";
    loginBtn.style.display = "block";
  }
}

// Close pop-up on 'X' click
popupClose.addEventListener("click", () => {
  popupContainer.style.display = 'none';
});
