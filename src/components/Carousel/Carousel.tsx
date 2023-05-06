// @ts-nocheck

import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import { useMediaQuery } from "../../hooks/UseMediaQuery";
import { TestVoyageData } from "./TestVoyageData";
import { StyledLink, StyledDiv } from "./Carousel.style";
register();

export const Carousel = () => {
  const swiperRef = useRef(null);
  const smallScreen = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      pagination: {
        clickable: true,
      },
      loop: smallScreen ? true : false,
      slidesPerView: smallScreen ? 1 : 3,
      injectStyles: [
        `
        .swiper-button-next,
        .swiper-button-prev {
          color: #d7d7d7;
          transition: all 0.2s ease-in;

        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          color: white;
          transform:scale(1.2);
          transition: all 0.2s ease-in;
        }
        .swiper-pagination-bullet{
          width: 10px;
          height: 10px;
          background-color: #9b9b9b;
        }
        .swiper-pagination-bullet:hover{
          transform: scale(1.1)
        }
        .swiper-container {
          width: 100%;
          height: 50%;

          border-radius: 5px;
          padding-bottom: 20px;
        }
        .swiper-slide {
          text-align: center;
          font-size: 18px;
          background: #fff;
          padding: 10px;
          border-radius: 4px;

          display: flex;
          justify-content: center;
          align-items: center;
        }

        .swiper-slide:hover {
          transform: scale(1.1);
        }

        .swiper-slide img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          padding-bottom: 10px;
        }

        .swiper-slide h3 {
          padding-bottom: 20px;
          font-weight: 300;
        }
        `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, [smallScreen]);

  return (
    <>
      <StyledDiv>
        <h2>Our Voyages</h2>
      </StyledDiv>
      <swiper-container ref={swiperRef} init="false">
        {TestVoyageData.map((voyage) => (
          <swiper-slide class="swiper-slide" key={voyage.id}>
            <div className="Card">
              <div>
                <img src={voyage.image} alt="" />
              </div>
              <div>
                <StyledLink to={`/voyages/notloggedin/${voyage.id}`}>
                  <h2>{voyage.name}</h2>
                  <h3> {voyage.destination} </h3>
                </StyledLink>
              </div>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </>
  );
};
