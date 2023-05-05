import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button/button.styled";
import { StyledForm } from "../../ui/form/form.styled";
import { InputLabel, LabelAndInput, TextInput, TextareaInput } from "../../ui/TextInput/TextInput.styled";
import { useForm } from "react-hook-form";
import { db, auth, storage } from "../../firebase/firebase.config";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { EditProfileWrapper, FormWrapper } from "../../ui/wrapper/wrapper.styled";
import { Header2 } from "../../ui/headers/header.styled";
import { useState } from "react";

type FormData = {
  title: string;
  description: string;
  imageUrl: FileList;
};
const NewTripForm = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const onSubmit = handleSubmit(({ title, description, imageUrl }) => {
    const id = `${title}-${Math.floor(Math.random() * 100000000 + 1)}`;
    if (imageUrl[0].name.split(".")[1] !== `${"jpg" || "jpeg" || "png" || "gif" || "bmp"}`) {
      setError(true);
      return;
    }
    setError(false);
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
          place: "",
          id: id,
        };
        setDoc(tripRef, trip);
      })
      .then(() => navigate(`/add-new-trip/${id}`));
  });

  return (
    <EditProfileWrapper>
      <FormWrapper>
        <StyledForm onSubmit={onSubmit}>
          <Header2 bold>Create a new trip</Header2>
          <LabelAndInput>
            <InputLabel>Trip title</InputLabel>
            <TextInput placeholder="Trip Title" {...register("title")} required />
          </LabelAndInput>
          <LabelAndInput>
            <InputLabel>Description</InputLabel>
            <TextareaInput rows={10} placeholder="Description" {...register("description")} required />
          </LabelAndInput>
          <LabelAndInput>
            <InputLabel>Add a trip image</InputLabel>
            <TextInput type="file" {...register("imageUrl")} accept="image/*" required />
          </LabelAndInput>
          {error && (
            <p style={{ color: "red" }}>Wrong file type! You can only pick images of type: jpg, jpeg, png, bmp, gif</p>
          )}
          <Button>Create and go to next step</Button>
        </StyledForm>
      </FormWrapper>
    </EditProfileWrapper>
  );
};

export default NewTripForm;
