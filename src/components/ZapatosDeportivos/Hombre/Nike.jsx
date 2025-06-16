import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard';
import ProductDetailModal from '../ProductDetailModal';

const Nike = () => {
    const [productos, setProductos] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetch("/Data/ZapatosDeportivos/Hombre/nike.json")
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP error ${res.status}`);
                return res.json();
            })
            .then((data) => {
                const lista = Array.isArray(data) ? data : data.products || [];
                setProductos(lista);
            })
            .catch((error) => console.error("Error al cargar productos:", error));
    }, []);

    const handleImageClick = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    return (
        <section className="w-full h-auto bg-[#ffffff] dark:bg-textblack px-4 transition-colors duration-300">
            {/* Banner de portada */}
            <div className="relative w-full h-64 md:h-80 lg:h-96 mb-6 rounded-2xl overflow-hidden shadow-md">
                <video
                    src="/ZapatosDeportivos/Hombre/Nike/portada.mp4" // Asegúrate que el video esté en tu carpeta pública
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h1 className="text-white text-1xl md:text-5xl font-light text-center px-4">
                        Just do it
                    </h1>
                </div>
            </div>

            {/* Contenedor de productos */}
            <div className="max-w-7xl mx-auto">
                {productos.length > 0 ? (
                    <div className="flex overflow-x-auto space-x-4 pb-4 no-scrollbar">
                        {productos.map((item) => (
                            <div key={item.id} className="flex-shrink-0 w-64">
                                <ProductCard
                                    product={item}
                                    onImageClick={handleImageClick}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-black dark:text-white">
                        Cargando productos...
                    </p>
                )}
            </div>

            {/* Modal de detalle */}
            <ProductDetailModal
                product={selectedProduct}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </section>
    );
};

export default Nike;
