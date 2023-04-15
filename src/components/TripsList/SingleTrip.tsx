import { SingleTripStyled, TripMini, TripMiniTitle } from "./TripsList.styled";

export interface SingleTripProps {
  url: string;
  title: string;
}

export const SingleTrip = ({ url, title }: SingleTripProps) => {
  return (
    <SingleTripStyled>
      <TripMiniTitle>{title}</TripMiniTitle>
      <TripMini src={url}></TripMini>
    </SingleTripStyled>
  );
};
