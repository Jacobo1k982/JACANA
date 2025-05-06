import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../../../app/CartSlice";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";

function Nkmujer() {

    const dispatch = useDispatch();
    const [clickedProductId, setClickedProductId] = useState(null);
    const [selectedSizes, setSelectedSizes] = useState({});
    const [expandedImage, setExpandedImage] = useState(null);
    const [isImageClicked, setIsImageClicked] = useState(false);

    const products = [
        { id: "nk-1", img: "/NKM/NKM1.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "27000", originalPrice: "30000",Currency: "₡" },
        { id: "nk-2", img: "/NKM/NKM2.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "29700", originalPrice: "33000",Currency: "₡" },
        { id: "nk-3", img: "/NKM/NKM3.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37], price: "29700", originalPrice: "33000",Currency: "₡" },
        { id: "nk-4", img: "/NKM/NKM4.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "33750",originalPrice: "37500", Currency: "₡" },
        { id: "nk-5", img: "/NKM/NKM5.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38], price: "21600", originalPrice: "24000", Currency: "₡" },
        { id: "nk-6", img: "/NKM/NKM6.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37], price: "21600", originalPrice: "24000", Currency: "₡" },
        { id: "nk-7", img: "/NKM/NKM7.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36], price: "33750", originalPrice: "37500", Currency: "₡" },
        { id: "nk-8", img: "/NKM/NKM8.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38], price: "17550", originalPrice: "19500", Currency: "₡" },
        { id: "nk-9", img: "/NKM/NKM9.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "24300", originalPrice: "27000", Currency: "₡" },
        { id: "nk-10", img: "/NKM/NKM10.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38], price: "33750", originalPrice: "37500", Currency: "₡" },
        { id: "nk-11", img: "/NKM/NKM11.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "29700", originalPrice: "33000", Currency: "₡" },
        { id: "nk-12", img: "/NKM/NKM12.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "29700", originalPrice: "33000", Currency: "₡" },
        { id: "nk-13", img: "/NKM/NKM13.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "29700",  originalPrice: "33000", Currency: "₡" },
        { id: "nk-14", img: "/NKM/NKM14.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "21600",  originalPrice: "24000", Currency: "₡" },
        { id: "nk-15", img: "/NKM/NKM15.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36], price: "31050",  originalPrice: "34500", Currency: "₡" },
        { id: "nk-16", img: "/NKM/NKM16.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "31050",  originalPrice: "34500", Currency: "₡" },
        { id: "nk-17", img: "/NKM/NKM17.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37], price: "27000",  originalPrice: "30000", Currency: "₡" },
        { id: "nk-18", img: "/NKM/NKM18.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "21600",  originalPrice: "24000", Currency: "₡" },
        { id: "nk-19", img: "/NKM/NKM19.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37], price: "33750",  originalPrice: "37500", Currency: "₡" },
        { id: "nk-20", img: "/NKM/NKM20.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "33000",  originalPrice: "", Currency: "₡" },
        { id: "nk-21", img: "/NKM/NKM21.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38], price: "33000",  originalPrice: "", Currency: "₡" },
        { id: "nk-22", img: "/NKM/NKM22.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 38], price: "34500",  originalPrice: "", Currency: "₡" },
        { id: "nk-23", img: "/NKM/NKM23.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "33000",  originalPrice: "", Currency: "₡" },
        { id: "nk-24", img: "/NKM/NKM24.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "33000",  originalPrice: "", Currency: "₡" },
        { id: "nk-25", img: "/NKM/NKM25.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "33000",  originalPrice: "", Currency: "₡" },
        { id: "nk-26", img: "/NKM/NKM26.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39], price: "33000",  originalPrice: "", Currency: "₡" },
        { id: "nk-27", img: "/NKM/NKM27.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39], price: "37500",  originalPrice: "", Currency: "₡" },
        { id: "nk-28", img: "/NKM/NKM28.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "30000",  originalPrice: "", Currency: "₡" },
        { id: "nk-29", img: "/NKM/NKM29.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "33000",  originalPrice: "", Currency: "₡" },
        { id: "nk-30", img: "/NKM/NKM30.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39], price: "33000",  originalPrice: "", Currency: "₡" },
        { id: "nk-31", img: "/NKM/NKM31.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38], price: "33000",  originalPrice: "", Currency: "₡" },
        { id: "nk-32", img: "/NKM/NKM32.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "33000",  originalPrice: "", Currency: "₡" },
        { id: "nk-33", img: "/NKM/NKM33.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "33000",  originalPrice: "", Currency: "₡" },
        { id: "nk-34", img: "/NKM/NKM34.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37], price: "30000",  originalPrice: "", Currency: "₡" },
        { id: "nk-35", img: "/NKM/NKM35.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38], price: "30000",  originalPrice: "", Currency: "₡" },
        { id: "nk-36", img: "/NKM/NKM36.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39], price: "33000",  originalPrice: "", Currency: "₡" },
        { id: "nk-37", img: "/NKM/NKM37.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36], price: "30000",  originalPrice: "", Currency: "₡" },
        { id: "nk-38", img: "/NKM/NKM38.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 39], price: "30000",  originalPrice: "", Currency: "₡" },
        { id: "nk-39", img: "/NKM/NKM39.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 39, 40], price: "33000",  originalPrice: "", Currency: "₡" },
        { id: "nk-40", img: "/NKM/NKM40.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 38, 39, 40], price: "33000",  originalPrice: "", Currency: "₡" },
        { id: "nk-41", img: "/NKM/NKM41.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "33000",  originalPrice: "", Currency: "₡" },
        { id: "nk-42", img: "/NKM/NKM42.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "34500",  originalPrice: "", Currency: "₡" },
        { id: "nk-43", img: "/NKM/NKM43.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "27000",  originalPrice: "", Currency: "₡" },
        { id: "nk-44", img: "/NKM/NKM44.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "24000",  originalPrice: "", Currency: "₡" },
        { id: "nk-45", img: "/NKM/NKM45.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "24000",  originalPrice: "", Currency: "₡" },
        { id: "nk-46", img: "/NKM/NKM46.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [40], price: "18500",  originalPrice: "", Currency: "₡" },
        { id: "nk-47", img: "/NKM/NKM47.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37], price: "34500",  originalPrice: "", Currency: "₡" },
        { id: "nk-48", img: "/NKM/NKM48.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38], price: "27,700", originalPrice: "33,000",  originalPrice: "", Currency: "₡" },
        { id: "nk-49", img: "/NKM/NKM49.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "24000",  originalPrice: "", Currency: "₡" },
        { id: "nk-50", img: "/NKM/NKM50.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37], price: "33000",  originalPrice: "", Currency: "₡" },
        { id: "nk-51", img: "/NKM/NKM51.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39], price: "24000",  originalPrice: "", Currency: "₡" },
        { id: "nk-52", img: "/NKM/NKM52.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37], price: "33000",  originalPrice: "", Currency: "₡" },
        { id: "nk-53", img: "/NKM/NKM53.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38], price: "33000",  originalPrice: "", Currency: "₡" },
        { id: "nk-54", img: "/NKM/NKM54.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 39], price: "33000",  originalPrice: "", Currency: "₡" },
        { id: "nk-55", img: "/NKM/NKM55.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36], price: "24000",  originalPrice: "", Currency: "₡" },
        { id: "nk-56", img: "/NKM/NKM56.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36], price: "33000",  originalPrice: "", Currency: "₡" },
        { id: "nk-57", img: "/NKM/NKM57.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38], price: "33000",  originalPrice: "", Currency: "₡" },
        { id: "nk-58", img: "/NKM/NKM58.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38], price: "33000",  originalPrice: "", Currency: "₡" },
        { id: "nk-59", img: "/NKM/NKM59.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36], price: "33000",  originalPrice: "", Currency: "₡" },
        { id: "nk-60", img: "/NKM/NKM60.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37], price: "30000",  originalPrice: "", Currency: "₡" },
        { id: "nk-61", img: "/NKM/NKM61.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 40], price: "30000",  originalPrice: "", Currency: "₡" },
        { id: "nk-62", img: "/NKM/NKM62.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37], price: "33000",  originalPrice: "", Currency: "₡" },
        { id: "nk-63", img: "/NKM/NKM63.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "33000",  originalPrice: "", Currency: "₡" },
        { id: "nk-64", img: "/NKM/NKM64.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "24000",  originalPrice: "", Currency: "₡" },
        { id: "nk-65", img: "/NKM/NKM65.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37], price: "33000",  originalPrice: "", Currency: "₡" },
        { id: "nk-66", img: "/NKM/NKM66.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "33000",  originalPrice: "", Currency: "₡" },
        { id: "nk-67", img: "/NKM/NKM67.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "33000",  originalPrice: "", Currency: "₡" },
        { id: "nk-68", img: "/NKM/NKM68.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "30000",  originalPrice: "", Currency: "₡" },
        { id: "nk-69", img: "/NKM/NKM69.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [35, 36, 37], price: "24000",  originalPrice: "", Currency: "₡" },
        { id: "nk-70", img: "/NKM/NKM70.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [38, 39], price: "19500",  originalPrice: "", Currency: "₡" },
        { id: "nk-71", img: "/NKM/NKM71.jpg", title: "Nike", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "33000",  originalPrice: "", Currency: "₡" },


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

export default Nkmujer;
