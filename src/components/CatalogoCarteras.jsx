import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dataCarteras, marcaNombres } from "../data/dataCarteras";
import { motion, AnimatePresence } from "framer-motion";

const CatalogoCarteras = () => {
    const { marca } = useParams();
    const nombreMarca = marcaNombres[marca?.toLowerCase()] || "Catálogo de Carteras";

    const productosFiltrados = marca
        ? dataCarteras.filter((cartera) => cartera.marca.toLowerCase() === marca.toLowerCase())
        : dataCarteras;

    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-900 to-gray-800 px-6 py-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-4xl text-white font-bold mb-10 text-center drop-shadow-lg">
                    {nombreMarca}
                </h2>

                <div className="grid grid-cols-4 sm:grid-cols-1 lg:grid-cols-3 gap-10">
                    {productosFiltrados.map((cartera) => (
                        <CardCartera key={cartera.id} cartera={cartera} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const CardCartera = ({ cartera }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (cartera.img.length > 1 && !isHovered) {
            const interval = setInterval(() => {
                setCurrentImage((prev) => (prev + 1) % cartera.img.length);
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [cartera.img.length, isHovered]);

    const handlePrev = () => {
        setCurrentImage((prev) => (prev - 1 + cartera.img.length) % cartera.img.length);
    };

    const handleNext = () => {
        setCurrentImage((prev) => (prev + 1) % cartera.img.length);
    };

    const handleDragEnd = (event, info) => {
        if (info.offset.x > 50) {
            handlePrev();
        } else if (info.offset.x < -50) {
            handleNext();
        }
    };

    const handleVerMas = () => {
        setShowOverlay(true);
        setTimeout(() => {
            navigate(`/cartera/${cartera.id}`);
        }, 600); // esperar a que la animación termine (600ms)
    };

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col hover:shadow-cyan-700/30 transition-shadow duration-500 group relative"
        >
            {/* Splash overlay */}
            <AnimatePresence>
                {showOverlay && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 3, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="absolute inset-0 bg-cyan-600 z-50"
                    />
                )}
            </AnimatePresence>

            {/* Carrusel de imágenes */}
            <div
                className="relative w-full h-72 bg-gray-100 overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <AnimatePresence mode="wait">
                    <motion.img
                        key={cartera.img[currentImage]}
                        src={cartera.img[currentImage]}
                        alt={`${cartera.nombre} ${currentImage + 1}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={handleDragEnd}
                        className="absolute inset-0 w-full h-full object-contain p-6 cursor-grab active:cursor-grabbing"
                    />
                </AnimatePresence>

                {/* Flechas */}
                {cartera.img.length > 1 && (
                    <>
                        <button
                            onClick={handlePrev}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center transition"
                        >
                            ‹
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center transition"
                        >
                            ›
                        </button>
                    </>
                )}

                {/* Puntitos */}
                {cartera.img.length > 1 && (
                    <div className="absolute bottom-3 w-full flex justify-center items-center gap-2">
                        {cartera.img.map((_, idx) => (
                            <div
                                key={idx}
                                className={`w-2.5 h-2.5 rounded-full ${idx === currentImage ? "bg-cyan-600" : "bg-gray-400"
                                    } transition-colors duration-300`}
                            ></div>
                        ))}
                    </div>
                )}
            </div>

            {/* Contenido */}
            <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{cartera.nombre}</h3>
                    <p className="text-gray-600 text-sm">{cartera.descripcion.slice(0, 60)}...</p>
                </div>

                <div className="mt-6 flex items-center justify-between">
                    <span className="text-lg font-bold text-cyan-700">₡{cartera.precio}</span>
                    <motion.button
                        onClick={handleVerMas}
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-2 rounded-full text-sm transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                        Ver más
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default CatalogoCarteras;
