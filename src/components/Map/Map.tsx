import { useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const defaultCenter = {
  lat: 37.7749,
  lng: -122.4194,
};

const Map = () => {
  const [center, setCenter] = useState(defaultCenter);
  const [markerPosition, setMarkerPosition] = useState(defaultCenter);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  return isLoaded ? (
    <div>
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12} options={options}>
        <Marker position={markerPosition} />
      </GoogleMap>
    </div>
  ) : (
    <div>Loading maps...</div>
  );
};

export default Map;
