function renderCategorySection(category) {
  const { name, description, image } = category;
  
  // Add fallback image if the original one fails to load
  const fallbackImage = "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  
  return `
    <div class="category-section">
      <div class="category-image">
        <img src="${image}" alt="${name}" onerror="this.onerror=null; this.src='${fallbackImage}';" />
      </div>
      <div class="category-content">
        <h3 class="category-name">${name}</h3>
        <p class="category-description">${description}</p>
        <a href="/products?category=${name}" class="category-link" onclick="return navigateTo('/products?category=${name}')">
          Browse ${name} <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  `;
}
