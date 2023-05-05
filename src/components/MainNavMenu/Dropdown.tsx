import { ProfileSVG } from "../../assets/ProfileSVG";
import { useState, useEffect } from "react";
import { DropdownButton, DropdownContainer, DropdownListItem, DropdownList } from "./Dropdown.style";
import { useUser, useLogout } from "../../context/auth.context";
import { LinkStyleComponent } from "./LinkStyle";
import { Avatar } from "../UsersDetails/UsersDetails.styled";
import getUsersDetails from "../../firebase/getUsersDetails";

export interface User {
  firstName?: string;
  lastName?: string;
  city?: string;
  imageUrl?: string;
  bio?: string;
}

export function Dropdown() {
  const logout = useLogout();
  const user = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        const data = await getUsersDetails(user.uid);
        setUserData(data);
      };

      fetchData();
    }
  }, [user]);

  const { imageUrl } = userData || {};

  const handleLogout = async () => {
    await logout();
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const options = [
    {
      label: "Sign in",
      path: "/signIn",
      onClick: toggleMenu,
    },
    {
      label: "Register",
      path: "signIn/register",
      onClick: toggleMenu,
    },
  ];

  const loggedInOptions = [
    {
      label: "Your Profile",
      path: "/account",
      onClick: toggleMenu,
    },
    {
      label: "Logout",
      path: "/",
      onClick: handleLogout,
    },
  ];

  return (
    <>
      {user ? (
        <DropdownContainer>
          <DropdownButton onClick={toggleMenu}>
            <img src={imageUrl} alt="" />
          </DropdownButton>
          {isOpen && (
            <DropdownList>
              {loggedInOptions.map((option) => (
                <DropdownListItem key={option.path}>
                  <LinkStyleComponent onClick={option.onClick} to={option.path} label={option.label} />
                </DropdownListItem>
              ))}
            </DropdownList>
          )}
        </DropdownContainer>
      ) : (
        <DropdownContainer>
          <DropdownButton onClick={toggleMenu}>
            <ProfileSVG />
          </DropdownButton>
          {isOpen && (
            <DropdownList>
              {options.map((option) => (
                <DropdownListItem key={option.path}>
                  <LinkStyleComponent onClick={option.onClick} to={option.path} label={option.label} />
                </DropdownListItem>
              ))}
            </DropdownList>
          )}
        </DropdownContainer>
      )}
    </>
  );
}
