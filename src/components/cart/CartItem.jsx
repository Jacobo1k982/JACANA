// CartItem.jsx
import React from 'react';
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import {
  setDecreaseItemQTY,
  setIncreaseItemQTY,
  setRemoveItemFromCart,
} from '../../app/CartSlice';

const CartItem = ({
  item: { id, title, subtitle, text, img, color, shadow, price, size, cartQuantity },
}) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(setIncreaseItemQTY({ id }));
  };

  const handleDecrease = () => {
    if (cartQuantity > 1) {
      dispatch(setDecreaseItemQTY({ id }));
    }
  };

  const handleRemove = () => {
    dispatch(setRemoveItemFromCart({ id }));
  };

  return (
    <div className="
      flex items-start justify-between w-full 
      p-4 sm:p-5 
      rounded-2xl 
      border border-gray-200 dark:border-gray-700 
      bg-white dark:bg-gray-800 
      hover:shadow-lg dark:hover:shadow-gray-900/30 
      transition-all duration-300 
      group
      relative
    ">
      {/* Imagen y detalles */}
      <div className="flex items-start gap-4 sm:gap-5 flex-1">
        {/* Contenedor de imagen */}
        <div
          className={`
            bg-gradient-to-b ${color} ${shadow} 
            relative rounded-xl overflow-hidden 
            p-3 flex-shrink-0
            transform transition-transform duration-300 
            group-hover:scale-105
          `}
        >
          <img
            src={img}
            alt={title || `Producto en carrito`}
            className="w-28 sm:w-32 h-auto object-contain"
            loading="lazy"
          />
          {/* Precio en esquina */}
          <div className="
            absolute -top-2 -right-2 
            bg-white dark:bg-gray-900 text-gray-800 dark:text-white 
            text-xs font-semibold px-2 py-1 rounded-full shadow-md
            border border-gray-200 dark:border-gray-700
          ">
            ₡{price?.toFixed(2)}
          </div>
        </div>

        {/* Información del producto */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg truncate">
            {title}
          </h3>
          {text && (
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">
              {text}
            </p>
          )}
          {size && (
            <span className="
              inline-block mt-1 
              text-xs font-medium 
              bg-indigo-100 dark:bg-indigo-900/40 
              text-indigo-800 dark:text-indigo-300 
              px-2 py-0.5 rounded-full
            ">
              Talla: {size}
            </span>
          )}

          {/* Control de cantidad */}
          <div className="flex items-center mt-3 space-x-3">
            <button
              type="button"
              onClick={handleDecrease}
              disabled={cartQuantity <= 1}
              className="
                w-8 h-8 
                rounded-full 
                bg-gray-100 dark:bg-gray-700 
                hover:bg-gray-200 dark:hover:bg-gray-600 
                disabled:opacity-50 disabled:cursor-not-allowed
                text-gray-700 dark:text-gray-300 
                flex items-center justify-center 
                transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-indigo-500
              "
              aria-label={`Disminuir cantidad de ${title}`}
            >
              <MinusIcon className="w-4 h-4" />
            </button>

            <span className="text-sm font-medium text-gray-800 dark:text-gray-200 w-8 text-center">
              {cartQuantity}
            </span>

            <button
              type="button"
              onClick={handleIncrease}
              className="
                w-8 h-8 
                rounded-full 
                bg-gray-100 dark:bg-gray-700 
                hover:bg-gray-200 dark:hover:bg-gray-600 
                text-gray-700 dark:text-gray-300 
                flex items-center justify-center 
                transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-indigo-500
              "
              aria-label={`Aumentar cantidad de ${title}`}
            >
              <PlusIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Acciones: Precio total y eliminar */}
      <div className="flex flex-col items-end ml-4 space-y-3">
        {/* Precio total */}
        <div className="text-right">
          <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
            ₡{(price * cartQuantity).toFixed(2)}
          </p>
        </div>

        {/* Botón de eliminar */}
        <button
          type="button"
          onClick={handleRemove}
          className="
            w-10 h-10 
            rounded-full 
            bg-red-100 dark:bg-red-900/30 
            hover:bg-red-200 dark:hover:bg-red-800/50 
            text-red-600 dark:text-red-400 
            flex items-center justify-center 
            transition-all duration-200 
            transform active:scale-95
            focus:outline-none focus:ring-2 focus:ring-red-500
            group-hover:opacity-100 opacity-70
          "
          aria-label={`Eliminar ${title} del carrito`}
        >
          <TrashIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;