import { GoogleMap, Marker } from "@react-google-maps/api";
import { FullWrapper, MapWrapper } from "./Map.styled";
import { useRef, useCallback, useState, useEffect } from "react";
import SearchBarInput from "../SearchBarInput/SearchBarInput";
import TripDetailsForm from "../TripDetailsForm/TripDetailsForm";
import { Trip } from "../../pages/AddTrip";
import { doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firebase/firebase.config";
import { deleteObject, ref } from "firebase/storage";
import { Button } from "../../ui/button/button.styled";
import { useNavigate } from "react-router-dom";
import { FormWrapper } from "../../ui/wrapper/wrapper.styled";
import { LabelAndInput, InputLabel } from "../../ui/TextInput/TextInput.styled";

type LatLngLiteral = google.maps.LatLngLiteral;

export type LatLngFunctions = {
  lat: () => number;
  lng: () => number;
};

export type Coordinates = {
  lat: number;
  lng: number;
};

export type Pin = Coordinates & {
  id?: number;
  name: string;
  description: string;
  imageUrls?: FileList | null | undefined;
  imageRefs: string[] | null;
};

type GoogleMapProps = {
  center: Coordinates;
  tripId: string | undefined;
  tripData: Trip | undefined;
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
  mapId: "461a4919bddfec0",
};

const Map = ({ center, tripId, tripData }: GoogleMapProps) => {
  const navigate = useNavigate();
  const [pins, setPins] = useState<Pin[]>(tripData?.places || []);
  const [place, setPlace] = useState<LatLngLiteral | undefined>(tripData?.place);
  const [clickedPin, setClickedPin] = useState<Pin | null>();
  const mapRef = useRef<google.maps.Map>();
  const onLoad = useCallback((map: google.maps.Map) => {
    if (tripData?.places.length === 0) mapRef.current = map;
    else {
      const bounds = new window.google.maps.LatLngBounds();
      tripData?.places.forEach((pin) => {
        bounds.extend({ lat: pin.lat, lng: pin.lng });
      });
      map.fitBounds(bounds);
    }
  }, []);
  const [error, setError] = useState(false);

  const addNewPin = (e: google.maps.MapMouseEvent) => {
    setError(false);
    if (!place) return;
    const { lat, lng } = e.latLng as LatLngFunctions;

    const emptyPin = pins.find((pin) => !pin.description && !pin.imageUrls && !pin.name);
    if (emptyPin) {
      setPins((prev) => {
        const newPins = prev.filter((pin) => pin.id !== emptyPin.id);
        return [
          ...newPins,
          { lat: lat(), lng: lng(), id: lat() * lng(), name: "", description: "", imageUrls: null, imageRefs: null },
        ];
      });
    } else
      setPins((prev) => [
        ...prev,
        { lat: lat(), lng: lng(), id: lat() * lng(), name: "", description: "", imageUrls: null, imageRefs: null },
      ]);
    setClickedPin({
      lat: lat(),
      lng: lng(),
      id: lat() * lng(),
      name: "",
      description: "",
      imageUrls: null,
      imageRefs: null,
    });
  };

  const onPinClickHandler = (e: google.maps.MapMouseEvent) => {
    setError(false);

    const { lat, lng } = e.latLng as LatLngFunctions;
    setClickedPin(pins.find((pin) => pin.lat === lat() && pin.lng === lng()));
  };

  const deletePin = () => {
    if (clickedPin?.imageRefs?.length !== 0) {
      clickedPin?.imageRefs?.forEach((url) => {
        const imageRef = ref(storage, url);
        deleteObject(imageRef);
      });
    }
    setPins((prev) => prev.filter((pin) => pin.lat !== clickedPin?.lat && pin.lng !== clickedPin?.lng));
    setClickedPin(undefined);
  };

  useEffect(() => {
    const tripRef = doc(db, "trips", `${tripId}`);
    if (clickedPin && !clickedPin?.name && !clickedPin?.description && !clickedPin?.imageRefs) return;
    updateDoc(tripRef, {
      ...tripData,
      places: pins?.map((pin) => ({ ...pin, imageUrls: [] })),
      place,
    });
  }, [pins]);

  const finishTrip = () => {
    if (pins.length === 0) {
      setError(true);
      return;
    }
    const tripRef = doc(db, "trips", `${tripId}`);
    updateDoc(tripRef, {
      ...tripData,
      places: pins.map((pin) => ({ ...pin, imageUrls: [] })).filter((pin) => pin.name.trim().length > 0),
      inProgress: false,
    });
    navigate(`/voyages/${tripId}`);
  };

  return (
    <FullWrapper>
      <FormWrapper padding>
        <LabelAndInput>
          {!place && <InputLabel>Pick your trip place!</InputLabel>}
          <SearchBarInput
            setCity={(position) => {
              setPlace(position);
              mapRef.current?.panTo(position);
            }}
          />
          {clickedPin && (
            <TripDetailsForm
              deletePin={deletePin}
              clickedPin={clickedPin}
              setPins={setPins}
              setClickedPin={setClickedPin}
              tripId={tripId}
            />
          )}
        </LabelAndInput>
        {clickedPin === null && <p>Your pin was succesfully saved!</p>}
        {!clickedPin && <Button onClick={finishTrip}>Save and finish trip</Button>}
        {error && <p>There must be at least one place in your trip to finish it!</p>}
      </FormWrapper>

      <MapWrapper>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={tripData?.place.lat ? tripData.place : center}
          zoom={12}
          options={options}
          onLoad={onLoad}
          onClick={addNewPin}
        >
          {place &&
            pins?.map((pin) => (
              <Marker
                key={pin.lat}
                position={pin}
                onClick={onPinClickHandler}
                icon={{
                  url: clickedPin?.lat === pin.lat && clickedPin.lng === pin.lng ? "/clickedIcon.png" : "/icon.png",
                }}
              />
            ))}
        </GoogleMap>
      </MapWrapper>
    </FullWrapper>
  );
};

export default Map;
