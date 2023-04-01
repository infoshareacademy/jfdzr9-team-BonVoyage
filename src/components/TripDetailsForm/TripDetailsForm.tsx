import { Button } from "../../ui/button/button.styled";
import { StyledForm } from "../../ui/form/form.styled";
import { TextInput } from "../../ui/TextInput/TextInput.styled";
import { useForm } from "react-hook-form";
import { Pin } from "../Map/Map";

type FormData = {
  name: string;
  description: string;
  imagesUrl: string[];
};

type FormProps = {
  clickedPin: Pin;
  setPins: React.Dispatch<React.SetStateAction<Pin[]>>;
  setClickedPin: React.Dispatch<React.SetStateAction<Pin | undefined>>;
};

const TripDetailsForm = ({ clickedPin, setPins, setClickedPin }: FormProps) => {
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
    setClickedPin(undefined);
  });

  return (
    <StyledForm onSubmit={onSubmit}>
      <h2>Trip Details</h2>
      <TextInput placeholder="Pin name" type={"text"} {...register("name")} />
      <TextInput placeholder="Add details" type={"text"} {...register("description")} />
      <TextInput alt="Uppload photos" type={"image"} {...register("imagesUrl")} />
      <Button>Save</Button>
    </StyledForm>
  );
};

export default TripDetailsForm;
