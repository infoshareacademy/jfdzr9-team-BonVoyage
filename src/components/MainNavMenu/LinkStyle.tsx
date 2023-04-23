import { LinkProps } from "react-router-dom";
import { LinkStyle } from "./Dropdown.style";

interface StyledLinkProps extends LinkProps {
  label: string;
}

export const LinkStyleComponent: React.FC<StyledLinkProps> = ({ label, ...props }) => {
  return (
    <LinkStyle {...props}>
      <p>{label}</p>
    </LinkStyle>
  );
};
