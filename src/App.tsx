import { GlobalStyles } from "./GlobalStyles/GlobalStyles";
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import SignInPage from "./pages/SignInPage";
import AddTrip from "./pages/AddTrip";
import AccountPage from "./pages/AccountPage";
import RequireAuth from "./components/RequireAuth/RequireAuth";

const App: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<RequireAuth />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signIn" element={<SignInPage />} />
          <Route path="/signIn/register" element={<RegisterPage />} />
          <Route path="/voyages" element={<AddTrip />} />
          <Route path="/account" element={<AccountPage />} />
        </Route>
      </>,
    ),
  );
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
