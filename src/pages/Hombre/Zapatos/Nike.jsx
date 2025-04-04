import React from 'react';


function Nike() {
    const products = [
        { img: "/NKH/NK1.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/NKH/NK2.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-42", price: "¢ 27.000" },
        { img: "/NKH/NK3.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-44", price: "¢ 34.500" },
        { img: "/NKH/NK4.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 19.500" },
        { img: "/NKH/NK5.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 44", price: "¢ 24.000" },
        { img: "/NKH/NK6.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-42", price: "¢ 33.000" },
        { img: "/NKH/NK7.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 30.000" },
        { img: "/NKH/NK8.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 30.000" },
        { img: "/NKH/NK9.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 24.000" },
        { img: "/NKH/NK10.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-43", price: "¢ 33.000" },
        { img: "/NKH/NK11.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 24.000" },
        { img: "/NKH/NK12.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 34.500" },
        { img: "/NKH/NK13.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 34.500" },
        { img: "/NKH/NK14.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 34.500" },
        { img: "/NKH/NK15.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 34.500" },
        { img: "/NKH/NK16.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 33.000" },
        { img: "/NKH/NK17.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 41-43", price: "¢ 30.000" },
        { img: "/NKH/NK18.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 33.000" },
        { img: "/NKH/NK19.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 33.000" },
        { img: "/NKH/NK20.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 24.000" },
        { img: "/NKH/NK21.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 44", price: "¢ 24.000" },
        { img: "/NKH/NK22.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 33.000" },
        { img: "/NKH/NK23.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 30.000" },
        { img: "/NKH/NK24.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 33.000" },
        { img: "/NKH/NK25.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 24.000" },
        { img: "/NKH/NK26.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 24.000" },
        { img: "/NKH/NK27.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40", price: "¢ 33.000" },
        { img: "/NKH/NK28.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36-39", price: "¢ 33.000" },
        { img: "/NKH/NK29.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 37.500" },
        { img: "/NKH/NK30.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40", price: "¢ 33.000" },
        { img: "/NKH/NK31.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 36", price: "¢ 19.500" },
        { img: "/NKH/NK32.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 43-44", price: "¢ 24.000" },
        { img: "/NKH/NK33.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 33.000" },
        { img: "/NKH/NK34.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 33.000" },
        { img: "/NKH/NK35.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 30.000" },
        { img: "/NKH/NK36.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 34.500" },

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
                        <p className="text-lg text-gray-500">{product.size}</p>
                        <p className="mt-2 text-xl font-bold text-red-500">{product.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Nike;
