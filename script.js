// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// 🔥 DÁN ĐOẠN firebaseConfig của bạn ở đây:
const firebaseConfig = {
  apiKey: "AIzaSyD-OBTslLFf1Y6Myn42lQP81KdE0zN5m90",
  authDomain: "doni-815d9.firebaseapp.com",
  projectId: "doni-815d9",
  storageBucket: "doni-815d9.firebasestorage.app",
  messagingSenderId: "172348872329",
  appId: "1:172348872329:web:4f36821f5935e3047e1858"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Chuyển giữa form
window.showRegister = function() {
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById('registerForm').classList.remove('hidden');
}

window.showLogin = function() {
  document.getElementById('registerForm').classList.add('hidden');
  document.getElementById('loginForm').classList.remove('hidden');
}

// Đăng ký
window.register = function() {
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => alert('✅ Đăng ký thành công!'))
    .catch(err => alert('❌ ' + err.message));
}

// Đăng nhập
window.login = function() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => alert('✅ Đăng nhập thành công!'))
    .catch(err => alert('❌ ' + err.message));
}
