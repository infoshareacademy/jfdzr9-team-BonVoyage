import { ProfileSVG } from "../../assets/ProfileSVG";
import { useState } from "react";
import { DropdownButton, DropdownContainer, DropdownListItem, DropdownList } from "./Dropdown.style";
import { Link } from "react-router-dom";

export function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const options = ["Option 2", "Option 3"];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleMenu}>
        <ProfileSVG />
      </DropdownButton>
      {isOpen && (
        <DropdownList>
          {options.map((option) => (
            <DropdownListItem key={option}>
              <p>{option}</p>
            </DropdownListItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
}
