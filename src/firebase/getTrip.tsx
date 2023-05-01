import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase.config";

import { Trip } from "../pages/AddTrip";

// const getTrips = async (): Promise<Trip[] | null> => {
//   const tripRef = collection(db, "trips") as firebase.firestore.QuerySnapshot<Trip>;
//   const docsSnap = await getDocs(tripRef);
//   const data = docsSnap.docs.map((doc) => doc.data()) as Trip[];

//   console.log(data);
//   return data;
// };

const getTrips = async (stateChanger: React.Dispatch<React.SetStateAction<Trip[]>>) => {
  const tripRef = collection(db, "trips");
  const docsSnap = await onSnapshot(tripRef, (data) => {
    const trips: Trip[] = [];
    data.docs.forEach((doc) => {
      const trip = doc.data() as Trip;
      trips.push(trip);
    });
    stateChanger(trips);
  });
  return docsSnap;
  // const data = docsSnap.docs.map((doc) => doc.data()) as Trip[];
};

export default getTrips;
