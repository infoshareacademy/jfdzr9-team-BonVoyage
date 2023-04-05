import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase.config";
import { UsersDetailsFormInput } from "../pages/AccountPage";

export const addUsersDetails = async (usersDetails: Partial<UsersDetailsFormInput>) => {
  const userDetailsRef = collection(db, "user-details");
  await addDoc(userDetailsRef, usersDetails);
};
