import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../../../app/CartSlice";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";

function Adidascard() {

    const dispatch = useDispatch();
    const [clickedProductId, setClickedProductId] = useState(null);
    const [selectedSizes, setSelectedSizes] = useState({});
    const [expandedImage, setExpandedImage] = useState(null);
    const [isImageClicked, setIsImageClicked] = useState(false);

    const products = [
        { id: "ad-1", img: "/ADIDAS/ADSM/ADSM1.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "34500", Currency: "₡" },
        { id: "ad-2", img: "/ADIDAS/ADSM/ADSM2.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "34500", Currency: "₡" },
        { id: "ad-3", img: "/ADIDAS/ADSM/ADSM3.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "37500", Currency: "₡" },
        { id: "ad-4", img: "/ADIDAS/ADSM/ADSM4.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "34500", Currency: "₡" },
        { id: "ad-5", img: "/ADIDAS/ADSM/ADSM5.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "37500", Currency: "₡" },
        { id: "ad-6", img: "/ADIDAS/ADSM/ADSM6.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37], price: "24000", Currency: "₡" },
        { id: "ad-7", img: "/ADIDAS/ADSM/ADSM7.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "37500", Currency: "₡" },
        { id: "ad-8", img: "/ADIDAS/ADSM/ADSM8.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "37500", Currency: "₡" },
        { id: "ad-9", img: "/ADIDAS/ADSM/ADSM19.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "37500", Currency: "₡" },
        { id: "ad-10", img: "/ADIDAS/ADSM/ADSM10.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "37500", Currency: "₡" },
        { id: "ad-11", img: "/ADIDAS/ADSM/ADSM11.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "37500", Currency: "₡" },
        { id: "ad-12", img: "/ADIDAS/ADSM/ADSM12.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "34500", Currency: "₡" },
        { id: "ad-13", img: "/ADIDAS/ADSM/ADSM13.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "34500", Currency: "₡" },
        { id: "ad-14", img: "/ADIDAS/ADSM/ADSM14.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37], price: "24000", Currency: "₡" },
        { id: "ad-15", img: "/ADIDAS/ADSM/ADSM15.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39], price: "34500", Currency: "₡" },
        { id: "ad-16", img: "/ADIDAS/ADSM/ADSM16.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "34500", Currency: "₡" },
        { id: "ad-17", img: "/ADIDAS/ADSM/ADSM17.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [37, 38, 39, 40], price: "24000", Currency: "₡" },
        { id: "ad-18", img: "/ADIDAS/ADSM/ADSM18.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "24000", Currency: "₡" },
        { id: "ad-19", img: "/ADIDAS/ADSM/ADSM19.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "34500", Currency: "₡" },
        { id: "ad-20", img: "/ADIDAS/ADSM/ADSM20.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "30000", Currency: "₡" },
        { id: "ad-21", img: "/ADIDAS/ADSM/ADSM21.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "37500", Currency: "₡" },
        { id: "ad-22", img: "/ADIDAS/ADSM/ADSM22.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "37500", Currency: "₡" },
        { id: "ad-23", img: "/ADIDAS/ADSM/ADSM23.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "37500", Currency: "₡" },
        { id: "ad-24", img: "/ADIDAS/ADSM/ADSM24.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "30000", Currency: "₡" },
        { id: "ad-25", img: "/ADIDAS/ADSM/ADSM25.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "34500", Currency: "₡" },
        { id: "ad-26", img: "/ADIDAS/ADSM/ADSM26.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "37500", Currency: "₡" },
        { id: "ad-27", img: "/ADIDAS/ADSM/ADSM27.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40], price: "24000", Currency: "₡" },
        { id: "ad-28", img: "/ADIDAS/ADSM/ADSM28.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "37500", Currency: "₡" },
        { id: "ad-29", img: "/ADIDAS/ADSM/ADSM29.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "24000", Currency: "₡" },
        { id: "ad-30", img: "/ADIDAS/ADSM/ADSM30.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "37500", Currency: "₡" },
        { id: "ad-31", img: "/ADIDAS/ADSM/ADSM31.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "37500", Currency: "₡" },
        { id: "ad-32", img: "/ADIDAS/ADSM/ADSM32.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "37500", Currency: "₡" },
        { id: "ad-33", img: "/ADIDAS/ADSM/ADSM33.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38], price: "37500", Currency: "₡" },
        { id: "ad-34", img: "/ADIDAS/ADSM/ADSM34.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "34500", Currency: "₡" },
        { id: "ad-35", img: "/ADIDAS/ADSM/ADSM35.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "34500", Currency: "₡" },
        { id: "ad-36", img: "/ADIDAS/ADSM/ADSM36.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "34500", Currency: "₡" },
        { id: "ad-37", img: "/ADIDAS/ADSM/ADSM37.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "37500", Currency: "₡" },
        { id: "ad-38", img: "/ADIDAS/ADSM/ADSM38.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39], price: "34500", Currency: "₡" },
        { id: "ad-39", img: "/ADIDAS/ADSM/ADSM39.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "37500", Currency: "₡" },
        { id: "ad-40", img: "/ADIDAS/ADSM/ADSM40.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "37500", Currency: "₡" },
        { id: "ad-41", img: "/ADIDAS/ADSM/ADSM41.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "37500", Currency: "₡" },
        { id: "ad-42", img: "/ADIDAS/ADSM/ADSM42.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "37500", Currency: "₡" },
        { id: "ad-43", img: "/ADIDAS/ADSM/ADSM43.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "37500", Currency: "₡" },
        { id: "ad-44", img: "/ADIDAS/ADSM/ADSM44.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "37500", Currency: "₡" },
        { id: "ad-45", img: "/ADIDAS/ADSM/ADSM45.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "37500", Currency: "₡" },
        { id: "ad-46", img: "/ADIDAS/ADSM/ADSM46.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 39], price: "34500", Currency: "₡" },
        { id: "ad-47", img: "/ADIDAS/ADSM/ADSM47.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38], price: "37500", Currency: "₡" },
        { id: "ad-48", img: "/ADIDAS/ADSM/ADSM48.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "37500", Currency: "₡" },
        { id: "ad-49", img: "/ADIDAS/ADSM/ADSM49.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "37500", Currency: "₡" },
        { id: "ad-50", img: "/ADIDAS/ADSM/ADSM50.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [36], price: "24000", Currency: "₡" },

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
            <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                                <p className="text-gray-400">{product.model}</p>

                                <select
                                    value={selectedSizes[product.id] || ""}
                                    onChange={(e) => handleSizeChange(product.id, e.target.value)}
                                    className="bg-gray-700 text-white p-2 rounded w-full text-sm"
                                >
                                    <option value="">Selecciona tu talla</option>
                                    {product.sizes.map((size) => (
                                        <option key={size} value={size}>
                                            Talla {size}
                                        </option>
                                    ))}
                                </select>

                                <p className="text-orange-500 font-bold">
                                    {product.Currency} {product.price}
                                </p>

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

export default Adidascard;