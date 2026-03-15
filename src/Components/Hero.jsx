import React from "react";
import { Link } from "react-router-dom";

export default function Hero({ title }) {
  return (
    <>
      <section id="hero" className="hero2-section">
        {/* <img src="assets/img/hero-bg.jpg" alt="" /> */}
        <h3>{title}</h3>
        <div className="items mx-3">
          <Link to="/" className="text-light">Home</Link>
          <i className="bi bi-arrow-right mx-4"></i>
          <span>{title}</span>
        </div>
      </section>
    </>
  );
}
