import { Link } from "react-router-dom";
import { SingleTripStyled, TripMini, TripMiniTitle } from "./TripsList.styled";

export interface SingleTripProps {
  url: string;
  title: string;
  tripId: string;
}

export const SingleTrip = ({ url, title, tripId }: SingleTripProps) => {
  return (
    <Link to={`/voyages/${tripId}`}>
      <SingleTripStyled>
        <TripMiniTitle>{title}</TripMiniTitle>
        <TripMini src={url}></TripMini>
      </SingleTripStyled>
    </Link>
  );
};
