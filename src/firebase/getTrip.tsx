import { DocumentReference, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db, auth } from "./firebase.config";
import { useState } from "react";
import { Trip } from "../pages/AddTrip";
import { useUser } from "../context/auth.context";

const getTrips = async () => {
  // const [doc, setDoc] = useState({});
  // const tripRef = doc(db, "trips", uid) as DocumentReference<User>;
  // const res = await getDoc(userRef);
  // const usersDetails = res.data() as User | null;
  // const user = useUser();

  // const tripsData = firebase
  //   .firestore()
  //   .collection("trips")
  //   .where("userEmail", "=", firebase.auth().currentUser.email)
  //   .get()
  //   .then((snapshot) => {
  //     snapshot.forEach((doc) => console.log("doc is ", doc));
  //   });
  const tripRef = collection(db, "trips");
  const docsSnap = await getDocs(tripRef);
  // const data = docsSnap.data();
  // const filteredData = data.filter((trip) => trip.userEmail === auth.currentUser?.email);
  // console.log(filteredData);
  // return filteredData;
  docsSnap.forEach((doc) => {
    console.log(doc.data());
  });
  // console.log(docsSnap.data());
  // return docsSnap.data();
};

export default getTrips;
