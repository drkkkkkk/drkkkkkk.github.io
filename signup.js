// signup.js
import supabase from './supabase';

const signupBtn = document.getElementById("signup-btn");
const signupEmailInput = document.getElementById("signup-email");
const signupPasswordInput = document.getElementById("signup-password");
const errorMessage = document.getElementById('error-message');
const successMessage = document.getElementById('success-message');

signupBtn.addEventListener("click", async (event) => {
  event.preventDefault();

  const email = signupEmailInput.value;
  const password = signupPasswordInput.value;

  if (!email || !password) {
    errorMessage.textContent = "Please fill in all fields.";
    errorMessage.style.display = "block";
    return;
  }

  try {
    // Create user with email and password
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      errorMessage.textContent = error.message;
      errorMessage.style.display = "block";
      return;
    }

    successMessage.textContent = 'Please check your email for the verification link.';
    successMessage.style.display = 'block';
    setTimeout(() => {
      window.location.href = 'index.html';  // Redirect to login page
    }, 3000);
  } catch (error) {
    errorMessage.textContent = error.message;
    errorMessage.style.display = "block";
  }
});
