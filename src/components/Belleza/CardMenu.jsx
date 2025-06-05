import { Link } from "react-router-dom";

const categorias = [
    {
        nombre: "CONJUNTO MAÑANITAS",
        imagen: "/Belleza/img_menu/mañanitas.png",
        ruta: "/mañanitas",
    },
    {
        nombre: "NIKE",
        imagen: "/Img-Inicio-pagina/nike.png",
        ruta: "/deportivo",
    },
    {
        nombre: "SATCHEL H&CO",
        imagen: "/Belleza/img_menu/cartera.png",
        ruta: "/catalogo/HCO",
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
            {/* Imagen tipo banner arriba */}
            {/*<div className="w-full mt-2">
                <img
                    src="/banner_lipstick.webp"
                    alt="Banner promocional"
                    className="w-full h-[120px] sm:h-[200px] md:h-[200px] object-cover shadow-md dark:shadow-lg transition-transform duration-300 hover:scale-105"
                />
            </div>*/}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-6 bg-white dark:bg-black transition-colors duration-500">
                {categorias.map((categoria, index) => (
                    <Link
                        to={categoria.ruta}
                        key={index}
                        className="bg-white dark:bg-neutral-900 rounded-xl shadow-md dark:shadow-lg flex flex-col items-center justify-between p-4 h-60 border border-transparent hover:border-pink-400 dark:hover:border-pink-500 transform transition-all duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-pink-500/40"
                    >
                        <div className="w-full h-36 flex items-center justify-center overflow-hidden">
                            <img
                                src={categoria.imagen}
                                alt={categoria.nombre}
                                className="w-full h-full object-contain transition-transform duration-300"
                            />
                        </div>
                        <p className="mt-3 font-semibold text-center text-black dark:text-white text-sm">
                            {categoria.nombre}
                        </p>
                    </Link>
                ))}
            </div>
            {/* Imagen tipo banner debajo */}
            <div className="w-full mt-2">
                <img
                    src="/banner_foundation.avif"
                    alt="Banner promocional"
                    className="w-full h-[120px] sm:h-[200px] md:h-[200px] object-cover shadow-md dark:shadow-lg transition-transform duration-300 hover:scale-105"
                />
            </div>
        </>
    );
};

export default CardMenu;
