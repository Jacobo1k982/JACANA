// BrandCarousel.jsx - Versión Premium ✨
import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const brandLogos = [
    { name: "Lancôme", src: "/logos/lancome.webp" },
    { name: "Kérastase", src: "/logos/kerastase.webp" },
    { name: "L'Oréal Paris", src: "/logos/loreal.png" },
    { name: "MAC", src: "/logos/mac.webp" },
    { name: "Calvin Klein", src: "/logos/calvinklein.webp" },
    { name: "Clinique", src: "/logos/clinique.webp" },
];

// Duplicar logotipos para desplazamiento infinito
const infiniteLogos = [...brandLogos, ...brandLogos, ...brandLogos];

const BrandCarousel = () => {
    const scrollRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

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

    // Auto-scroll infinito
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovered && scrollRef.current) {
                scrollRef.current.scrollBy({
                    left: 2,
                    behavior: 'smooth',
                });
            }
        }, 50);

        return () => clearInterval(interval);
    }, [isHovered]);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (!current) return;
        const scrollAmount = current.offsetWidth / 2;
        current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <section className="w-full py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 transition-colors duration-700 relative overflow-hidden">
            {/* Textura de fondo sutil */}
            <div
                className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            <div className="max-w-6xl mx-auto px-4 relative">
                {/* Título animado */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-3xl sm:text-4xl font-extrabold text-center mb-12 relative"
                >
                    Marcas que Definen la Belleza
                    <motion.span
                        initial={{ width: 0 }}
                        animate={{ width: "80px" }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="block w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-4 rounded-full"
                    />
                </motion.h2>

                {/* Botón izquierdo */}
                <motion.button
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scroll("left")}
                    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-xl hover:shadow-2xl p-3 rounded-full z-10 transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </motion.button>

                {/* Carrusel de marcas */}
                <div
                    ref={scrollRef}
                    className="flex gap-8 px-12 py-6 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {infiniteLogos.map((brand, index) => (
                        <motion.div
                            key={`${brand.name}-${index}`}
                            className="h-16 sm:h-20 md:h-24 lg:h-28 w-32 sm:w-40 md:w-48 lg:w-56 flex items-center justify-center flex-shrink-0 bg-white/60 dark:bg-gray-800/40 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 snap-start border border-gray-100 dark:border-gray-700 hover:scale-105"
                            whileHover={{ y: -6, scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <img
                                src={brand.src}
                                alt={brand.name}
                                className="max-h-[70%] max-w-full object-contain transition-transform duration-500 filter drop-shadow-sm"
                                style={{
                                    filter: 'brightness(0.95) contrast(1.05)',
                                }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Botón derecho */}
                <motion.button
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scroll("right")}
                    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-xl hover:shadow-2xl p-3 rounded-full z-10 transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                </motion.button>

                {/* Indicador de progreso */}
                <div className="absolute left-1/2 bottom-4 transform -translate-x-1/2 w-32 h-1 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <motion.div
                        className="h-full bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"
                        style={{ width: `${scrollProgress * 100}%` }}
                        transition={{ duration: 0.2 }}
                    />
                </div>
            </div>

            {/* Partículas flotantes (opcional) */}
            <div className="absolute inset-0 pointer-events-none z-0 opacity-10 dark:opacity-20">
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

export default BrandCarousel;