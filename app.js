// Import necessary Firebase modules from Firebase SDK v9
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.24.0/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.24.0/firebase-auth.js";
import { getFirestore, collection, getDocs, doc, updateDoc } from "https://www.gstatic.com/firebasejs/9.24.0/firebase-firestore.js";

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
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

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
async function loadUsers() {
  const userTableBody = document.querySelector("#userTable tbody");
  userTableBody.innerHTML = ""; // Clear existing rows

  try {
    const querySnapshot = await getDocs(collection(firestore, "users"));
    querySnapshot.forEach((doc) => {
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
  } catch (error) {
    console.error("Error loading users:", error);
    alert("Failed to load users. Check your network and Firestore configuration.");
  }
}

// Ban User
async function banUser(userId) {
  try {
    const userRef = doc(firestore, "users", userId);
    await updateDoc(userRef, {
      banned: true
    });
    alert("User has been banned.");
    loadUsers();
  } catch (error) {
    console.error("Error banning user:", error);
  }
}

// Unban User
async function unbanUser(userId) {
  try {
    const userRef = doc(firestore, "users", userId);
    await updateDoc(userRef, {
      banned: false
    });
    alert("User has been unbanned.");
    loadUsers();
  } catch (error) {
    console.error("Error unbanning user:", error);
  }
}

// Send Reset Password Link
async function sendResetLink(email) {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent.");
  } catch (error) {
    console.error("Error sending reset password link:", error);
    alert("Failed to send reset link. Check the email and try again.");
  }
}
