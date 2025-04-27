import hco1 from "../../public/Cartera/Mujer/H&Co/cartera1.webp";
import hco2 from "../../public/Cartera/Mujer/H&Co/cartera2.webp";
import hco3 from "../../public/Cartera/Mujer/H&Co/cartera3.webp";
import hco4 from "../../public/Cartera/Mujer/H&Co/cartera4.webp";
import hco5 from "../../public/Cartera/Mujer/H&Co/cartera5.webp";
import hco6 from "../../public/Cartera/Mujer/H&Co/cartera6.webp";
import hco7 from "../../public/Cartera/Mujer/H&Co/cartera7.webp";
import tote1 from "../../public/Cartera/Mujer/H&Co/tote1.webp";
import tote2 from "../../public/Cartera/Mujer/H&Co/tote2.webp";
import tote3 from "../../public/Cartera/Mujer/H&Co/tote3.webp";
import tote4 from "../../public/Cartera/Mujer/H&Co/tote4.webp";
import tote5 from "../../public/Cartera/Mujer/H&Co/tote5.webp";
import tote6 from "../../public/Cartera/Mujer/H&Co/tote6.webp";
import tote7 from "../../public/Cartera/Mujer/H&Co/tote7.webp";
import tote8 from "../../public/Cartera/Mujer/H&Co/tote8.webp";

import sat1 from "../../public/Cartera/Mujer/Satchel/sat1.webp";
import sat2 from "../../public/Cartera/Mujer/Satchel/sat2.webp";
import sat3 from "../../public/Cartera/Mujer/Satchel/sat3.webp";
import sat4 from "../../public/Cartera/Mujer/Satchel/sat4.webp";
import sat5 from "../../public/Cartera/Mujer/Satchel/sat5.webp";
import sat6 from "../../public/Cartera/Mujer/Satchel/sat6.webp";
import sat7 from "../../public/Cartera/Mujer/Satchel/sat7.webp";
import sat8 from "../../public/Cartera/Mujer/Satchel/sat8.webp";

import cros1 from "../../public/Cartera/Mujer/Crossbody/cros1.webp";
import cros2 from "../../public/Cartera/Mujer/Crossbody/cros2.webp";
import cros3 from "../../public/Cartera/Mujer/Crossbody/cros3.webp";
import cros4 from "../../public/Cartera/Mujer/Crossbody/cros4.webp";
import cros5 from "../../public/Cartera/Mujer/Crossbody/cros5.webp";
import cros6 from "../../public/Cartera/Mujer/Crossbody/cros6.webp";
import cros7 from "../../public/Cartera/Mujer/Crossbody/cros7.webp";
import cros8 from "../../public/Cartera/Mujer/Crossbody/cros8.webp";

const logoHCO = "/Cartera/Mujer/hco.png";
const logoCalvinKlein = "/Cartera/Mujer/calvinklein.webp";
const logoNineWest = "/Cartera/Mujer/ninewest.png";

const marcacarteraapi = [
    {
        id: "logo1",
        slug: "HCO",
        nombre: "Cartera tote",
        descripcion: "Cartera tote H&Co color gris para mujer",
        img: [logoHCO],
        color: "Gris",
        material: "100% Vinil",
        dimensiones: "Alto 28.5cm, ancho 41cm, profundidad",
        precio: "37080",
        moneda: "CRC",
        marca: "hco",
    },
    {
        id: "logo2",
        slug: "calvinklein",
        nombre: "Cartera tote",
        descripcion: "Cartera tote Calvin Klein color gris para mujer",
        img: [logoCalvinKlein],
        color: "Gris",
        material: "100% Vinil",
        dimensiones: "Alto 28.5cm, ancho 41cm, profundidad",
        precio: "37080",
        moneda: "CRC",
        marca: "calvinklein",
    },
    {
        id: "logo3",
        slug: "ninewest",
        nombre: "Cartera tote",
        descripcion: "Cartera tote Nine West color gris para mujer",
        img: [logoNineWest],
        color: "Gris",
        material: "100% Vinil",
        dimensiones: "Alto 28.5cm, ancho 41cm, profundidad",
        precio: "37080",
        moneda: "CRC",
        marca: "ninewest",
    }
];

const dataCarteras = [
    // ... tu array dataCarteras (sin cambios necesarios aquí)  
    {
        id: "modelo1",
        slug: "HCO",
        nombre: "Cartera tote H&Co",
        descripcion: "Cartera tote H&Co color gris para mujer",
        img: [hco1, hco2, hco3, hco4, hco5, hco6, hco7],
        color: "Gris",
        Tipo_de_cartera: "Tote",
        material: "100% Vinil",
        dimensiones: "Alto 28.5cm, ancho 41cm, profundidad 12.5cm",
        precio: "37080",
        moneda: "₡",
        marca: "hco",
    },
    {
        id: "modelo2",
        slug: "HCO",
        nombre: "Cartera Satchel H&CO",
        descripcion: "Cartera Satchel H&CO color verde para mujer",
        img: [sat1, sat2, sat3, sat4, sat5, sat6, sat7, sat8],
        color: "Verde",
        material: "100% Vinil",
        dimensiones: "",
        precio: "19450",
        moneda: "₡",
        marca: "hco",
    },
    {
        id: "modelo3",
        slug: "HCO",
        nombre: "Cartera crossbody H&Co",
        descripcion: "Cartera crossbody H&Co color plata para mujer",
        img: [cros1, cros2, cros3, cros4, cros5, cros6, cros7, cros8],
        color: "Plateado",
        material: "100% Vinil",
        dimensiones: "",
        precio: "19450",
        moneda: "₡",
        marca: "hco",
    },
    {
        id: "modelo4",
        slug: "HCO",
        nombre: "Cartera tote H&Co",
        descripcion: "Cartera tote H&Co color rosado para mujer",
        img: [tote1, tote2, tote3, tote4, tote5, tote6, tote7, tote8],
        color: "Rosado",
        material: "100% Vinil",
        dimensiones: "",
        precio: "34875",
        moneda: "₡",
        marca: "hco",
    },
];

const marcaNombres = {
    hco: "H&Co",
    calvinklein: "Calvin Klein",
    ninewest: "Nine West",
};

export { dataCarteras, marcacarteraapi, marcaNombres };