// BrandMenu.jsx - Versión Premium ✨
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const categorias = [
    {
        nombre: "Sally Hansen",
        imagen: "/Belleza/SallyHansen/logo.png",
        ruta: "/SallyHansen",
        color: "from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20",
        glow: "shadow-lg shadow-rose-300/30 dark:shadow-rose-500/20",
    },
    {
        nombre: "Kerastase Paris",
        imagen: "/Belleza/Kerastase/kerastase.png",
        ruta: "/kerastase",
        color: "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
        glow: "shadow-lg shadow-blue-300/30 dark:shadow-blue-500/20",
    },
];

const BrandMenu = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // Variantes de animación
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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

    return (
        <div className="w-full py-10 bg-white dark:bg-gray-950 transition-colors duration-700">
            {/* Título principal */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10 px-4"
            >
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white tracking-tight">
                    Nuestras Marcas Premium
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-xl mx-auto text-sm sm:text-base">
                    Descubre la excelencia en belleza con marcas líderes en innovación y estilo.
                </p>
            </motion.div>

            {/* Grid de marcas */}
            <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {categorias.map((categoria, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ y: -10, scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        onHoverStart={() => setHoveredIndex(index)}
                        onHoverEnd={() => setHoveredIndex(null)}
                        className={`relative group rounded-2xl overflow-hidden border border-transparent transition-all duration-500 ${categoria.color}`}
                    >
                        {/* Fondo con borde iluminado */}
                        <div
                            className={`absolute inset-0 rounded-2xl ${categoria.glow} pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100`}
                        />

                        <Link
                            to={categoria.ruta}
                            className="flex flex-col items-center justify-between h-60 p-5 text-center"
                        >
                            {/* Logo con efecto zoom */}
                            <div className="w-full h-36 flex items-center justify-center overflow-hidden rounded-xl transition-transform duration-700 group-hover:scale-110">
                                <img
                                    src={categoria.imagen}
                                    alt={categoria.nombre}
                                    className="w-full h-full object-contain transition-transform duration-700 filter drop-shadow-sm"
                                    style={{
                                        filter: 'brightness(0.95) contrast(1.05)',
                                    }}
                                />
                            </div>

                            {/* Nombre */}
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileHover={{ y: -2 }}
                                className="mt-3 font-semibold text-gray-800 dark:text-white text-sm sm:text-base tracking-wide"
                            >
                                {categoria.nombre}
                            </motion.p>
                        </Link>

                        {/* Overlay de hover */}
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        />

                        {/* Efecto de brillo dinámico */}
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none"
                            style={{
                                maskImage: 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), black 0%, transparent 50%)',
                            }}
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const y = e.clientY - rect.top;
                                e.currentTarget.style.setProperty('--x', `${x}px`);
                                e.currentTarget.style.setProperty('--y', `${y}px`);
                            }}
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* Textura de fondo sutil (opcional) */}
            <div
                className="fixed inset-0 pointer-events-none z-0 opacity-2 dark:opacity-5 mix-blend-overlay"
                style={{
                    backgroundImage: `url("image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />
        </div>
    );
};

export default BrandMenu;