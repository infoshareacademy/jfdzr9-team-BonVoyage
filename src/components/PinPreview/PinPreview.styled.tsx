import styled from "styled-components";

export const PinPhoto = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -10;
  object-fit: cover;
  border-radius: var(--border-radius-s);
`;
export const PinPhotoContainer = styled.div`
  position: relative;
  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

export const PinsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--gap-s);
`;
