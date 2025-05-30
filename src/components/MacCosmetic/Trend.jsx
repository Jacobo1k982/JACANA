import React, { useState, useEffect, useRef } from 'react';
import ProductCard from './ProductCard'; // Importa el ProductCard

const Trend = () => {
    const [gifSrc, setGifSrc] = useState("");
    const [productos, setProductos] = useState([]);
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const verificarTamañoPantalla = () => {
        const isMobile = window.innerWidth <= 640;
        setGifSrc(
            isMobile
                ? "/IMG-MAC/VINTAGE_MINT/trend.webp" // Asegúrate que estas rutas son correctas
                : "/IMG-MAC/VINTAGE_MINT/trend.webp"  // y están en tu carpeta `public`
        );
    };

    useEffect(() => {
        verificarTamañoPantalla();
        window.addEventListener("resize", verificarTamañoPantalla);
        return () => window.removeEventListener("resize", verificarTamañoPantalla);
    }, []);

    useEffect(() => {
        fetch("/public/IMG-MAC/VINTAGE_MINT/trend.json") // Asegúrate que esta ruta es correcta
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                const productosConIndice = data.map((producto) => ({
                    ...producto,
                    imagenActual: 0 // Indice inicial para las imágenes del producto
                }));
                setProductos(productosConIndice);
            })
            .catch((error) => console.error("Error al cargar trend.json:", error));
    }, []);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const checkScroll = () => {
            // Pequeño umbral para evitar errores de redondeo
            const scrollEndReached = Math.abs(el.scrollWidth - el.clientWidth - el.scrollLeft) < 1;
            setCanScrollLeft(el.scrollLeft > 0);
            setCanScrollRight(!scrollEndReached && el.scrollWidth > el.clientWidth);
        };

        checkScroll();
        el.addEventListener("scroll", checkScroll);
        window.addEventListener("resize", checkScroll); // También recalcular al cambiar tamaño

        // Observador para cuando los productos se cargan y el scrollWidth podría cambiar
        const observer = new MutationObserver(checkScroll);
        observer.observe(el, { childList: true, subtree: true });

        return () => {
            el.removeEventListener("scroll", checkScroll);
            window.removeEventListener("resize", checkScroll);
            observer.disconnect();
        };
    }, [productos]); // Añade productos como dependencia para re-evaluar si cambian

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

    return (
        <section className="w-full min-h-screen flex flex-col items-center bg-[#d1f5e1] dark:bg-black transition-colors duration-300">
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
                <h2 className="text-2xl sm:text-3xl font-light text-center mb-8 text-black dark:text-white"> {/* Aumentado margen inferior */}
                    Productos destacados
                </h2>

                {/* Contenedor de botones y carrusel para posicionamiento relativo */}
                <div className="relative max-w-7xl mx-auto">
                    {canScrollLeft && (
                        <button
                            onClick={() => scrollRef.current?.scrollBy({ left: -250, behavior: "smooth" })} // Ajusta el valor de scroll si es necesario
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
                            onClick={() => scrollRef.current?.scrollBy({ left: 250, behavior: "smooth" })} // Ajusta el valor de scroll si es necesario
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
                        className="flex gap-4 overflow-x-auto scrollbar-hide py-2 scroll-smooth snap-x snap-mandatory px-1" // Añadido snap
                    >
                        {productos.length > 0 ? (
                            productos.map((item) => (
                                <ProductCard
                                    key={item.id}
                                    product={item}
                                    onImageClick={cambiarImagen} // Pasa la función para cambiar la imagen
                                />
                            ))
                        ) : (
                            <p className="text-center text-black dark:text-white w-full">Cargando productos...</p>
                        )}
                    </div>
                </div>
            </div>

            <style>
                {`
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
                        -ms-overflow-style: none;  /* IE and Edge */
                        scrollbar-width: none;  /* Firefox */
                    }
                `}
            </style>
        </section>
    );
};

export default Trend;