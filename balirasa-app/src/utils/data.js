import ayamBetutu from "../assets/ayam-betutu.jpg";
import sateLilit from "../assets/sate-lilit.jpg";
import nasiJinggo from "../assets/nasi-jinggo.jpg";
import lawarBali from "../assets/lawar-bali.jpg";
import babiGuling from "../assets/babi-guling.jpg";
import tipatCantok from "../assets/tipat-cantok.jpg";
import serombotan from "../assets/serombotan.jpg";
import siobakBabi from "../assets/siobak-babi.jpg";
import mujairNyatNyat from "../assets/mujair-nyat-nyat.jpg";
import tumAyam from "../assets/tum-ayam.jpg";
import kuahBalung from "../assets/kuah-balung.jpg";
import jajeLaklak from "../assets/jaje-laklak.jpg";
import jukutAres from "../assets/jukut-ares.jpg";
import sambalMatah from "../assets/sambal-matah.jpg";
import sambalEmbe from "../assets/sambal-embe.jpg"; 
import lolohCemcem from "../assets/loloh-cemcem.jpg";
import EsDaluman from "../assets/es-daluman.jpg";
import SamsamGuling from "../assets/sam-sam-guling.jpg";

const foods = [
  {
    id: 1,
    name: "Ayam Betutu",
    category: "Makanan Utama",
    price: 25000,
    rating: 4.8,
    image: ayamBetutu,
    description:
      "Ayam khas Bali yang dimasak dengan bumbu base genep dan rempah-rempah khas Bali.",
  },

  {
    id: 2,
    name: "Sate Lilit",
    category: "Sate",
    price: 20000,
    rating: 4.7,
    image: sateLilit,
    description:
      "Sate khas Bali dengan daging berbumbu yang dililitkan pada batang bambu.",
  },

  {
    id: 3,
    name: "Nasi Jinggo",
    category: "Nasi",
    price: 10000,
    rating: 4.6,
    image: nasiJinggo,
    description:
      "Nasi khas Bali dengan porsi kecil yang disajikan bersama lauk dan sambal.",
  },

  {
    id: 4,
    name: "Lawar Bali",
    category: "Makanan Utama",
    price: 18000,
    rating: 4.5,
    image: lawarBali,
    description:
      "Campuran sayuran, kelapa parut, dan bumbu khas Bali yang kaya rasa.",
  },

  {
    id: 5,
    name: "Babi Guling",
    category: "Makanan Utama",
    price: 35000,
    rating: 4.9,
    image: babiGuling,
    description:
      "Hidangan khas Bali berupa daging babi panggang dengan bumbu tradisional.",
  },

  {
    id: 6,
    name: "Tipat Cantok",
    category: "Makanan Tradisional",
    price: 15000,
    rating: 4.6,
    image: tipatCantok,
    description:
      "Tipat dengan sayuran rebus yang disiram bumbu kacang khas Bali.",
  },

  {
    id: 7,
    name: "Serombotan",
    category: "Makanan Tradisional",
    price: 10000,
    rating: 4.0,
    image: serombotan,
    description:
      "Hidangan tradisional khas Bali yang terbuat dari berbagai sayuran dan bumbu khas Bali.",
  },

  {
    id: 8,
    name: "Siobak Babi",
    category: "Makanan Utama",
    price: 15000,
    rating: 4.5,
    image: siobakBabi,
    description:
      "Hidangan tradisional khas Bali yang terbuat dari daging babi yang dimasak dengan bumbu rempah-rempah.",
  },

  {
    id: 9,
    name: "Mujair Nyat-Nyat",
    category: "Makanan Utama",
    price: 20000,
    rating: 4.2,
    image: mujairNyatNyat,
    description:
      "Hidangan tradisional khas Bali yang terbuat dari ikan mujair yang dimasak dengan bumbu khas Bali.",
  },

  {
    id: 10,
    name: "Tum Ayam",
    category: "Makanan Utama",
    price: 20000,
    rating: 4.3,
    image: tumAyam,
    description:
      "Hidangan tradisional khas Bali yang terbuat dari ayam berbumbu yang dibungkus dengan daun pisang.",
  },

    {
  id: 11,
  name: "Kuah Balung Babi",
  category: "Makanan Utama",
  price: 25000,
  rating: 4.4,
  image: kuahBalung,
  description:
    "Hidangan tradisional khas Bali yang terbuat dari tulang babi yang dimasak dengan bumbu rempah-rempah dan disajikan dengan kuah.",
},

  {
    id: 12,
    name: "Jaje Laklak",
    category: "Makanan Tradisional",
    price: 5000,
    rating: 4.1,
    image: jajeLaklak,
    description:
      "Kue tradisional khas Bali yang terbuat dari tepung beras dan kelapa parut, disajikan dengan gula merah cair.",
  },

  {
    id: 13,
    name: "Jukut Ares",
    category: "Makanan Tradisional",
    price: 15000,
    rating: 4.2,
    image: jukutAres,
    description:
      "Makanan tradisional khas Bali yang terbuat dari batang pisang dan dipadukan dengan bumbu khas Bali.",
  },

  {
    id: 14,
    name: "Sambal Matah",
    category: "Sambal",
    price: 5000,
    rating: 4.8,
    image: sambalMatah,
    description:
        "Sambal khas Bali yang terbuat dari bawang merah, cabai, serai, dan bumbu lainnya, disajikan segar.",
  },

  {
    id: 15,
    name: "Sambal Embe",
    category: "Sambal",
    price: 5000,
    rating: 4.7,
    image: sambalEmbe,
    description:
        "Sambal khas Bali yang terbuat dari cabai dan bawang putih, yang digoreng.",
  },

  {
    id: 16,
    name: "Loloh Cemcem",
    category: "Minuman",
    price: 10000,
    rating: 4.5,
    image: lolohCemcem,
    description:
        "Minuman tradisional khas Bali yang terbuat dari daun cemcem, disajikan dingin.",
  },

  {
    id: 17,
    name: "Es Daluman",
    category: "Minuman",
    price: 12000,
    rating: 4.6,
    image: EsDaluman,
    description:
        "Minuman tradisional khas Bali yang terbuat dari campuran buah-buahan dan sirup, disajikan dengan es.",
  },

  {
    id: 18,
    name: "Samsam Guling",
    category: "Makanan Utama",
    price: 25000,
    rating: 4.5,
    image: SamsamGuling,
    description:
        "Hidangan tradisional khas Bali yang terbuat dari daging babi panggang dengan bumbu khas Bali.",  
  },
];

export default foods;