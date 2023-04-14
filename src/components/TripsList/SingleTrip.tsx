import { SingleTripStyled, TripMini } from "./TripsList.styled";

export interface SingleTripProps {
  url: string;
}

export const SingleTrip = ({ url }: SingleTripProps) => {
  return (
    <SingleTripStyled>
      <TripMini src={url}></TripMini>
    </SingleTripStyled>
  );
};
