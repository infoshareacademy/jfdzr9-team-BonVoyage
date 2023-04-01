import { JumbotronContainer, JumbotronDiv } from "./Jumbotron.style";
import { ButtonGreen } from "../Utilities/Button/Button";
import { Link } from "react-router-dom";

export const Jumbotron: React.FC = () => {
  return (
    <JumbotronContainer>
      <JumbotronDiv>
        <h1>Bon voyage</h1>
        <Link to="/signIn">
          <ButtonGreen />
        </Link>
      </JumbotronDiv>
    </JumbotronContainer>
  );
};
