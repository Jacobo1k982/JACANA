import React from 'react';


function Nkmujer() {
    const products = [
        { img: "/NKM/NKM1.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM2.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-42", price: "¢ 34.500" },
        { img: "/NKM/NKM3.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM4.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM5.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM6.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM7.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM8.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM9.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM10.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM11.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM12.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM13.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM14.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM15.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM16.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM17.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM18.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM19.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM20.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM21.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM22.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM23.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM24.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM25.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM26.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM27.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM28.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM29.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM30.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM31.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM32.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM33.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM34.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM35.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM36.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM37.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM38.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM39.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM40.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM41.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM42.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKM/NKM43.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" }
    ];


    return (
        <div className="p-6 bg-white">
            <h2 className="text-2xl font-bold mb-6 text-center">Colección Nike</h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="border rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
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
};

export default Nkmujer;
