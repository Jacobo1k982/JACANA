import React, { useState, useEffect } from 'react';

const Trend = () => {
    const [gifSrc, setGifSrc] = useState("");

    useEffect(() => {
        const verificarTamañoPantalla = () => {
            const isMobile = window.innerWidth <= 640;
            setGifSrc(isMobile
                ? "/IMG-MAC/VINTAGE_MINT/trend.webp"
                : "/IMG-MAC/VINTAGE_MINT/trend.webp"
            );
        };

        verificarTamañoPantalla();
        window.addEventListener("resize", verificarTamañoPantalla);
        return () => window.removeEventListener("resize", verificarTamañoPantalla);
    }, []);

    return (
        <section className="w-full min-h-screen flex flex-col items-center bg-[#d1f5e1] sm:bg-white dark:bg-[#000000] transition-colors duration-300">
            <div className="w-full">
                <img
                    src={gifSrc}
                    alt="Tendencia Vintage Mint"
                    className="w-full h-auto object-cover object-center"
                />
            </div>
            {/* TEXTO DEBAJO DE LA IMAGEN */}
            <div className="w-full flex flex-col items-center text-center py-6 px-4 animate-fade-up">
                <p className="text-sm sm:text-base font-Poppins font-light text-black dark:text-white drop-shadow-sm">
                    AHORA EN TENDENCIA
                </p>

                <h1 className="text-3xl sm:text-5xl font-Playfair font-extrabold text-black dark:text-white drop-shadow-lg">
                    VINTAGE MINT
                </h1>

                <p className="mt-4 sm:text-base font-Poppins font-light text-black dark:text-white drop-shadow-md max-w-2xl">
                    Reimagina el maquillaje de los años 60' con tonos pastel, verdes y azules, y un toque de brillo. ¡Descubre la colección Vintage Mint!
                </p>
            </div>
        </section>

    );
};

export default Trend;
