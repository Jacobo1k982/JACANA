import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../../../app/CartSlice";
import { FaCheckCircle } from "react-icons/fa";
import toast from "react-hot-toast";

function Adidas() {

    const dispatch = useDispatch();
    const [clickedProductId, setClickedProductId] = useState(null);

    const products = [
        { id: "ad-1", img: "/ADIDAS/ADSH/ADSH1.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-44", price: "24000", Currency: "₡" },
        { id: "ad-2", img: "/ADIDAS/ADSH/ADSH2.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "24000", Currency: "₡" },
        { id: "ad-3", img: "ADIDAS//ADSH/ADSH3.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "24000", Currency: "₡" },
        { id: "ad-4", img: "/ADIDAS/ADSH/ADSH4.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "34500", Currency: "₡" },
        { id: "ad-5", img: "/ADIDAS/ADSH/ADSH5.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-41", price: "34500", Currency: "₡" },
        { id: "ad-6", img: "/ADIDAS/ADSH/ADSH6.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "37500", Currency: "₡" },
        { id: "ad-7", img: "/ADIDAS/ADSH/ADSH7.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "34500", Currency: "₡" },
        { id: "ad-8", img: "/ADIDAS/ADSH/ADSH8.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "37500", Currency: "₡" },
        { id: "ad-9", img: "/ADIDAS/ADSH/ADSH9.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 41-44", price: "24000", Currency: "₡" },
        { id: "ad-10", img: "/ADIDAS/ADSH/ADSH10.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "37500", Currency: "₡" },
        { id: "ad-11", img: "/ADIDAS/ADSH/ADSH11.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "37500", Currency: "₡" },
        { id: "ad-12", img: "/ADIDAS/ADSH/ADSH12.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40/41/43", price: "24000", Currency: "₡" },
        { id: "ad-13", img: "/ADIDAS/ADSH/ADSH13.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "30000", Currency: "₡" },
        { id: "ad-14", img: "/ADIDAS/ADSH/ADSH14.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "34500", Currency: "₡" },
        { id: "ad-15", img: "/ADIDAS/ADSH/ADSH15.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "30000", Currency: "₡" },
        { id: "ad-16", img: "/ADIDAS/ADSH/ADSH16.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 43", price: "24000", Currency: "₡" },
        { id: "ad-17", img: "/ADIDAS/ADSH/ADSH17.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "24000", Currency: "₡" },
        { id: "ad-18", img: "/ADIDAS/ADSH/ADSH18.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "24000", Currency: "₡" },
        { id: "ad-19", img: "/ADIDAS/ADSH/ADSH19.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "24000", Currency: "₡" },
        { id: "ad-20", img: "/ADIDAS/ADSH/ADSH20.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "37500", Currency: "₡" },
        { id: "ad-21", img: "/ADIDAS/ADSH/ADSH21.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "37500", Currency: "₡" },
        { id: "ad-22", img: "/ADIDAS/ADSH/ADSH22.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "24000", Currency: "₡" },
        { id: "ad-23", img: "/ADIDAS/ADSH/ADSH23.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "37500", Currency: "₡" },
        { id: "ad-24", img: "/ADIDAS/ADSH/ADSH24.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-41", price: "24000", Currency: "₡" },
        { id: "ad-25", img: "/ADIDAS/ADSH/ADSH25.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 41-44", price: "34500", Currency: "₡" },
        { id: "ad-26", img: "/ADIDAS/ADSH/ADSH26.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 42", price: "24000", Currency: "₡" },
        { id: "ad-27", img: "/ADIDAS/ADSH/ADSH27.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 41/43/44", price: "34500", Currency: "₡" },
        { id: "ad-28", img: "/ADIDAS/ADSH/ADSH28.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40", price: "37500", Currency: "₡" },
        { id: "ad-29", img: "/ADIDAS/ADSH/ADSH29.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "24000", Currency: "₡" },
        { id: "ad-30", img: "/ADIDAS/ADSH/ADSH30.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "37500", Currency: "₡" },
        { id: "ad-31", img: "/ADIDAS/ADSH/ADSH31.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 41-43", price: "24000", Currency: "₡" },
        { id: "ad-32", img: "/ADIDAS/ADSH/ADSH32.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-41", price: "34500", Currency: "₡" },
        { id: "ad-33", img: "/ADIDAS/ADSH/ADSH33.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "34500", Currency: "₡" },
        { id: "ad-34", img: "/ADIDAS/ADSH/ADSH34.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-41", price: "19500", Currency: "₡" },
        { id: "ad-35", img: "/ADIDAS/ADSH/ADSH35.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "37500", Currency: "₡" },
        { id: "ad-36", img: "/ADIDAS/ADSH/ADSH36.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 43", price: "34500", Currency: "₡" },
        { id: "ad-37", img: "/ADIDAS/ADSH/ADSH37.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 41-43", price: "24000", Currency: "₡" },
        { id: "ad-38", img: "/ADIDAS/ADSH/ADSH38.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "34500", Currency: "₡" },
        { id: "ad-39", img: "/ADIDAS/ADSH/ADSH39.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "24000", Currency: "₡" },
        { id: "ad-40", img: "/ADIDAS/ADSH/ADSH40.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "19500", Currency: "₡" },
        { id: "ad-41", img: "/ADIDAS/ADSH/ADSH41.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-42", price: "24000", Currency: "₡" },
        { id: "ad-42", img: "/ADIDAS/ADSH/ADSH42.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "24500", Currency: "₡" },
        { id: "ad-43", img: "/ADIDAS/ADSH/ADSH43.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "37500", Currency: "₡" },
        { id: "ad-44", img: "/ADIDAS/ADSH/ADSH44.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "37500", Currency: "₡" },
        { id: "ad-45", img: "/ADIDAS/ADSH/ADSH45.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "37500", Currency: "₡" },
        { id: "ad-46", img: "/ADIDAS/ADSH/ADSH46.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "24000", Currency: "₡" },
        { id: "ad-47", img: "/ADIDAS/ADSH/ADSH47.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 41", price: "19500", Currency: "₡" },
        { id: "ad-48", img: "/ADIDAS/ADSH/ADSH48.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 41-42", price: "24000", Currency: "₡" },
        { id: "ad-49", img: "/ADIDAS/ADSH/ADSH49.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40", price: "34500", Currency: "₡" },
        { id: "ad-50", img: "/ADIDAS/ADSH/ADSH50.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40", price: "34500", Currency: "₡" },
        { id: "ad-51", img: "/ADIDAS/ADSH/ADSH51.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "37500", Currency: "₡" },
        { id: "ad-52", img: "/ADIDAS/ADSH/ADSH52.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40", price: "7500", Currency: "₡" },
        { id: "ad-53", img: "/ADIDAS/ADSH/ADSH53.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "37500", Currency: "₡" },
        { id: "ad-54", img: "/ADIDAS/ADSH/ADSH54.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "24000", Currency: "₡" },
        { id: "ad-55", img: "/ADIDAS/ADSH/ADSH55.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40/41/43/44", price: "24000", Currency: "₡" },
        { id: "ad-56", img: "/ADIDAS/ADSH/ADSH56.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 41", price: "24000", Currency: "₡" },
        { id: "ad-57", img: "/ADIDAS/ADSH/ADSH57.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 4-43", price: "24000", Currency: "₡" },
        { id: "ad-58", img: "/ADIDAS/ADSH/ADSH58.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 41", price: "24000", Currency: "₡" },
        { id: "ad-59", img: "/ADIDAS/ADSH/ADSH59.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "34500", Currency: "₡" },
        { id: "ad-60", img: "/ADIDAS/ADSH/ADSH60.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "24000", Currency: "₡" },
        { id: "ad-61", img: "/ADIDAS/ADSH/ADSH61.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "24000", Currency: "₡" },
        { id: "ad-62", img: "/ADIDAS/ADSH/ADSH62.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 41-43", price: "34500", Currency: "₡" },
        { id: "ad-63", img: "/ADIDAS/ADSH/ADSH63.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40/41/43/44", price: "34500", Currency: "₡" },
        { id: "ad-64", img: "/ADIDAS/ADSH/ADSH64.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "34500", Currency: "₡" },
        { id: "ad-65", img: "/ADIDAS/ADSH/ADSH65.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 42-43", price: "24000", Currency: "₡" },
        { id: "ad-66", img: "/ADIDAS/ADSH/ADSH66.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "34500", Currency: "₡" },
        { id: "ad-67", img: "/ADIDAS/ADSH/ADSH67.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "34500", Currency: "₡" },
        { id: "ad-68", img: "/ADIDAS/ADSH/ADSH68.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "24000", Currency: "₡" },
        { id: "ad-69", img: "/ADIDAS/ADSH/ADSH69.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "34500", Currency: "₡" },
        { id: "ad-70", img: "/ADIDAS/ADSH/ADSH70.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "24000", Currency: "₡" },
        { id: "ad-71", img: "/ADIDAS/ADSH/ADSH71.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 42", price: "24000", Currency: "₡" },
        { id: "ad-72", img: "/ADIDAS/ADSH/ADSH72.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "24000", Currency: "₡" },
        { id: "ad-73", img: "/ADIDAS/ADSH/ADSH73.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40/41/43/44", price: "24000", Currency: "₡" },
        { id: "ad-74", img: "/ADIDAS/ADSH/ADSH74.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "24000", Currency: "₡" },
        { id: "ad-75", img: "/ADIDAS/ADSH/ADSH75.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 44", price: "24000", Currency: "₡" },
        { id: "ad-76", img: "/ADIDAS/ADSH/ADSH76.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "37500", Currency: "₡" },
        { id: "ad-77", img: "/ADIDAS/ADSH/ADSH77.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "24000", Currency: "₡" },
        { id: "ad-78", img: "/ADIDAS/ADSH/ADSH78.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40", price: "34500", Currency: "₡" },
        { id: "ad-79", img: "/ADIDAS/ADSH/ADSH79.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "24000", Currency: "₡" },
        { id: "ad-80", img: "/ADIDAS/ADSH/ADSH80.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-41", price: "34500", Currency: "₡" },
        { id: "ad-81", img: "/ADIDAS/ADSH/ADSH81.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "37500", Currency: "₡" },
        { id: "ad-82", img: "/ADIDAS/ADSH/ADSH82.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "37500", Currency: "₡" },


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

export default Adidas;