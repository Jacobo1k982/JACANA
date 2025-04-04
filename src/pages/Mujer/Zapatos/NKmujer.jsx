import React from 'react';


function NKmujer() {
    const products = [
        { img: "/NKM/NKM1.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM2.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM3.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM4.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM5.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM6.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM7.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM8.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM9.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM10.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM11.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM12.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM13.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM14.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM15.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM16.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM17.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM18.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM19.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM20.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM21.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM22.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM23.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM24.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM25.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM26.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM27.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM28.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM29.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM30.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM31.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM32.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM33.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM34.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM35.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM36.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM37.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM38.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM39.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM40.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM41.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM42.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },
        { img: "/NKM/NKM43.jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500" },


    ];

    return (
        <div className="grid grid-cols-4 sm:grid-cols-1 lg:grid-cols-1 gap-8 mt-10 p-4">
            {products.map((product, index) => (
                <div key={index} className="relative z-10 nike-container p-8 bg-white shadow-2xl rounded-3xl overflow-hidden w-80 h-96 flex flex-col items-center justify-between transition-transform duration-300 hover:scale-105">
                    <div className="relative w-full h-3/4 overflow-hidden rounded-2xl">
                        <img
                            className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-125"
                            src={product.img}
                            alt={product.title}
                        />
                    </div>
                    <div className="w-full text-center p-4 bg-gray-50 rounded-b-3xl">
                        <p className="text-2xl font-extrabold text-gray-900">{product.title}</p>
                        <p className="text-lg text-gray-500">{product.model}</p>
                        <p className="mt-2 text-xl font-bold text-red-500">{product.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NKmujer;
