// register.js for static site (no backend)

document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('errorMessage');

  if (username && password) {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', username);
    window.location.href = 'index.html';
  } else {
    errorMessage.textContent = 'Please fill out all fields.';
    errorMessage.style.display = 'block';
  }
});
