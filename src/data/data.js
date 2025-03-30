

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
import modamujer from "../assets/modamujer.jpg";
import modahombre from "../assets/modahombre.jpg";
import modaniña from "../assets/modaniña.jpg";
import modajuvenil from "../assets/modajuvenil.avif";


import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import messenger from "../assets/messenger.svg";
import whatsapp from "../assets/whatsapp.svg";
import { size } from "lodash";

const heroapi = {
  title: "JACANA Styles Costa Rica",
  subtitle: "Tú moda a un clic",
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
      btn: "Coamprar",
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
      btn: "Coamprar",
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
      btn: "Coamprar",
      img: psale2,
      price: "--",
      color: "from-yellow-500 to-orange-500 to-indigo-500",
      shadow: "shadow-lg shadow-violet-500",
      size: "--",
    },

  ],
};

const highlight = {
  heading: "REFLEJOS",
  title: "NIKE AIR WITH LIMITLESS CHOICES",
  text: "Nuestro propósito es impulsar el mundo. Actuamos construyendo comunidad, protegiendo nuestro planeta y ampliando el acceso al deporte.",
  btn: "Explorar Más",
  url: "https://www.nike.com/launch/t/nocta-hot-step-black-gold",
  img: hightlightimg,
};

const sneaker = {
  heading: "PRESENTADO",
  title: "NIKE SNEAKERS AIR LANCING SHOES",
  text: "El resplandor vive en las zapatillas Nike Air Lancing, las zapatillas de baloncesto originales que le dan un giro nuevo a lo que mejor conoces: capas con costuras duraderas, acabados limpios y la cantidad perfecta de brillo para hacerte brillar.",
  btn: "Explorar Más",
  url: "https://sneakernews.com/2022/03/21/nike-lebron-2-retro-white-midnight-navy-varsity-crimson-dr0826-100/",
  img: sneakershoe,
};

const topratedsales = {
  title: "Ventas mejor valoradas",
  items: [
    {
      id: "0M0x1",
      title: "Nike Air Low Premium",
      text: "MEN Running Shoes",
      btn: "Coamprar",
      img: product1,
      price: "--",
      color: "from-blue-500 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
      size: "--",
    },
    {
      id: "0M0x2",
      title: "Nike Air Force Green",
      text: "MEN Running Shoes",
      btn: "Coamprar",
      img: product2,
      price: "--",
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-lg shadow-green-500",
      size: "--"
    },
    {
      id: "0M0x3",
      title: "Nike Addapt BB Rose",
      text: "MEN Running Shoes",
      btn: "Coamprar",
      img: product3,
      price: "--",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
      size: "--"
    },
    {
      id: "0M0x4",
      title: "Nike Air Premium",
      text: "MEN Running Shoes",
      btn: "Coamprar",
      img: product4,
      price: "--",
      color: "from-orange-500 to-amber-500",
      shadow: "shadow-lg shadow-orange-500",
      size: "--"
    },
    {
      id: "0M0x5",
      title: "Nike Adapt BB Pro",
      text: "MEN Running Shoes",
      btn: "Coamprar",
      img: product5,
      price: "--",
      color: "from-gray-900 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
      size: "--"
    },
    {
      id: "0M0x6",
      title: "Air Jordan PR3",
      text: "MEN Running Shoes",
      btn: "Coamprar",
      img: product6,
      price: "--",
      color: "from-blue-500 to-cyan-500",
      shadow: "shadow-lg shadow-cyan-500",
      size: "--"
    },
    {
      id: "0M0x7",
      title: "Nike Multi Smart Shoe",
      text: "MEN Running Shoes",
      btn: "Coamprar",
      img: product1,
      price: "--",
      color: "from-yellow-500 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
      size: "--"
    },
    {
      id: "0M0x8",
      title: "Nike Jordan Air Max",
      text: "MEN Running Shoes",
      btn: "Coamprar",
      img: product9,
      price: "--",
      color: "from-[#936550] to-orange-900",
      shadow: "shadow-lg shadow-orange-800",
      size: "--"
    },
    {
      id: "0M0x9",
      title: "Nike Old Max-x",
      text: "MEN Running Shoes",
      btn: "Coamprar",
      img: product10,
      price: "--",
      color: "from-indigo-700 to-indigo-700",
      shadow: "shadow-lg shadow-indigo-500",
      size: "--"
    },
    {
      id: "0M0x10",
      title: "Nike Lime Jordan 11",
      text: "MEN Running Shoes",
      btn: "Coamprar",
      img: product12,
      price: "--",
      color: "from-green-600 to-lime-500",
      shadow: "shadow-lg shadow-lime-500",
      size: "--"
    },
    {
      id: "0M0x11",
      title: "Nike Air Black Max",
      text: "MEN Running Shoes",
      btn: "Coamprar",
      img: product11,
      price: "--",
      color: "from-slate-900 to-black",
      shadow: "shadow-lg shadow-black",
      size: "--"
    },
    {
      id: "0M0x12",
      title: "Nike Zoom Max",
      text: "MEN Running Shoes",
      btn: "Coamprar",
      img: product8,
      price: "--",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
      size: "--"
    },
  ],
};

const story = {
    title: "VISITE NUESTRA CATEGORÍAS",
    news: [
      {
        title: "MUJER",
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
        title: "NIÑA",
        text: "La moda infantil femenina es un caleidoscopio de creatividad y funcionalidad, donde la comodidad se fusiona con las últimas tendencias. Desde vestidos con estampados vibrantes y faldas con vuelo hasta conjuntos deportivos chic y accesorios llamativos, la moda de niña celebra la individualidad y el espíritu juguetón. Los diseñadores se inspiran en la imaginación infantil, creando prendas que permiten a las niñas expresarse mientras exploran el mundo con confianza y estilo.",
        img: modaniña,
        time: "2 Hours",
        url: "#",
        like: "5/5",
        by: "moda",
        btn: "Explorar más"
      },
      {
        title: "JUVENIL",
        text: "La moda juvenil es un caleidoscopio en constante evolución, donde la individualidad se fusiona con las tendencias globales. Desde la explosión del streetwear con sus siluetas oversized y zapatillas llamativas, hasta la nostalgia de los 90 y 2000 que resurge con tops diminutos y pantalones de tiro bajo, la moda juvenil es un reflejo de la autoexpresión y la búsqueda de identidad. Las redes sociales y los influencers juegan un papel crucial, dictando tendencias que se viralizan en segundos, mientras que la sostenibilidad y la moda genderless ganan terreno, desafiando las normas y abrazando la diversidad.",
        img: modajuvenil,
        time: "2 Hours",
        url: "#",
        like: "5/5",
        by: "moda",
        btn: "Explorar más"
      },
      {
        title: "HOMBRE",
        text: "La moda masculina ha experimentado una transformación radical, impulsada por una creciente conciencia de estilo y la ruptura de estereotipos. Los hombres de hoy se aventuran más allá de los básicos, experimentando con colores vibrantes, texturas innovadoras y siluetas que desafían las normas tradicionales. Esta evolución no solo redefine la masculinidad, sino que también empodera a los hombres a expresar su individualidad a través de la ropa, marcando un hito en la historia de la moda.",
        img: modahombre,
        time: "2 Hours",
        url: "../pages/Hombre.jsx",
        like: "5/5",
        by: "moda",
        btn: "Explorar más"
      },
    ],
  };

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


export { heroapi, footerAPI, story, sneaker, highlight, topratedsales, popularsales };