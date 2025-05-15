document.getElementById('login-form').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');
  
    // Client-side validation (for demo purposes)
    const validUsername = 'genetu';
    const validPassword = 'securepassword123';
  
    if (username === validUsername && password === validPassword) {
      localStorage.setItem('isLoggedIn', 'true');
      window.location.href = 'admin.html';
    } else {
      try {
        // Simulate server-side validation (replace with actual API call)
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        });
  
        if (response.ok) {
          localStorage.setItem('isLoggedIn', 'true');
          window.location.href = 'admin.html';
        } else {
          errorMessage.textContent = '❌ Invalid credentials. Please try again!';
        }
      } catch (error) {
        errorMessage.textContent = '❌ Login failed. Please try again later.';
      }
    }
  });
  
  // Toggle password visibility
  document.getElementById('toggle-password').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    this.textContent = isPassword ? 'Hide' : 'Show';
  });
  
  // Unauthorized access protection
  document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('admin.html') && localStorage.getItem('isLoggedIn') !== 'true') {
      window.location.href = 'login.html';
    }
  });