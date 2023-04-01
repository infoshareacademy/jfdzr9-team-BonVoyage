import { FooterStyle } from "./Footer.style";

interface FooterProps {
  year: number;
}

export const Footer: React.FC<FooterProps> = ({ year }) => {
  return (
    <FooterStyle>
      <p>&copy; {year} BonVoyage Team</p>
    </FooterStyle>
  );
};
