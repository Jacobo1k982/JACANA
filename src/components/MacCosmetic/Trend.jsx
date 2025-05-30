import React, { useState, useEffect, useRef } from 'react';

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
                ? "/IMG-MAC/VINTAGE_MINT/trend.webp"
                : "/IMG-MAC/VINTAGE_MINT/trend.webp"
        );
    };

    useEffect(() => {
        verificarTamañoPantalla();
        window.addEventListener("resize", verificarTamañoPantalla);
        return () => window.removeEventListener("resize", verificarTamañoPantalla);
    }, []);

    useEffect(() => {
        fetch("/IMG-MAC/VINTAGE_MINT/trend.json")
            .then((res) => res.json())
            .then((data) => {
                const productosConIndice = data.map((producto) => ({
                    ...producto,
                    imagenActual: 0
                }));
                setProductos(productosConIndice);
            })
            .catch((error) => console.error("Error al cargar trend.json:", error));
    }, []);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const checkScroll = () => {
            setCanScrollLeft(el.scrollLeft > 0);
            setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
        };

        checkScroll();
        el.addEventListener("scroll", checkScroll);
        window.addEventListener("resize", checkScroll);

        return () => {
            el.removeEventListener("scroll", checkScroll);
            window.removeEventListener("resize", checkScroll);
        };
    }, []);

    const cambiarImagen = (id) => {
        setProductos((prev) =>
            prev.map((producto) =>
                producto.id === id
                    ? {
                        ...producto,
                        imagenActual:
                            (producto.imagenActual + 1) % producto.imagenes.length
                    }
                    : producto
            )
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

            <div className="w-full mt-10 px-4 pb-10 relative">
                <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-4 text-black dark:text-white">
                    Productos destacados
                </h2>

                {canScrollLeft && (
                    <button
                        onClick={() => scrollRef.current.scrollBy({ left: -300, behavior: "smooth" })}
                        className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-zinc-800 shadow-md p-2 rounded-full hover:scale-110 transition"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                )}

                {canScrollRight && (
                    <button
                        onClick={() => scrollRef.current.scrollBy({ left: 300, behavior: "smooth" })}
                        className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-zinc-800 shadow-md p-2 rounded-full hover:scale-110 transition"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                )}

                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto scrollbar-hide py-2 scroll-smooth"
                >
                    {productos.map((item) => (
                        <div
                            key={item.id}
                            className="min-w-[220px] sm:min-w-[250px] bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-md flex-shrink-0 text-center"
                        >
                            <p className="text-base font-semibold text-black dark:text-white mb-2">
                                {item.nombre}
                            </p>
                            <img
                                src={item.imagenes[item.imagenActual]}
                                alt={item.nombre}
                                className="w-full h-40 object-cover rounded-md cursor-pointer"
                                onClick={() => cambiarImagen(item.id)}
                            />
                            <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">
                                Haz clic para ver más
                            </p>
                        </div>
                    ))}
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
                `}
            </style>
        </section>
    );
};

export default Trend;
