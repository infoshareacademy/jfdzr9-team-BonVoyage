import { DocumentReference, doc, getDoc } from "firebase/firestore";
import { db } from "./firebase.config";
import { User } from "../components/UsersDetails/UsersDetails";

const getUsersDetails = async (): Promise<User | null> => {
  const userRef = doc(db, "user-details", "U8QZEuf6XmU4pvNSaDApGTKnyH83") as DocumentReference<User>;
  const res = await getDoc(userRef);
  const usersDetails = res.data() as User | null;

  return usersDetails;
};

export default getUsersDetails;
