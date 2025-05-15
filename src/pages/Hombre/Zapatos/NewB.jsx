import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../../../app/CartSlice";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { FaRuler } from "react-icons/fa";
function NewB() {

    const dispatch = useDispatch();
    const [clickedProductId, setClickedProductId] = useState(null);
    const [selectedSizes, setSelectedSizes] = useState({});
    const [expandedImage, setExpandedImage] = useState(null);
    const [isImageClicked, setIsImageClicked] = useState(false);

    const products = [
        { id: "nb-1", img: "/NEWBALANCE/NBH/NBH1.jpg", title: "NewBalance", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43], price: "33750", originalPrice: "37500", Currency: "₡" },
        { id: "nb-2", img: "/NEWBALANCE/NBH/NBH2.jpg", title: "NewBalance", model: "Modelo Exclusivo", sizes: [41, 43, 44], price: "33750", originalPrice: "37500", Currency: "₡" },
        { id: "nb-3", img: "/NEWBALANCE/NBH/NBH3.jpg", title: "NewBalance", model: "Modelo Exclusivo", sizes: [40], price: "33750", originalPrice: "37500", Currency: "₡" },
        { id: "nb-4", img: "/NEWBALANCE/NBH/NBH4.jpg", title: "NewBalance", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43], price: "33750", originalPrice: "37500", Currency: "₡" },
        { id: "nb-5", img: "/NEWBALANCE/NBH/NBH5.jpg", title: "NewBalance", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43], price: "31050", originalPrice: "34500", Currency: "₡" },
        { id: "nb-6", img: "/NEWBALANCE/NBH/NBH6.jpg", title: "NewBalance", model: "Modelo Exclusivo", sizes: [40, 41], price: "29700", originalPrice: "33000", Currency: "₡" },
        { id: "nb-7", img: "/NEWBALANCE/NBH/NBH7.jpg", title: "NewBalance", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43], price: "27000", originalPrice: "30000", Currency: "₡" },
        { id: "nb-8", img: "/NEWBALANCE/NBH/NBH8.jpg", title: "NewBalance", model: "Modelo Exclusivo", sizes: [40], price: "33750", originalPrice: "37500", Currency: "₡" },
        { id: "nb-9", img: "/NEWBALANCE/NBH/NBH9.jpg", title: "NewBalance", model: "Modelo Exclusivo", sizes: [42, 43], price: "33750", originalPrice: "37500", Currency: "₡" },
        { id: "nb-10", img: "/NEWBALANCE/NBH/NBH10.jpg", title: "NewBalance", model: "Modelo Exclusivo", sizes: [40, 41, 42], price: "33750", originalPrice: "37500", Currency: "₡" },
        { id: "nb-11", img: "/NEWBALANCE/NBH/NBH11.jpg", title: "NewBalance", model: "Modelo Exclusivo", sizes: [40], price: "33750", originalPrice: "37500", Currency: "₡" },
        { id: "nb-12", img: "/NEWBALANCE/NBH/NBH12.jpg", title: "NewBalance", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43, 44], price: "33750", originalPrice: "37500", Currency: "₡" },
        { id: "nb-13", img: "/NEWBALANCE/NBH/NBH13.jpg", title: "NewBalance", model: "Modelo Exclusivo", sizes: [41, 42, 43], price: "21600", originalPrice: "24000", Currency: "₡" },
        { id: "nb-14", img: "/NEWBALANCE/NBH/NBH14.jpg", title: "NewBalance", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43], price: "33750", originalPrice: "37500", Currency: "₡" },
        { id: "nb-15", img: "/NEWBALANCE/NBH/NBH15.jpg", title: "NewBalance", model: "Modelo Exclusivo", sizes: [42, 43], price: "21600", originalPrice: "24000", Currency: "₡" },
        { id: "nb-16", img: "/NEWBALANCE/NBH/NBH16.jpg", title: "NewBalance", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43, 44], price: "33750", originalPrice: "37500", Currency: "₡" },
        { id: "nb-17", img: "/NEWBALANCE/NBH/NBH17.jpg", title: "NewBalance", model: "Modelo Exclusivo", sizes: [41, 42, 43], price: "33750", originalPrice: "37500", Currency: "₡" },
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
        <div className="p-4 sm:p-6 bg-gray-900 text-white min-h-screen"> {/* Ajuste de padding general de la página */}
            {/* La clase grid-cols-2 hace que en las pantallas más pequeñas (por defecto) haya 2 columnas.
                        sm:grid-cols-1 hace que a partir del breakpoint 'sm' (640px) haya 1 columna.
                        Esto es un poco inusual, normalmente es grid-cols-1 y sm:grid-cols-2.
                        Mantendremos tu configuración, pero los ajustes internos de la card son clave. */}
            <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"> {/* Ajuste de gap para diferentes pantallas */}
                {products.map((product) => {
                    const isClicked = clickedProductId === product.id;
                    return (
                        <div
                            key={product.id}
                            // Ajustamos el padding de la card para que sea responsivo: p-3 en pantallas pequeñas (cuando hay 2 columnas), p-4 en 'sm' y más grandes.
                            className="bg-gray-800 shadow-md border border-gray-700 rounded-xl p-3 sm:p-4 flex flex-col items-center text-center hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                        >
                            {/* Contenedor de la imagen:
                                        - w-full: ocupa todo el ancho del contenedor padre (la card).
                                        - aspect-square: mantiene una relación de aspecto cuadrada (altura igual al ancho). Puedes cambiarlo a aspect-[4/3] u otro si prefieres.
                                        - Eliminamos max-w-xs y mt-4 para que se adapte mejor al padding de la card.
                                    */}
                            <div
                                className="relative w-full aspect-square rounded-xl overflow-hidden cursor-pointer"
                                onClick={() => handleImageClick(product.img)}
                            >
                                <img
                                    src={product.img}
                                    alt={product.title}
                                    className={`w-full h-full object-cover transition-transform duration-200 ${isImageClicked ? 'scale-95' : 'scale-100'} hover:scale-105`}
                                />
                            </div>
                            {/* Contenedor de información del producto:
                                        - w-full: para que ocupe el ancho disponible dentro del padding de la card.
                                        - pt-3 o pt-4: para dar un espacio superior después de la imagen.
                                        - space-y-3: para un espaciado vertical entre los elementos de texto.
                                    */}
                            <div className="w-full pt-3 sm:pt-4 space-y-3">
                                <h3 className="text-base sm:text-lg font-semibold">{product.title}</h3>
                                {/* Modelo y Guía de tallas con gap responsivo */}
                                <div className="flex flex-col xs:flex-row items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm">
                                    <p className="text-gray-400">{product.model}</p>
                                    <Link
                                        to="/guia-de-tallas"
                                        className="flex items-center gap-1 text-blue-400 hover:underline"
                                    >
                                        <FaRuler className="text-blue-400" />
                                        Guía de tallas
                                    </Link>
                                </div>

                                {/* Tallas con botones y gap responsivo */}
                                <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                                    {product.sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => handleSizeChange(product.id, size)}
                                            // Ajustamos padding de botones de talla para móviles si es necesario, pero px-3 py-1 suele ser bueno.
                                            className={`px-2 py-1 sm:px-3 text-xs sm:text-sm rounded-md border 
                                                    ${selectedSizes[product.id] === size
                                                    ? "bg-orange-500 text-white border-orange-500"
                                                    : "bg-gray-700 text-white border-gray-600 hover:bg-gray-600"
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>

                                {/* Precio con gap responsivo */}
                                <div className="flex items-center justify-center gap-1 sm:gap-2">
                                    {product.originalPrice && (
                                        <span className="text-gray-400 line-through decoration-red-500 text-sm sm:text-base">
                                            {product.Currency} {product.originalPrice}
                                        </span>
                                    )}
                                    <span className="text-orange-500 font-bold text-sm sm:text-base">
                                        {product.Currency} {product.price}
                                    </span>
                                </div>

                                <button
                                    onClick={() => handleBuy(product)}
                                    disabled={isClicked}
                                    // Aseguramos que el botón ocupe el ancho y tenga un padding adecuado.
                                    className={`w-full flex items-center justify-center gap-2 text-sm sm:text-base font-medium rounded-lg px-4 py-2 transition-all duration-300 ${isClicked
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

export default NewB;