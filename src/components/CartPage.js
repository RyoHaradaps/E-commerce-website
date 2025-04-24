async function fetchCart() {
  const token = localStorage.getItem('token');
  if (!token) {
    return [];
  }

  try {
    const response = await fetch('http://localhost:5000/api/cart', {
      headers: {
        Authorization: token,
      },
    });
    if (response.ok) {
      const cart = await response.json();
      return cart.items;
    } else {
      console.error('Failed to fetch cart:', await response.json());
      return [];
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
    return [];
  }
}

async function renderCartPage() {
  const contentElement = document.getElementById('content');
  if (!contentElement) return;

  const cart = await fetchCart();

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

  // Render cart items and summary
  // (Same as your existing implementation)
}
