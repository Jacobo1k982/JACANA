import React, { useEffect, useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Dialog } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Mañanitas = () => {
    const [productos, setProductos] = useState([]);
    const [imagenExpandida, setImagenExpandida] = useState(null);
    const [imagenesActuales, setImagenesActuales] = useState([]);
    const [imagenIndex, setImagenIndex] = useState(0);
    const [colorSeleccionado, setColorSeleccionado] = useState({});
    const carruselRef = useRef(null);

    useEffect(() => {
        fetch('/data/Ropa/Mujer/mañanitas.json')
            .then((res) => res.json())
            .then((data) => setProductos(data))
            .catch((err) => console.error('Error cargando productos:', err));
    }, []);

    const abrirModal = (imagenes, index) => {
        setImagenesActuales(imagenes); // estas no deben incluir la portada
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
        <div className="w-full pt-[55px] px-2 pb-10 min-h-screen bg-white dark:bg-zinc-950 text-gray-900 dark:text-gray-100 relative">
            {/* Modal */}
            <AnimatePresence>
                {imagenExpandida && (
                    <Dialog open={true} onClose={cerrarModal} className="fixed inset-0 z-50">
                        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="relative max-w-4xl w-full"
                            >
                                <Dialog.Panel className="relative bg-white dark:bg-zinc-900 rounded-lg overflow-hidden">
                                    <button
                                        onClick={cerrarModal}
                                        className="absolute top-3 right-3 text-xl bg-zinc-100 dark:bg-zinc-800 p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700"
                                    >
                                        ✕
                                    </button>
                                    <button
                                        onClick={mostrarAnterior}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-2xl bg-zinc-100 dark:bg-zinc-800 p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700"
                                    >
                                        ‹
                                    </button>
                                    <img
                                        src={imagenExpandida}
                                        alt="Imagen expandida"
                                        className="w-full h-auto max-h-[80vh] object-contain"
                                    />
                                    <button
                                        onClick={mostrarSiguiente}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl bg-zinc-100 dark:bg-zinc-800 p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700"
                                    >
                                        ›
                                    </button>
                                </Dialog.Panel>
                            </motion.div>
                        </div>
                    </Dialog>
                )}
            </AnimatePresence>

            <div className="mt-10 relative">
                <h2
                    className="text-3xl md:text-4xl font-semibold font-sans mb-8 text-gray-900 dark:text-gray-100 transition-colors duration-300 relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full mx-auto text-center w-fit"
                >
                    Pijamas, Conjunto Mañanitas
                </h2>

                <button
                    onClick={() => scrollCarrusel(-300)}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white dark:bg-zinc-800 text-black dark:text-white p-2 rounded-full shadow-md hover:scale-110 transition"
                >
                    ‹
                </button>

                <button
                    onClick={() => scrollCarrusel(300)}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white dark:bg-zinc-800 text-black dark:text-white p-2 rounded-full shadow-md hover:scale-110 transition"
                >
                    ›
                </button>

                <div ref={carruselRef} className="flex gap-6 overflow-x-auto px-10 pb-6 scroll-smooth">
                    {productos.map((producto) => (
                        <div
                            key={producto.id}
                            className="min-w-[280px] max-w-[280px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-4 shadow-md hover:shadow-xl transition-transform hover:-translate-y-1"
                        >
                            <Carousel showThumbs={false} showStatus={false} infiniteLoop swipeable emulateTouch>
                                {/* Portada como primera imagen (no clickeable) */}
                                {producto.portada && (
                                    <div>
                                        <img
                                            src={producto.portada}
                                            alt={`${producto.titulo} portada`}
                                            className="rounded-lg object-contain max-h-52"
                                        />
                                    </div>
                                )}

                                {/* Resto de las imágenes con click para abrir modal */}
                                {producto.imagenes?.map((img, idx) => (
                                    <div key={idx} onClick={() => abrirModal(producto.imagenes, idx)} className="cursor-pointer">
                                        <img
                                            src={img}
                                            alt={`${producto.titulo} ${idx + 1}`}
                                            className="rounded-lg object-contain max-h-52"
                                        />
                                    </div>
                                ))}
                            </Carousel>

                            <h3 className="text-lg font-bold mt-3">{producto.titulo}</h3>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">{producto.subtitulo}</p>
                            <p className="text-blue-600 font-bold text-md mt-1">₡{producto.precio.toFixed(2)}</p>

                            {producto.colores?.length > 0 && (
                                <div className="flex justify-center gap-2 mt-3">
                                    {producto.colores.map((color, index) => {
                                        const isSelected = colorSeleccionado[producto.id] === color.codigo;
                                        return (
                                            <div
                                                key={index}
                                                title={color.color}
                                                onClick={() => seleccionarColor(producto.id, color.codigo)}
                                                className={`w-6 h-6 rounded-full border-2 cursor-pointer transition-transform duration-200 ${isSelected
                                                    ? 'border-pink-500 ring-2 ring-pink-300 scale-110'
                                                    : 'border-zinc-300 dark:border-zinc-600'
                                                    }`}
                                                style={{ backgroundColor: color.codigo }}
                                            />
                                        );
                                    })}
                                </div>
                            )}

                            <div className="flex justify-end mt-4">
                                <Link
                                    to={`/detalle/${producto.id}`}
                                    className="text-sm text-blue-500 font-medium hover:underline"
                                >
                                    Ver detalle
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Mañanitas;
