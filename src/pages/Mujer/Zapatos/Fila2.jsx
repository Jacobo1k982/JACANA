import React from "react";

function Fila2() {
    const products = [
        { img: "/FILA/FILAM/FILA1.jpg", title: "Fila", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 30.000" },
        { img: "/FILA/FILAM/FILA2.jpg", title: "Fila", model: "Modelo Exclusivo", size: "Talla: 36/37", price: "¢ 30.000" },  

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

export default Fila2;