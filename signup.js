const firebaseConfig = {
  apiKey: "AIzaSyAV3IOUukiU3a_7coFFKX7DNHHJ8uMswCo",
  authDomain: "drks-debadges.firebaseapp.com",
  projectId: "99406338166",
  storageBucket: "drks-debadges.appspot.com",
  messagingSenderId: "99406338166",
  appId: "1:99406338166:web:9cb98d74ed0c7856e5a757"
};

firebase.initializeApp(firebaseConfig);

const signupBtn = document.getElementById("signup-btn");
const signupEmailInput = document.getElementById("signup-email");
const signupPasswordInput = document.getElementById("signup-password");
const errorMessage = document.getElementById('error-message');
const successMessage = document.getElementById('success-message');

signupBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const email = signupEmailInput.value;
  const password = signupPasswordInput.value;

  if (!email || !password) {
    errorMessage.textContent = "Please fill in all fields.";
    errorMessage.style.display = "block";
    return;
  }

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      user.sendEmailVerification()
        .then(() => {
          successMessage.textContent = 'Please check your email for the verification link.';
          successMessage.style.display = 'block';
          setTimeout(() => {
            window.location.href = 'index.html';
          }, 3000);
        })
        .catch((error) => {
          errorMessage.textContent = error.message;
          errorMessage.style.display = 'block';
        });

    })
    .catch((error) => {
      errorMessage.textContent = error.message;
      errorMessage.style.display = 'block';
    });
});
