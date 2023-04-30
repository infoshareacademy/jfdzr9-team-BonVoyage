import { TripsListStyled } from "./TripsList.styled";
import { SingleTrip } from "./SingleTrip";
import { Trip } from "../../pages/AddTrip";

export interface TripsListProps {
  trips: Trip[];
  tripsName?: string;
}

export const TripsList = ({ trips, tripsName }: TripsListProps) => {
  return (
    <>
      <h3>{tripsName}</h3>
      <TripsListStyled>
        {trips.map((trip) => (
          <SingleTrip
            tripDescription={trip.description}
            key={trip.id}
            url={trip.imageUrl}
            title={trip.title}
            tripId={trip.id}
            inProgress={trip.inProgress}
          />
        ))}
      </TripsListStyled>
    </>
  );
};
