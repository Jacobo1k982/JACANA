import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { motion } from "framer-motion";
import darkBackground from "../assets/darkabstract.jpg";
import { Link } from "react-router-dom";

// 👇 Asegúrate de que la ruta sea correcta según tu estructura
import { marcacarteraapi } from "../data/dataCarteras";

const CarteraMujer = () => {
    const carteras = marcacarteraapi ?? [];

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

    return (
        <section
            className="min-h-screen flex items-center justify-center px-4"
            style={{
                backgroundImage: `url(${darkBackground})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="max-w-7xl w-full mx-auto flex flex-col items-center justify-center text-center gap-10 py-10">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl sm:text-3xl xs:text-2xl font-extrabold text-white drop-shadow-md"
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
                                    <Link
                                        to={`/cartera/${val.id}`}
                                        aria-label={`Ver detalles de ${val.nombre}`}
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.03 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                            className="relative w-[280px] h-[320px] sm:w-[240px] sm:h-[280px] rounded-2xl overflow-hidden shadow-xl border hover:border-cyan-400 hover:shadow-cyan-500/30 transition-all duration-500"
                                        >
                                            <img
                                                src={val.img?.[0] || "/placeholder.jpg"}
                                                alt={`Imagen de ${val.nombre}`}
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />
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

export default CarteraMujer;
