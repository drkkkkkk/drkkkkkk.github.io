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
  const signupBtn = document.getElementById("signup-btn");
  const forgotPasswordBtn = document.getElementById("forgot-password-btn");
  const googleBtn = document.getElementById("google-btn");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

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

  // Google Login
  googleBtn.addEventListener("click", () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        showNotification('Successfully logged in with Google!');
        window.location.href = 'profile.html';
      })
      .catch((error) => {
        showNotification(error.message);
      });
  });

  // Login with email and password
  loginBtn.addEventListener("click", () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        if (userCredential.user.emailVerified) {
          window.location.href = 'profile.html';
        } else {
          showNotification("Please verify your email first.");
        }
      })
      .catch((error) => {
        showNotification(error.message);
      });
  });

  // Sign up
  signupBtn.addEventListener("click", () => {
    window.location.href = 'signup.html'; // Redirect to signup page
  });

  // Forgot Password
  forgotPasswordBtn.addEventListener("click", () => {
    const email = emailInput.value;

    firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
        showNotification("Password reset email sent!");
      })
      .catch((error) => {
        showNotification(error.message);
      });
  });
