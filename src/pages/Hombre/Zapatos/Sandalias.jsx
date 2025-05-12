import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../../../app/CartSlice";
import { FaCheckCircle } from "react-icons/fa";
import toast from "react-hot-toast";

function Sandalias() {

    const dispatch = useDispatch();
    const [clickedProductId, setClickedProductId] = useState(null);

    const products = [
        { id: "s-1", img: "/SANDALIAS/SANDH/SAND1.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "15000", Currency: "₡" },
        { id: "s-2", img: "/SANDALIAS/SANDH/SAND2.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "15000", Currency: "₡" },
        { id: "s-3", img: "/SANDALIAS/SANDH/SAND3.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "15000", Currency: "₡" },
        { id: "s-4", img: "/SANDALIAS/SANDH/SAND4.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-41", price: "18500", Currency: "₡" },
        { id: "s-5", img: "/SANDALIAS/SANDH/SAND5.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40/42/43", price: "18500", Currency: "₡" },
        { id: "s-6", img: "/SANDALIAS/SANDH/SAND6.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40/41/42/44", price: "18500", Currency: "₡" },
        { id: "s-7", img: "/SANDALIAS/SANDH/SAND7.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-42", price: "18500", Currency: "₡" },
        { id: "s-8", img: "/SANDALIAS/SANDH/SAND8.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-42", price: "18500", Currency: "₡" },
        { id: "s-9", img: "/SANDALIAS/SANDH/SAND9.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40", price: "18500", Currency: "₡" },
        { id: "s-10", img: "/SANDALIAS/SANDH/SAND10.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40/41", price: "18500", Currency: "₡" },
        { id: "s-11", img: "/SANDALIAS/SANDH/SAND11.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 4-45", price: "15000", Currency: "₡" },
        { id: "s-12", img: "/SANDALIAS/SANDH/SAND12.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "15000", Currency: "₡" },
        { id: "s-13", img: "/SANDALIAS/SANDH/SAND13.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "15000", Currency: "₡" },
        { id: "s-14", img: "/SANDALIAS/SANDH/SAND14.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "15000", Currency: "₡" },
        { id: "s-15", img: "/SANDALIAS/SANDH/SAND15.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 4-44", price: "15000", Currency: "₡" },
        { id: "s-16", img: "/SANDALIAS/SANDH/SAND16.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40/41/45", price: "15000", Currency: "₡" },
        { id: "s-17", img: "/SANDALIAS/SANDH/SAND17.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "15000", Currency: "₡" },
        { id: "s-18", img: "/SANDALIAS/SANDH/SAND18.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40/41", price: "15000", Currency: "₡" },
        { id: "s-19", img: "/SANDALIAS/SANDH/SAND19.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 41/42", price: "15000", Currency: "₡" },
        { id: "s-20", img: "/SANDALIAS/SANDH/SAND20.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "18500", Currency: "₡" },
        { id: "s-21", img: "/SANDALIAS/SANDH/SAND21.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "18500", Currency: "₡" },
        { id: "s-22", img: "/SANDALIAS/SANDH/SAND22.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "18500", Currency: "₡" },
        { id: "s-23", img: "/SANDALIAS/SANDH/SAND23.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40/41/44/45", price: "18500", Currency: "₡" },
        { id: "s-24", img: "/SANDALIAS/SANDH/SAND24.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "15000", Currency: "₡" },
        { id: "s-25", img: "/SANDALIAS/SANDH/SAND25.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "15000", Currency: "₡" },
        { id: "s-26", img: "/SANDALIAS/SANDH/SAND26.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 41-45", price: "18500", Currency: "₡" },
        { id: "s-27", img: "/SANDALIAS/SANDH/SAND27.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 43", price: "15000", Currency: "₡" },
        { id: "s-28", img: "/SANDALIAS/SANDH/SAND28.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "15000", Currency: "₡" },
        { id: "s-29", img: "/SANDALIAS/SANDH/SAND29.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "15000", Currency: "₡" },
        { id: "s-30", img: "/SANDALIAS/SANDH/SAND30.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "15000", Currency: "₡" },
        { id: "s-31", img: "/SANDALIAS/SANDH/SAND31.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 41/43/45", price: "15000", Currency: "₡" },
        { id: "s-32", img: "/SANDALIAS/SANDH/SAND32.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "15000", Currency: "₡" },
        { id: "s-33", img: "/SANDALIAS/SANDH/SAND33.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "15000", Currency: "₡" },
        { id: "s-34", img: "/SANDALIAS/SANDH/SAND34.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "15000", Currency: "₡" },
        { id: "s-35", img: "/SANDALIAS/SANDH/SAND35.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "15000", Currency: "₡" },
        { id: "s-36", img: "/SANDALIAS/SANDH/SAND36.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "15000", Currency: "₡" },
        { id: "s-37", img: "/SANDALIAS/SANDH/SAND37.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "15000", Currency: "₡" },
        { id: "s-38", img: "/SANDALIAS/SANDH/SAND38.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "15000", Currency: "₡" },
        { id: "s-39", img: "/SANDALIAS/SANDH/SAND39.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "15000", Currency: "₡" },
        { id: "s-40", img: "/SANDALIAS/SANDH/SAND40.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "15000", Currency: "₡" },
        { id: "s-41", img: "/SANDALIAS/SANDH/SAND41.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "15000", Currency: "₡" },
        { id: "s-42", img: "/SANDALIAS/SANDH/SAND42.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40/41", price: "15000", Currency: "₡" },
        { id: "s-43", img: "/SANDALIAS/SANDH/SAND43.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "18500", Currency: "₡" },
        { id: "s-44", img: "/SANDALIAS/SANDH/SAND44.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 42", price: "18500", Currency: "₡" },
        { id: "s-45", img: "/SANDALIAS/SANDH/SAND45.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 41", price: "18500", Currency: "₡" },
        { id: "s-46", img: "/SANDALIAS/SANDH/SAND46.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "18500", Currency: "₡" },
        { id: "s-47", img: "/SANDALIAS/SANDH/SAND47.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "15000", Currency: "₡" },
        { id: "s-48", img: "/SANDALIAS/SANDH/SAND48.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "15000", Currency: "₡" },
        { id: "s-49", img: "/SANDALIAS/SANDH/SAND49.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "15000", Currency: "₡" },
        { id: "s-50", img: "/SANDALIAS/SANDH/SAND50.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "15000", Currency: "₡" },
        { id: "s-51", img: "/SANDALIAS/SANDH/SAND51.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "15000", Currency: "₡" },
        { id: "s-52", img: "/SANDALIAS/SANDH/SAND52.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "15000", Currency: "₡" },
        { id: "s-53", img: "/SANDALIAS/SANDH/SAND53.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "15000", Currency: "₡" },
        { id: "s-54", img: "/SANDALIAS/SANDH/SAND54.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "15000", Currency: "₡" },
        { id: "s-55", img: "/SANDALIAS/SANDH/SAND55.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40/41/44/45", price: "15000", Currency: "₡" },
        { id: "s-56", img: "/SANDALIAS/SANDH/SAND56.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "15000", Currency: "₡" },
        { id: "s-57", img: "/SANDALIAS/SANDH/SAND57.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40/42/43", price: "15000", Currency: "₡" },
        { id: "s-58", img: "/SANDALIAS/SANDH/SAND58.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "15000", Currency: "₡" },
        { id: "s-59", img: "/SANDALIAS/SANDH/SAND59.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "15000", Currency: "₡" },
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
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

export default Sandalias;