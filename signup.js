import { auth } from './firebase-init.js';
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js';

const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("signup-email-input").value;
  const password = document.getElementById("signup-password-input").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      user.sendEmailVerification().then(() => {
        alert("Please check your email for the verification link.");
        window.location.href = "index.html"; // Redirect to login
      });
    })
    .catch((error) => {
      alert(error.message);
    });
});
