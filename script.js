// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCF35CQr_6s6nI2W59HEvPWDH1dZOlxgRs",
  authDomain: "signup-page-2a58f.firebaseapp.com",
  projectId: "signup-page-2a58f",
  storageBucket: "signup-page-2a58f.firebasestorage.app",
  messagingSenderId: "150901596981",
  appId: "1:150901596981:web:6bdce5df55e35de3ed227c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Email Signup
document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        alert("Signup Successful!");
        window.location.href = "dashboard.html";
    })
    .catch((error) => {
        alert(error.message);
    });
});

// Google Signup
window.googleSignup = function () {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
    .then(() => {
        window.location.href = "dashboard.html";
    })
    .catch((error) => {
        alert(error.message);
    });
};

// Forgot Password
window.forgotPassword = function () {
    const email = document.getElementById("email").value;

    if (email === "") {
        alert("Please enter your email first.");
        return;
    }

    sendPasswordResetEmail(auth, email)
    .then(() => {
        alert("Password reset email sent.");
    })
    .catch((error) => {
        alert(error.message);
    });
};
// Login
const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Login Successful!");
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            alert(error.message);
        });

    });

}