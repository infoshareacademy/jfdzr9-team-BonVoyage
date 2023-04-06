import { doc, getDoc, DocumentSnapshot } from "firebase/firestore";
import { db } from "./firebase.config";

const getUsersDetails = async ({ uid }: string): Promise<DocumentSnapshot> => {
  const userRef = doc(db, "user-details", uid);
  await getDoc(userRef);
};

export default getUsersDetails;
