import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Dialog } from '@headlessui/react';

const DetalleProducto = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [producto, setProducto] = useState({ colores: [] });
    const [colorSeleccionado, setColorSeleccionado] = useState(null);
    const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
    const [modalAbierto, setModalAbierto] = useState(false);
    const [indexActual, setIndexActual] = useState(0);

    useEffect(() => {
        fetch('/data/productos.json')
            .then(res => res.json())
            .then(data => {
                const productoEncontrado = data.find(p => p.id.toString() === id);
                if (productoEncontrado) {
                    setProducto(productoEncontrado);

                    const colorInicial = productoEncontrado.colores?.[0]?.color;
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
            })
            .catch(err => console.error('Error cargando detalles:', err));
    }, [id]);

    if (!producto || !colorSeleccionado) {
        return <div className="p-4 text-center text-gray-700 dark:text-gray-200">Cargando producto...</div>;
    }

    const imagenesColorActual =
        (producto.imagenesPorColor?.[colorSeleccionado] || producto.imagenes) || [];

    const abrirModal = (index) => {
        setIndexActual(index);
        setImagenSeleccionada(imagenesColorActual[index]);
        setModalAbierto(true);
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

    return (
        <div className="p-6 max-w-6xl mx-auto mt-20 text-gray-800 dark:text-gray-200">
            <button
                onClick={() => navigate('/belleza')}
                className="mb-6 inline-flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
                ← Regresar
            </button>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Imagen principal */}
                <div>
                    <div className="cursor-pointer" onClick={() => abrirModal(indexActual)}>
                        <img
                            src={imagenSeleccionada}
                            alt="Producto principal"
                            className="w-full rounded-xl shadow-lg object-contain max-h-[500px]"
                        />
                    </div>

                    {/* Miniaturas */}
                    <div className="flex gap-3 mt-4 justify-center flex-wrap">
                        {imagenesColorActual.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Miniatura ${index + 1}`}
                                onClick={() => {
                                    setImagenSeleccionada(img);
                                    setIndexActual(index);
                                }}
                                className={`w-20 h-20 object-cover rounded-lg border-2 cursor-pointer ${img === imagenSeleccionada
                                        ? 'border-blue-500 ring-2 ring-blue-300'
                                        : 'border-gray-300 dark:border-gray-600'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Info producto */}
                <div>
                    <h1 className="text-4xl font-bold mb-2">{producto.titulo}</h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">{producto.subtitulo}</p>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold text-2xl mb-4">
                        ₡{producto.precio.toFixed(2)}
                    </p>

                    {/* Colores */}
                    <div className="mb-6">
                        <h3 className="font-semibold mb-2">Colores disponibles:</h3>
                        <div className="flex gap-3">
                            {producto.colores.map((color, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        setColorSeleccionado(color.color);
                                        const nuevasImagenes = producto.imagenesPorColor?.[color.color] || [];
                                        setImagenSeleccionada(nuevasImagenes[0] || null);
                                        setIndexActual(0);
                                    }}
                                    className={`w-7 h-7 rounded-full border-2 ${color.color === colorSeleccionado ? 'border-black dark:border-white' : 'border-gray-300 dark:border-gray-600'
                                        }`}
                                    style={{ backgroundColor: color.codigo }}
                                    title={color.color}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Detalles */}
                    <div className="mt-6">
                        <h2 className="text-xl font-bold mb-2">Detalles</h2>
                        <p className="text-gray-700 dark:text-gray-300">{producto.detalles}</p>
                    </div>

                    {/* Ingredientes */}
                    <div className="mt-4">
                        <h2 className="text-xl font-bold mb-2">Ingredientes</h2>
                        <p className="text-gray-700 dark:text-gray-300">{producto.ingredientes}</p>
                    </div>
                </div>
            </div>

            {/* Beneficios */}
            {producto.beneficios?.length > 0 && (
                <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 max-w-4xl mx-auto border border-gray-200 dark:border-gray-600">
                    <h2 className="text-2xl font-bold mb-4 text-center">Beneficios del producto</h2>
                    <ul className="space-y-3">
                        {producto.beneficios.map((beneficio, index) => (
                            <li key={index} className="flex items-start gap-3 text-base">
                                <span className="text-green-500 text-xl">✔️</span>
                                <span>{beneficio}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Modal ampliado */}
            <Dialog open={modalAbierto} onClose={() => setModalAbierto(false)} className="relative z-50">
                <div className="fixed inset-0 bg-black/90 flex items-center justify-center">
                    <Dialog.Panel className="relative animate-scale-in p-4">
                        <button
                            onClick={() => setModalAbierto(false)}
                            className="absolute top-2 right-2 bg-white dark:bg-gray-700 text-black dark:text-white rounded-full p-2 shadow-lg hover:bg-gray-200 dark:hover:bg-gray-600 z-50"
                        >
                            ✕
                        </button>
                        <button
                            onClick={mostrarAnterior}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 text-black dark:text-white rounded-full p-2 shadow-lg hover:bg-gray-200 dark:hover:bg-gray-600 z-50"
                        >
                            ‹
                        </button>
                        <img
                            src={imagenSeleccionada}
                            alt="Imagen ampliada"
                            className="max-w-full max-h-screen object-contain rounded-md"
                        />
                        <button
                            onClick={mostrarSiguiente}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 text-black dark:text-white rounded-full p-2 shadow-lg hover:bg-gray-200 dark:hover:bg-gray-600 z-50"
                        >
                            ›
                        </button>
                    </Dialog.Panel>
                </div>
            </Dialog>

            {/* Animación modal */}
            <style>
                {`
          @keyframes scaleIn {
            0% { transform: scale(0.9); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-scale-in {
            animation: scaleIn 0.25s ease-out;
          }
        `}
            </style>
        </div>
    );
};

export default DetalleProducto;
