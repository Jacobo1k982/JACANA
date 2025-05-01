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
        gap: '1.5rem',
        pagination: false,
        padding: '2rem',
        breakpoints: {
            1200: { perPage: 3 },
            991: { perPage: 2.3 },
            768: { perPage: 2 },
            500: { perPage: 1.3, gap: '1rem' },
            425: { perPage: 1, gap: '0.8rem' },
            375: { perPage: 1, gap: '0.6rem', padding: '1rem' },
            320: { perPage: 1, gap: '0.4rem', padding: '0.5rem' },
        },
    };

    return (
        <section
            ref={storiesRef}
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#0c0c1c] px-4 xs:px-2"
        >
            <div className="max-w-7xl w-full mx-auto flex flex-col items-center justify-center text-center gap-10 xs:gap-6 py-10">

                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl sm:text-2xl xs:text-2xl font-extrabold text-cyan-300 tracking-wide drop-shadow-[0_4px_12px_rgba(0,255,255,0.2)] font-orbitron"
                >
                    ⚡ Explora las Mejores Marcas
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    className="w-full"
                >
                    <Splide options={splideOptions}>
                        {news.map((val, i) => (
                            <SplideSlide key={i}>
                                <div className="group card-scanner flex flex-col items-center justify-between w-full h-full relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] border-2 border-cyan-500 rounded-4xl overflow-hidden shadow-lg hover:shadow-cyan-400/40 transition-all duration-500 hover:scale-[1.035] animate-glow-border before:absolute before:inset-0 before:bg-gradient-to-br before:from-cyan-500/10 before:to-cyan-500/0 before:rounded-4xl before:pointer-events-none">
                                    <Link to={val.url} className="w-full h-[400px] lg:h-[400px] sm:h-75 xs:h-36 overflow-hidden relative block">
                                        <img
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            src={val.img}
                                            alt={`img/marcaszapatosapi/${i}`}
                                        />
                                    </Link>
                                    <div className="p-5 sm:p-4 xs:p-3 flex-1 flex flex-col justify-between gap-3">
                                        <h1 className="text-2xl sm:text-xl xs:text-lg font-semibold text-cyan-200 text-center tracking-wide font-orbitron">
                                            {val.title}
                                        </h1>
                                        <p className="text-sm xs:text-xs text-cyan-100/90 text-justify font-orbitron">
                                            {truncate(val.text, { length: 140 })}
                                        </p>
                                    </div>
                                    <div className="w-full">
                                        <Link
                                            to={val.url}
                                            className="block w-full text-center py-2 xs:py-1.5 text-cyan-300 text-sm xs:text-xs font-medium rounded-md bg-black bg-opacity-60 border border-cyan-400 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_15px_rgba(0,255,255,0.8)] transition-all duration-300 animate-plasma-pulse font-orbitron"
                                        >
                                            {val.btn}
                                        </Link>

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
