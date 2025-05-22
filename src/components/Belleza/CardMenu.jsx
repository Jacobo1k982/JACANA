import { Link } from "react-router-dom";

const categorias = [
    {
        nombre: "CONJUNTO MAÑANITAS",
        imagen: "/Belleza/img_menu/mañanitas.png",
        ruta: "/catalogomañanitas/catalogoMañanitas",
    },
    {
        nombre: "NIKE-AIR",
        imagen: "/Belleza/img_menu/Nike.png",
        ruta: "/deportivo",
    },
    {
        nombre: "SATCHEL H&CO",
        imagen: "/Belleza/img_menu/cartera.png",
        ruta: "/catalogo/HCO",
    },
    {
        nombre: "EYES",
        imagen: "/Belleza/img_menu/Eyes.avif",
        ruta: "/eyes",
    },
    {
        nombre: "FACE",
        imagen: "/Belleza/img_menu/Face.avif",
        ruta: "/face",
    },
    {
        nombre: "SKIN",
        imagen: "/Belleza/img_menu/Skin.avif",
        ruta: "/skin",
    },
];

const CardMenu = () => {
    return (
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
    );
};

export default CardMenu;
