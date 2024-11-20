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

// Toggle between Login and Sign Up
toggleTextSpan.addEventListener("click", () => {
  isSignUpMode = !isSignUpMode;
  updateUI();
});

// Email Login / Sign Up
loginBtn.addEventListener("click", () => {
  const email = document.getElementById("email-input").value;
  const password = document.getElementById("password-input").value;

  if (isSignUpMode) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        userCredential.user.sendEmailVerification()
          .then(() => {
            updateUI(userCredential.user);
            alert('Verification email sent. Please check your inbox.');
          })
          .catch((error) => {
            showError(error.message);
          });
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

// Logout
logoutBtn.addEventListener("click", () => {
  firebase.auth().signOut()
    .then(() => {
      authContainer.style.display = 'block';
      profileContainer.style.display = 'none';
    })
    .catch((error) => {
      showError(error.message);
    });
});

// Update UI based on authentication status
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    updateUI(user);
  } else {
    authContainer.style.display = 'block';
    profileContainer.style.display = 'none';
  }
});

// Show error messages
function showError(message) {
  popupText.innerText = message;
  popupContainer.style.display = 'flex';
}

// Close the popup
popupClose.addEventListener("click", () => {
  popupContainer.style.display = 'none';
});

// Update the UI after login/signup
function updateUI(user) {
  if (user) {
    googleName.innerText = user.displayName || user.email;
    userEmail.innerText = user.email;
    authContainer.style.display = 'none';
    profileContainer.style.display = 'block';
  } else {
    authContainer.style.display = 'block';
    profileContainer.style.display = 'none';
  }
}
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

// Toggle between Login and Sign Up
toggleTextSpan.addEventListener("click", () => {
  isSignUpMode = !isSignUpMode;
  updateUI();
});

// Email Login / Sign Up
loginBtn.addEventListener("click", () => {
  const email = document.getElementById("email-input").value;
  const password = document.getElementById("password-input").value;

  if (isSignUpMode) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        userCredential.user.sendEmailVerification()
          .then(() => {
            updateUI(userCredential.user);
            alert('Verification email sent. Please check your inbox.');
          })
          .catch((error) => {
            showError(error.message);
          });
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

// Logout
logoutBtn.addEventListener("click", () => {
  firebase.auth().signOut()
    .then(() => {
      authContainer.style.display = 'block';
      profileContainer.style.display = 'none';
    })
    .catch((error) => {
      showError(error.message);
    });
});

// Update UI based on authentication status
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    updateUI(user);
  } else {
    authContainer.style.display = 'block';
    profileContainer.style.display = 'none';
  }
});

// Show error messages
function showError(message) {
  popupText.innerText = message;
  popupContainer.style.display = 'flex';
}

// Close the popup
popupClose.addEventListener("click", () => {
  popupContainer.style.display = 'none';
});

// Update the UI after login/signup
function updateUI(user) {
  if (user) {
    googleName.innerText = user.displayName || user.email;
    userEmail.innerText = user.email;
    authContainer.style.display = 'none';
    profileContainer.style.display = 'block';
  } else {
    authContainer.style.display = 'block';
    profileContainer.style.display = 'none';
  }
}
