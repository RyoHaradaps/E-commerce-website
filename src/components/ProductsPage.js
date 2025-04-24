function renderProductsPage() {
  const contentElement = document.getElementById('content');
  if (!contentElement) return;
  
  // Get query params
  const queryParams = new URLSearchParams(window.location.search);
  const categoryParam = queryParams.get('category');
  
  // Set initial state
  let filteredProducts = [...products];
  let currentPage = 1;
  let searchTerm = '';
  let sortOption = 'featured';
  let selectedCategory = categoryParam || 'All Categories';
  
  const productsPerPage = 6;
  const categories = ['All Categories', ...new Set(products.map(product => product.category))];
  
  // Render the page
  contentElement.innerHTML = `
    <div class="products-page">
      <div class="products-header">
        <h1>All Products</h1>
      </div>
      
      <div class="products-filters">
        <div class="filter">
          <label>Category</label>
          <div class="select-wrapper">
            <select id="category-filter">
              ${categories.map(category => `
                <option value="${category}" ${category === selectedCategory ? 'selected' : ''}>
                  ${category}
                </option>
              `).join('')}
            </select>
            <i class="fas fa-chevron-down"></i>
          </div>
        </div>
        
        <div class="filter">
          <label>Sort By</label>
          <div class="select-wrapper">
            <select id="sort-filter">
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
            <i class="fas fa-chevron-down"></i>
          </div>
        </div>
        
        <div class="search-bar">
          <i class="fas fa-search"></i>
          <input 
            type="text" 
            id="product-search"
            placeholder="Search products..." 
          />
        </div>
      </div>
      
      <div class="products-grid" id="products-grid">
        <!-- Products will be rendered here -->
      </div>
      
      <div class="pagination" id="pagination">
        <!-- Pagination will be rendered here -->
      </div>
    </div>
  `;
  
  // Initialize the products grid with filtered products
  updateProductsGrid();
  
  // Add event listeners
  document.getElementById('category-filter').addEventListener('change', function() {
    selectedCategory = this.value;
    updateProductsGrid();
  });
  
  document.getElementById('sort-filter').addEventListener('change', function() {
    sortOption = this.value;
    updateProductsGrid();
  });
  
  document.getElementById('product-search').addEventListener('input', function() {
    searchTerm = this.value;
    updateProductsGrid();
  });
  
  // Function to update products grid based on filters
  function updateProductsGrid() {
    // Filter products based on category and search term
    let filtered = [...products];
    
    // Apply category filter
    if (selectedCategory !== 'All Categories') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply sorting
    switch (sortOption) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default: // featured
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }
    
    filteredProducts = filtered;
    currentPage = 1; // Reset to first page on filter change
    
    renderFilteredProducts();
    renderPagination();
  }
  
  // Function to render filtered products with pagination
  function renderFilteredProducts() {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;
    
    // Calculate pagination
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    
    if (currentProducts.length > 0) {
      productsGrid.innerHTML = currentProducts.map(product => renderProductCard(product)).join('');
    } else {
      productsGrid.innerHTML = `
        <div class="no-products">
          <p>No products found. Try adjusting your filters.</p>
        </div>
      `;
    }
  }
  
  // Function to render pagination controls
  function renderPagination() {
    const paginationElement = document.getElementById('pagination');
    if (!paginationElement) return;
    
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    
    if (totalPages <= 1) {
      paginationElement.innerHTML = '';
      return;
    }
    
    let paginationHtml = `
      <button 
        class="pagination-button"
        onclick="paginateTo(${currentPage - 1})"
        ${currentPage === 1 ? 'disabled' : ''}
      >
        Previous
      </button>
    `;
    
    for (let i = 1; i <= totalPages; i++) {
      paginationHtml += `
        <button
          class="pagination-number ${currentPage === i ? 'active' : ''}"
          onclick="paginateTo(${i})"
        >
          ${i}
        </button>
      `;
    }
    
    paginationHtml += `
      <button 
        class="pagination-button"
        onclick="paginateTo(${currentPage + 1})"
        ${currentPage === totalPages ? 'disabled' : ''}
      >
        Next
      </button>
    `;
    
    paginationElement.innerHTML = paginationHtml;
  }
  
  // Global pagination function (needs to be accessible from HTML)
  window.paginateTo = function(pageNumber) {
    if (pageNumber < 1 || pageNumber > Math.ceil(filteredProducts.length / productsPerPage)) {
      return;
    }
    
    currentPage = pageNumber;
    renderFilteredProducts();
    renderPagination();
    
    // Scroll to the top of the products grid
    document.getElementById('products-grid').scrollIntoView({ behavior: 'smooth' });
  };
  
  // Initialize with first page
  renderFilteredProducts();
  renderPagination();
}

