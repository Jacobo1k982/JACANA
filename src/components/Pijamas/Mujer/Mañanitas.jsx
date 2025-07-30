// Mañanitas.jsx - Versión Premium ✨
import React, { useState, useEffect, useRef } from 'react';
import ProductCard from '../Mujer/ProductCard';
import ProductDetailModal from '../../MacCosmetic/ProductDetailModal';
import { motion, AnimatePresence } from 'framer-motion';

const Mañanitas = () => {
    const [productos, setProductos] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [scrollProgress, setScrollProgress] = useState(0);
    const scrollRef = useRef(null);

    // Cargar productos
    useEffect(() => {
        setIsLoading(true);
        fetch("/Data/Mañanitas/mañanitas.json")
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

    // Calcular progreso del scroll horizontal
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

    // Variantes de animación
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
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
                            // Skeleton Loader
                            [...Array(4)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    className="flex-shrink-0 w-64 h-80 bg-gray-200 dark:bg-gray-800 rounded-2xl animate-pulse"
                                />
                            ))
                        ) : productos.length > 0 ? (
                            productos.map((item) => (
                                <motion.div
                                    key={item.id}
                                    variants={itemVariants}
                                    whileHover={{ y: -8 }}
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
                                className="text-center text-gray-600 dark:text-gray-400 col-span-full w-full"
                            >
                                No hay productos disponibles.
                            </motion.p>
                        )}
                    </motion.div>

                    {/* Indicador de scroll */}
                    {!isLoading && productos.length > 0 && (
                        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-800 rounded-full">
                            <motion.div
                                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
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
                        Descubre nuestra colección exclusiva <strong>Mañanitas</strong> — piezas únicas hechas con amor,
                        detalles artesanales y un toque de elegancia natural. Perfectas para regalar o consentirte.
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

            {/* Partículas sutiles (opcional) */}
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
                            opacity: [0.2, 1, 0.2],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: i * 0.5,
                        }}
                    />
                ))}
            </div>
        </section>
    );
};

export default Mañanitas;