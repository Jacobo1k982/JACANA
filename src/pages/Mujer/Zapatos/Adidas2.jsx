import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../../../app/CartSlice";
import { FaCheckCircle, FaTimes, FaRuler } from "react-icons/fa";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import SearchBar from "../../../components/SearchBar";

function Adidas2() {

    const dispatch = useDispatch();
    const [recentlyAddedId, setRecentlyAddedId] = useState(null);
    const [selectedSizes, setSelectedSizes] = useState({});
    const [expandedImage, setExpandedImage] = useState(null);
    const [isImageClicked, setIsImageClicked] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const products = [
        { id: "ad-1", img: "/ADIDAS/ADSM/ADSM1.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "31050", originalPrice: "34500", Currency: "₡" },
        { id: "ad-2", img: "/ADIDAS/ADSM/ADSM2.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "31050", originalPrice: "34500", Currency: "₡" },
        { id: "ad-3", img: "/ADIDAS/ADSM/ADSM3.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "33750", originalPrice: "37500", Currency: "₡" },
        { id: "ad-4", img: "/ADIDAS/ADSM/ADSM4.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "31050", originalPrice: "34500", Currency: "₡" },
        { id: "ad-5", img: "/ADIDAS/ADSM/ADSM5.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "31050", originalPrice: "37500", Currency: "₡" },
        { id: "ad-6", img: "/ADIDAS/ADSM/ADSM6.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37], price: "21600", originalPrice: "24000", Currency: "₡" },
        { id: "ad-7", img: "/ADIDAS/ADSM/ADSM7.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "33750", originalPrice: "37500", Currency: "₡" },
        { id: "ad-8", img: "/ADIDAS/ADSM/ADSM8.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "33750", originalPrice: "37500", Currency: "₡" },
        { id: "ad-9", img: "/ADIDAS/ADSM/ADSM19.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "33750", originalPrice: "37500", Currency: "₡" },
        { id: "ad-10", img: "/ADIDAS/ADSM/ADSM10.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "33750", originalPrice: "37500", Currency: "₡" },
        { id: "ad-11", img: "/ADIDAS/ADSM/ADSM11.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "33750", originalPrice: "37500", Currency: "₡" },
        { id: "ad-12", img: "/ADIDAS/ADSM/ADSM12.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "31050", originalPrice: "34500", Currency: "₡" },
        { id: "ad-13", img: "/ADIDAS/ADSM/ADSM13.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "31050", originalPrice: "34500", Currency: "₡" },
        { id: "ad-14", img: "/ADIDAS/ADSM/ADSM14.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37], price: "21600", originalPrice: "24000", Currency: "₡" },
        { id: "ad-15", img: "/ADIDAS/ADSM/ADSM15.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39], price: "31050", originalPrice: "34500", Currency: "₡" },
        { id: "ad-16", img: "/ADIDAS/ADSM/ADSM16.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "31050", originalPrice: "34500", Currency: "₡" },
        { id: "ad-17", img: "/ADIDAS/ADSM/ADSM17.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [37, 38, 39, 40], price: "21600", originalPrice: "24000", Currency: "₡" },
        { id: "ad-18", img: "/ADIDAS/ADSM/ADSM18.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "21600", originalPrice: "24000", Currency: "₡" },
        { id: "ad-19", img: "/ADIDAS/ADSM/ADSM19.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "31050", originalPrice: "34500", Currency: "₡" },
        { id: "ad-20", img: "/ADIDAS/ADSM/ADSM20.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "27000", originalPrice: "30000", Currency: "₡" },
        { id: "ad-21", img: "/ADIDAS/ADSM/ADSM21.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "33050", originalPrice: "37500", Currency: "₡" },
        { id: "ad-22", img: "/ADIDAS/ADSM/ADSM22.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "33750", originalPrice: "37500", Currency: "₡" },
        { id: "ad-23", img: "/ADIDAS/ADSM/ADSM23.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "33750", originalPrice: "37500", Currency: "₡" },
        { id: "ad-24", img: "/ADIDAS/ADSM/ADSM24.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "27000", originalPrice: "30000", Currency: "₡" },
        { id: "ad-25", img: "/ADIDAS/ADSM/ADSM25.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "31050", originalPrice: "34500", Currency: "₡" },
        { id: "ad-26", img: "/ADIDAS/ADSM/ADSM26.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "33750", originalPrice: "37500", Currency: "₡" },
        { id: "ad-27", img: "/ADIDAS/ADSM/ADSM27.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40], price: "21600", originalPrice: "24000", Currency: "₡" },
        { id: "ad-28", img: "/ADIDAS/ADSM/ADSM28.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "33750", originalPrice: "37500", Currency: "₡" },
        { id: "ad-29", img: "/ADIDAS/ADSM/ADSM29.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "21600", originalPrice: "24000", Currency: "₡" },
        { id: "ad-30", img: "/ADIDAS/ADSM/ADSM30.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "33750", originalPrice: "37500", Currency: "₡" },
        { id: "ad-31", img: "/ADIDAS/ADSM/ADSM31.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "33750", originalPrice: "37500", Currency: "₡" },
        { id: "ad-32", img: "/ADIDAS/ADSM/ADSM32.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "33750", originalPrice: "37500", Currency: "₡" },
        { id: "ad-33", img: "/ADIDAS/ADSM/ADSM33.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38], price: "33750", originalPrice: "37500", Currency: "₡" },
        { id: "ad-34", img: "/ADIDAS/ADSM/ADSM34.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "31050", originalPrice: "34500", Currency: "₡" },
        { id: "ad-35", img: "/ADIDAS/ADSM/ADSM35.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "31050", originalPrice: "34500", Currency: "₡" },
        { id: "ad-36", img: "/ADIDAS/ADSM/ADSM36.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "31050", originalPrice: "34500", Currency: "₡" },
        { id: "ad-37", img: "/ADIDAS/ADSM/ADSM37.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "33750", originalPrice: "37500", Currency: "₡" },
        { id: "ad-38", img: "/ADIDAS/ADSM/ADSM38.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39], price: "31050", originalPrice: "34500", Currency: "₡" },
        { id: "ad-39", img: "/ADIDAS/ADSM/ADSM39.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "33750", originalPrice: "37500", Currency: "₡" },
        { id: "ad-40", img: "/ADIDAS/ADSM/ADSM40.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "33750", originalPrice: "37500", Currency: "₡" },
        { id: "ad-41", img: "/ADIDAS/ADSM/ADSM41.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "33750", originalPrice: "37500", Currency: "₡" },
        { id: "ad-42", img: "/ADIDAS/ADSM/ADSM42.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "33750", originalPrice: "37500", Currency: "₡" },
        { id: "ad-43", img: "/ADIDAS/ADSM/ADSM43.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "33750", originalPrice: "37500", Currency: "₡" },
        { id: "ad-44", img: "/ADIDAS/ADSM/ADSM44.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "33750", originalPrice: "37500", Currency: "₡" },
        { id: "ad-45", img: "/ADIDAS/ADSM/ADSM45.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "33750", originalPrice: "37500", Currency: "₡" },
        { id: "ad-46", img: "/ADIDAS/ADSM/ADSM46.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 39], price: "31050", originalPrice: "3450", Currency: "₡" },
        { id: "ad-47", img: "/ADIDAS/ADSM/ADSM47.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38], price: "33750", originalPrice: "37500", Currency: "₡" },
        { id: "ad-48", img: "/ADIDAS/ADSM/ADSM48.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "33750", originalPrice: "37500", Currency: "₡" },
        { id: "ad-49", img: "/ADIDAS/ADSM/ADSM49.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "33750", originalPrice: "37500", Currency: "₡" },
        { id: "ad-50", img: "/ADIDAS/ADSM/ADSM50.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36], price: "21600", originalPrice: "24000", Currency: "₡" },

    ];

    const formatCurrency = (value, currency = "₡") =>
        `${currency} ${Number(value).toLocaleString("es-CR")}`;

    const getSizeButtonClass = (productId, size) => {
        const isSelected = selectedSizes[productId] === size;
        return `px-2 py-1 sm:px-3 text-xs sm:text-sm rounded-md border ${isSelected
            ? "bg-black dark:bg-gray-500 text-white border-gray-500"
            : "bg-gray-200 dark:bg-gray-700 text-black dark:text-white border-gray-300 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`;
    };

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

        setRecentlyAddedId(product.id);
        setTimeout(() => setRecentlyAddedId(null), 2000);
    };

    const handleImageClick = (imageSrc) => {
        setExpandedImage(imageSrc);
        setIsImageClicked(true);
        setTimeout(() => setIsImageClicked(false), 150);
    };

    const handleCloseExpandedImage = () => {
        setExpandedImage(null);
    };

    const displayedProducts = filteredProducts.length > 0 ? filteredProducts : products;

    return (
        <div className="p-4 bg-white dark:bg-black text-black dark:text-white min-h-screen max-w-6xl mx-auto">
            {/* ✅ SearchBar integrada */}
            <SearchBar
                products={products}
                onFiltered={setFilteredProducts}
                onClose={() => setFilteredProducts([])}
            />

            <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 sm:gap-6">
                {displayedProducts.length > 0 ? (
                    displayedProducts.map((product) => {
                        const isClicked = recentlyAddedId === product.id;
                        return (
                            <div
                                key={product.id}
                                className="bg-white dark:bg-gray-800 text-black dark:text-white shadow-md border border-gray-200 dark:border-gray-700 rounded-xl p-1 sm:p-4 flex flex-col items-center text-center hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                            >
                                <div
                                    className="relative w-full aspect-square rounded-xl overflow-hidden cursor-pointer"
                                    onClick={() => handleImageClick(product.img)}
                                >
                                    <img
                                        loading="lazy"
                                        src={product.img}
                                        alt={product.title}
                                        className={`w-full h-full object-cover transition-transform duration-200 ${isImageClicked ? 'scale-95' : 'scale-100'} hover:scale-105`}
                                    />
                                </div>

                                <div className="w-full pt-3 sm:pt-4 space-y-3">
                                    <h3 className="text-base sm:text-lg font-semibold">{product.title}</h3>

                                    <div className="flex flex-col xs:flex-row items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm">
                                        <p className="text-gray-600 dark:text-gray-400">{product.model}</p>
                                        <Link
                                            to="/guia-de-tallas"
                                            className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                                        >
                                            <FaRuler />
                                            Guía de tallas
                                        </Link>
                                    </div>

                                    <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                                        {product.sizes.map((size) => (
                                            <button
                                                key={size}
                                                onClick={() => handleSizeChange(product.id, size)}
                                                className={getSizeButtonClass(product.id, size)}
                                                aria-label={`Seleccionar talla ${size}`}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-center gap-1 sm:gap-2">
                                        {product.originalPrice && (
                                            <span className="text-gray-500 dark:text-gray-400 line-through decoration-red-500 text-sm sm:text-base">
                                                {formatCurrency(product.originalPrice, product.Currency)}
                                            </span>
                                        )}
                                        <span className="text-black-600 dark:text-black-400 font-bold text-sm sm:text-base">
                                            {formatCurrency(product.price, product.Currency)}
                                        </span>
                                    </div>

                                    <button
                                        onClick={() => handleBuy(product)}
                                        disabled={isClicked}
                                        className={`w-full flex items-center justify-center gap-2 text-sm sm:text-base font-medium rounded-lg px-4 py-2 transition-all duration-300
                      ${isClicked
                                                ? "bg-black-600 text-white cursor-not-allowed"
                                                : "bg-black hover:bg-gray-800 text-white"
                                            }`}
                                        aria-label={isClicked ? "Producto agregado al carrito" : "Agregar al carrito"}
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
                    })
                ) : (
                    <p className="text-center col-span-full text-gray-500 dark:text-gray-400">No se encontraron productos.</p>
                )}
            </div>

            {expandedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center p-4"
                    onClick={handleCloseExpandedImage}
                >
                    <div
                        className="relative animate-fadeIn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={expandedImage}
                            alt="Producto ampliado"
                            className="max-w-[90vw] max-h-[90vh] w-auto h-auto rounded-2xl shadow-2xl object-contain transition-transform duration-200 scale-100"
                        />
                        <button
                            onClick={handleCloseExpandedImage}
                            className="absolute top-2 right-2 bg-white text-gray-800 hover:bg-gray-200 rounded-full p-2 shadow-lg transition-all"
                            aria-label="Cerrar imagen ampliada"
                        >
                            <FaTimes size={20} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Adidas2;