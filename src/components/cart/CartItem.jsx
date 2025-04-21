import React from "react";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import {
  setDecreaseItemQTY,
  setIncreaseItemQTY,
  setRemoveItemFromCart,
} from "../../app/CartSlice.js";

const CartItem = ({
  item: { id, title, subtitle, text, img, color, shadow, price, size, cartQuantity },
}) => {
  const dispatch = useDispatch();

  const handleAction = (action) => {
    dispatch(action({ id, title, subtitle, text, img, color, shadow, price, size, cartQuantity }));
  };

  return (
    <div className="flex items-center justify-between w-full px-5 py-4 rounded-xl shadow-sm border border-gray-200 mb-4 bg-white hover:shadow-md transition-all">
      <div className="flex items-center gap-5">
        <div
          className={`bg-gradient-to-b ${color} ${shadow} relative rounded-xl p-3 hover:scale-105 transition-transform duration-200 ease-out grid items-center`}
        >
          <img
            src={img}
            alt={`img/cart-item/${id}`}
            className="w-32 h-auto object-contain lg:w-24"
          />
          <div className="absolute right-1 top-1 bg-white/90 text-black text-xs px-2 py-0.5 rounded-md shadow-sm">
            ₡{price}
          </div>
        </div>

        <div className="grid gap-2">
          <div>
            <h1 className="font-semibold text-slate-900 text-base lg:text-sm">{title}</h1>
            <p className="text-sm text-slate-700 lg:text-xs">{text}</p>
            <span className="text-xs text-gray-500">{size}</span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={() => handleAction(setDecreaseItemQTY)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full p-1 w-7 h-7 flex items-center justify-center"
            >
              <MinusIcon className="w-4 h-4" />
            </button>
            <span className="text-sm font-medium text-slate-800 w-6 text-center">
              {cartQuantity}
            </span>
            <button
              type="button"
              onClick={() => handleAction(setIncreaseItemQTY)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full p-1 w-7 h-7 flex items-center justify-center"
            >
              <PlusIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end justify-between h-full gap-3">
        <div>
          <span className="text-lg font-semibold text-indigo-600">
            ₡{price * cartQuantity}
          </span>
        </div>
        <button
          type="button"
          onClick={() => handleAction(setRemoveItemFromCart)}
          className="bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-md transition-transform active:scale-95"
        >
          <TrashIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
