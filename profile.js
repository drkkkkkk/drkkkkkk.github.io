// profile.js
import supabase from './supabase';

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

supabase.auth.onAuthStateChange((event, session) => {
  const user = session?.user;

  if (user) {
    profilePic.src = user.user_metadata.avatar_url || "default-pic.png";
    profileName.textContent = user.user_metadata.full_name || "Anonymous User";

    // Update name
    saveNameBtn.addEventListener("click", async () => {
      const newName = newNameInput.value.trim();
      const { data, error } = await supabase.auth.update({
        data: { full_name: newName }
      });

      if (error) {
        alert(`Error updating name: ${error.message}`);
        return;
      }

      profileName.textContent = newName;
      changeNameModal.style.display = "none";
    });

    // Update email
    saveEmailBtn.addEventListener("click", async () => {
      const newEmail = newEmailInput.value.trim();
      const { error } = await supabase.auth.update({ email: newEmail });

      if (error) {
        alert(`Error updating email: ${error.message}`);
        return;
      }

      alert("Email updated successfully!");
      changeEmailModal.style.display = "none";
    });

    // Logout
    logoutBtn.addEventListener("click", async () => {
      await supabase.auth.signOut();
      window.location.href = "index.html";
    });
  } else {
    window.location.href = "index.html"; // Redirect to login page if not authenticated
  }
});

// Dropdown menu toggle
dropdownBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
});
