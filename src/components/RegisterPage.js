function renderRegisterPage() {
    const contentElement = document.getElementById('content');
    if (!contentElement) return;
  
    contentElement.innerHTML = `
      <div class="auth-page">
        <h1>Register</h1>
        <form id="register-form" class="auth-form">
          <label for="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" required />
          
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
          
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />
          
          <button type="submit" class="primary-button">Register</button>
        </form>
        <p>Already have an account? <a href="/login" onclick="return navigateTo('/login')">Login here</a></p>
      </div>
    `;
  
    document.getElementById('register-form').addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      try {
        const response = await fetch('http://localhost:5000/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          alert('Registration successful! Please log in.');
          navigateTo('/login');
        } else {
          alert(data.message || 'Registration failed. Please try again.');
        }
      } catch (error) {
        console.error('Error registering:', error);
        alert('An error occurred. Please try again.');
      }
    });
  }