import { useForm, SubmitHandler } from "react-hook-form";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { FirebaseError } from "@firebase/util";
import { Link } from "react-router-dom";
import { firebaseErrors } from "../firebase/firebaseErrors";
import { StyledForm } from "../ui/form/form.styled";
import { Button } from "../ui/button/button.styled";
import { auth } from "../firebase/firebase.config";
import { FcGoogle } from "react-icons/fc";
import { TextInput } from "../ui/TextInput/TextInput.styled";

interface IFormInputs {
  email: string;
  password: string;
}
type FirebaseErrorsKeys = keyof typeof firebaseErrors;

const SignInPage = () => {
  const { handleSubmit } = useForm<IFormInputs>();
  const [error, setError] = useState("");

  const onSubmit: SubmitHandler<IFormInputs> = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then()
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

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign in to existing account:</h1>
      <TextInput placeholder="Type email" type={"email"} />
      <TextInput placeholder="Type password" type={"password"} />
      <Button type="submit">Register</Button>
      <Button onClick={googleLogin}>
        <FcGoogle />
        Sign in with Google
      </Button>
      <h3>Do you want to create a new account?</h3>
      <Link to={"/signIn/register"}>Register</Link>

      {error}
    </StyledForm>
  );
};

export default SignInPage;
