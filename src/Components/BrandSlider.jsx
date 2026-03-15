import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function BrandSlider() {
  let options = {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    pagination: false,
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 50,
      },
      992: {
        slidesPerView: 3.5,
        spaceBetween: 50,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
    modules: [Autoplay],
  };
  return (
    <>
      <section id="clients" className="clients section">
        <div className="container">
          <div className="swiper init-swiper">
            <Swiper {...options}>
              <SwiperSlide>
                <img
                  src="assets/img/clients/client-1.png"
                  className="w-100"
                  height={100}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="assets/img/clients/client-2.png"
                  className="w-100"
                  height={100}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="assets/img/clients/client-3.png"
                  className="w-100"
                  height={100}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="assets/img/clients/client-4.png"
                  className="w-100"
                  height={100}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="assets/img/clients/client-5.png"
                  className="w-100"
                  height={100}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="assets/img/clients/client-6.png"
                  className="w-100"
                  height={100}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="assets/img/clients/client-7.png"
                  className="w-100"
                  height={100}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="assets/img/clients/client-8.png"
                  className="w-100"
                  height={100}
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
