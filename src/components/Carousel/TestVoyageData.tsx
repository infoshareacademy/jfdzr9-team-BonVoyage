interface Voyage {
  id: string;
  name: string;
  destination: string;
  image: string;
}

export const TestVoyageData: Voyage[] = [
  {
    id: "Zielona Góra - Szlakiem Winnic-66885199",
    name: "Wineyard trail",
    destination: "Zielona Góra",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Ratuno21w.jpg/1200px-Ratuno21w.jpg",
  },
  {
    id: "Poznań-2233872",
    name: "Old Town",
    destination: "Poznań",
    image: "https://www.polska.travel/images/pl-PL/glowne-miasta/poznan/poznan_ratusz_2_1170.jpg",
  },
  {
    id: "Warsaw-32337899",
    name: "Weekend Trip",
    destination: "Warsaw",
    image: "https://warsawtour.pl/wp-content/uploads/2018/07/Centrum-fot.-Zbigniew-Pan%C3%B3w-pzstudio.pl_.jpg",
  },
  {
    id: "Białystok-90590776",
    name: "Musical Journey",
    destination: "Białystok",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/81/Bazylika_w_Bia%C5%82ymstoku_-_Emilia_Ernst.jpg",
  },
  {
    id: "Radom-86066198",
    name: "Student Trip",
    destination: "Radom",
    image: "https://bi.im-g.pl/im/ea/3f/e9/z15286250AMP,Radom--ul--Zeromskiego.jpg",
  },
];
