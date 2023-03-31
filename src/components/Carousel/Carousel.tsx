import { TestVoyageData } from "./TestVoyageData";
import { StyledLink } from "./Carousel.style";
// import { Switch, Route } from "react-router-dom";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Swiper.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export const Carousel: React.FC = () => {
  return (
    <>
      <Swiper
        navigation={true}
        pagination={true}
        loop={true}
        slidesPerView={3}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <div>
          <div>
            <h1>Our Voyages</h1>
          </div>
          {TestVoyageData.map((voyage) => (
            <SwiperSlide key={voyage.id}>
              <div className="Card">
                <div>
                  <img src={voyage.image} alt="" />
                </div>
                <div>
                  <StyledLink to={`/voyage/${voyage.id}`}>
                    <h2>{voyage.name}</h2>
                    <h3> {voyage.destination} </h3>
                  </StyledLink>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};
