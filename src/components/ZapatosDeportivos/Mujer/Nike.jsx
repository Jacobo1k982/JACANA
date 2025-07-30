// Nike.jsx - Nike Mujer
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../ProductCard';
import ProductDetailModal from '../ProductDetailModal';

const Nike = () => {
    const [productos, setProductos] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch("/Data/ZapatosDeportivos/Mujer/nike.json")
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP error ${res.status}`);
                return res.json();
            })
            .then((data) => {
                const lista = Array.isArray(data) ? data : data.products || [];
                setProductos(lista);
            })
            .catch((error) => console.error("Error al cargar productos de Nike Mujer:", error))
            .finally(() => setIsLoading(false));
    }, []);

    const handleImageClick = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedProduct(null), 300);
    };

    // Animaciones
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="w-full bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-500">
            {/* Hero Banner con Video */}
            <div className="relative w-full h-64 md:h-80 lg:h-96 mb-8 rounded-2xl overflow-hidden shadow-2xl">
                <video
                    src="/ZapatosDeportivos/Mujer/Nike/portada.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/50 flex items-center justify-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin tracking-wide text-center px-6 drop-shadow-2xl"
                    >
                        Just Do It
                    </motion.h1>
                </div>
                {/* Logo de Nike */}
                <div className="absolute top-6 left-6">
                    <img
                        src="/LogosMarcas/NIKE.webp"
                        alt="Nike Logo"
                        className="h-8 sm:h-10 md:h-12 opacity-90 drop-shadow-lg"
                    />
                </div>
            </div>

            {/* Título de colección */}
            <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white"
                >
                    Colección Nike Mujer
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-sm text-gray-600 dark:text-gray-400 mt-2"
                >
                    Calzado deportivo diseñado para el rendimiento y el estilo
                </motion.p>
            </div>

            {/* Contenedor de productos */}
            <div className="max-w-7xl mx-auto px-4 pb-12">
                <motion.div
                    className="flex overflow-x-auto space-x-6 pb-6 snap-x snap-mandatory hide-scrollbar"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {isLoading ? (
                        // Skeleton loader
                        Array.from({ length: 6 }).map((_, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 w-64 h-96 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 rounded-2xl animate-pulse snap-start shadow-md"
                            />
                        ))
                    ) : productos.length > 0 ? (
                        productos.map((item) => (
                            <motion.div
                                key={item.id}
                                variants={itemVariants}
                                className="flex-shrink-0 w-64 snap-start"
                            >
                                <ProductCard
                                    product={item}
                                    onImageClick={handleImageClick}
                                />
                            </motion.div>
                        ))
                    ) : (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center text-gray-500 dark:text-gray-400 w-full py-10"
                        >
                            No hay productos disponibles por ahora.
                        </motion.p>
                    )}
                </motion.div>

                {/* Mensaje final */}
                {!isLoading && productos.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center mt-6 text-sm text-gray-500 dark:text-gray-500"
                    >
                        Descubre el rendimiento y el estilo de Nike
                    </motion.div>
                )}
            </div>

            {/* Modal de detalle */}
            <AnimatePresence>
                <ProductDetailModal
                    product={selectedProduct}
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                />
            </AnimatePresence>
        </section>
    );
};

export default Nike;