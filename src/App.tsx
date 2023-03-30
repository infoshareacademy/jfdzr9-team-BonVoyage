import { GlobalStyles } from "./GlobalStyles/GlobalStyles";
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import AddTrip from "./pages/AddTrip";

const App: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<RegisterPage />} />
        <Route path="/add-new-trip" element={<AddTrip />} />
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
