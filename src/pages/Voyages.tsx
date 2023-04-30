import getTrips from "../firebase/getTrip";
import { useEffect, useState } from "react";
import { Trip } from "./AddTrip";
import { TripsList } from "../components/TripsList/TripsList";

const Voyages = () => {
  const [trips, setTrips] = useState<Trip[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTrips();
      setTrips(data?.filter((trip) => trip.imageUrl).filter((trip) => !trip.inProgress) ?? []);
    };
    fetchData();
  }, []);
  return <TripsList trips={trips} />;
};
export default Voyages;
