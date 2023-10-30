import React, { useEffect, useState } from "react";
import Instagram from "../assets/instagram-logo.png";
import Twitter from "../assets/twitter-logo.png";
import Linkedin from "../assets/linkedin-logo.png";
import Apple from "../assets/apple-brand.png";
import Beats from "../assets/beats-brand.png";
import Buds from "../assets/buds-image.png";
import Jbl from "../assets/jbl-brand.png";
import Pulsetunes from "../assets/logo.png";
import Headphone from "../assets/person-with-headphone.png";
import Samsung from "../assets/samsung-brand.png";
import Sennheiser from "../assets/sennheiser-brand.png";
import Skullcandy from "../assets/skullcandy-brand.png";
import Sony from "../assets/sony-brand.png";
import "../script";
import WhiteHeadphone from "../assets/white-headphone.jpg";
import { validationCreateAccount } from "../script";
import Masonry from "masonry-layout"; // Import Masonry
import imagesLoaded from "imagesloaded"; // Import ImagesLoaded

function LandingPage() {
  const [gridRightHeight, setGridRightHeight] = useState(0);
  

  useEffect(() => {
    let calcScrollValue = () => {
      let scrollProgress = document.getElementById("progress");
      let progressValue = document.getElementById("progress-value");
      let pos = document.documentElement.scrollTop;
      let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrollValue = Math.round((pos * 100) / calcHeight);

      // Calculate arrow color based on scrollValue
      let arrowColor = `#007BFF ${scrollValue}%, #d7d7d7 ${scrollValue}%`;

      if (pos > 100) {
        scrollProgress.style.display = "grid";
        if (scrollValue >= 50) {
          // Arrow is right side up when scrollValue is >= 50
          progressValue.style.transform = "rotate(0)";
          scrollProgress.addEventListener("click", () => {
            document.documentElement.scrollTop = 0; //scroll to top
          });
        } else {
          // Arrow is upside down when scrollValue is < 50
          progressValue.style.transform = "rotate(180deg)";
          scrollProgress.addEventListener("click", () => {
            document.documentElement.scrollIntoView(false); //scroll to bottom
          });
        }
      } else {
        scrollProgress.style.display = "none";
      }

      // Set arrow circle border with dynamic color
      scrollProgress.style.background = `conic-gradient(${arrowColor})`;
    };

    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;

    // Function to set the height of first-card based on grid-right height
    function setFirstCardHeight() {
      // Get the height of grid-right
      const gridRight = document.getElementById("grid-right").clientHeight;

      // Calculate the new height for first-card (subtract 20px for spacing)
      const newHeight = gridRight - 20;

      // Set the height of first-card
      const firstCard = document.getElementById("first-card");
      firstCard.style.minHeight = newHeight + "px";
    }

    // Function to reset the height of first-card to auto
    function resetFirstCardHeight() {
      const firstCard = document.getElementById("first-card");
      firstCard.style.minHeight = "auto";
    }

    // Initial height calculation
    setFirstCardHeight();

    // Listen for window resize events
    window.addEventListener("resize", () => {
      // Check the screen width and adjust the height accordingly
      if (window.innerWidth < 768) {
        resetFirstCardHeight(); // Reset to auto height for small screens
      } else {
        setFirstCardHeight(); // Set the height based on grid-right for larger screens
      }
    });

    const navbarElement = document.getElementById("navbar");

    window.addEventListener("scroll", () => {
      if (window.scrollY >= 56) {
        navbarElement.classList.add("navbar-scrolled");
      } else if (window.scrollY < 56) {
        navbarElement.classList.remove("navbar-scrolled");
      }
    });

    // Clean up event listeners when the component unmounts
    return () => {
      window.removeEventListener("resize", setFirstCardHeight);
      window.removeEventListener("resize", resetFirstCardHeight);
      window.removeEventListener("scroll", navbarElement);
    };
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  useEffect(() => {
    // Initialize Masonry when images are loaded
    const grid = document.querySelector(".grid");
    if (grid) {
      const masonry = new Masonry(grid, {
        itemSelector: ".grid-item",
        columnWidth: ".grid-sizer",
        percentPosition: true,
      });

      // Use imagesLoaded to ensure all images are loaded before triggering Masonry layout
      imagesLoaded(grid).on("progress", () => {
        masonry.layout();
      });
    }
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="./index.css" />
      <title>PulseTunes Landing Page</title>
      <div id="progress">
        <span id="progress-value">🠕</span>
      </div>
      <nav
        className="navbar navbar-light navbar-expand-md navbar-expand-sm sticky-top w-100"
        id="navbar"
      >
        <a className="navbar-brand ml-4" href="#">
          <img src={Pulsetunes} alt="logo" style={{ width: "1.5rem" }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
          </ul>
          <div>
            <button
              type="button"
              className="btn bg-dark text-white rounded p-2 mr-2"
            >
              Log in
            </button>
            <button
              type="button"
              className="btn bg-secondary text-white rounded p-2"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>
      <div className="container" id="main-content">
        <div className="grid">
          <div className="grid-sizer col-md-1" style={{ height: "100vh" }} />
          {/* Left side (first-card) */}
          <div className="grid-item col-md-6 mb-4 row-cols-2">
            <div
              className="card"
              id="first-card"
              style={{
                minWidth: "100%",
                overflow: "hidden",
                minHeight: "16rem",
              }}
            >
              <div className="card-body w-100" style={{ zIndex: 2 }}>
                <p className="card-subtitle text-uppercase mb-2">More Offers</p>
                <h1 className="card-title">There is something else for you</h1>
              </div>
              <div className="card-footer" style={{ position: "relative" }}>
                <img
                  src={Buds}
                  id="image-first-card"
                  alt="Beats buds"
                  style={{
                    position: "absolute",
                    left: "10rem",
                    top: "-15rem",
                    width:
                      "20rem" /* make the image fill the container width */,
                    height:
                      "20rem" /* make the image fill the container height */,
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
          {/* Right side (second-card, third-card, fourth-card) */}
          <div className="grid-item col-md-6 mb-4" id="grid-right">
            {/* Top right (second-card) */}
            <div
              className="card mb-4"
              id="second-card"
              style={{ minHeight: "16rem", overflow: "hidden" }}
            >
              {/* Content for the second card */}
              <div
                className="card-body w-100"
                id="second-card-content"
                style={{ zIndex: 2 }}
              >
                <p className="card-subtitle text-uppercase mb-2">
                  world of hearing technology
                </p>
                <div
                  className="card-footer"
                  style={{
                    background: "transparent",
                    border: 0,
                    padding: 0,
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                  }}
                >
                  <img src={Headphone} id="image-second-card" alt="" />
                  <h2>View our blog</h2>
                </div>
              </div>
            </div>
            {/* Bottom right (third-card and fourth-card) */}
            <div className="row">
              <div className="col-md-6">
                <div
                  className="card mb-4"
                  id="third-card"
                  style={{ minHeight: "16rem" }}
                >
                  {/* Content for the third card */}
                  <div className="card-body w-100" id="third-card-content">
                    <p className="card-subtitle text-uppercase mb-2">
                      Discover our history
                    </p>
                    <div
                      className="card-footer"
                      style={{
                        background: "transparent",
                        border: 0,
                        padding: 0,
                        position: "absolute",
                        bottom: 0,
                        width: "100%",
                      }}
                    >
                      <h2 className="w-75">About us</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="card mb-4"
                  id="fourth-card"
                  style={{ height: "16rem" }}
                >
                  {/* Content for the fourth card */}
                  <div className="card-body w-100" id="fourth-card-content">
                    <p className="card-subtitle text-uppercase mb-2">
                      Have some questions?
                    </p>
                    <div
                      className="card-footer"
                      style={{
                        background: "transparent",
                        border: 0,
                        padding: 0,
                        position: "absolute",
                        bottom: 0,
                        width: "100%",
                      }}
                    >
                      <h2 className="w-75">Contact us</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About us section */}
        <div className="row">
          <div className="col-md-6 my-auto">
            <h2 id="section-text">About Us</h2>
            <p className="text-justify mr-5">
              Welcome to Pulsetunes!! Your Gateway to Sonic Excellence! At
              Pulsetunes, we are passionate about sound. We believe that the
              right pair of earphones can transform your auditory experience,
              taking you on a journey through the world of music like never
              before. Pulsetunes was founded by a group of audio
              enthusiasts with a shared vision to provide you with the finest
              selection of earphones that cater to every audiophile's needs.
              With a blend of technology, innovation, and a profound love for
              music, we set out on a mission to deliver impeccable sound quality
              to your ears.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src={WhiteHeadphone}
              alt="white-headphone"
              id="white-headphone"
            />
          </div>
        </div>
        {/* Brands section */}
        <h2 id="section-text">Our Products</h2>
        <div className="brands mb-4">
          <div className="brands-slide">
            <img src={Sony} alt="sony" />
            <img src={Skullcandy} alt="skullcandy" />
            <img src={Sennheiser} alt="sennheiser" />
            <img src={Samsung} alt="samsung" />
            <img src={Jbl} alt="jbl" />
            <img src={Apple} alt="apple" />
            <img src={Beats} alt="beats" />
          </div>
          <div className="brands-slide">
            <img src={Sony} alt="sony" />
            <img src={Skullcandy} alt="skullcandy" />
            <img src={Sennheiser} alt="sennheiser" />
            <img src={Samsung} alt="samsung" />
            <img src={Jbl} alt="jbl" />
            <img src={Apple} alt="apple" />
            <img src={Beats} alt="beats" />
          </div>
        </div>
        {/* Contact us section */}
        <h2 id="section-text">Get in touch with us.</h2>
        <div className="container" id="contact-us-section">
          <form
            noValidate=""
            id="createAccount"
            onSubmit={validationCreateAccount}
          >
            <div className="row">
              <div className="col-md-6">
                <h2>Send us a message</h2>
                <p>
                  Feel free to contact us, and we will get back to you as soon
                  as possible.
                </p>
                {/* First and last name */}
                <div className="row mt-3">
                  <div className="col">
                    <label htmlFor="validationFirstName">First name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="validationFirstName"
                      id="validationFirstName"
                      required=""
                      placeholder="Jane"
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">
                      Please provide a valid first name.
                    </div>
                  </div>
                  <div className="col">
                    <label htmlFor="validationLastName">Last name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="validationLastName"
                      id="validationLastName"
                      required=""
                      placeholder="Doe"
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">
                      Please provide a valid last name.
                    </div>
                  </div>
                </div>
                {/* Email */}
                <div className="mt-3">
                  <label
                    htmlFor="validationEmail"
                    className="font-weight-normal"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="validationEmail"
                    id="validationEmail"
                    required=""
                    placeholder="jane@gmail.com"
                  />
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">
                    Please provide a valid email.
                  </div>
                </div>
                {/* Message */}
                <div className="mt-3">
                  <label htmlFor="validationMessage">Message</label>
                  <textarea
                    className="form-control"
                    id="validationMessage"
                    rows={4}
                    required=""
                    placeholder="Hi Zara, I would like to..."
                    defaultValue={""}
                  />
                  <div className="valid-feedback">Valid</div>
                  <div className="invalid-feedback">
                    Please provide a message.
                  </div>
                </div>
                <div className="text-center mt-4">
                  <button
                    className="btn btn-primary btn-block rounded-sm mb-4"
                    type="submit"
                    id="submitButton"
                  >
                    Send
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <h2>Contact Us</h2>
                <h6>Opening hours</h6>
                <p>
                  Monday - Friday
                  <br />
                  9am - 5pm
                </p>
                <h6>Address</h6>
                <p>
                  123 Jakarta Tower, Jalan Jenderal Sudirman No.123, Jakarta
                  12345, Indonesia
                </p>
                <h6>Support</h6>
                <p>pulsetunes@support.com</p>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Footer section */}
      <div className="mt-4" id="footer">
        <footer className="row">
          <div className="col-md-3">
            <img src={Pulsetunes} alt="logo" id="logo" />
            <p
              className="text-uppercase font-weight-bolder"
              style={{ fontSize: "2rem" }}
            >
              pulsetunes
            </p>
            <p id="slogan-footer">
              Unleash your sound, seize the moment. <br />
              <strong>Embrace Sonic Freedom</strong>
            </p>
          </div>
          <div className="col-md-3" id="explore-footer">
            <h6>Explore</h6>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6>Visit</h6>
            <p id="address-footer">
              123 Jakarta Tower, Jalan Jenderal Sudirman No.123, Jakarta 12345,
              Indonesia
            </p>
          </div>
          <div className="col-md-3" id="legal-footer">
            <h6>Legal</h6>
            <ul>
              <li>
                <a href="#">Term</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
            </ul>
          </div>
        </footer>
        <hr />
        <div className="row">
          <div className="col-md-8 col-lg-9 col-xl-10">
            <p>Created and Designed with 💗 by Aurelia.</p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-2" id="social-media">
            <div className="" id="social-media-content">
              <a href="https://www.linkedin.com/in/aurelia-amanda-robert-19ab441b7/">
                <img
                  src={Linkedin}
                  alt="Linkedin"
                  className="social-media-icon"
                  id="linkedin"
                />
              </a>
              <a href="https://twitter.com/aureliaamanda24">
                <img
                  src={Twitter}
                  alt="Twitter"
                  className="social-media-icon"
                  id="twitter"
                />
              </a>
              <a href="https://www.instagram.com/aureliarobert24/">
                <img
                  src={Instagram}
                  alt="Instagram"
                  className="social-media-icon"
                  id="instagram"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
