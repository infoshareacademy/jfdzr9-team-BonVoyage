import { TeamData } from "./Team.data";
import { MemberCard, MemberWrapper, H1, LogoContainer } from "./AboutUs.style";
import { GithubLogo } from "../../assets/GithubLogo";
import { LinkedinLogo } from "../../assets/LinkedinLogo";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../../hooks/UseMediaQuery";

import { Swiper, SwiperSlide } from "swiper/react";
import { MainNavMenu } from "../MainNavMenu/MainNavMenu";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required module
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export const Team: React.FC = () => {
  const smallScreen = useMediaQuery("(min-width: 768px)");

  if (smallScreen) {
    return (
      <>
        <div id="aboutus">
          <H1>About Us</H1>
        </div>
        <Swiper
          navigation={false}
          pagination={false}
          loop={true}
          slidesPerView={3}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <MemberWrapper>
            <div>
              <h1>Our Voyages</h1>
            </div>
            {TeamData.map((member) => (
              <SwiperSlide key={member.id}>
                <MemberCard>
                  <div>
                    <img src={member.photo} alt="" />
                  </div>
                  <div>
                    <h2>{member.name}</h2>
                    <h3>{member.role}</h3>
                    <p> {member.bio} </p>
                    <LogoContainer>
                      <Link to={member.linkedin} target="_blank">
                        <LinkedinLogo />
                      </Link>
                      <Link to={member.github} target="_blank">
                        <GithubLogo />
                      </Link>
                    </LogoContainer>
                  </div>
                </MemberCard>
              </SwiperSlide>
            ))}
          </MemberWrapper>
        </Swiper>
      </>
    );
  } else {
    return (
      <>
        <div id="aboutus">
          <H1>About Us</H1>
        </div>
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
            {TeamData.map((member) => (
              <SwiperSlide key={member.id}>
                <MemberCard>
                  <div>
                    <img src={member.photo} alt="" />
                  </div>
                  <div>
                    <h2>{member.name}</h2>
                    <h3>{member.role}</h3>
                    <p> {member.bio} </p>
                    <LogoContainer>
                      <Link to={member.linkedin} target="_blank">
                        <LinkedinLogo />
                      </Link>
                      <Link to={member.github} target="_blank">
                        <GithubLogo />
                      </Link>
                    </LogoContainer>
                  </div>
                </MemberCard>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </>
    );
  }
};
