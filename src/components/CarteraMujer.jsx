import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { motion } from "framer-motion";
import darkBackground from "../assets/darkabstract.jpg";

const CarteraMujer = ({ marcacarteraapi: { news } }) => {
    const splideOptions = {
        perPage: 3,
        perMove: 1,
        type: 'loop',
        rewind: true,
        keyboard: 'global',
        drag: true,
        swipe: true,
        flickPower: 600,
        easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
        speed: 600,
        gap: '2rem',
        pagination: false,
        padding: '2rem',
        breakpoints: {
            1200: { perPage: 2.5 },
            991: { perPage: 2 },
            768: { perPage: 1.5 },
            500: { perPage: 1, gap: '1rem' },
            375: { perPage: 1, gap: '0.5rem', padding: '1rem' },
        },
    };

    return (
        <section
            className="min-h-screen flex items-center justify-center px-4"
            style={{
                backgroundImage: `url(${darkBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="max-w-7xl w-full mx-auto flex flex-col items-center justify-center text-center gap-10 py-10">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl sm:text-3xl xs:text-2xl font-extrabold text-white drop-shadow-md"
                >
                    Muy Pronto Estílos Originales
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    className="w-full"
                >
                    <Splide options={splideOptions}>
                        {news.map((val, i) => (
                            <SplideSlide key={i} className="flex justify-center">
                                <motion.div
                                    whileHover={{ rotateY: 10, rotateX: 5, scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                    className="w-[280px] h-[280px] sm:w-[240px] sm:h-[240px] rounded-full overflow-hidden border-2 border-transparent hover:border-cyan-400 shadow-xl hover:shadow-cyan-500/30 transition-all duration-500"
                                >
                                    <img
                                        className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-110"
                                        src={val.img}
                                        alt={`img/cartera/${i}`}
                                    />
                                </motion.div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </motion.div>
            </div>
        </section>
    );
};

export default CarteraMujer;
