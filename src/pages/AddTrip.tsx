import { useLoadScript } from "@react-google-maps/api";
import Map, { Pin } from "../components/Map/Map";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { DocumentReference, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

type Library = "places" | "drawing" | "geometry" | "localContext" | "visualization";

const libraries: Library[] = ["places"];

export type Trip = {
  id: string;
  title: string;
  description: string;
  places: Pin[];
  imageUrl: string;
  userEmail: string;
};

const AddTrip = () => {
  const [tripData, setTripData] = useState<Trip>();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const { tripId } = useParams<{ tripId: string }>();

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
    <Map center={{ lat: 45.7749, lng: -122.4194 }} tripData={tripData} tripId={tripId} />
  ) : (
    <div>Loading maps...</div>
  );
};

export const AddTripPage = () => {
  return <AddTrip />;
};
