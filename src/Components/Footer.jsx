import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer id="footer" className="footer dark-background">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <Link to="/" className="d-block text-light fs-1 mb-2">
                <span className="sitename">
                  {import.meta.env.VITE_APP_SITE_NAME}
                </span>
              </Link>
              <div className="footer-contact">
                <Link
                  to={`${import.meta.env.VITE_APP_MAP2}`}
                  className="text-light d-block"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-geo-alt fs-5 me-3"></i>{" "}
                  {import.meta.env.VITE_APP_ADDRESS}
                </Link>
                <Link
                  to={`mailto:${import.meta.env.VITE_APP_EMAIL}`}
                  className="text-light d-block"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-envelope fs-5 me-3"></i>{" "}
                  {import.meta.env.VITE_APP_EMAIL}
                </Link>
                <Link
                  to={`tel:${import.meta.env.VITE_APP_PHONE}`}
                  className="text-light d-block"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-phone fs-5 me-3"></i>{" "}
                  {import.meta.env.VITE_APP_PHONE}
                </Link>
                <Link
                  to={`https://wa.me/${import.meta.env.VITE_APP_WHATSAPP}`}
                  className="text-light d-block"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-whatsapp fs-5 me-3"></i>{" "}
                  {import.meta.env.VITE_APP_WHATSAPP}
                </Link>
              </div>
              <div className="social-links d-flex mt-4">
                <Link
                  to={import.meta.env.VITE_APP_FACEBOOK}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-facebook"></i>
                </Link>
                <Link
                  to={import.meta.env.VITE_APP_TWITTER}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-twitter-x"></i>
                </Link>
                <Link
                  to={import.meta.env.VITE_APP_INSTAGRAM}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-instagram"></i>
                </Link>
                <Link
                  to={import.meta.env.VITE_APP_LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-linkedin"></i>
                </Link>
                <Link
                  to={import.meta.env.VITE_APP_YOUTUBE}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-youtube"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About us</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/features">Features</Link>
                </li>
                <li>
                  <Link to="services">Services</Link>
                </li>
                <li>
                  <Link to="/faq">Faq</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <Link to="/testimonials">Testimonials</Link>
                </li>
                <li>
                  <Link to="/contactus">Contact Us</Link>
                </li>
                <li>
                  <Link to="/privacypolicy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/termsandconditions">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/refundpolicy">Refund Policy</Link>
                </li>
                <li>
                  <Link to="/datapolicy">Data Policy</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-12 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>
                Subscribe to our newsletter and receive the latest news about
                our products and services!
              </p>
              <form
                action="forms/newsletter.php"
                method="post"
                className="php-email-form"
              >
                <div className="newsletter-form">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </div>
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your subscription request has been sent. Thank you!
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span>{" "}
            <strong className="px-1 sitename">
              {import.meta.env.VITE_APP_SITE_NAME}
            </strong>{" "}
            <span>All Rights Reserved</span>
          </p>
        </div>
      </footer>
    </>
  );
}
