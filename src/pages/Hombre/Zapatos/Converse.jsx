import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../../../app/CartSlice";
import { FaCheckCircle } from "react-icons/fa";
import toast from "react-hot-toast";

function Converse() {

    const dispatch = useDispatch();
    const [clickedProductId, setClickedProductId] = useState(null);

    const products = [
        { id: "conv-1", img: "/CONVERSE/CONVH/CONVH1.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "24000", Currency: "₡" },
        { id: "conv-2", img: "/CONVERSE/CONVH/CONVH2.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 40/41/44/45", price: "24000", Currency: "₡" },
        { id: "conv-3", img: "/CONVERSE/CONVH/CONVH3.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "24000", Currency: "₡" },
        { id: "conv-4", img: "/CONVERSE/CONVH/CONVH4.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 40/41/42/45", price: "24000", Currency: "₡" },
        { id: "conv-5", img: "/CONVERSE/CONVH/CONVH5.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "30000", Currency: "₡" },
        { id: "conv-6", img: "/CONVERSE/CONVH/CONVH6.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "24000", Currency: "₡" },
        { id: "conv-7", img: "/CONVERSE/CONVH/CONVH7.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "30000", Currency: "₡" },
        { id: "conv-8", img: "/CONVERSE/CONVH/CONVH8.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "30000", Currency: "₡" },
        { id: "conv-9", img: "/CONVERSE/CONVH/CONVH9.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "24000", Currency: "₡" },
        { id: "conv-10", img: "/CONVERSE/CONVH/CONVH10.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 40", price: "24000", Currency: "₡" },
        { id: "conv-11", img: "/CONVERSE/CONVH/CONVH11.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "24000", Currency: "₡" },
        { id: "conv-12", img: "/CONVERSE/CONVH/CONVH12.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "24000", Currency: "₡" },
        { id: "conv-13", img: "/CONVERSE/CONVH/CONVH13.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "33000", Currency: "₡" },
        { id: "conv-14", img: "/CONVERSE/CONVH/CONVH14.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "24000", Currency: "₡" },
        { id: "conv-15", img: "/CONVERSE/CONVH/CONVH15.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "33000", Currency: "₡" },
        { id: "conv-16", img: "/CONVERSE/CONVH/CONVH16.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "33000", Currency: "₡" },

    ];

    const handleBuy = (product) => {
        const item = {
            id: product.id,
            title: product.title,
            model: product.model,
            size: product.size,
            img: product.img,
            price: Number(product.price),
        };

        dispatch(setAddItemToCart(item));
        dispatch(setOpenCart({ cartState: true }));
        toast.success(`${product.title} agregado al carrito`);

        setClickedProductId(product.id);

        // Reinicia el estado después de 2 segundos
        setTimeout(() => {
            setClickedProductId(null);
        }, 2000);
    };


    return (
        <div className="bg-gray-900 text-white py-6">
            <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                <p className="text-sm text-gray-500">{product.size}</p>
                                <p className="text-orange-500 font-bold">{product.Currency} {product.price}</p>

                                <button
                                    onClick={() => handleBuy(product)}
                                    disabled={clickedProductId === product.id}
                                    className={`w-full flex items-center justify-center gap-2 text-sm font-medium rounded-lg px-4 py-2 transition-all duration-300 ${clickedProductId === product.id
                                        ? "bg-green-600 cursor-not-allowed"
                                        : "bg-orange-500 hover:bg-orange-600"
                                        }`}
                                >
                                    {clickedProductId === product.id ? (
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

export default Converse;