import { ProfileSVG } from "../../assets/ProfileSVG";
import { useState } from "react";
import { DropdownButton, DropdownContainer, DropdownListItem, DropdownList, LinkStyle } from "./Dropdown.style";
import { Link } from "react-router-dom";
import { useUser } from "../../context/auth.context";
import AccountPage from "../../pages/AccountPage";

export function Dropdown() {
  const user = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    {
      label: "Sign in",
      path: "/signIn",
    },
    {
      label: "Register",
      path: "signIn/register",
    },
  ];

  const loggedInOptions = [{ label: "Your Profile", path: "/account" }];
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {user ? (
        <DropdownContainer>
          <DropdownButton onClick={toggleMenu}>
            <ProfileSVG />
          </DropdownButton>
          {isOpen && (
            <DropdownList>
              {loggedInOptions.map((option) => (
                <DropdownListItem key={option.path}>
                  <LinkStyle to={option.path}>
                    <p>{option.label}</p>
                  </LinkStyle>
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
                  <LinkStyle to={option.path}>
                    <p>{option.label}</p>
                  </LinkStyle>
                </DropdownListItem>
              ))}
            </DropdownList>
          )}
        </DropdownContainer>
      )}
    </>
  );
}
