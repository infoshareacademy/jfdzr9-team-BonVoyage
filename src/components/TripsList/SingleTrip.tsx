import { Link } from "react-router-dom";
import { ImgContainer, SingleTripStyled, TripDescription, TripMini, TripMiniTitle } from "./TripsList.styled";

export interface SingleTripProps {
  url: string;
  title: string;
  tripId: string;
  tripDescription: string;
  inProgress: boolean;
}

export const SingleTrip = ({ url, title, tripId, tripDescription, inProgress }: SingleTripProps) => {
  return (
    <Link to={inProgress ? `/add-new-trip/${tripId}` : `/voyages/${tripId}`}>
      <SingleTripStyled>
        <ImgContainer>
          <TripMini src={url}></TripMini>
        </ImgContainer>

        <TripMiniTitle>{title}</TripMiniTitle>
        <TripDescription>{tripDescription}</TripDescription>
      </SingleTripStyled>
    </Link>
  );
};
