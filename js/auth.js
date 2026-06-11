import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// አሁን በኮፒ ያመጣኸው 100% ትክክለኛው የቪክቶሪ ኦፊሴላዊ መለያ ኮድ
const firebaseConfig = {
  apiKey: "AIzaSyATMqgGUqQ3Hx0MdhNqUb-JQfJedD6Mov0",
  authDomain: "victory-surprise.firebaseapp.com",
  projectId: "victory-surprise",
  storageBucket: "victory-surprise.firebasestorage.app",
  messagingSenderId: "329749397287",
  appId: "1:329749397287:web:6eb5cab9c3cb470b2f3302",
  measurementId: "G-J6GN6FGSNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let isSignUpMode = false;

// በሁኔታዎች መካከል መቀያየሪያ (Login vs SignUp)
window.switchAuthMode = function(signUp) {
    isSignUpMode = signUp;
    const authTitle = document.getElementById('authTitle');
    const authBtn = document.getElementById('authBtn');
    const authToggleText = document.getElementById('authToggleText');
    
    if (signUp) {
        if(authTitle) authTitle.innerHTML = `<i class="fa-solid fa-user-plus"></i> አዲስ አካውንት መክፈቻ`;
        if(authBtn) authBtn.innerText = "አካውንት ክፈት (Sign Up)";
        if(authToggleText) authToggleText.innerHTML = `አካውንት አለዎት? <span onclick="switchAuthMode(false)">እዚህ ይግቡ (Login)</span>`;
    } else {
        if(authTitle) authTitle.innerHTML = `<i class="fa-solid fa-right-to-bracket"></i> ወደ አካውንት መግቢያ`;
        if(authBtn) authBtn.innerText = "ግባ (Login)";
        if(authToggleText) authToggleText.innerHTML = `አካውንት የለዎትም? <span onclick="switchAuthMode(true)">አዲስ ክፈት (Sign Up)</span>`;
    }
}

// ፎርም ሰብሚት ሲደረግ
const authForm = document.getElementById('authForm');
if (authForm) {
    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('authEmail').value;
        const password = document.getElementById('authPassword').value;

        if (isSignUpMode) {
            // አዲስ አካውንት መፍጠር
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    alert("🎉 አካውንትዎ በተሳካ ሁኔታ ተፈጥሯል!");
                })
                .catch((error) => {
                    alert("ስህተት ተከስቷል: " + error.message);
                });
        } else {
            // መግቢያ
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    alert("👋 እንኳን ደህና መጡ! በተሳካ ሁኔታ ገብተዋል።");
                })
                .catch((error) => {
                    alert("ስህተት: ኢሜይል ወይም ፓስወርድ አልተገኘም!");
                });
        }
    });
}

// ተጠቃሚው መግባቱን ወይም መውጣቱን የሚከታተል (State Observer)
onAuthStateChanged(auth, (user) => {
    const authBox = document.getElementById('authBox');
    const profileCard = document.getElementById('profileCard');
    const userEmailDisplay = document.getElementById('userEmailDisplay');

    if (user) {
        if(authBox) authBox.style.display = 'none';
        if(profileCard) profileCard.style.display = 'block';
        if(userEmailDisplay) userEmailDisplay.innerText = user.email;
    } else {
        if(authBox) authBox.style.display = 'block';
        if(profileCard) profileCard.style.display = 'none';
    }
});

// ከአካውንት መውጫ
window.handleLogout = function() {
    signOut(auth).then(() => {
        alert("ከአካውንትዎ ወጥተዋል።");
    }).catch((error) => {
        alert("መውጣት አልተቻለም!");
    });
}
