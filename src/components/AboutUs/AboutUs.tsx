import { TeamData } from "./Team.data";
import { MemberCard, MemberWrapper, H1, LogoContainer } from "./AboutUs.style";
import { GithubLogo } from "../../assets/GithubLogo";
import { LinkedinLogo } from "../../assets/LinkedinLogo";
import { Link } from "react-router-dom";

export const Team: React.FC = () => {
  return (
    <>
      <div>
        <div>
          <H1>About Us</H1>
        </div>
        <MemberWrapper>
          {TeamData.map((member) => (
            <MemberCard key={member.id}>
              <div>
                <img src={member.photo} alt="" />
              </div>
              <div>
                <h2>{member.name}</h2>
                <h3>{member.role}</h3>
                <p> {member.bio} </p>
                <LogoContainer>
                  <Link to={member.linkedin}>
                    <LinkedinLogo />
                  </Link>
                  <Link to={member.github}>
                    <GithubLogo />
                  </Link>
                </LogoContainer>
              </div>
            </MemberCard>
          ))}
        </MemberWrapper>
      </div>
    </>
  );
};
