import React from "react";
import { Link } from "react-router-dom";
import BrandSlider from "../Components/BrandSlider";
import About from "../Components/About";
import Stat from "../Components/Stat";
import Features from "../Components/Features";
import Services from "../Components/Services";
import Products from "../Components/Products";
import Faq from "../Components/Faq";
import ProductSlider from "../Components/ProductSlider";
import Testimonials from "../Components/Testimonials";
import ContactUsPage from "./ContactUsPage";

import { Autoplay, Parallax, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

export default function Homepage() {
  let options = {
    style: {
      "--swiper-pagination-color": "#fff",
    },
    speed: 600,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    parallax: true,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: false,
    loop: true,
    pagination: {
      clickable: true,
    },
    modules: [Parallax, Pagination, Autoplay],
  };
  return (
    <>
      <main className="main">
        <Swiper {...options}>
          <SwiperSlide>
            <section id="hero" className="hero section">
              <img src="assets/img/banners/banner1.jpg" alt="" />

              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <h2>Premium Styles Crafted for Every Man</h2>
                    <p>
                      Elevate Your Style with Shoppers Men, Bold Looks, Built
                      for Modern Men, Where Confidence Meets Everyday Style
                    </p>
                    <div className="d-flex mt-4">
                      <Link to="/shop?mc=Male" className="btn-get-started">
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section id="hero" className="hero section">
              <img src="assets/img/banners/banner3.jpg" alt="" />

              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <h2>Redefine Fashion, Redefine Yourself</h2>
                    <p>
                      Empower Your Elegance with Shoppers Women, Unveil Your
                      Style, Unleash Your Confidence, Grace Meets Glamour at
                      Shoppers
                    </p>
                    <div className="d-flex mt-4">
                      <Link to="/shop?mc=Female" className="btn-get-started">
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section id="hero" className="hero section">
              <img src="assets/img/banners/banner2.jpg" alt="" />

              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <h2>Colorful Styles Made for Happy Kids</h2>
                    <p>
                      Bright Styles for Little Smiles Fun, Fashion, and
                      Everything Kids Love, Adorable Looks for Every Little
                      Star, Where Comfort Meets Cuteness at Shoppers Kids
                    </p>
                    <div className="d-flex mt-4">
                      <Link to="/shop?mc=kids" className="btn-get-started">
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
        </Swiper>
        <BrandSlider />
        <About />
        <Stat />
        <Features />
        <Services />
        <Products />
        <Testimonials />
        <ProductSlider />
        <Faq />
        <ContactUsPage />
      </main>
    </>
  );
}
