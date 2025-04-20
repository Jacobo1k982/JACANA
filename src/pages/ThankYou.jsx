import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ThankYou = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="bg-white shadow-md rounded-lg p-8 max-w-md text-center"
            >
                <h1 className="text-2xl font-bold text-theme-cart mb-4">¡Gracias por tu compra! 🎉</h1>
                <p className="text-gray-600 mb-6">Tu pedido ha sido confirmado. Pronto recibirás un correo con los detalles de la compra.</p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-theme-cart text-white rounded hover:bg-orange-600"
                    onClick={() => navigate('/')}
                >
                    Volver al inicio
                </motion.button>
            </motion.div>
        </div>
    );
};

export default ThankYou;
