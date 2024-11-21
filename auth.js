// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV3IOUukiU3a_7coFFKX7DNHHJ8uMswCo",
  authDomain: "drks-debadges.firebaseapp.com",
  projectId: "99406338166",
  storageBucket: "drks-debadges.appspot.com",
  messagingSenderId: "99406338166",
  appId: "1:99406338166:web:9cb98d74ed0c7856e5a757"
};

firebase.initializeApp(firebaseConfig);

const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("login-email");
const passwordInput = document.getElementById("login-password");
const loginBtn = document.getElementById("login-btn");
const Feedbackeror = document.getElementById("error-message-login")
const feedbackSuccess = document.getElementById("success-message-login")

const googleLoginBtn = document.getElementById("google-login-btn");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      window.location.href = "profile.html";
    })
    .catch((error) => {
      feedbackSuccess.style.display = "none";
      Feedbackeror.style.display = "block";
      Feedbackeror.textContent = `Error: ${error.message}`;
    });
});

// Google login
googleLoginBtn.addEventListener("click", () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      window.location.href = "profile.html";
    })
    .catch((error) => {
    });
});
