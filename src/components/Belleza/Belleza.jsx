// Belleza.jsx - Versión Premium ✨
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon, ScaleIcon } from '@heroicons/react/24/solid';

const Belleza = () => {
    const [imagenExpandida, setImagenExpandida] = useState(null);
    const [imagenesActuales, setImagenesActuales] = useState([]);
    const [imagenIndex, setImagenIndex] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const carouselRef = useRef(null);

    const banners = [
        '/Belleza/Loreal/hero1.webp',
        '/Belleza/Loreal/hero2.webp',
        '/Belleza/Loreal/hero3.webp',
        '/Belleza/Loreal/hero4.webp',
    ];

    // Auto-play del carrusel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % banners.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [banners.length]);

    // Seguimiento del mouse
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const abrirModal = (imagenes, index) => {
        setImagenesActuales(imagenes);
        setImagenIndex(index);
        setImagenExpandida(imagenes[index]);
    };

    const cerrarModal = () => {
        setImagenExpandida(null);
        setImagenIndex(0);
        setImagenesActuales([]);
    };

    const mostrarAnterior = () => {
        const nuevoIndex = (imagenIndex - 1 + imagenesActuales.length) % imagenesActuales.length;
        setImagenIndex(nuevoIndex);
        setImagenExpandida(imagenesActuales[nuevoIndex]);
    };

    const mostrarSiguiente = () => {
        const nuevoIndex = (imagenIndex + 1) % imagenesActuales.length;
        setImagenIndex(nuevoIndex);
        setImagenExpandida(imagenesActuales[nuevoIndex]);
    };

    // Variantes de animación
    const slideVariants = {
        hidden: { opacity: 0, scale: 0.98 },
        visible: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 1.02 },
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
    };

    return (
        <div className="w-full pt-[55px] relative p-1 text-gray-900 dark:text-gray-100 min-h-screen bg-white dark:bg-black transition-colors duration-700">
            {/* Fondo con textura sutil */}
            <div
                className="fixed inset-0 pointer-events-none z-0 opacity-5 dark:opacity-10 mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            {/* Carrusel de banners */}
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl" ref={carouselRef}>
                    {/* Carrusel animado */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            variants={slideVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="relative h-[500px] md:h-[800px] w-full cursor-pointer"
                            onClick={() => abrirModal(banners, currentSlide)}
                        >
                            <img
                                src={banners[currentSlide]}
                                alt={`Hero ${currentSlide + 1}`}
                                className="w-full h-full object-cover"
                                style={{
                                    filter: 'brightness(0.95) contrast(1.05)',
                                }}
                            />

                            {/* Overlay degradado */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />

                            {/* Efecto de brillo dinámico */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-500"
                                style={{
                                    background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.15), transparent 40%)`,
                                }}
                            />

                            {/* Indicadores de slide */}
                            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                {banners.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setCurrentSlide(i);
                                        }}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentSlide
                                                ? 'bg-white scale-125 shadow-lg'
                                                : 'bg-white/50 hover:bg-white/70'
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Botones de navegación */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
                                }}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-20 border border-white/30"
                            >
                                <ChevronLeftIcon className="w-6 h-6" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentSlide((prev) => (prev + 1) % banners.length);
                                }}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-20 border border-white/30"
                            >
                                <ChevronRightIcon className="w-6 h-6" />
                            </motion.button>

                            {/* Botón de ampliar */}
                            <div className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-md text-white px-3 py-2 rounded-full text-sm flex items-center gap-1 border border-white/30">
                                <ScaleIcon className="w-4 h-4" />
                                Ampliar
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Texto descriptivo opcional */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-8 text-center"
                >
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                        Descubre la Belleza en Cada Detalle
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
                        Explora nuestras colecciones exclusivas de marcas premium como L'Oréal, Kérastase y MAC.
                    </p>
                </motion.div>
            </div>

            {/* Modal de imagen expandida */}
            <AnimatePresence>
                {imagenExpandida && (
                    <Dialog open={!!imagenExpandida} onClose={cerrarModal} as={motion.div}>
                        <motion.div
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        >
                            <div className="fixed inset-0 bg-black/90 backdrop-blur-sm" onClick={cerrarModal} />

                            <Dialog.Panel className="relative max-w-4xl max-h-full z-10">
                                {/* Botón cerrar */}
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={cerrarModal}
                                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-white/30 transition z-20 border border-white/30"
                                >
                                    <XMarkIcon className="w-6 h-6" />
                                </motion.button>

                                {/* Flecha anterior */}
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={mostrarAnterior}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-white/30 transition z-20 border border-white/30"
                                >
                                    <ChevronLeftIcon className="w-6 h-6" />
                                </motion.button>

                                {/* Imagen ampliada */}
                                <img
                                    src={imagenExpandida}
                                    alt="Imagen expandida"
                                    className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
                                />

                                {/* Flecha siguiente */}
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={mostrarSiguiente}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-white/30 transition z-20 border border-white/30"
                                >
                                    <ChevronRightIcon className="w-6 h-6" />
                                </motion.button>

                                {/* Indicador de progreso */}
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/30 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full border border-white/20">
                                    {imagenIndex + 1} / {imagenesActuales.length}
                                </div>
                            </Dialog.Panel>
                        </motion.div>
                    </Dialog>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Belleza;