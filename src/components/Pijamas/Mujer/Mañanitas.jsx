import React, { useEffect, useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Dialog } from '@headlessui/react';
import { Link, useParams } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Mañanitas = () => {
    const [mañanitas, setMañanitas] = useState([]);
    const [imagenExpandida, setImagenExpandida] = useState(null);
    const [imagenesActuales, setImagenesActuales] = useState([]);
    const [imagenIndex, setImagenIndex] = useState(0);
    const [colorSeleccionado, setColorSeleccionado] = useState({});
    const carruselRef = useRef(null);
    const { id } = useParams();

    useEffect(() => {
        fetch('/Data/Ropa/Mujer/mañanitas.json')
            .then((res) => res.json())
            .then((data) => {
                const producto = data.find(item => item.id === Number(id));
                setMañanitas(producto ? [producto] : []);
            });
    }, [id]);

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

    const seleccionarColor = (detalleId, colorCodigo) => {
        setColorSeleccionado((prev) => ({
            ...prev,
            [detalleId]: colorCodigo,
        }));
    };

    const scrollCarrusel = (offset) => {
        if (carruselRef.current) {
            carruselRef.current.scrollBy({ left: offset, behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full pt-[55px] relative p-1 text-gray-900 dark:text-gray-100 min-h-screen bg-white dark:bg-black">
            <div className="relative z-10">
                <Dialog open={!!imagenExpandida} onClose={cerrarModal} className="relative z-50" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
                        <Dialog.Panel className="relative animate-scale-in max-w-screen-md mx-auto">
                            <button
                                onClick={cerrarModal}
                                className="absolute top-2 right-2 bg-white dark:bg-neutral-900 text-black dark:text-white rounded-full p-2 shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 z-50"
                                aria-label="Cerrar imagen"
                            >
                                <X className="w-5 h-5" />
                            </button>
                            <button
                                onClick={mostrarAnterior}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-neutral-900 text-black dark:text-white rounded-full p-2 shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 z-50"
                                aria-label="Imagen anterior"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <img
                                src={imagenExpandida}
                                alt="Imagen expandida"
                                className="max-w-full max-h-[80vh] object-contain rounded-md"
                            />
                            <button
                                onClick={mostrarSiguiente}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-neutral-900 text-black dark:text-white rounded-full p-2 shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 z-50"
                                aria-label="Imagen siguiente"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </Dialog.Panel>
                    </div>
                </Dialog>

                <div className="mt-10 relative">
                    <h2 className="text-3xl font-bold mb-6 text-center text-pink-600 dark:text-pink-400">CONJUNTO MAÑANITAS</h2>

                    <button
                        onClick={() => scrollCarrusel(-300)}
                        className="absolute left-0 top-[50%] transform -translate-y-1/2 z-20 bg-white dark:bg-neutral-900 text-black dark:text-white p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700"
                        aria-label="Scroll izquierdo"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                        onClick={() => scrollCarrusel(300)}
                        className="absolute right-0 top-[50%] transform -translate-y-1/2 z-20 bg-white dark:bg-neutral-900 text-black dark:text-white p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700"
                        aria-label="Scroll derecho"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    <div
                        ref={carruselRef}
                        className="flex gap-6 overflow-x-auto px-8 pb-4 scroll-smooth"
                    >
                        {mañanitas.length === 0 ? (
                            <p className="text-center w-full text-red-500">Producto no encontrado.</p>
                        ) : (
                            mañanitas.map((detalle) => (
                                <div
                                    key={detalle.id}
                                    className="min-w-[280px] max-w-[280px] flex-shrink-0 backdrop-blur-md bg-white/60 dark:bg-neutral-900/60 shadow-lg dark:shadow-lg rounded-2xl p-4 hover:shadow-2xl transition-shadow duration-300 ease-in-out text-center border border-gray-300 dark:border-gray-700 hover:border-pink-400 dark:hover:border-pink-500"
                                >
                                    <Carousel
                                        showThumbs={false}
                                        showStatus={false}
                                        infiniteLoop
                                        swipeable
                                        emulateTouch
                                        className="rounded-md mb-2"
                                    >
                                        {detalle.imagenes?.map((img, idx) => (
                                            <div key={idx}>
                                                <div
                                                    onClick={() => abrirModal(detalle.imagenes, idx)}
                                                    className="cursor-pointer"
                                                >
                                                    <img
                                                        src={img}
                                                        alt={`${detalle.titulo} - imagen ${idx + 1}`}
                                                        className="w-full object-contain object-center rounded-md max-h-52"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </Carousel>

                                    <h3 className="text-lg md:text-xl font-semibold mt-2">{detalle.titulo}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">{detalle.subtitulo}</p>
                                    <p className="text-pink-600 dark:text-pink-400 font-bold mt-1 text-lg">₡{detalle.precio.toFixed(2)}</p>

                                    {detalle.colores?.length > 0 && (
                                        <div className="flex justify-center items-center gap-2 mt-3">
                                            {detalle.colores.map((color, index) => {
                                                const isSelected = colorSeleccionado[detalle.id] === color.codigo;
                                                return (
                                                    <div
                                                        key={index}
                                                        title={color.color}
                                                        aria-label={color.color}
                                                        onClick={() => seleccionarColor(detalle.id, color.codigo)}
                                                        className={`w-6 h-6 rounded-full border-2 cursor-pointer transition-transform duration-200 hover:scale-110 ${isSelected
                                                            ? 'border-blue-600 ring-2 ring-blue-300 scale-110'
                                                            : 'border-gray-300 dark:border-gray-600'
                                                            }`}
                                                        style={{ backgroundColor: color.codigo }}
                                                    />
                                                );
                                            })}
                                        </div>
                                    )}

                                    <div className="flex justify-between items-center mt-4">
                                        <Link
                                            to={`/detalle/${detalle.id}`}
                                            className="text-sm text-blue-500 font-medium hover:underline"
                                        >
                                            Ver detalle
                                        </Link>

                                        <button className="text-sm px-3 py-1 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
                                            Agregar
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
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

export default Mañanitas;
