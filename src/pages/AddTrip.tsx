import { useLoadScript } from "@react-google-maps/api";
import Map from "../components/Map/Map";
import { MainNavMenu } from "../components/MainNavMenu/MainNavMenu";
import { Footer } from "../components/Footer/Footer";

type Library = "places" | "drawing" | "geometry" | "localContext" | "visualization";

const libraries: Library[] = ["places"];

const AddTrip = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  if (loadError) {
    return <div>Error loading maps</div>;
  }

  return isLoaded ? <Map center={{ lat: 45.7749, lng: -122.4194 }} /> : <div>Loading maps...</div>;
};

export const AddTripPage = () => {
  return (
    <>
      <MainNavMenu />
      <AddTrip />
      <Footer year={2023} />
    </>
  );
};
