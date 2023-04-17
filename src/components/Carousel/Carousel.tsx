import { TestVoyageData } from "./TestVoyageData";
import { StyledLink } from "./Carousel.style";
import { useMediaQuery } from "../../hooks/UseMediaQuery";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";

register();

export const Carousel: React.FC = () => {
  const smallScreen = useMediaQuery("(min-width: 768px)");
  // const swiperRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const swiperContainer = swiperRef.current;
  //   const params = {
  //     navigation: true,
  //     pagination: true,
  //   };

  //   Object.assign(swiperContainer, params);
  //   swiperContainer.initialize();
  // }, []);

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
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          injectStyles={[
            `
        .swiper-button-prev {
          color: white;
        }

        .swiper-button-next {
          color: #000;
        }
        `,
          ]}
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
                    <StyledLink to={`/voyages/notloggedin/${voyage.id}`}>
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
        // navigation={true}
        // pagination={true}
        // loop={true}
        // slidesPerView={1}
        // modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        // className="mySwiper"
        // onSwiper={(swiper) => (swiperRef.current = swiper)}
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
                    <StyledLink to={`/voyages/notloggedin/${voyage.id}`}>
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
