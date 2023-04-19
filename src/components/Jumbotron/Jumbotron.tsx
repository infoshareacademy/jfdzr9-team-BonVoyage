import { JumbotronContainer, JumbotronDiv } from "./Jumbotron.style";
import { Button } from "../../ui/button/button.styled";
import { Link } from "react-router-dom";
import { Header1, Header2 } from "../../ui/headers/header.styled";
import { ButtonsJumbotronWrapper } from "../../ui/wrapper/wrapper.styled";

export const Jumbotron: React.FC = () => {
  return (
    <JumbotronContainer>
      <JumbotronDiv>
        <Header1 white>Create your own story. </Header1>
        <Header2 white>Plan your new journey with us! </Header2>
        <ButtonsJumbotronWrapper>
          <Link to="/signIn">
            <Button white secondary>
              Sign In
            </Button>
          </Link>
          <Button white>See top voyages</Button>
        </ButtonsJumbotronWrapper>
      </JumbotronDiv>
    </JumbotronContainer>
  );
};
