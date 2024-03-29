import { GoogleMap, Marker } from "@react-google-maps/api";
import { useCallback } from "react";
import { Trip } from "../../pages/AddTrip";
import { MapWrapper } from "./MapPreview.styled";
import { LatLngFunctions, Pin } from "../Map/Map";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
  margin: "auto",
  borderRadius: "1.5rem",
};

const options = {
  disableDefaultUI: true,
  zoomControl: false,
  clickableIcons: false,
  mapId: "461a4919bddfec0",
};

type MapProps = {
  tripData: Trip | undefined;
  setIsModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedPlace: React.Dispatch<React.SetStateAction<Pin | undefined>>;
};

const MapPreview = ({ tripData, setIsModalActive, setSelectedPlace }: MapProps) => {
  const onLoad = useCallback((map: google.maps.Map) => {
    const bounds = new window.google.maps.LatLngBounds();
    tripData?.places.forEach((pin) => {
      bounds.extend({ lat: pin.lat, lng: pin.lng });
    });
    map.fitBounds(bounds);
  }, []);

  const onPinClickHandler = (e: google.maps.MapMouseEvent) => {
    const { lat, lng } = e.latLng as LatLngFunctions;
    setIsModalActive(true);
    setSelectedPlace(tripData?.places.find((place) => place.lat === lat() && place.lng === lng()));
  };

  const iconUrl = `${import.meta.env.BASE_URL}icons/icon.png`;
  return (
    <MapWrapper>
      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={12} options={options} onLoad={onLoad}>
        {tripData?.places.map((pin) => (
          <Marker
            key={pin.lat}
            position={pin}
            onClick={onPinClickHandler}
            icon={{
              url: iconUrl,
            }}
          />
        ))}
      </GoogleMap>
    </MapWrapper>
  );
};

export default MapPreview;
