import { useLoadScript } from "@react-google-maps/api";
import Map, { Coordinates, Pin } from "../components/Map/Map";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { DocumentReference, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

type Library = "places" | "drawing" | "geometry" | "localContext" | "visualization";

type LatLngLiteral = google.maps.LatLngLiteral;

const libraries: Library[] = ["places"];

export type Trip = {
  id: string;
  title: string;
  description: string;
  places: Pin[];
  imageUrl: string;
  userEmail: string;
  inProgress: boolean;
  center: Coordinates;
  place: LatLngLiteral;
  likes: string[];
};

const AddTripPage = () => {
  const [tripData, setTripData] = useState<Trip>();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const navigate = useNavigate();
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
  if (tripData?.inProgress === false) navigate(`/voyages/${tripId}`);
  if (loadError) {
    return <div>Error loading maps</div>;
  }

  return isLoaded && tripData ? (
    <Map center={{ lat: 45.7749, lng: -122.4194 }} tripData={tripData} tripId={tripId} />
  ) : (
    <div>Loading maps...</div>
  );
};

export default AddTripPage;
