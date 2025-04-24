function renderNavbar() {
  const cartCount = getCartCount();
  const navbar = document.getElementById('navbar');
  
  if (!navbar) return;
  
  navbar.innerHTML = `
    <div class="navbar">
      <div class="navbar-container">
        <a href="/home" class="logo" onclick="return navigateTo('/home')">STORENEX</a>
        
        <div class="mobile-menu-toggle" onclick="toggleMobileMenu()">
          <i class="fas fa-bars"></i>
        </div>
        
        <ul class="nav-links" id="nav-links">
          <li><a href="/home" onclick="return navigateTo('/home')">Home</a></li>
          <li><a href="/products" onclick="return navigateTo('/products')">Products</a></li>
          <li><a href="/categories" onclick="return navigateTo('/categories')">Categories</a></li>
          <li><a href="/about" onclick="return navigateTo('/about')">About</a></li>
        </ul>
        
        <div class="nav-icons">
          <a href="/cart" class="cart-icon" onclick="return navigateTo('/cart')">
            <i class="fas fa-shopping-cart"></i>
            ${cartCount > 0 ? `<span class="cart-count">${cartCount}</span>` : ''}
          </a>
          <button class="logout-button" onclick="handleLogout()">Logout</button>
        </div>
      </div>
    </div>
  `;
}

// Handle Logout
function handleLogout() {
  localStorage.removeItem('token'); // Remove the token from localStorage
  localStorage.setItem('isLoggedOut', 'true'); // Set a flag to indicate the user is logged out
  alert('You have been logged out.');
  navigateTo('/login'); // Redirect to the login page
}

// Toggle mobile menu
function toggleMobileMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active');
}

// Get cart count from localStorage
function getCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  return cart.length;
}

