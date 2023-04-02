import React, { useState } from "react";
import { ProfileSVG } from "../../assets/ProfileSVG";
import { UserProfileWrapper } from "../UserProfile/UserProfile.style";

type DropdownProps = object;

export const Dropdown = (props: DropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen((prevState) => !prevState);

  const handleDropdownSelection = (selectedItem: string) => {
    console.log(`Selected item: ${selectedItem}`);
    setIsDropdownOpen(false);
  };

  return (
    <UserProfileWrapper>
      <button onClick={toggleDropdown}>
        <ProfileSVG />
      </button>
      {isDropdownOpen && (
        <div className="drop">
          <ul>
            <li onClick={() => handleDropdownSelection("Item 1")}>Log in</li>
            <li onClick={() => handleDropdownSelection("Item 2")}>Register</li>
          </ul>
        </div>
      )}
    </UserProfileWrapper>
  );
};
