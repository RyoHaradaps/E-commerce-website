function renderCategoriesPage() {
  const contentElement = document.getElementById('content');
  if (!contentElement) return;
  
  contentElement.innerHTML = `
    <div class="categories-page">
      <div class="categories-header">
        <h1>Shop by Category</h1>
        <p>Find exactly what you're looking for by browsing our product categories</p>
      </div>
      
      <div class="categories-grid large">
        ${categories.map(category => renderCategorySection(category)).join('')}
      </div>
    </div>
  `;
}
