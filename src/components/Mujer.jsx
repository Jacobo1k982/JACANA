import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Title from "./utils/Title";
import "@splidejs/react-splide/css";
import { truncate } from "lodash";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import darkBackground from "../assets/darkabstract.jpg";

const Mujer = ({ dama: { title, subtitle, news } }) => {
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
            Todo lo que buscas y más
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
                <div className="group relative w-full h-full rounded-[2.5rem] bg-gradient-to-tr from-white to-gray-100 dark:from-[#1c1c1e] dark:to-[#2c2c2e] backdrop-blur-lg shadow-[0_4px_60px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_60px_rgba(255,255,255,0.05)] overflow-hidden border border-black/10 dark:border-white/10 transition-all duration-500 hover:shadow-[0_6px_80px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_6px_80px_rgba(255,255,255,0.1)] hover:scale-[1.015]">
                  <Link
                    to={val.url}
                    className="block relative w-full h-[450px] overflow-hidden rounded-t-[2.5rem]"
                  >
                    <img
                      src={val.img}
                      alt={`imagen de ${val.title}`}
                      className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      style={{
                        filter: "brightness(85%) contrast(120%) saturate(120%)",
                      }}
                    />
                  </Link>

                  <div className="p-6 flex flex-col gap-4 text-black dark:text-white">
                    <h1 className="text-2xl font-playfair font-semibold tracking-wide text-black dark:text-white text-center">
                      {val.title}
                    </h1>
                    <p className="text-sm font-outfit text-black dark:text-white text-justify leading-relaxed">
                      {truncate(val.text, { length: 120 })}
                    </p>
                  </div>

                  <div className="px-6 pb-6">
                    <Link
                      to={val.url}
                      className="inline-block w-full text-center py-2.5 rounded-full border border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300 font-semibold tracking-wider text-sm"
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

export default Mujer;
