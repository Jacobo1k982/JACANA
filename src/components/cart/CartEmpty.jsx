// CartEmpty.jsx
import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import emptybag from '../../assets/emptybag.png';

const CartEmpty = ({ onCartToggle }) => {
  return (
    <div className="
      flex flex-col items-center justify-center 
      h-screen px-6 sm:px-11 text-center gap-8 
      bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100
      transition-colors duration-500
    ">
      {/* Imagen */}
      <img
        src={emptybag}
        alt="Carrito vacío"
        className="
          w-40 lg:w-36 sm:w-32 h-auto 
          object-contain 
          transition-transform duration-500 
          hover:scale-110 hover:rotate-3
          drop-shadow-lg
        "
      />

      {/* Título */}
      <h2 className="
        text-2xl sm:text-3xl font-bold 
        bg-gradient-to-r from-slate-700 to-slate-900 
        dark:from-gray-200 dark:to-gray-400 
        bg-clip-text text-transparent
      ">
        Tu carrito está vacío
      </h2>

      {/* Descripción */}
      <p className="text-base text-gray-600 dark:text-gray-300 max-w-xs leading-relaxed">
        Parece que no has agregado ningún producto aún. ¡Descubre nuestras colecciones!
      </p>

      {/* Botón de acción */}
      <button
        type="button"
        onClick={onCartToggle}
        className="
          flex items-center justify-center 
          gap-3 
          px-6 py-3 
          rounded-xl 
          bg-gradient-to-r from-amber-500 to-orange-500 
          hover:from-amber-600 hover:to-orange-600 
          text-white 
          font-semibold 
          shadow-lg hover:shadow-xl 
          transition-all duration-300 
          transform active:scale-95 hover:scale-105
        "
        aria-label="Regresar al catálogo"
      >
        <ArrowLeftIcon className="w-5 h-5" />
        <span>Regresar a JACANA Styles</span>
      </button>

      {/* CTA opcional: ¿Necesitas ayuda? */}
      <a
        href="https://wa.me/50664541700?text=Hola,%20estoy%20viendo%20la%20tienda%20y%20tengo%20una%20pregunta."
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex items-center gap-2 
          text-sm text-green-600 dark:text-green-400 
          hover:underline 
          transition-colors duration-200
        "
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        ¿Necesitas ayuda? Chatea con nosotros
      </a>
    </div>
  );
};

export default CartEmpty;