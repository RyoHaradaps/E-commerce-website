document.addEventListener('DOMContentLoaded', () => {
  // Initialize the app
  initApp();
});

function initApp() {
  // Determine which page to render based on path
  const path = window.location.pathname;

  // Clear the main content area
  const contentElement = document.getElementById('content');
  if (contentElement) {
    contentElement.innerHTML = '';
  }

  // Check if the current page is login or register
  const isAuthPage = path === '/' || path.includes('/login') || path.includes('/register');

  // Render the header only if it's not an auth page
  if (!isAuthPage) {
    renderNavbar();
  }

  // Render the appropriate page
  if (path === '/' || path === '/login') {
    renderLoginPage(); // Default to login page
  } else if (path.includes('/register')) {
    renderRegisterPage();
  } else if (path.includes('/home')) {
    renderHomePage(); // Render the home page for /home
  } else if (path.includes('/products')) {
    renderProductsPage();
  } else if (path.includes('/categories')) {
    renderCategoriesPage();
  } else if (path.includes('/about')) {
    renderAboutPage();
  } else if (path.includes('/cart')) {
    renderCartPage();
  }

  // Render the footer only if it's not an auth page
  if (!isAuthPage) {
    renderFooter();
  }

  // Initialize the chat bot
  if (!isAuthPage) {
    initChatBot();
  }

  // Initialize recommendations if there are items in cart
  if (!isAuthPage) {
    initProductRecommendations();
  }
}

// Setup navigation
function navigateTo(path) {
  window.history.pushState({}, path, window.location.origin + path);
  initApp(); // Reinitialize the app to render the correct page
  return false; // Prevent default link behavior
}

// Handle back/forward navigation
window.onpopstate = function () {
  initApp();
};