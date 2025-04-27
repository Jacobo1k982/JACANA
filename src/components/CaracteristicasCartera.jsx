import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const CaracteristicasCartera = ({ cartera }) => {
    const {
        nombre,
        descripcion,
        imagenes,
        color,
        material,
        dimensiones,
        precio,
        calificacion,
        resenas,
        marca,
        moneda,
    } = cartera;

    const [imagenPrincipal, setImagenPrincipal] = useState(imagenes[0]);

    // Utilizamos useCallback para memoizar la función de cambio de imagen
    const handleImagenPrincipalChange = useCallback((nuevaImagen) => {
        setImagenPrincipal(nuevaImagen);
    }, [setImagenPrincipal]);

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-gray-800 px-6 py-12">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row"
            >
                {/* Imagen principal y galería */}
                <div className="w-full lg:w-1/2 p-6 flex flex-col gap-4">
                    <div className="h-[400px] rounded-xl overflow-hidden shadow-md">
                        <img
                            src={imagenPrincipal}
                            alt={nombre}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex gap-3 overflow-x-auto pb-2">
                        {imagenes.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`galería-${idx}`}
                                className={`w-20 h-20 rounded-lg object-cover border-2 cursor-pointer transition-all duration-300 ${img === imagenPrincipal
                                    ? "border-cyan-600"
                                    : "border-transparent"
                                    }`}
                                onClick={() => handleImagenPrincipalChange(img)}
                            />
                        ))}
                    </div>
                </div>

                {/* Información del producto */}
                <div className="w-full lg:w-1/2 p-8 flex flex-col justify-between gap-6">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800">{nombre}</h2>
                        <p className="text-gray-600 mt-2">
                            {marca && <span className="font-semibold">{marca}. </span>} {/* Mostrar la marca si existe */}
                            {descripcion}
                        </p>

                        <ul className="text-sm text-gray-700 mt-4 space-y-2">
                            <li>
                                <strong>Color:</strong> {color}
                            </li>
                            <li>
                                <strong>Material:</strong> {material}
                            </li>
                            <li>
                                <strong>Dimensiones:</strong> {dimensiones}
                            </li>
                            <li>
                                <strong>Marca:</strong> {marca}
                            </li>
                        </ul>

                        {/* Calificación */}
                        <div className="flex items-center mt-4 gap-2">
                            <div className="flex text-yellow-400">
                                {Array.from({ length: 5 }, (_, i) => (
                                    <Star
                                        key={i}
                                        size={20}
                                        fill={i < calificacion ? "currentColor" : "none"}
                                        stroke="currentColor"
                                    />
                                ))}
                            </div>
                            <span className="text-sm text-gray-600">({resenas} reseñas)</span>
                        </div>
                    </div>

                    {/* Precio y botón */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <span className="text-2xl font-semibold text-cyan-700">
                            {moneda}
                            {precio}
                        </span> {/* Usamos la moneda aquí */}
                        <button className="bg-cyan-700 hover:bg-cyan-800 text-white px-6 py-2.5 rounded-lg shadow transition-all">
                            Comprar ahora
                        </button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default CaracteristicasCartera;