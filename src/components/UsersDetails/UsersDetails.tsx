import getUsersDetails from "../../firebase/getUsersDetails";

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
  const usersDetails = getUsersDetails() as unknown as User | undefined;

  if (!usersDetails) {
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

  // const userData = usersDetails;

  const firstName = usersDetails.firstName;
  const lastName = usersDetails.lastName;
  const city = usersDetails.city;
  // const imageUrl = userData.imageUrl;

  return (
    <>
      <h2>First name: {firstName}</h2> <h2>Last name: {lastName}</h2> <h2>City: {city}</h2>
    </>
  );
};

export default UsersDetails;
