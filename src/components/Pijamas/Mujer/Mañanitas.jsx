import React, { useState, useEffect } from 'react';
import ProductCard from '../Mujer/ProductCard';
import ProductDetailModal from '../../MacCosmetic/ProductDetailModal';

const Mañanitas = () => {
    const [productos, setProductos] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetch("/Data/Mañanitas/mañanitas.json")
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
            <div className="relative w-full h-32 md:h-80 lg:h-80 mb-[null] font-Playfair rounded-2xl overflow-hidden shadow-md">
                {/*<img
                    src="/Belleza/Kerastase/portada.webp" // Asegúrate de tener esta imagen en tu carpeta pública
                    alt="Kerastase Paris Banner"
                    className="object-cover w-full h-full"
                />*/}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h1 className="text-white text-2xl md:text-5xl font-light text-center px-4 font-Playfair">
                        CONJUNTO MAÑANITAS
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

export default Mañanitas;
