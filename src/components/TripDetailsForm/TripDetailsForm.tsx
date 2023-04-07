import { Button } from "../../ui/button/button.styled";
import { StyledFormDetails } from "../../ui/form/form.styled";
import { TextInput } from "../../ui/TextInput/TextInput.styled";
import { useForm } from "react-hook-form";
import { Pin } from "../Map/Map";
import { FakeButton } from "./TripDetailsForm.styled";
type FormData = {
  name: string;
  description: string;
  imagesUrl: string[];
};

type FormProps = {
  clickedPin: Pin;
  setPins: React.Dispatch<React.SetStateAction<Pin[]>>;
  setClickedPin: React.Dispatch<React.SetStateAction<Pin | undefined | null>>;
  deletePin: () => void;
};

const TripDetailsForm = ({ clickedPin, setPins, setClickedPin, deletePin }: FormProps) => {
  const { register, handleSubmit } = useForm<FormData>({
    values: {
      name: clickedPin.name,
      description: clickedPin.description,
      imagesUrl: clickedPin.imagesUrl,
    },
  });

  const onSubmit = handleSubmit(({ name, description, imagesUrl }) => {
    setPins((prev) => {
      const selectedPin = prev.find((pin) => pin.id === clickedPin.id);
      const otherPins = prev.filter((pin) => pin.id !== clickedPin.id);
      return [
        ...otherPins,
        { ...selectedPin, name, description, imagesUrl, lat: selectedPin?.lat || 0, lng: selectedPin?.lng || 0 },
      ];
    });
    setClickedPin(null);
  });

  return (
    <StyledFormDetails onSubmit={onSubmit}>
      <h2>Trip Details</h2>
      <TextInput placeholder="Pin name" type={"text"} {...register("name")} required />
      <TextInput placeholder="Add details" type={"text"} {...register("description")} />
      <TextInput alt="Uppload photos" type={"image"} {...register("imagesUrl")} />
      <FakeButton onClick={deletePin}>Delete</FakeButton>
      <Button>Save</Button>
    </StyledFormDetails>
  );
};

export default TripDetailsForm;
