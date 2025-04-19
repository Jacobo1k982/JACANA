import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../../../app/CartSlice";
import { FaCheckCircle } from "react-icons/fa";
import toast from "react-hot-toast";

function NewB() {

    const dispatch = useDispatch();
    const [clickedProductId, setClickedProductId] = useState(null);

    const products = [
        { id: "nb-1", img: "/NEWBALANCE/NBH/NBH1.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "37500", Currency: "₡" },
        { id: "nb-2", img: "/NEWBALANCE/NBH/NBH2.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 41-44", price: "37500", Currency: "₡" },
        { id: "nb-3", img: "/NEWBALANCE/NBH/NBH3.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 40", price: "37500", Currency: "₡" },
        { id: "nb-4", img: "/NEWBALANCE/NBH/NBH4.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "37500", Currency: "₡" },
        { id: "nb-5", img: "/NEWBALANCE/NBH/NBH5.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "34500", Currency: "₡" },
        { id: "nb-6", img: "/NEWBALANCE/NBH/NBH6.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 40/41", price: "33000", Currency: "₡" },
        { id: "nb-7", img: "/NEWBALANCE/NBH/NBH7.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "30000", Currency: "₡" },
        { id: "nb-8", img: "/NEWBALANCE/NBH/NBH8.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 40-42", price: "30000", Currency: "₡" },
        { id: "nb-9", img: "/NEWBALANCE/NBH/NBH9.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 40", price: "37500", Currency: "₡" },
        { id: "nb-10", img: "/NEWBALANCE/NBH/NBH10.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 40-42", price: "37500", Currency: "₡" },
        { id: "nb-11", img: "/NEWBALANCE/NBH/NBH11.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 40", price: "37500", Currency: "₡" },
        { id: "nb-12", img: "/NEWBALANCE/NBH/NBH12.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "37500", Currency: "₡" },
        { id: "nb-13", img: "/NEWBALANCE/NBH/NBH13.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 41-43", price: "24000", Currency: "₡" },
        { id: "nb-14", img: "/NEWBALANCE/NBH/NBH14.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "37500", Currency: "₡" },
        { id: "nb-15", img: "/NEWBALANCE/NBH/NBH15.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 42-43", price: "24000", Currency: "₡" },
        { id: "nb-16", img: "/NEWBALANCE/NBH/NBH16.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "37500", Currency: "₡" },
        { id: "nb-17", img: "/NEWBALANCE/NBH/NBH17.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 41-43", price: "37500", Currency: "₡" },

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

export default NewB;