import PortadaMañanitas from "../../public/PIJAMAS/PortadaMañanitas.png";

import ConjMañanitas from "../../public/PIJAMAS/ConjuntoMañanitas/CM1.jpg";
import ConjMañanitas2 from "../../public/PIJAMAS/ConjuntoMañanitas/CM2.jpg";
import ConjMañanitas3 from "../../public/PIJAMAS/ConjuntoMañanitas/CM3.jpg";

const marcamañanitasAPI = [
    {
        id: "logo1",
        slug: "catalogoMañanitas",
        nombre: "Conjunto tirantes",
        descripcion: "",
        img: [PortadaMañanitas],
        color: "",
        material: "",
        dimensiones: "",
        precio: "",
        moneda: "CRC",
    },
];

const dataMañanitas = [
    {
        id: "data1",
        slug: "CatalogoMañanitas",
        nombre: "",
        descripcion: "",
        img: [ConjMañanitas, ConjMañanitas2, ConjMañanitas3],
        color: "",
        Tipo_de_cartera: "",
        material: "",
        dimensiones: "",
        precio: "",
        moneda: "₡",
        marca: "",
    },
]

const marcaNombres = {
    Pijama_mañanitas: "Pijama_mañanitas"
};

export { marcamañanitasAPI, marcaNombres, dataMañanitas };