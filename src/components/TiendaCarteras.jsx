import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { motion } from "framer-motion";
import darkBackground from "../assets/darkabstract.jpg";
import { Link } from "react-router-dom";
import { dataCarteras, marcacarteraapi } from "../data/dataCarteras";

const splideOptions = {
    perPage: 3,
    perMove: 1,
    type: "loop",
    rewind: true,                           
    keyboard: "global",
    drag: true,
    swipe: true,
    flickPower: 600,
    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
    speed: 600,
    gap: "2rem",
    pagination: false,
    padding: "2rem",
    breakpoints: {
        1200: { perPage: 2.5 },
        991: { perPage: 2 },
        768: { perPage: 1.5 },
        500: { perPage: 1, gap: "1rem" },
        375: { perPage: 1, gap: "0.5rem", padding: "1rem" },
    },
};

const TiendaCarteras = () => {
    const carteras = dataCarteras ?? [];
    const marcas = marcacarteraapi ?? [];

    return (
        <section
            className="min-h-screen flex flex-col gap-20 items-center justify-center px-4 py-10"
            style={{
                backgroundImage: `url(${darkBackground})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Carrusel de Marcas */}
            <div className="max-w-7xl w-full mx-auto flex flex-col items-center text-center gap-8">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl font-bold text-white"
                >
                    {marcacarteraapi?.heading}
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="w-full"
                >
                    <Splide options={splideOptions}>
                        {marcas.map((marca, index) => (
                            <SplideSlide key={index} className="flex justify-center">
                                {marca.slug === 'hco' ? (
                                    <Link to="/Catalogocarteras" aria-label={`Ir a ${marca.nombre}`}>
                                        <div className="bg-white rounded-2xl shadow-lg p-4 w-[200px] h-[200px] flex items-center justify-center hover:scale-105 transition-transform duration-300">
                                            <img
                                                src={marca.img?.[0] || "/placeholder.jpg"}
                                                alt={marca.nombre}
                                                className="object-contain max-h-[120px] w-full"
                                            />
                                        </div>
                                    </Link>
                                ) : (
                                    <Link to={`/catalogo/${marca.slug}`} aria-label={`Ir a ${marca.nombre}`}>
                                        <div className="bg-white rounded-2xl shadow-lg p-4 w-[200px] h-[200px] flex items-center justify-center hover:scale-105 transition-transform duration-300">
                                            <img
                                                src={marca.img?.[0] || "/placeholder.jpg"}
                                                alt={marca.nombre}
                                                className="object-contain max-h-[120px] w-full"
                                            />
                                        </div>
                                    </Link>
                                )}
                            </SplideSlide>
                        ))}
                    </Splide>
                </motion.div>
            </div>

            {/* Carrusel de Carteras */}
            <div className="max-w-7xl w-full mx-auto flex flex-col items-center text-center gap-8">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl font-extrabold text-white drop-shadow-md"
                >
                    Muy Pronto Estilos Originales
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    className="w-full"
                >
                    {carteras.length > 0 ? (
                        <Splide options={splideOptions}>
                            {carteras.map((val) => (
                                <SplideSlide key={val.id} className="flex justify-center">
                                    <Link to={`/catalogo/${val.marca.toLowerCase()}`} aria-label={`Ver catálogo de ${val.nombre}`}>
                                        <motion.div
                                            whileHover={{ scale: 1.03 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                            className="relative w-[280px] h-[320px] sm:w-[240px] sm:h-[280px] rounded-2xl overflow-hidden shadow-xl border hover:border-cyan-400 hover:shadow-cyan-500/30 transition-all duration-500"
                                        >
                                            <img
                                                src={val.img?.[0] || "/placeholder.jpg"}
                                                alt={val.nombre}
                                                className="object-cover w-full h-full"
                                            />
                                            <div className="absolute bottom-0 left-0 w-full bg-white/80 px-3 py-2 text-sm text-center">
                                                <h3 className="font-semibold">{val.nombre}</h3>
                                                <p className="text-gray-700">₡{val.precio}</p>
                                            </div>
                                        </motion.div>
                                    </Link>
                                </SplideSlide>
                            ))}
                        </Splide>
                    ) : (
                        <p className="text-white text-lg font-medium">No hay carteras disponibles por el momento.</p>
                    )}
                </motion.div>
            </div>

        </section>
    );
};

export default TiendaCarteras;