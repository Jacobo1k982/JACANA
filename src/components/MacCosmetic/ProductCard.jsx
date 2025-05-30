import React from 'react';

const ProductCard = ({ product, onImageClick }) => {
    const renderStars = (rating) => {
        let stars = '';
        const totalStars = 5;
        for (let i = 0; i < totalStars; i++) {
            stars += i < rating ? '★' : '☆';
        }
        return stars;
    };

    // Asegúrate de que product.imagenes existe y tiene elementos antes de acceder a product.imagenActual
    const currentImageUrl = product.imagenes && product.imagenes.length > 0
        ? product.imagenes[product.imagenActual % product.imagenes.length]
        : 'https://via.placeholder.com/200x200.png?text=No+Image'; // Imagen por defecto

    return (
        <div className="bg-white text-black w-60 flex-shrink-0 snap-start flex flex-col"> {/* Ancho fijo y flex-col */}
            <div className="relative">
                <img
                    src={currentImageUrl}
                    alt={product.nombre}
                    className="w-full h-48 object-cover cursor-pointer"
                    onClick={() => onImageClick(product.id)} // Llama a la función para cambiar imagen
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
            <div className="p-4 text-center flex flex-col flex-grow"> {/* flex-grow para empujar botón abajo */}
                {/* Stars and Reviews */}
                {typeof product.rating === 'number' && typeof product.reviews === 'number' && (
                    <div className="text-left text-xs mb-2">
                        <span className="text-yellow-500">{renderStars(product.rating)}</span>
                        <span className="ml-1 text-gray-500">({product.reviews})</span>
                    </div>
                )}

                {/* Category */}
                {product.category && (
                    <h3 className="text-xs uppercase text-gray-700 font-semibold truncate h-8 mb-1 flex items-center justify-center">
                        {product.category}
                    </h3>
                )}

                {/* Price */}
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

                {/* Description */}
                {product.description && (
                    <p className="text-xs text-gray-600 mb-3 h-10 overflow-hidden">
                        {product.description}
                    </p>
                )}

                <div className="mt-auto"> {/* Empuja estos elementos al final de la tarjeta */}
                    {/* Product Name/Variant */}
                    <p className="text-sm font-semibold mb-3 uppercase">{product.nombre}</p>

                    {/* Add to Bag Button */}
                    <button className="bg-black text-white uppercase text-sm py-2.5 px-4 w-full hover:bg-gray-800 transition-colors">
                        Add to Bag
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;