import { Navigate, Outlet } from "react-router-dom";
// import { useUser } from "../../context/auth.context";
import { auth } from "../../firebase/firebase.config";

const RequireAuth = () => {
  const user = auth.currentUser;

  return user ? <Outlet /> : <Navigate to={"/signIn"} />;
};

export default RequireAuth;
