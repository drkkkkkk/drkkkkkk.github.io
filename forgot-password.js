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
const forgotBtn = document.getElementById("forgot-btn");
const forgotEmailInput = document.getElementById("forgot-email-input");
const errorMessage = document.getElementById('forgot-error-message');
const successMessage = document.getElementById('forgot-success-message');

// Forgot Password Functionality
forgotBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission

  const email = forgotEmailInput.value;

  if (!email) {
    errorMessage.textContent = "Please enter your email.";
    errorMessage.style.display = "block";
    return;
  }

  // Send reset password email
  firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      successMessage.textContent = 'Check your email for the password reset link.';
      successMessage.style.display = 'block';
    })
    .catch((error) => {
      errorMessage.textContent = error.message;
      errorMessage.style.display = 'block';
    });
});
