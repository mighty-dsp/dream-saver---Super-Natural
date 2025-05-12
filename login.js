document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Basic validation
    if (!username || !password) {
        errorMessage.textContent = 'Both fields are required.';
        errorMessage.style.display = 'block';
        return;
    }

    // Hardcoded credentials (replace with your own)
    const validUsername = "ghosthunter";
    const validPassword = "demon123";

    if (username === validUsername && password === validPassword) {
        // Show success message or redirect
        document.body.innerHTML = `<h1>Welcome, ${username}!</h1><p>You’ve entered the Super Natural realm 👻</p>`;
    } else {
        errorMessage.textContent = 'Invalid username or password.';
        errorMessage.style.display = 'block';
    }
});
// login.js
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Replace with real authentication logic if needed
    if (username && password) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", username);
      window.location.href = "index.html";
    } else {
      document.getElementById("errorMessage").textContent = "Invalid login!";
    }
  });
  