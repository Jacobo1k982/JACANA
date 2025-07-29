// DetalleProducto.jsx - Versión Premium ✨
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import { useDispatch } from 'react-redux';
import { setAddItemToCart, setOpenCart } from '../../app/CartSlice';
import { motion, AnimatePresence } from 'framer-motion';
import { StarIcon, XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const DetalleProducto = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [producto, setProducto] = useState(null);
    const [colorSeleccionado, setColorSeleccionado] = useState('');
    const [imagenSeleccionada, setImagenSeleccionada] = useState('');
    const [indexActual, setIndexActual] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();

    // Cargar producto
    useEffect(() => {
        setIsLoading(true);
        fetch('/data/productos.json')
            .then((res) => res.json())
            .then((data) => {
                const productoEncontrado = data.find((p) => p.id.toString() === id);
                if (productoEncontrado) {
                    setProducto(productoEncontrado);
                    const colorInicial = productoEncontrado.colores?.[0]?.color || '';
                    setColorSeleccionado(colorInicial);
                    let imagenesIniciales = [];

                    if (productoEncontrado.imagenesPorColor && colorInicial) {
                        imagenesIniciales = productoEncontrado.imagenesPorColor[colorInicial] || [];
                    }
                    if (imagenesIniciales.length === 0 && productoEncontrado.imagenes?.length > 0) {
                        imagenesIniciales = productoEncontrado.imagenes;
                    }
                    if (imagenesIniciales.length > 0) {
                        setImagenSeleccionada(imagenesIniciales[0]);
                        setIndexActual(0);
                    }
                }
                setTimeout(() => setIsLoading(false), 600); // Simular carga real
            })
            .catch((err) => {
                console.error('Error cargando detalles:', err);
                setIsLoading(false);
            });
    }, [id]);

    if (isLoading || !producto) {
        return (
            <div className="p-8 max-w-6xl mx-auto mt-20">
                <div className="animate-pulse space-y-6">
                    <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg w-32"></div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
                            <div className="flex gap-3 justify-center">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
                            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-40"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const imagenesColorActual =
        (producto.imagenesPorColor?.[colorSeleccionado] || producto.imagenes) || [];

    const abrirModal = (index) => {
        setIndexActual(index);
        setImagenSeleccionada(imagenesColorActual[index]);
        setIsModalOpen(true);
    };

    const mostrarAnterior = () => {
        const nuevoIndex = (indexActual - 1 + imagenesColorActual.length) % imagenesColorActual.length;
        setIndexActual(nuevoIndex);
        setImagenSeleccionada(imagenesColorActual[nuevoIndex]);
    };

    const mostrarSiguiente = () => {
        const nuevoIndex = (indexActual + 1) % imagenesColorActual.length;
        setIndexActual(nuevoIndex);
        setImagenSeleccionada(imagenesColorActual[nuevoIndex]);
    };

    // Variantes de animación
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.98 },
        visible: { opacity: 1, scale: 1 },
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
    };

    return (
        <div className="p-6 max-w-6xl mx-auto mt-20 text-gray-800 dark:text-gray-100 transition-colors duration-500">
            {/* Botón de regreso */}
            <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => navigate('/belleza')}
                className="mb-8 inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white px-5 py-2.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-sm border border-gray-200 dark:border-gray-700"
            >
                ← Regresar
            </motion.button>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-2 gap-10"
            >
                {/* Imagen principal */}
                <div className="space-y-4">
                    <motion.div
                        variants={imageVariants}
                        className="cursor-pointer group"
                        onClick={() => abrirModal(indexActual)}
                    >
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105">
                            <img
                                src={imagenSeleccionada}
                                alt="Producto principal"
                                className="w-full object-contain max-h-[520px] transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
                            <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-black/80 text-xs px-2 py-1 rounded-full shadow-sm">
                                Ampliar
                            </div>
                        </div>
                    </motion.div>

                    {/* Miniaturas con efecto 3D */}
                    <div className="flex gap-3 justify-center flex-wrap mt-4">
                        {imagenesColorActual.map((img, index) => (
                            <motion.button
                                key={index}
                                whileHover={{ y: -4, scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    setImagenSeleccionada(img);
                                    setIndexActual(index);
                                }}
                                className={`relative w-20 h-20 rounded-xl overflow-hidden border-3 transition-all duration-300 ${img === imagenSeleccionada
                                        ? 'border-blue-500 dark:border-blue-400 shadow-lg scale-105'
                                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                                    }`}
                            >
                                <img src={img} alt={`Miniatura ${index + 1}`} className="w-full h-full object-cover" />
                                {img === imagenSeleccionada && (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="absolute inset-0 bg-blue-500/20 rounded-xl"
                                    />
                                )}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Información del producto */}
                <div className="flex flex-col justify-between space-y-6">
                    <div className="space-y-5">
                        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{producto.titulo}</h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300">{producto.subtitulo}</p>

                        {/* Rating opcional */}
                        {producto.rating && (
                            <div className="flex items-center gap-1">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon
                                            key={i}
                                            className={`w-5 h-5 ${i < producto.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                        />
                                    ))}
                                </div>
                                <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                                    ({producto.reviews || 0} reseñas)
                                </span>
                            </div>
                        )}

                        {/* Precio */}
                        <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                            ₡{producto.precio.toLocaleString('es-CR', { minimumFractionDigits: 2 })}
                        </p>

                        {/* Selector de colores */}
                        <div className="mb-6">
                            <h3 className="font-semibold text-lg mb-3">Colores disponibles:</h3>
                            <div className="flex gap-4 flex-wrap">
                                {producto.colores.map((color, i) => (
                                    <button
                                        key={i}
                                        onClick={() => {
                                            setColorSeleccionado(color.color);
                                            const nuevasImagenes = producto.imagenesPorColor?.[color.color] || [];
                                            setImagenSeleccionada(nuevasImagenes[0] || producto.imagenes[0]);
                                            setIndexActual(0);
                                        }}
                                        className={`w-9 h-9 rounded-full border-4 transition-all duration-300 transform hover:scale-110 ${color.color === colorSeleccionado
                                                ? 'border-black dark:border-white scale-110 shadow-lg'
                                                : 'border-gray-300 dark:border-gray-600 hover:border-gray-400'
                                            }`}
                                        style={{ backgroundColor: color.codigo }}
                                        title={color.color}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Detalles */}
                        <div className="space-y-4">
                            {producto.detalles && (
                                <div>
                                    <h2 className="text-xl font-bold mb-2">Detalles</h2>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{producto.detalles}</p>
                                </div>
                            )}

                            {producto.ingredientes && (
                                <div>
                                    <h2 className="text-xl font-bold mb-2">Ingredientes</h2>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{producto.ingredientes}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Botón de compra */}
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                            dispatch(
                                setAddItemToCart({
                                    id: producto.id,
                                    title: producto.titulo,
                                    text: producto.subtitulo,
                                    img: imagenSeleccionada,
                                    price: producto.precio,
                                    color: colorSeleccionado,
                                    shadow: 'shadow-lg',
                                })
                            );
                            dispatch(setOpenCart());
                        }}
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold text-lg py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform relative overflow-hidden group"
                    >
                        <span className="relative z-10">Comprar ahora</span>
                        <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </motion.button>
                </div>
            </motion.div>

            {/* Beneficios */}
            {producto.beneficios?.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 max-w-4xl mx-auto border border-gray-100 dark:border-gray-700"
                >
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
                        Beneficios del producto
                    </h2>
                    <ul className="space-y-4">
                        {producto.beneficios.map((beneficio, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * index }}
                                className="flex items-start gap-3 text-base text-gray-700 dark:text-gray-300"
                            >
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2 + 0.1 * index }}
                                    className="text-green-500 mt-0.5 flex-shrink-0"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </motion.span>
                                <span>{beneficio}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            )}

            {/* Modal de imagen ampliada */}
            <AnimatePresence>
                {isModalOpen && (
                    <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} as={motion.div} initialFocus>
                        <motion.div
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        >
                            <div className="fixed inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />

                            <Dialog.Panel className="relative max-w-4xl max-h-full z-10">
                                {/* Botón cerrar */}
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-white/30 transition z-20"
                                >
                                    <XMarkIcon className="w-6 h-6" />
                                </button>

                                {/* Flecha anterior */}
                                <button
                                    onClick={mostrarAnterior}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-white/30 transition z-20"
                                >
                                    <ChevronLeftIcon className="w-6 h-6" />
                                </button>

                                {/* Imagen ampliada */}
                                <img
                                    src={imagenSeleccionada}
                                    alt="Imagen ampliada"
                                    className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
                                />

                                {/* Flecha siguiente */}
                                <button
                                    onClick={mostrarSiguiente}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-white/30 transition z-20"
                                >
                                    <ChevronRightIcon className="w-6 h-6" />
                                </button>

                                {/* Indicador de progreso */}
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/30 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                                    {indexActual + 1} / {imagenesColorActual.length}
                                </div>
                            </Dialog.Panel>
                        </motion.div>
                    </Dialog>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DetalleProducto;