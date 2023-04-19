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
import { TextInput } from "../ui/TextInput/TextInput.styled";
import { ButtonsJumbotronWrapper, SignInWrapper } from "../ui/wrapper/wrapper.styled";
import { ImgSignIn } from "../ui/img/img.styled";
import { Header2 } from "../ui/headers/header.styled";

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
        <TextInput placeholder="Type email" {...register("email")} />
        <TextInput placeholder="Type password" {...register("password")} />
        <ButtonsJumbotronWrapper>
          <Button white={false} secondary type="submit">
            Login
          </Button>
          <Button white={false} onClick={googleLogin}>
            <FcGoogle />
            Sign in with Google
          </Button>
        </ButtonsJumbotronWrapper>
        <p>Do you want to create a new account?</p>
        <Link to={"/signIn/register"}>Register</Link>
        {error}
      </StyledForm>
      <ImgSignIn src="https://firebasestorage.googleapis.com/v0/b/bonvoyage-e7ad8.appspot.com/o/website-backgrounds%2Fpexels-element-digital-1051072.jpg?alt=media&token=2b7f3aaf-fc7b-4423-b271-f4609d864eb2" />
    </SignInWrapper>
  );
};

export default SignInPage;
