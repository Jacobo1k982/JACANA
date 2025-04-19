import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../../../app/CartSlice";
import { FaCheckCircle } from "react-icons/fa";
import toast from "react-hot-toast";

function Puma2() {

    const dispatch = useDispatch();
    const [clickedProductId, setClickedProductId] = useState(null);

    const products = [
        { id: "p-1", img: "/PUMA/PMM/PMM1.jpg", title: "Puma", model: "Modelo Exclusivo", size: "Talla: 36", price: "24000", Currency: "₡" },
        { id: "p-2", img: "/PUMA/PMM/PMM2.jpg", title: "Puma", model: "Modelo Exclusivo", size: "Talla: 36", price: "24000", Currency: "₡" },
        { id: "p-3", img: "/PUMA/PMM/PMM3.jpg", title: "Puma", model: "Modelo Exclusivo", size: "Talla: 36", price: "24000", Currency: "₡" },
        { id: "p-4", img: "/PUMA/PMM/PMM4.jpg", title: "Puma", model: "Modelo Exclusivo", size: "Talla: 36", price: "24000", Currency: "₡" },
        { id: "p-5", img: "/PUMA/PMM/PMM5.jpg", title: "Puma", model: "Modelo Exclusivo", size: "Talla: 36/39", price: "24000", Currency: "₡" },
        { id: "p-6", img: "/PUMA/PMM/PMM6.jpg", title: "Puma", model: "Modelo Exclusivo", size: "Talla: 36/37", price: "24000", Currency: "₡" },
        { id: "p-7", img: "/PUMA/PMM/PMM7.jpg", title: "Puma", model: "Modelo Exclusivo", size: "Talla: 36/37", price: "24000", Currency: "₡" },
        { id: "p-8", img: "/PUMA/PMM/PMM8.jpg", title: "Puma", model: "Modelo Exclusivo", size: "Talla: 36/37/38/40", price: "24000", Currency: "₡" },
        { id: "p-9", img: "/PUMA/PMM/PMM9.jpg", title: "Puma", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "19500", Currency: "₡" },
        { id: "p-10", img: "/PUMA/PMM/PMM10.jpg", title: "Puma", model: "Modelo Exclusivo", size: "Talla: 36/40", price: "19500", Currency: "₡" },
        { id: "p-11", img: "/PUMA/PMM/PMM11.jpg", title: "Puma", model: "Modelo Exclusivo", size: "Talla: 36/40", price: "37500", Currency: "₡" },

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

export default Puma2;