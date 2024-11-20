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
const errorMessage = document.createElement('div');
errorMessage.classList.add('error-message');
const successMessage = document.createElement('div');
successMessage.classList.add('success-message');
document.body.appendChild(errorMessage);
document.body.appendChild(successMessage);

// Sign-Up Functionality
signupBtn.addEventListener("click", (event) => {
  event.preventDefault();  // Prevent form submission

  const email = signupEmailInput.value;
  const password = signupPasswordInput.value;

  // Input validation
  if (!email || !password) {
    errorMessage.textContent = "Please fill in both email and password.";
    errorMessage.style.display = "block";
    return;
  }

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      user.sendEmailVerification()  // Send verification email
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
