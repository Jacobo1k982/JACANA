import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../../../app/CartSlice";
import { FaCheckCircle } from "react-icons/fa";
import toast from "react-hot-toast";

function Nkmujer() {

    const dispatch = useDispatch();
    const [clickedProductId, setClickedProductId] = useState(null);

    const products = [
        { id: "nk-1", img: "/NKM/NKM1.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-43", price: "27000", Currency: "₡" },
        { id: "nk-2", img: "/NKM/NKM2.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-43", price: "27000", Currency: "₡" },
        { id: "nk-3", img: "/NKM/NKM3.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-39", price: "24000", Currency: "₡" },
        { id: "nk-4", img: "/NKM/NKM4.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "24000", Currency: "₡" },
        { id: "nk-5", img: "/NKM/NKM5.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-38", price: "33000", Currency: "₡" },
        { id: "nk-6", img: "/NKM/NKM6.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-42", price: "19500", Currency: "₡" },
        { id: "nk-7", img: "/NKM/NKM7.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "33000", Currency: "₡" },
        { id: "nk-8", img: "/NKM/NKM8.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-37", price: "24000", Currency: "₡" },
        { id: "nk-9", img: "/NKM/NKM9.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-38", price: "24000", Currency: "₡" },
        { id: "nk-10", img: "/NKM/NKM10.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-38", price: "30000", Currency: "₡" },
        { id: "nk-11", img: "/NKM/NKM11.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-39", price: "33000", Currency: "₡" },
        { id: "nk-12", img: "/NKM/NKM12.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "24000", Currency: "₡" },
        { id: "nk-13", img: "/NKM/NKM13.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "24000", Currency: "₡" },
        { id: "nk-14", img: "/NKM/NKM14.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 38-39", price: "19500", Currency: "₡" },
        { id: "nk-15", img: "/NKM/NKM15.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36", price: "33000", Currency: "₡" },
        { id: "nk-16", img: "/NKM/NKM16.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "30000", Currency: "₡" },
        { id: "nk-17", img: "/NKM/NKM17.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "24000", Currency: "₡" },
        { id: "nk-18", img: "/NKM/NKM18.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "33000", Currency: "₡" },
        { id: "nk-19", img: "/NKM/NKM19.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-39", price: "37500", Currency: "₡" },
        { id: "nk-20", img: "/NKM/NKM20.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-39", price: "37500", Currency: "₡" },
        { id: "nk-21", img: "/NKM/NKM21.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "37500", Currency: "₡" },
        { id: "nk-22", img: "/NKM/NKM22.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "33000", Currency: "₡" },
        { id: "nk-23", img: "/NKM/NKM23.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "34500", Currency: "₡" },
        { id: "nk-24", img: "/NKM/NKM24.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "30000", Currency: "₡" },
        { id: "nk-25", img: "/NKM/NKM25.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-39", price: "34500", Currency: "₡" },
        { id: "nk-26", img: "/NKM/NKM26.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "30000", Currency: "₡" },
        { id: "nk-27", img: "/NKM/NKM27.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "33000", Currency: "₡" },
        { id: "nk-28", img: "/NKM/NKM28.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "33000", Currency: "₡" },
        { id: "nk-29", img: "/NKM/NKM29.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "33000", Currency: "₡" },
        { id: "nk-30", img: "/NKM/NKM30.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-38", price: "24000", Currency: "₡" },
        { id: "nk-31", img: "/NKM/NKM31.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-39", price: "33000", Currency: "₡" },
        { id: "nk-32", img: "/NKM/NKM32.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-39", price: "33000", Currency: "₡" },
        { id: "nk-33", img: "/NKM/NKM33.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-37", price: "33000", Currency: "₡" },
        { id: "nk-34", img: "/NKM/NKM34.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-39", price: "24000", Currency: "₡" },
        { id: "nk-35", img: "/NKM/NKM35.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "34500", Currency: "₡" },
        { id: "nk-36", img: "/NKM/NKM36.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-39", price: "34500", Currency: "₡" },
        { id: "nk-37", img: "/NKM/NKM37.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "37500", Currency: "₡" },
        { id: "nk-38", img: "/NKM/NKM38.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "33000", Currency: "₡" },
        { id: "nk-39", img: "/NKM/NKM39.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-38", price: "33000", Currency: "₡" },
        { id: "nk-40", img: "/NKM/NKM40.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "37500", Currency: "₡" },
        { id: "nk-41", img: "/NKM/NKM41.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "33000", Currency: "₡" },
        { id: "nk-42", img: "/NKM/NKM42.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "33000", Currency: "₡" },
        { id: "nk-43", img: "/NKM/NKM43.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-37", price: "24000", Currency: "₡" },
        { id: "nk-44", img: "/NKM/NKM44.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "33000", Currency: "₡" },
        { id: "nk-45", img: "/NKM/NKM45.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-39", price: "33000", Currency: "₡" },
        { id: "nk-46", img: "/NKM/NKM46.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "33000", Currency: "₡" },
        { id: "nk-47", img: "/NKM/NKM47.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-39", price: "33000", Currency: "₡" },
        { id: "nk-48", img: "/NKM/NKM48.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "33000", Currency: "₡" },
        { id: "nk-49", img: "/NKM/NKM49.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-38", price: "24000", Currency: "₡" },
        { id: "nk-50", img: "/NKM/NKM50.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "30000", Currency: "₡" },
        { id: "nk-51", img: "/NKM/NKM51.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "24000", Currency: "₡" },
        { id: "nk-52", img: "/NKM/NKM52.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-37", price: "24000", Currency: "₡" },
        { id: "nk-53", img: "/NKM/NKM53.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "33000", Currency: "₡" },
        { id: "nk-54", img: "/NKM/NKM54.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "33000", Currency: "₡" },
        { id: "nk-55", img: "/NKM/NKM55.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "33000", Currency: "₡" },
        { id: "nk-56", img: "/NKM/NKM56.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "33000", Currency: "₡" },
        { id: "nk-57", img: "/NKM/NKM57.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-38", price: "24000", Currency: "₡" },
        { id: "nk-58", img: "/NKM/NKM58.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-39", price: "33000", Currency: "₡" },
        { id: "nk-59", img: "/NKM/NKM59.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-39", price: "33000", Currency: "₡" },


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

export default Nkmujer;
