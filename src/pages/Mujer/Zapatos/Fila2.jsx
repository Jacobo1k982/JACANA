import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../../../app/CartSlice";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { FaRuler } from "react-icons/fa";

function Fila2() {

    const dispatch = useDispatch();
    const [clickedProductId, setClickedProductId] = useState(null);
    const [selectedSizes, setSelectedSizes] = useState({});
    const [expandedImage, setExpandedImage] = useState(null);
    const [isImageClicked, setIsImageClicked] = useState(false);;

    const products = [
        { id: "f-1", img: "/FILA/FILAM/FILA1.jpg", title: "Fila", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "27000", originalPrice: "30000", Currency: "₡" },
        { id: "f-2", img: "/FILA/FILAM/FILA2.jpg", title: "Fila", model: "Modelo Exclusivo", sizes: [36, 37], price: "27000", originalPrice: "30000", Currency: "₡" },

    ];

    const handleSizeChange = (productId, size) => {
        setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
    };

    const handleBuy = (product) => {
        const selectedSize = selectedSizes[product.id];
        if (!selectedSize) {
            toast.error("Por favor selecciona una talla antes de comprar");
            return;
        }

        const item = {
            id: product.id,
            title: product.title,
            model: product.model,
            size: `Talla: ${selectedSize}`,
            img: product.img,
            price: Number(product.price),
        };

        dispatch(setAddItemToCart(item));
        dispatch(setOpenCart({ cartState: true }));
        toast.success(`${product.title} agregado al carrito`);

        setClickedProductId(product.id);
        setTimeout(() => {
            setClickedProductId(null);
        }, 2000);
    };

    const handleImageClick = (imageSrc) => {
        setExpandedImage(imageSrc);
        setIsImageClicked(true);
        setTimeout(() => setIsImageClicked(false), 150); // Simula un breve estado de "clicado"
    };

    const handleCloseExpandedImage = () => {
        setExpandedImage(null);
    };


    return (
        <div className="p-6 bg-gray-900 text-white min-h-screen">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => {
                    const isClicked = clickedProductId === product.id;
                    return (
                        <div
                            key={product.id}
                            className="bg-gray-800 shadow-md border border-gray-700 rounded-xl p-2 flex flex-col items-center text-center hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                        >
                            <div className="relative w-full max-w-xs h-[300px] rounded-xl overflow-hidden mt-4 cursor-pointer" onClick={() => handleImageClick(product.img)}>
                                <img
                                    src={product.img}
                                    alt={product.title}
                                    className={`w-full h-full object-cover transition-transform duration-200 ${isImageClicked ? 'scale-95' : 'scale-100'} hover:scale-105`}
                                />
                            </div>
                            <div className="p-4 space-y-2">
                                <h3 className="text-lg font-semibold">{product.title}</h3>
                                <div className="flex items-center justify-center gap-2">
                                    <p className="text-gray-400">{product.model}</p>
                                    <Link
                                        to="/guia-de-tallas"
                                        className="flex items-center gap-1 text-sm text-blue-400 hover:underline"
                                    >
                                        <FaRuler className="text-blue-400" />
                                        Guía de tallas
                                    </Link>
                                </div>

                                <div className="flex flex-wrap gap-2 justify-center">
                                    {product.sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => handleSizeChange(product.id, size)}
                                            className={`px-3 py-1 rounded-md border text-sm 
                    ${selectedSizes[product.id] === size
                                                    ? "bg-orange-500 text-white border-orange-500"
                                                    : "bg-gray-700 text-white border-gray-600 hover:bg-gray-600"
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>


                                <div className="flex items-center justify-center gap-2">
                                    {product.originalPrice && (
                                        <span className="text-gray-400 line-through decoration-red-500">
                                            {product.Currency} {product.originalPrice}
                                        </span>
                                    )}
                                    <span className="text-orange-500 font-bold">
                                        {product.Currency} {product.price}
                                    </span>
                                </div>


                                <button
                                    onClick={() => handleBuy(product)}
                                    disabled={isClicked}
                                    className={`w-full flex items-center justify-center gap-2 text-sm font-medium rounded-lg px-4 py-2 transition-all duration-300 ${isClicked
                                        ? "bg-green-600 cursor-not-allowed"
                                        : "bg-orange-500 hover:bg-orange-600"
                                        }`}
                                >
                                    {isClicked ? (
                                        <>
                                            <FaCheckCircle className="animate-ping-once" /> Agregado
                                        </>
                                    ) : (
                                        "Comprar"
                                    )}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            {expandedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center p-4">
                    <div className="relative animate-fadeIn">
                        <img
                            src={expandedImage}
                            alt="Expanded Product"
                            className="max-w-[90vw] max-h-[90vh] w-auto h-auto rounded-2xl shadow-2xl object-contain transition-transform duration-200 scale-100"
                        />
                        <button
                            onClick={handleCloseExpandedImage}
                            className="absolute top-2 right-2 bg-white text-gray-800 hover:bg-gray-200 rounded-full p-2 shadow-lg transition-all"
                        >
                            <FaTimes size={20} />
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Fila2;