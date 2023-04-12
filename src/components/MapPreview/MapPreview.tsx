import { GoogleMap, Marker } from "@react-google-maps/api";
import { useCallback, useRef } from "react";
import { Trip } from "../../pages/AddTrip";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
  margin: "auto",
};

const options = {
  disableDefaultUI: true,
  zoomControl: false,
  clickableIcons: false,
};

type Coordinates = {
  lat: number;
  lng: number;
};

type MapProps = {
  center: Coordinates;
  tripData: Trip | undefined;
};

const MapPreview = ({ center, tripData }: MapProps) => {
  const mapRef = useRef<GoogleMap>();
  const onLoad = useCallback((map: any) => (mapRef.current = map), []);

  const onPinClickHandler = () => {
    console.log("test");
  };
  return (
    <div>
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12} options={options} onLoad={onLoad}>
        {tripData?.places.map((pin) => (
          <Marker key={pin.lat} position={pin} onClick={onPinClickHandler} />
        ))}
      </GoogleMap>
    </div>
  );
};

export default MapPreview;
