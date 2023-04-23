import styled from "styled-components";

export const TextInput = styled.input`
  padding: var(--padding-search-bar-items);
  border-radius: 10px;
  text-align: center;
  font-size: 15px;
  outline: none;
  border: 1px solid gray;
  width: 100%;
`;

export const TextareaInput = styled.textarea`
  padding: var(--padding-search-bar-items);
  border-radius: 10px;
  font-size: 15px;
  outline: none;
  border: 1px solid gray;
  width: 100%;
`;

export const InputLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: var(--padding-search-bar-items);
  min-width: 20rem;
  width: 100%;
`;
