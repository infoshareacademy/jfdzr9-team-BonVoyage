import { StyledMenu } from "./Mobilemenu.style";
import { Link, NavLink } from "react-router-dom";
import { useUser, useLogout } from "../../context/auth.context";
import { useState } from "react";

interface Props {
  open: boolean;
}

export const Menu: React.FC<Props> = ({ open }) => {
  const logout = useLogout();
  const user = useUser();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <>
      {user ? (
        <StyledMenu open={open}>
          <a href="/">Home</a>
          <Link to="/voyages">Voyages</Link>
          <NavLink to="/about">About Us</NavLink>
          <Link to="/account"> Your Profile</Link>
          <a href="" onClick={handleLogout}>
            Logout
          </a>
        </StyledMenu>
      ) : (
        <StyledMenu open={open}>
          <a href="/">Home</a>
          <Link to="/voyages">Voyages</Link>
          <NavLink to="/about">About Us</NavLink>
          <Link to="signIn">Sign in</Link>
          <Link to="/signIn/register">Register</Link>
        </StyledMenu>
      )}
    </>
  );
};

// import { ProfileSVG } from "../../assets/ProfileSVG";
// import { useState, useEffect } from "react";
// import { DropdownButton, DropdownContainer, DropdownListItem, DropdownList } from "./Dropdown.style";

// import { LinkStyleComponent } from "./LinkStyle";
// import { Avatar } from "../UsersDetails/UsersDetails.styled";
// import getUsersDetails from "../../firebase/getUsersDetails";

// export interface User {
//   firstName?: string;
//   lastName?: string;
//   city?: string;
//   imageUrl?: string;
//   bio?: string;
// }

// export function Dropdown() {

//   const [isOpen, setIsOpen] = useState(false);

//   const [userData, setUserData] = useState<User | null>(null);

//   useEffect(() => {
//     if (user) {
//       const fetchData = async () => {
//         const data = await getUsersDetails(user.uid);
//         setUserData(data);
//       };

//       fetchData();
//     }
//   }, [user]);

//   const { imageUrl } = userData || {};

//   const handleLogout = async () => {
//     await logout();
//     setIsOpen(!isOpen);
//   };

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const options = [
//     {
//       label: "Sign in",
//       path: "/signIn",
//       onClick: toggleMenu,
//     },
//     {
//       label: "Register",
//       path: "signIn/register",
//       onClick: toggleMenu,
//     },
//   ];

//   const loggedInOptions = [
//     {
//       label: "Your Profile",
//       path: "/account",
//       onClick: toggleMenu,
//     },
//     {
//       label: "Logout",
//       path: "/",
//       onClick: handleLogout,
//     },
//   ];

//   return (
//     <>
//       {user ? (

//       ) : (

//       )}
//     </>
//   );
// }
