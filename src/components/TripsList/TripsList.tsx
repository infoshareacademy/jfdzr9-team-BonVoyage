import { TripsListStyled } from "./TripsList.styled";
import { SingleTrip } from "./SingleTrip";

export const TripsList = ({ trips }) => {
  return (
    <TripsListStyled>
      {trips.map((trip) => (
        <SingleTrip key={trip.title} url={trip.imageUrl} title={trip.title} tripId={trip.id} />
      ))}
    </TripsListStyled>
  );
};
