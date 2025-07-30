// Footer.jsx - Versión Premium con WhatsApp integrado ✨
import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok, FaWhatsapp, FaLock, FaGlobe, FaUsers, FaComment, FaImage, FaBullhorn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const [year, setYear] = useState(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const whatsappUrl = "https://wa.me/50664541700";
  const whatsappMessage = encodeURIComponent(
    "Hola, estoy visitando la tienda JACANA y me gustaría saber más sobre sus productos. ¿Pueden ayudarme?"
  );

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

  return (
    <>
      {/* Footer principal */}
      <footer className="w-full bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-300 py-16 transition-colors duration-700 relative overflow-hidden">
        {/* Fondo con textura sutil */}
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-5 dark:opacity-10 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Gradientes decorativos */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-blue-50 to-transparent dark:from-blue-900/20 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-pink-50 to-transparent dark:from-pink-900/20 rounded-full filter blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Marca y redes */}
            <motion.div variants={itemVariants}>
              <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-wide mb-4">
                info@jacana.fun
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                Moda y estilo que se adapta a ti. Vive la experiencia JACANA.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: FaFacebookF, color: 'hover:text-blue-600', bg: 'bg-blue-100 dark:bg-blue-900/30' },
                  { icon: FaInstagram, color: 'hover:text-pink-500', bg: 'bg-pink-100 dark:bg-pink-900/30' },
                  { icon: FaTwitter, color: 'hover:text-sky-400', bg: 'bg-sky-100 dark:bg-sky-900/30' },
                  { icon: FaTiktok, color: 'hover:text-gray-500', bg: 'bg-gray-100 dark:bg-gray-800/30' },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 ${social.bg} rounded-full flex items-center justify-center text-gray-800 dark:text-gray-200 transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Categorías */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Categorías</h3>
              <ul className="space-y-2 text-sm">
                {['Ropa', 'Calzado', 'Accesorios', 'Niños'].map((cat, i) => (
                  <li key={i}>
                    <Link
                      to={cat === 'Calzado' ? '/calzados' : '#'}
                      className="block hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 transform"
                    >
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Ayuda */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Ayuda</h3>
              <ul className="space-y-2 text-sm">
                {['Preguntas frecuentes', 'Envíos', 'Devoluciones', 'Contacto'].map((item, i) => (
                  <li key={i}>
                    {item === 'Contacto' ? (
                      <Link
                        to="/contacto"
                        className="block hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 transform cursor-pointer"
                      >
                        {item}
                      </Link>
                    ) : (
                      <a
                        href="#"
                        className="block hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 transform"
                      >
                        {item}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contacto por WhatsApp (destacado) */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <FaWhatsapp className="text-green-500" /> WhatsApp
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 leading-tight">
                Chatea directamente con nuestro equipo. Rápido, seguro y gratuito.
              </p>

              {/* Beneficios de WhatsApp */}
              <ul className="space-y-2 text-xs text-gray-600 dark:text-gray-400 mb-5">
                <li className="flex items-center gap-1"><FaLock className="text-green-500 w-3 h-3" /> Cifrado extremo a extremo</li>
                <li className="flex items-center gap-1"><FaGlobe className="text-green-500 w-3 h-3" /> Llamadas y mensajes gratis*</li>
                <li className="flex items-center gap-1"><FaComment className="text-green-500 w-3 h-3" /> Respuesta rápida</li>
                <li className="flex items-center gap-1"><FaImage className="text-green-500 w-3 h-3" /> Comparte fotos y videos</li>
              </ul>

              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-2.5 px-4 rounded-xl shadow-lg hover:shadow-green-500/30 transition-all duration-300 text-sm"
              >
                <FaWhatsapp className="w-4 h-4" /> Hablar ahora
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Pie final */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500 dark:text-gray-400"
          >
            <p>Las llamadas y mensajes son gratuitos con conexión a internet. &copy; {year} JACANA Styles Costa Rica. Todos los derechos reservados.</p>
          </motion.div>
        </div>
      </footer>

      {/* Botón flotante de WhatsApp */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.15, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center animate-bounce"
        aria-label="Contacto por WhatsApp"
      >
        <FaWhatsapp size={24} />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
      </motion.a>
    </>
  );
};

export default Footer;