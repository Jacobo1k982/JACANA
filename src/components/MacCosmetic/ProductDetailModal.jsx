import React, { useState, useEffect } from 'react';

const ProductDetailModal = ({ product, isOpen, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        setCurrentImageIndex(0);
    }, [product]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !product) {
        return null;
    }

    const totalImages = product.imagenes?.length || 0;

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
    };

    const currentImageUrl = product.imagenes && totalImages > 0
        ? product.imagenes[currentImageIndex]
        : 'https://via.placeholder.com/400x400.png?text=No+Image';

    const renderStars = (rating) => {
        let stars = '';
        const totalStars = 5;
        for (let i = 0; i < totalStars; i++) {
            stars += i < (rating || 0) ? '★' : '☆';
        }
        return stars;
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ease-in-out"
            onClick={onClose}
        >
            <div
                className="bg-white dark:bg-zinc-900 rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Sección de Imagen */}
                <div className="w-full md:w-1/2 p-4 flex flex-col items-center justify-center relative bg-gray-100 dark:bg-zinc-800">
                    <img
                        src={currentImageUrl}
                        alt={product.nombre}
                        className="max-w-full max-h-80 md:max-h-96 object-contain rounded"
                    />
                    {totalImages > 1 && (
                        <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-16">
                            <button /* ... Botones de carrusel de imagen ... */ >&larr;</button>
                            <button /* ... Botones de carrusel de imagen ... */ >&rarr;</button>
                        </div>
                    )}
                    {totalImages > 1 && (
                        <div className="text-xs text-center text-gray-600 dark:text-gray-400 mt-2"> {/* Ya es text-xs */}
                            {currentImageIndex + 1} / {totalImages}
                        </div>
                    )}
                </div>

                {/* Sección de Detalles */}
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-between overflow-y-auto">
                    <div>
                        {product.category && (
                            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1"> {/* sm -> xs */}
                                {product.category}
                            </p>
                        )}
                        <h2 className="text-xl font-bold text-black dark:text-white mb-2">{/* 3xl -> xl */}
                            {product.nombre}
                        </h2>

                        {typeof product.rating === 'number' && (
                            <div className="flex items-center mb-2">
                                <span className="text-yellow-500 text-md"> {/* xl -> md */}
                                    {renderStars(product.rating)}
                                </span>
                                {typeof product.reviews === 'number' && (
                                    <span className="ml-2 text-xs text-gray-600 dark:text-gray-300"> {/* sm -> xs */}
                                        ({product.reviews} reseñas)
                                    </span>
                                )}
                            </div>
                        )}

                        {product.longDescription && (
                            <div className="mb-3">
                                <h4 className="text-sm font-semibold text-black dark:text-white mb-1"> {/* md -> sm */}
                                    Descripción:
                                </h4>
                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line"> {/* base (default) -> sm */}
                                    {product.longDescription}
                                </p>
                            </div>
                        )}

                        {product.netWeight && (
                            <p className="text-xs text-gray-600 dark:text-gray-400 mb-3"> {/* sm -> xs */}
                                Contenido: {product.netWeight}
                            </p>
                        )}

                        {product.features && product.features.length > 0 && (
                            <div className="mb-3">
                                <h4 className="text-sm font-semibold text-black dark:text-white mb-1"> {/* md -> sm */}
                                    Características:
                                </h4>
                                <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1"> {/* base (default) -> sm */}
                                    {product.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {product.ingredients && (
                            <div className="mb-3">
                                <h4 className="text-sm font-semibold text-black dark:text-white mb-1"> {/* md -> sm */}
                                    Ingredientes:
                                </h4>
                                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed"> {/* Mantenido en xs */}
                                    {product.ingredients}
                                </p>
                            </div>
                        )}

                        {product.howToUse && (
                            <div className="mb-3">
                                <h4 className="text-sm font-semibold text-black dark:text-white mb-1"> {/* md -> sm */}
                                    Modo de Uso:
                                </h4>
                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line"> {/* base (default) -> sm */}
                                    {product.howToUse}
                                </p>
                            </div>
                        )}

                        {typeof product.price === 'number' && (
                            <div className="text-xl font-semibold text-black dark:text-white mb-4"> {/* 2xl -> xl */}
                                {product.originalPrice && typeof product.originalPrice === 'number' ? (
                                    <>
                                        <span className="text-gray-500 dark:text-gray-400 line-through mr-2 text-base"> {/* lg -> base */}
                                            ${product.originalPrice.toFixed(2)}
                                        </span>
                                        <span className="text-red-600 dark:text-red-500">${product.price.toFixed(2)}</span>
                                    </>
                                ) : (
                                    `$${product.price.toFixed(2)}`
                                )}
                            </div>
                        )}
                    </div>

                    <button className="w-full bg-black hover:bg-gray-800 dark:bg-sky-500 dark:hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-md uppercase text-sm transition-colors duration-150 mt-3"> {/* py-3 -> py-2, base (default) -> sm */}
                        Añadir a la bolsa
                    </button>
                </div>

                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white text-xl leading-none" /* top-4->3, right-4->3, 2xl->xl */
                    aria-label="Close modal"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

export default ProductDetailModal;