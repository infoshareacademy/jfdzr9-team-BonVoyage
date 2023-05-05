import { JumbotronContainer, JumbotronDiv } from "./Jumbotron.style";
import { Button, ButtonWhite } from "../../ui/button/button.styled";
import { Link } from "react-router-dom";
import { Header1, Header2 } from "../../ui/headers/header.styled";
import { ButtonsJumbotronWrapper } from "../../ui/wrapper/wrapper.styled";
import { useUser } from "../../context/auth.context";

export const Jumbotron: React.FC = () => {
  const user = useUser();
  return (
    <JumbotronContainer>
      <JumbotronDiv>
        <Header1 white>Create your own story. </Header1>
        <Header2 white>Plan your new journey with us! </Header2>
        <ButtonsJumbotronWrapper>
          {user ? (
            <Link to="/account">
              <Button>Account</Button>
            </Link>
          ) : (
            <Link to="/signIn">
              <Button>Sign In</Button>
            </Link>
          )}
          <Link to="/voyages">
            <ButtonWhite secondary>See top voyages</ButtonWhite>
          </Link>
        </ButtonsJumbotronWrapper>
      </JumbotronDiv>
    </JumbotronContainer>
  );
};
