import { GlobalStyles } from "./GlobalStyles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import AddTrip from "./pages/AddTrip";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <LandingPage />
        <AddTrip />
      </BrowserRouter>
    </>
  );
};

export default App;
