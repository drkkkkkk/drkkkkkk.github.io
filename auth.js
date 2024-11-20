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
const loginBtn = document.getElementById("login-btn");
const loginEmailInput = document.getElementById("login-email-input");
const loginPasswordInput = document.getElementById("login-password-input");
const errorMessage = document.getElementById('login-error-message');
const successMessage = document.getElementById('login-success-message');

// Login Functionality
loginBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission

  const email = loginEmailInput.value;
  const password = loginPasswordInput.value;

  if (!email || !password) {
    errorMessage.textContent = "Please fill in all fields.";
    errorMessage.style.display = "block";
    return;
  }

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user.emailVerified) {
        successMessage.textContent = 'Successfully logged in!';
        successMessage.style.display = 'block';
        setTimeout(() => {
          window.location.href = 'profile.html'; // Redirect to profile page
        }, 3000);
      } else {
        errorMessage.textContent = "Please verify your email first.";
        errorMessage.style.display = "block";
      }
    })
    .catch((error) => {
      errorMessage.textContent = error.message;
      errorMessage.style.display = "block";
    });
});
