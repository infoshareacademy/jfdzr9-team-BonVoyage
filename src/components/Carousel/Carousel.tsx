import { TestVoyageData } from "./TestVoyageData";
import { StyledLink } from "./Carousel.style";
import { useMediaQuery } from "../../hooks/UseMediaQuery";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Swiper.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../Modal/Modal";

export const Carousel: React.FC = () => {
  const smallScreen = useMediaQuery("(min-width: 768px)");

  const { isOpen, toggle } = useModal();

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
                {/* <Modal isOpen={isOpen} toggle={toggle}></Modal> */}
                <div className="Card">
                  <div>
                    <img src={voyage.image} alt="" />
                  </div>
                  <div>
                    <StyledLink to={`/voyage/${voyage.id}`}>
                      <div onClick={toggle}>
                        <h2>{voyage.name}</h2>
                        <h3> {voyage.destination} </h3>
                      </div>
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
                <Modal isOpen={isOpen} toggle={toggle}></Modal>
                <div className="Card">
                  <div>
                    <img src={voyage.image} alt="" />
                  </div>
                  <div>
                    <StyledLink to={`/voyage/${voyage.id}`}>
                      <div onClick={toggle}>
                        <h2>{voyage.name}</h2>
                        <h3> {voyage.destination} </h3>
                      </div>
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
