import heroimg from "../assets/hero.png";
import mujer from "../assets/Mujer/portadas/mujer.png";

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

import sportwoman from "/NKM/NK_portada.png";

/*{img mañanitas}*/
import WA0004 from "../assets/Mujer/Pijamas/mañanitas/WA0004.jpg";
import WA0005 from "../assets/Mujer/Pijamas/mañanitas/WA0005.jpg";
import WA0006 from "../assets/Mujer/Pijamas/mañanitas/WA0006.jpg";
import WA0007 from "../assets/Mujer/Pijamas/mañanitas/WA0007.jpg";
import WA0008 from "../assets/Mujer/Pijamas/mañanitas/WA0008.jpg";
import WA0009 from "../assets/Mujer/Pijamas/mañanitas/WA0009.jpg";
import WA0010 from "../assets/Mujer/Pijamas/mañanitas/WA0010.jpg";
import WA0011 from "../assets/Mujer/Pijamas/mañanitas/WA0011.jpg";
import WA0012 from "../assets/Mujer/Pijamas/mañanitas/WA0012.jpg";
import WA0013 from "../assets/Mujer/Pijamas/mañanitas/WA0013.jpg";
import WA0014 from "../assets/Mujer/Pijamas/mañanitas/WA0014.jpg";
import WA0015 from "../assets/Mujer/Pijamas/mañanitas/WA0015.jpg";
import WA0016 from "../assets/Mujer/Pijamas/mañanitas/WA0016.jpg";
import WA0017 from "../assets/Mujer/Pijamas/mañanitas/WA0017.jpg";
import WA0018 from "../assets/Mujer/Pijamas/mañanitas/WA0018.jpg";
import WA0019 from "../assets/Mujer/Pijamas/mañanitas/WA0019.jpg";
import WA0020 from "../assets/Mujer/Pijamas/mañanitas/WA0020.jpg";
import WA0021 from "../assets/Mujer/Pijamas/mañanitas/WA0021.jpg";
import WA0022 from "../assets/Mujer/Pijamas/mañanitas/WA0022.jpg";

import modaniño from "../assets/modaniño.jpg";
import modamujer from "../assets/modamujer.jpg";
import modahombre from "../assets/modahombre.jpg";
import modaniña from "../assets/modaniña.jpg";
import modajuvenil from "../assets/modajuvenil.avif";
import womanshose from "../assets/Mujer/portadas/womanshose.webp";
import gent from "../assets/Hombre/Portada/gent.png";
import closet from "../assets/Mujer/portadas/closet.jpg";
import pijama from "../assets/Mujer/portadas/pijama.jpg";
import deportivo from "../assets/Mujer/portadas/deportivo.webp";
import jeans from "../assets/Mujer/portadas/jeans.webp";
import zapatos from "../assets/Hombre/Portada/zapatos.jpg";


/*{icon}*/
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import messenger from "../assets/messenger.svg";
import whatsapp from "../assets/whatsapp.svg";
import size from "lodash";


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
    { icon: facebook, url: "https://facebook.com/tuperfil" },
    { icon: messenger, url: "https://m.me/tuperfil" },
    { icon: instagram, url: "https://instagram.com/tuperfil" },
    { icon: twitter, url: "https://twitter.com/tuperfil" },
    { icon: youtube, url: "https://youtube.com/tucanal" },
    {
      icon: whatsapp,
      url: "https://wa.me/50687905876?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n",
    },
  ],
};

const hero2api = {
  title: "JACANA Styles Costa Rica",
  subtitle: "Tú moda a un clic",
}

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
      btn: "Muy Pronto",
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
      btn: "Muy Pronto",
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
      btn: "Muy Pronto",
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
  url: "",
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

const deportivoapi = {
  heading: "DEPORTIVOS",
  title: "JACANA Styles Costa Rica",
  subtitle: "Zapatos deportivos",
  img: hightlightimg,
  sociallinks: [
    { icon: facebook, url: "https://facebook.com/tuperfil" },
    { icon: messenger, url: "https://m.me/tuperfil" },
    { icon: instagram, url: "https://instagram.com/tuperfil" },
    { icon: twitter, url: "https://twitter.com/tuperfil" },
    { icon: youtube, url: "https://youtube.com/tucanal" },
    {
      icon: whatsapp,
      url: "https://wa.me/50687905876?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n",
    },
  ],
};

