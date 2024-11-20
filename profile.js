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

const user = firebase.auth().currentUser;

// Profile Info
const profilePic = document.getElementById("profile-pic");
const userName = document.getElementById("user-name");
const dropdownMenu = document.getElementById("dropdown-menu");
const changeNameBtn = document.getElementById("change-name-btn");
const changeEmailBtn = document.getElementById("change-email-btn");
const logoutBtn = document.getElementById("logout-btn");
const playGameBtn = document.getElementById("play-game-btn");
const gameContainer = document.getElementById("game-container");

// Set Profile Info
if (user) {
  userName.textContent = user.displayName || localStorage.getItem('userName') || 'User';
  profilePic.src = user.photoURL || 'https://banner2.cleanpng.com/20171218/621/av2bwpcv3.webp';
}

// Logout
logoutBtn.addEventListener("click", () => {
  firebase.auth().signOut().then(() => {
    window.location.href = 'index.html';
  }).catch(error => {
    console.error(error);
  });
});

// Change Name
changeNameBtn.addEventListener("click", () => {
  const newName = prompt("Enter new name:");
  if (newName) {
    user.updateProfile({ displayName: newName }).then(() => {
      userName.textContent = newName;
      localStorage.setItem('userName', newName);
      showNotification("Name updated!");
    }).catch(error => {
      console.error(error);
    });
  }
});

// Change Email
changeEmailBtn.addEventListener("click", () => {
  const newEmail = prompt("Enter new email:");
  if (newEmail) {
    user.updateEmail(newEmail).then(() => {
      showNotification("Email updated!");
    }).catch(error => {
      console.error(error);
    });
  }
});

// Play Game Button (opens the slot game)
playGameBtn.addEventListener("click", () => {
  gameContainer.style.display = "block"; // Show game iframe
});

// Show notification helper function
function showNotification(message) {
  alert(message); // Basic notification for now, can be customized
}
