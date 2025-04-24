import { useParams } from "react-router-dom";
import {dataCarteras} from "../data/dataCarteras";

const CarteraDetalle = () => {
    const { id } = useParams();
    const cartera = dataCarteras.find((item) => item.id === id);

    if (!cartera) {
        return <div className="text-center text-white">Cartera no encontrada</div>;
    }

    return (
        <div className="min-h-screen bg-black text-white p-6">
            <h1 className="text-3xl font-bold mb-4">{cartera.nombre}</h1>
            <img src={cartera.img[0]} alt={cartera.nombre} className="w-80 h-80 object-cover rounded-xl mb-4" />
            <p className="mb-2"><strong>Descripción:</strong> {cartera.descripcion}</p>
            <p className="mb-2"><strong>Color:</strong> {cartera.color}</p>
            <p className="mb-2"><strong>Material:</strong> {cartera.material}</p>
            <p className="mb-2"><strong>Dimensiones:</strong> {cartera.dimensiones}</p>
            <p className="mb-2"><strong>Precio:</strong> ${cartera.precio}</p>
        </div>
    );
};

export default CarteraDetalle;

