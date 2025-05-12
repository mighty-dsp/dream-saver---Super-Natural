// auth.js
(function () {
    const loggedIn = localStorage.getItem("isLoggedIn");
  
    // If not logged in and not on login/register page, redirect to login
    const isAuthPage = window.location.pathname.includes("loginpage.html") || window.location.pathname.includes("register.html");
    
    if (!loggedIn && !isAuthPage) {
      window.location.href = "loginpage.html";
    }
  })();
  