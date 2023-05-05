import styled from "styled-components";

export const H1 = styled.h1`
  text-align: center;
  padding-top: 12vh;
`;

export const MemberCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  -webkit-box-shadow: 0px 0px 8px 0px rgba(66, 68, 90, 0.34);
  -moz-box-shadow: 0px 0px 8px 0px rgba(66, 68, 90, 0.34);
  box-shadow: 0px 0px 8px 0px rgba(66, 68, 90, 0.34);
  padding: 5vh 2vh;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  z-index: -9999;

  :hover {
    -webkit-box-shadow: 0px 0px 19px 0px rgba(66, 68, 90, 0.34);
    -moz-box-shadow: 0px 0px 19px 0px rgba(66, 68, 90, 0.34);
    box-shadow: 0px 0px 19px 0px rgba(66, 68, 90, 0.34);
    transform: scale(1.01);
    transition: all 0.2s ease-in-out;
  }

  & > div {
    display: flex;

    flex-direction: column;
    align-items: center;
  }

  & > svg {
    padding: 20px;
  }

  img {
    display: flex;
    border-radius: 100%;
    width: 70%;
    height: 50%;
  }

  h2 {
    text-align: center;
    font-size: 30px;
  }

  h3 {
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 2vh 0;
  }
`;

export const MemberWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10vh 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 5vh;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
`;
