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

// interface Props {
//   uid: string;
// }

const UsersDetails = () => {
  const [userData, setUserData] = useState<User | null>(null);
  const user = useUser();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsersDetails(user.uid);
      setUserData(data);
    };

    fetchData();
  }, []);

  if (!userData) {
    return (
      <>
        <h1>No usersDetails!!!!!</h1>
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
