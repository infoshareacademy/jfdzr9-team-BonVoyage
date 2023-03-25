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

  :hover {
    transform: scale(1.07);
  }
`;

export const ButtonGreen: React.FC = (value) => {
  return <Button>Sign In</Button>;
};
