import React, { useState, useEffect } from 'react';
import { FaBolt, FaStar, FaShoppingCart } from 'react-icons/fa';
import { useSwipeable } from 'react-swipeable';
import { motion } from 'framer-motion';
import { useDispatch } from "react-redux";
import { setAddItemToCart } from '../app/CartSlice';


const ofertas = [
    {
        id: 1,
        title: 'Nike',
        img: '/NKM/NKM48.jpg',
        price: '₡29,700',
        originalPrice: '₡33,000',
        discount: '10%',
        endsInSeconds: 9000,
        rating: 4,
        stock: 3,
        popular: true,
    },
    {
        id: 2,
        title: 'Nike React',
        img: '/NKM/NKM54.jpg',
        price: '₡33,750',
        originalPrice: '₡37,500',
        discount: '10%',
        endsInSeconds: 9000,
        rating: 5,
        stock: 8,
        popular: false,
    },
    {
        id: 3,
        title: 'Nike',
        img: '/NKH/NKH10.jpg',
        price: '₡27,000',
        originalPrice: '₡30,000',
        discount: '20%',
        endsInSeconds: 8000,
        rating: 4,
        stock: 5,
        popular: true,
    },
];

function OfertasFuturistas() {
    const dispatch = useDispatch();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [timers, setTimers] = useState(ofertas.map(o => o.endsInSeconds));


    // Cambia oferta cada 5s
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % ofertas.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Contadores regresivos
    useEffect(() => {
        const countdown = setInterval(() => {
            setTimers(prev =>
                prev.map(time => (time > 0 ? time - 1 : 0))
            );
        }, 1000);
        return () => clearInterval(countdown);
    }, []);

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => setCurrentIndex((prev) => (prev + 1) % ofertas.length),
        onSwipedRight: () => setCurrentIndex((prev) => (prev === 0 ? ofertas.length - 1 : prev - 1)),
        trackMouse: true,
    });

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };

    const handleBuy = (product) => {
        alert(`¡${product.title} agregado al carrito!`);
        dispatch(setAddItemToCart(product));
    };

    const current = ofertas[currentIndex];
    const progressPercent = (timers[currentIndex] / current.endsInSeconds) * 100;

    return (
        <div className="bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 min-h-screen py-10 px-4 text-white">
            <motion.h2
                className="text-center text-4xl md:text-5xl font-extrabold mb-10 flex justify-center items-center gap-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <FaBolt className="text-yellow-400 animate-spin" /> Ofertas de temporada
            </motion.h2>

            <motion.div
                {...swipeHandlers}
                className="max-w-xl mx-auto bg-gray-900 rounded-2xl p-6 shadow-lg transition-transform hover:scale-105 relative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <div className="absolute top-2 right-2 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full z-10">
                    -{current.discount}
                </div>
                {current.popular && (
                    <div className="absolute top-2 left-2 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 animate-pulse">
                        🔥 Más popular
                    </div>
                )}
                <img
                    src={current.img}
                    alt={current.title}
                    className="w-full h-full object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-center">{current.title}</h3>
                <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                        <FaStar
                            key={i}
                            className={i < current.rating ? 'text-yellow-400' : 'text-gray-600'}
                        />
                    ))}
                </div>
                <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="line-through decoration-pink-500">{current.originalPrice}</span>
                    <span className="text-green-400 font-bold text-2xl">{current.price}</span>
                </div>
                <div className="text-center mb-2">
                    <span className="bg-gradient-to-r from-pink-500 to-yellow-400 text-gray-900 font-bold px-4 py-2 rounded-full shadow-inner animate-pulse">
                        Termina en {formatTime(timers[currentIndex])}
                    </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-4 overflow-hidden">
                    <div
                        className="bg-green-400 h-2 transition-all"
                        style={{ width: `${progressPercent}%` }}
                    ></div>
                </div>
                <div className="text-center mb-4">
                    {current.stock <= 3 ? (
                        <span className="text-red-500 font-bold">⚡ ¡Últimas {current.stock} unidades!</span>
                    ) : (
                        <span className="text-gray-400">{current.stock} disponibles</span>
                    )}
                </div>
                <button
                    onClick={() => handleBuy(current)}
                    className="w-full bg-gradient-to-r from-pink-500 to-yellow-400 text-gray-900 font-bold py-2 rounded-xl shadow-inner hover:from-pink-400 hover:to-yellow-300 transition-colors flex items-center justify-center gap-2"
                >
                    <FaShoppingCart /> Comprar ahora
                </button>
            </motion.div>

            <div className="flex justify-center gap-2 mt-6">
                {ofertas.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-yellow-400' : 'bg-gray-500'
                            }`}
                        onClick={() => setCurrentIndex(index)}
                    ></button>
                ))}
            </div>

            {/* Ranking */}
            <div className="max-w-2xl mx-auto mt-10 bg-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 text-center">🏆 Ranking más vendidos</h3>
                <ul className="space-y-2">
                    {ofertas
                        .sort((a, b) => b.rating - a.rating)
                        .map((o, i) => (
                            <li
                                key={o.id}
                                className="flex justify-between items-center bg-gray-700 p-3 rounded-xl shadow"
                            >
                                <span>
                                    {i + 1}. {o.title}
                                </span>
                                <span className="flex items-center gap-1 text-yellow-400">
                                    {o.rating}
                                    <FaStar />
                                </span>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
}

export default OfertasFuturistas;
