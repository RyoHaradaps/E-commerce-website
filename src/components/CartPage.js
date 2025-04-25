function renderCartPage() {
  const contentElement = document.getElementById('content');
  if (!contentElement) return;
  
  // Get cart from localStorage
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  
  // Calculate subtotal
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  
  // Set shipping (free over $50)
  const shipping = subtotal > 50 ? 0 : 5.99;
  
  // Calculate total
  const total = subtotal + shipping;
  
  if (cart.length === 0) {
    contentElement.innerHTML = `
      <div class="cart-page empty">
        <div class="cart-header">
          <h1>Your Cart</h1>
        </div>
        <div class="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Add some products to your cart to see them here.</p>
          <a href="/products" class="primary-button" onclick="return navigateTo('/products')">
            Continue Shopping
          </a>
        </div>
      </div>
    `;
    return;
  }
  
  contentElement.innerHTML = `
    <div class="cart-page">
      <div class="cart-header">
        <h1>Your Cart</h1>
      </div>
      
      <div class="cart-content">
        <div class="cart-items">
          ${cart.map((item) => `
            <div class="cart-item" data-id="${item.id}">
              <div class="item-image">
                <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';" />
              </div>
              <div class="item-details">
                <h3>${item.name}</h3>
                <p class="item-category">${item.category}</p>
              </div>
              <div class="item-price">$${item.price.toFixed(2)}</div>
              <button 
                class="remove-item" 
                onclick="removeFromCart(${item.id})"
              >
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `).join('')}
        </div>
        
        <div class="cart-summary">
          <h2>Order Summary</h2>
          <div class="summary-row">
            <span>Subtotal</span>
            <span>$${subtotal.toFixed(2)}</span>
          </div>
          <div class="summary-row">
            <span>Shipping</span>
            <span>${shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
          </div>
          <div class="summary-total">
            <span>Total</span>
            <span>$${total.toFixed(2)}</span>
          </div>
          <button class="checkout-button">
            Proceed to Checkout
          </button>
          <button class="clear-cart-button" onclick="clearCart()">
            Clear Cart
          </button>
          <a href="/products" class="continue-shopping" onclick="return navigateTo('/products')">
            Continue Shopping
          </a>
        </div>
      </div>
    </div>
  `;
}

// Remove item from cart
function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  
  // Filter out the item to remove
  cart = cart.filter(item => item.id !== productId);
  
  // Update cart in localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
  
  // Update UI
  renderCartPage();
  renderNavbar();
  
  // If cart is empty, reset recommendations
  if (cart.length === 0) {
    resetRecommendations();
  }
  
  // Update recommendations
  initProductRecommendations();
  
  // Show a notification
  showToast('Item removed from cart');
}

// Clear cart
function clearCart() {
  localStorage.setItem('cart', '[]');
  resetRecommendations();
  renderCartPage();
  renderNavbar();
  showToast('Cart cleared');
}
