import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const [year, setYear] = useState(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <footer className="bg-white dark:bg-[#000000] text-black dark:text-zinc-300 py-10 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Marca y redes */}
          <div>
            <h1 className="text-2xl font-bold text-black dark:text-white tracking-wide mb-3">JACANA Styles</h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Moda y estilo que se adapta a ti. Vive la experiencia JACANA, donde cada paso es único.
            </p>
            <div className="flex space-x-4 mt-4 text-black dark:text-zinc-300">
              <a href="#" className="hover:text-blue-600 dark:hover:text-white transition-colors"><FaFacebookF /></a>
              <a href="#" className="hover:text-pink-500 dark:hover:text-white transition-colors"><FaInstagram /></a>
              <a href="#" className="hover:text-sky-400 dark:hover:text-white transition-colors"><FaTwitter /></a>
              <a href="#" className="hover:text-gray-500 dark:hover:text-white transition-colors"><FaTiktok /></a>
              <a
                href="https://wa.me/50664541700"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 dark:hover:text-white transition-colors"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Categorías */}
          <div>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-3">Categorías</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-500 dark:hover:text-white">Zapatos</a></li>
              <li><a href="#" className="hover:text-amber-500 dark:hover:text-white">Ropa</a></li>
              <li><a href="#" className="hover:text-amber-500 dark:hover:text-white">Accesorios</a></li>
              <li><a href="#" className="hover:text-amber-500 dark:hover:text-white">Ofertas</a></li>
            </ul>
          </div>

          {/* Ayuda */}
          <div>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-3">Ayuda</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-500 dark:hover:text-white">Preguntas frecuentes</a></li>
              <li><a href="#" className="hover:text-amber-500 dark:hover:text-white">Envíos</a></li>
              <li><a href="#" className="hover:text-amber-500 dark:hover:text-white">Devoluciones</a></li>
              <li><a href="#" className="hover:text-amber-500 dark:hover:text-white">Contacto</a></li>
            </ul>
          </div>

          {/* Suscripción */}
          <div>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-3">Suscríbete</h3>
            <p className="text-sm mb-3 text-zinc-600 dark:text-zinc-400">
              Recibe noticias y ofertas exclusivas.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Tu correo"
                className="bg-zinc-200 dark:bg-zinc-800 px-3 py-2 rounded-md text-sm text-black dark:text-white outline-none focus:ring-2 focus:ring-amber-400 transition"
              />
              <button
                type="submit"
                className="bg-black dark:bg-white text-white dark:text-black text-sm font-semibold py-2 rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-300 transition"
              >
                Suscribirme
              </button>
            </form>
          </div>
        </div>

        {/* Pie final */}
        <div className="border-t border-zinc-300 dark:border-zinc-800 mt-10 pt-5 text-center text-sm text-zinc-600 dark:text-zinc-500">
          &copy; {year} JACANA Styles Costa Rica. Todos los derechos reservados.
        </div>
      </footer>

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/50664541700"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg animate-pulse hover:scale-110 transition-transform"
        aria-label="WhatsApp flotante"
      >
        <FaWhatsapp size={24} />
      </a>
    </>
  );
};

export default Footer;
