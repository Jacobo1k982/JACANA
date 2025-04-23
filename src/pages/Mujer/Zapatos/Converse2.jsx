import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../../../app/CartSlice";
import { FaCheckCircle } from "react-icons/fa";
import toast from "react-hot-toast";

function Converse2() {

    const dispatch = useDispatch();
    const [clickedProductId, setClickedProductId] = useState(null);
    const [selectedSizes, setSelectedSizes] = useState({});

    const products = [
        { id: "con-1", img: "/CONVERSE/CONVM/CVM1.jpg", title: "Converse", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "33000", Currency: "₡" },
        { id: "con-2", img: "/CONVERSE/CONVM/CVM2.jpg", title: "Converse", model: "Modelo Exclusivo", sizes: [35, 36, 37, 38, 39, 40], price: "30000", Currency: "₡" },
        { id: "con-3", img: "/CONVERSE/CONVM/CVM3.jpg", title: "Converse", model: "Modelo Exclusivo", sizes: [35, 36, 37, 38, 39, 40], price: "30000", Currency: "₡" },
        { id: "con-4", img: "/CONVERSE/CONVM/CVM4.jpg", title: "Converse", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "24000", Currency: "₡" },
        { id: "con-5", img: "/CONVERSE/CONVM/CVM5.jpg", title: "Converse", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "24000", Currency: "₡" },
        { id: "con-6", img: "/CONVERSE/CONVM/CVM6.jpg", title: "Converse", model: "Modelo Exclusivo", sizes: [36, 37], price: "24000", Currency: "₡" },
        { id: "con-7", img: "/CONVERSE/CONVM/CVM7.jpg", title: "Converse", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "24000", Currency: "₡" },
        { id: "con-8", img: "/CONVERSE/CONVM/CVM8.jpg", title: "Converse", model: "Modelo Exclusivo", sizes: [35, 36, 37, 38], price: "33000", Currency: "₡" },
        { id: "con-9", img: "/CONVERSE/CONVM/CVM9.jpg", title: "Converse", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "33000", Currency: "₡" },
        { id: "con-10", img: "/CONVERSE/CONVM/CVM10.jpg", title: "Converse", model: "Modelo Exclusivo", sizes: [35, 36, 37, 38, 39], price: "33000", Currency: "₡" },
        { id: "con-11", img: "/CONVERSE/CONVM/CVM11.jpg", title: "Converse", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "24000", Currency: "₡" },
        { id: "con-12", img: "/CONVERSE/CONVM/CVM12.jpg", title: "Converse", model: "Modelo Exclusivo", sizes: [35, 36, 37], price: "33000", Currency: "₡" },
        { id: "con-13", img: "/CONVERSE/CONVM/CVM13.jpg", title: "Converse", model: "Modelo Exclusivo", sizes: [35, 36, 37, 38, 39], price: "33000", Currency: "₡" },

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
                            <img
                                src={product.img}
                                alt={product.title}
                                className="w-full max-w-xs h-[300px] object-cover rounded-xl mx-auto mt-4"
                            />
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
        </div>
    );
};
export default Converse2;