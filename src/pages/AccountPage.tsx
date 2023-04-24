import { useState, useEffect } from "react";
import { useUser } from "../context/auth.context";
import { addUsersDetails } from "../firebase/addUsersDetails";
import { TextInput, TextareaInput } from "../ui/TextInput/TextInput.styled";
import { StyledForm } from "../ui/form/form.styled";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../ui/button/button.styled";
import UsersDetails, { User } from "../components/UsersDetails/UsersDetails";
import { NavLink } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/firebase.config";
import { AccountPageWrapper, SignInWrapper } from "../ui/wrapper/wrapper.styled";
import { TripsList } from "../components/TripsList/TripsList";
import { Trip } from "./AddTrip";
import getTrips from "../firebase/getTrip";
import { Avatar } from "../components/UsersDetails/UsersDetails.styled";
import getUsersDetails from "../firebase/getUsersDetails";
export interface UsersDetailsFormInput {
  firstName: string;
  lastName: string;
  imageUrl: string;
  city: string;
  bio: string;
}
const AccountPage = () => {
  const { register, handleSubmit, setValue } = useForm<UsersDetailsFormInput>();
  const [success, setSuccess] = useState(true);
  const [file, setFile] = useState<File | null>(null);
  const [trips, setTrips] = useState<Trip[]>([]);
  const [userData, setUserData] = useState<User | null>(null);
  const user = useUser();

  if (user) {
    useEffect(() => {
      const fetchData = async () => {
        const data = await getUsersDetails(user.uid);
        data
          ? setUserData(data)
          : setUserData({
              imageUrl:
                "https://firebasestorage.googleapis.com/v0/b/bonvoyage-e7ad8.appspot.com/o/users-avatar%2Favatar.jpg?alt=media&token=da740dbc-b0d9-40bc-8024-6415d43d5c00",
            });
      };

      fetchData();
    }, []);
  }

  const uploadImage = () => {
    if (!file) return;
    const imageRef = ref(storage, `users-avatar/${user?.uid}`);
    uploadBytes(imageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setValue("imageUrl", url);
      });
    });
  };

  const onSubmit: SubmitHandler<UsersDetailsFormInput> = (data) => {
    if (user) {
      addUsersDetails(data, user.uid).then(() => {
        setSuccess(true);
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTrips();
      setTrips(data?.filter((trip) => trip.userEmail === user?.email) ?? []);
    };
    fetchData();
  }, []);

  return user ? (
    <>
      {success ? (
        <AccountPageWrapper>
          <UsersDetails
            numberOfTrips={trips.length}
            onClick={() => {
              setSuccess(false);
            }}
          />
          <NavLink to="/add-new-trip">
            <Button vwmax>Add new trip</Button>
          </NavLink>
          <TripsList trips={trips} />
        </AccountPageWrapper>
      ) : (
        <SignInWrapper>
          <Avatar src={userData?.imageUrl}></Avatar>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                type="file"
                onChange={(e) => {
                  e.preventDefault();
                  if (!e.target.files) return;
                  setFile(e.target.files[0]);
                }}
              ></input>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  uploadImage();
                }}
              >
                Upload image
              </Button>
            </div>
            <TextInput
              placeholder="First name"
              type={"text"}
              defaultValue={userData?.firstName}
              {...register("firstName")}
              required
            />
            <TextInput
              placeholder="Last name"
              type={"text"}
              defaultValue={userData?.lastName}
              {...register("lastName")}
              required
            />
            <TextInput placeholder="City" type={"text"} defaultValue={userData?.city} {...register("city")} required />
            <TextareaInput rows={2} placeholder="Bio" defaultValue={userData?.bio} {...register("bio")} required />
            <TextInput alt="Uppload photos" type={"hidden"} {...register("imageUrl")} />
            <Button type="submit">Submit</Button>
          </StyledForm>
        </SignInWrapper>
      )}
    </>
  ) : (
    <h1>You are not logged in</h1>
  );
};
export default AccountPage;
