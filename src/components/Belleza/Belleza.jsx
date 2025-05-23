import React, { useEffect, useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Dialog } from '@headlessui/react';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Belleza = () => {
    const banners = [
        '/Belleza/Loreal/hero1.webp',
        '/Belleza/Loreal/hero2.webp',
        '/Belleza/Loreal/hero3.webp',
        '/Belleza/Loreal/hero4.webp',
    ];

    const [productos, setProductos] = useState([]);
    const [imagenExpandida, setImagenExpandida] = useState(null);
    const [imagenesActuales, setImagenesActuales] = useState([]);
    const [imagenIndex, setImagenIndex] = useState(0);
    const [colorSeleccionado, setColorSeleccionado] = useState({});
    const carruselRef = useRef(null);

    useEffect(() => {
        fetch('/data/productos.json')
            .then((res) => res.json())
            .then((data) => setProductos(data))
            .catch((err) => console.error('Error cargando productos:', err));
    }, []);

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

    const seleccionarColor = (productoId, colorCodigo) => {
        setColorSeleccionado((prev) => ({
            ...prev,
            [productoId]: colorCodigo,
        }));
    };

    const scrollCarrusel = (offset) => {
        if (carruselRef.current) {
            carruselRef.current.scrollBy({ left: offset, behavior: 'smooth' });
        }
    };

    return (
        <div
            className="w-full pt-[55px] relative p-1 text-gray-900 dark:text-gray-100 min-h-screen bg-white dark:bg-black">
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

                {/* Carrusel de productos */}
                <div className="mt-10 relative">
                    <h2 className="text-2xl font-bold mb-6 text-center">LO NUEVO</h2>

                    <button
                        onClick={() => scrollCarrusel(-300)}
                        className="absolute left-0 top-[50%] transform -translate-y-1/2 z-20 bg-white dark:bg-neutral-900 text-black dark:text-white p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700"
                        aria-label="Scroll izquierdo"
                    >
                        ‹
                    </button>

                    <button
                        onClick={() => scrollCarrusel(300)}
                        className="absolute right-0 top-[50%] transform -translate-y-1/2 z-20 bg-white dark:bg-neutral-900 text-black dark:text-white p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700"
                        aria-label="Scroll derecho"
                    >
                        ›
                    </button>

                    <div
                        ref={carruselRef}
                        className="flex gap-6 overflow-x-auto px-8 pb-4 scroll-smooth"
                    >
                        {productos.map((producto) => (
                            <div
                                key={producto.id}
                                className="min-w-[280px] max-w-[280px] flex-shrink-0 bg-white dark:bg-neutral-900 shadow-md dark:shadow-lg rounded-lg p-4 hover:shadow-xl transition text-center border border-gray-600 hover:border-pink-400 dark:hover:border-pink-500"
                            >
                                <Carousel
                                    showThumbs={false}
                                    showStatus={false}
                                    infiniteLoop
                                    swipeable
                                    emulateTouch
                                    className="rounded-md mb-2"
                                >
                                    {producto.imagenes?.map((img, idx) => (
                                        <div key={idx}>
                                            <div
                                                onClick={() => abrirModal(producto.imagenes, idx)}
                                                className="cursor-pointer"
                                            >
                                                <img
                                                    src={img}
                                                    alt={`${producto.titulo} ${idx + 1}`}
                                                    className="w-full object-contain object-center rounded-md max-h-52"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </Carousel>

                                <h3 className="text-lg font-semibold mt-2">{producto.titulo}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">{producto.subtitulo}</p>
                                <p className="text-blue-600 font-bold mt-1">₡{producto.precio.toFixed(2)}</p>

                                {producto.colores?.length > 0 && (
                                    <div className="flex justify-center items-center gap-2 mt-3">
                                        {producto.colores.map((color, index) => {
                                            const isSelected = colorSeleccionado[producto.id] === color.codigo;
                                            return (
                                                <div
                                                    key={index}
                                                    title={color.color}
                                                    onClick={() => seleccionarColor(producto.id, color.codigo)}
                                                    className={`w-6 h-6 rounded-full border-2 cursor-pointer transition-transform duration-200 ${isSelected
                                                        ? 'border-blue-600 ring-2 ring-blue-300 scale-110'
                                                        : 'border-gray-300 dark:border-gray-600'
                                                        }`}
                                                    style={{ backgroundColor: color.codigo }}
                                                />
                                            );
                                        })}
                                    </div>
                                )}

                                <div className="flex justify-end">
                                    <Link
                                        to={`/producto/${producto.id}`}
                                        className="mt-4 inline-block text-sm text-blue-500 font-medium hover:underline"
                                    >
                                        Ver detalle
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
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
