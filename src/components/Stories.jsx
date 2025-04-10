import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { truncate } from "lodash";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const Stories = ({ story: { title, subtitle, news } }) => {
    const splideOptions = {
        perPage: 4,
        perMove: 1,
        type: 'loop',
        rewind: true,
        keyboard: 'global',
        drag: true,
        swipe: true,
        flickPower: 600,            // Sensibilidad de swipe
        easing: 'cubic-bezier(0.25, 1, 0.5, 1)', // Transición suave tipo "snap"
        speed: 600,                 // Velocidad de cambio entre slides
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
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-white to-slate-200 px-4 xs:px-2">
            <div className="max-w-7xl w-full mx-auto flex flex-col items-center justify-center text-center gap-10 xs:gap-6 py-10">

                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl sm:text-3xl xs:text-2xl font-extrabold text-slate-200 drop-shadow-sm"
                >
                    Explora las Mejores Marcas
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
                                <div className="group flex flex-col items-center justify-between w-full h-full bg-white border border-slate-200 shadow-lg rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.015]">
                                    <div className="w-full h-48 lg:h-60 sm:h-40 xs:h-36 overflow-hidden relative">
                                        <img
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            src={val.img}
                                            alt={`img/marcaszapatosapi/${i}`}
                                        />
                                    </div>
                                    <div className="p-5 sm:p-4 xs:p-3 flex-1 flex flex-col justify-between gap-3">
                                        <h1 className="text-2xl sm:text-xl xs:text-lg font-semibold text-slate-800 text-center">
                                            {val.title}
                                        </h1>
                                        <p className="text-sm xs:text-xs text-slate-600 text-justify">
                                            {truncate(val.text, { length: 140 })}
                                        </p>
                                    </div>
                                    <div className="w-full">
                                        <Link
                                            to={val.url}
                                            className="block w-full text-center py-2 xs:py-1.5 text-white text-sm xs:text-xs font-medium bg-gradient-to-r from-slate-900 to-black hover:from-black hover:to-slate-900 transition-colors duration-300"
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
