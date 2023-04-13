import getUsersDetails from "../../firebase/getUsersDetails";
import { useState, useEffect } from "react";
import { DetailsWrapper } from "./UsersDetails.styled";
import { useUser } from "../../context/auth.context";

export interface User {
  firstName: string;
  lastName: string;
  city: string;
  imageUrl: string;
}

const UsersDetails = () => {
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
          <img src="https://firebasestorage.googleapis.com/v0/b/bonvoyage-e7ad8.appspot.com/o/users-avatar%2Favatar.jpg?alt=media&token=da740dbc-b0d9-40bc-8024-6415d43d5c00" />
          <h2>Name: </h2>
          <p>City: </p>
        </DetailsWrapper>
      </>
    );
  }

  const { firstName, lastName, city, imageUrl } = userData;

  return (
    <DetailsWrapper>
      <img src={imageUrl} />
      <h2>
        {firstName} {lastName}
      </h2>
      <p>City: {city}</p>
    </DetailsWrapper>
  );
};

export default UsersDetails;
