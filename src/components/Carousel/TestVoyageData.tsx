interface Voyage {
  id: number;
  name: string;
  destination: string;
  image: string;
}

export const TestVoyageData: Voyage[] = [
  {
    id: 1,
    name: "Test Voyage 1",
    destination: "Radom",
    image: "https://bi.im-g.pl/im/ea/3f/e9/z15286250AMP,Radom--ul--Zeromskiego.jpg",
  },
  {
    id: 2,
    name: "Test Voyage 2",
    destination: "Zielona Góra",
    image: "https://visitzielonagora.pl/wp-content/uploads/2021/01/DJI_0028-scaled.jpg",
  },
  {
    id: 3,
    name: "Test Voyage 3",
    destination: "Poznań",
    image: "https://codziennypoznan.pl/wp-content/uploads/2022/06/obrazekpic11016183387331831with-ratio16_9.png",
  },
  {
    id: 4,
    name: "Test Voyage 4",
    destination: "Warsaw",
    image: "https://warsawtour.pl/wp-content/uploads/2018/07/Centrum-fot.-Zbigniew-Pan%C3%B3w-pzstudio.pl_.jpg",
  },
  {
    id: 5,
    name: "Test Voyage 5",
    destination: "Moon",
    image:
      "https://www.seti.org/sites/default/files/styles/original/public/2020-10/earth-view-from-moon-perspective-footprints-1400px.jpg?itok=hAH2R4i3",
  },
];
