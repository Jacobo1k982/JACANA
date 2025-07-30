// CartDrawer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import CartItem from '../components/cart/CartItem';

const CartDrawer = ({ onClose, items = [] }) => {
    // Calcular total
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <>
            {/* Overlay */}
            <motion.div
                className="fixed inset-0 bg-black/40 z-[99] backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Drawer */}
            <motion.aside
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 100, damping: 30 }}
                className="fixed right-0 top-0 w-full max-w-md h-screen bg-white dark:bg-gray-900 shadow-2xl z-[999] flex flex-col text-gray-900 dark:text-gray-100"
                role="dialog"
                aria-label="Carrito de compras"
            >
                {/* Cabecera */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-white to-gray-50 dark:from-gray-900 dark:to-gray-850">
                    <h2 className="text-xl font-bold">Tu Carrito</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                        aria-label="Cerrar carrito"
                    >
                        <XMarkIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                    </button>
                </div>

                {/* Contenido */}
                <div className="flex-1 overflow-y-auto p-6">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center text-gray-500 dark:text-gray-400">
                            <svg className="w-16 h-16 mb-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <p className="text-lg font-medium">Tu carrito está vacío</p>
                            <p className="text-sm mt-1">Agrega productos para verlos aquí.</p>
                        </div>
                    ) : (
                        <ul className="space-y-4">
                            {items.map((item) => (
                                <CartItem key={item.id} item={item} />
                            ))}
                        </ul>
                    )}
                </div>

                {/* Footer con acciones */}
                {items.length > 0 && (
                    <div className="border-t border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-900 space-y-4">
                        {/* Total */}
                        <div className="flex justify-between text-lg font-semibold">
                            <span>Total:</span>
                            <span className="text-indigo-600 dark:text-indigo-400 text-xl">${total.toFixed(2)}</span>
                        </div>

                        {/* Botón principal */}
                        <Link
                            to="/cart"
                            onClick={onClose}
                            className="block w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold text-center shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                        >
                            Ver Carrito Completo
                        </Link>

                        {/* CTA de WhatsApp mejorado */}
                        <a
                            href="https://wa.me/50664541700?text=Hola,%20tengo%20una%20pregunta%20sobre%20mi%20carrito%20de%20compras."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-green-500/30 transition-all duration-200 group"
                        >
                            <span className="relative flex h-5 w-5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex h-5 w-5 rounded-full bg-green-500"></span>
                            </span>
                            <span className="font-medium">¿Necesitas ayuda? Chatea con nosotros</span>
                            <svg
                                className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-200"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.149-.148.332-.396.495-.594.164-.198.223-.347.332-.57.108-.224.037-.421-.03-.594-.066-.173-.594-1.435-.811-1.907-.212-.471-.423-.446-.57-.446-.148 0-.322-.025-.495-.025-.173 0-.446.05-.669.3-.223.248-.848 1.04-1.279 2.144C3.263 10.52 3 11.494 3 12c0 .506.494 1.342.707 1.761.212.42.847 1.525 2.03 2.536 1.182 1.012 2.536 2.537 2.739 2.735.2.198.421.298.619.298.198 0 .446-.074.694-.222.248-.149 1.596-1.185 1.817-1.383.22-.198.47-.297.72-.297.248 0 .52.099.768.347.249.248 1.117 1.013 1.166 1.062.05.05.149.149.297.248.149.099 1.062.62 2.366.94 1.279.316 2.253.075 2.527-.025.272-.099.77-.347 1.067-.644.297-.298.471-.471.57-.669.099-.198.148-.471.05-.72-.099-.248-.198-.297-.347-.396-.148-.099-1.09-.669-3.202-1.907-.12-.074-.248-.123-.371-.172-.123-.05-.222-.075-.346-.123Z" />
                            </svg>
                        </a>

                        {/* Mensaje de confianza */}
                        <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
                            <span className="inline-flex items-center gap-1">
                                🔒
                                <span>Comunicación cifrada de extremo a extremo</span>
                            </span>
                        </p>
                    </div>
                )}
            </motion.aside>
        </>
    );
};

export default CartDrawer;