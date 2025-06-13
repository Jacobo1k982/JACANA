import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Inicio = () => {
    const [gifSrc, setGifSrc] = useState("/IMG-MAC/VINTAGE_MINT/banner_desktop.webp");

    useEffect(() => {
        const verificarTamañoPantalla = () => {
            if (window.innerWidth <= 640) {
                setGifSrc("/Img-Inicio-pagina/Sally/Sally2.jpeg");
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
                <Link to="/SallyHansen">
                    <img
                        src={gifSrc}
                        alt="Animación de bienvenida"
                        className="w-full h-auto object-cover object-center cursor-pointer"
                    />
                </Link>

                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-end text-center pb-4 px-4 animate-fade-up">
                    <p className="text-sm sm:text-base font-Poppins font-light text-white drop-shadow-sm">
                        AHORA EN TENDENCIA
                    </p>
                    <h1 className="text-3xl sm:text-5xl font-Playfair font-extrabold text-white drop-shadow-lg">
                        Capas superiores de gel™ milagroso
                    </h1>
                    <p className="mt-4 text-sm sm:text-base font-Poppins font-light text-white drop-shadow-md max-w-2xl">
                        Lo más parecido a una manicura en gel de salón que puedes hacer en casa La manicura de larga duración Número 1 en ventas de esmalte en gel en los EE. UU.
                    </p>

                    {/* Botón Explorar */}
                    <Link to="/explore" className="explore-button mt-6">
                        Explore
                    </Link>
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
                    .explore-button {
                        padding: 10px 20px;
                        font-size: 1.1rem;
                        font-weight: semibold;
                        color: white;
                        border: 2px solid white;
                        border-radius: 25px;
                        backdrop-filter: blur(10px);
                        mix-blend-mode: screen;
                        text-transform: uppercase;
                        cursor: pointer;
                        transition: all 0.4s ease-in-out;
                        box-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
                    }
                    .explore-button:hover {
                        box-shadow: 0 0 25px rgba(255, 255, 255, 1);
                    }
                `}
            </style>
        </section>
    );
};

export default Inicio;