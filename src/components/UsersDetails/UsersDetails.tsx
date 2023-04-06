import getUsersDetails from "../../firebase/getUsersDetails";

interface User {
  firstName: string;
  lastName: string;
  city: string;
  imageUrl: string;
}

interface Props {
  uid: string;
}

const UsersDetails = ({ uid }: Props) => {
  const usersDetails = getUsersDetails(uid);

  if (!usersDetails) {
    return null;
  }

  const userData = usersDetails.data() as User;

  const firstName = userData.firstName;
  const lastName = userData.lastName;
  const city = userData.city;
  const imageUrl = userData.imageUrl;

  return (
    <>
      <p>{firstName}</p> <p>{lastName}</p> <p>{city}</p> <p>{imageUrl}</p>
    </>
  );
};

export default UsersDetails;
