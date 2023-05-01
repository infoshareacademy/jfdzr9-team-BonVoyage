import { Link } from "react-router-dom";
import {
  ButtonsSection,
  ImgContainer,
  SingleTripStyled,
  TripButton,
  TripDescription,
  TripMini,
  TripMiniTitle,
} from "./TripsList.styled";
import { useUser } from "../../context/auth.context";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
export interface SingleTripProps {
  url: string;
  title: string;
  tripId: string;
  tripDescription: string;
  inProgress: boolean;
  tripUser: string;
}

export const SingleTrip = ({ url, title, tripId, tripDescription, inProgress, tripUser }: SingleTripProps) => {
  const user = useUser();

  const deleteTrip = () => {
    const tripRef = doc(db, "trips", tripId);
    deleteDoc(tripRef);
  };
  return (
    <SingleTripStyled>
      <ImgContainer>
        <TripMini src={url}></TripMini>
        <ButtonsSection>
          <TripButton>
            <Link to={inProgress ? `/add-new-trip/${tripId}` : `/voyages/${tripId}`}>
              {inProgress ? "Edit" : "Preview"}
            </Link>
          </TripButton>
          {user?.email === tripUser && <TripButton onClick={deleteTrip}>Delete</TripButton>}
        </ButtonsSection>
      </ImgContainer>
      <TripMiniTitle>{title}</TripMiniTitle>
      <TripDescription>{tripDescription}</TripDescription>
    </SingleTripStyled>
  );
};
