// auth.js
import supabase from './supabase';

const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("login-email");
const passwordInput = document.getElementById("login-password");
const loginBtn = document.getElementById("login-btn");
const errorMessage = document.getElementById("error-message-login");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    const { user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      errorMessage.textContent = `Error: ${error.message}`;
      errorMessage.style.display = "block";
      return;
    }

    window.location.href = "profile.html"; // Redirect to profile page
  } catch (error) {
    errorMessage.textContent = error.message;
    errorMessage.style.display = "block";
  }
});
