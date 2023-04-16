import getUsersDetails from "../../firebase/getUsersDetails";
import { useState, useEffect } from "react";
import { Avatar, Details, DetailsWrapper, Name, Description } from "./UsersDetails.styled";
import { useUser } from "../../context/auth.context";
import { ButtonEditProfile } from "../../ui/button/button.styled";

export interface User {
  firstName: string;
  lastName: string;
  city: string;
  imageUrl: string;
  bio: string;
}

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  numberOfTrips: number;
};

const UsersDetails = ({ onClick, numberOfTrips }: Props) => {
  const [userData, setUserData] = useState<User | null>(null);
  const user = useUser();
  if (user) {
    useEffect(() => {
      const fetchData = async () => {
        const data = await getUsersDetails(user.uid);
        setUserData(data);
      };

      fetchData();
    }, []);
  }

  if (!userData) {
    return (
      <>
        <DetailsWrapper>
          <Avatar src="https://firebasestorage.googleapis.com/v0/b/bonvoyage-e7ad8.appspot.com/o/users-avatar%2Favatar.jpg?alt=media&token=da740dbc-b0d9-40bc-8024-6415d43d5c00" />
          <Details>
            {" "}
            <h2>Name: </h2>
            <ButtonEditProfile onClick={onClick}>Edit Profile</ButtonEditProfile>
            <p>City: </p>
            <p>Bio: </p>
            <p>Trips: </p>
          </Details>
        </DetailsWrapper>
      </>
    );
  }

  const { firstName, lastName, city, imageUrl, bio } = userData;

  return (
    <>
      <DetailsWrapper>
        <Avatar src={imageUrl} />
        <Details>
          <Name>
            <h2>
              {firstName} {lastName}
            </h2>
            <ButtonEditProfile onClick={onClick}>Edit Profile</ButtonEditProfile>
          </Name>
          <Description>
            <p>City: {city}</p>
            <p>Bio: {bio}</p>
            <p>Trips: {numberOfTrips} </p>
          </Description>
        </Details>
      </DetailsWrapper>
    </>
  );
};

export default UsersDetails;
