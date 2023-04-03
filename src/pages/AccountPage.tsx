import { MainNavMenu } from "../components/MainNavMenu/MainNavMenu";
import { useUser } from "../context/auth.context";

const AccountPage = () => {
  const user = useUser();

  return user ? (
    <>
      <MainNavMenu />
      <h1>Hello your mail is {user.email}</h1>
    </>
  ) : (
    <>
      <MainNavMenu />
      <h1>You are not logged in</h1>
    </>
  );
};

export default AccountPage;
