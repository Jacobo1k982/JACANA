import React from 'react';

const ProductCard = ({ product, onImageClick }) => {
    const renderStars = (rating) => {
        let stars = '';
        const totalStars = 5;
        for (let i = 0; i < totalStars; i++) {
            stars += i < (rating || 0) ? '★' : '☆';
        }
        return stars;
    };

    const cardImageUrl = product.portada
        ? product.portada
        : product.imagenes && product.imagenes.length > 0
            ? product.imagenes[0]
            : 'https://via.placeholder.com/200x200.png?text=No+Image';


    return (
        <div className="bg-white text-black w-64 sm:w-60 xs:w-52 flex-shrink-0 snap-start flex flex-col shadow rounded-2xl overflow-hidden">
            <div className="relative h-48 sm:h-44 xs:h-40 bg-white flex items-center justify-center">
                <img
                    src={cardImageUrl}
                    alt={product.nombre}
                    className="max-h-full max-w-full object-contain cursor-pointer transition-transform hover:scale-105 duration-300"
                    onClick={() => onImageClick(product)}
                />
                {product.badge && (
                    <span
                        className={`absolute top-2 text-xs font-semibold uppercase text-white py-1 px-2 ${product.badge.toUpperCase() === 'NEW'
                            ? 'left-2 bg-black bg-opacity-70'
                            : 'right-2 bg-black bg-opacity-70'
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
                                <span className="text-gray-500 line-through mr-2 text-sm">
                                    ${product.originalPrice.toFixed(2)}
                                </span>
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
                    <p className="text-sm font-semibold mb-1 uppercase">{product.nombre}</p>

                    {/* Tallas disponibles */}
                    {Array.isArray(product.tallas) && product.tallas.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-1 mb-3">
                            {product.tallas.map((talla, index) => (
                                <span
                                    key={index}
                                    className={`text-xs border px-2 py-0.5 rounded ${talla.disponible
                                        ? 'border-gray-400 text-black'
                                        : 'line-through text-orange-500 border-orange-300'
                                        }`}
                                >
                                    {talla.numero}
                                </span>
                            ))}
                        </div>
                    )}

                    <button
                        onClick={() => onImageClick(product)}
                        className="bg-black text-white uppercase text-sm py-2.5 px-4 w-full hover:bg-gray-800 transition-colors rounded"
                    >
                        Ver Detalles
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
