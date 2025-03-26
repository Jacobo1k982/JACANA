import heroimg from "../assets/hero.png";

import hightlightimg from "../assets/hightlightimg.png";
import sneakershoe from "../assets/sneaker.png";

import clip from "../assets/video/clip.mp4";
import vcover1 from "../assets/video/vcover1.png";
import vcover2 from "../assets/video/vcover2.png";
import vcover3 from "../assets/video/vcover3.png";

import psale1 from "../assets/nike-air-red.png";
import psale2 from "../assets/nike-adapt-bb.png";
import psale3 from "../assets/nike-adapt-bb-smart.png";
import psale4 from "../assets/hero.png";

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import product9 from "../assets/product9.png";
import product10 from "../assets/product10.png";
import product11 from "../assets/product11.png";
import product12 from "../assets/product12.png";

import modaniño from "../assets/modaniño.jpg";
import modamujer from "../assets/modamujer.webp";
import modahombre from "../assets/modahombre.webp";



import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import messenger from "../assets/messenger.svg";
import whatsapp from "../assets/whatsapp.svg";
import { size } from "lodash";


const heroapi = {
  title: "JACANA Styles Store",
  subtitle: "Tienda virtual para su comodidad y estilo",
  img: heroimg,
  btntext: "Explore Product",
  videos: [
    { imgsrc: vcover1, clip: clip },
    { imgsrc: vcover2, clip: clip },
    { imgsrc: vcover3, clip: clip },
  ],
  sociallinks: [
    { icon: facebook },
    { icon: messenger },
    { icon: instagram },
    { icon: twitter },
    { icon: youtube },
    { icon: whatsapp },
  ],
};

const popularsales = {
  title: "Ventas populares",
  items: [
    {
      id: "0p0x1",
      title: "Nike Air Max Black Supreme",
      text: "WOMEN Running Shoes",
      rating: "4.9",
      size: "36-37",
      btn: "Comprar",
      img: psale4,
      price: "80",
      color: "from-blue-600 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0p0x2",
      title: "Nike Martine Rose",
      text: "MEN Running Shoes",
      rating: "4.5",
      btn: "Buy Now",
      img: psale1,
      price: "--",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
      size: "--",
    },
    {
      id: "0p0x3",
      title: "Nike Smart Shoe 2.0",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: psale3,
      price: "--",
      color: "from-violet-500 to-indigo-500",
      shadow: "shadow-lg shadow-violet-500",
      size: "--",
    },
    {
      id: "0p0x4",
      title: "Nike Smart Shoe 2.0",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: psale2,
      price: "--",
      color: "from-yellow-500 to-orange-500 to-indigo-500",
      shadow: "shadow-lg shadow-violet-500",
      size: "--",
    },
    
  ],
};

const highlight = {
  heading: "HIGHLIGHTS",
  title: "NIKE AIR WITH LIMITLESS CHOICES",
  text: "Our Purpose is to move the world forward. We take action by building community, protecting our planet and increasing access to sport.",
  size: "Medium",
  btn: "Explore More",
  url: "https://www.nike.com/launch/t/nocta-hot-step-black-gold",
  img: hightlightimg,
};

const sneaker = {
  heading: "FEATURED",
  title: "NIKE SNEAKERS AIR LANCING SHOES",
  text: "The radiance lives on Nike Sneakers Air Lancing Shoes, the basket ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
  btn: "Explore More",
  url: "https://sneakernews.com/2022/03/21/nike-lebron-2-retro-white-midnight-navy-varsity-crimson-dr0826-100/",
  size: "Large",
  img: sneakershoe,
};

