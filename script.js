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
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// DOM Elements
const googleBtn = document.getElementById("google-login-btn");
const loginBtn = document.getElementById("login-btn");
const emailInput = document.getElementById("login-email");
const passwordInput = document.getElementById("login-password");
const forgotPassword = document.getElementById("forgot-password");

// Google Login
googleBtn.addEventListener("click", () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      showNotification(`Welcome, ${result.user.displayName}!`, 'success');
      window.location.href = 'profile.html';
    })
    .catch((error) => {
      showNotification(error.message, 'error');
    });
});

// Email Login
loginBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    showNotification("Please fill in both email and password.", 'error');
    return;
  }

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user.emailVerified) {
        showNotification("Login successful!", 'success');
        window.location.href = 'profile.html';
      } else {
        showNotification("Please verify your email first.", 'error');
      }
    })
    .catch((error) => {
      showNotification(error.message, 'error');
    });
});

// Forgot Password
forgotPassword.addEventListener("click", () => {
  const email = prompt("Please enter your email:");
  if (!email) return;

  firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      showNotification("Password reset email sent! Please check your inbox.", 'success');
    })
    .catch((error) => {
      showNotification(error.message, 'error');
    });
});

// Function to Show Notifications
function showNotification(message, type) {
  const notification = document.createElement('div');
  notification.classList.add('notification', type === 'success' ? 'show' : '');
  notification.classList.add(type);
  notification.innerHTML = `
    <span>${message}</span>
    <button class="close-btn">&times;</button>
  `;
  document.body.appendChild(notification);

  // Close button logic
  notification.querySelector('.close-btn').addEventListener('click', () => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 500);
  });

  // Automatically hide after 5 seconds
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 500);
  }, 5000);
}
