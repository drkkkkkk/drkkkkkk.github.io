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

  // Password Reset
  document.getElementById('reset-btn').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent page refresh
    const email = document.getElementById('reset-email').value;
    firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
        alert("Password reset email sent.");
      })
      .catch(error => {
        alert(error.message);
      });
  });
