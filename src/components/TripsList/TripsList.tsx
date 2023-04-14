import { TripsListStyled } from "./TripsList.styled";
import { SingleTrip } from "./SingleTrip";
import getTrips from "../../firebase/getTrip";

const trips = [
  {
    title: "Warsaw",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/bonvoyage-e7ad8.appspot.com/o/smuga2505tomek%40gmail.com%2FTitle-17137804%2FBlixter-2048x1451.jpg?alt=media&token=ebd440fc-0ef2-47db-b1af-045e1489f7a8",
  },
  {
    title: "Warsaw1",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/bonvoyage-e7ad8.appspot.com/o/raz%40wp.pl%2FCos-54190152%2Fwinnica-kinga-1.jpg?alt=media&token=2117c2ca-7f2f-45f9-94af-64819a9b637d",
  },
  {
    title: "Warsaw2",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/bonvoyage-e7ad8.appspot.com/o/raz%40wp.pl%2FZG-4086729%2Fwinobranie.jpg?alt=media&token=ef6c4dc9-a30a-4c9f-a137-8b0934b4469a",
  },
  {
    title: "Warsaw3",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/bonvoyage-e7ad8.appspot.com/o/raz%40wp.pl%2Fa-15679948%2Fwino.jpg?alt=media&token=18fe58d0-ba15-4c04-8ba1-d8eabfe65a3a",
  },
  {
    title: "Warsaw4",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/bonvoyage-e7ad8.appspot.com/o/users-avatar%2Favatar.jpg?alt=media&token=da740dbc-b0d9-40bc-8024-6415d43d5c00",
  },
];

getTrips();

// const trips = getTrip();

export const TripsList = () => {
  return (
    <TripsListStyled>
      {trips.map((trip) => (
        <SingleTrip key={trip.title} url={trip.imageUrl} />
      ))}
    </TripsListStyled>
  );
};
