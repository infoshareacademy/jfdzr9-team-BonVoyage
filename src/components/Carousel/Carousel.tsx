import { TestVoyageData } from "./TestVoyageData";
import { StyledLink } from "./Carousel.style";
import { useMediaQuery } from "../../hooks/UseMediaQuery";

import React, { useEffect, useState } from "react";
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
  const smallScreen = useMediaQuery("(min-width: 768px)");
  const mediumScreen = useMediaQuery("(min-width: 768px)");

  if (smallScreen) {
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
  } else {
    return (
      <>
        <Swiper
          navigation={true}
          pagination={true}
          loop={true}
          slidesPerView={1}
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
  }
};
