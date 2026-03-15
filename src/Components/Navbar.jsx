import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header
        id="header"
        className="header d-flex align-items-center sticky-top"
      >
        <div className="container-fluid container-xl position-relative d-flex align-items-center">
          <Link
            to="/"
            className="logo d-flex align-items-center me-auto"
          >
            <h1 className="sitename">{import.meta.env.VITE_APP_SITE_NAME}</h1>
            <span>.</span>
          </Link>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <NavLink to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/features">Features</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/faq">Faq</NavLink>
              </li>
              <li>
                <NavLink to="/testimonials">Testimonials</NavLink>
              </li>
              <li>
                <NavLink to="/contactus">Contact Us</NavLink>
              </li>
              <li>
                <NavLink to="/admin">Admin</NavLink>
              </li>
              <li className="dropdown">
                <Link to="#">
                  <span>Harshit Sharma</span>
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </Link>
                <ul>
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li>
                    <Link to="/cart">Cart</Link>
                  </li>
                  <li>
                    <Link to="/checkout">Checkout</Link>
                  </li>
                  <li>
                    <button className="btn ms-2">Logout</button>
                  </li>
                </ul>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          <Link className="btn-getstarted" to="/login">
            Login
          </Link>
        </div>
      </header>
    </>
  );
}
