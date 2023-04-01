import { GoogleMap, Marker } from "@react-google-maps/api";
import { FullWrapper, MapWrapper, SearchbardWrapper } from "./Map.styled";
import { useRef, useCallback, useState } from "react";
import SearchBarInput from "../SearchBarInput/SearchBarInput";
import TripDetailsForm from "../TripDetailsForm/TripDetailsForm";

type LatLngLiteral = google.maps.LatLngLiteral;

type LatLngFunctions = {
  lat: () => number;
  lng: () => number;
};

type Coordinates = {
  lat: number;
  lng: number;
};

type Pin = Coordinates & {
  id: number;
  name: string;
  description: string;
  imagesUrl: string[];
};

type GoogleMapProps = {
  center: Coordinates;
};

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

const Map = ({ center }: GoogleMapProps) => {
  const [pins, setPins] = useState<Pin[]>([]);
  const [place, setPlace] = useState<LatLngLiteral>();
  const [clickedPin, setClickedPin] = useState<Pin>();
  const mapRef = useRef<GoogleMap>();
  const onLoad = useCallback((map: any) => (mapRef.current = map), []);

  const addNewPin = (e: google.maps.KmlMouseEvent) => {
    setClickedPin(undefined);
    const { lat, lng } = e.latLng as LatLngFunctions;
    const emptyPin = pins.find((pin) => !pin.description && pin.imagesUrl.length === 0 && !pin.name);
    if (emptyPin) {
      setPins((prev) => {
        const newPins = prev.filter((pin) => pin.id !== emptyPin.id);
        return [...newPins, { lat: lat(), lng: lng(), id: lat() * lng(), name: "", description: "", imagesUrl: [] }];
      });
    } else
      setPins((prev) => [
        ...prev,
        { lat: lat(), lng: lng(), id: lat() * lng(), name: "", description: "", imagesUrl: [] },
      ]);
  };

  const onPinClickHandler = (e: google.maps.MapMouseEvent) => {
    const { lat, lng } = e.latLng as LatLngFunctions;
    setClickedPin(pins.find((pin) => pin.lat === lat() && pin.lng === lng()));
  };
  return (
    <FullWrapper>
      <SearchbardWrapper>
        {!place && <p>Pick your trip place!</p>}
        <SearchBarInput
          setCity={(position) => {
            setPlace(position);
            mapRef.current?.panTo(position);
          }}
        />
        {clickedPin && <TripDetailsForm />}
      </SearchbardWrapper>
      <MapWrapper>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={12}
          options={options}
          onLoad={onLoad}
          onClick={addNewPin}
        >
          {place && pins.map((pin) => <Marker key={pin.lat} position={pin} onClick={onPinClickHandler} />)}
        </GoogleMap>
      </MapWrapper>
    </FullWrapper>
  );
};

export default Map;
