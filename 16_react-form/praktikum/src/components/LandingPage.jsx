import React from "react";
import HeroImage from "../assets/hero-img.png"
import NavbarForm from "./common/NavbarForm";
function LandingPage() {
  return (
    <>
      {/* Required meta tags */}
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {/* Bootstrap CSS */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href="../styles.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&family=Open+Sans&family=Roboto:wght@500&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      {/* Optional JavaScript */}
      {/* jQuery first, then Popper.js, then Bootstrap JS */}
      <NavbarForm />
      <div className="main-body">
        <div className="hero-section">
          <div className="hero-section-content">
            <h1>Better Solutions For Your Business</h1>
            <p>
              We are team of talented designers making websites with Bootstrap
            </p>
            <div className="button-section">
              <a href="CreateAccount.html">
                <button id="landingpage-btn" className="btn">Get Started</button>
              </a>
              <button className="btn-video">Watch Video</button>
            </div>
          </div>
          <img src={HeroImage} alt="Background Picture" />
        </div>
      </div>
      <div className="newsletter-section">
        <h2>Join Our Newsletter</h2>
        <p>
          Tamen quem nulla quae legam multos aute sint culpa legam noster magna
        </p>
        <div className="newsletter-input-section">
          <input type="text" name="" id="input-box" required="" />
          <a href="#">
            <button className="btn-subscribe">Subscribe</button>
          </a>
        </div>
      </div>
      <footer>
        <div className="links-section">
          <div className="Arsha-section">
            <p id="logo">Arsha</p>
            <p id="street">
              A108 Adam Street New York, NY 535022 United States
            </p>
            <p>
              <span>Phone:</span> +1 5589 55488 55
            </p>
            <p>
              <span>Email:</span> info@example.com
            </p>
          </div>
          <div className="useful-links-section">
            <p>Useful Links</p>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Terms of service</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div className="our-services-section">
            <p>Our Services</p>
            <ul>
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Product Management</a>
              </li>
              <li>
                <a href="#">Marketing</a>
              </li>
              <li>
                <a href="#">Graphic Design</a>
              </li>
            </ul>
          </div>
          <div className="our-social-networks-section">
            <p id="section-header">Our Social Networks</p>
            <p id="section-description">
              Cras fermentum odio eu feugiat lide par naso tierra videa magna
              derita valies
            </p>
            <ul className="social-media-section">
              <li>
                <a href="#" />
              </li>
              <li>
                <a href="#" />
              </li>
              <li>
                <a href="#" />
              </li>
              <li>
                <a href="#" />
              </li>
              <li>
                <a href="#" />
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-content">
          <p id="copyright">
            © Copyright{" "}
            <span>
              <strong>Arsha.</strong>
            </span>{" "}
            All Rights Reserved
          </p>
          <p id="bootstrap">
            Designed by <span>BootstrapMade</span>
          </p>
        </div>
      </footer>
    </>
  );
}

export default LandingPage;
