import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { DocumentReference, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.config";
import { Trip } from "./AddTrip";
import { useLoadScript } from "@react-google-maps/api";
import MapPreview from "../components/MapPreview/MapPreview";

type Library = "places" | "drawing" | "geometry" | "localContext" | "visualization";

const libraries: Library[] = ["places"];

const TripPage = () => {
  const { tripId } = useParams<{ tripId: string }>();
  const [tripData, setTripData] = useState<Trip>();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  useEffect(() => {
    const tripRef = doc(db, "trips", `${tripId}`) as DocumentReference<Trip>;
    const getTrip = async () => {
      const res = await getDoc(tripRef);
      const data = res.data();
      setTripData(data);
    };
    getTrip();
  }, []);

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  return isLoaded ? (
    <MapPreview center={{ lat: 45.7749, lng: -122.4194 }} tripData={tripData} />
  ) : (
    <div>Loading maps...</div>
  );
};

export default TripPage;
