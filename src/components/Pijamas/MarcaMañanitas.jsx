import { useNavigate } from "react-router-dom";
import { marcamañanitasAPI } from "../../data/conjuntoMañanitas";

const MarcaMañanitas = () => {
    const navigate = useNavigate();

    const handleClick = (slug) => {
        navigate(`/catalogomañanitas/${slug}`);
    };

    return (
        <div className="flex gap-8 justify-center">
            {marcamañanitasAPI.map((marcamañanitas) => (
                <img
                    key={marcamañanitas.id}
                    src={marcamañanitas.img[0]}
                    alt={marcamañanitas.nombre}
                    onClick={() => handleClick(marcamañanitas.slug)}
                    className="cursor-pointer w-32 h-32 object-contain hover:scale-105 transition-transform duration-300"
                />
            ))}
        </div>
    );
};

export default MarcaMañanitas;
