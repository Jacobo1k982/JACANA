import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems, selectCartState, selectTotalAmount, selectTotalQTY, setClearCartItems, setCloseCart, setGetTotals } from '../app/CartSlice.js'
import CartCount from './cart/CartCount'
import CartEmpty from './cart/CartEmpty'
import CartItem from './cart/CartItem'

const Cart = () => {

  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQTY = useSelector(selectTotalQTY);

  const [showSummary, setShowSummary] = React.useState(false);

  // console.log(cartItems);

  useEffect(() => {
    dispatch(setGetTotals())
  }, [cartItems, dispatch])


  const onCartToggle = () => {
    dispatch(setCloseCart({
      cartState: false
    }))
  };

  const onClearCartItems = () => {
    dispatch(setClearCartItems())
  };


  return (
    <>
      <div className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[250] ${ifCartState ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-8'}`}>
        <div className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}>
          <CartCount totalQTY={totalQTY} onCartToggle={onCartToggle} onClearCartItems={onClearCartItems} />
          {cartItems?.length === 0 ? <CartEmpty onCartToggle={onCartToggle} /> : <div>
            <div className='flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3 pb-10'>
              {cartItems?.map((item, i) => (
                <CartItem key={i} item={item} />
              ))}
            </div>

            <div className='fixed bottom-0 bg-white w-full px-5 py-2 grid items-center'>
              <div className='flex items-center justify-between'>
                <h1 className='text-base font-semibold'>SubTotal</h1>
                <h1 className='text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5'>${totalAmount}</h1>
              </div>
              <div className='grid items-center gap-2'>
                <p className='text-sm font-medium text-center'>Los impuestos y el envío se calcularán al momento del envío.</p>
                <button
                  type='button'
                  className='button-theme bg-theme-cart text-white'
                  onClick={() => setShowSummary(true)}
                >
                  Verificar
                </button>

              </div>
            </div>
          </div>}
        </div>
      </div>
      {showSummary && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-[300]">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">Resumen de compra</h2>
            <ul className="divide-y divide-gray-200 max-h-64 overflow-y-auto mb-4">
              {cartItems.map((item, index) => (
                <li key={index} className="py-2">
                  <p className="text-base font-medium">{item.title}</p>
                  <p className="text-sm text-gray-600">Modelo: {item.model || item.text}</p>
                  <p className="text-sm text-gray-600">Talla: {item.size}</p>
                  <p className="text-sm text-gray-600">Cantidad: {item.cartQuantity}</p>
                  <p className="text-sm text-gray-600">Subtotal: ₡{item.price * item.cartQuantity}</p>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-lg font-bold">₡{totalAmount}</span>
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
                  alert("Compra realizada con éxito 🎉");
                  dispatch(setClearCartItems());
                  setShowSummary(false);
                  dispatch(setCloseCart({ cartState: false }));
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
  )
}

export default Cart