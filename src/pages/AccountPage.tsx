import React, { useState, useEffect, useRef } from "react";
import { useUser } from "../context/auth.context";
import { addUsersDetails } from "../firebase/addUsersDetails";
import { TextInput, TextareaInput, InputLabel, LabelAndInput } from "../ui/TextInput/TextInput.styled";
import { StyledForm } from "../ui/form/form.styled";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../ui/button/button.styled";
import UsersDetails, { User } from "../components/UsersDetails/UsersDetails";
import { NavLink } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/firebase.config";
import {
  AccountPageWrapper,
  ButtonsRowWrapper,
  EditProfileWrapper,
  ButtonsUploadImgWrapper,
  FormWrapper,
  ImgWrapper,
} from "../ui/wrapper/wrapper.styled";
import { TripsList } from "../components/TripsList/TripsList";
import { Trip } from "./AddTrip";
import getTrips from "../firebase/getTrip";
import { Avatar, AvatarContainer } from "../components/UsersDetails/UsersDetails.styled";
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
  const [userImg, setUserImg] = useState("");
  const [disabled, setDisabled] = useState(false);
  const user = useUser();
  const hiddenFileInput = useRef<HTMLInputElement>(null);

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
        setUserImg(url);
        setDisabled(true);
      });
    });
  };

  const onSubmit: SubmitHandler<UsersDetailsFormInput> = (data) => {
    if (user) {
      addUsersDetails(data, user.uid).then(() => {
        setSuccess(true);
        setDisabled(false);
      });
    }
  };

  const handleChoosePhoto = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (hiddenFileInput.current != null) {
      hiddenFileInput.current.click();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTrips();
      setTrips(data?.filter((trip) => trip.userEmail === user?.email) ?? []);
    };
    fetchData();
  }, []);

  const finishedTrips = trips.filter((trip) => trip.inProgress === false);

  const tripsInProgress = trips.filter((trip) => trip.inProgress);
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
          {tripsInProgress.length > 0 && <TripsList trips={tripsInProgress} tripsName="Trips in progress" />}
          <TripsList trips={finishedTrips} tripsName="Completed trips" />
        </AccountPageWrapper>
      ) : (
        <EditProfileWrapper>
          <FormWrapper>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
              <ButtonsRowWrapper>
                <ImgWrapper>
                  <AvatarContainer style={{ maxWidth: "10px" }}>
                    <Avatar src={userImg ? userImg : userData?.imageUrl}></Avatar>
                  </AvatarContainer>
                </ImgWrapper>
                <ButtonsUploadImgWrapper style={{ alignSelf: "center" }}>
                  <Button disabled={disabled} onClick={handleChoosePhoto}>
                    Choose photo
                  </Button>
                  <input
                    type="file"
                    ref={hiddenFileInput}
                    style={{ display: "none" }}
                    onChange={(e) => {
                      e.preventDefault();
                      if (!e.target.files) return;
                      setFile(e.target.files[0]);
                    }}
                  ></input>
                  <Button
                    disabled={disabled}
                    secondary
                    onClick={(e) => {
                      e.preventDefault();
                      uploadImage();
                    }}
                  >
                    Upload image
                  </Button>
                </ButtonsUploadImgWrapper>
              </ButtonsRowWrapper>
              <LabelAndInput>
                <InputLabel>First name</InputLabel>
                <TextInput
                  placeholder="First name"
                  type={"text"}
                  defaultValue={userData?.firstName}
                  {...register("firstName")}
                  required
                />
              </LabelAndInput>
              <LabelAndInput>
                <InputLabel>Last name</InputLabel>
                <TextInput
                  placeholder="Last name"
                  type={"text"}
                  defaultValue={userData?.lastName}
                  {...register("lastName")}
                  required
                />
              </LabelAndInput>
              <LabelAndInput>
                <InputLabel>City</InputLabel>
                <TextInput
                  placeholder="City"
                  type={"text"}
                  defaultValue={userData?.city}
                  {...register("city")}
                  required
                />
              </LabelAndInput>
              <LabelAndInput>
                <InputLabel>Bio</InputLabel>
                <TextareaInput rows={2} placeholder="Bio" defaultValue={userData?.bio} {...register("bio")} required />
              </LabelAndInput>
              <TextInput alt="Uppload photos" type={"hidden"} {...register("imageUrl")} />

              <ButtonsRowWrapper>
                <Button
                  vwmax
                  secondary
                  onClick={(e) => {
                    e.preventDefault();
                    setSuccess(true);
                  }}
                >
                  Cancel
                </Button>
                <Button vwmax type="submit">
                  Save
                </Button>
              </ButtonsRowWrapper>
            </StyledForm>
          </FormWrapper>
        </EditProfileWrapper>
      )}
    </>
  ) : (
    <h1>You are not logged in</h1>
  );
};
export default AccountPage;
