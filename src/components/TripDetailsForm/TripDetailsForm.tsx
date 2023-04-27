import { Button } from "../../ui/button/button.styled";
import { StyledFormDetails } from "../../ui/form/form.styled";
import { TextInput, TextareaInput } from "../../ui/TextInput/TextInput.styled";
import { useForm } from "react-hook-form";
import { Pin } from "../Map/Map";
import { FakeButton } from "./TripDetailsForm.styled";
import { UploadResult, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { auth, storage } from "../../firebase/firebase.config";
import { useState } from "react";

type FormData = {
  name: string;
  description: string;
  imageUrls: FileList | null | undefined;
};

type FormProps = {
  clickedPin: Pin;
  setPins: React.Dispatch<React.SetStateAction<Pin[]>>;
  setClickedPin: React.Dispatch<React.SetStateAction<Pin | undefined | null>>;
  deletePin: () => void;
  tripId: string | undefined;
};

const TripDetailsForm = ({ clickedPin, setPins, setClickedPin, deletePin, tripId }: FormProps) => {
  const [imageError, setImageError] = useState(false);
  const { register, handleSubmit } = useForm<FormData>({
    values: {
      name: clickedPin.name,
      description: clickedPin.description,
      imageUrls: clickedPin.imageUrls,
    },
  });

  const onSubmit = handleSubmit(({ name, description, imageUrls }) => {
    const promises: Promise<UploadResult>[] = [];
    if (imageUrls) {
      if ([...imageUrls].length > 4) {
        setImageError(true);
        return;
      } else {
        setImageError(false);
        [...imageUrls].forEach((file: Blob) => {
          const imageRef = ref(storage, `${auth.currentUser?.email}/${tripId}/${file.name}`);
          const uploadedImage = uploadBytes(imageRef, file);
          promises.push(uploadedImage);
        });
        Promise.all(promises)
          .then((snapshot) => {
            const urlPromises = snapshot.map((snapshot) => getDownloadURL(snapshot.ref));
            return Promise.all(urlPromises);
          })
          .then((urls) =>
            setPins((prev) => {
              const selectedPin = prev.find((pin) => pin.id === clickedPin.id);
              const otherPins = prev.filter((pin) => pin.id !== clickedPin.id);
              return [
                ...otherPins,
                {
                  ...selectedPin,
                  name,
                  description,
                  imageUrls,
                  imageRefs: urls,
                  lat: selectedPin?.lat || 0,
                  lng: selectedPin?.lng || 0,
                },
              ];
            }),
          )
          .then(() => setClickedPin(null));
      }
    }
  });

  return (
    <StyledFormDetails onSubmit={onSubmit}>
      <h2>Trip Details</h2>
      <TextInput placeholder="Pin name" type={"text"} {...register("name")} required />
      <TextareaInput rows={10} placeholder="Add details" {...register("description")} />
      <TextInput type={"file"} multiple {...register("imageUrls")} />
      {imageError && <p>You can choose maximum 4 pictures for one place!</p>}
      <FakeButton onClick={deletePin}>Delete</FakeButton>
      <Button>Save</Button>
    </StyledFormDetails>
  );
};

export default TripDetailsForm;
