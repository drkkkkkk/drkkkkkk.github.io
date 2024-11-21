const firebaseConfig = {
  apiKey: "AIzaSyAV3IOUukiU3a_7coFFKX7DNHHJ8uMswCo",
  authDomain: "drks-debadges.firebaseapp.com",
  projectId: "99406338166",
  storageBucket: "drks-debadges.appspot.com",
  messagingSenderId: "99406338166",
  appId: "1:99406338166:web:9cb98d74ed0c7856e5a757"
};

firebase.initializeApp(firebaseConfig);

const profilePic = document.getElementById('profile-pic');
const profileName = document.getElementById('profile-name');
const profileEmail = document.getElementById('profile-email');
const dropdownBtn = document.getElementById('dropdown-btn');
const dropdownMenu = document.getElementById('dropdown-menu');
const logoutBtn = document.getElementById('logout-btn');
const changeNameBtn = document.getElementById('change-name-btn');
const changeEmailBtn = document.getElementById('change-email-btn');
const saveNameBtn = document.getElementById('save-name-btn');
const newNameInput = document.getElementById('new-name-input');
const changeNameModal = document.getElementById('change-name-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const saveEmailBtn = document.getElementById('save-email-btn');
const newEmailInput = document.getElementById('new-email-input');
const changeEmailModal = document.getElementById('change-email-modal');
const closeEmailModalBtn = document.getElementById('close-email-modal-btn');

const user = firebase.auth().currentUser;

if (user) {
  profileName.textContent = user.displayName || 'User';
  profileEmail.textContent = user.email || 'No email found';
  profilePic.src = user.photoURL || 'https://banner2.cleanpng.com/20171218/621/av2bwpcv3.webp';
}

dropdownBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});

logoutBtn.addEventListener('click', () => {
  firebase.auth().signOut().then(() => {
    window.location.href = 'index.html';
  });
});

// Change Name
changeNameBtn.addEventListener('click', () => {
  changeNameModal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
  changeNameModal.style.display = 'none';
});

saveNameBtn.addEventListener('click', () => {
  const newName = newNameInput.value;
  user.updateProfile({
    displayName: newName
  }).then(() => {
    profileName.textContent = newName;
    localStorage.setItem('userName', newName);
    changeNameModal.style.display = 'none';
  }).catch(error => {
    alert(error.message);
  });
});

// Change Email
changeEmailBtn.addEventListener('click', () => {
  changeEmailModal.style.display = 'block';
});

closeEmailModalBtn.addEventListener('click', () => {
  changeEmailModal.style.display = 'none';
});

saveEmailBtn.addEventListener('click', () => {
  const newEmail = newEmailInput.value;
  user.updateEmail(newEmail).then(() => {
    profileEmail.textContent = newEmail;
    alert('Email updated successfully');
    changeEmailModal.style.display = 'none';
  }).catch(error => {
    alert(error.message);
  });
});
