import React, { useState, useEffect, useRef } from 'react';
import ProductCard from './ProductCard';
import ProductDetailModal from './ProductDetailModal'; // Importa el modal

const Trend = () => {
    const [gifSrc, setGifSrc] = useState("");
    const [productos, setProductos] = useState([]);
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    // Estado para el modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    // --- (tu código existente para verificarTamañoPantalla, fetch de productos, checkScroll) ---
    // Tu useEffect para verificarTamañoPantalla
    const verificarTamañoPantalla = () => {
        const isMobile = window.innerWidth <= 640;
        setGifSrc(
            isMobile
                ? "/IMG-MAC/VINTAGE_MINT/trend.webp"
                : "/IMG-MAC/VINTAGE_MINT/trend.webp"
        );
    };

    useEffect(() => {
        verificarTamañoPantalla();
        window.addEventListener("resize", verificarTamañoPantalla);
        return () => window.removeEventListener("resize", verificarTamañoPantalla);
    }, []);

    // Tu useEffect para cargar productos (asegúrate que este es el más reciente que te di)
    useEffect(() => {
        fetch("/IMG-MAC/VINTAGE_MINT/trend.json")
            .then((res) => {
                if (!res.ok) {
                    console.error("Respuesta del servidor no OK:", res);
                    throw new Error(`Error HTTP: ${res.status} - ${res.statusText}`);
                }
                return res.json();
            })
            .then((data) => {
                console.log("Datos recibidos de trend.json:", data);
                if (Array.isArray(data)) {
                    const productosConIndice = data.map((producto) => ({
                        ...producto,
                        // imagenActual ya no es necesario aquí si el clic en imagen abre detalles
                        // y el modal maneja su propio índice de imagen.
                        // Si aún quieres ciclar imágenes en la tarjeta con otro trigger, puedes mantenerlo.
                        // Por ahora, lo comentaré ya que el clic en imagen abre el modal.
                        // imagenActual: 0 
                    }));
                    setProductos(productosConIndice);
                } else if (data && Array.isArray(data.products)) {
                    const productosConIndice = data.products.map((producto) => ({
                        ...producto,
                        // imagenActual: 0
                    }));
                    setProductos(productosConIndice);
                } else {
                    console.error("'data' no es un array y no se encontró una propiedad de array esperada.", data);
                }
            })
            .catch((error) => {
                console.error("Error al cargar o procesar trend.json:", error);
            });
    }, []);

    // Tu useEffect para checkScroll
    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        const checkScroll = () => {
            const scrollEndReached = Math.abs(el.scrollWidth - el.clientWidth - el.scrollLeft) < 1;
            setCanScrollLeft(el.scrollLeft > 0);
            setCanScrollRight(!scrollEndReached && el.scrollWidth > el.clientWidth);
        };
        checkScroll();
        el.addEventListener("scroll", checkScroll);
        window.addEventListener("resize", checkScroll);
        const observer = new MutationObserver(checkScroll);
        observer.observe(el, { childList: true, subtree: true });
        return () => {
            el.removeEventListener("scroll", checkScroll);
            window.removeEventListener("resize", checkScroll);
            observer.disconnect();
        };
    }, [productos]);


    // Ya no necesitamos 'cambiarImagen' si el clic en la imagen abre el modal.
    // Si quieres mantener la funcionalidad de cambiar imagen en la tarjeta con OTRO botón/gesto,
    // podrías renombrar esta función o adaptarla. Por ahora, la comentaré.
    /*
    const cambiarImagen = (id) => {
        setProductos((prevProductos) =>
            prevProductos.map((producto) => {
                if (producto.id === id && producto.imagenes && producto.imagenes.length > 0) {
                    return {
                        ...producto,
                        imagenActual: (producto.imagenActual + 1) % producto.imagenes.length
                    };
                }
                return producto;
            })
        );
    };
    */

    // Funciones para manejar el modal
    const handleOpenProductDetail = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    return (
        <section className="w-full min-h-screen flex flex-col items-center bg-[#d1f5e1] dark:bg-black transition-colors duration-300">
            {/* ... (tu GIF, sección de título y video existentes) ... */}
            <div className="w-full">
                <img
                    src={gifSrc}
                    alt="Tendencia Vintage Mint"
                    className="w-full h-auto object-cover object-center"
                />
            </div>

            <div className="w-full flex flex-col items-center text-center py-6 px-4 animate-fade-up">
                <p className="text-sm sm:text-base font-Poppins font-light text-black dark:text-white">
                    AHORA EN TENDENCIA
                </p>
                <h1 className="text-3xl sm:text-5xl font-Playfair font-extrabold text-black dark:text-white">
                    VINTAGE MINT
                </h1>
                <p className="mt-4 sm:text-base font-Poppins font-light text-black dark:text-white max-w-2xl">
                    Reimagina el maquillaje de los años 60' con tonos pastel, verdes y azules, y un toque de brillo. ¡Descubre la colección Vintage Mint!
                </p>

                <video
                    className="w-full max-w-4xl mt-6 rounded-2xl shadow-lg"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/IMG-MAC/VINTAGE_MINT/MACTREND_VintageMint.mp4" type="video/mp4" />
                    Tu navegador no soporta la reproducción de video.
                </video>
            </div>


            <div className="w-full font-light mt-10 px-4 pb-10 relative">
                <h2 className="text-2xl sm:text-3xl font-light text-center mb-8 text-black dark:text-white">
                    Productos destacados
                </h2>
                <div className="relative max-w-7xl mx-auto">
                    {/* ... (tus botones de scroll existentes) ... */}
                    {canScrollLeft && (
                        <button
                            onClick={() => scrollRef.current?.scrollBy({ left: -250, behavior: "smooth" })}
                            className="hidden sm:flex absolute left-0 md:-left-8 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-zinc-800 shadow-md p-2 rounded-full hover:scale-110 transition-transform items-center justify-center"
                            aria-label="Scroll Left"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    )}

                    {canScrollRight && (
                        <button
                            onClick={() => scrollRef.current?.scrollBy({ left: 250, behavior: "smooth" })}
                            className="hidden sm:flex absolute right-0 md:-right-8 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-zinc-800 shadow-md p-2 rounded-full hover:scale-110 transition-transform items-center justify-center"
                            aria-label="Scroll Right"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    )}

                    <div
                        ref={scrollRef}
                        className="flex gap-4 overflow-x-auto scrollbar-hide py-2 scroll-smooth snap-x snap-mandatory px-1"
                    >
                        {productos.length > 0 ? (
                            productos.map((item) => (
                                <ProductCard
                                    key={item.id}
                                    product={item}
                                    // Cambiamos onImageClick para que abra el modal de detalles
                                    onImageClick={handleOpenProductDetail}
                                />
                            ))
                        ) : (
                            <p className="text-center text-black dark:text-white w-full">Cargando productos...</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Renderizar el Modal */}
            <ProductDetailModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                product={selectedProduct}
            />

            <style>
                {`
                    /* ... (tus estilos existentes para fadeUp y scrollbar-hide) ... */
                    @keyframes fadeUp {
                        0% {
                            opacity: 0;
                            transform: translateY(30px);
                        }
                        100% {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    .animate-fade-up {
                        animation: fadeUp 0.8s ease-out forwards;
                    }
                    .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                    }
                    .scrollbar-hide {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                `}
            </style>
        </section>
    );
};

export default Trend;