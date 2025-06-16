import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Dialog } from '@headlessui/react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Belleza = () => {
    const banners = [
        '/Belleza/Loreal/hero1.webp',
        '/Belleza/Loreal/hero2.webp',
        '/Belleza/Loreal/hero3.webp',
        '/Belleza/Loreal/hero4.webp',
    ];

    const [imagenExpandida, setImagenExpandida] = useState(null);
    const [imagenesActuales, setImagenesActuales] = useState([]);
    const [imagenIndex, setImagenIndex] = useState(0);

    const abrirModal = (imagenes, index) => {
        setImagenesActuales(imagenes);
        setImagenIndex(index);
        setImagenExpandida(imagenes[index]);
    };

    const cerrarModal = () => {
        setImagenExpandida(null);
        setImagenIndex(0);
        setImagenesActuales([]);
    };

    const mostrarAnterior = () => {
        const nuevoIndex = (imagenIndex - 1 + imagenesActuales.length) % imagenesActuales.length;
        setImagenIndex(nuevoIndex);
        setImagenExpandida(imagenesActuales[nuevoIndex]);
    };

    const mostrarSiguiente = () => {
        const nuevoIndex = (imagenIndex + 1) % imagenesActuales.length;
        setImagenIndex(nuevoIndex);
        setImagenExpandida(imagenesActuales[nuevoIndex]);
    };

    return (
        <div className="w-full pt-[55px] relative p-1 text-gray-900 dark:text-gray-100 min-h-screen bg-white dark:bg-black">
            <div className="relative z-10">
                {/* Modal */}
                <Dialog open={!!imagenExpandida} onClose={cerrarModal} className="relative z-50">
                    <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
                        <Dialog.Panel className="relative animate-scale-in" onClick={(e) => e.stopPropagation()}>
                            <button
                                onClick={cerrarModal}
                                className="absolute top-2 right-2 bg-white dark:bg-neutral-900 text-black dark:text-white rounded-full p-2 shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 z-50"
                                aria-label="Cerrar imagen"
                            >
                                ✕
                            </button>
                            <button
                                onClick={mostrarAnterior}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-neutral-900 text-black dark:text-white rounded-full p-2 shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 z-50"
                            >
                                ‹
                            </button>
                            <img
                                src={imagenExpandida}
                                alt="Imagen expandida"
                                className="max-w-full max-h-screen object-contain rounded-md"
                            />
                            <button
                                onClick={mostrarSiguiente}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-neutral-900 text-black dark:text-white rounded-full p-2 shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 z-50"
                            >
                                ›
                            </button>
                        </Dialog.Panel>
                    </div>
                </Dialog>

                {/* Carrusel de banners */}
                <Carousel
                    autoPlay
                    infiniteLoop
                    interval={4000}
                    showThumbs={false}
                    showStatus={false}
                    showArrows={false}
                    swipeable
                    emulateTouch
                    className="rounded-md"
                >
                    {banners.map((src, index) => (
                        <div key={index}>
                            <img
                                src={src}
                                alt={`Hero ${index + 1}`}
                                className="w-full object-cover max-h-[500px] md:max-h-[800px] object-center"
                            />
                        </div>
                    ))}
                </Carousel>
            </div>

            <style>
                {`
                    @keyframes scaleIn {
                        0% {
                            transform: scale(0.9);
                            opacity: 0;
                        }
                        100% {
                            transform: scale(1);
                            opacity: 1;
                        }
                    }
                    .animate-scale-in {
                        animation: scaleIn 0.25s ease-out;
                    }
                `}
            </style>
        </div>
    );
};

export default Belleza;
