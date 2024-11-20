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
const loginEmailInput = document.getElementById('login-email');
const loginPasswordInput = document.getElementById('login-password');
const loginBtn = document.getElementById('login-btn');
const googleLoginBtn = document.getElementById('google-login-btn');

// Google Login functionality
googleLoginBtn.addEventListener('click', () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      console.log('Google User logged in:', user);
      // Redirect to profile page after successful login
      window.location.href = 'profile.html';
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Email Login functionality
loginBtn.addEventListener("click", () => {
  const email = loginEmailInput.value;
  const password = loginPasswordInput.value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('User logged in:', user);
      // Redirect to profile page after successful login
      window.location.href = 'profile.html';
    })
    .catch((error) => {
      alert(error.message);
    });
});
