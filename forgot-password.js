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
const resetEmailInput = document.getElementById("reset-email");
const resetPasswordBtn = document.getElementById("reset-password-btn");
const resetMessage = document.getElementById("reset-message");

// Handle password reset
resetPasswordBtn.addEventListener("click", () => {
  const email = resetEmailInput.value;

  if (!email) {
    resetMessage.innerText = "Please enter a valid email.";
    resetMessage.style.color = "red";
    return;
  }

  firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      resetMessage.innerText = "Password reset link sent! Check your email.";
      resetMessage.style.color = "green";
    })
    .catch((error) => {
      resetMessage.innerText = error.message;
      resetMessage.style.color = "red";
    });
});
