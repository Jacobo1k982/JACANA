import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { dataMañanitas, marcaNombres } from "../../data/conjuntoMañanitas";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose, IoShirt, IoColorPalette, IoResize } from "react-icons/io5";

const imageFade = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

const CatalogoMañanitas = () => {
    const { marcamañanitas } = useParams();
    const nombreMarca = marcaNombres[marcamañanitas?.toLowerCase()] || "Catálogo de pijamas";

    const productosFiltrados = marcamañanitas
        ? dataMañanitas.filter(
            (m) => m.marcamañanitas.toLowerCase() === marcamañanitas.toLowerCase()
        )
        : dataMañanitas;

    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-900 to-gray-800 px-6 py-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-5xl text-white font-semibold mb-12 text-center drop-shadow-xl font-serif">
                    {nombreMarca}
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
                    {productosFiltrados.map((item) => (
                        <CardMañanitas key={item.id} mañanitas={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const CardMañanitas = ({ mañanitas }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [expandedImageIndex, setExpandedImageIndex] = useState(0);

    const handlePrev = () =>
        setCurrentImage((prev) => (prev - 1 + mañanitas.img.length) % mañanitas.img.length);
    const handleNext = () =>
        setCurrentImage((prev) => (prev + 1) % mañanitas.img.length);

    const openExpanded = () => {
        setExpandedImageIndex(currentImage);
        setExpanded(true);
    };
    const closeExpanded = () => setExpanded(false);

    const expandedPrev = (e) => {
        e.stopPropagation();
        setExpandedImageIndex((prev) => (prev - 1 + mañanitas.img.length) % mañanitas.img.length);
    };
    const expandedNext = (e) => {
        e.stopPropagation();
        setExpandedImageIndex((prev) => (prev + 1) % mañanitas.img.length);
    };

    return (
        <>
            <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="bg-gradient-to-tr from-white/100 to-slate-100/100 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-cyan-500/30 overflow-hidden group relative flex flex-col border border-cyan-400/30"
            >
                <div
                    className="relative w-full h-72 bg-gray-100"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={openExpanded}
                >
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={mañanitas.img[currentImage]}
                            src={mañanitas.img[currentImage]}
                            alt={`${mañanitas.nombre} ${currentImage + 1}`}
                            variants={imageFade}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.4 }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            onDragEnd={(event, info) => {
                                if (info.offset.x > 50) handlePrev();
                                else if (info.offset.x < -50) handleNext();
                            }}
                            className="absolute inset-0 w-full h-full object-cover p-1 rounded-t-3xl cursor-zoom-in"
                        />
                    </AnimatePresence>

                    {mañanitas.img.length > 1 && (
                        <>
                            <ArrowButton position="left" onClick={(e) => { e.stopPropagation(); handlePrev(); }} />
                            <ArrowButton position="right" onClick={(e) => { e.stopPropagation(); handleNext(); }} />
                        </>
                    )}

                    {mañanitas.img.length > 1 && (
                        <div className="absolute bottom-3 w-full flex justify-center gap-2">
                            {mañanitas.img.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`w-2.5 h-2.5 rounded-full ${idx === currentImage ? "bg-cyan-600" : "bg-gray-400"} transition-colors duration-300`}
                                />
                            ))}
                        </div>
                    )}
                </div>

                <div className="p-5 flex flex-col flex-grow justify-between">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{mañanitas.nombre}</h3>
                        <p className="text-gray-700 text-sm mb-4">{mañanitas.descripcion}</p>

                        <div className="flex flex-col gap-2 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                                <IoShirt className="text-cyan-600" />
                                <span>Material: {mañanitas.material || 'No especificado'}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <IoColorPalette className="text-cyan-600" />
                                <span>Color: {mañanitas.color || 'Variedad'}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <IoResize className="text-cyan-600" />
                                <span>Talla: {mañanitas.talla || 'Única / Varias'}</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                        <span className="text-lg font-bold text-emerald-600">₡{mañanitas.precio}</span>
                    </div>
                </div>
            </motion.div>

            <AnimatePresence>
                {expanded && (
                    <motion.div
                        className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeExpanded}
                    >
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative flex items-center justify-center"
                        >
                            <img
                                src={mañanitas.img[expandedImageIndex]}
                                alt="Imagen expandida"
                                className="max-w-[80vw] max-h-[80vh] object-contain rounded-xl shadow-2xl"
                            />
                            {mañanitas.img.length > 1 && (
                                <>
                                    <ArrowButton position="left" onClick={expandedPrev} />
                                    <ArrowButton position="right" onClick={expandedNext} />
                                </>
                            )}
                            <button
                                onClick={closeExpanded}
                                aria-label="Cerrar imagen"
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

const ArrowButton = ({ position, onClick }) => (
    <button
        onClick={onClick}
        className={`absolute top-1/2 -translate-y-1/2 ${position === "left" ? "left-2" : "right-2"}
        bg-black/30 hover:bg-black/50 text-white w-8 h-8 flex items-center justify-center rounded-full transition`}
        aria-label={`Flecha ${position}`}
    >
        {position === "left" ? "‹" : "›"}
    </button>
);

export default CatalogoMañanitas;