const deportivo2api = {
  heading: "DEPORTIVOS",
  title: "JACANA Styles Costa Rica",
  subtitle: "Zapatos ",
  img: hightlightimg,
  sociallinks: [
    { icon: facebook, url: "https://facebook.com/tuperfil" },
    { icon: messenger, url: "https://m.me/tuperfil" },
    { icon: instagram, url: "https://instagram.com/tuperfil" },
    { icon: twitter, url: "https://twitter.com/tuperfil" },
    { icon: youtube, url: "https://youtube.com/tucanal" },
    {
      icon: whatsapp,
      url: "https://wa.me/50687905876?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n",
    },
  ],
};

const deportivo3api = {
  heading: "DEPORTIVOS",
  title: "JACANA Styles Costa Rica",
  subtitle: "Zapatos ",
  img: sportwoman,
  sociallinks: [
    { icon: facebook, url: "https://facebook.com/tuperfil" },
    { icon: messenger, url: "https://m.me/tuperfil" },
    { icon: instagram, url: "https://instagram.com/tuperfil" },
    { icon: twitter, url: "https://twitter.com/tuperfil" },
    { icon: youtube, url: "https://youtube.com/tucanal" },
    {
      icon: whatsapp,
      url: "https://wa.me/50687905876?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n",
    },
  ],
};

const topratedsales = {
  title: "Ventas mejor valoradas",
  items: [
    {
      id: "0M0x1",
      title: "Nike Air Low Premium",
      text: "MEN Running Shoes",
      btn: "Muy Pronto",
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
      btn: "Muy Pronto",
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
      btn: "Muy Pronto",
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
      btn: "Muy Pronto",
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
      btn: "Muy Pronto",
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
      btn: "Muy Pronto",
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
      btn: "Muy Pronto",
      img: product7,
      price: "--",
      color: "from-yellow-500 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
      size: "--"
    },
    {
      id: "0M0x8",
      title: "Nike Jordan Air Max",
      text: "MEN Running Shoes",
      btn: "Muy Pronto",
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
      btn: "Muy Pronto",
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
      btn: "Muy Pronto",
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
      btn: "Muy Pronto",
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
      btn: "Comprar",
      img: product8,
      price: "--",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
      size: "--"
    },
  ],
};

const topratedsales2 = {
  title: "LINEA DEPORTIVA",
  items: [
  ]
};

const topratedsales3 = {
  title: "LINEA DEPORTIVA",
  items: [
  ]
};

const story = {
  title: "",
  news: [
    {
      title: "MUJER",
      text: "La moda femenina es mucho más que apariencia; es una herramienta poderosa para la autoexpresión y el empoderamiento. Permite a las mujeres reflejar su identidad única, aumentar su confianza y sentirse cómodas en su propia piel. Además, la moda actúa como un lenguaje no verbal, comunicando mensajes sobre quiénes somos y conectándonos con otros. A lo largo de la historia, ha sido un motor de cambio social, desafiando estereotipos y promoviendo la diversidad. En esencia, la moda permite a las mujeres sentirse bien consigo mismas, expresar su individualidad y navegar por el mundo con seguridad y estilo.",
      img: modamujer,
      url: "/mujer",
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
      url: "/niño",
      by: "moda",
      btn: "Explorar más"
    },
    {
      title: "NIÑA",
      text: "La moda infantil femenina es un caleidoscopio de creatividad y funcionalidad, donde la comodidad se fusiona con las últimas tendencias. Desde vestidos con estampados vibrantes y faldas con vuelo hasta conjuntos deportivos chic y accesorios llamativos, la moda de niña celebra la individualidad y el espíritu juguetón. Los diseñadores se inspiran en la imaginación infantil, creando prendas que permiten a las niñas expresarse mientras exploran el mundo con confianza y estilo.",
      img: modaniña,
      time: "2 Hours",
      url: "/niña",
      like: "5/5",
      by: "moda",
      btn: "Explorar más"
    },
    {
      title: "JUVENIL",
      text: "La moda juvenil es un caleidoscopio en constante evolución, donde la individualidad se fusiona con las tendencias globales. Desde la explosión del streetwear con sus siluetas oversized y zapatillas llamativas, hasta la nostalgia de los 90 y 2000 que resurge con tops diminutos y pantalones de tiro bajo, la moda juvenil es un reflejo de la autoexpresión y la búsqueda de identidad. Las redes sociales y los influencers juegan un papel crucial, dictando tendencias que se viralizan en segundos, mientras que la sostenibilidad y la moda genderless ganan terreno, desafiando las normas y abrazando la diversidad.",
      img: modajuvenil,
      time: "2 Hours",
      url: "/juvenil",
      like: "5/5",
      by: "moda",
      btn: "Explorar más"
    },
    {
      title: "HOMBRE",
      text: "La moda masculina ha experimentado una transformación radical, impulsada por una creciente conciencia de estilo y la ruptura de estereotipos. Los hombres de hoy se aventuran más allá de los básicos, experimentando con colores vibrantes, texturas innovadoras y siluetas que desafían las normas tradicionales. Esta evolución no solo redefine la masculinidad, sino que también empodera a los hombres a expresar su individualidad a través de la ropa, marcando un hito en la historia de la moda.",
      img: modahombre,
      time: "2 Hours",
      url: "/hombre",
      like: "5/5",
      by: "moda",
      btn: "Explorar más"
    },
  ]
};

