import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import { useDispatch } from 'react-redux';
import { setAddItemToCart, setOpenCart } from '../../../app/CartSlice';
import { Helmet } from 'react-helmet';

const DetalleProductoMañanitas = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [detalle, setDetalle] = useState(null);
    const [colorSeleccionado, setColorSeleccionado] = useState(null);
    const [tallaSeleccionada, setTallaSeleccionada] = useState(null);
    const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
    const [modalAbierto, setModalAbierto] = useState(false);
    const [indexActual, setIndexActual] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('/Data/Ropa/Mujer/mañanitas.json')
            .then(res => res.json())
            .then(data => {
                const producto = data.find(p => p.id.toString() === id.toString());
                if (producto) {
                    setDetalle(producto);
                }
                setIsLoading(false);
            });
    }, [id]);

    useEffect(() => {
        if (!detalle) return;

        if (!colorSeleccionado && detalle.colores?.length)
            setColorSeleccionado(detalle.colores[0].color);

        if (!imagenSeleccionada && detalle.imagenes?.length)
            setImagenSeleccionada(detalle.imagenes[0]);

        if (!tallaSeleccionada && detalle.tallas?.length) {
            const disponible = detalle.tallas.find(t => t.disponible);
            if (disponible) setTallaSeleccionada(disponible.valor);
        }
    }, [detalle]);

    const abrirModal = (index) => {
        setIndexActual(index);
        setImagenSeleccionada(detalle.imagenes[index]);
        setModalAbierto(true);
    };

    const handleComprar = () => {
        if (!detalle || !colorSeleccionado || !tallaSeleccionada || !imagenSeleccionada) return;

        dispatch(setAddItemToCart({
            id: detalle.id,
            title: detalle.titulo,
            text: detalle.subtitulo,
            img: imagenSeleccionada,
            price: detalle.precio,
            color: colorSeleccionado,
            talla: tallaSeleccionada,
            shadow: "shadow-md",
        }));

        dispatch(setOpenCart());
    };

    const mostrarAnterior = () => {
        const nuevoIndex = (indexActual - 1 + detalle.imagenes.length) % detalle.imagenes.length;
        setIndexActual(nuevoIndex);
        setImagenSeleccionada(detalle.imagenes[nuevoIndex]);
    };

    const mostrarSiguiente = () => {
        const nuevoIndex = (indexActual + 1) % detalle.imagenes.length;
        setIndexActual(nuevoIndex);
        setImagenSeleccionada(detalle.imagenes[nuevoIndex]);
    };

    if (isLoading || !detalle) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-pulse text-lg font-medium">Cargando producto...</div>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-6xl mx-auto mt-20 text-gray-800 dark:text-gray-200">
            <Helmet>
                <title>{detalle.titulo} - Tienda Mañanitas</title>
            </Helmet>

            <button
                onClick={() => navigate('/mañanitas')}
                className="mb-6 inline-flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
                ← Regresar
            </button>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Imagen principal */}
                <div>
                    <div className="cursor-pointer" onClick={() => abrirModal(indexActual)}>
                        <img loading="lazy" src={imagenSeleccionada} alt="Producto" className="w-full rounded-xl shadow-lg object-contain max-h-[500px]" />
                    </div>

                    <div className="flex gap-3 mt-4 justify-center flex-wrap">
                        {detalle.imagenes.map((img, index) => (
                            <img
                                loading="lazy"
                                key={index}
                                src={img}
                                alt={`Vista ${index + 1}`}
                                onClick={() => {
                                    setImagenSeleccionada(img);
                                    setIndexActual(index);
                                }}
                                className={`w-20 h-20 object-cover rounded-lg border-2 cursor-pointer transition-transform duration-200 hover:scale-105 ${img === imagenSeleccionada ? 'border-blue-500 ring-2 ring-blue-300' : 'border-gray-300 dark:border-gray-600'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Información del producto */}
                <div className="flex flex-col justify-between">
                    <div>
                        <h1 className="text-4xl font-bold mb-2">{detalle.titulo}</h1>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">{detalle.subtitulo}</p>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold text-2xl mb-4">₡{detalle.precio.toFixed(2)}</p>

                        {/* Colores */}
                        <div className="mb-6">
                            <h3 className="font-semibold mb-2">Colores disponibles:</h3>
                            <div className="flex gap-3 mb-2">
                                {detalle.colores.map((color, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setColorSeleccionado(color.color)}
                                        className={`w-7 h-7 rounded-full border-2 ${color.color === colorSeleccionado ? 'border-black dark:border-white' : 'border-gray-300 dark:border-gray-600'}`}
                                        style={{ backgroundColor: color.codigo }}
                                        title={color.color}
                                        aria-label={`Seleccionar color ${color.color}`}
                                    />
                                ))}
                            </div>
                            <p className="text-sm">Color seleccionado: <span className="font-medium">{colorSeleccionado}</span></p>
                        </div>

                        {/* Tallas */}
                        <div className="mb-6">
                            <h3 className="font-semibold mb-2">Tallas disponibles:</h3>
                            <div className="flex gap-3 mb-2 flex-wrap">
                                {detalle.tallas.map((talla, i) => (
                                    <button
                                        key={i}
                                        onClick={() => talla.disponible && setTallaSeleccionada(talla.valor)}
                                        disabled={!talla.disponible}
                                        className={`
                      px-4 py-2 border rounded-lg font-medium transition
                      ${talla.valor === tallaSeleccionada ? 'bg-blue-500 text-white' : 'bg-white dark:bg-gray-700 text-black dark:text-white'}
                      ${talla.disponible ? 'border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600' : 'line-through text-gray-400 border-gray-200 dark:border-gray-600 cursor-not-allowed'}
                    `}
                                        title={!talla.disponible ? "Agotada" : ""}
                                    >
                                        {talla.valor}
                                        {!talla.disponible && <span className="ml-1 text-xs text-red-500">(Agotada)</span>}
                                    </button>
                                ))}
                            </div>
                            <p className="text-sm">Talla seleccionada: <span className="font-medium">{tallaSeleccionada}</span></p>
                        </div>

                        {/* Botón de compra */}
                        <div className="flex justify-between mt-10">
                            <button
                                onClick={handleComprar}
                                disabled={!tallaSeleccionada || !colorSeleccionado || !imagenSeleccionada}
                                className={`bg-blue-500 hover:bg-cyan-500 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out ${(!tallaSeleccionada || !colorSeleccionado || !imagenSeleccionada) ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                Comprar
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Beneficios */}
            {detalle.beneficios?.length > 0 && (
                <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 max-w-4xl mx-auto border border-gray-200 dark:border-gray-600">
                    <h2 className="text-2xl font-bold mb-4 text-center">Beneficios del producto</h2>
                    <ul className="space-y-3">
                        {detalle.beneficios.map((b, i) => (
                            <li key={i} className="flex items-start gap-3 text-base">
                                <span className="text-green-500 text-xl">✔️</span>
                                <span>{b}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Modal */}
            <Dialog open={modalAbierto} onClose={() => setModalAbierto(false)} className="relative z-50">
                <div className="fixed inset-0 bg-black/90 flex items-center justify-center">
                    <Dialog.Panel className="relative animate-scale-in p-4">
                        <button onClick={() => setModalAbierto(false)} aria-label="Cerrar" className="absolute top-2 right-2 bg-white dark:bg-gray-700 text-black dark:text-white rounded-full p-2 shadow-lg hover:bg-gray-200 dark:hover:bg-gray-600 z-50">✕</button>
                        <button onClick={mostrarAnterior} aria-label="Anterior" className="absolute left-2 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 text-black dark:text-white rounded-full p-2 shadow-lg hover:bg-gray-200 dark:hover:bg-gray-600 z-50">‹</button>
                        <img src={imagenSeleccionada} alt="Imagen ampliada" className="max-w-full max-h-screen object-contain rounded-md" />
                        <button onClick={mostrarSiguiente} aria-label="Siguiente" className="absolute right-2 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 text-black dark:text-white rounded-full p-2 shadow-lg hover:bg-gray-200 dark:hover:bg-gray-600 z-50">›</button>
                    </Dialog.Panel>
                </div>
            </Dialog>

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

export default DetalleProductoMañanitas;
