import { GoogleMap, Marker } from "@react-google-maps/api";
import { Pin } from "../Map/Map";
import { useCallback, useRef } from "react";
import { LatLng } from "use-places-autocomplete";
import { Gallery, PlaceWrapper, Title, TripDescription } from "./PinDetailsCard.styled";

type Props = {
  selectedPlace: Pin;
};

const mapContainerStyle = {
  width: "100%",
  height: "100%",
  margin: "auto",
  borderRadius: "5vw",
};

const options = {
  disableDefaultUI: true,
  zoomControl: false,
  clickableIcons: false,
  mapId: "461a4919bddfec0",
};

const PinDetailsCard = ({ selectedPlace }: Props) => {
  const center: LatLng = { lat: selectedPlace.lat, lng: selectedPlace.lng };
  const mapRef = useRef<GoogleMap>();
  const onLoad = useCallback((map: any) => (mapRef.current = map), []);
  return (
    <PlaceWrapper>
      <Title>{selectedPlace?.name}</Title>
      <Gallery>
        {selectedPlace?.imageRefs?.map((url) => (
          <img key={url} src={url} style={{ width: "150px", height: "100px" }} />
        ))}
      </Gallery>
      <TripDescription>{selectedPlace?.description}</TripDescription>
      <div style={{ width: "100%", height: "200px" }}>
        <GoogleMap mapContainerStyle={mapContainerStyle} zoom={15} options={options} onLoad={onLoad} center={center}>
          <Marker
            key={selectedPlace?.lat}
            position={selectedPlace}
            icon={{
              url: "../../../public/icons/icon.png",
            }}
          />
        </GoogleMap>
      </div>
    </PlaceWrapper>
  );
};

export default PinDetailsCard;
