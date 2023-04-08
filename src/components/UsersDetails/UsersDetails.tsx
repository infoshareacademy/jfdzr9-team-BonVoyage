import getUsersDetails from "../../firebase/getUsersDetails";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsersDetails();
      setUserData(data);
    };

    fetchData();
  }, []);

  if (!userData) {
    return (
      <>
        <h1>No usersDetails!!!!!</h1>
        <h1>No usersDetails!!!!!</h1>
        <h1>No usersDetails!!!!!</h1>
        <h1>No usersDetails!!!!!</h1>
        <h1>No usersDetails!!!!!</h1>
      </>
    );
  }

  const { firstName, lastName, city, imageUrl } = userData;

  return (
    <>
      <h2>First name: {firstName}</h2> <h2>Last name: {lastName}</h2> <h2>City: {city}</h2>
    </>
  );
};

export default UsersDetails;
