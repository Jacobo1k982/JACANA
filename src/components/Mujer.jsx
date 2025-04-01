import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Title from "./utils/Title";
import "@splidejs/react-splide/css";
import { truncate } from "lodash";
import { Link } from "react-router-dom";

const Mujer = ({ dama: { title, news, subtitle, image } }) => {
  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "1rem",
    pagination: false,
    padding: "2rem",
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };

  return (
    <div className="relative h-auto w-auto flex flex-col mb-11">
      {/* Encabezado */}
      <div className="bg-theme clip-path h-[90vh] lg:h-[85vh] md:h-[80vh] sm:h-[70vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10"></div>
      <div className="relative opacity-100 z-20 grid items-center justify-items-center nike-container">
        <div className="grid items-center justify-items-center mt-28 md:mt-24">
          <div className="text-container w-full flex flex-col items-center">
            <h1 className="text-6xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl font-extrabold filter drop-shadow-sm text-slate-200 text-center">
              {title}
            </h1>
            <h2 className="text-4xl lg:text-3xl md:text-2xl sm:text-2xl xsm:text-xl font-extrabold filter drop-shadow-sm text-slate-200">
              {subtitle}
            </h2>
            {/* Imagen debajo del subtítulo */}
            <img
              src={image}
              alt="imagen-decorativa"
              className="imagen-decorativa mt-5 w-[285px] max-w-full h-auto object-cover rounded-lg shadow-ms"
            />
          </div>
        </div>
      </div>

      {/* Carrusel debajo */}
      <div className="relative z-10 nike-container mt-10">
        <Title title="Colección Mujer" />
        <div className="mt-7">
          <Splide options={splideOptions}>
            {news.map((val, i) => (
              <SplideSlide key={i} className="mb-0.5">
                <div className="relative grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200 overflow-hidden">
                  <div className="flex items-center justify-center">
                    <img
                      className="w-full h-auto object-cover shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg"
                      src={val.img}
                      alt={val.title || `Imagen ${i + 1}`}
                    />
                  </div>
                  <div className="grid items-center justify-items-center px-4">
                    <h1 className="text-3xl font-bold text-center">
                      {val.title}
                    </h1>
                    <p className="text-sm text-justify lg:text-xs">
                      {truncate(val.text, { length: 185 })}
                    </p>
                  </div>
                  <div className="flex items-center justify-center px-4 w-full">
                    <Link
                      to={val.url}
                      className="w-full bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-slate-100 py-1.5 button-theme"
                    >
                      {val.btn}
                    </Link>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default Mujer;
