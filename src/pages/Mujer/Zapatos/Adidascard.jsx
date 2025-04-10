import React from "react";

function Adidascard() {
    const products = [
        { img: "/ADSM/ADSM1.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 30.000" },
        { img: "/ADSM/ADSM2.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-42", price: "¢ 24.000" },
    ]
};

return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-black text-2xl font-bold mb-6 text-centerr">Colección Adidas</h2>
        <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
                <div
                    key={index}
                    className="border rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-transform duration-300 hover:scale-105"
                >
                    <img
                        src={product.img}
                        alt={product.title}
                        className="w-full h-64 object-cover"
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

export default Adidascard;