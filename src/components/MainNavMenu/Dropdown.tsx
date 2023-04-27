import { ProfileSVG } from "../../assets/ProfileSVG";
import { useState } from "react";
import { DropdownButton, DropdownContainer, DropdownListItem, DropdownList } from "./Dropdown.style";
import { useUser, useLogout } from "../../context/auth.context";
import { LinkStyleComponent } from "./LinkStyle";

export function Dropdown() {
  const logout = useLogout();
  const user = useUser();
  const [isOpen, setIsOpen] = useState(false);

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
            <ProfileSVG />
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

// export function Dropdown() {
//   const logout = useLogout();
//   const user = useUser();
//   const [isOpen, setIsOpen] = useState(false);

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
//       onClick: handleLogout,
//     },
//   ];

//   return (
//     <>
//       {user ? (
//         <DropdownContainer>
//           <DropdownButton onClick={toggleMenu}>
//             <ProfileSVG />
//           </DropdownButton>
//           {isOpen && (
//             <DropdownList>
//               {loggedInOptions.map((option) => (
//                 <DropdownListItem key={option.path}>
//                   {
//                     <LinkStyle to={option.path} onClick={option.onClick}>
//                       <p>{option.label}</p>
//                     </LinkStyle>
//                   }
//                 </DropdownListItem>
//               ))}
//             </DropdownList>
//           )}
//         </DropdownContainer>
//       ) : (
//         <DropdownContainer>
//           <DropdownButton onClick={toggleMenu}>
//             <ProfileSVG />
//           </DropdownButton>
//           {isOpen && (
//             <DropdownList>
//               {options.map((option) => (
//                 <DropdownListItem key={option.path}>
//                   <LinkStyle onClick={option.onClick} to={option.path}>
//                     <p>{option.label}</p>
//                   </LinkStyle>
//                 </DropdownListItem>
//               ))}
//             </DropdownList>
//           )}
//         </DropdownContainer>
//       )}
//     </>
//   );
// }
