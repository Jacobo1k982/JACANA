import React from 'react';


function Nike() {
    const products = [
        { img: "/NKH/NKH1.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 30.000" },
        { img: "/NKH/NKH2.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-42", price: "¢ 24.000" },
        { img: "/NKH/NKH3.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 30.000" },
        { img: "/NKH/NKH4.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 24.000" },
        { img: "/NKH/NKH5.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 24.000" },
        { img: "/NKH/NKH6.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-42", price: "¢ 33.000" },
        { img: "/NKH/NKH7.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 33.000" },
        { img: "/NKH/NKH8.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 33.000" },
        { img: "/NKH/NKH9.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 24.000" },
        { img: "/NKH/NKH10.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 33.000" },
        { img: "/NKH/NKH11.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 33.000" },
        { img: "/NKH/NKH12.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 41", price: "¢ 24.000" },
        { img: "/NKH/NKH13.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 24.000" },
        { img: "/NKH/NKH14.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 33.000" },
        { img: "/NKH/NKH15.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 24.000" },
        { img: "/NKH/NKH16.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 41-43", price: "¢ 24.000" },
        { img: "/NKH/NKH17.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 33.000" },
        { img: "/NKH/NKH18.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40", price: "¢ 24.000" },
        { img: "/NKH/NKH19.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 33.000" },
        { img: "/NKH/NKH20.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 24.000" },
        { img: "/NKH/NKH21.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 33.000" },
        { img: "/NKH/NKH22.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 34.500" },
        { img: "/NKH/NKH23.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 33.000" },
        { img: "/NKH/NKH24.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 44", price: "¢ 37.500" },
        { img: "/NKH/NKH25.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 43", price: "¢ 33.000" },
        { img: "/NKH/NKH26.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 24.000" },
        { img: "/NKH/NKH27.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-41", price: "¢ 30.000" },
        { img: "/NKH/NKH28.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 33.000" },
        { img: "/NKH/NKH29.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 33.000" },
        { img: "/NKH/NKH30.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 33.000" },
        { img: "/NKH/NKH31.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 33.000" },
        { img: "/NKH/NKH32.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 43-44", price: "¢ 30.000" },
        { img: "/NKH/NKH33.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 33.000" },
        { img: "/NKH/NKH34.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 33.000" },
        { img: "/NKH/NKH35.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 33.000" },
        { img: "/NKH/NKH36.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 34.500" },
        { img: "/NKH/NKH37.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 34.500" },
        { img: "/NKH/NKH38.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 24.000" },
        { img: "/NKH/NKH39.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 30.000" },
        { img: "/NKH/NKH40.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 24.000" },
        { img: "/NKH/NKH41.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 24.000" },
        { img: "/NKH/NKH42.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 33.000" },
        { img: "/NKH/NKH43.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 30.000" },
        { img: "/NKH/NKH44.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-41", price: "¢ 33.000" },
        { img: "/NKH/NKH45.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 24.000" },
        { img: "/NKH/NKH46.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 33.000" },
        { img: "/NKH/NKH47.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 24.000" },
        { img: "/NKH/NKH48.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-41", price: "¢ 30.000" },
        { img: "/NKH/NKH49.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 33.000" },
        { img: "/NKH/NKH50.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-41", price: "¢ 33.000" },
        { img: "/NKH/NKH51.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 33.000" },
        { img: "/NKH/NKH52.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 43", price: "¢ 24.000" },
        { img: "/NKH/NKH53.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 33.000" },
        { img: "/NKH/NKH54.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 33.000" },
        { img: "/NKH/NKH55.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 33.000" },
        { img: "/NKH/NKH56.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 30.000" },
        { img: "/NKH/NKH57.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 33.000" },
        { img: "/NKH/NKH58.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 33.000" },
        { img: "/NKH/NKH59.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 24.000" },
        { img: "/NKH/NKH60.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 33.000" },
        { img: "/NKH/NKH61.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 33.000" },
        { img: "/NKH/NKH62.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 34.500" },
        { img: "/NKH/NKH63.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 33.000" },
        { img: "/NKH/NKH64.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-41", price: "¢ 24.000" },
        { img: "/NKH/NKH65.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 30.000" },
        { img: "/NKH/NKH66.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 34.500" },
        { img: "/NKH/NKH67.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 43-44", price: "¢ 33.000" },
        { img: "/NKH/NKH68.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 34.500" },
        { img: "/NKH/NKH69.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 34.500" },
        { img: "/NKH/NKH70.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 34.500" },
        { img: "/NKH/NKH71.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 34.500" },
        { img: "/NKH/NKH72.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-42", price: "¢ 24.000" },
        { img: "/NKH/NKH73.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 33.000" },
        { img: "/NKH/NKH74.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 24.000" },
        { img: "/NKH/NKH75.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-41", price: "¢ 24.000" },
        { img: "/NKH/NKH76.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 24.000" },
        { img: "/NKH/NKH77.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 33.000" },
        { img: "/NKH/NKH78.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 33.000" },
        { img: "/NKH/NKH79.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 30.000" },
        { img: "/NKH/NKH80.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 33.000" },
        { img: "/NKH/NKH81.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 37.500" },
        { img: "/NKH/NKH82.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 30.000" },
        { img: "/NKH/NKH83.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 33.000" },
        { img: "/NKH/NKH84.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 33.000" },
        { img: "/NKH/NKH85.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40", price: "¢ 33.000" },
        { img: "/NKH/NKH86.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 30.000" },
        { img: "/NKH/NKH87.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 30.000" },
        { img: "/NKH/NKH88.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 30.000" },
        { img: "/NKH/NKH89.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 30.000" },
        { img: "/NKH/NKH90.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 30.000" },
        { img: "/NKH/NKH91.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 24.000" },
        { img: "/NKH/NKH92.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 33.000" },
        { img: "/NKH/NKH93.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 30.000" },
        { img: "/NKH/NKH94.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 30.000" },
        { img: "/NKH/NKH95.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 30.000" },
        { img: "/NKH/NKH96.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 30.000" },
        { img: "/NKH/NKH97.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 33.000" },
        { img: "/NKH/NKH98.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 30.000" },
        { img: "/NKH/NKH99.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 37.500" },
        { img: "/NKH/NKH100.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 24.000" },
        { img: "/NKH/NKH101.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 33.000" },
        { img: "/NKH/NKH102.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 33.000" },
        { img: "/NKH/NKH103.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 33.000" },
        { img: "/NKH/NKH104.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 30.000" },
        { img: "/NKH/NKH105.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 30.000" },
        { img: "/NKH/NKH106.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 30.000" },
        { img: "/NKH/NKH107.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-44", price: "¢ 30.000" },
        { img: "/NKH/NKH108.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 33.000" },
        { img: "/NKH/NKH109.jpg", title: "Nike", model: "Modelo Exclusivo", size: "Talla: 40-43", price: "¢ 37.500" },




    ];

    return (
        <div className="">
            {/* Encabezado visual con imagen de fondo */}
            <header
                className="w-full h-64 bg-cover bg-center flex items-center justify-center text-white"
                style={{ backgroundImage: `url('/Logo_de_marcas/logonike.jpg')` }}
            >
              
            </header>
            <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg border rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-transform duration-300 hover:scale-105"
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

export default Nike;