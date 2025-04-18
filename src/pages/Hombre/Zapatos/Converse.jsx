import React from "react";

function Converse() {
    const products = [
        { img: "/CONVERSE/CONVH/CONVH1.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "¢ 24.000" },
        { img: "/CONVERSE/CONVH/CONVH2.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 40/41/44/45", price: "¢ 24.000" },
        { img: "/CONVERSE/CONVH/CONVH3.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ " },
        { img: "/CONVERSE/CONVH/CONVH4.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 40/41/42/45", price: "¢ 24.000" },
        { img: "/CONVERSE/CONVH/CONVH5.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 30.000" },
        { img: "/CONVERSE/CONVH/CONVH6.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 24.000" },
        { img: "/CONVERSE/CONVH/CONVH7.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 30.000" },
        { img: "/CONVERSE/CONVH/CONVH8.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 30.000" },
        { img: "/CONVERSE/CONVH/CONVH9.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 24.000" },
        { img: "/CONVERSE/CONVH/CONVH10.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 40", price: "¢ 24.000" },
        { img: "/CONVERSE/CONVH/CONVH11.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 24.000" },
        { img: "/CONVERSE/CONVH/CONVH12.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 24.000" },
        { img: "/CONVERSE/CONVH/CONVH13.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 33.000" },
        { img: "/CONVERSE/CONVH/CONVH14.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 24.000" },
        { img: "/CONVERSE/CONVH/CONVH15.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 33.000" },
        { img: "/CONVERSE/CONVH/CONVH16.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 33.000" },

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

export default Converse;