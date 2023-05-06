import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { DocumentReference, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.config";
import { Trip } from "./AddTrip";
import { useLoadScript } from "@react-google-maps/api";
import MapPreview from "../components/MapPreview/MapPreview";
import { Title, TripDescription, TripWrapper } from "../components/MapPreview/MapPreview.styled";
import Modal from "../ui/Modal/Modal";
import PinDetailsCard from "../components/PinDetailsCard/PinDetailsCard";
import { Pin } from "../components/Map/Map";
import { ColumnWrapper, TripFinishedWrapper } from "../ui/wrapper/wrapper.styled";
import { Header4 } from "../ui/headers/header.styled";
import { PinPhotoContainer, PinsWrapper } from "../components/PinPreview/PinPreview.styled";
import PinPreview from "../components/PinPreview/PinPreview";

type Library = "places" | "drawing" | "geometry" | "localContext" | "visualization";

const libraries: Library[] = ["places"];

const TripPage = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const { tripId } = useParams<{ tripId: string }>();
  const [tripData, setTripData] = useState<Trip>();
  const [selectedPlace, setSelectedPlace] = useState<Pin>();
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
    <TripFinishedWrapper>
      <Title>{tripData?.title}</Title>
      <TripWrapper>
        <ColumnWrapper>
          <Header4 bold>Description</Header4>
          <TripDescription>{tripData?.description}</TripDescription>
          <Header4 bold>Places</Header4>
          <PinsWrapper>
            {tripData?.places.map((place) => (
              <PinPhotoContainer key={place.name}>
                <PinPreview src={place.imageRefs} key={place.name} />
              </PinPhotoContainer>
            ))}
          </PinsWrapper>
        </ColumnWrapper>
        <ColumnWrapper>
          <Header4 bold>Map</Header4>
          {loadError ? (
            <div>Error loading maps</div>
          ) : isLoaded && tripData?.places ? (
            <MapPreview tripData={tripData} setIsModalActive={setIsModalActive} setSelectedPlace={setSelectedPlace} />
          ) : (
            <div style={{ margin: "100px" }}>Loading maps...</div>
          )}
        </ColumnWrapper>
      </TripWrapper>
      {isModalActive && (
        <Modal setIsModalActive={setIsModalActive} isModalActive={isModalActive} setSelectedPlace={setSelectedPlace}>
          {selectedPlace && <PinDetailsCard selectedPlace={selectedPlace} />}
        </Modal>
      )}
    </TripFinishedWrapper>
  );
};

export default TripPage;
