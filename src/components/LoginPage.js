function renderLoginPage() {
  const contentElement = document.getElementById('content');
  if (!contentElement) return;

  contentElement.innerHTML = `
    <div class="auth-page">
      <h1>Login</h1>
      <form id="login-form" class="auth-form">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" required />
        
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" required />
        
        <button type="submit" class="primary-button">Login</button>
      </form>
      <p>Don't have an account? <a href="/register" onclick="return navigateTo('/register')">Register here</a></p>
    </div>
  `;

  document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token); // Save token for authentication
        alert('Login successful!');
        navigateTo('/home'); // Redirect to home page
        renderHomePage(); // Render the home page
      } else {
        alert(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('An error occurred. Please try again.');
    }
  });
}