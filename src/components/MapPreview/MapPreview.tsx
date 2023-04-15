import { GoogleMap, Marker } from "@react-google-maps/api";
import { useCallback } from "react";
import { Trip } from "../../pages/AddTrip";
import { MapWrapper } from "./MapPreview.styled";

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
  // mapId: "461a4919bddfec0",
};

type MapProps = {
  tripData: Trip | undefined;
  setIsModalActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const MapPreview = ({ tripData, setIsModalActive }: MapProps) => {
  const onLoad = useCallback((map: any) => {
    const bounds = new window.google.maps.LatLngBounds();
    tripData?.places.forEach((pin) => {
      bounds.extend({ lat: pin.lat, lng: pin.lng });
    });
    map.fitBounds(bounds);
  }, []);

  const onPinClickHandler = () => {
    setIsModalActive(true);
  };
  return (
    <MapWrapper>
      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={12} options={options} onLoad={onLoad}>
        {tripData?.places.map((pin) => (
          <Marker key={pin.lat} position={pin} onClick={onPinClickHandler} />
        ))}
      </GoogleMap>
    </MapWrapper>
  );
};

export default MapPreview;
