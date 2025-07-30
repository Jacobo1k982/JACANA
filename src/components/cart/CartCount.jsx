// CartCount.jsx
import React from 'react';
import { ChevronLeftIcon, XMarkIcon } from '@heroicons/react/24/solid';

const CartCount = ({ onCartToggle, onClearCartItems, totalQTY }) => {
  return (
    <div className="
      bg-white dark:bg-gray-900 
      h-14 sm:h-16 
      flex items-center justify-between 
      px-4 sm:px-6 
      sticky top-0 left-0 right-0 
      w-full 
      border-b border-gray-200 dark:border-gray-800 
      shadow-sm dark:shadow-none
      backdrop-blur-sm
      z-40
    ">
      {/* Botón de regreso y título */}
      <div className="flex items-center gap-3">
        <button
          onClick={onCartToggle}
          className="
            p-2 
            rounded-full 
            hover:bg-gray-100 dark:hover:bg-gray-800 
            transition-all duration-200 
            active:scale-95
            focus:outline-none focus:ring-2 focus:ring-indigo-500
          "
          aria-label="Volver al catálogo"
        >
          <ChevronLeftIcon className="w-5 h-5 text-slate-800 dark:text-slate-200" />
        </button>

        <h1 className="text-base sm:text-lg font-semibold text-slate-800 dark:text-slate-100">
          Tu carrito
          <span className="
            ml-2 
            bg-gradient-to-r from-indigo-600 to-purple-600 
            text-white 
            text-xs sm:text-sm 
            font-medium 
            px-2.5 py-0.5 
            rounded-full 
            shadow-sm
          ">
            {totalQTY} {totalQTY === 1 ? 'artículo' : 'artículos'}
          </span>
        </h1>
      </div>

      {/* Botón de limpiar carrito */}
      <div className="flex items-center">
        <button
          type="button"
          onClick={onClearCartItems}
          className="
            p-2 
            rounded-full 
            bg-gradient-to-r from-red-500 to-red-600 
            hover:from-red-600 hover:to-red-700 
            active:scale-95 
            transition-all duration-200 
            focus:outline-none focus:ring-2 focus:ring-red-400
          "
          aria-label="Vaciar carrito"
        >
          <XMarkIcon className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default CartCount;