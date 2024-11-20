// DOM Elements
const signupEmail = document.getElementById("signup-email");
const signupPassword = document.getElementById("signup-password");
const signupBtn = document.getElementById("signup-btn");
const loginLinkBtn = document.getElementById("login-link-btn");
const googleSignupBtn = document.getElementById("google-signup-btn");

// Show notification
function showNotification(message) {
  const notification = document.createElement("div");
  notification.classList.add("notification");
  notification.innerText = message;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.classList.add("show");
  }, 10);
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Google Sign-up
googleSignupBtn.addEventListener("click", () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      showNotification('Successfully signed up with Google!');
      window.location.href = 'profile.html';
    })
    .catch((error) => {
      showNotification(error.message);
    });
});

// Sign up with email and password
signupBtn.addEventListener("click", () => {
  const email = signupEmail.value;
  const password = signupPassword.value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      showNotification("Account created successfully! Please verify your email.");
      window.location.href = 'profile.html';
    })
    .catch((error) => {
      showNotification(error.message);
    });
});

// Redirect to Login page
loginLinkBtn.addEventListener("click", () => {
  window.location.href = 'index.html'; // Redirect to login page
});
