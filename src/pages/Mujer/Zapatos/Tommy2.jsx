import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../../../app/CartSlice";
import { FaCheckCircle } from "react-icons/fa";
import toast from "react-hot-toast";

function Tommy2() {

    const dispatch = useDispatch();
    const [clickedProductId, setClickedProductId] = useState(null);
    const [selectedSizes, setSelectedSizes] = useState({});

    const products = [
        { id: "tm-1", img: "/TOMMY/TM/TMM1.jpg", title: "Tommy Hilfiger", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "30000", Currency: "₡" },
        { id: "tm-2", img: "/TOMMY/TM/TMM2.jpg", title: "Tommy Hilfiger", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "30000", Currency: "₡" },
        { id: "tm-3", img: "/TOMMY/TM/TMM3.jpg", title: "Tommy Hilfiger", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "30000", Currency: "₡" },
        { id: "tm-4", img: "/TOMMY/TM/TMM4.jpg", title: "Tommy Hilfiger", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "30000", Currency: "₡" },
        { id: "tm-5", img: "/TOMMY/TM/TMM5.jpg", title: "Tommy Hilfiger", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39], price: "30000", Currency: "₡" },
        { id: "tm-6", img: "/TOMMY/TM/TMM6.jpg", title: "Tommy Hilfiger", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "30000", Currency: "₡" },
        { id: "tm-7", img: "/TOMMY/TM/TMM7.jpg", title: "Tommy Hilfiger", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "30000", Currency: "₡" },
        { id: "tm-8", img: "/TOMMY/TM/TMM8.jpg", title: "Tommy Hilfiger", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "30000", Currency: "₡" },
        { id: "tm-9", img: "/TOMMY/TM/TMM9.jpg", title: "Tommy Hilfiger", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "30000", Currency: "₡" },
        { id: "tm-10", img: "/TOMMY/TM/TMM10.jpg", title: "Tommy Hilfiger", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "30000", Currency: "₡" },
        { id: "tm-11", img: "/TOMMY/TM/TMM11.jpg", title: "Tommy Hilfiger", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "30000", Currency: "₡" },
        { id: "tm-12", img: "/TOMMY/TM/TMM12.jpg", title: "Tommy Hilfiger", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "30000", Currency: "₡" },
        { id: "tm-13", img: "/TOMMY/TM/TMM13.jpg", title: "Tommy Hilfiger", model: "Modelo Exclusivo", sizes: [36, 37, 38, 39, 40], price: "30000", Currency: "₡" },

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

export default Tommy2;