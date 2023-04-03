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
  const onSubmit = handleSubmit(({ title, description, imageUrl }) => {
    console.log(title, description, imageUrl);
  });

  return (
    <StyledFormNewTrip onSubmit={onSubmit}>
      <h1>Create new trip</h1>
      <TextInput placeholder="Trip Title" {...register("title")} />
      <TextInput placeholder="Description" {...register("description")} />
      <TextInput type="file" {...register("imageUrl")} />
      <Button>Create and go to next step</Button>
    </StyledFormNewTrip>
  );
};

export default NewTripForm;
