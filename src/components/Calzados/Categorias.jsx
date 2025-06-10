import { motion } from "framer-motion";
import { FaTshirt, FaShoePrints, FaGem, FaChild } from "react-icons/fa";
import { Link } from "react-router-dom";

const categorias = [
    { nombre: "Ropa", icono: <FaTshirt size={30} />, color: "bg-pink-100 dark:bg-pink-800/30", ruta: "/" },
    { nombre: "Calzado", icono: <FaShoePrints size={30} />, color: "bg-blue-100 dark:bg-blue-800/30", ruta: "/calzados" },
    { nombre: "Accesorios", icono: <FaGem size={30} />, color: "bg-purple-100 dark:bg-purple-800/30", ruta: "/" },
    { nombre: "Niños", icono: <FaChild size={30} />, color: "bg-yellow-100 dark:bg-yellow-800/30", ruta: "/" },
];

const Categorias = () => {
    return (
        <section className="py-12 bg-white dark:bg-black relative transition-colors duration-300" id="categorias">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
                    Categorías destacadas
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {categorias.map((cat) => (
                        <Link to={cat.ruta} key={cat.nombre}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`rounded-2xl shadow-md p-6 flex flex-col items-center justify-center text-center 
                            ${cat.color} transition-all dark:shadow-lg cursor-pointer`}
                            >
                                <div className="mb-4 text-gray-700 dark:text-gray-200">{cat.icono}</div>
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{cat.nombre}</h3>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categorias;
