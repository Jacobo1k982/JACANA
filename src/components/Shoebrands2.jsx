import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { truncate } from "lodash";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import darkBackground from "../assets/darkabstract.jpg";
import useWindowSize from "../data/useWindowSize";  // ← importa el hook

const Shoebrands2 = ({ marcaszapatos2api: { news } }) => {
    const { width } = useWindowSize();

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
        gap: '1.5rem',
        pagination: false,
        padding: '2rem',
        breakpoints: {
            1024: {
                perPage: 2,
                gap: '1.2rem',
                padding: '1.5rem',
            },
            768: {
                perPage: 1,
                gap: '1rem',
                padding: '1rem',
            },
            640: {
                perPage: 1,
                gap: '0.8rem',
                padding: '0.8rem',
            },
            480: {
                perPage: 1,
                gap: '0.5rem',
                padding: '0.5rem',
            },
            375: {
                perPage: 1,
                gap: '0.4rem',
                padding: '0.3rem',
            },
        },
    };

    const clipPathSmall = 'polygon(0 0, 95% 0, 100% 5%, 100% 100%, 5% 100%, 0 95%)';
    const clipPathLarge = 'polygon(0 0, 92% 0, 100% 8%, 100% 100%, 8% 100%, 0 92%)';

    return (
        <section
            className="min-h-screen flex items-center justify-center px-4 xs:px-2"
            style={{
                backgroundImage: `url(${darkBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="max-w-7xl w-full mx-auto flex flex-col items-center justify-center text-center gap-10 xs:gap-6 py-10">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-3xl sm:text-3xl xs:text-2xl font-semibold text-white drop-shadow-md"
                >
                    <span className="text-sky-400 font-Orbitron">Un mundo</span> de marcas a tus pies
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    className="w-full"
                >
                    <Splide options={splideOptions}>
                        {news.map((val, i) => (
                            <SplideSlide key={i} className="overflow-visible">
                                <div
                                    className="relative w-full h-full"
                                    style={{
                                        clipPath: width <= 500 ? clipPathSmall : clipPathLarge,
                                        backgroundColor: 'skyblue',
                                        padding: '2px',
                                    }}
                                >
                                    <div
                                        className="group flex flex-col items-center justify-between w-full h-full bg-gradient-to-br from-gray-800 to-gray-700 shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] transform-gpu"
                                        style={{
                                            clipPath: width <= 500 ? clipPathSmall : clipPathLarge,
                                        }}
                                    >
                                        <Link to={val.url} className="w-full h-[300px] lg:h-[280px] sm:h-64 xs:h-40 overflow-hidden relative block p-2">
                                            <img
                                                className="w-full max-h-[85%] object-contain transition-transform duration-500 group-hover:scale-105 transform-gpu"
                                                src={val.img}
                                                alt={`imagen de ${val.title}`}
                                                style={{
                                                    filter: 'brightness(90%) contrast(115%)',
                                                }}
                                            />
                                        </Link>
                                        <div className="p-4 sm:p-3 xs:p-2 flex-1 flex flex-col justify-between gap-2">
                                            <h1 className="text-xl sm:text-lg xs:text-base font-Playfair text-sky-500 text-center tracking-wide">
                                                {val.title}
                                            </h1>
                                            <p className="text-xs xs:text-[10px] text-gray-400 text-justify font-Orbitron leading-snug">
                                                {truncate(val.text, { length: 100 })}
                                            </p>
                                        </div>
                                        <div className="w-full bg-gray-700 bg-opacity-80">
                                            <Link
                                                to={val.url}
                                                className="block w-full text-center py-2 xs:py-1.5 text-sky-500 text-xs xs:text-[10px] font-Orbitron hover:bg-cyan-700 hover:text-cyan-200 transition-colors duration-300"
                                            >
                                                {val.btn} <span className="ml-1 text-cyan-400">&#8594;</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </motion.div>
            </div>
        </section>
    );
};

export default Shoebrands2;
