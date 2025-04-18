import React from "react";

function Tommy2() {
    const products = [
        { img: "/TOMMY/TM/TM1.jpg", title: "Tommy Hilfiger", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 30.000" },
        { img: "/TOMMY/TM/TM2.jpg", title: "Tommy Hilfiger", model: "Modelo Exclusivo", size: "Talla: 36-39", price: "¢ 30.000" },
        { img: "/TOMMY/TM/TM3.jpg", title: "Tommy Hilfiger", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 30.000" },
        { img: "/TOMMY/TM/TM4.jpg", title: "Tommy Hilfiger", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 30.000" },
        { img: "/TOMMY/TM/TM5.jpg", title: "Tommy Hilfiger", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 30.000" },
        { img: "/TOMMY/TM/TM6.jpg", title: "Tommy Hilfiger", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 30.000" },
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

export default Tommy2;