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

  // DOM Elements for Sign In
  const signInBtn = document.getElementById('sign-in-btn');
  const googleBtn = document.getElementById('google-btn');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  // Sign In with Email/Password
  if (signInBtn) {
    signInBtn.addEventListener('click', () => {
      const email = emailInput.value;
      const password = passwordInput.value;
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
          window.location.href = 'profile.html';
        })
        .catch(error => {
          alert(error.message);
        });
    });
  }

  // Google Sign-In
  if (googleBtn) {
    googleBtn.addEventListener('click', () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
        .then(result => {
          window.location.href = 'profile.html';
        })
        .catch(error => {
          alert(error.message);
        });
    });
  }

  // Sign Up
  document.getElementById('signup-btn')?.addEventListener('click', () => {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        userCredential.user.sendEmailVerification()
          .then(() => {
            alert("Please verify your email.");
            window.location.href = "index.html";
          });
      })
      .catch(error => {
        alert(error.message);
      });
  });

  // Reset Password
  document.getElementById('reset-btn')?.addEventListener('click', () => {
    const email = document.getElementById('reset-email').value;
    firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
        alert("Password reset email sent.");
      })
      .catch(error => {
        alert(error.message);
      });
  });

  // Profile Page
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      document.getElementById('user-name').textContent = user.displayName || "User";
      document.getElementById('user-email').textContent = user.email;
      document.getElementById('profile-pic').src = user.photoURL || "https://banner2.cleanpng.com/20171218/621/av2bwpcv3.webp";
    } else {
      window.location.href = "index.html";
    }
  });

  // Logout
  document.getElementById('logout-btn')?.addEventListener('click', () => {
    firebase.auth().signOut().then(() => {
      window.location.href = "index.html";
    });
  });
