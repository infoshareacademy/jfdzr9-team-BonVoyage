import styled from "styled-components";

export const DetailsWrapper = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  height: 100%;
  margin: 50px 0px;
  display: flex;
  gap: var(--gap-m);
  border-bottom: 1px solid grey;
  align-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const Details = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  gap: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: stretch;
  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const Description = styled.div``;

// export const AvatarContainer = styled.div`
//   position: relative;
//   width: 100%;
//   padding-top: 100%;
//   border-radius: 50%;
// `;

// export const Avatar = styled.img`
//   position: absolute;
//   top: 0;
//   height: 100%;
//   object-fit: cover;
// `;

export const AvatarContainer = styled.div`
  position: relative;
  margin: 0.5em;
  min-width: 40px;
  width: 100%;
  max-width: 300px;
  max-height: 300px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  min-width: 100px;
  transition: 0.2s linear;
  @media (max-width: 768px) {
    max-width: 100px;
  }
  &:before {
    display: block;
    content: "";
    margin-top: 100%;
  }
`;

export const Avatar = styled.img`
  transition: 0.2s linear;
  display: block;
  position: absolute;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
