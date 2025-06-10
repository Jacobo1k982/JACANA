import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaVenus, FaMars } from "react-icons/fa";
import { Link } from "react-router-dom";

const categoriasGenero = [
    {
        genero: "Mujer",
        icono: <FaVenus size={28} />,
        color: "bg-pink-100 dark:bg-pink-800/30",
        subcategorias: ["Nike", "Adidas", "Tommy Hilfiger", "Puma", "New Balance", "Converse", "Vans", "Fila"],
    },
    {
        genero: "Hombre",
        icono: <FaMars size={28} />,
        color: "bg-blue-100 dark:bg-blue-800/30",
        subcategorias: ["Nike", "Adidas", "Tommy Hilfiger", "Puma", "New Balance", "Converse", "Vans"]
    },
];

const CategoriasGenero = () => {
    const [abierto, setAbierto] = useState(null);

    const toggle = (index) => {
        setAbierto(abierto === index ? null : index);
    };

    const formatearRuta = (genero, subcategoria) => {
        return `/${genero.toLowerCase()}/${subcategoria.toLowerCase().replace(/\s+/g, "-")}`;
    };

    return (
        <section className="py-12 bg-white dark:bg-black transition-colors duration-300" id="generos">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-10">
                    Compra por género
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {categoriasGenero.map((cat, index) => (
                        <div
                            key={cat.genero}
                            className={`rounded-2xl shadow-md ${cat.color} p-6 transition-all dark:shadow-lg`}
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex items-center justify-between text-left"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-gray-800 dark:text-white">{cat.icono}</span>
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{cat.genero}</h3>
                                </div>
                                <FaChevronDown
                                    className={`text-gray-600 dark:text-gray-300 transition-transform duration-300 ${abierto === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <AnimatePresence>
                                {abierto === index && (
                                    <motion.ul
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="mt-4 pl-2 space-y-2 text-gray-700 dark:text-gray-200 overflow-hidden"
                                    >
                                        {cat.subcategorias.map((sub) => (
                                            <li
                                                key={sub}
                                                className="px-3 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                                            >
                                                <Link
                                                    to={formatearRuta(cat.genero, sub)}
                                                    className="block w-full h-full"
                                                >
                                                    {sub}
                                                </Link>
                                            </li>
                                        ))}
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoriasGenero;
