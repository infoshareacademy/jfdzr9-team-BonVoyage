import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button/button.styled";
import { StyledFormNewTrip } from "../../ui/form/form.styled";
import { TextInput, TextareaInput } from "../../ui/TextInput/TextInput.styled";
import { useForm } from "react-hook-form";
import { db, auth, storage } from "../../firebase/firebase.config";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

type FormData = {
  title: string;
  description: string;
  imageUrl: FileList;
};
const NewTripForm = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const navigate = useNavigate();
  const onSubmit = handleSubmit(({ title, description, imageUrl }) => {
    const id = `${title}-${Math.floor(Math.random() * 100000000 + 1)}`;
    const imageRef = ref(storage, `${auth.currentUser?.email}/${id}/${imageUrl[0].name}`);
    const tripRef = doc(db, "trips", id);

    uploadBytes(imageRef, imageUrl[0])
      .then((snapshot) => getDownloadURL(snapshot.ref))
      .then((url) => {
        const trip = {
          title,
          description,
          imageUrl: url,
          userEmail: auth.currentUser?.email,
          inProgress: true,
          places: [],
          id: id,
        };
        setDoc(tripRef, trip);
      })
      .then(() => navigate(`/add-new-trip/${id}`));
  });

  return (
    <StyledFormNewTrip onSubmit={onSubmit}>
      <h1>Create new trip</h1>
      <TextInput placeholder="Trip Title" {...register("title")} required />
      <TextareaInput rows={10} placeholder="Description" {...register("description")} required />
      <TextInput type="file" {...register("imageUrl")} required />
      <Button>Create and go to next step</Button>
    </StyledFormNewTrip>
  );
};

export default NewTripForm;
