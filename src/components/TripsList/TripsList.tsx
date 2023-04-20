import { TripsListStyled } from "./TripsList.styled";
import { SingleTrip } from "./SingleTrip";
import { Trip } from "../../pages/AddTrip";

export interface TripsListProps {
  trips: Trip[];
}

export const TripsList = ({ trips }: TripsListProps) => {
  return (
    <TripsListStyled>
      {trips.map((trip) => (
        <SingleTrip
          tripDescription={trip.description}
          key={trip.title}
          url={trip.imageUrl}
          title={trip.title}
          tripId={trip.id}
        />
      ))}
    </TripsListStyled>
  );
};
