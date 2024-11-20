<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Advent Calendar - Login</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h2>Login</h2>
    <input type="email" id="login-email" placeholder="Email">
    <input type="password" id="login-password" placeholder="Password">
    <button class="btn" id="login-btn">Login</button>
    <button class="btn google-btn" id="google-login-btn">
      <img src="favicon.ico" alt="Google" class="google-icon"> Login with Google
    </button>
    <a href="signup.html">Don't have an account? Sign up</a>
    <a href="#" class="forgot-password-link" id="forgot-password">Forgot Password?</a>
  </div>

  <!-- Firebase SDK -->
  <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js"></script>

  <!-- Custom Script -->
  <script src="script.js"></script>
</body>
</html>
