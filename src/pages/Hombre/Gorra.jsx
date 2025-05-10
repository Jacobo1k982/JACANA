import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../../app/CartSlice";
import { FaCheckCircle } from "react-icons/fa";
import toast from "react-hot-toast";

function Gorra() {

    const dispatch = useDispatch();
    const [clickedProductId, setClickedProductId] = useState(null);

    const products = [
        { id: "gr-1", img: "/GORRAS/GR1.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "15000", Currency: "₡" },
        { id: "gr-2", img: "/GORRAS/GR2.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "15000", Currency: "₡" },
        { id: "gr-3", img: "/GORRAS/GR3.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "15000", Currency: "₡" },
        { id: "gr-4", img: "/GORRAS/GR4.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "12000", Currency: "₡" },
        { id: "gr-5", img: "/GORRAS/GR5.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "12000", Currency: "₡" },
        { id: "gr-6", img: "/GORRAS/GR6.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "15000", Currency: "₡" },
        { id: "gr-7", img: "/GORRAS/GR7.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "15000", Currency: "₡" },
        { id: "gr-8", img: "/GORRAS/GR8.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "15000", Currency: "₡" },
        { id: "gr-9", img: "/GORRAS/GR9.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "15000", Currency: "₡" },
        { id: "gr-10", img: "/GORRAS/GR10.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "15000", Currency: "₡" },
        { id: "gr-11", img: "/GORRAS/GR11.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "15000", Currency: "₡" },
        { id: "gr-12", img: "/GORRAS/GR12.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "15000", Currency: "₡" },
        { id: "gr-13", img: "/GORRAS/GR13.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "15000", Currency: "₡" },
        { id: "gr-14", img: "/GORRAS/GR14.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "12000", Currency: "₡" },
        { id: "gr-15", img: "/GORRAS/GR15.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "15000", Currency: "₡" },
        { id: "gr-16", img: "/GORRAS/GR16.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "15000", Currency: "₡" },
        { id: "gr-17", img: "/GORRAS/GR17.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "15000", Currency: "₡" },
        { id: "gr-18", img: "/GORRAS/GR18.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "12000", Currency: "₡" },
        { id: "gr-19", img: "/GORRAS/GR19.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "15000", Currency: "₡" },
        { id: "gr-20", img: "/GORRAS/GR20.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "15000", Currency: "₡" },
        { id: "gr-21", img: "/GORRAS/GR21.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "15000", Currency: "₡" },
        { id: "gr-22", img: "/GORRAS/GR22.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "15000", Currency: "₡" },
        { id: "gr-23", img: "/GORRAS/GR23.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "15000", Currency: "₡" },
        { id: "gr-24", img: "/GORRAS/GR24.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "12000", Currency: "₡" },
        { id: "gr-25", img: "/GORRAS/GR25.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "15000", Currency: "₡" },
        { id: "gr-26", img: "/GORRAS/GR26.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "15000", Currency: "₡" },
        { id: "gr-27", img: "/GORRAS/GR27.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "15000", Currency: "₡" },
        { id: "gr-28", img: "/GORRAS/GR28.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "15000", Currency: "₡" },
        { id: "gr-29", img: "/GORRAS/GR29.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "15000", Currency: "₡" },
        { id: "gr-30", img: "/GORRAS/GR30.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "12000", Currency: "₡" },
        { id: "gr-31", img: "/GORRAS/GR31.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "12000", Currency: "₡" },
        { id: "gr-32", img: "/GORRAS/GR32.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "12000", Currency: "₡" },
        { id: "gr-33", img: "/GORRAS/GR33.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "12000", Currency: "₡" },
        { id: "gr-34", img: "/GORRAS/GR34.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "12000", Currency: "₡" },
        { id: "gr-35", img: "/GORRAS/GR35.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "12000", Currency: "₡" },
        { id: "gr-36", img: "/GORRAS/GR36.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "12000", Currency: "₡" },
        { id: "gr-37", img: "/GORRAS/GR37.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "12000", Currency: "₡" },
        { id: "gr-38", img: "/GORRAS/GR38.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "12000", Currency: "₡" },
        { id: "gr-39", img: "/GORRAS/GR39.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "12000", Currency: "₡" },
        { id: "gr-40", img: "/GORRAS/GR40.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "12000", Currency: "₡" },
        { id: "gr-41", img: "/GORRAS/GR41.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "12000", Currency: "₡" },
        { id: "gr-42", img: "/GORRAS/GR42.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "12000", Currency: "₡" },
        { id: "gr-43", img: "/GORRAS/GR43.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "12000", Currency: "₡" },
        { id: "gr-44", img: "/GORRAS/GR44.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "12000", Currency: "₡" },
        { id: "gr-45", img: "/GORRAS/GR45.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "12000", Currency: "₡" },
        { id: "gr-46", img: "/GORRAS/GR46.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "12000", Currency: "₡" },
        { id: "gr-47", img: "/GORRAS/GR47.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "15000", Currency: "₡" },
        { id: "gr-48", img: "/GORRAS/GR48.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "12000", Currency: "₡" },
        { id: "gr-49", img: "/GORRAS/GR49.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "15000", Currency: "₡" },
        { id: "gr-50", img: "/GORRAS/GR50.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "15000", Currency: "₡" },
        { id: "gr-51", img: "/GORRAS/GR51.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "15000", Currency: "₡" },
        { id: "gr-52", img: "/GORRAS/GR52.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "15000", Currency: "₡" },
        { id: "gr-53", img: "/GORRAS/GR53.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "15000", Currency: "₡" },
        { id: "gr-54", img: "/GORRAS/GR54.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "15000", Currency: "₡" },
        { id: "gr-55", img: "/GORRAS/GR55.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "15000", Currency: "₡" },
        { id: "gr-56", img: "/GORRAS/GR56.jpg", title: "Gorra", model: "Modelo Exclusivo", price: "15000", Currency: "₡" },

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

export default Gorra;