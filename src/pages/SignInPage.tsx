import { useForm, SubmitHandler } from "react-hook-form";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState, useEffect } from "react";
import { FirebaseError } from "@firebase/util";
import { firebaseErrors } from "../firebase/firebaseErrors";
import { StyledForm } from "../ui/form/form.styled";
import { Button } from "../ui/button/button.styled";
import { auth } from "../firebase/firebase.config";
import { FcGoogle } from "react-icons/fc";
import { useUser } from "../context/auth.context";
import { Link, useNavigate } from "react-router-dom";
import { LabelAndInput, TextInput, InputLabel } from "../ui/TextInput/TextInput.styled";
import { ButtonsRowWrapper, ImgWrapper, SignInWrapper } from "../ui/wrapper/wrapper.styled";
import { ImgSignIn } from "../ui/img/img.styled";
import { Header2 } from "../ui/headers/header.styled";
import { useMediaQuery } from "../hooks/UseMediaQuery";

interface IFormInputs {
  email: string;
  password: string;
}

type FirebaseErrorsKeys = keyof typeof firebaseErrors;

const SignInPage = () => {
  const user = useUser();
  const { handleSubmit, register } = useForm<IFormInputs>();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const bigScreen = useMediaQuery("(min-width: 768px)");

  const onSubmit: SubmitHandler<IFormInputs> = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => navigate(`/account`))
      .catch((error: FirebaseError) => {
        setError(firebaseErrors[(error as FirebaseError).code as FirebaseErrorsKeys]);
      });
  };

  const googleProvider = new GoogleAuthProvider();
  const googleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error: unknown) {
      setError(firebaseErrors[(error as FirebaseError).code as FirebaseErrorsKeys]);
    }
  };

  useEffect(() => {
    if (user) navigate("/account");
  }, [user]);

  return (
    <SignInWrapper>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Header2>Welcome back!</Header2>
        <p>Sign in to your account and start planning new adventures!</p>
        <LabelAndInput>
          <InputLabel>Email</InputLabel>
          <TextInput placeholder="Enter your email" type="email" {...register("email")} />
        </LabelAndInput>
        <LabelAndInput>
          <InputLabel>Password</InputLabel>
          <TextInput placeholder="Enter password" type="password" {...register("password")} />
        </LabelAndInput>
        <ButtonsRowWrapper>
          <Button vwmax type="submit">
            Login
          </Button>
          <Button vwmax secondary onClick={googleLogin}>
            <FcGoogle />
            Sign in with Google
          </Button>
        </ButtonsRowWrapper>
        <p>Do you want to create a new account?</p>
        <Link to="/signIn/register">
          <Button secondary vwmax>
            Register
          </Button>
        </Link>
        {error}
      </StyledForm>
      {bigScreen ? (
        <ImgWrapper>
          <ImgSignIn src="https://firebasestorage.googleapis.com/v0/b/bonvoyage-e7ad8.appspot.com/o/website-backgrounds%2Fpexels-element-digital-1051072.jpg?alt=media&token=2b7f3aaf-fc7b-4423-b271-f4609d864eb2" />
        </ImgWrapper>
      ) : (
        <></>
      )}
    </SignInWrapper>
  );
};

export default SignInPage;
