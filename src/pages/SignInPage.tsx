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
import { MainNavMenu } from "../components/MainNavMenu/MainNavMenu";
import { Footer } from "../components/Footer/Footer";

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
    <>
      <MainNavMenu />
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign in to existing account:</h1>
        <TextInput placeholder="Type email" {...register("email")} />
        <TextInput placeholder="Type password" {...register("password")} />
        <Button type="submit">Login</Button>
        <Button onClick={googleLogin}>
          <FcGoogle />
          Sign in with Google
        </Button>
        <h3>Do you want to create a new account?</h3>
        <Link to={"/signIn/register"}>Register</Link>
        {error}
      </StyledForm>
      <Footer year={2023} />
    </>
  );
};

export default SignInPage;
