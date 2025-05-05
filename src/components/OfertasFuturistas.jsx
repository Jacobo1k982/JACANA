import React, { useState, useEffect } from 'react';
import { FaBolt } from 'react-icons/fa';
import { useSwipeable } from 'react-swipeable';

const ofertas = [
    {
        id: 1,
        title: 'Zapatillas Puma Future',
        img: '/PUMA/PMM/PMM8.jpg',
        price: '₡33,750',
        originalPrice: '₡37,500',
        discount: '10%',
        endsInSeconds: 180,
    },
    {
        id: 2,
        title: 'Zapatillas Puma Future',
        img: '/PUMA/PMM/PMM8.jpg',
        price: '₡33,750',
        originalPrice: '₡37,500',
        discount: '10%',
        endsInSeconds: 300,
    },
    {
        id: 3,
        title: 'Zapatillas Puma Future',
        img: '/PUMA/PMM/PMM8.jpg',
        price: '₡33,750',
        originalPrice: '₡37,500',
        discount: '10%',
        endsInSeconds: 240,
    },
];

function OfertasFuturistas() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [timers, setTimers] = useState(
        ofertas.map((oferta) => oferta.endsInSeconds)
    );

    // Carrusel automático
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % ofertas.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Contadores regresivos
    useEffect(() => {
        const countdown = setInterval(() => {
            setTimers((prevTimers) =>
                prevTimers.map((time) => (time > 0 ? time - 1 : 0))
            );
        }, 6000);
        return () => clearInterval(countdown);
    }, []);

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60)
            .toString()
            .padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () =>
            setCurrentIndex((prev) => (prev + 1) % ofertas.length),
        onSwipedRight: () =>
            setCurrentIndex((prev) =>
                prev === 0 ? ofertas.length - 1 : prev - 1
            ),
        trackMouse: true,
    });

    const current = ofertas[currentIndex];

    return (
        <div className="bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 min-h-screen py-10 px-4">
            <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white mb-10 animate-pulse flex justify-center items-center gap-2">
                <FaBolt className="text-yellow-400 animate-spin" /> Ofertas
            </h2>

            <div
                {...swipeHandlers}
                className="max-w-xl mx-auto bg-gray-900 rounded-2xl p-6 shadow-lg transform transition-transform duration-300 hover:scale-105 relative"
            >
                <div className="absolute top-2 right-2 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full z-10">
                    -{current.discount}
                </div>
                <img
                    src={current.img}
                    alt={current.title}
                    className="w-full h-56 object-cover rounded-xl mb-4"
                />
                <h3 className="text-white text-xl font-semibold mb-2 text-center">
                    {current.title}
                </h3>
                <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-gray-400 line-through decoration-pink-500">
                        {current.originalPrice}
                    </span>
                    <span className="text-green-400 font-bold text-2xl">
                        {current.price}
                    </span>
                </div>
                <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-pink-500 to-yellow-400 text-gray-900 font-bold px-4 py-2 rounded-full shadow-inner animate-pulse">
                        Termina en {formatTime(timers[currentIndex])}
                    </span>
                </div>
                <button className="w-full bg-gradient-to-r from-pink-500 to-yellow-400 text-gray-900 font-bold py-2 rounded-xl shadow-inner hover:from-pink-400 hover:to-yellow-300 transition-colors">
                    Ver más
                </button>
            </div>

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
        </div>
    );
}

export default OfertasFuturistas;
