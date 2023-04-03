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
//some changes

const App: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signIn" element={<SignInPage />} />
        <Route path="/signIn/register" element={<RegisterPage />} />
        <Route element={<RequireAuth />}>
          <Route path="/about" element={<Team />} />
          <Route path="/voyages" element={<AddTripPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Route>
      </>,
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
