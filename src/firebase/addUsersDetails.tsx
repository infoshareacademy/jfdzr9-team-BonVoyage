import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase.config";
import { UsersDetailsFormInput } from "../pages/AccountPage";

export const addUsersDetails = async (usersDetails: Partial<UsersDetailsFormInput>, uid: string) => {
  await setDoc(doc(db, "user-details", uid), usersDetails);
};
