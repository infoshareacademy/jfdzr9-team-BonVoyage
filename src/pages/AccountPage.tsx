import { useState } from "react";
import { useUser } from "../context/auth.context";
import { addUsersDetails } from "../firebase/addUsersDetails";
import { TextInput } from "../ui/TextInput/TextInput.styled";
import { StyledForm } from "../ui/form/form.styled";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../ui/button/button.styled";

export interface UsersDetailsFormInput {
  firstName: string;
  lastName: string;
  imageUrl: string;
  city: string;
  userEmail?: string;
}

const AccountPage = () => {
  const { register, handleSubmit } = useForm<UsersDetailsFormInput>();
  const [success, setSuccess] = useState(false);

  const user = useUser();

  const onSubmit: SubmitHandler<UsersDetailsFormInput> = (data) => {
    addUsersDetails(data, user.uid).then(() => {
      setSuccess(true);
    });
  };

  return user ? (
    <>
      {success ? (
        <h2>You just added your account details</h2>
      ) : (
        <>
          {" "}
          <h1>Hello {user.email} please fill in this form:</h1>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <TextInput placeholder="First name" type={"text"} {...register("firstName")} required />
            <TextInput placeholder="Last name" type={"text"} {...register("lastName")} required />
            <TextInput placeholder="City" type={"text"} {...register("city")} required />
            <TextInput alt="Uppload photos" type={"image"} {...register("imageUrl")} />
            <Button type="submit">Submit</Button>
          </StyledForm>{" "}
        </>
      )}
    </>
  ) : (
    <h1>You are not logged in</h1>
  );
};

export default AccountPage;
