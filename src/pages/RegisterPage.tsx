import { Button } from "../ui/button/button.styled";
import { StyledForm } from "../ui/form/form.styled";
import { useForm, SubmitHandler } from "react-hook-form";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { firebaseErrors } from "../firebase/firebaseErrors";
// import { FirebaseError } from "firebase/app";
import { FirebaseError } from "@firebase/util";
import { useState } from "react";
import { TextInput } from "../ui/TextInput/TextInput.styled";
import { useNavigate } from "react-router-dom";
import { ImgWrapper, SignInWrapper } from "../ui/wrapper/wrapper.styled";
import { ImgSignIn } from "../ui/img/img.styled";
import { Header2, Header4Form } from "../ui/headers/header.styled";

// import { Navigate } from "react-router-dom";

interface IFormInput {
  email: string;
  password: string;
}

type FirebaseErrorsKeys = keyof typeof firebaseErrors;

const RegisterPage = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<IFormInput> = ({ email, password }) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => signInWithEmailAndPassword(auth, email, password))
      .then(() => navigate(`/account`))
      .catch((error: FirebaseError) => {
        setError(firebaseErrors[error.code as FirebaseErrorsKeys]);
      });
  };
  return (
    <SignInWrapper>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Header2>Register</Header2>
        <Header4Form bold>Email</Header4Form>
        <TextInput placeholder="Type email" {...register("email")} />
        <Header4Form bold>Password</Header4Form>
        <TextInput placeholder="Type password" {...register("password")} />
        <Button type="submit">Register</Button>
        {error}
      </StyledForm>
      <ImgWrapper>
        <ImgSignIn src="https://firebasestorage.googleapis.com/v0/b/bonvoyage-e7ad8.appspot.com/o/website-backgrounds%2Fpexels-element-digital-1051075.jpg?alt=media&token=75bdcfa6-7fb2-44ba-b032-63a6099b1c82" />
      </ImgWrapper>
    </SignInWrapper>
  );
};

export default RegisterPage;
