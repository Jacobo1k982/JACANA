// Inicio.jsx - Versión Premium 🌿✨
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Inicio = () => {
    const [gifSrc, setGifSrc] = useState('/IMG-MAC/VINTAGE_MINT/banner_desktop.webp');
    const [isLoaded, setIsLoaded] = useState(false);
    const [cursorHover, setCursorHover] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const imgRef = useRef(null);

    // Detectar tamaño de pantalla
    useEffect(() => {
        const handleResize = () => {
            setGifSrc(window.innerWidth <= 640 ? '/Belleza/SallyHansen/Sally_Hansen_Miracle_Gel_Top_Coat_Banner_desktop.webp' : '/IMG-MAC/VINTAGE_MINT/banner_desktop.webp');
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Carga de imagen
    useEffect(() => {
        const img = new Image();
        img.src = gifSrc;
        img.onload = () => setIsLoaded(true);
    }, [gifSrc]);

    // Variantes de animación
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3, delayChildren: 0.5 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            boxShadow: '0 0 30px rgba(154, 220, 244, 0.8)',
            textShadow: '0 0 15px rgba(255, 255, 255, 0.8)',
        },
        tap: { scale: 0.95 },
    };

    return (
        <section className="w-full flex flex-col items-center bg-white dark:bg-black transition-colors duration-700 overflow-hidden">
            {/* Cursor personalizado (solo desktop) */}
            <div
                className="fixed w-12 h-12 pointer-events-none z-50 mix-blend-difference rounded-full bg-white flex items-center justify-center text-xs font-bold opacity-70 transition-opacity"
                style={{
                    left: mousePos.x - 24,
                    top: mousePos.y - 24,
                    opacity: cursorHover ? 1 : 0.7,
                    transform: `scale(${cursorHover ? 1.5 : 1})`,
                }}
            >
                ✦
            </div>

            {/* Fondo con gradiente sutil */}
            <div
                className="absolute inset-0 z-0 transition-all duration-3000"
                style={{
                    background: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.1) 100%)',
                }}
            />

            {/* Contenedor principal */}
            <div className="w-screen relative overflow-hidden">
                {/* Imagen principal con efecto parallax */}
                <Link to="/SallyHansen" className="block">
                    <motion.img
                        ref={imgRef}
                        src={gifSrc}
                        alt="Bienvenida - Sally Hansen Pradera Encantada"
                        className="w-full h-auto object-cover object-center transition-transform duration-700 hover:scale-105"
                        initial={{ opacity: 0, scale: 1.02 }}
                        animate={{ opacity: isLoaded ? 1 : 0 }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        style={{
                            filter: 'brightness(0.95) contrast(1.05)',
                        }}
                    />
                </Link>

                {/* Overlay de contenido con animaciones */}
                <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-start text-center px-6 pt-16 pb-8 pointer-events-none"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Etiqueta de tendencia */}
                    <motion.div variants={itemVariants} className="mb-4">
                        <p className="text-sm sm:text-base font-Poppins font-light text-white/90 drop-shadow-lg tracking-wider uppercase">
                            🔥 AHORA EN TENDENCIA
                        </p>
                    </motion.div>

                    {/* Título principal */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-3xl sm:text-5xl md:text-6xl font-Playfair font-extrabold text-white drop-shadow-2xl tracking-tight"
                    >
                        GOOD. KIND. PURE.™
                    </motion.h1>

                    {/* Descripción */}
                    <motion.p
                        variants={itemVariants}
                        className="mt-6 text-sm sm:text-base max-w-xl md:max-w-2xl font-Poppins font-light text-white/90 leading-relaxed drop-shadow-md"
                    >
                        Retoza por la pradera con estos <strong>NUEVOS</strong> Sally Hansen: Muy bien. Amable. Pura colección Pradera Encantada.
                        El primer esmalte de uñas 100% vegano a base de plantas, 16 sin 16 pulgadas* de Sally Hansen ofrece un hermoso color y brillo sin concesiones.
                        Good.Kind.Pure proporciona un color rico y cuidadoso, una aplicación suave, una cobertura uniforme y dura tanto como el esmalte tradicional.
                    </motion.p>

                    {/* Botón "Explore" con efecto premium */}
                    <motion.div variants={itemVariants} className="mt-10 pointer-events-auto">
                        <Link to="/explore">
                            <motion.button
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                onMouseEnter={() => setCursorHover(true)}
                                onMouseLeave={() => setCursorHover(false)}
                                className="relative px-8 py-3 text-sm font-semibold uppercase tracking-wider text-gray-800 bg-white/20 backdrop-blur-md border border-white/30 rounded-full shadow-lg hover:shadow-cyan-300/50 transition-all duration-500 group overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center space-x-2">
                                    <span>Explorar</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                                {/* Efecto de brillo interno */}
                                <motion.span
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-100 to-transparent -skew-x-12 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
                                    style={{ transformOrigin: 'left' }}
                                />
                                {/* Glow exterior */}
                                <motion.span
                                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 blur-xl bg-gradient-to-r from-cyan-300 to-blue-300"
                                    animate={{ opacity: cursorHover ? 0.3 : 0 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Partículas flotantes (efecto mágico) */}
                <div className="absolute inset-0 pointer-events-none z-10">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 80}%`,
                            }}
                            animate={{
                                y: [0, -15, 0],
                                opacity: [0.4, 1, 0.4],
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

                {/* Overlay de gradiente en la parte inferior para mejorar legibilidad */}
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Estilos dinámicos */}
            <style jsx>{`
        @font-face {
          font-family: 'Playfair';
          src: url('/fonts/PlayfairDisplay-Bold.woff2') format('woff2');
          font-weight: bold;
          font-style: normal;
        }
        @font-face {
          font-family: 'Poppins';
          src: url('/fonts/Poppins-Regular.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
        }
        .font-Playfair {
          font-family: 'Playfair', serif;
        }
        .font-Poppins {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
        </section>
    );
};

export default Inicio;