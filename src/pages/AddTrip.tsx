import { useLoadScript } from "@react-google-maps/api";
import Map from "../components/Map/Map";

const AddTrip = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: [`places`],
  });
  if (loadError) {
    return <div>Error loading maps</div>;
  }

  return isLoaded ? (
    <div>
      <Map markerPosition={{ lat: 1, lng: 1 }} center={{ lat: 45.7749, lng: -122.4194 }} />
    </div>
  ) : (
    <div>Loading maps...</div>
  );
};

export default AddTrip;
