import { auth } from './firebase-init.js';
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js';

const signupBtn = document.getElementById("signup-btn");
const signupEmailInput = document.getElementById("signup-email-input");
const signupPasswordInput = document.getElementById("signup-password-input");

signupBtn.addEventListener("click", () => {
  const email = signupEmailInput.value;
  const password = signupPasswordInput.value;

  createUserWithEmailAndPassword(auth, email, password)
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
