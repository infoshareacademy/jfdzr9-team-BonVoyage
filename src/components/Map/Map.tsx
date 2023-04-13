import { GoogleMap, Marker } from "@react-google-maps/api";
import { FullWrapper, MapWrapper, SearchbardWrapper } from "./Map.styled";
import { useRef, useCallback, useState, useEffect } from "react";
import SearchBarInput from "../SearchBarInput/SearchBarInput";
import TripDetailsForm from "../TripDetailsForm/TripDetailsForm";
import { Trip } from "../../pages/AddTrip";
import { doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firebase/firebase.config";
import { StorageReference, UploadResult, deleteObject, ref, uploadBytes } from "firebase/storage";

type LatLngLiteral = google.maps.LatLngLiteral;

type LatLngFunctions = {
  lat: () => number;
  lng: () => number;
};

type Coordinates = {
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

export type PinImage = {
  file: Blob;
  ref: StorageReference;
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

const Map = ({ center, tripId, tripData }: GoogleMapProps) => {
  const [pins, setPins] = useState<Pin[]>([]);
  const [place, setPlace] = useState<LatLngLiteral>();
  const [clickedPin, setClickedPin] = useState<Pin | null>();
  const [pinImages, setPinImages] = useState<PinImage[]>([]);
  const mapRef = useRef<GoogleMap>();
  const onLoad = useCallback((map: any) => (mapRef.current = map), []);

  const addNewPin = (e: google.maps.MapMouseEvent) => {
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
    const promises: Promise<UploadResult>[] = [];
    pinImages.forEach(({ file, ref }) => {
      const uploadedImage = uploadBytes(ref, file);
      promises.push(uploadedImage);
    });
    Promise.all(promises).catch((err) => console.log(err));
    updateDoc(tripRef, { ...tripData, places: pins.map((pin) => ({ ...pin, imageUrls: [] })) });
    setPinImages([]);
  }, [pins]);

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
        {clickedPin && (
          <TripDetailsForm
            deletePin={deletePin}
            clickedPin={clickedPin}
            setPins={setPins}
            setClickedPin={setClickedPin}
            tripId={tripId}
            setPinImages={setPinImages}
          />
        )}
        {clickedPin === null && <p>Your pin was succesfully saved!</p>}
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
