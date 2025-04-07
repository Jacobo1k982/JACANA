import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Title from "./utils/Title";
import Subtitle from "./utils/Subtitle";
import "@splidejs/react-splide/css";
import { truncate } from "lodash";
import { Link } from "react-router-dom";


const Stories = ({ story: { title, subtitle, news } }) => {
  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: 'loop',
    rewind: true,
    keyboard: 'global',
    gap: '1rem',
    pagination: false,
    padding: '2rem',
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };
  return (
      <div className="container mx-auto px-4 lg:px-0 mb-20 mt-80 ms-5 lg:ms-0 lg:mt-0">
        <Title title={title} />
        <Subtitle subtitle={subtitle} />
        <div className="mt-5 lg:mt-30 mb-20">
          <Splide options={splideOptions}>
            {news.map((val, i) => (
              <SplideSlide key={i} className="mb-0.5">

                <div className="flex flex-col items-center justify-center w-full h-auto bg-white shadow-md shadow-slate-200 rounded-lg overflow-hidden">
                  
                  <div className="w-full h-40 lg:h-52 overflow-hidden rounded-t-lg shadow-md shadow-slate-200 mb-2 flex items-center justify-center">
                    <img
                      className="w-full h-auto object-cover shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg"
                      src={val.img}
                      alt={`img/story/${i}`}
                    />
                  </div>
                  <div className="flex items-center justify-between w-full px-4"></div>
                  <div className="grid items-center justify-items-center px-10 pt-15">
                    <h1 className="text-3xl font-bold text-center">{val.title}</h1>
                    <p className="text-sm text-justify lg:text-xs">{truncate(val.text, { length: 185 })}</p>
                  </div>
                  <div className="flex items-center justify-center px-4 w-full">
                    <Link to={val.url} className="w-full bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-slate-100 py-1.5 button-theme">
                      {val.btn}
                    </Link>
                  </div>
                </ div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
  );
};

export default Stories;
