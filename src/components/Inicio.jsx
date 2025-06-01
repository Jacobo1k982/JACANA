import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Inicio = () => {
    const [gifSrc, setGifSrc] = useState("/IMG-MAC/VINTAGE_MINT/banner_desktop.webp");

    useEffect(() => {
        const verificarTamañoPantalla = () => {
            if (window.innerWidth <= 640) {
                setGifSrc("/IMG-MAC/VINTAGE_MINT/banner_mobile.webp");
            } else {
                setGifSrc("/IMG-MAC/VINTAGE_MINT/banner_desktop.webp");
            }
        };

        verificarTamañoPantalla();
        window.addEventListener("resize", verificarTamañoPantalla);
        return () => window.removeEventListener("resize", verificarTamañoPantalla);
    }, []);

    return (
        <section className="w-full flex flex-col items-center bg-white dark:bg-[#000000] transition-colors duration-300">
            <div className="w-screen relative">
                <Link to="/trend">
                    <img
                        src={gifSrc}
                        alt="Animación de bienvenida"
                        className="w-full h-auto object-cover object-center cursor-pointer"
                    />
                </Link>

                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-end text-center pb-4 px-4 animate-fade-up">
                    <p className="text-sm sm:text-base font-Poppins font-light text-textblack drop-shadow-sm">
                        AHORA EN TENDENCIA
                    </p>
                    <h1 className="text-3xl sm:text-5xl font-Playfair font-extrabold text-textblack drop-shadow-lg">
                        VINTAGE MINT
                    </h1>
                    <p className="mt-4 text-sm sm:text-base font-Poppins font-light text-textblack drop-shadow-md max-w-2xl">
                        Reimagina el maquillaje de los años 60' con tonos pastel, verdes y azules, y un toque de brillo. ¡Descubre la colección Vintage Mint!
                    </p>
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

export default Inicio;
