import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button/button.styled";
import { StyledFormNewTrip } from "../../ui/form/form.styled";
import { TextInput } from "../../ui/TextInput/TextInput.styled";
import { useForm } from "react-hook-form";

type FormData = {
  title: string;
  description: string;
  imageUrl: string[];
};
const NewTripForm = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const navigate = useNavigate();
  const onSubmit = handleSubmit(({ title, description, imageUrl }) => {
    console.log(title, description, imageUrl);
    navigate("/voyages2");
  });

  return (
    <StyledFormNewTrip onSubmit={onSubmit}>
      <h1>Create new trip</h1>
      <TextInput placeholder="Trip Title" {...register("title")} required />
      <TextInput placeholder="Description" {...register("description")} required />
      <TextInput type="file" {...register("imageUrl")} required />
      <Button>Create and go to next step</Button>
    </StyledFormNewTrip>
  );
};

export default NewTripForm;
