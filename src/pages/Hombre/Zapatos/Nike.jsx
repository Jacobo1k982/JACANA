import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../../../app/CartSlice";
import { FaCheckCircle } from "react-icons/fa";
import toast from "react-hot-toast";

function Nike() {
    const dispatch = useDispatch();
    const [clickedProductId, setClickedProductId] = useState(null);

    const products = [
        { id: "nike-1", img: "/NKH/NKH1.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "30000", Currency: "₡" },
        { id: "nike-2", img: "/NKH/NKH2.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-42", price: "24000", Currency: "₡" },
        { id: "nike-3", img: "/NKH/NKH3.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "30000", Currency: "₡" },
        { id: "nike-4", img: "/NKH/NKH4.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "24000", Currency: "₡" },
        { id: "nike-5", img: "/NKH/NKH5.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "24000", Currency: "₡" },
        { id: "nike-6", img: "/NKH/NKH6.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-42", price: "33000", Currency: "₡" },
        { id: "nike-7", img: "/NKH/NKH7.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "33000", Currency: "₡" },
        { id: "nike-8", img: "/NKH/NKH8.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "33000", Currency: "₡" },
        { id: "nike-9", img: "/NKH/NKH9.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "24000", Currency: "₡" },
        { id: "nike-10", img: "/NKH/NKH10.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "33000", Currency: "₡" },
        { id: "nike-11", img: "/NKH/NKH11.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "33000", Currency: "₡" },
        { id: "nike-13", img: "/NKH/NKH12.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 41", price: "24000", Currency: "₡" },
        { id: "nike-14", img: "/NKH/NKH13.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "24000", Currency: "₡" },
        { id: "nike-15", img: "/NKH/NKH14.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "33000", Currency: "₡" },
        { id: "nike-16", img: "/NKH/NKH15.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "24000", Currency: "₡" },
        { id: "nike-17", img: "/NKH/NKH16.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 41-43", price: "24000", Currency: "₡" },
        { id: "nike-18", img: "/NKH/NKH17.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "33000", Currency: "₡" },
        { id: "nike-19", img: "/NKH/NKH18.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40", price: "24000", Currency: "₡" },
        { id: "nike-20", img: "/NKH/NKH19.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "33000", Currency: "₡" },
        { id: "nike-21", img: "/NKH/NKH20.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "24000", Currency: "₡" },
        { id: "nike-22", img: "/NKH/NKH21.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "33000", Currency: "₡" },
        { id: "nike-23", img: "/NKH/NKH22.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "34500", Currency: "₡" },
        { id: "nike-24", img: "/NKH/NKH23.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "33000", Currency: "₡" },
        { id: "nike-25", img: "/NKH/NKH24.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 44", price: "37500", Currency: "₡" },
        { id: "nike-26", img: "/NKH/NKH25.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 43", price: "33000", Currency: "₡" },
        { id: "nike-27", img: "/NKH/NKH26.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "24000", Currency: "₡" },
        { id: "nike-28", img: "/NKH/NKH27.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-41", price: "30000", Currency: "₡" },
        { id: "nike-29", img: "/NKH/NKH28.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "33000", Currency: "₡" },
        { id: "nike-30", img: "/NKH/NKH29.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "33000", Currency: "₡" },
        { id: "nike-31", img: "/NKH/NKH30.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "33000", Currency: "₡" },
        { id: "nike-32", img: "/NKH/NKH31.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "33000", Currency: "₡" },
        { id: "nike-33", img: "/NKH/NKH32.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 43-44", price: "30000", Currency: "₡" },
        { id: "nike-34", img: "/NKH/NKH33.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "33000", Currency: "₡" },
        { id: "nike-35", img: "/NKH/NKH34.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "33000", Currency: "₡" },
        { id: "nike-36", img: "/NKH/NKH35.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "33000", Currency: "₡" },
        { id: "nike-37", img: "/NKH/NKH36.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "34500", Currency: "₡" },
        { id: "nike-38", img: "/NKH/NKH37.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "34500", Currency: "₡" },
        { id: "nike-39", img: "/NKH/NKH38.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "24000", Currency: "₡" },
        { id: "nike-40", img: "/NKH/NKH39.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "30000", Currency: "₡" },
        { id: "nike-41", img: "/NKH/NKH40.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "24000", Currency: "₡" },
        { id: "nike-42", img: "/NKH/NKH41.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "24000", Currency: "₡" },
        { id: "nike-43", img: "/NKH/NKH42.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "33000", Currency: "₡" },
        { id: "nike-44", img: "/NKH/NKH43.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "30000", Currency: "₡" },
        { id: "nike-45", img: "/NKH/NKH44.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-41", price: "33000", Currency: "₡" },
        { id: "nike-46", img: "/NKH/NKH45.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "24000", Currency: "₡" },
        { id: "nike-47", img: "/NKH/NKH46.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "33000", Currency: "₡" },
        { id: "nike-48", img: "/NKH/NKH47.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "24000", Currency: "₡" },
        { id: "nike-49", img: "/NKH/NKH48.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-41", price: "30000", Currency: "₡" },
        { id: "nike-50", img: "/NKH/NKH49.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "33000", Currency: "₡" },
        { id: "nike-51", img: "/NKH/NKH50.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-41", price: "33000", Currency: "₡" },
        { id: "nike-52", img: "/NKH/NKH51.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "33000", Currency: "₡" },
        { id: "nike-53", img: "/NKH/NKH52.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 43", price: "24000", Currency: "₡" },
        { id: "nike-54", img: "/NKH/NKH53.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "33000", Currency: "₡" },
        { id: "nike-55", img: "/NKH/NKH54.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "33000", Currency: "₡" },
        { id: "nike-56", img: "/NKH/NKH55.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "33000", Currency: "₡" },
        { id: "nike-57", img: "/NKH/NKH56.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "30000", Currency: "₡" },
        { id: "nike-58", img: "/NKH/NKH57.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "33000", Currency: "₡" },
        { id: "nike-59", img: "/NKH/NKH58.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "33000", Currency: "₡" },
        { id: "nike-60", img: "/NKH/NKH59.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "24000", Currency: "₡" },
        { id: "nike-61", img: "/NKH/NKH60.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "33000", Currency: "₡" },
        { id: "nike-62", img: "/NKH/NKH61.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "33000", Currency: "₡" },
        { id: "nike-63", img: "/NKH/NKH62.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "34500", Currency: "₡" },
        { id: "nike-64", img: "/NKH/NKH63.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "33000", Currency: "₡" },
        { id: "nike-65", img: "/NKH/NKH64.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-41", price: "24000", Currency: "₡" },
        { id: "nike-66", img: "/NKH/NKH65.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "30000", Currency: "₡" },
        { id: "nike-67", img: "/NKH/NKH66.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "34500", Currency: "₡" },
        { id: "nike-68", img: "/NKH/NKH67.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 43-44", price: "33000", Currency: "₡" },
        { id: "nike-69", img: "/NKH/NKH68.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "34500", Currency: "₡" },
        { id: "nike-70", img: "/NKH/NKH69.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "34500", Currency: "₡" },
        { id: "nike-71", img: "/NKH/NKH70.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "34500", Currency: "₡" },
        { id: "nike-72", img: "/NKH/NKH71.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "34500", Currency: "₡" },
        { id: "nike-73", img: "/NKH/NKH72.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-42", price: "24000", Currency: "₡" },
        { id: "nike-74", img: "/NKH/NKH73.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "33000", Currency: "₡" },
        { id: "nike-75", img: "/NKH/NKH74.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "24000", Currency: "₡" },
        { id: "nike-76", img: "/NKH/NKH75.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-41", price: "24000", Currency: "₡" },
        { id: "nike-77", img: "/NKH/NKH76.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "24000", Currency: "₡" },
        { id: "nike-78", img: "/NKH/NKH77.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "33000", Currency: "₡" },
        { id: "nike-79", img: "/NKH/NKH78.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "33000", Currency: "₡" },
        { id: "nike-80", img: "/NKH/NKH79.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "30000", Currency: "₡" },
        { id: "nike-81", img: "/NKH/NKH80.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "33000", Currency: "₡" },
        { id: "nike-82", img: "/NKH/NKH81.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "37500", Currency: "₡" },
        { id: "nike-83", img: "/NKH/NKH82.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "30000", Currency: "₡" },
        { id: "nike-84", img: "/NKH/NKH83.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "33000", Currency: "₡" },
        { id: "nike-85", img: "/NKH/NKH84.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "33000", Currency: "₡" },
        { id: "nike-86", img: "/NKH/NKH85.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40", price: "33000", Currency: "₡" },
        { id: "nike-87", img: "/NKH/NKH86.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "30000", Currency: "₡" },
        { id: "nike-88", img: "/NKH/NKH87.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "30000", Currency: "₡" },
        { id: "nike-89", img: "/NKH/NKH88.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "30000", Currency: "₡" },
        { id: "nike-90", img: "/NKH/NKH89.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "30000", Currency: "₡" },
        { id: "nike-91", img: "/NKH/NKH90.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "30000", Currency: "₡" },
        { id: "nike-92", img: "/NKH/NKH91.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "24000", Currency: "₡" },
        { id: "nike-93", img: "/NKH/NKH92.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "33000", Currency: "₡" },
        { id: "nike-94", img: "/NKH/NKH93.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "30000", Currency: "₡" },
        { id: "nike-95", img: "/NKH/NKH94.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "30000", Currency: "₡" },
        { id: "nike-96", img: "/NKH/NKH95.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "30000", Currency: "₡" },
        { id: "nike-96", img: "/NKH/NKH96.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "30000", Currency: "₡" },
        { id: "nike-97", img: "/NKH/NKH97.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "33000", Currency: "₡" },
        { id: "nike-98", img: "/NKH/NKH98.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "30000", Currency: "₡" },
        { id: "nike-99", img: "/NKH/NKH99.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "37500", Currency: "₡" },
        { id: "nike-100", img: "/NKH/NKH100.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "24000", Currency: "₡" },
        { id: "nike-101", img: "/NKH/NKH101.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "33000", Currency: "₡" },
        { id: "nike-102", img: "/NKH/NKH102.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "33000", Currency: "₡" },
        { id: "nike-103", img: "/NKH/NKH103.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "33000", Currency: "₡" },
        { id: "nike-104", img: "/NKH/NKH104.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "30000", Currency: "₡" },
        { id: "nike-105", img: "/NKH/NKH105.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "30000", Currency: "₡" },
        { id: "nike-106", img: "/NKH/NKH106.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "30000", Currency: "₡" },
        { id: "nike-107", img: "/NKH/NKH107.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "30000", Currency: "₡" },
        { id: "nike-108", img: "/NKH/NKH108.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "33000", Currency: "₡" },
        { id: "nike-109", img: "/NKH/NKH109.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "37500", Currency: "₡" },

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

export default Nike;