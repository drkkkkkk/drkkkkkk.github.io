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

  // Profile Page
  firebase.auth().onAuthStateChanged(user => {
    if (!user) {
      window.location.href = "index.html"; // Redirect to login if no user
    } else {
      document.getElementById('user-name').textContent = user.displayName || "User";
      document.getElementById('user-email').textContent = user.email;
      document.getElementById('profile-pic').src = user.photoURL || "https://banner2.cleanpng.com/20171218/621/av2bwpcv3.webp";
    }
  });

  // Logout Functionality
  document.getElementById('logout-btn').addEventListener('click', () => {
    firebase.auth().signOut().then(() => {
      window.location.href = "index.html"; // Redirect to login after logout
    });
  });
