import React from "react";
import { useDispatch } from "react-redux";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { setAddItemToCart, setOpenCart } from "../../app/CartSlice";

const Item = ({
  ifExists,
  id,
  color,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
  size,
}) => {
  const dispatch = useDispatch();

  const onAddToCart = () => {
    const item = { id, color, shadow, title, text, img, rating, price, size };
    dispatch(setAddItemToCart(item));
  };

  const onCartToggle = () => {
    dispatch(setOpenCart({
      cartState: true
    }))
  };


  return (
    <>

      <div
        className={`w-full relative bg-gradient-to-b ${color} ${shadow} grid items-center ${ifExists ? "justify-items-start" : "justify-items-center"
          } rounded-xl py-9 px-8 transition-all duration-500 ease-in-out hover:scale-105`}
      >
        <div
          className={`grid items-center ${ifExists ? "justify-items-start" : "justify-items-center"
            }`}
        >
          <h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
            {title}
          </h1>
          <p className="text-slate-200 text-base md:text-sm font-normal filter drop-shadow">
            {text}
          </p>

          {/* Mostrar el precio */}
          <div className="flex items-center justify-between w-40 my-2">
            <div className="flex items-center blur-effect-theme bg-white/80 px-3 rounded">
              <h1 className="text-black text-sm font-medium">${price}</h1>
            </div>
            {/* Mostrar la talla */}
            {size && (
              <div className="my-1 flex items-center gap-2">
                <span className="text-sm font-medium text-slate-100">Talla:</span>
                <span className="bg-gradient-to-r from-black-500 to-blue-600 text-white text-sm font-semibold px-2 py-0 rounded-lg shadow-lg">
                  {size}
                </span>
              </div>
            )}
          </div>
          {/* Boton de agregar al carrito */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
              onClick={() => onAddToCart()}
            >
              <ShoppingBagIcon className="icon-style text-slate-900" />
            </button>
            <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme px-2 py-2 shadow shadow-sky-200 text-sm text-black"
              onClick={() => { onAddToCart(); onCartToggle(); }}
            >
              {btn}
            </button>

          </div>
        </div>
        <div
          className={`flex items-center ${ifExists ? "absolute top-5 right-1" : "justify-center"
            }`}
        >
          <img
            src={img}
            alt={`img/item-img/${id}`}
            className={`transitions-theme hover:-rotate-12 ${ifExists
              ? "h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]"
              : "h-36 w-64 "
              }`}
          />
        </div>
      </div>
    </>
  );
};

export default Item;
