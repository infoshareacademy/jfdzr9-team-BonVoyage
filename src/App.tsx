import { GlobalStyles } from "./GlobalStyles/GlobalStyles";
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import SignInPage from "./pages/SignInPage";
import AccountPage from "./pages/AccountPage";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import { Team } from "./components/AboutUs/AboutUs";
import { AuthContextProvider } from "./context/auth.context";
import AddNewTripStepOne from "./pages/AddNewTripStepOne";
import LayoutMain from "./components/Layout/LayoutMain";
import Voyages from "./pages/Voyages";
import TripPage from "./pages/TripPage";
import AddTripPage from "./pages/AddTrip";

const App: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LayoutMain />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signIn" element={<SignInPage />} />
        <Route path="/signIn/register" element={<RegisterPage />} />
        <Route path="/about" element={<Team />} />
        <Route path="/voyages/notloggedin/:tripId" element={<TripPage />} />
        <Route element={<RequireAuth />}>
          <Route path="/voyages" element={<Voyages />} />
          <Route path="/voyages/:tripId" element={<TripPage />} />
          <Route path="/add-new-trip/:tripId" element={<AddTripPage />} />
          <Route path="/add-new-trip" element={<AddNewTripStepOne />} />
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
