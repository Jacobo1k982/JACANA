import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dataMañanitas, marcaNombres } from "../../data/conjuntoMañanitas";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { IoClose } from "react-icons/io5";

const CatalogoMañanitas = () => {
    const { marcamañanitas } = useParams();
    const nombreMarca = marcaNombres[marcamañanitas?.toLowerCase()] || "Catálogo de pijamas";

    const productosFiltrados = marcamañanitas
        ? dataMañanitas.filter((mañanitas) => mañanitas.marcamañanitas.toLowerCase() === marcamañanitas.toLowerCase())
        : dataMañanitas;

    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-900 to-gray-800 px-6 py-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-4xl text-white font-bold mb-10 text-center drop-shadow-lg">
                    {nombreMarca}
                </h2>

                <div className="grid grid-cols-4 sm:grid-cols-1 lg:grid-cols-3 gap-10">
                    {productosFiltrados.map((mañanitas) => (
                        <CardMañanitas key={mañanitas.id} mañanitas={mañanitas} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const CardMañanitas = ({ mañanitas }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const [expandedImage, setExpandedImage] = useState(null);
    const navigate = useNavigate();

    const scale = useMotionValue(1); // para zoom

    useEffect(() => {
        if (mañanitas.img.length > 1 && !isHovered) {
            const interval = setInterval(() => {
                setCurrentImage((prev) => (prev + 1) % mañanitas.img.length);
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [mañanitas.img.length, isHovered]);

    const handlePrev = () => {
        setCurrentImage((prev) => (prev - 1 + mañanitas.img.length) % mañanitas.img.length);
    };

    const handleNext = () => {
        setCurrentImage((prev) => (prev + 1) % mañanitas.img.length);
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
            navigate(`/mañanitas/${mañanitas.id}`);
        }, 600);
    };

    const handleExpandImage = () => {
        setExpandedImage(mañanitas.img[currentImage]);
    };

    const handleCloseImage = () => {
        setExpandedImage(null);
        scale.set(1); // reset zoom
    };

    return (
        <>
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
                    onClick={handleExpandImage}
                >
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={mañanitas.img[currentImage]}
                            src={mañanitas.img[currentImage]}
                            alt={`${mañanitas.nombre} ${currentImage + 1}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            onDragEnd={handleDragEnd}
                            className="absolute inset-0 w-full h-full object-contain p-6 cursor-zoom-in"
                        />
                    </AnimatePresence>

                    {/* Flechas */}
                    {mañanitas.img.length > 1 && (
                        <>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handlePrev();
                                }}
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center transition"
                            >
                                ‹
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleNext();
                                }}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center transition"
                            >
                                ›
                            </button>
                        </>
                    )}

                    {/* Puntitos */}
                    {mañanitas.img.length > 1 && (
                        <div className="absolute bottom-3 w-full flex justify-center items-center gap-2">
                            {mañanitas.img.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`w-2.5 h-2.5 rounded-full ${idx === currentImage ? "bg-cyan-600" : "bg-gray-400"} transition-colors duration-300`}
                                ></div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Contenido */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{mañanitas.nombre}</h3>
                        <p className="text-gray-600 text-sm">{mañanitas.descripcion.slice(0, 60)}...</p>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                        <span className="text-lg font-bold text-cyan-700">₡{mañanitas.precio}</span>
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

            {/* Imagen expandida con zoom y drag */}
            <AnimatePresence>
                {expandedImage && (
                    <motion.div
                        className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleCloseImage}
                    >
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative"
                        >
                            <motion.img
                                src={expandedImage}
                                alt="Imagen expandida"
                                className="max-w-[90vw] max-h-[90vh] object-contain rounded-xl shadow-2xl cursor-grab"
                                drag
                                dragConstraints={{ top: -1000, bottom: 1000, left: -1000, right: 1000 }}
                                style={{ scale }}
                                onWheel={(e) => {
                                    e.preventDefault();
                                    const delta = -e.deltaY;
                                    const newScale = Math.min(Math.max(scale.get() + delta * 0.001, 1), 3);
                                    scale.set(newScale);
                                }}
                            />

                            {/* Botón cerrar */}
                            <button
                                onClick={handleCloseImage}
                                className="absolute -top-4 -right-4 text-white bg-black/60 hover:bg-black/80 p-2 rounded-full text-2xl"
                            >
                                <IoClose />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default CatalogoMañanitas;
