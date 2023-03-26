import { Button } from "../ui/button/button.styled";
import { StyledForm } from "../ui/form/form.styled";
import { useForm, SubmitHandler } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

interface IFormInput {
  email: string;
  password: string;
}

const RegisterPage = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = ({ email, password }) => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <h1>Register</h1>
        <input {...register("email")} />
        <input {...register("password")} />
        <Button type="submit">Register</Button>
      </StyledForm>
    </>
  );
};

export default RegisterPage;
