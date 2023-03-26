import { GoogleMap, Marker } from "@react-google-maps/api";
import { FullWrapper, MapWrapper, SearchbardWrapper } from "./Map.styled";
import { useRef, useCallback, useState } from "react";
import SearchBarInput from "../SerchBarInput/SearchBarInput";

type LatLngLiteral = google.maps.LatLngLiteral;

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
  const [place, setPlace] = useState<LatLngLiteral>();
  const mapRef = useRef<GoogleMap>();
  const onLoad = useCallback((map: any) => (mapRef.current = map), []);

  return (
    <FullWrapper>
      <SearchbardWrapper>
        {!place && <p>Pick your trip place!</p>}
        <SearchBarInput
          setOffice={(position) => {
            setPlace(position);
            mapRef.current?.panTo(position);
          }}
        />
      </SearchbardWrapper>
      <MapWrapper>
        <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12} options={options} onLoad={onLoad}>
          <Marker position={markerPosition} />
        </GoogleMap>
      </MapWrapper>
    </FullWrapper>
  );
};

export default Map;