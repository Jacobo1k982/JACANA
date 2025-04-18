import React from "react";

function Puma2() {
    const products = [
        { img: "/PUMA/PMM/PMM1.jpg", title: "Puma", model: "Modelo Exclusivo", size: "Talla: 36", price: "¢ 24.000" },
        { img: "/PUMA/PMM/PMM2.jpg", title: "Puma", model: "Modelo Exclusivo", size: "Talla: 36", price: "¢ 24.000" },
        { img: "/PUMA/PMM/PMM3.jpg", title: "Puma", model: "Modelo Exclusivo", size: "Talla: 36", price: "¢ 24.000" },
        { img: "/PUMA/PMM/PMM4.jpg", title: "Puma", model: "Modelo Exclusivo", size: "Talla: 36", price: "¢ 24.000" },
        { img: "/PUMA/PMM/PMM5.jpg", title: "Puma", model: "Modelo Exclusivo", size: "Talla: 36/39", price: "¢ 24.000" },
        { img: "/PUMA/PMM/PMM6.jpg", title: "Puma", model: "Modelo Exclusivo", size: "Talla: 36/37", price: "¢ 24.000" },
        { img: "/PUMA/PMM/PMM7.jpg", title: "Puma", model: "Modelo Exclusivo", size: "Talla: 36/37", price: "¢ 24.000" },
        { img: "/PUMA/PMM/PMM8.jpg", title: "Puma", model: "Modelo Exclusivo", size: "Talla: 36/37/38/40", price: "¢ 24.000" },
        { img: "/PUMA/PMM/PMM9.jpg", title: "Puma", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 19.500" },
        { img: "/PUMA/PMM/PMM10.jpg", title: "Puma", model: "Modelo Exclusivo", size: "Talla: 36/40", price: "¢ 19.500" },
        { img: "/PUMA/PMM/PMM11.jpg", title: "Puma", model: "Modelo Exclusivo", size: "Talla: 36/40", price: "¢ 37.500" },

    ];

    return (
        <div className="bg-gray-900 text-white py-6">
            <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 shadow-lg border border-gray-700 rounded-2xl overflow-hidden hover:shadow-xl transition-transform duration-300 hover:scale-105"
                    >
                        <img
                            src={product.img}
                            alt={product.title}
                            className="w-full h-[500px] object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{product.title}</h3>
                            <p className="text-gray-400">{product.model}</p>
                            <p className="text-sm text-gray-500">{product.size}</p>
                            <p className="text-orange-500 font-bold">{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Puma2;