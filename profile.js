// Firebase configuration
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
const profilePic = document.getElementById("profile-pic");
const profileName = document.getElementById("profile-name");
const dropdownMenu = document.getElementById("dropdown-menu");
const dropdownBtn = document.getElementById("dropdown-btn");
const logoutBtn = document.getElementById("logout-btn");
const changeNameModal = document.getElementById("change-name-modal");
const closeModalBtn = document.getElementById("close-modal-btn");
const saveNameBtn = document.getElementById("save-name-btn");
const newNameInput = document.getElementById("new-name-input");
const changeEmailModal = document.getElementById("change-email-modal");
const closeEmailModalBtn = document.getElementById("close-email-modal-btn");
const saveEmailBtn = document.getElementById("save-email-btn");
const newEmailInput = document.getElementById("new-email-input");

// Populate user data
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    profilePic.src = user.photoURL || "default-pic.png";
    profileName.textContent = user.displayName || "Anonymous User";

    // Update name
    saveNameBtn.addEventListener("click", () => {
      const newName = newNameInput.value.trim();
      user.updateProfile({ displayName: newName }).then(() => {
        profileName.textContent = newName;
        changeNameModal.style.display = "none";
      });
    });

    // Update email
    saveEmailBtn.addEventListener("click", () => {
      const newEmail = newEmailInput.value.trim();
      user.updateEmail(newEmail).then(() => {
        alert("Email updated successfully!");
        changeEmailModal.style.display = "none";
      });
    });

    // Logout
    logoutBtn.addEventListener("click", () => {
      firebase.auth().signOut().then(() => {
        window.location.href = "index.html";
      });
    });

    // Modal close
    closeModalBtn.addEventListener("click", () => {
      changeNameModal.style.display = "none";
    });

    closeEmailModalBtn.addEventListener("click", () => {
      changeEmailModal.style.display = "none";
    });
  } else {
    window.location.href = "index.html"; // Redirect if not logged in
  }
});

// Dropdown menu toggle
dropdownBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
});
