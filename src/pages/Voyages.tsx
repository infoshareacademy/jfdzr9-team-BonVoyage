import { Link } from "react-router-dom";
import { TripsListStyled } from "../components/TripsList/TripsList.styled";
import { SingleTrip } from "../components/TripsList/SingleTrip";
import getTrips from "../firebase/getTrip";
import { useEffect, useState } from "react";
import { Trip } from "./AddTrip";

import { useUser } from "../context/auth.context";

const Voyages = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const user = useUser();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTrips();
      setTrips(data?.filter((trip) => trip.imageUrl) ?? []);
    };
    fetchData();
  }, []);

  return (
    <>
      <TripsListStyled>
        {trips.map((trip) => (
          <SingleTrip key={trip.title} url={trip.imageUrl} title={trip.title} tripId={trip.id} />
        ))}
      </TripsListStyled>
      <div style={{ marginTop: "100px" }}>
        <Link to={"/add-new-trip"}>Add new trip</Link>
      </div>
    </>
  );
};

export default Voyages;
