import React from "react";

function Gorra() {
    const products = [
        { img: "/GORRAS/GR1.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 15.000" },
        { img: "/GORRAS/GR2.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 15.000" },
        { img: "/GORRAS/GR3.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 15.000" },
        { img: "/GORRAS/GR4.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 12.000" },
        { img: "/GORRAS/GR5.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 12.000" },
        { img: "/GORRAS/GR6.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 15.000" },
        { img: "/GORRAS/GR7.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 15.000" },
        { img: "/GORRAS/GR8.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 15.000" },
        { img: "/GORRAS/GR9.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 15.000" },
        { img: "/GORRAS/GR10.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 15.000" },
        { img: "/GORRAS/GR11.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 15.000" },
        { img: "/GORRAS/GR12.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 15.000" },
        { img: "/GORRAS/GR13.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 15.000" },
        { img: "/GORRAS/GR14.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 12.000" },
        { img: "/GORRAS/GR15.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 15.000" },
        { img: "/GORRAS/GR16.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 15.000" },
        { img: "/GORRAS/GR17.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 15.000" },
        { img: "/GORRAS/GR18.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 12.000" },
        { img: "/GORRAS/GR19.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 15.000" },
        { img: "/GORRAS/GR20.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 15.000" },
        { img: "/GORRAS/GR21.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 15.000" },
        { img: "/GORRAS/GR22.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 15.000" },
        { img: "/GORRAS/GR23.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 15.000" },
        { img: "/GORRAS/GR24.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 12.000" },
        { img: "/GORRAS/GR25.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 15.000" },
        { img: "/GORRAS/GR26.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 15.000" },
        { img: "/GORRAS/GR27.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 15.000" },
        { img: "/GORRAS/GR28.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 15.000" },
        { img: "/GORRAS/GR29.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 15.000" },
        { img: "/GORRAS/GR30.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 12.000" },
        { img: "/GORRAS/GR31.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 12.000" },
        { img: "/GORRAS/GR32.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 12.000" },
        { img: "/GORRAS/GR33.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 12.000" },
        { img: "/GORRAS/GR34.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 12.000" },
        { img: "/GORRAS/GR35.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 12.000" },
        { img: "/GORRAS/GR36.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 12.000" },
        { img: "/GORRAS/GR37.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 12.000" },
        { img: "/GORRAS/GR38.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 12.000" },
        { img: "/GORRAS/GR39.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 12.000" },
        { img: "/GORRAS/GR40.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 12.000" },
        { img: "/GORRAS/GR41.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 12.000" },
        { img: "/GORRAS/GR42.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 12.000" },
        { img: "/GORRAS/GR43.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 12.000" },
        { img: "/GORRAS/GR44.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 12.000" },
        { img: "/GORRAS/GR45.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 12.000" },
        { img: "/GORRAS/GR46.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 12.000" },
        { img: "/GORRAS/GR47.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 15.000" },
        { img: "/GORRAS/GR48.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 12.000" },
        { img: "/GORRAS/GR49.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 15.000" },
        { img: "/GORRAS/GR50.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 15.000" },
        { img: "/GORRAS/GR51.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 15.000" },
        { img: "/GORRAS/GR52.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 15.000" },
        { img: "/GORRAS/GR53.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 15.000" },
        { img: "/GORRAS/GR54.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 15.000" },
        { img: "/GORRAS/GR55.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 15.000" },
        { img: "/GORRAS/GR56.JPG", title: "Gorra", model: "Modelo Exclusivo", price: "¢ 15.000" },

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
                            <p className="text-red-600 font-bold">{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gorra;