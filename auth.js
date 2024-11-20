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

  // DOM Elements for Sign In
  const signInBtn = document.getElementById('sign-in-btn');
  const googleBtn = document.getElementById('google-btn');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  // Redirect if user is already logged in
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      window.location.href = "profile.html"; // Redirect to profile if logged in
    }
  });

  // Sign In with Email/Password
  signInBtn.addEventListener('click', () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        window.location.href = 'profile.html'; // Redirect to profile
      })
      .catch(error => {
        alert(error.message); // Handle errors
      });
  });

  // Google Sign-In
  googleBtn.addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(result => {
        window.location.href = 'profile.html'; // Redirect to profile
      })
      .catch(error => {
        alert(error.message); // Handle errors
      });
  });
