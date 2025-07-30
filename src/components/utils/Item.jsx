import React from "react";
import { useDispatch } from "react-redux";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { setAddItemToCart, setOpenCart } from "../../app/CartSlice";

const Item = ({
  id,
  color = "from-gray-50 to-gray-100", // gradiente por defecto
  shadow = "shadow-lg",
  title = "Producto sin nombre",
  text = "Sin descripción",
  img,
  btn = "Comprar ahora",
  rating = 0,
  price,
  size,
  ifExists = false, // indica si es un producto "existente" (diseño diferente)
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const item = { id, color, shadow, title, text, img, rating, price, size };
    dispatch(setAddItemToCart(item));
  };

  const handleBuyNow = () => {
    handleAddToCart();
    dispatch(setOpenCart({ cartState: true }));
  };

  // Generar estrellas según el rating
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarIcon
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <div
      className={`
        group relative bg-gradient-to-b ${color} ${shadow}
        rounded-xl overflow-hidden transition-all duration-500
        hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        ${ifExists ? "grid grid-cols-12" : ""}
      `}
    >
      {/* Contenido de texto */}
      <div
        className={`
          p-6 z-10 transition-all duration-300
          ${ifExists ? "col-span-7 flex flex-col justify-center" : "text-center"}
        `}
      >
        <h3 className="text-gray-800 dark:text-white text-xl font-semibold mb-1">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
          {text}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mb-3">
          {renderStars()}
          <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
            ({rating}/5)
          </span>
        </div>

        {/* Precio y talla */}
        <div className="flex items-center justify-center gap-4 mb-4 flex-wrap">
          <span className="bg-white/90 text-gray-900 text-lg font-bold px-4 py-1.5 rounded-full shadow-md">
            ${price?.toFixed(2)}
          </span>
          {size && (
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold px-3 py-1.5 rounded-full shadow">
              Talla {size}
            </span>
          )}
        </div>

        {/* Botones de acción */}
        <div className="flex gap-3 justify-center">
          <button
            type="button"
            onClick={handleAddToCart}
            aria-label={`Agregar ${title} al carrito`}
            className="flex items-center gap-2 bg-white/90 hover:bg-white text-gray-900 
                       px-4 py-2 rounded-lg font-medium shadow-md hover:shadow-lg 
                       transition-all duration-200 group"
          >
            <ShoppingBagIcon className="w-5 h-5" />
            <span>Agregar</span>
          </button>

          <button
            type="button"
            onClick={handleBuyNow}
            aria-label={`Comprar ahora ${title}`}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700
                       text-white px-5 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl
                       transition-all duration-200 transform hover:scale-105"
          >
            {btn}
          </button>
        </div>
      </div>

      {/* Imagen del producto */}
      <div
        className={`
          ${ifExists ? "col-span-5" : "text-center"}
          ${ifExists ? "relative -top-6" : "mt-4"}
        `}
      >
        <img
          src={img}
          alt={title}
          loading="lazy"
          className={`
            w-full h-auto object-cover rounded-t-xl md:rounded-none
            ${ifExists ? "max-h-60" : "max-h-52 mx-auto"}
            transition-transform duration-500 group-hover:scale-105
          `}
        />
      </div>
    </div>
  );
};

export default Item;