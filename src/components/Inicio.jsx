import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Inicio = () => {
    const [gifSrc, setGifSrc] = useState("/IMG-MAC/VINTAGE_MINT/banner_desktop.webp");
    const [linkTo, setLinkTo] = useState("/trend");

    // Definimos las rutas y fuentes de imágenes en un objeto
    const config = {
        desktop: {
            img: "/IMG-MAC/VINTAGE_MINT/banner_desktop.webp",
            link: "/desktop-trend"
        },
        mobile: {
            img: "/IMG-MAC/VINTAGE_MINT/banner_mobile.webp",
            link: "/mobile-trend"
        }
    };

    useEffect(() => {
        const verificarTamañoPantalla = () => {
            if (window.innerWidth <= 640) {
                setGifSrc(config.mobile.img);
                setLinkTo(config.mobile.link);
            } else {
                setGifSrc(config.desktop.img);
                setLinkTo(config.desktop.link);
            }
        };

        verificarTamañoPantalla();
        window.addEventListener("resize", verificarTamañoPantalla);

        return () => {
            window.removeEventListener("resize", verificarTamañoPantalla);
        };
    }, []);

    return (
        <section className="w-full flex flex-col items-center bg-white dark:bg-[#000000] transition-colors duration-300">
            {/* Sección de animación */}
            <div className="w-screen relative">
                <Link to={linkTo}>
                    <img
                        src={gifSrc}
                        alt="Animación de bienvenida"
                        className="w-full h-auto object-cover object-center cursor-pointer"
                    />
                </Link>

                <div className="absolute inset-0 flex flex-col items-center justify-end text-center pb-4 px-4 animate-fade-up">
                    <p className="!text-black text-sm sm:text-base font-Poppins font-light text-black drop-shadow-sm">
                        AHORA EN TENDENCIA
                    </p>

                    <h1 className="!text-black text-3xl sm:text-5xl font-Playfair font-extrabold text-black drop-shadow-lg">
                        VINTAGE MINT
                    </h1>
                    <p className="mt-4 !text-black text-sm sm:text-base font-Poppins font-light text-black drop-shadow-md max-w-2xl">
                        Reimagina el maquillaje de los años 60' con tonos pastel, verdes y azules, y un toque de brillo. ¡Descubre la colección Vintage Mint!
                    </p>
                </div>
            </div>

            {/* Estilo para animación */}
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