function renderCollectionCard(collection) {
  const { name, image, backgroundColor } = collection;
  const fallbackImage = "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  
  return `
    <div class="collection-card" style="background-color: ${backgroundColor}">
      <div class="collection-content">
        <h3 class="collection-name">${name}</h3>
        <a href="/collection/${name.replace(/\s+/g, '-').toLowerCase()}" class="collection-button" onclick="return navigateTo('/collection/${name.replace(/\s+/g, '-').toLowerCase()}')">
          View Collection
        </a>
      </div>
      <div class="collection-image">
        <img src="${image}" alt="${name}" onerror="this.onerror=null; this.src='${fallbackImage}';" />
      </div>
    </div>
  `;
}
