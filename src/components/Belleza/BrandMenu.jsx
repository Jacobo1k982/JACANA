import { Link } from "react-router-dom";

const categorias = [
    {
        nombre: "Sally Hansen",
        imagen: "/Belleza/SallyHansen/logo.png",
        ruta: "/SallyHansen",
    }
];

const BrandMenu = () => {
    return (
        <>
            <div>
                <h1 className="text-3xl sm:text-5xl text-center font-light mb-8 text-black dark:text-white font-Playfair font-extrabold text-black dark:text-white">
                    Explora las marcas
                </h1>
            </div>
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
        </>
    );
};

export default BrandMenu;
