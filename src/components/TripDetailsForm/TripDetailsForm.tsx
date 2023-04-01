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
  pinId: number;
  pins: Pin[];
  setPins: React.Dispatch<React.SetStateAction<Pin[]>>;
};

const TripDetailsForm = ({ pinId, pins, setPins }: FormProps) => {
  // const selectedPin = pins?.find((pin) => pin.id === pinId);

  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit(({ name, description, imagesUrl }) => {
    setPins((prev) => {
      const selectedPin = prev.find((pin) => pin.id === pinId);
      const otherPins = prev.filter((pin) => pin.id !== pinId);
      return [...otherPins, { ...selectedPin, name, description, imagesUrl }];
    });
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
