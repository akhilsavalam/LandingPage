import React from "react";

const LandingPage = () => {
  return (
    <main>
    <section class="hero">
    <div class="hero-content">
      <h1>Welcome to our Grocery Store</h1>
    </div>
  </section>

  <section class="about">
    <div class="about-content">
        <div className="about-img">
        </div>
        <div className="about-text">
            <h1 className="white">ABOUT</h1>
            <p className="white">At Freshlo, we are passionate about delivering the freshest groceries to
                your doorstep. Our mission is to provide a seamless online shopping
                experience, making it easy for you to access high-quality products and
                enjoy the convenience of home delivery. With our commitment to
                freshness, quality, and customer satisfaction, Freshlo is your trusted
                partner for all your grocery needs.
            </p>
            <p className="white">
                At Freshlo, we are passionate about delivering the freshest groceries to
            your doorstep. Our mission is to provide a seamless online shopping
            experience, making it easy for you to access high-quality products and
            enjoy the convenience of home delivery. With our commitment to
            freshness, quality, and customer satisfaction, Freshlo is your trusted
            partner for all your grocery needs.
            </p>
        </div>
    </div>
  </section>

  <section class="how-it-works">
    <div className="banner">
    <div class="how-it-works-content">
      <h1>How It Works</h1>
      <div class="steps">
        <div class="step">
          <p>Step 1</p>
          <p>Visit freshlo.ca to
            browse our available
            Fresh Groceries.
            </p>
        </div>
        <div class="step">
          <p>Step 2</p>
          <p>Select your chosen
            Groceries, input your
            delivery address, and
            pay securely online.
            </p>
        </div>
        <div class="step">
          <p>Step 3</p>
          <p>The Fresh Groceries will
            be at your doorstep at
            your chosen time the
            following day.
            </p>
        </div>
      </div>
    </div>
    </div>
  </section>

  <section class="pricing">
    <div class="pricing-content">
      <h1>Pricing</h1>
      <div class="cards">
        <div class="card">
          <img className="card-img" src="./pricing1.jpg" alt="Card 1" />
          <p className="box">$9.99</p>
        </div>
        <div class="card">
          <img className="card-img" src="./pricing2.jpg" alt="Card 2" />
          <p className="box">$14.99</p>
        </div>
        <div class="card">
          <img className="card-img" src="./pricing3.jpg" alt="Card 3" />
          <p className="box">$19.99</p>
        </div>
      </div>
    </div>
  </section>

  <section class="browse-kits">
    <div class="browse-kits-content">
      <div className="browse-kits-img">
        </div>
        <div className="about-text">
            <h1>What's inside each box?</h1>
            <ul>
              <li>Illustrated step-by-step recipes</li>
              <li>Ready to cook ingredients</li>
              <li>Ready to cook ingredients</li>
              <li>Guaranteed delicious meals!</li>
            </ul>
            <button className="btn">BROWSE OUR KITS</button>
        </div>
    </div>
  </section>

  <section class="reviews">
    <div class="reviews-content">
      <div>
      <h1>Reviews</h1>
      <p>Hear from our new
home chefs</p>
</div>
      <div class="steps">
        <div class="review">
          <p>Kitchen Comforts brought true comfort to our
table. These CIY Meal Kits are incredible!
            </p>
            <p>@REALLYGREATSITE</p>
        </div>
        <div class="review">
          <p>I never knew I could cook dishes like these. It's
truly easy - and my family is grateful!
            </p>
            <p>@REALLYGREATSITE</p>
        </div>
        <div class="review">
          <p>
I admire businesses that evolve with the times,
and Kitchen Comforts did it so deliciously!
            </p>
            <p>@REALLYGREATSITE</p>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <div class="footer-content">
      <h1>Get in Touch</h1>
      <div className="footer-box">
      <div class="social-media">
        <h2>Socials</h2>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
        <a href="#">LinkedIn</a>
      </div>
      <div>
        <h2 className="locations">LOCATIONS</h2>
        <div className="flex">
        <p>786 Plane Street, Eastern Cape, <br />
Engcobo 5054</p>
<p>9436 Feather Street, Santa Fe, <br />
New Mexico 87501</p>
<p>2179 Clover Avenue, Coquitlam, <br />
British Columbia V3J 5S9</p>
</div>
      </div>
    </div>
    <a href="#">HELLO@REALLYGREATSITE.COM</a>
    </div>
  </footer>
  </main>
  );
};

export default LandingPage;
