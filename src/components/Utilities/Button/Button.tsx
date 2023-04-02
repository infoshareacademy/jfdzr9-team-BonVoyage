import styled from "styled-components";

const Button = styled.button`
  background-color: #4a6a2b;
  color: #cfe5d6;
  width: 10vh;
  height: 5vh;
  border-radius: 4px;
  font-size: 2vh;
  box-shadow: none;
  border: none;
  transition: all 0.3s ease-in-out;

  :hover {
    transform: scale(1.07);
    transition: all 0.3s ease-in-out;
  }
`;

export const ButtonGreen: React.FC = () => {
  return <Button>Sign In</Button>;
};
