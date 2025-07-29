// CardMenu.jsx - Versión Premium ✨
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const categorias = [
    {
        nombre: "Trend",
        imagen: "/IMG-MAC/VINTAGE_MINT/mac_sku_MY6RP7_1x1_0.png",
        ruta: "/trend",
        color: "from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20",
        glow: "shadow-lg shadow-pink-300/40 dark:shadow-pink-500/30",
    },
    {
        nombre: "BELLEZA",
        imagen: "/IMG-MAC/portada1.png",
        ruta: "/belleza",
        color: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
        glow: "shadow-lg shadow-blue-300/40 dark:shadow-blue-500/30",
    },
];

const CardMenu = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const scrollRef = useRef(null);

    // Calcular progreso del scroll
    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            const maxScroll = scrollWidth - clientWidth;
            setScrollProgress(maxScroll > 0 ? scrollLeft / maxScroll : 0);
        }
    };

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

    return (
        <div className="w-full px-4 py-8">
            {/* Título opcional */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 text-center"
            >
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Explora nuestras colecciones</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Descubre lo último en tendencias y belleza</p>
            </motion.div>

            {/* Contenedor scrollable */}
            <div className="relative">
                <motion.div
                    ref={scrollRef}
                    className="flex gap-6 justify-center sm:justify-start overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
                    onScroll={handleScroll}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {categorias.map((categoria, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10, scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className={`min-w-[150px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[220px] xl:min-w-[240px] h-56 sm:h-60 rounded-2xl overflow-hidden relative group cursor-pointer transition-all duration-500 ${categoria.color}`}
                        >
                            {/* Fondo con borde iluminado */}
                            <div
                                className={`absolute inset-0 rounded-2xl border ${categoria.glow} pointer-events-none transition-all duration-500 opacity-0 group-hover:opacity-100`}
                                style={{
                                    background: `linear-gradient(145deg, rgba(255,255,255,0.2), transparent)`,
                                }}
                            />

                            {/* Contenido */}
                            <Link
                                to={categoria.ruta}
                                className="flex flex-col items-center justify-between h-full p-5 text-center"
                            >
                                {/* Imagen con efecto zoom */}
                                <div className="w-full h-36 sm:h-40 flex items-center justify-center overflow-hidden rounded-xl transition-transform duration-700 group-hover:scale-110">
                                    <img
                                        src={categoria.imagen}
                                        alt={categoria.nombre}
                                        className="w-full h-full object-contain transition-transform duration-700"
                                    />
                                </div>

                                {/* Nombre */}
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    whileHover={{ y: -2 }}
                                    className="mt-3 font-medium text-gray-800 dark:text-white text-base sm:text-lg tracking-wide"
                                >
                                    {categoria.nombre}
                                </motion.p>
                            </Link>

                            {/* Efecto de brillo al hacer hover */}
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none"
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

                {/* Indicador de scroll */}
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-800 rounded-full">
                    <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        style={{ width: `${scrollProgress * 100}%` }}
                        transition={{ duration: 0.2 }}
                    />
                </div>
            </div>

            {/* Partículas sutiles (opcional) */}
            <div className="absolute inset-0 pointer-events-none z-0 opacity-5 dark:opacity-10">
                {[...Array(4)].map((_, i) => (
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
        </div>
    );
};

export default CardMenu;