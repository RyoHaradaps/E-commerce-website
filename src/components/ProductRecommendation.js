let recommendationsShown = false;

function initProductRecommendations() {
  const recommendationsElement = document.getElementById('product-recommendations');
  if (!recommendationsElement) return;
  
  // Get cart from localStorage
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  
  // Check if cart is empty or recommendations already shown
  if (cart.length === 0 || recommendationsShown) {
    recommendationsElement.innerHTML = '';
    return;
  }
  
  // Get product categories from cart
  const cartCategories = [...new Set(cart.map(item => item.category))];
  
  // Generate recommendations based on categories in cart
  let recommendedProducts = [];
  
  cartCategories.forEach(category => {
    // Get products in the same category that aren't in the cart
    const categoryProducts = products.filter(product => 
      product.category === category && 
      !cart.some(item => item.id === product.id)
    );
    
    // Sort by rating and take top 2 from each category
    const topProducts = categoryProducts
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 2);
    
    recommendedProducts = [...recommendedProducts, ...topProducts];
  });
  
  // Limit to 4 recommendations total
  recommendedProducts = recommendedProducts.slice(0, 4);
  
  // If no recommendations, don't show anything
  if (recommendedProducts.length === 0) {
    recommendationsElement.innerHTML = '';
    return;
  }
  
  // Mark recommendations as shown
  recommendationsShown = true;
  
  // Create recommendations container
  recommendationsElement.innerHTML = `
    <div class="product-recommendations">
      <div class="recommendations-header">
        <h3>Recommended for You</h3>
        <button class="close-recommendations" id="close-recommendations">
          <i class="fas fa-times"></i>
        </button>
      </div>
      
      <div class="recommendations-grid">
        ${recommendedProducts.map(product => `
          <div class="recommendation-item">
            <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';" />
            <div class="recommendation-details">
              <h4>${product.name}</h4>
              <p class="recommendation-price">$${product.price.toFixed(2)}</p>
              <button 
                class="recommendation-add" 
                data-product-id="${product.id}"
              >
                Add to Cart
              </button>
            </div>
          </div>
        `).join('')}
      </div>
      
      <a href="/products" class="recommendations-link" onclick="return navigateTo('/products')">
        View More Products
      </a>
    </div>
  `;
  
  // Add event listeners
  document.getElementById('close-recommendations').addEventListener('click', function() {
    recommendationsElement.innerHTML = '';
  });
  
  // Add event listeners to add-to-cart buttons
  document.querySelectorAll('.recommendation-add').forEach(button => {
    button.addEventListener('click', function() {
      const productId = parseInt(this.getAttribute('data-product-id'));
      addToCart(productId);
    });
  });
}

// Reset recommendations when cart is cleared
function resetRecommendations() {
  recommendationsShown = false;
}

// Add hook to reset recommendations when cart is emptied
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
