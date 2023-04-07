import { GlobalStyles } from "./GlobalStyles/GlobalStyles";
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import SignInPage from "./pages/SignInPage";
import { AddTripPage } from "./pages/AddTrip";
import AccountPage from "./pages/AccountPage";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import { Team } from "./components/AboutUs/AboutUs";
import { AuthContextProvider } from "./context/auth.context";
import AddNewTripStepOne from "./pages/AddNewTripStepOne";
import LayoutMain from "./components/Layout/LayoutMain";

const App: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LayoutMain />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signIn" element={<SignInPage />} />
        <Route path="/signIn/register" element={<RegisterPage />} />
        <Route path="/about" element={<Team />} />
        <Route element={<RequireAuth />}>
          <Route path="/voyages/:tripId" element={<AddTripPage />} />
          <Route path="/voyages" element={<AddNewTripStepOne />} />
          <Route path="/account" element={<AccountPage />} />
        </Route>
      </Route>,
    ),
  );
  return (
    <>
      <AuthContextProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
      </AuthContextProvider>
    </>
  );
};

export default App;
