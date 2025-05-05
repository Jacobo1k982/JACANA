import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCartState,
  selectTotalAmount,
  selectTotalQTY,
  setClearCartItems,
  setCloseCart,
  setGetTotals,
} from '../app/CartSlice.js';
import CartCount from './cart/CartCount';
import CartEmpty from './cart/CartEmpty';
import CartItem from './cart/CartItem';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQTY = useSelector(selectTotalQTY);
  const [showSummary, setShowSummary] = useState(false);

  // Recalcula totales cada vez que cambian los ítems
  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, dispatch]);

  const onCartToggle = () => {
    dispatch(setCloseCart());
  };

  const onClearCartItems = () => {
    dispatch(setClearCartItems());
  };

  const formatCurrency = (amount) =>
    new Intl.NumberFormat('es-CR', {
      style: 'currency',
      currency: 'CRC',
      minimumFractionDigits: 0,
    }).format(amount);

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen z-[250] transition-transform duration-300 ${ifCartState ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-8'
          }`}
      >
        <div className="blur-effect-theme h-screen max-w-xl w-full absolute right-0">
          <CartCount
            totalQTY={totalQTY}
            onCartToggle={onCartToggle}
            onClearCartItems={onClearCartItems}
          />

          {cartItems.length === 0 ? (
            <CartEmpty onCartToggle={onCartToggle} />
          ) : (
            <div>
              <div className="flex flex-col gap-y-5 overflow-y-auto h-[81vh] p-3 pb-10">
                {cartItems.map((item, i) => (
                  <CartItem key={i} item={item} />
                ))}
              </div>

              <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
                <div className="flex items-center justify-between">
                  <h1 className="text-base font-semibold">SubTotal</h1>
                  <h1 className="text-sm rounded bg-theme-cart text-white px-1 py-0.5">
                    {formatCurrency(totalAmount)}
                  </h1>
                </div>
                <div className="grid gap-2 mt-2">
                  <p className="text-sm text-center">
                    Los impuestos y el envío se calcularán al momento del envío.
                  </p>
                  <button
                    type="button"
                    className="button-theme bg-theme-cart text-white"
                    onClick={() => {
                      if (cartItems.length === 0) {
                        alert('El carrito está vacío.');
                        return;
                      }
                      setShowSummary(true);
                    }}
                  >
                    Verificar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal resumen de compra */}
      {showSummary && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-[300]">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">Resumen de compra</h2>
            <ul className="divide-y divide-gray-200 max-h-64 overflow-y-auto mb-4">
              {cartItems.map((item, index) => (
                <li key={index} className="py-2">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-600">Modelo: {item.text}</p>
                  <p className="text-sm text-gray-600">Talla: {item.size}</p>
                  <p className="text-sm text-gray-600">Cantidad: {item.cartQuantity}</p>
                  <p className="text-sm text-gray-600">
                    Subtotal: {formatCurrency(item.price * item.cartQuantity)}
                  </p>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-lg font-bold">{formatCurrency(totalAmount)}</span>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowSummary(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  alert('Compra realizada con éxito 🎉');
                  dispatch(setClearCartItems());
                  setShowSummary(false);
                  dispatch(setCloseCart());
                  navigate('/gracias');
                }}
                className="px-4 py-2 bg-theme-cart text-white rounded hover:bg-orange-600"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
