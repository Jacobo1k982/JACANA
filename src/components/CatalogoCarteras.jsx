import React from "react";
import { Link } from "react-router-dom";
import { dataCarteras } from "../data/dataCarteras";
import { motion } from "framer-motion";

const CatalogoCarteras = () => {
    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-900 to-gray-800 px-6 py-12">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-4xl text-white font-bold mb-10 text-center drop-shadow-lg">
                    Catálogo de Carteras
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dataCarteras.map((cartera) => (
                        <motion.div
                            key={cartera.id}
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col"
                        >
                            <div className="h-64 overflow-hidden">
                                <img
                                    src={cartera.imagenes[0]}
                                    alt={cartera.nombre}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>

                            <div className="p-5 flex flex-col justify-between h-full">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800">{cartera.nombre}</h3>
                                    <p className="text-gray-600 text-sm mt-2">{cartera.descripcion.slice(0, 60)}...</p>
                                </div>

                                <div className="mt-4 flex items-center justify-between">
                                    <span className="text-lg font-bold text-cyan-700">${cartera.precio}</span>
                                    <Link
                                        to={`/cartera/${cartera.id}`}
                                        className="bg-cyan-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-cyan-800 transition-all"
                                    >
                                        Ver más
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CatalogoCarteras;
