import { TripsListStyled } from "./TripsList.styled";
import { SingleTrip } from "./SingleTrip";
import getTrips from "../../firebase/getTrip";
import { useEffect, useState } from "react";
import { Trip } from "../../pages/AddTrip";

import { useUser } from "../../context/auth.context";

export const TripsList = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const user = useUser();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTrips();
      setTrips(data?.filter((trip) => trip.userEmail === user?.email) ?? []);
    };
    fetchData();
  }, []);

  return (
    <TripsListStyled>
      {trips.map((trip) => (
        <SingleTrip key={trip.title} url={trip.imageUrl} title={trip.title} tripId={trip.id} />
      ))}
    </TripsListStyled>
  );
};
