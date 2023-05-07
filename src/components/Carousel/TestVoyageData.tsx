interface Voyage {
  id: string;
  name: string;
  destination: string;
  image: string;
}

export const TestVoyageData: Voyage[] = [
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
  {
    id: "Krakow-34446350",
    name: "Most Important Landmarks",
    destination: "Krakow",
    image: "https://www.polska.travel/images/pl-PL/glowne-miasta/krakow/krakow_rynek_2_1170.jpg",
  },
  {
    id: "Prague-69343640",
    name: "Best Instagram Spots",
    destination: "Prague",
    image: "https://lp-cms-production.imgix.net/features/2019/07/shutterstockRF_300856853-f8561259593d.jpg",
  },
];
