import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Belleza = () => {
    const banners = [
        '/Belleza/Loreal/hero1.webp',
        '/Belleza/Loreal/hero2.webp',
        '/Belleza/Loreal/hero3.webp',
        '/Belleza/Loreal/hero4.webp',
    ];

    const [productos, setProductos] = useState([]);
    const [imagenExpandida, setImagenExpandida] = useState(null);

    useEffect(() => {
        fetch('/data/productos.json')
            .then((res) => res.json())
            .then((data) => setProductos(data))
            .catch((err) => console.error('Error cargando productos:', err));
    }, []);

    const cerrarModal = () => setImagenExpandida(null);

    return (
        <div className="w-full pt-[110px] relative">
            {/* Modal con botón de cierre */}
            {imagenExpandida && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                    onClick={cerrarModal}
                >
                    {/* Contenedor evita que el click sobre imagen cierre el modal */}
                    <div
                        className="relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={cerrarModal}
                            className="absolute top-2 right-2 bg-white text-black rounded-full p-2 shadow-lg hover:bg-gray-200 z-50"
                            aria-label="Cerrar imagen"
                        >
                            ✕
                        </button>
                        <img
                            src={imagenExpandida}
                            alt="Imagen expandida"
                            className="max-w-full max-h-screen object-contain rounded-md"
                        />
                    </div>
                </div>
            )}

            {/* Carrusel de banners (sin interacción) */}
            <Carousel
                autoPlay
                infiniteLoop
                interval={4000}
                showThumbs={false}
                showStatus={false}
                showArrows={false}
                swipeable
                emulateTouch
                className="rounded-md"
            >
                {banners.map((src, index) => (
                    <div key={index}>
                        <img
                            src={src}
                            alt={`Hero ${index + 1}`}
                            className="w-full object-cover max-h-[300px] md:max-h-[500px] object-center"
                        />
                    </div>
                ))}
            </Carousel>

            {/* Lista de productos */}
            <div className="mt-8 px-4">
                <h2 className="text-2xl font-bold mb-6 text-center">Productos de Belleza</h2>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {productos.map((producto) => (
                        <div
                            key={producto.id}
                            className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition text-center"
                        >
                            {/* Carrusel de imágenes del producto con onClick */}
                            <Carousel
                                showThumbs={false}
                                showStatus={false}
                                infiniteLoop
                                swipeable
                                emulateTouch
                                className="rounded-md mb-2"
                            >
                                {producto.imagenes.map((img, idx) => (
                                    <div key={idx}>
                                        <img
                                            src={img}
                                            alt={`${producto.titulo} ${idx + 1}`}
                                            className="w-full object-contain object-center rounded-md max-h-52 cursor-pointer"
                                            onClick={() => setImagenExpandida(img)}
                                        />
                                    </div>
                                ))}
                            </Carousel>

                            <h3 className="text-lg font-semibold mt-2">{producto.titulo}</h3>
                            <p className="text-sm text-gray-600">{producto.subtitulo}</p>
                            <p className="text-blue-600 font-bold mt-1">₡{producto.precio.toFixed(2)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Belleza;
