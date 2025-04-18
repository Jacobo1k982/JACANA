import React from "react";

function Converse2 () {
    const products = [
        { img: "/CONVERSE/CONVM/CONVM1.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 35-39", price: "¢ 33.000" },
        { img: "/CONVERSE/CONVM/CONVM2.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 36/37/40", price: "¢ 24.000" },
        { img: "/CONVERSE/CONVM/CONVM3.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 24.000" },
        { img: "/CONVERSE/CONVM/CONVM4.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 35-40", price: "¢ 30.000" },
        { img: "/CONVERSE/CONVM/CONVM5.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 35-40", price: "¢ 30.000" },
        { img: "/CONVERSE/CONVM/CONVM6.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 38/39", price: "¢ 24.000" },
        { img: "/CONVERSE/CONVM/CONVM7.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 36-39", price: "¢ 24.000" },
        { img: "/CONVERSE/CONVM/CONVM8.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 24.000" },
        { img: "/CONVERSE/CONVM/CONVM9.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 24.000" },
        { img: "/CONVERSE/CONVM/CONVM10.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 24.000" },
        { img: "/CONVERSE/CONVM/CONVM11.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 37", price: "¢ 33.000" },
        { img: "/CONVERSE/CONVM/CONVM12.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 33.000" },
        { img: "/CONVERSE/CONVM/CONVM13.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 35", price: "¢ 33.000" },
        { img: "/CONVERSE/CONVM/CONVM14.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 35-38", price: "¢ 33.000" },
        { img: "/CONVERSE/CONVM/CONVM15.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 33.000" },
        { img: "/CONVERSE/CONVM/CONVM16.jpg", title: "Converse", model: "Modelo Exclusivo", size: "Talla: 35-39", price: "¢ 33.000" },

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

export default Converse2;