import { auth } from './firebase-init.js';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js';

const loginForm = document.getElementById("login-form");
const googleBtn = document.getElementById("google-btn");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email-input").value;
  const password = document.getElementById("password-input").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      window.location.href = 'profile.html';
    })
    .catch((error) => {
      alert(error.message);
    });
});

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
import { auth } from './firebase-init.js';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js';

const loginForm = document.getElementById("login-form");
const googleBtn = document.getElementById("google-btn");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email-input").value;
  const password = document.getElementById("password-input").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      window.location.href = 'profile.html';
    })
    .catch((error) => {
      alert(error.message);
    });
});

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
