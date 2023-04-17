import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  gap: 0.7rem;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 700;
  border-radius: 10px;
  padding: 5px;
  transition: 0.2s linear;
  background-color: #0a4d3b;
  color: #e0e9e7;
  border: 1px solid gray;
  width: 100%;
`;

export const ButtonEditProfile = styled.button`
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 500;
  border-radius: 10px;
  padding: 10px;
  transition: 0.2s linear;
  background-color: lightgray;
  color: black;
  border: 0 solid gray;
`;
