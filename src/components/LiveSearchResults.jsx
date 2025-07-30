// components/LiveSearchResults.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

const LiveSearchResults = ({ results, isVisible, onResultClick }) => {
    if (!isVisible || results.length === 0) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-2 left-0 w-80 bg-white dark:bg-gray-800 shadow-2xl rounded-xl border border-gray-200 dark:border-gray-700 z-50 overflow-hidden"
        >
            <div className="p-2 max-h-96 overflow-y-auto">
                {results.map((product) => (
                    <Link
                        key={product.id}
                        to={`/producto/${product.id}`}
                        onClick={onResultClick}
                        className="flex items-center gap-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition cursor-pointer"
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-12 h-12 object-cover rounded-lg"
                        />
                        <div className="text-sm">
                            <h4 className="font-medium text-gray-900 dark:text-white">{product.title}</h4>
                            <p className="text-gray-600 dark:text-gray-400">{product.model}</p>
                            <p className="text-indigo-600 dark:text-indigo-400 font-semibold">${product.price}</p>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 dark:border-gray-700"></div>

            {/* Ver todos los resultados */}
            <div className="p-2 text-center border-b border-gray-200 dark:border-gray-700">
                <Link
                    to="/search"
                    onClick={onResultClick}
                    className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                >
                    Ver todos los resultados
                </Link>
            </div>

            {/* CTA: Contacto por WhatsApp */}
            <a
                href="https://wa.me/50664541700?text=Hola,%20estoy%20buscando%20un%20producto%20en%20JACANA."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 text-green-600 dark:text-green-400 text-sm hover:bg-green-50 dark:hover:bg-green-900/30 border-t border-gray-200 dark:border-gray-700 transition-colors duration-200"
                onClick={onResultClick}
            >
                <FaWhatsapp className="w-4 h-4" />
                <span>¿No encuentras algo? Chatea con nosotros</span>
            </a>
        </motion.div>
    );
};

export default LiveSearchResults;