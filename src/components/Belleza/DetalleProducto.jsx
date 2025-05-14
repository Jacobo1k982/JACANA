import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Dialog } from '@headlessui/react';

const DetalleProducto = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [producto, setProducto] = useState(null);
    const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
    const [modalAbierto, setModalAbierto] = useState(false);
    const [indexActual, setIndexActual] = useState(0);

    useEffect(() => {
        fetch('/data/productos.json')
            .then((res) => res.json())
            .then((data) => {
                const productoEncontrado = data.find(p => p.id.toString() === id);
                setProducto(productoEncontrado);
                if (productoEncontrado?.imagenes?.length > 0) {
                    setImagenSeleccionada(productoEncontrado.imagenes[0]);
                    setIndexActual(0);
                }
            })
            .catch((err) => console.error('Error cargando detalles:', err));
    }, [id]);

    const abrirModal = (index) => {
        setIndexActual(index);
        setImagenSeleccionada(producto.imagenes[index]);
        setModalAbierto(true);
    };

    const mostrarAnterior = () => {
        const nuevoIndex = (indexActual - 1 + producto.imagenes.length) % producto.imagenes.length;
        setIndexActual(nuevoIndex);
        setImagenSeleccionada(producto.imagenes[nuevoIndex]);
    };

    const mostrarSiguiente = () => {
        const nuevoIndex = (indexActual + 1) % producto.imagenes.length;
        setIndexActual(nuevoIndex);
        setImagenSeleccionada(producto.imagenes[nuevoIndex]);
    };

    if (!producto) {
        return <div className="p-4 text-center">Cargando producto...</div>;
    }

    return (
        <div className="p-6 max-w-5xl mx-auto mt-20">
            <button
                onClick={() => navigate('/belleza')}
                className="mb-6 inline-flex items-center gap-2 bg-600 text-black px-4 py-2 rounded hover:bg-700 transition"
            >
                ← Regresar
            </button>

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <div className="w-full cursor-pointer" onClick={() => abrirModal(indexActual)}>
                        <img
                            src={imagenSeleccionada}
                            alt="Producto principal"
                            className="w-full rounded-lg shadow-md object-contain max-h-[500px] mx-auto"
                        />
                    </div>

                    <div className="flex gap-3 mt-4 justify-center flex-wrap">
                        {producto.imagenes.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Miniatura ${index + 1}`}
                                onClick={() => {
                                    setImagenSeleccionada(img);
                                    setIndexActual(index);
                                }}
                                className={`w-20 h-20 object-cover rounded border-2 cursor-pointer ${img === imagenSeleccionada ? 'border-blue-500 ring-2 ring-blue-300' : 'border-gray-300'}`}
                            />
                        ))}
                    </div>
                </div>

                <div>
                    <h1 className="text-3xl font-bold mb-2">{producto.titulo}</h1>
                    <p className="text-gray-600 mb-2">{producto.subtitulo}</p>
                    <p className="text-blue-600 font-bold text-2xl mb-4">
                        ₡{producto.precio.toFixed(2)}
                    </p>

                    <div className="mt-6">
                        <h2 className="text-xl font-bold mb-2">Detalles</h2>
                        <p className="text-gray-700">{producto.detalles}</p>
                    </div>

                    <div className="mt-4">
                        <h2 className="text-xl font-bold mb-2">Ingredientes</h2>
                        <p className="text-gray-700">{producto.ingredientes}</p>
                    </div>

                    {producto.colores && (
                        <div className="mb-6">
                            <h3 className="font-semibold mb-2">Colores disponibles:</h3>
                            <div className="flex gap-3">
                                {producto.colores.map((color, i) => (
                                    <div
                                        key={i}
                                        className="w-6 h-6 rounded-full border border-gray-400"
                                        title={color.color}
                                        style={{ backgroundColor: color.codigo }}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Beneficios desde producto.beneficios */}
            {producto.beneficios?.length > 0 && (
                <div className="mt-12 bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto border border-gray-200">
                    <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Beneficios de nuestros productos</h2>
                    <ul className="space-y-3">
                        {producto.beneficios.map((beneficio, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-700 text-base md:text-lg">
                                <span className="text-green-500 text-xl">✔️</span>
                                <span>{beneficio}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Modal de imagen */}
            <Dialog open={modalAbierto} onClose={() => setModalAbierto(false)} className="relative z-50">
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
                    <Dialog.Panel className="relative animate-scale-in p-4">
                        <button
                            onClick={() => setModalAbierto(false)}
                            className="absolute top-2 right-2 bg-white text-black rounded-full p-2 shadow-lg hover:bg-gray-200 z-50"
                        >
                            ✕
                        </button>
                        <button
                            onClick={mostrarAnterior}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-lg hover:bg-gray-200 z-50"
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
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-lg hover:bg-gray-200 z-50"
                        >
                            ›
                        </button>
                    </Dialog.Panel>
                </div>
            </Dialog>

            {/* Animación */}
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
