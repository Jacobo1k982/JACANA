import React from "react";

function NewB2() {
    const products = [
        { img: "/NEWBALANCE/NBM/NBM1.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 36-39", price: "¢ 37.500" },
        { img: "/NEWBALANCE/NBM/NBM2.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 36-37", price: "¢ 37.500" },
        { img: "/NEWBALANCE/NBM/NBM3.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 37.500" },
        { img: "/NEWBALANCE/NBM/NBM4.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 37.500" },
        { img: "/NEWBALANCE/NBM/NBM5.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 37.500" },
        { img: "/NEWBALANCE/NBM/NBM6.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 37.500" },
        { img: "/NEWBALANCE/NBM/NBM7.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 37.500" },
        { img: "/NEWBALANCE/NBM/NBM8.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 37.500" },
        { img: "/NEWBALANCE/NBM/NBM9.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 37.500" },
        { img: "/NEWBALANCE/NBM/NBM10.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 37.500" },
        { img: "/NEWBALANCE/NBM/NBM11.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 37.500" },
        { img: "/NEWBALANCE/NBM/NBM12.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 36-44", price: "¢ 37.500" },
        { img: "/NEWBALANCE/NBM/NBM13.jpg", title: "NewBalance", model: "Modelo Exclusivo", size: "Talla: 36-37", price: "¢ 37.500" },

    ];

    return (
        <div className="">
            <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg border rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-transform duration-300 hover:scale-105"
                    >
                        <img
                            src={product.img}
                            alt={product.title}
                            className="w-full h-[450px] object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{product.title}</h3>
                            <p className="text-gray-600">{product.model}</p>
                            <p className="text-sm text-gray-500">{product.size}</p>
                            <p className="text-red-600 font-bold">{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewB2;