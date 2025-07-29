// ProductCard.jsx - Versión Premium ✨
import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const ProductCard = ({ product, onImageClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const cardImageUrl = product.portada
        ? product.portada
        : product.imagenes && product.imagenes.length > 0
            ? product.imagenes[0]
            : 'https://via.placeholder.com/200x200.png?text=No+Image';

    // Generar estrellas reales
    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <StarIcon
                key={i}
                className={`w-4 h-4 ${i < (rating || 0) ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
            />
        ));
    };

    return (
        <div
            className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 w-64 sm:w-60 xs:w-52 flex-shrink-0 snap-start flex flex-col rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform group"
            style={{
                transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0)',
                borderRadius: '1.2rem',
                border: '1px solid rgba(255,255,255,0.1)',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Imagen con efecto zoom */}
            <div className="relative h-48 sm:h-44 xs:h-40 bg-gray-50 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                <img
                    src={cardImageUrl}
                    alt={product.nombre}
                    onLoad={() => setImageLoaded(true)}
                    className={`max-h-full max-w-full object-contain cursor-pointer transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'
                        }`}
                    onClick={() => onImageClick(product)}
                    style={{
                        filter: imageLoaded ? 'none' : 'blur(8px)',
                        opacity: imageLoaded ? 1 : 0.7,
                    }}
                />

                {/* Badge animado */}
                {product.badge && (
                    <motionBadge
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                        className={`absolute top-2 text-xs font-bold uppercase px-2 py-1 rounded-full text-white shadow-lg ${product.badge.toUpperCase() === 'NEW'
                                ? 'left-2 bg-gradient-to-r from-emerald-500 to-teal-500'
                                : 'right-2 bg-gradient-to-r from-purple-500 to-pink-500'
                            }`}
                    >
                        {product.badge}
                    </motionBadge>
                )}

                {/* Overlay de hover */}
                <div
                    className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                />
            </div>

            {/* Contenido */}
            <div className="p-4 text-center flex flex-col flex-grow">
                {/* Rating */}
                {typeof product.rating === 'number' && typeof product.reviews === 'number' && (
                    <div className="text-left text-xs mb-2 flex items-center gap-1">
                        <div className="flex">{renderStars(product.rating)}</div>
                        <span className="ml-1 text-gray-500 dark:text-gray-400 text-xs">({product.reviews})</span>
                    </div>
                )}

                {/* Categoría */}
                {product.category && (
                    <h3 className="text-xs uppercase font-semibold text-gray-600 dark:text-gray-300 truncate h-6 mb-1">
                        {product.category}
                    </h3>
                )}

                {/* Precio */}
                {typeof product.price === 'number' && (
                    <div className="mb-2 h-10 flex items-center justify-center">
                        {product.originalPrice && typeof product.originalPrice === 'number' ? (
                            <div className="text-lg font-bold flex items-center">
                                <span className="text-gray-500 dark:text-gray-400 line-through mr-2 text-sm">
                                    ₡{product.originalPrice.toLocaleString('es-CR', { minimumFractionDigits: 2 })}
                                </span>
                                <span className="text-red-600 font-bold">
                                    ₡{product.price.toLocaleString('es-CR', { minimumFractionDigits: 2 })}
                                </span>
                            </div>
                        ) : (
                            <p className="text-lg font-bold text-gray-800 dark:text-white">
                                ₡{product.price.toLocaleString('es-CR', { minimumFractionDigits: 2 })}
                            </p>
                        )}
                    </div>
                )}

                {/* Descripción */}
                {product.description && (
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 h-10 overflow-hidden leading-tight">
                        {product.description}
                    </p>
                )}

                {/* Nombre del producto */}
                <p className="text-sm font-semibold mb-2 uppercase text-gray-900 dark:text-white truncate">
                    {product.nombre}
                </p>

                {/* Tallas disponibles */}
                {Array.isArray(product.tallas) && product.tallas.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-1 mb-3">
                        {product.tallas.map((talla, index) => (
                            <span
                                key={index}
                                className={`text-xs border px-2 py-0.5 rounded-full text-xs ${talla.disponible
                                        ? 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200'
                                        : 'line-through text-orange-500 border-orange-300 dark:border-orange-700 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/30'
                                    }`}
                            >
                                {talla.numero}
                            </span>
                        ))}
                    </div>
                )}

                {/* Botón con efecto premium */}
                <button
                    onClick={() => onImageClick(product)}
                    className="group/btn relative bg-black dark:bg-white text-white dark:text-black uppercase text-sm py-2.5 px-4 w-full rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-black/20 dark:hover:shadow-black/30"
                    style={{
                        background: 'linear-gradient(145deg, #111, #333)',
                        border: '1px solid #444',
                    }}
                >
                    <span className="relative z-10 flex items-center justify-center gap-1">
                        Ver Detalles
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                    {/* Efecto de brillo al hover */}
                    <span
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"
                        style={{ transform: 'translateX(-100%)' }}
                    />
                </button>
            </div>
        </div>
    );
};

// Componente de badge animado
const motionBadge = ({ children, className, ...props }) => (
    <div className={className} {...props}>
        {children}
    </div>
);

export default ProductCard;