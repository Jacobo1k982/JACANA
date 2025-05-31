import React from 'react';

// No es necesario 'onImageClick' si el ProductCard no necesita hacer nada más
// que llamar a la función que se le pasa. La prop se llamará onImageClick desde Trend,
// pero aquí la recibimos y la usamos directamente.
const ProductCard = ({ product, onImageClick }) => {
    const renderStars = (rating) => {
        let stars = '';
        const totalStars = 5;
        for (let i = 0; i < totalStars; i++) {
            stars += i < (rating || 0) ? '★' : '☆';
        }
        return stars;
    };

    // Si el producto tiene múltiples imágenes, usamos la primera como portada para la tarjeta.
    // El modal se encargará de mostrar todas las imágenes del producto.
    const cardImageUrl = product.imagenes && product.imagenes.length > 0
        ? product.imagenes[0] // Mostrar siempre la primera imagen en la tarjeta
        : 'https://via.placeholder.com/200x200.png?text=No+Image';

    return (
        // El product.id ya está siendo usado como key en Trend.jsx en el .map()
        <div className="bg-white text-black w-60 flex-shrink-0 snap-start flex flex-col">
            <div className="relative">
                <img
                    src={cardImageUrl}
                    alt={product.nombre}
                    className="w-full h-48 object-cover cursor-pointer" // cursor-pointer indica que es clickeable
                    onClick={() => onImageClick(product)} // Pasa el objeto 'product' completo
                />
                {product.badge && (
                    <span
                        className={`absolute top-2 text-xs font-semibold uppercase text-white py-1 px-2 ${product.badge.toUpperCase() === 'NEW' ? 'left-2 bg-black bg-opacity-70' : 'right-2 bg-black bg-opacity-70'
                            }`}
                    >
                        {product.badge}
                    </span>
                )}
            </div>
            <div className="p-4 text-center flex flex-col flex-grow">
                {typeof product.rating === 'number' && typeof product.reviews === 'number' && (
                    <div className="text-left text-xs mb-2">
                        <span className="text-yellow-500">{renderStars(product.rating)}</span>
                        <span className="ml-1 text-gray-500">({product.reviews})</span>
                    </div>
                )}
                {product.category && (
                    <h3 className="text-xs uppercase text-gray-700 font-semibold truncate h-8 mb-1 flex items-center justify-center">
                        {product.category}
                    </h3>
                )}
                {typeof product.price === 'number' && (
                    <div className="mb-2 h-10 flex items-center justify-center">
                        {product.originalPrice && typeof product.originalPrice === 'number' ? (
                            <div className="text-lg font-bold">
                                <span className="text-gray-500 line-through mr-2 text-sm">${product.originalPrice.toFixed(2)}</span>
                                <span className="text-red-600">${product.price.toFixed(2)}</span>
                            </div>
                        ) : (
                            <p className="text-lg font-bold">₡{product.price.toFixed(2)}</p>
                        )}
                    </div>
                )}
                {product.description && (
                    <p className="text-xs text-gray-600 mb-3 h-10 overflow-hidden">
                        {product.description}
                    </p>
                )}
                <div className="mt-auto">
                    <p className="text-sm font-semibold mb-3 uppercase">{product.nombre}</p>
                    <button
                        onClick={() => onImageClick(product)} // También el botón puede abrir detalles
                        className="bg-black text-white uppercase text-sm py-2.5 px-4 w-full hover:bg-gray-800 transition-colors"
                    >
                        Ver Detalles {/* O "Añadir a la bolsa" si va directo a eso y detalles en otro lado */}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;