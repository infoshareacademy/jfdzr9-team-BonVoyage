import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase.config";

import { Trip } from "../pages/AddTrip";

import firebase from "firebase";

// const getTrips = async (): Promise<Trip[] | null> => {
//   const tripRef = collection(db, "trips") as firebase.firestore.QuerySnapshot<Trip>;
//   const docsSnap = await getDocs(tripRef);
//   const data = docsSnap.docs.map((doc) => doc.data()) as Trip[];

//   console.log(data);
//   return data;
// };

const getTrips = async (): Promise<Trip[] | null> => {
  const tripRef = collection(db, "trips") as firebase.firestore.QuerySnapshot<Trip>;
  const docsSnap = await getDocs(tripRef);
  const data = docsSnap.docs.map((doc) => doc.data()) as Trip[];

  // console.log(data);
  return data;
};

export default getTrips;