const dama = {
  title: "JACANA Styles Costa Rica",
  subtitle: "Moda para las damas",
  image: mujer,
  news: [
    {
      title: "ROPA",
      text: "Para las damas, la moda en la ropa es importante como una forma de expresión personal y para sentirse actualizadas y seguras de sí mismas, mientras que la calidad asegura la durabilidad de las prendas, un mejor ajuste y una sensación más agradable al tacto, y el confort es fundamental para poder llevar la ropa durante todo el día con facilidad y sin restricciones, permitiendo así que las mujeres se sientan bien tanto por dentro como por fuera al vestir.",
      img: closet,
      url: "/ropa",
      btn: "Explorar más"
    },
    {
      title: "ZAPATOS",
      text: "La moda, la calidad y el confort en los zapatos para damas son fundamentales, ya que no solo reflejan el estilo y la personalidad de quien los usa, sino que también influyen en su bienestar y confianza. Un calzado de calidad garantiza durabilidad y resistencia, evitando el desgaste prematuro y ofreciendo una mejor inversión a largo plazo. Por otro lado, el confort es clave para la salud, ya que un buen diseño ergonómico previene dolores, fatiga y problemas en los pies, permitiendo a las mujeres enfrentar su día con comodidad y seguridad. En conjunto, estos tres elementos crean una experiencia única que combina elegancia, funcionalidad y bienestar en cada paso.",
      img: womanshose,
      url: "/Sportmujer",
      btn: "Explorar más"
    },
  ]
};

const ropa = {
  title: "CLOSET",
  news: [
    {
      title: "CONJUNTO MAÑANITAS",
      text: "El uso de una pijama mañanita de mujer ofrece una combinación ideal de confort y practicidad, facilitando una transición suave entre el descanso y las actividades del día. La bata proporciona una capa adicional de calidez y cobertura, lo que resulta especialmente útil en las mañanas frescas o al realizar tareas ligeras en el hogar antes de vestirse por completo, contribuyendo así a una sensación de comodidad y bienestar personal.",
      img: pijama,
      url: "/mañanitas",
      btn: "Explorar más"
    },
    {
      title: "CONJUNTO DEPORTIVO",
      text: "Usar un conjunto deportivo de mujer es importante porque está diseñado para brindar comodidad y soporte durante la actividad física, permitiendo un rango completo de movimiento y ayudando a regular la temperatura corporal. Además de su funcionalidad, estos conjuntos pueden aumentar la motivación y la confianza al hacer ejercicio, y también ofrecen una opción estilizada y coordinada para quienes buscan verse bien mientras se mantienen activas.",
      img: deportivo,
      url: "/cdeportivo",
      btn: "Explorar más"
    },
    {
      title: "PANTALONES",
      text: "Los pantalones jeans de mujer son una prenda fundamental en cualquier guardarropa por su increíble versatilidad, adaptándose a una amplia gama de estilos y ocasiones, desde looks casuales hasta combinaciones más arregladas. Su durabilidad los convierte en una inversión a largo plazo, capaces de resistir el uso diario, mientras que la variedad de cortes y tejidos disponibles aseguran comodidad para diferentes tipos de cuerpo y preferencias, manteniéndose además como un icono de la moda a lo largo del tiempo.",
      img: jeans,
      url: "",
      btn: "Explorar más"
    },
  ]
};

