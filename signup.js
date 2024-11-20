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

const errorMessage = document.getElementById('error-message');
const successMessage = document.getElementById('success-message');

// Sign-Up Functionality
signupBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission

  const email = signupEmailInput.value;
  const password = signupPasswordInput.value;

  if (!email || !password) {
    errorMessage.textContent = "Please fill in all fields.";
    errorMessage.style.display = "block";
    return;
  }

  // First, register the user with email and password
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // Send email verification
      user.sendEmailVerification()
        .then(() => {
          successMessage.textContent = 'Please check your email for the verification link.';
          successMessage.style.display = 'block';
          setTimeout(() => {
            window.location.href = 'index.html';  // Redirect to login
          }, 3000);
        })
        .catch((error) => {
          errorMessage.textContent = error.message;
          errorMessage.style.display = 'block';
        });

    })
    .catch((error) => {
      errorMessage.textContent = error.message;
      errorMessage.style.display = 'block';
    });
});
