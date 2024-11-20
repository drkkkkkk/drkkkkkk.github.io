import { auth } from './firebase-init.js';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js';

const googleBtn = document.getElementById("google-btn");
const loginBtn = document.getElementById("login-btn");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");

googleBtn.addEventListener("click", () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      window.location.href = 'profile.html';
    })
    .catch((error) => {
      alert(error.message);
    });
});

loginBtn.addEventListener("click", () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      if (userCredential.user.emailVerified) {
        window.location.href = 'profile.html'; // Redirect to Profile
      } else {
        alert("Please verify your email first.");
      }
    })
    .catch((error) => {
      alert(error.message);
    });
});
