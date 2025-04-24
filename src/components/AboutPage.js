function renderAboutPage() {
  const contentElement = document.getElementById('content');
  if (!contentElement) return;
  
  contentElement.innerHTML = `
    <div class="about-page">
      <div class="about-header">
        <h1>Our Story</h1>
        <p>Learn about STORENEX and our mission to provide quality products at affordable prices.</p>
      </div>
      
      <div class="about-section">
        <div class="about-image">
          <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="About STORENEX" />
        </div>
        <div class="about-content">
          <h2>Who We Are</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore non recusandae natus voluptatum quaerat porro doloribus, omnis corporis asperiores hic sint nulla dolores dolorum deleniti laborum ullam et. Veritatis, dicta.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente tenetur aliquam quasi doloribus nihil architecto quaeruntque, consectetur animi urna ut veritatis necessitatibus, distinctio adipisci nostrum. Ad tempore quia nequitia reiciendis.
          </p>
        </div>
      </div>
      
      <div class="values-section">
        <h2>Our Values</h2>
        <div class="values-grid">
          <div class="value-card">
            <h3>Quality</h3>
            <p>We never compromise on quality. Every product we sell undergoes rigorous testing to ensure it meets our high standards.</p>
          </div>
          <div class="value-card">
            <h3>Affordability</h3>
            <p>We believe that quality products shouldn't break the bank. We work hard to offer the best prices without sacrificing quality.</p>
          </div>
          <div class="value-card">
            <h3>Customer Service</h3>
            <p>Our customers are at the heart of everything we do. We're committed to providing exceptional service and support.</p>
          </div>
          <div class="value-card">
            <h3>Innovation</h3>
            <p>We're always looking for new and innovative products to add to our catalog, ensuring our customers have access to the latest and greatest.</p>
          </div>
        </div>
      </div>
      
      <div class="team-section">
        <h2>Our Team</h2>
        <div class="team-grid">
          <div class="team-member">
            <img src="https://res.cloudinary.com/darbhv6uv/image/upload/v1745428162/WhatsApp_Image_2025-04-23_at_22.38.26_6684a3b6_r53raq.jpg" alt="Tharian Nair" />
            <h3>Tharian Nair</h3>
            <p>Founder & CEO</p>
          </div>
          <div class="team-member">
            <img src="https://res.cloudinary.com/darbhv6uv/image/upload/v1745428162/WhatsApp_Image_2025-04-23_at_22.38.26_607f4d5b_midi1b.jpg" alt="Param Raval" />
            <h3>Param Raval</h3>
            <p>Chief Operations Officer</p>
          </div>
          <div class="team-member">
            <img src="https://res.cloudinary.com/darbhv6uv/image/upload/v1745428162/WhatsApp_Image_2025-04-23_at_22.38.25_aec48799_ubg71p.jpg" alt="PS Suryanarayanan" />
            <h3>PS Suryanarayanan</h3>
            <p>Head of Product</p>
          </div>
          <div class="team-member">
            <img src="https://res.cloudinary.com/darbhv6uv/image/upload/v1745428308/WhatsApp_Image_2025-04-23_at_22.39.47_9361eb37_ccp9hq.jpg" alt="Dhairya Mehta" />
            <h3>Dhairya Mehta</h3>
            <p>Managing Director</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

