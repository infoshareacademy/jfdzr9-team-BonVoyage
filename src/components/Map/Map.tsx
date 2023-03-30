import { GoogleMap, Marker } from "@react-google-maps/api";
import { FullWrapper, MapWrapper, SearchbardWrapper } from "./Map.styled";
import { useRef, useCallback, useState } from "react";
import SearchBarInput from "../SerchBarInput/SearchBarInput";

type LatLngLiteral = google.maps.LatLngLiteral;

type LatLngFunctions = {
  lat: () => number;
  lng: () => number;
};

type Coordinates = {
  lat: number;
  lng: number;
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
  const [pins, setPins] = useState<Coordinates[]>([]);
  const [place, setPlace] = useState<LatLngLiteral>();
  const mapRef = useRef<GoogleMap>();
  const onLoad = useCallback((map: any) => (mapRef.current = map), []);

  const addNewPin = (e: google.maps.MapMouseEvent) => {
    const { lat, lng } = e.latLng as LatLngFunctions;
    setPins((prev) => [...prev, { lat: lat(), lng: lng() }]);
  };

  console.log(pins);
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
          {place && pins.map((pin) => <Marker key={pin.lat} position={pin} />)}
        </GoogleMap>
      </MapWrapper>
    </FullWrapper>
  );
};

export default Map;
