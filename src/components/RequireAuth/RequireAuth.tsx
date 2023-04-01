import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../context/auth.context";

const RequireAuth = () => {
  const user = useUser();

  return user ? <Outlet /> : <Navigate to={"/account"} />;
};

export default RequireAuth;
