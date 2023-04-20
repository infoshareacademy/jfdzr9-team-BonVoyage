import { Link } from "react-router-dom";
import { SingleTripStyled, TripDescription, TripMini, TripMiniTitle } from "./TripsList.styled";

export interface SingleTripProps {
  url: string;
  title: string;
  tripId: string;
  tripDescription: string;
}

export const SingleTrip = ({ url, title, tripId, tripDescription }: SingleTripProps) => {
  return (
    <Link to={`/voyages/${tripId}`}>
      <SingleTripStyled>
        <TripMini src={url}></TripMini>
        <TripMiniTitle>{title}</TripMiniTitle>
        <TripDescription>{tripDescription}</TripDescription>
      </SingleTripStyled>
    </Link>
  );
};
