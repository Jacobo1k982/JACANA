import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../../../app/CartSlice";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";

function Adidas() {

    const dispatch = useDispatch();
    const [clickedProductId, setClickedProductId] = useState(null);
    const [selectedSizes, setSelectedSizes] = useState({});
    const [expandedImage, setExpandedImage] = useState(null);
    const [isImageClicked, setIsImageClicked] = useState(false);

    const products = [
        { id: "ad-1", img: "/ADIDAS/ADSH/ADSH1.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43], price: "21600", originalPrice: "24000",Currency: "₡" },
        { id: "ad-2", img: "/ADIDAS/ADSH/ADSH2.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43], price: "24000",  originalPrice: "", Currency: "₡" },
        { id: "ad-3", img: "/ADIDAS/ADSH/ADSH3.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43], price: "24000",  originalPrice: "", Currency: "₡" },
        { id: "ad-4", img: "/ADIDAS/ADSH/ADSH4.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43], price: "24000",  originalPrice: "", Currency: "₡" },
        { id: "ad-5", img: "/ADIDAS/ADSH/ADSH5.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43], price: "24000",  originalPrice: "", Currency: "₡" },
        { id: "ad-6", img: "/ADIDAS/ADSH/ADSH6.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43, 44], price: "24000",  originalPrice: "", Currency: "₡" },
        { id: "ad-7", img: "/ADIDAS/ADSH/ADSH7.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43], price: "24000",  originalPrice: "", Currency: "₡" },
        { id: "ad-8", img: "/ADIDAS/ADSH/ADSH8.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43, 44], price: "24000",  originalPrice: "", Currency: "₡" },
        { id: "ad-9", img: "/ADIDAS/ADSH/ADSH9.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40], price: "24000",  originalPrice: "", Currency: "₡" },
        { id: "ad-10", img: "/ADIDAS/ADSH/ADSH10.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43, 44], price: "37500",  originalPrice: "", Currency: "₡" },
        { id: "ad-11", img: "/ADIDAS/ADSH/ADSH11.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43, 44], price: "37500",  originalPrice: "", Currency: "₡" },
        { id: "ad-12", img: "/ADIDAS/ADSH/ADSH12.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43, 44], price: "24000",  originalPrice: "", Currency: "₡" },
        { id: "ad-13", img: "/ADIDAS/ADSH/ADSH13.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43, 44], price: "37500",  originalPrice: "", Currency: "₡" },
        { id: "ad-14", img: "/ADIDAS/ADSH/ADSH14.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43, 44], price: "37500",  originalPrice: "", Currency: "₡" },
        { id: "ad-15", img: "/ADIDAS/ADSH/ADSH15.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43], price: "37500",  originalPrice: "", Currency: "₡" },
        { id: "ad-16", img: "/ADIDAS/ADSH/ADSH16.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43, 44], price: "37500",  originalPrice: "", Currency: "₡" },
        { id: "ad-17", img: "/ADIDAS/ADSH/ADSH17.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43, 44], price: "24000",  originalPrice: "", Currency: "₡" },
        { id: "ad-18", img: "/ADIDAS/ADSH/ADSH18.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43, 44], price: "37500",  originalPrice: "", Currency: "₡" },
        { id: "ad-19", img: "/ADIDAS/ADSH/ADSH19.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [41, 42, 43, 44], price: "34500",  originalPrice: "", Currency: "₡" },
        { id: "ad-20", img: "/ADIDAS/ADSH/ADSH20.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43], price: "24000",  originalPrice: "", Currency: "₡" },
        { id: "ad-21", img: "/ADIDAS/ADSH/ADSH21.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43], price: "37500",  originalPrice: "", Currency: "₡" },
        { id: "ad-22", img: "/ADIDAS/ADSH/ADSH22.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43, 44], price: "24000",  originalPrice: "", Currency: "₡" },
        { id: "ad-23", img: "/ADIDAS/ADSH/ADSH23.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43], price: "24000",  originalPrice: "", Currency: "₡" },
        { id: "ad-24", img: "/ADIDAS/ADSH/ADSH24.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43, 44], price: "24000",  originalPrice: "", Currency: "₡" },
        { id: "ad-25", img: "/ADIDAS/ADSH/ADSH25.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [41, 42, 43], price: "24000",  originalPrice: "", Currency: "₡" },
        { id: "ad-26", img: "/ADIDAS/ADSH/ADSH26.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40], price: "24000",  originalPrice: "", Currency: "₡" },
        { id: "ad-27", img: "/ADIDAS/ADSH/ADSH27.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43], price: "34500",  originalPrice: "", Currency: "₡" },
        { id: "ad-28", img: "/ADIDAS/ADSH/ADSH28.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43], price: "34500",  originalPrice: "", Currency: "₡" },
        { id: "ad-29", img: "/ADIDAS/ADSH/ADSH29.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40], price: "24000",  originalPrice: "", Currency: "₡" },
        { id: "ad-30", img: "/ADIDAS/ADSH/ADSH30.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [42, 43, 44], price: "34500",  originalPrice: "", Currency: "₡" },
        { id: "ad-31", img: "/ADIDAS/ADSH/ADSH31.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43, 44], price: "34500",  originalPrice: "", Currency: "₡" },
        { id: "ad-32", img: "/ADIDAS/ADSH/ADSH32.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [44], price: "34500",  originalPrice: "", Currency: "₡" },
        { id: "ad-33", img: "/ADIDAS/ADSH/ADSH33.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43], price: "34500",  originalPrice: "", Currency: "₡" },
        { id: "ad-34", img: "/ADIDAS/ADSH/ADSH34.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43], price: "24000",  originalPrice: "", Currency: "₡" },
        { id: "ad-35", img: "/ADIDAS/ADSH/ADSH35.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [42], price: "24000",  originalPrice: "", Currency: "₡" },
        { id: "ad-36", img: "/ADIDAS/ADSH/ADSH36.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43, 44], price: "30000", Currency: "₡" },
        { id: "ad-37", img: "/ADIDAS/ADSH/ADSH37.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43, 44], price: "37500", Currency: "₡" },
        { id: "ad-38", img: "/ADIDAS/ADSH/ADSH38.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43], price: "34500", Currency: "₡" },
        { id: "ad-39", img: "/ADIDAS/ADSH/ADSH39.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43, 44], price: "37500", Currency: "₡" },
        { id: "ad-40", img: "/ADIDAS/ADSH/ADSH40.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [43], price: "24000", Currency: "₡" },
        { id: "ad-41", img: "/ADIDAS/ADSH/ADSH41.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [41, 42, 43], price: "24000", Currency: "₡" },
        { id: "ad-42", img: "/ADIDAS/ADSH/ADSH42.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43, 44], price: "30000", Currency: "₡" },
        { id: "ad-43", img: "/ADIDAS/ADSH/ADSH43.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43], price: "34500", Currency: "₡" },
        { id: "ad-44", img: "/ADIDAS/ADSH/ADSH44.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43, 44], price: "24000", Currency: "₡" },
        { id: "ad-45", img: "/ADIDAS/ADSH/ADSH45.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43], price: "24000", Currency: "₡" },
        { id: "ad-46", img: "/ADIDAS/ADSH/ADSH46.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43], price: "34500", Currency: "₡" },
        { id: "ad-47", img: "/ADIDAS/ADSH/ADSH47.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40], price: "24000", Currency: "₡" },
        { id: "ad-48", img: "/ADIDAS/ADSH/ADSH48.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [41, 42, 43, 44], price: "24000", Currency: "₡" },
        { id: "ad-49", img: "/ADIDAS/ADSH/ADSH49.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [41, 42, 43], price: "24000", Currency: "₡" },
        { id: "ad-50", img: "/ADIDAS/ADSH/ADSH50.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [41, 42, 43], price: "34500", Currency: "₡" },
        { id: "ad-51", img: "/ADIDAS/ADSH/ADSH51.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43], price: "24000", Currency: "₡" },
        { id: "ad-52", img: "/ADIDAS/ADSH/ADSH52.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43, 44], price: "24000", Currency: "₡" },
        { id: "ad-53", img: "/ADIDAS/ADSH/ADSH53.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43], price: "24000", Currency: "₡" },
        { id: "ad-54", img: "/ADIDAS/ADSH/ADSH54.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43], price: "24000", Currency: "₡" },
        { id: "ad-55", img: "/ADIDAS/ADSH/ADSH55.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43, 44], price: "34500", Currency: "₡" },
        { id: "ad-56", img: "/ADIDAS/ADSH/ADSH56.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43, 44], price: "37500", Currency: "₡" },
        { id: "ad-57", img: "/ADIDAS/ADSH/ADSH57.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43, 44], price: "24000", Currency: "₡" },
        { id: "ad-58", img: "/ADIDAS/ADSH/ADSH58.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43], price: "37500", Currency: "₡" },
        { id: "ad-59", img: "/ADIDAS/ADSH/ADSH59.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [42], price: "24000", Currency: "₡" },
        { id: "ad-60", img: "/ADIDAS/ADSH/ADSH60.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [41, 42, 43], price: "37500", Currency: "₡" },
        { id: "ad-61", img: "/ADIDAS/ADSH/ADSH61.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [41, 42, 43], price: "34500", Currency: "₡" },
        { id: "ad-62", img: "/ADIDAS/ADSH/ADSH62.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43, 44], price: "37500", Currency: "₡" },
        { id: "ad-63", img: "/ADIDAS/ADSH/ADSH63.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43, 44], price: "37500", Currency: "₡" },
        { id: "ad-64", img: "/ADIDAS/ADSH/ADSH64.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43], price: "34500", Currency: "₡" },
        { id: "ad-65", img: "/ADIDAS/ADSH/ADSH65.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43, 44], price: "24000", Currency: "₡" },
        { id: "ad-66", img: "/ADIDAS/ADSH/ADSH66.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [41, 42, 43], price: "24000", Currency: "₡" },
        { id: "ad-67", img: "/ADIDAS/ADSH/ADSH67.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40], price: "24000", Currency: "₡" },
        { id: "ad-68", img: "/ADIDAS/ADSH/ADSH68.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [42, 43], price: "24000", Currency: "₡" },
        { id: "ad-69", img: "/ADIDAS/ADSH/ADSH69.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 43], price: "34500", Currency: "₡" },
        { id: "ad-70", img: "/ADIDAS/ADSH/ADSH70.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43, 44], price: "24000", Currency: "₡" },
        { id: "ad-71", img: "/ADIDAS/ADSH/ADSH71.jpg", title: "Adidas", model: "Modelo Exclusivo", sizes: [40, 41, 42, 43, 44], price: "24000", Currency: "₡" },


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

export default Adidas;