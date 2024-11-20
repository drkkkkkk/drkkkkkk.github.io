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
const signupBtn = document.getElementById("signup-btn");
const signupEmailInput = document.getElementById("signup-email-input");
const signupPasswordInput = document.getElementById("signup-password-input");

// Sign-Up Functionality
signupBtn.addEventListener("click", () => {
  const email = signupEmailInput.value;
  const password = signupPasswordInput.value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      user.sendEmailVerification()  // Send verification email
        .then(() => {
          alert('Please check your email for the verification link.');
          window.location.href = 'index.html';  // Redirect to login
        })
        .catch((error) => {
          alert(error.message);
        });
    })
    .catch((error) => {
      alert(error.message);
    });
});
