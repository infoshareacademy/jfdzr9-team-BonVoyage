import { DocumentReference, doc, getDoc } from "firebase/firestore";
import { db } from "./firebase.config";
import { User } from "firebase/auth";

const getUsersDetails = async (): Promise<User | undefined> => {
  const userRef = doc(db, "user-details", "U8QZEuf6XmU4pvNSaDApGTKnyH83") as DocumentReference<User>;
  const res = await getDoc(userRef);
  const usersDetails = res.data();
  return usersDetails;
};

export default getUsersDetails;
