import getTrips from "../firebase/getTrip";
import { useEffect, useState } from "react";
import { Trip } from "./AddTrip";
import { TripsList } from "../components/TripsList/TripsList";

const Voyages = () => {
  const [trips, setTrips] = useState<Trip[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await getTrips(setTrips);
      // setTrips(data?.filter((trip) => trip.imageUrl).filter((trip) => !trip.inProgress) ?? []);
    };
    fetchData();
  }, []);
  return <TripsList trips={trips.filter((trip) => trip.imageUrl).filter((trip) => !trip.inProgress) ?? []} />;
};
export default Voyages;
