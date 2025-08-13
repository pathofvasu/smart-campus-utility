function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  if (!user || !pass) {
    errorMsg.textContent = "Please fill in all fields.";
    return;
  }

  if (user === "admin" && pass === "1234") {
    window.location.href = "admin-dashboard.html";
  } else {
    errorMsg.textContent = "Invalid username or password.";
  }
}
