function renderProductCard(product) {
  const { id, name, price, category, rating, image } = product;
  const fallbackImage = "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

  // Generate rating stars
  const renderStars = (rating) => {
    let starsHtml = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      starsHtml += '<i class="fas fa-star star"></i>';
    }

    if (hasHalfStar) {
      starsHtml += '<i class="fas fa-star-half-alt star"></i>';
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      starsHtml += '<i class="far fa-star star"></i>';
    }

    return starsHtml;
  };

  return `
    <div class="product-card">
      <div class="product-image">
        <img src="${image}" alt="${name}" onerror="this.onerror=null; this.src='${fallbackImage}';" />
      </div>
      <div class="product-category">${category.toUpperCase()}</div>
      <h3 class="product-name">${name}</h3>
      <div class="product-price">$${price.toFixed(2)}</div>
      <div class="product-rating">
        <div class="stars">${renderStars(rating)}</div>
        <span class="rating-number">${rating}</span>
      </div>
      <button class="add-to-cart-btn" onclick="addToCart(${id})">
        Add to Cart
      </button>
    </div>
  `;
}

// Add to cart function
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  
  // Reset recommendation status when adding to cart
  resetRecommendations();
  
  // Update cart count in navbar
  renderNavbar();
  
  // Initialize recommendations
  initProductRecommendations();
  
  // Show a small notification
  showToast(`${product.name} added to cart!`);
}

// Toast notification
function showToast(message) {
  // Create toast element if it doesn't exist
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
    
    // Add the styles if not already in the CSS
    if (!document.getElementById('toast-styles')) {
      const style = document.createElement('style');
      style.id = 'toast-styles';
      style.innerHTML = `
        .toast-notification {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: var(--primary-color);
          color: white;
          padding: 1rem;
          border-radius: 4px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          z-index: 9999;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .toast-notification.show {
          opacity: 1;
        }
      `;
      document.head.appendChild(style);
    }
  }
  
  // Set message and show the toast
  toast.textContent = message;
  toast.classList.add('show');
  
  // Hide after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}
