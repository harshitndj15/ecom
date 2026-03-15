import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <>
      <section id="about" className="about section section-bg dark-background">
        <div className="container position-relative">
          <div className="row gy-5">
            <div className="content col-xl-5 d-flex flex-column">
              <h3>Redefining Fashion for Every Generation</h3>
              <p>
                At Shoppers, we believe that fashion is more than just clothing;
                it's a powerful form of self-expression that transcends age. Our
                mission is to provide stylish, high-quality apparel that
                resonates with every generation, empowering individuals to
                embrace their unique identities through fashion.
              </p>
              {window.location.pathname !== "/about" ? (
                <Link
                  to="/shop"
                  className="about-btn align-self-center align-self-xl-start"
                >
                  <span>About us</span> <i className="bi bi-chevron-right"></i>
                </Link>
              ) : null}
            </div>

            <div className="col-xl-7">
              <div className="row gy-4">
                <div className="col-md-6 icon-box position-relative">
                  <i className="bi bi-bullseye"></i>
                  <h4>
                    <a href="" className="stretched-link">
                      Our Vision
                    </a>
                  </h4>
                  <p>
                    We aim to make Shoppers a one-stop destination for every
                    fashion need - combining quality, style, and affordability.
                  </p>
                </div>

                <div className="col-md-6 icon-box position-relative">
                  <i className="bi bi-shield-check"></i>
                  <h4>
                    <a href="" className="stretched-link">
                      Our Promise
                    </a>
                  </h4>
                  <p>
                    We stand by trust, transparency, and timeless style. Every
                    product we offer is crafted with care and delivered with
                    love to ensure your satisfaction.
                  </p>
                </div>

                <div className="col-md-6 icon-box position-relative">
                  <i className="bi bi-bag-heart"></i>
                  <h4>
                    <a href="" className="stretched-link">
                      Our Collection
                    </a>
                  </h4>
                  <p>
                    From men's essentials to women's elegance and kids'
                    cuteness, our collection celebrates diversity in style for
                    all ages.
                  </p>
                </div>

                <div className="col-md-6 icon-box position-relative">
                  <i className="bi bi-rocket-takeoff"></i>
                  <h4>
                    <a href="" className="stretched-link">
                      Our Journey
                    </a>
                  </h4>
                  <p>
                    Born out of a passion for fashion, Shoppers has grown into a
                    beloved brand that values quality, style, and customer
                    satisfaction above all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
