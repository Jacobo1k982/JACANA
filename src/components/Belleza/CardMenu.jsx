import { Link } from "react-router-dom";

const categorias = [
    {
        nombre: "Trend",
        imagen: "/IMG-MAC/VINTAGE_MINT/mac_sku_MY6RP7_1x1_0.png",
        ruta: "/trend",
    },
    {
        nombre: "BELLEZA",
        imagen: "/IMG-MAC/portada1.png",
        ruta: "/belleza",
    }
];

const CardMenu = () => {
    return (
        <>
            {/* Carrusel horizontal scrollable */}
            <div className="w-full overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide">
                <div className="flex gap-6 p-6 w-max sm:w-auto">
                    {categorias.map((categoria, index) => (
                        <Link
                            to={categoria.ruta}
                            key={index}
                            className="min-w-[120px] sm:min-w-[150px] md:min-w-[180px] flex flex-col items-center justify-between p-3 h-40 bg-white dark:bg-transparent rounded-lg shadow-sm"
                        >
                            <div className="w-full h-32 flex items-center justify-center overflow-hidden">
                                <img
                                    src={categoria.imagen}
                                    alt={categoria.nombre}
                                    className="w-full h-[6rem] object-contain"
                                />
                            </div>
                            <p className="mt-1 font-light text-center text-black dark:text-white text-xs">
                                {categoria.nombre}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Banner inferior */}
            {/*<div className="w-full mt-2">
                <img
                    src="/Img-Inicio-pagina/SingleBanner_Desktop_1.avif"
                    alt="Banner promocional"
                    className="w-full h-[120px] sm:h-[200px] md:h-[200px] object-cover"
                />
            </div>*/}
        </>
    );
};

export default CardMenu;
