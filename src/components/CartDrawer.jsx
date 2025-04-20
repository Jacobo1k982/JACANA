// CartDrawer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import CartItem from '../components/cart/CartItem';

const CartDrawer = ({ onClose, items }) => {
    return (
        <>
            {/* Overlay */}
            <motion.div
                className="fixed inset-0 bg-black/30 z-[99]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            />

            {/* Drawer */}
            <motion.aside
                initial={{ x: 500 }}
                animate={{ x: 0 }}
                exit={{ x: 500 }}
                transition={{ type: 'spring', stiffness: 100 }}
                className="fixed right-0 top-0 w-[300px] md:w-[400px] h-screen bg-white shadow-lg z-[999] px-4 py-6 flex flex-col"
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Carrito</h2>
                    <button onClick={onClose} className="focus:outline-none">
                        <XMarkIcon className="w-6 h-6 text-gray-600 hover:text-gray-800" />
                    </button>
                </div>

                {items.length === 0 ? (
                    <p>Tu carrito está vacío.</p>
                ) : (
                    <div className="flex-grow overflow-y-auto">
                        {items.map((item) => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </div>
                )}

                {items.length > 0 && (
                    <div className="mt-6 border-t pt-4">
                        <p>Aquí irán los detalles del subtotal y los botones de Checkout.</p>
                        <Link
                            to="/cart"
                            onClick={onClose}
                            className="block w-full bg-indigo-600 text-white py-2 rounded-md text-center hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            Ver Carrito
                        </Link>
                    </div>
                )}
            </motion.aside>
        </>
    );
};

export default CartDrawer;
