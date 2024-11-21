const firebaseConfig = {
  apiKey: "AIzaSyAV3IOUukiU3a_7coFFKX7DNHHJ8uMswCo",
  authDomain: "drks-debadges.firebaseapp.com",
  projectId: "99406338166",
  storageBucket: "drks-debadges.appspot.com",
  messagingSenderId: "99406338166",
  appId: "1:99406338166:web:9cb98d74ed0c7856e5a757"
};

firebase.initializeApp(firebaseConfig);

const forgotBtn = document.getElementById("forgot-btn");
const forgotEmailInput = document.getElementById("forgot-email-input");
const errorMessage = document.getElementById('forgot-error-message');
const successMessage = document.getElementById('forgot-success-message');

forgotBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const email = forgotEmailInput.value;

  if (!email) {
    errorMessage.textContent = "Please enter your email.";
    errorMessage.style.display = "block";
    return;
  }


  firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      successMessage.textContent = 'Check your email for the password reset link.';
      successMessage.style.display = 'block';
    })
    .catch((error) => {
      errorMessage.textContent = error.message;
      errorMessage.style.display = 'block';
    });
});