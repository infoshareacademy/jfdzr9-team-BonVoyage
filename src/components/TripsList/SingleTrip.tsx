import { useNavigate } from "react-router-dom";
import {
  ButtonsSection,
  ImgContainer,
  LikeLogo,
  SingleTripStyled,
  TripButton,
  TripDescription,
  TripMini,
  TripMiniTitle,
} from "./TripsList.styled";
import { useUser } from "../../context/auth.context";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
import { Trip } from "../../pages/AddTrip";
export interface SingleTripProps {
  url: string;
  title: string;
  tripId: string;
  tripDescription: string;
  inProgress: boolean;
  tripUser: string;
  likes: string[];
  trip: Trip;
}

export const SingleTrip = ({
  url,
  title,
  tripId,
  tripDescription,
  inProgress,
  tripUser,
  likes,
  trip,
}: SingleTripProps) => {
  const user = useUser();
  const navigate = useNavigate();

  const deleteTrip = () => {
    const tripRef = doc(db, "trips", tripId);
    deleteDoc(tripRef);
  };

  const likeTrip = () => {
    if (!user || user.email === null) return;
    const tripRef = doc(db, "trips", tripId);
    if (likes.some((like) => like === user?.email)) {
      const updatedLikes = likes.filter((like) => like !== user.email);
      setDoc(tripRef, { ...trip, likes: updatedLikes });
    } else {
      const updatedLikes = [...likes];
      updatedLikes.push(user.email);
      setDoc(tripRef, { ...trip, likes: updatedLikes });
    }
  };

  const isLiked = likes.some((like) => like === user?.email);

  return (
    <SingleTripStyled>
      <ImgContainer>
        <TripMini src={url}></TripMini>
        <ButtonsSection>
          <TripButton onClick={() => navigate(`${inProgress ? `/add-new-trip/${tripId}` : `/voyages/${tripId}`}`)}>
            {inProgress ? "Edit" : "Preview"}
          </TripButton>
          {user?.email === tripUser && <TripButton onClick={deleteTrip}>Delete</TripButton>}
        </ButtonsSection>
      </ImgContainer>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <TripMiniTitle>{title}</TripMiniTitle>
        <TripMiniTitle>
          <p
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "10px",
              zIndex: "20",
            }}
          >
            {likes.length}
          </p>
          <LikeLogo isLiked={isLiked} onClick={likeTrip} />
        </TripMiniTitle>
      </div>
      <TripDescription>{tripDescription}</TripDescription>
    </SingleTripStyled>
  );
};
