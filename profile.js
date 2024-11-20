import { auth } from './firebase-init.js';
import { onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js';

const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");
const logoutBtn = document.getElementById("logout-btn");

onAuthStateChanged(auth, (user) => {
  if (user) {
    userName.textContent = user.displayName || "User";
    userEmail.textContent = user.email;
  } else {
    window.location.href = "index.html"; // Redirect to login if not authenticated
  }
});

logoutBtn.addEventListener("click", () => {
  signOut(auth).then(() => {
    window.location.href = 'index.html'; // Redirect to login on logout
  });
});