const mañanitas = {
  title: "CONJUNTO MAÑANITA",
  news: [
    {
      title: "CONJUNTO MAÑANITA",
      text: "",
      img: WA0004,
      size: 's,m,l',
    },
    {
      title: "CONJUNTO MAÑANITA",
      text: "",
      img: WA0005,
      url: "",
      btn: ""
    },
    {
      title: "CONJUNTO MAÑANITA",
      text: "",
      img: WA0006,
      url: "",
      btn: ""
    },
    {
      title: "CONJUNTO MAÑANITA",
      text: "",
      img: WA0007,
      url: "",
      btn: ""
    },
    {
      title: "CONJUNTO MAÑANITA",
      text: "",
      img: WA0008,
      url: "",
      btn: ""
    },
    {
      title: "CONJUNTO MAÑANITA",
      text: "",
      img: WA0009,
      url: "",
      btn: ""
    },
    {
      title: "CONJUNTO MAÑANITA",
      text: "",
      img: WA0010,
      url: "",
      btn: ""
    },
    {
      title: "CONJUNTO MAÑANITA",
      text: "",
      img: WA0011,
      url: "",
      btn: ""
    },
    {
      title: "CONJUNTO MAÑANITA",
      text: "",
      img: WA0012,
      url: "",
      btn: ""
    },
    {
      title: "CONJUNTO MAÑANITA",
      text: "",
      img: WA0013,
      url: "",
      btn: ""
    },
    {
      title: "CONJUNTO MAÑANITA",
      text: "",
      img: WA0014,
      url: "",
      btn: ""
    },
    {
      title: "CONJUNTO MAÑANITA",
      text: "",
      img: WA0015,
      url: "",
      btn: ""
    },
  ]
};

const cdeportivo = {
  title: "CONJUNTO DEPORTIVO",
  news: [
    {
      title: "CONJUNTO DEPORTIVO",
      text: "La camisa es un elemento fundamental en cualquier conjunto de ropa, y para",
      img: WA0021,
      url: "",
      btn: "Explorar más"
    },
    {
      title: "CONJUNTO DEPORTIVO",
      text: "La camisa es un elemento fundamental en cualquier conjunto de ropa, y para",
      img: WA0017,
      url: "",
      btn: "Explorar más"
    },
    {
      title: "CONJUNTO DEPORTIVO",
      text: "La camisa es un elemento fundamental en cualquier conjunto de ropa, y para",
      img: WA0018,
      url: "",
      btn: "Explorar más"
    },
    {
      title: "CONJUNTO DEPORTIVO",
      text: "La camisa es un elemento fundamental en cualquier conjunto de ropa, y para",
      img: WA0019,
      url: "",
      btn: "Explorar más"
    },
    {
      title: "CONJUNTO DEPORTIVO",
      text: "La camisa es un elemento fundamental en cualquier conjunto de ropa, y para",
      img: WA0020,
      url: "",
      btn: "Explorar más"
    },
    {
      title: "CONJUNTO DEPORTIVO",
      text: "La camisa es un elemento fundamental en cualquier conjunto de ropa, y para",
      img: WA0022,
      url: "",
      btn: "Explorar más"
    },
  ]
};

const caballero = {
  title: "JACANA Styles Costa Rica",
  subtitle: "Moda para los caballeros",
  image: gent,
  sociallinks: [
    { icon: facebook, url: "https://facebook.com/tuperfil" },
    { icon: messenger, url: "https://m.me/tuperfil" },
    { icon: instagram, url: "https://instagram.com/tuperfil" },
    { icon: twitter, url: "https://twitter.com/tuperfil" },
    { icon: youtube, url: "https://youtube.com/tucanal" },
    {
      icon: whatsapp,
      url: "https://wa.me/50687905876?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n",
    },
  ],
  news: [
    {
      title: "ZAPATOS DEPORTIVOS",
      text: "Los zapatos deportivos para hombres son fundamentales no solo para actividades físicas, sino también para la comodidad y el soporte diario. Ofrecen la amortiguación y estabilidad necesarias para proteger los pies y las articulaciones durante el ejercicio, previniendo lesiones. Además, su diseño versátil los ha convertido en una opción popular para el uso casual, combinando funcionalidad y estilo para el hombre moderno.",
      img: zapatos,
      url: "/deportivo",
      btn: "Explorar más"
    },
    {
      title: "ROPA",
      text: "MUY PRONTO",
      img: "",
      url: "",
      btn: "Explorar más"
    },
    {
      title: "FAJAS",
      text: "MUY PRONTO",
      img: "",
      url: "",
      btn: "Explorar más"
    },
    {
      title: "GORRA",
      text: "MUY PRONTO",
      img: "",
      url: "",
      btn: "Explorar más"
    },
    {
      title: "SANDALIAS",
      text: "MUY PRONTO",
      img: "",
      url: "",
      btn: "Explorar más"
    },
    {
      title: "RELOJ",
      text: "MUY PRONTO",
      img: "",
      url: "",
      btn: "Explorar más"
    },
  ]
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


export { 
  heroapi, footerAPI, story, sneaker, highlight, topratedsales, popularsales, dama, ropa, mañanitas, cdeportivo, hero2api, 
  caballero, deportivoapi, topratedsales2, deportivo2api, topratedsales3, deportivo3api
 };