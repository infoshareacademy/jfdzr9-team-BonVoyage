import { ProfileSVG } from "../../assets/ProfileSVG";
import { useState } from "react";
import { DropdownButton, DropdownContainer, DropdownListItem, DropdownList, LinkStyle } from "./Dropdown.style";
import { useUser, useLogout } from "../../context/auth.context";

export function Dropdown() {
  const logout = useLogout();
  const handleLogout = async () => {
    await logout();
  };
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

  const loggedInOptions = [
    {
      label: "Your Profile",
      path: "/account",
    },
    {
      label: "Logout",
      onClick: handleLogout,
    },
  ];

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
                  {option.onClick ? (
                    <LinkStyle onClick={option.onClick}>
                      <p>{option.label}</p>
                    </LinkStyle>
                  ) : (
                    <LinkStyle to={option.path}>
                      <p>{option.label}</p>
                    </LinkStyle>
                  )}
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
