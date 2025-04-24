function renderFooter() {
  const currentYear = new Date().getFullYear();
  const footerElement = document.getElementById('footer');
  
  if (!footerElement) return;
  
  footerElement.innerHTML = `
    <div class="footer">
      <div class="footer-container">
        <div class="footer-section">
          <h3>Shop</h3>
          <ul>
            <li><a href="/products" onclick="return navigateTo('/products')">All Products</a></li>
            <li><a href="/categories" onclick="return navigateTo('/categories')">Categories</a></li>
            <li><a href="/new-arrivals" onclick="return navigateTo('/new-arrivals')">New Arrivals</a></li>
            <li><a href="/discounts" onclick="return navigateTo('/discounts')">Discounts</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="/help" onclick="return navigateTo('/help')">Help Center</a></li>
            <li><a href="/contact" onclick="return navigateTo('/contact')">Contact Us</a></li>
            <li><a href="/shipping" onclick="return navigateTo('/shipping')">Shipping Info</a></li>
            <li><a href="/returns" onclick="return navigateTo('/returns')">Returns</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="/about" onclick="return navigateTo('/about')">About Us</a></li>
            <li><a href="/careers" onclick="return navigateTo('/careers')">Careers</a></li>
            <li><a href="/blog" onclick="return navigateTo('/blog')">Blog</a></li>
            <li><a href="/press" onclick="return navigateTo('/press')">Press</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><a href="/terms" onclick="return navigateTo('/terms')">Terms of Service</a></li>
            <li><a href="/privacy" onclick="return navigateTo('/privacy')">Privacy Policy</a></li>
            <li><a href="/cookie" onclick="return navigateTo('/cookie')">Cookie Policy</a></li>
            <li><a href="/compliance" onclick="return navigateTo('/compliance')">Compliance</a></li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>© ${currentYear} STORENEX. All rights reserved.</p>
      </div>
    </div>
  `;
}

