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
        padding: "3rem",
        breakpoints: {
            1200: { perPage: 2, gap: "1.5rem", padding: "2rem" },
            1024: { perPage: 1.5, gap: "1.2rem", padding: "1.5rem" },
            768: { perPage: 1, gap: "1rem", padding: "1rem" },
            640: { perPage: 1, gap: "0.8rem", padding: "0.8rem" },
            480: { perPage: 1, gap: "0.6rem", padding: "0.6rem" },
            375: { perPage: 1, gap: "0.5rem", padding: "0.5rem" },
            320: { perPage: 1, gap: "0.4rem", padding: "0.4rem" },
        },
    };

    const clipPathSmall = 'polygon(0 0, 95% 0, 100% 5%, 100% 100%, 5% 100%, 0 95%)';
    const clipPathLarge = 'polygon(0 0, 92% 0, 100% 8%, 100% 100%, 8% 100%, 0 92%)';

    return (
        <section
            className="min-h-screen flex items-center justify-center px-6 xs:px-4 py-16 bg-white dark:bg-[#0f0f0f]"
            style={{
                backgroundImage: `url(${darkBackground})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="max-w-7xl w-full mx-auto flex flex-col items-center justify-center text-center gap-12 xs:gap-8">
                <motion.h2
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="font-Playfair text-black dark:text-white tracking-tight text-center"
                >
                    <span className="text-4xl sm:text-5xl xs:text-3xl font-Playfair block text-white dark:text-white">
                        Un mundo de marcas a tus pies
                    </span>

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
                                <div className="group relative w-full max-h-[480px] h-full rounded-[2rem] bg-gradient-to-tr from-white to-gray-100 dark:from-[#1c1c1e] dark:to-[#2c2c2e] backdrop-blur-lg shadow-[0_4px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_40px_rgba(255,255,255,0.05)] overflow-hidden border border-black/10 dark:border-white/10 transition-all duration-500 hover:shadow-[0_6px_60px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_6px_60px_rgba(255,255,255,0.1)] hover:scale-[1.01]">
                                    <Link
                                        to={val.url}
                                        className="block relative w-full h-[220px] sm:h-[240px] md:h-[260px] overflow-hidden rounded-t-[2rem]"
                                    >
                                        <img
                                            src={val.img}
                                            alt={`imagen de ${val.title}`}
                                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                            style={{
                                                filter: "brightness(85%) contrast(120%) saturate(120%)",
                                            }}
                                        />
                                    </Link>

                                    <div className="p-4 flex flex-col gap-3 text-black dark:text-white">
                                        <h1 className="text-lg font-playfair font-semibold tracking-wide text-center">
                                            {val.title}
                                        </h1>
                                        <p className="text-xs font-outfit text-justify leading-relaxed">
                                            {truncate(val.text, { length: 100 })}
                                        </p>
                                    </div>

                                    <div className="px-12 pb-4">
                                        <Link
                                            to={val.url}
                                            className="inline-block w-full text-center py-2 rounded-full border border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300 font-medium tracking-wider text-xs"
                                        >
                                            {val.btn} <span className="ml-1">&#10140;</span>
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

export default Shoebrands2;
