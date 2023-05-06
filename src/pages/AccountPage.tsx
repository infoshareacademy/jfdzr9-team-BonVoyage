import { useState } from "react";
import { useUser } from "../context/auth.context";
import { addUsersDetails } from "../firebase/addUsersDetails";
import { TextInput } from "../ui/TextInput/TextInput.styled";
import { StyledForm } from "../ui/form/form.styled";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../ui/button/button.styled";
import UsersDetails from "../components/UsersDetails/UsersDetails";
import { NavLink } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/firebase.config";
import { AccountPageWrapper } from "../components/TripsList/TripsList.styled";
import { TripsList } from "../components/TripsList/TripsList";

export interface UsersDetailsFormInput {
  firstName: string;
  lastName: string;
  imageUrl: string;
  city: string;
  bio: string;
}

const AccountPage = () => {
  const { register, handleSubmit, setValue } = useForm<UsersDetailsFormInput>();
  const [success, setSuccess] = useState(true);

  const [file, setFile] = useState<File | null>(null);

  const user = useUser();

  const uploadImage = () => {
    if (!file) return;
    const imageRef = ref(storage, `users-avatar/${user?.uid}`);
    uploadBytes(imageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setValue("imageUrl", url);
      });
    });
  };

  const onSubmit: SubmitHandler<UsersDetailsFormInput> = (data) => {
    if (user) {
      addUsersDetails(data, user.uid).then(() => {
        setSuccess(true);
      });
    }
  };

  return user ? (
    <>
      {success ? (
        <AccountPageWrapper>
          <UsersDetails />
          <Button
            onClick={() => {
              setSuccess(false);
            }}
          >
            Edit profile
          </Button>
          <NavLink to="/voyages">
            <Button>Add new trip</Button>
          </NavLink>
          <TripsList />
        </AccountPageWrapper>
      ) : (
        <AccountPageWrapper>
          {" "}
          <h1>Hello {user.email} please fill in this form:</h1>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                type="file"
                onChange={(e) => {
                  e.preventDefault();
                  if (!e.target.files) return;
                  setFile(e.target.files[0]);
                }}
              ></input>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  uploadImage();
                }}
              >
                Upload image
              </Button>
            </div>
            <TextInput placeholder="First name" type={"text"} {...register("firstName")} required />
            <TextInput placeholder="Last name" type={"text"} {...register("lastName")} required />
            <TextInput placeholder="City" type={"text"} {...register("city")} required />
            <TextInput placeholder="Bio" type={"text"} {...register("bio")} required />
            <TextInput alt="Uppload photos" type={"hidden"} {...register("imageUrl")} />
            <Button type="submit">Submit</Button>
          </StyledForm>{" "}
        </AccountPageWrapper>
      )}
    </>
  ) : (
    <h1>You are not logged in</h1>
  );
};

export default AccountPage;
