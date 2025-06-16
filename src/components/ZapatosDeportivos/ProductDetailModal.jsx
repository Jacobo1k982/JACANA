import React, { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const ProductDetailModal = ({ product, isOpen, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        setCurrentImageIndex(0);
    }, [product]);

    const totalImages = product?.imagenes?.length || 0;

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % totalImages);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
    };

    const currentImageUrl = product?.imagenes?.[currentImageIndex] || 'https://via.placeholder.com/400x400.png?text=No+Image';

    const renderStars = (rating) => {
        return '★'.repeat(Math.round(rating || 0)) + '☆'.repeat(5 - Math.round(rating || 0));
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white dark:bg-black p-0 shadow-xl transition-all">
                                <div className="flex flex-col md:flex-row max-h-[90vh] relative">
                                    {/* Imagen */}
                                    <div className="w-full md:w-1/2 bg-gray-100 dark:bg-zinc-900 p-4 flex items-center justify-center relative">
                                        <img
                                            src={currentImageUrl}
                                            alt={product?.nombre}
                                            className="max-w-full max-h-[24rem] object-contain rounded-lg transition-all duration-300"
                                        />
                                        {totalImages > 1 && (
                                            <div className="absolute bottom-3 left-0 right-0 flex justify-between px-6 text-xl text-white">
                                                <button onClick={prevImage} className="bg-black/50 hover:bg-black p-2 rounded-full transition">
                                                    &larr;
                                                </button>
                                                <button onClick={nextImage} className="bg-black/50 hover:bg-black p-2 rounded-full transition">
                                                    &rarr;
                                                </button>
                                            </div>
                                        )}
                                        {totalImages > 1 && (
                                            <div className="absolute bottom-2 right-2 text-xs text-white bg-black/60 px-2 py-1 rounded-md">
                                                {currentImageIndex + 1} / {totalImages}
                                            </div>
                                        )}
                                    </div>

                                    {/* Detalles */}
                                    <div className="w-full md:w-1/2 p-6 flex flex-col justify-between overflow-y-auto text-black dark:text-white">
                                        <div className="space-y-3">
                                            {product?.category && (
                                                <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
                                                    {product.category}
                                                </p>
                                            )}
                                            <h2 className="text-2xl font-bold">{product?.nombre}</h2>

                                            {typeof product?.rating === 'number' && (
                                                <div className="flex items-center space-x-2">
                                                    <span className="text-yellow-400">{renderStars(product.rating)}</span>
                                                    {typeof product.reviews === 'number' && (
                                                        <span className="text-xs text-gray-500 dark:text-gray-400">
                                                            ({product.reviews} reseñas)
                                                        </span>
                                                    )}
                                                </div>
                                            )}

                                            {product?.longDescription && (
                                                <div>
                                                    <h4 className="text-sm font-semibold mb-1">Descripción:</h4>
                                                    <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">{product.longDescription}</p>
                                                </div>
                                            )}

                                            {product?.netWeight && (
                                                <p className="text-xs text-gray-600 dark:text-gray-400">Contenido: {product.netWeight}</p>
                                            )}

                                            {product?.features?.length > 0 && (
                                                <div>
                                                    <h4 className="text-sm font-semibold mb-1">Características:</h4>
                                                    <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                                                        {product.features.map((feature, i) => (
                                                            <li key={i}>{feature}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {product?.ingredients && (
                                                <div>
                                                    <h4 className="text-sm font-semibold mb-1">Ingredientes:</h4>
                                                    <p className="text-xs text-gray-600 dark:text-gray-400">{product.ingredients}</p>
                                                </div>
                                            )}

                                            {product?.howToUse && (
                                                <div>
                                                    <h4 className="text-sm font-semibold mb-1">Modo de uso:</h4>
                                                    <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">{product.howToUse}</p>
                                                </div>
                                            )}

                                            {typeof product?.price === 'number' && (
                                                <div className="text-lg font-semibold mt-2">
                                                    {product.originalPrice && (
                                                        <span className="line-through text-gray-400 mr-2 text-base">${product.originalPrice.toFixed(2)}</span>
                                                    )}
                                                    <span className="text-black dark:text-white text-xl">
                                                        ₡{product.price.toFixed(2)}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        <button className="mt-4 bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black font-medium py-2 px-4 rounded-md uppercase tracking-wide transition-colors">
                                            Añadir a la bolsa
                                        </button>
                                    </div>

                                    {/* Botón cerrar */}
                                    <button
                                        onClick={onClose}
                                        className="absolute top-3 right-3 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white text-2xl"
                                        aria-label="Cerrar"
                                    >
                                        &times;
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default ProductDetailModal;
