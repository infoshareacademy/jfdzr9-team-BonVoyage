import styled from "styled-components";

export const TextInput = styled.input`
  padding: var(--padding-search-bar-items);
  border-radius: var(--border-radius-s);

  font-size: 15px;
  outline: none;
  border: 1px solid gray;
  width: 100%;
`;

export const FileInput = styled.input``;

export const TextareaInput = styled.textarea`
  padding: var(--padding-search-bar-items);
  border-radius: var(--border-radius-s);
  font-size: 15px;
  outline: none;
  border: 1px solid gray;
  width: 100%;
  display: block;
`;

export const InputLabel = styled.label`
  padding: var(--padding-search-bar-items-l-r);
  font-weight: 700;
  margin: 0;
`;

export const LabelAndInput = styled.div``;
