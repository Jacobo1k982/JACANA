import React, { useState, useEffect } from 'react';
import ProductCard from '../MacCosmetic/ProductCard';
import ProductDetailModal from '../MacCosmetic/ProductDetailModal';

const SullyHansen = () => {
    const [productos, setProductos] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetch("/Data/SallyHansen/sally.json")
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
        <section className="w-full min-h-screen bg-[#ffffff] dark:bg-textbalck py-10 px-4 transition-colors duration-300">
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

            <ProductDetailModal
                product={selectedProduct}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </section>
    );
};

export default SullyHansen;
