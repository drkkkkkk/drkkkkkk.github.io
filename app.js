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
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

// Encrypted Login Details
const loginDetails = {
  username: "ROOT",
  password: "fOlta0pzr9" // Replace with secure encryption in production
};

// Login Logic
document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const enteredUsername = document.getElementById("username").value;
  const enteredPassword = document.getElementById("password").value;

  if (enteredUsername === loginDetails.username && enteredPassword === loginDetails.password) {
    alert("Login successful!");
    document.getElementById("login-form").style.display = "none";
    document.getElementById("admin-panel").style.display = "block";
    loadUsers(); // Load Firestore data
  } else {
    alert("Invalid username or password.");
  }
});

// Load Users from Firestore
function loadUsers() {
  const userTableBody = document.querySelector("#userTable tbody");
  userTableBody.innerHTML = ""; // Clear existing rows

  firestore.collection("users").get().then((snapshot) => {
    snapshot.forEach((doc) => {
      const user = doc.data();
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${user.email}</td>
        <td>${user.ip || "N/A"}</td>
        <td>${user.username}</td>
        <td>
          <button onclick="banUser('${doc.id}')">Ban</button>
          <button onclick="unbanUser('${doc.id}')">Unban</button>
          <button onclick="sendResetLink('${user.email}')">Reset Password</button>
        </td>`;
      userTableBody.appendChild(row);
    });
  }).catch((error) => {
    console.error("Error loading users:", error);
    alert("Failed to load users. Check your network and Firestore configuration.");
  });
}

// Ban User
function banUser(userId) {
  firestore.collection("users").doc(userId).update({
    banned: true
  }).then(() => {
    alert("User has been banned.");
    loadUsers();
  }).catch((error) => {
    console.error("Error banning user:", error);
  });
}

// Unban User
function unbanUser(userId) {
  firestore.collection("users").doc(userId).update({
    banned: false
  }).then(() => {
    alert("User has been unbanned.");
    loadUsers();
  }).catch((error) => {
    console.error("Error unbanning user:", error);
  });
}

// Send Reset Password Link
function sendResetLink(email) {
  auth.sendPasswordResetEmail(email).then(() => {
    alert("Password reset link sent.");
  }).catch((error) => {
    console.error("Error sending reset password link:", error);
    alert("Failed to send reset link. Check the email and try again.");
  });
}
