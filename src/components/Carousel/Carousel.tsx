import Slider from "react-slick";
import { TestVoyageData } from "./TestVoyageData";
import "~slick-carousel/slick/slick.css";
import "~slick-carousel/slick/slick-theme.css";

export const Carousel: React.FC = () => {
  return (
    <div>
      <Slider>
        {TestVoyageData.map((voyage) => (
          <div key={voyage.id}>
            <div>
              <img src={voyage.image} alt="" />
              <h2>{voyage.name}</h2>
            </div>
            <div>
              <h3> {voyage.destination} </h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