const topratedsales = {
  title: "Top Rated Sales",
  items: [
    {
      id: "0M0x1",
      title: "Nike Air Low Premium",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product1,
      price: "150",
      color: "from-sky-600 to-indigo-600",
      shadow: "shadow-lg shadow-blue-500",
      size: "8",
    },
    {
      id: "0M0x2",
      title: "Nike Air Force Green",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product2,
      price: "150",
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "0M0x3",
      title: "Nike Addapt BB Rose",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product3,
      price: "150",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0M0x4",
      title: "Nike Air Premium",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product4,
      price: "150",
      color: "from-orange-500 to-amber-500",
      shadow: "shadow-lg shadow-orange-500",
    },
    {
      id: "0M0x5",
      title: "Nike Adapt BB Pro",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product5,
      price: "150",
      color: "from-gray-900 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x6",
      title: "Air Jordan PR3",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product6,
      price: "150",
      color: "from-blue-500 to-cyan-500",
      shadow: "shadow-lg shadow-cyan-500",
    },
    {
      id: "0M0x7",
      title: "Nike Multi Smart Shoe",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product1,
      price: "150",
      color: "from-yellow-500 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x8",
      title: "Nike Jordan Air Max",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product9,
      price: "150",
      color: "from-[#936550] to-orange-900",
      shadow: "shadow-lg shadow-orange-800",
    },
    {
      id: "0M0x9",
      title: "Nike Old Max-x",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product10,
      price: "150",
      color: "from-indigo-700 to-indigo-700",
      shadow: "shadow-lg shadow-indigo-500",
    },
    {
      id: "0M0x10",
      title: "Nike Lime Jordan 11",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product12,
      price: "150",
      color: "from-green-600 to-lime-500",
      shadow: "shadow-lg shadow-lime-500",
    },
    {
      id: "0M0x11",
      title: "Nike Air Black Max",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product11,
      price: "150",
      color: "from-slate-900 to-black",
      shadow: "shadow-lg shadow-black",
    },
    {
      id: "0M0x12",
      title: "Nike Zoom Max",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product8,
      price: "150",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
  ],
};


const story = {
  title: "VISITE NUESTRA CATEGORÍAS",
  news: [
    {
      title: "DAMA",
      text: "La moda femenina es mucho más que apariencia; es una herramienta poderosa para la autoexpresión y el empoderamiento. Permite a las mujeres reflejar su identidad única, aumentar su confianza y sentirse cómodas en su propia piel. Además, la moda actúa como un lenguaje no verbal, comunicando mensajes sobre quiénes somos y conectándonos con otros. A lo largo de la historia, ha sido un motor de cambio social, desafiando estereotipos y promoviendo la diversidad. En esencia, la moda permite a las mujeres sentirse bien consigo mismas, expresar su individualidad y navegar por el mundo con seguridad y estilo.",
      img: modamujer,
      url: "#",
      like: "5/5",
      time: "11 Mins",
      by: "moda",
      btn: "Explorar más"
    },
    {
      title: "NIÑO",
      text: "La moda infantil, más allá de ser un reflejo de tendencias adultas en miniatura, se ha convertido en un poderoso vehículo de expresión y desarrollo para los niños. Al permitirles elegir y experimentar con su ropa, se fomenta su individualidad y creatividad, construyendo una base sólida para su autoestima y confianza. Además, la moda infantil sostenible emerge como una fuerza transformadora, impulsando la conciencia ambiental desde temprana edad y promoviendo un consumo responsable que moldea el futuro de la industria.",
      img: modaniño,
      time: "41 Mins",
      like: "5/5",
      url: "#",
      by: "moda",
      btn: "Explorar más"
    },
    {
      title: "CABALLERO",
      text: "La moda masculina ha experimentado una transformación radical, impulsada por una creciente conciencia de estilo y la ruptura de estereotipos. Los hombres de hoy se aventuran más allá de los básicos, experimentando con colores vibrantes, texturas innovadoras y siluetas que desafían las normas tradicionales. Esta evolución no solo redefine la masculinidad, sino que también empodera a los hombres a expresar su individualidad a través de la ropa, marcando un hito en la historia de la moda.",
      img: modahombre,
      time: "2 Hours",
      url: "#",
      like: "5/5",
      by: "moda",
      btn: "Explorar más"
    },
  ],
};

const categoria = {
  title: "Categorías",
  new: [
    {
      title: "CategoríaHombre",
      text: "#"
    }
  ]
  
}


const footerAPI = {
  titles: [{ title: "JACANA" }, { title: "Get Help" }, { title: "Company" }],
  links: [
    [
      { link: "News" },
      { link: "Careers" },
      { link: "Investors" },
      { link: "Prupose" },
      { link: "Sustainability" },
    ],
    [
      { link: "Order Status" },
      { link: "Shipping & Delivery" },
      { link: "Payment Options" },
      { link: "Gift Card Balance" },
      { link: "Contact Us" },
      { link: "FAQ" },
      { link: "Blog" },
    ],
    [
      { link: "Gift Cards" },
      { link: "Promotions" },
      { link: "Find A Store" },
      { link: "Signup" },
      { link: "Nike Jouneral" },
      { link: "Send Us Feeback" },
    ],
  ]
};


export { heroapi, footerAPI, story, sneaker, highlight, topratedsales, popularsales, categoria };