import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/navigation";

import "swiper/css";
import "swiper/css/pagination";

export default function ProductSlider() {
  let options = {
    speed: 600,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    style: {
      "--swiper-pagination-color": "#fff",
    },
    parallax: true,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
    pagination: {
      clickable: true,
    },
    modules: [Autoplay, Pagination],
  };
  return (
    <>
      <section id="team" className="team section section-bg dark-background">
        <div className="container section-title">
          <h2>Team</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="container">
          <div className="gy-4">
            <Swiper {...options}>
              <SwiperSlide>
                <div className="d-flex align-items-stretch">
                  <div className="team-member">
                    <div className="member-img">
                      <img
                        src="assets/img/team/team-1.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="social">
                        <a href="">
                          <i className="bi bi-twitter-x"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>Walter White</h4>
                      <span>Chief Executive Officer</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="d-flex align-items-stretch">
                  <div className="team-member">
                    <div className="member-img">
                      <img
                        src="assets/img/team/team-2.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="social">
                        <a href="">
                          <i className="bi bi-twitter-x"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>Sarah Jhonson</h4>
                      <span>Product Manager</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="d-flex align-items-stretch">
                  <div className="team-member">
                    <div className="member-img">
                      <img
                        src="assets/img/team/team-3.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="social">
                        <a href="">
                          <i className="bi bi-twitter-x"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>William Anderson</h4>
                      <span>CTO</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="d-flex align-items-stretch">
                  <div className="team-member">
                    <div className="member-img">
                      <img
                        src="assets/img/team/team-3.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="social">
                        <a href="">
                          <i className="bi bi-twitter-x"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>William Anderson</h4>
                      <span>CTO</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="d-flex align-items-stretch">
                  <div className="team-member">
                    <div className="member-img">
                      <img
                        src="assets/img/team/team-3.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="social">
                        <a href="">
                          <i className="bi bi-twitter-x"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>William Anderson</h4>
                      <span>CTO</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="d-flex align-items-stretch">
                  <div className="team-member">
                    <div className="member-img">
                      <img
                        src="assets/img/team/team-3.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="social">
                        <a href="">
                          <i className="bi bi-twitter-x"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>William Anderson</h4>
                      <span>CTO</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="d-flex align-items-stretch">
                  <div className="team-member">
                    <div className="member-img">
                      <img
                        src="assets/img/team/team-4.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="social">
                        <a href="">
                          <i className="bi bi-twitter-x"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>Amanda Jepson</h4>
                      <span>Accountant</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
