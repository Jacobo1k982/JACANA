// Hero.jsx - Versión ULTRA Premium 🌌✨
import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { SocialLink } from './utils/SocialLink';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = ({ heroapi: { title, subtitle, btntext, sociallinks, backgroundImages }, storiesRef }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const cursorRef = useRef(null);

  // Estado del cursor personalizado
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorHover, setCursorHover] = useState(false);

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Cursor personalizado (solo desktop)
  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  // Animaciones de entrada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.4, delayChildren: 0.8 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // Configuración del slider con transiciones ultra suaves
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    fade: true,
    arrows: false,
    pauseOnHover: false,
    lazyLoad: 'progressive',
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          speed: 1500,
        },
      },
    ],
  };

  const imagesToShow = isMobile && backgroundImages.mobile ? backgroundImages.mobile : backgroundImages.desktop;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black transition-colors duration-1000">
      {/* Cursor personalizado (solo desktop) */}
      {!isMobile && (
        <motion.div
          ref={cursorRef}
          className="fixed w-10 h-10 pointer-events-none z-50 mix-blend-difference rounded-full bg-white flex items-center justify-center text-sm font-bold"
          style={{ left: cursorPos.x - 20, top: cursorPos.y - 20 }}
          animate={{ scale: cursorHover ? 3 : 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          ✦
        </motion.div>
      )}

      {/* Slider de fondo con efecto de profundidad */}
      <Slider {...sliderSettings} ref={sliderRef}>
        {imagesToShow?.map((img, index) => (
          <div key={index} className="relative w-full h-screen">
            {/* Imagen principal */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-5000 ease-out"
              style={{
                backgroundImage: `url(${img})`,
                backgroundColor: '#000',
                filter: 'brightness(0.35) contrast(1.15) saturate(1.05)',
                transform: `scale(1.08) translateY(${currentSlide === index ? '0' : '10px'})`,
                opacity: currentSlide === index ? 1 : 0.8,
              }}
            />

            {/* Overlay con gradiente direccional */}
            <div
              className="absolute inset-0 transition-all duration-3000"
              style={{
                background: `linear-gradient(135deg,
                  rgba(10, 10, 20, 0.6) 0%,
                  ${index % 2 === 0 ? 'rgba(30, 10, 50, 0.3)' : 'rgba(10, 30, 50, 0.25)'} 40%,
                  rgba(20, 10, 30, 0.7) 100%
                )`,
              }}
            />

            {/* Efecto de luz sutil que se mueve con el scroll */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                background: `radial-gradient(circle at ${currentSlide * 30 + 50}vw ${window.scrollY / 10}px, rgba(255, 220, 100, 0.4) 0%, transparent 50%)`,
              }}
            />
          </div>
        ))}
      </Slider>

      {/* Indicadores de progreso (bajo el contenido) */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {imagesToShow?.map((_, idx) => (
          <button
            key={idx}
            onClick={() => sliderRef.current?.slickGoTo(idx)}
            className="w-2 h-2 rounded-full transition-all duration-500 group"
            style={{
              backgroundColor: idx === currentSlide ? '#fbbf24' : 'rgba(255, 255, 255, 0.3)',
              boxShadow: idx === currentSlide ? '0 0 15px rgba(251, 191, 36, 0.7)' : 'none',
            }}
            aria-label={`Ir al slide ${idx + 1}`}
          >
            <span className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-30 bg-yellow-300 transition"></span>
          </button>
        ))}
      </div>

      {/* Contenido principal con profundidad y animaciones */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6 sm:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl text-center space-y-6 sm:space-y-10"
        >
          {/* Título con efecto de escritura y brillo dorado animado */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-7xl md:text-8xl xsm:text-3xl font-extrabold leading-tight tracking-tighter"
            aria-label={title}
          >
            <span
              className="bg-gradient-to-r from-yellow-200 via-yellow-50 to-orange-200 bg-clip-text text-transparent"
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 30px rgba(255, 210, 0, 0.4)',
              }}
            >
              {title.split('').map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* Subtítulo con efecto de desvanecimiento */}
          <motion.h2
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl xsm:text-lg text-gray-200 font-light leading-relaxed max-w-3xl mx-auto opacity-90"
          >
            {subtitle}
          </motion.h2>

          {/* Botón con efecto de levitación y brillo */}
          {btntext && (
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setCursorHover(true)}
              onMouseLeave={() => setCursorHover(false)}
              onClick={() => storiesRef?.current?.scrollIntoView({ behavior: 'smooth' })}
              className="group mt-6 px-12 py-5 font-semibold text-black bg-gradient-to-r from-white via-yellow-50 to-yellow-100 dark:from-yellow-50 dark:to-yellow-100 backdrop-blur-md border border-yellow-300 rounded-full shadow-2xl hover:shadow-yellow-400/60 transition-all duration-500 relative overflow-hidden hover:scale-105"
            >
              <span className="relative z-10 flex items-center space-x-3 text-lg">
                <span>{btntext}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
              {/* Efecto de brillo interno animado */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200 to-transparent -skew-x-12 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
                style={{ transformOrigin: 'left' }}
              />
            </motion.button>
          )}

          {/* Redes sociales con efecto de flotación */}
          <AnimatePresence>
            {sociallinks?.length > 0 && (
              <motion.div
                variants={itemVariants}
                className="flex gap-6 justify-center mt-10"
              >
                {sociallinks.map(({ url, icon }, i) =>
                  url && icon ? (
                    <motion.a
                      key={i}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + i * 0.15 }}
                      whileHover={{ y: -8, scale: 1.2 }}
                      whileTap={{ scale: 0.95 }}
                      onMouseEnter={() => setCursorHover(true)}
                      onMouseLeave={() => setCursorHover(false)}
                      className="hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] transition-all duration-300"
                    >
                      <div className="p-3 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 hover:border-yellow-300 hover:bg-yellow-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,220,0,0.4)]">
                        <SocialLink icon={icon} className="w-6 h-6 text-white" />
                      </div>
                    </motion.a>
                  ) : null
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Partículas flotantes animadas */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-300 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
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

      {/* Overlay sutil con textura de grano (film grain) */}
      <div
        className="absolute inset-0 pointer-events-none z-30 opacity-5 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default Hero;