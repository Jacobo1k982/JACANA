import { useParams } from "react-router-dom";
import {dataMañanitas} from "../../data/conjuntoMañanitas";

const DetalleMañanitas = () => {
    const { id } = useParams();
    const mañanitas = dataMañanitas.find((item) => item.id === id);

    if (!mañanitas) {
        return <div className="text-center text-white">Conjunto no encontrado</div>;
    }

    return (
        <div className="min-h-screen bg-black text-white p-6">
            <h1 className="text-3xl font-bold mb-4">{mañanitas.nombre}</h1>
            <img src={mañanitas.img[0]} alt={mañanitas.nombre} className="w-80 h-80 object-cover rounded-xl mb-4" />
            <p className="mb-2"><strong>Descripción:</strong> {mañanitas.descripcion}</p>
            <p className="mb-2"><strong>Color:</strong> {mañanitas.color}</p>
            <p className="mb-2"><strong>Material:</strong> {mañanitas.material}</p>
            <p className="mb-2"><strong>Talla:</strong> {mañanitas.talla}</p>
            <p className="mb-2"><strong>Precio:</strong> ₡{mañanitas.precio}</p>
            <p className="mb-2"><strong>Marca:</strong> {mañanitas.marca}</p>
        </div>
    );
};

export default DetalleMañanitas;

