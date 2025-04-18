import React from "react";

function Sandalias() {
    const products = [
        { img: "/SANDALIAS/SANDH/SAND1.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND2.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND3.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND4.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-41", price: "¢ 18.500" },
        { img: "/SANDALIAS/SANDH/SAND5.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40/42/43", price: "¢ 18.500" },
        { img: "/SANDALIAS/SANDH/SAND6.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40/41/42/44", price: "¢ 18.500" },
        { img: "/SANDALIAS/SANDH/SAND7.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-42", price: "¢ 18.500" },
        { img: "/SANDALIAS/SANDH/SAND8.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-42", price: "¢ 18.500" },
        { img: "/SANDALIAS/SANDH/SAND9.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40", price: "¢ 18.500" },
        { img: "/SANDALIAS/SANDH/SAND10.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40/41", price: "¢ 18.500" },
        { img: "/SANDALIAS/SANDH/SAND11.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 4-45", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND12.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND13.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND14.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND15.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 4-44", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND16.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40/41/45", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND17.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND18.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40/41", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND19.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 41/42", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND20.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "¢ 18.500" },
        { img: "/SANDALIAS/SANDH/SAND21.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "¢ 18.500" },
        { img: "/SANDALIAS/SANDH/SAND22.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "¢ 18.500" },
        { img: "/SANDALIAS/SANDH/SAND23.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40/41/44/45", price: "¢ 18.500" },
        { img: "/SANDALIAS/SANDH/SAND24.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND25.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND26.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 41-45", price: "¢ 18.500" },
        { img: "/SANDALIAS/SANDH/SAND27.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 43", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND28.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND29.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND30.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND31.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 41/43/45", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND32.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND33.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND34.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND35.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND36.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND37.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND38.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND39.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND40.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND41.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND42.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40/41", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND43.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 18.500" },
        { img: "/SANDALIAS/SANDH/SAND44.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 42", price: "¢ 18.500" },
        { img: "/SANDALIAS/SANDH/SAND45.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 41", price: "¢ 18.500" },
        { img: "/SANDALIAS/SANDH/SAND46.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 18.500" },
        { img: "/SANDALIAS/SANDH/SAND47.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND48.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND49.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND50.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND51.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND52.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND53.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND54.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND55.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40/41/44/45", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND56.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND57.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40/42/43", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND58.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "¢ 15.000" },
        { img: "/SANDALIAS/SANDH/SAND59.jpg", title: "Sandalias", model: "Modelo Exclusivo", size: "Talla: 40-45", price: "¢ 15.000" },
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

export default Sandalias;