import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { truncate } from "lodash";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Stories = ({ story: { title, subtitle, news }, storiesRef }) => {
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
        padding: '3rem',
        breakpoints: {
            1200: { perPage: 2, gap: '1.5rem', padding: '2rem' },
            1024: { perPage: 1.5, gap: '1.2rem', padding: '1.5rem' },
            768: { perPage: 1, gap: '1rem', padding: '1rem' },
            640: { perPage: 1, gap: '0.8rem', padding: '0.8rem' },
            480: { perPage: 1, gap: '0.6rem', padding: '0.6rem' },
            375: { perPage: 1, gap: '0.5rem', padding: '0.5rem' },
            320: { perPage: 1, gap: '0.4rem', padding: '0.4rem' },
        },
    };

    return (
        <section
            ref={storiesRef}
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-slate-800 px-6 xs:px-4 py-12"
        >
            <div className="max-w-7xl w-full mx-auto flex flex-col items-center justify-center text-center gap-12 xs:gap-8">
                <motion.h2
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="text-5xl sm:text-3xl xs:text-3xl font-Playfair text-white tracking-tight drop-shadow-lg"
                    style={{ textShadow: '0 0 10px rgba(0, 180, 216, 0.6)' }}
                >
                    <span className="text-sky-400 font-orbitron">Explora</span> las Mejores Marcas
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
                    className="w-full"
                >
                    <Splide options={splideOptions}>
                        {news.map((val, i) => (
                            <SplideSlide key={i} className="overflow-visible">
                                <div
                                    className="relative w-full h-full"
                                    style={{
                                        clipPath: 'polygon(0 0, 92% 0, 100% 8%, 100% 100%, 8% 100%, 0 92%)',
                                        backgroundColor: 'skyblue',
                                        padding: '2px',
                                    }}
                                >
                                    <div
                                        className="group flex flex-col items-center justify-between w-full h-full bg-gradient-to-br from-gray-800 to-gray-700 shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] transform-gpu"
                                        style={{
                                            clipPath: 'polygon(0 0, 92% 0, 100% 8%, 100% 100%, 8% 100%, 0 92%)',
                                        }}
                                    >
                                        <Link to={val.url} className="w-full h-[450px] lg:h-[400px] sm:h-80 xs:h-40 overflow-hidden relative block">
                                            <img
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 transform-gpu"
                                                src={val.img}
                                                alt={`imagen de ${val.title}`}
                                                style={{ filter: 'brightness(90%) contrast(115%)' }}
                                            />
                                        </Link>
                                        <div className="p-6 sm:p-5 xs:p-4 flex-1 flex flex-col justify-between gap-4">
                                            <h1 className="text-2xl sm:text-xl xs:text-lg font-Playfair text-sky-500 text-center tracking-wide">
                                                {val.title}
                                            </h1>
                                            <p className="text-sm xs:text-xs text-gray-400 text-justify font-orbitron leading-relaxed">
                                                {truncate(val.text, { length: 130 })}
                                            </p>
                                        </div>
                                        <div className="w-full bg-gray-700 bg-opacity-80">
                                            <Link
                                                to={val.url}
                                                className="block w-full text-center py-2.5 xs:py-2 text-sky-500 text-sm xs:text-xs font-orbitron hover:bg-cyan-700 hover:text-cyan-200 transition-colors duration-300"
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

export default Stories;
