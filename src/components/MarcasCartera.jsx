import { useNavigate } from "react-router-dom";
import { marcacarteraapi } from "../data/dataCarteras";

const MarcasCartera = () => {
    const navigate = useNavigate();

    const handleClick = (slug) => {
        navigate(`/catalogo/${slug}`);
    };

    return (
        <div className="flex gap-8 justify-center">
            {marcacarteraapi.map((marca) => (
                <img
                    key={marca.id}
                    src={marca.img[0]}
                    alt={marca.nombre}
                    onClick={() => handleClick(marca.slug)}
                    className="cursor-pointer w-32 h-32 object-contain hover:scale-105 transition-transform duration-300"
                />
            ))}
        </div>
    );
};

export default MarcasCartera;
