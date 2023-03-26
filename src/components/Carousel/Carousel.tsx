import { TestVoyageData } from "./TestVoyageData";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderDiv, SliderDivBottom, SliderDivTop, SliderWrapper } from "./Carousel.style";

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
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={false}
        keyboard={false}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SliderWrapper>
          {TestVoyageData.map((voyage) => (
            <SwiperSlide key={voyage.id}>
              <SliderDiv>
                <SliderDivTop>
                  <img src={voyage.image} alt="" />
                </SliderDivTop>
                <SliderDivBottom>
                  <h2>{voyage.name}</h2>
                  <h3> {voyage.destination} </h3>
                </SliderDivBottom>
              </SliderDiv>
            </SwiperSlide>
          ))}
        </SliderWrapper>
      </Swiper>
    </>
  );
};
