// GoodKind.jsx - Versión ULTRA Premium ✨
import React, { useState, useEffect, useRef } from 'react';
import ProductCard from '../MacCosmetic/ProductCard';
import ProductDetailModal from '../MacCosmetic/ProductDetailModal';
import { motion, AnimatePresence } from 'framer-motion';

const GoodKind = () => {
    const [productos, setProductos] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const scrollRef = useRef(null);

    // Cargar productos
    useEffect(() => {
        setIsLoading(true);
        fetch("/Data/SallyHansen/goodkind.json")
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP error ${res.status}`);
                return res.json();
            })
            .then((data) => {
                const lista = Array.isArray(data) ? data : data.products || [];
                setTimeout(() => {
                    setProductos(lista);
                    setIsLoading(false);
                }, 800); // Simular carga real
            })
            .catch((error) => {
                console.error("Error al cargar productos:", error);
                setIsLoading(false);
            });
    }, []);

    const handleImageClick = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    // Calcular progreso del scroll
    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                const maxScroll = scrollWidth - clientWidth;
                setScrollProgress(maxScroll > 0 ? scrollLeft / maxScroll : 0);
            }
        };

        const container = scrollRef.current;
        container?.addEventListener('scroll', handleScroll);
        return () => container?.removeEventListener('scroll', handleScroll);
    }, []);

    // Seguimiento del mouse para efecto de brillo
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Variantes de animación
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.4 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
    };

    return (
        <section className="w-full h-auto bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-700">
            {/* Fondo con textura sutil (papel reciclado) */}
            <div
                className="fixed inset-0 pointer-events-none z-0 opacity-5 dark:opacity-10 mix-blend-overlay"
                style={{
                    backgroundImage: `url("image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            {/* Banner Hero con tema "Good. Kind. Pure." */}
            <div className="relative w-full h-40 md:h-96 overflow-hidden rounded-2xl shadow-2xl mb-12 group">
                {/* Fondo con gradiente orgánico mejorado */}
                <div
                    className="absolute inset-0 transition-all duration-1000"
                    style={{
                        background: `linear-gradient(135deg, #1f2937
            ), url('/Belleza/Sally/goodkind-bg.webp')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'brightness(0.88) contrast(1.05) saturate(1.05)',
                    }}
                />
                {/* Overlay degradado sutil */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-green-50/30 dark:from-green-900/20 dark:to-transparent" />
                {/* Contenido del banner */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-800 dark:text-white font-Playfair drop-shadow-2xl tracking-tight"
                    >
                        Good. Kind. Pure.™
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl font-Poppins leading-relaxed"
                    >
                        Descubre nuestra colección 100% vegana y libre de crueldad. Hecha con plantas, pensada para ti.
                    </motion.p>
                </div>
                {/* Efecto de brillo que sigue el mouse */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-500"
                    style={{
                        background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.2), transparent 40%)`,
                    }}
                />
            </div>

            {/* Contenedor de productos */}
            <div className="max-w-7xl mx-auto px-4 pb-16">
                <div className="relative">
                    {/* Scroll horizontal */}
                    <motion.div
                        ref={scrollRef}
                        className="flex overflow-x-auto space-x-6 pb-6 no-scrollbar scroll-smooth"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {isLoading ? (
                            // Skeleton Loader mejorado
                            [...Array(4)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    className="flex-shrink-0 w-64 h-80 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl animate-pulse shadow-sm border border-gray-100 dark:border-gray-800"
                                >
                                    <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-t-2xl"></div>
                                    <div className="p-4 space-y-3">
                                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto"></div>
                                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mx-auto"></div>
                                        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-20 mx-auto"></div>
                                    </div>
                                </motion.div>
                            ))
                        ) : productos.length > 0 ? (
                            productos.map((item) => (
                                <motion.div
                                    key={item.id}
                                    variants={itemVariants}
                                    whileHover={{ y: -10, scale: 1.03 }}
                                    className="flex-shrink-0 w-64"
                                >
                                    <ProductCard
                                        product={item}
                                        onImageClick={handleImageClick}
                                    />
                                </motion.div>
                            ))
                        ) : (
                            <motion.p
                                variants={itemVariants}
                                className="text-center text-gray-600 dark:text-gray-400 col-span-full w-full py-10"
                            >
                                No hay productos disponibles.
                            </motion.p>
                        )}
                    </motion.div>
                    {/* Indicador de scroll mejorado */}
                    {!isLoading && productos.length > 0 && (
                        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-800 rounded-full">
                            <motion.div
                                className="h-full bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 rounded-full"
                                style={{ width: `${scrollProgress * 100}%` }}
                                transition={{ duration: 0.2 }}
                            />
                        </div>
                    )}
                </div>
                {/* Texto descriptivo opcional */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 text-center max-w-3xl mx-auto"
                >
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed font-Poppins">
                        Cada tono de esta colección está inspirado en la naturaleza: praderas, flores y atardeceres.
                        Con fórmulas a base de plantas y envases reciclables, cada elección es un paso hacia un mundo más puro.
                    </p>
                </motion.div>
            </div>
            {/* Modal de detalle del producto */}
            <AnimatePresence>
                {isModalOpen && selectedProduct && (
                    <motion.div
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                        <ProductDetailModal
                            product={selectedProduct}
                            isOpen={isModalOpen}
                            onClose={handleCloseModal}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            {/* Partículas flotantes sutiles */}
            <div className="absolute inset-0 pointer-events-none z-10 opacity-10 dark:opacity-20">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -10, 0],
                            opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: i * 0.8,
                        }}
                    />
                ))}
            </div>
        </section>
    );
};

export default GoodKind;