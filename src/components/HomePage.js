function renderHomePage() {
  const contentElement = document.getElementById('content');
  if (!contentElement) return;
  
  // Get featured products
  const featuredProducts = products.filter(product => product.featured);
  
  contentElement.innerHTML = `
    <div class="home-page">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-content">
          <h1>Welcome to STORENEX</h1>
          <p>Quality products at affordable prices. Shop with confidence.</p>
          <div class="hero-buttons">
            <a href="/products" class="primary-button" onclick="return navigateTo('/products')">Shop Now</a>
            <a href="/categories" class="secondary-button" onclick="return navigateTo('/categories')">View Categories</a>
          </div>
        </div>
      </section>

      <!-- Featured Products Section -->
      <section class="featured-products section">
        <div class="section-header">
          <h2>Featured Products</h2>
          <a href="/products" class="view-all" onclick="return navigateTo('/products')">View All</a>
        </div>
        <div class="products-grid">
          ${featuredProducts.map(product => renderProductCard(product)).join('')}
        </div>
      </section>

      <!-- Categories Section -->
      <section class="categories-section section">
        <div class="section-header">
          <h2>Shop by Category</h2>
          <a href="/categories" class="view-all" onclick="return navigateTo('/categories')">View All Categories</a>
        </div>
        <p class="category-subtitle">Find exactly what you're looking for by browsing our product categories</p>
        <div class="categories-grid">
          ${categories.slice(0, 4).map(category => renderCategorySection(category)).join('')}
        </div>
      </section>

      <!-- Featured Collections -->
      <section class="collections-section section">
        <div class="section-header">
          <h2>Featured Collections</h2>
        </div>
        <div class="collections-grid">
          ${collections.map(collection => renderCollectionCard(collection)).join('')}
        </div>
      </section>
    </div>
  `;
}

