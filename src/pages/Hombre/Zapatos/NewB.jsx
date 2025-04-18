import React from "react";

function NewB() {
    const products = [
        { img: "/NEWBALANCE/NBH/NBH1.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 37.500" },
        { img: "/NEWBALANCE/NBH/NBH2.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 41-44", price: "¢ 37.500" },
        { img: "/NEWBALANCE/NBH/NBH3.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 40", price: "¢ 37.500" },
        { img: "/NEWBALANCE/NBH/NBH4.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 37.500" },
        { img: "/NEWBALANCE/NBH/NBH5.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 34.500" },
        { img: "/NEWBALANCE/NBH/NBH6.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 40/41", price: "¢ 33.000" },
        { img: "/NEWBALANCE/NBH/NBH7.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 30.000" },
        { img: "/NEWBALANCE/NBH/NBH8.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 40-42", price: "¢ 30.000" },
        { img: "/NEWBALANCE/NBH/NBH9.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 40", price: "¢ 37.500" },
        { img: "/NEWBALANCE/NBH/NBH10.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 40-42", price: "¢ 37.500" },
        { img: "/NEWBALANCE/NBH/NBH11.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 40", price: "¢ 37.500" },
        { img: "/NEWBALANCE/NBH/NBH12.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 37.500" },
        { img: "/NEWBALANCE/NBH/NBH13.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 41-43", price: "¢ 24.000" },
        { img: "/NEWBALANCE/NBH/NBH14.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 37.500" },
        { img: "/NEWBALANCE/NBH/NBH15.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 42-43", price: "¢ 24.000" },
        { img: "/NEWBALANCE/NBH/NBH16.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 37.500" },
        { img: "/NEWBALANCE/NBH/NBH17.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 41-43", price: "¢ 37.500" },

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

export default NewB;