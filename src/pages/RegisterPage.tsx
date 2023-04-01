import { Button } from "../ui/button/button.styled";
import { StyledForm } from "../ui/form/form.styled";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { firebaseErrors } from "../firebase/firebaseErrors";
// import { FirebaseError } from "firebase/app";
import { FirebaseError } from "@firebase/util";
import { useState } from "react";
import { TextInputProps } from "../ui/TextInput/TextInputProps";
import { TextInput } from "../ui/TextInput/TextInput.styled";
import { Navigate } from "react-router-dom";

interface IFormInput {
  email: string;
  password: string;
}

type FirebaseErrorsKeys = keyof typeof firebaseErrors;

const RegisterPage = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const [error, setError] = useState("");
  const onSubmit: SubmitHandler<IFormInput> = ({ email, password }) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => signOut(auth))
      .catch((error: FirebaseError) => {
        setError(firebaseErrors[error.code as FirebaseErrorsKeys]);
      });
  };
  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <h1>Register</h1>
        {/* <Controller
          name="email"
          control={control}
          render={({ field }) => <TextInputProps placeholder="Type email" type={"email"} {...field} />}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => <TextInputProps placeholder="Type password" type={"password"} {...field} />}
        /> */}
        <TextInput placeholder="Type email" {...register("email")} />
        <TextInput placeholder="Type password" {...register("password")} />
        <Button type="submit">Register</Button>
        {error}
      </StyledForm>
    </>
  );
};

export default RegisterPage;
