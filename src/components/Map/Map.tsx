import { GoogleMap, Marker } from "@react-google-maps/api";
import { MapWrapper } from "./Map.styled";

type Coordinates = {
  lat: number;
  lng: number;
};

type GoogleMapProps = {
  markerPosition: Coordinates;
  center: Coordinates;
};

const mapContainerStyle = {
  width: "100%",
  height: "100%",
  margin: "auto",
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const Map = ({ markerPosition, center }: GoogleMapProps) => {
  return (
    <MapWrapper>
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12} options={options}>
        <Marker position={markerPosition} />
      </GoogleMap>
    </MapWrapper>
  );
};

export default Map;
