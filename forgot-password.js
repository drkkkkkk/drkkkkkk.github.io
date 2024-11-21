// forgotpassword.js
import supabase from './supabase';

const forgotBtn = document.getElementById("forgot-btn");
const forgotEmailInput = document.getElementById("forgot-email-input");
const errorMessage = document.getElementById('forgot-error-message');
const successMessage = document.getElementById('forgot-success-message');

forgotBtn.addEventListener("click", async (event) => {
  event.preventDefault();

  const email = forgotEmailInput.value;

  if (!email) {
    errorMessage.textContent = "Please enter your email.";
    errorMessage.style.display = "block";
    return;
  }

  try {
    const { error } = await supabase.auth.api
      .resetPasswordForEmail(email);

    if (error) {
      errorMessage.textContent = error.message;
      errorMessage.style.display = "block";
      return;
    }

    successMessage.textContent = 'Check your email for the password reset link.';
    successMessage.style.display = 'block';
  } catch (error) {
    errorMessage.textContent = error.message;
    errorMessage.style.display = 'block';
  }
});
