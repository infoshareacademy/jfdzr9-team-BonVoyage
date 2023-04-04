import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button/button.styled";
import { StyledFormNewTrip } from "../../ui/form/form.styled";
import { TextInput } from "../../ui/TextInput/TextInput.styled";
import { useForm } from "react-hook-form";
import { db, auth } from "../../firebase/firebase.config";
import { doc, setDoc } from "firebase/firestore";

type FormData = {
  title: string;
  description: string;
  imageUrl: string[];
};
const NewTripForm = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const navigate = useNavigate();
  const onSubmit = handleSubmit(({ title, description, imageUrl }) => {
    const id = `${title}-${Math.floor(Math.random() * 1000000 + 1)}`;
    const trip = { title, description, imageUrl, userEmail: auth.currentUser?.email, places: [] };
    const tripRef = doc(db, "trips", id);
    setDoc(tripRef, trip);
    navigate(`/voyages/${id}`);
  });

  return (
    <StyledFormNewTrip onSubmit={onSubmit}>
      <h1>Create new trip</h1>
      <TextInput placeholder="Trip Title" {...register("title")} required />
      <TextInput placeholder="Description" {...register("description")} required />
      <TextInput type="text" {...register("imageUrl")} />
      <Button>Create and go to next step</Button>
    </StyledFormNewTrip>
  );
};

export default NewTripForm;
