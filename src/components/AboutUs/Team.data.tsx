interface Team {
  id: number;
  name: string;
  role: string;
  bio: string;
  photo: string;
  linkedin: string;
  github: string;
}

export const TeamData: Team[] = [
  {
    id: 1,
    name: "Paulina Filipiak",
    role: "Frontend Developer",
    bio: "Hejka naklejka, generalnie to lubię robić aplikacje",
    photo: "https://avatars.githubusercontent.com/u/111111622?v=4",
    linkedin: "https://www.linkedin.com/in/filipiakdev/",
    github: "https://github.com/paulina-filipiak",
  },
  {
    id: 2,
    name: "Dawid Matras",
    role: "Frontend Developer",
    bio: "Hejka naklejka, generalnie to lubię robić aplikacje",
    photo: "https://avatars.githubusercontent.com/u/112706560?v=4",
    linkedin: "https://www.linkedin.com/in/dawid-matras/",
    github: "https://github.com/Davee89",
  },
  {
    id: 3,
    name: "Tomasz Smuga",
    role: "Frontend Developer",
    bio: "Hejka naklejka, generalnie to lubię robić aplikacje",
    photo: "https://avatars.githubusercontent.com/u/112390369?v=4",
    linkedin: "linkedin.com",
    github: "https://github.com/TomaszSmuga",
  },
];
