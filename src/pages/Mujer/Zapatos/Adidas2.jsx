import React from "react";

function Adidascard() {
    const products = [
        { img: "/ADIDAS/ADSM/ADSM1.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSM/ADSM2.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/ADIDAS/ADSM/ADSM3.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSM/ADSM4.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSM/ADSM5.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSM/ADSM6.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSM/ADSM7.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSM/ADSM8.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/ADIDAS/ADSM/ADSM9.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/ADIDAS/ADSM/ADSM10.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/ADIDAS/ADSM/ADSM11.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/ADIDAS/ADSM/ADSM12.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-39", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSM/ADSM13.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSM/ADSM14.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-38", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSM/ADSM15.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/ADIDAS/ADSM/ADSM16.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/ADIDAS/ADSM/ADSM17.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSM/ADSM18.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSM/ADSM19.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSM/ADSM20.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-39", price: "¢ 34.500" },
        { img: "/ADIDAS/ADSM/ADSM21.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSM/ADSM22.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSM/ADSM23.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSM/ADSM24.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/ADIDAS/ADSM/ADSM25.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSM/ADSM26.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSM/ADSM27.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSM/ADSM28.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSM/ADSM29.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-37", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSM/ADSM30.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/ADIDAS/ADSM/ADSM31.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/ADIDAS/ADSM/ADSM32.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/ADIDAS/ADSM/ADSM33.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSM/ADSM34.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSM/ADSM35.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 37-39", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSM/ADSM36.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-37", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSM/ADSM37.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-39", price: "¢ 34.500" },
        { img: "/ADIDAS/ADSM/ADSM38.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-39", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSM/ADSM39.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSM/ADSM40.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 34.500" },
        { img: "/ADIDAS/ADSM/ADSM41.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36/38/40", price: "¢ 30.000" },
        { img: "/ADIDAS/ADSM/ADSM42.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 37-40", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSM/ADSM43.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-39", price: "¢ 34.500" },
        { img: "/ADIDAS/ADSM/ADSM44.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSM/ADSM45.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSM/ADSM46.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 38-40", price: "¢ 34.500" },
        { img: "/ADIDAS/ADSM/ADSM47.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSM/ADSM48.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSM/ADSM49.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-40", price: "¢ 37.500" },

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

export default Adidascard;