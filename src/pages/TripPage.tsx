import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { DocumentReference, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.config";
import { Trip } from "./AddTrip";
import { useLoadScript } from "@react-google-maps/api";
import MapPreview from "../components/MapPreview/MapPreview";
import { Title, TripDescription, TripSection, TripWrapper } from "../components/MapPreview/MapPreview.styled";

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

  return (
    <div>
      <TripWrapper>
        <Title>{tripData?.title}</Title>
        <TripSection>
          <TripDescription>{tripData?.description}</TripDescription>
          {loadError ? (
            <div>Error loading maps</div>
          ) : isLoaded && tripData?.places ? (
            <MapPreview tripData={tripData} />
          ) : (
            <div style={{ margin: "100px" }}>Loading maps...</div>
          )}
        </TripSection>
      </TripWrapper>
    </div>
  );
};

export default TripPage;