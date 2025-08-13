function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  if (!user || !pass) {
    errorMsg.textContent = "Please fill in all fields.";
    return;
  }

  // Example login validation
  if (user === "faculty" && pass === "1234") {
    window.location.href = "faculty-dashboard.html";
  } else {
    errorMsg.textContent = "Invalid Faculty ID or password.";
  }
}
