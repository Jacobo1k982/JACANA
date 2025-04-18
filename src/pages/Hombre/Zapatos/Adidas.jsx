import React from "react";

function Adidas() {
    const products = [
        { img: "/ADIDAS/ADSH/ADSH1.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 36-44", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSH/ADSH2.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 24.000" },
        { img: "ADIDAS//ADSH/ADSH3.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSH/ADSH4.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 34.500" },
        { img: "/ADIDAS/ADSH/ADSH5.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-41", price: "¢ 34.500" },
        { img: "/ADIDAS/ADSH/ADSH6.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSH/ADSH7.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 34.500" },
        { img: "/ADIDAS/ADSH/ADSH8.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSH/ADSH9.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 41-44", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSH/ADSH10.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSH/ADSH11.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSH/ADSH12.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40/41/43", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSH/ADSH13.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 30.000" },
        { img: "/ADIDAS/ADSH/ADSH14.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 34.500" },
        { img: "/ADIDAS/ADSH/ADSH15.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 30.000" },
        { img: "/ADIDAS/ADSH/ADSH16.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 43", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSH/ADSH17.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSH/ADSH18.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSH/ADSH19.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSH/ADSH20.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSH/ADSH21.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSH/ADSH22.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSH/ADSH23.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSH/ADSH24.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-41", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSH/ADSH25.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 41-44", price: "¢ 34.500" },
        { img: "/ADIDAS/ADSH/ADSH26.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 42", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSH/ADSH27.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 41/43/44", price: "¢ 34.500" },
        { img: "/ADIDAS/ADSH/ADSH28.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSH/ADSH29.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSH/ADSH30.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSH/ADSH31.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 41-43", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSH/ADSH32.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-41", price: "¢ 34.500" },
        { img: "/ADIDAS/ADSH/ADSH33.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 34.500" },
        { img: "/ADIDAS/ADSH/ADSH34.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-41", price: "¢ 19.500" },
        { img: "/ADIDAS/ADSH/ADSH35.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSH/ADSH36.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 43", price: "¢ 34.500" },
        { img: "/ADIDAS/ADSH/ADSH37.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 41-43", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSH/ADSH38.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 34.500" },
        { img: "/ADIDAS/ADSH/ADSH39.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSH/ADSH40.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 19.500" },
        { img: "/ADIDAS/ADSH/ADSH41.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-42", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSH/ADSH42.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 24.500" },
        { img: "/ADIDAS/ADSH/ADSH43.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSH/ADSH44.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSH/ADSH45.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSH/ADSH46.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSH/ADSH47.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 41", price: "¢ 19.500" },
        { img: "/ADIDAS/ADSH/ADSH48.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 41-42", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSH/ADSH49.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40", price: "¢ 34.500" },
        { img: "/ADIDAS/ADSH/ADSH50.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40", price: "¢ 34.500" },
        { img: "/ADIDAS/ADSH/ADSH51.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSH/ADSH52.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSH/ADSH53.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSH/ADSH54.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSH/ADSH55.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40/41/43/44", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSH/ADSH56.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 41", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSH/ADSH57.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 4-43", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSH/ADSH58.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 41", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSH/ADSH59.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 34.500" },
        { img: "/ADIDAS/ADSH/ADSH60.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSH/ADSH61.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSH/ADSH62.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 41-43", price: "¢ 34.500" },
        { img: "/ADIDAS/ADSH/ADSH63.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40/41/43/44", price: "¢ 34.500" },
        { img: "/ADIDAS/ADSH/ADSH64.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 34.500" },
        { img: "/ADIDAS/ADSH/ADSH65.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 42-43", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSH/ADSH66.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 34.500" },
        { img: "/ADIDAS/ADSH/ADSH67.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 34.500" },
        { img: "/ADIDAS/ADSH/ADSH68.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSH/ADSH69.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 34.500" },
        { img: "/ADIDAS/ADSH/ADSH70.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSH/ADSH71.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 42", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSH/ADSH72.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSH/ADSH73.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40/41/43/44", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSH/ADSH74.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSH/ADSH75.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 44", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSH/ADSH76.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSH/ADSH77.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSH/ADSH78.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40", price: "¢ 34.500" },
        { img: "/ADIDAS/ADSH/ADSH79.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 24.000" },
        { img: "/ADIDAS/ADSH/ADSH80.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-41", price: "¢ 34.500" },
        { img: "/ADIDAS/ADSH/ADSH81.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 37.500" },
        { img: "/ADIDAS/ADSH/ADSH82.jpg", title: "Adidas", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 37.500" },


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

export default Adidas;