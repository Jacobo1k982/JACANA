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
            {/* Responsive Card Grid o Scrollable dependiendo del tamaño */}
            <div className="w-full px-4">
                <div className="flex flex-wrap sm:flex-nowrap gap-6 justify-center sm:justify-start overflow-x-auto sm:overflow-x-visible scroll-smooth snap-x snap-mandatory scrollbar-hide">
                    {categorias.map((categoria, index) => (
                        <Link
                            to={categoria.ruta}
                            key={index}
                            className="min-w-[140px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[220px] xl:min-w-[240px] flex flex-col items-center justify-between p-4 h-48 sm:h-52 md:h-56 bg-white dark:bg-transparent rounded-xl shadow-md transition-transform duration-200 hover:scale-105"
                        >
                            <div className="w-full h-36 sm:h-40 flex items-center justify-center overflow-hidden">
                                <img
                                    src={categoria.imagen}
                                    alt={categoria.nombre}
                                    className="w-full h-[7rem] sm:h-[8rem] object-contain"
                                />
                            </div>
                            <p className="mt-2 font-light text-center text-black dark:text-white text-sm sm:text-base">
                                {categoria.nombre}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CardMenu;
