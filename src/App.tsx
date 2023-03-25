import { GlobalStyles } from "./GlobalStyles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <LandingPage />
        <div>Welcome booba BonVoffsdge</div>;
      </BrowserRouter>
    </>
  );
};

export default App;
