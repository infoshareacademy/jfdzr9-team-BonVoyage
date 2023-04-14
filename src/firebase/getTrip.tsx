import { DocumentReference, doc, getDoc } from "firebase/firestore";
import { db } from "./firebase.config";
import { useState } from "react";

const getTrip = async (uid: string): Promise<User | null> => {
  // const [doc, setDoc] = useState({});
  // const tripRef = doc(db, "trips", uid) as DocumentReference<User>;
  // const res = await getDoc(userRef);
  // const usersDetails = res.data() as User | null;
  const tripsData = firebase
    .firestore()
    .collection("trips")
    .where("userEmail", "=", firebase.auth().currentUser.email)
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => console.log("doc is ", doc));
    });
};

export default getTrip;
