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

    const cardImageUrl = product.imagenes && product.imagenes.length > 0
        ? product.imagenes[0]
        : 'https://via.placeholder.com/200x200.png?text=No+Image';

    return (
        <div className="bg-white text-black w-60 flex-shrink-0 snap-start flex flex-col shadow-md overflow-hidden">
            <div className="relative w-full h-40 flex items-center justify-center overflow-hidden">
                <img
                    src={cardImageUrl}
                    alt={product.nombre}
                    className="max-h-40 object-contain cursor-pointer"
                    onClick={() => onImageClick(product)}
                />
                {product.badge && (
                    <span
                        className={`absolute top-2 text-xs font-semibold uppercase text-white py-1 px-2 ${product.badge.toUpperCase() === 'NEW' ? 'left-2 bg-black bg-opacity-70' : 'right-2 bg-black bg-opacity-70'}`}
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
                        onClick={() => onImageClick(product)}
                        className="bg-black text-white uppercase text-sm py-2.5 px-4 w-full hover:bg-gray-800 transition-colors"
                    >
                        Ver Detalles
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
