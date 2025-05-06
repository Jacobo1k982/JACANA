import React from 'react';
import Slider from 'react-slick';
import { SocialLink } from './utils/SocialLink';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = ({ heroapi: { title, subtitle, btntext, sociallinks, backgroundImages }, storiesRef }) => {

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Fondo Slider */}
      <Slider {...sliderSettings}>
        {backgroundImages?.map((img, index) => (
          <div key={index}>
            <div
              className="w-full h-screen bg-cover bg-center"
              style={{
                backgroundImage: `url(${img})`,
                filter: 'brightness(0.3) contrast(1.1)',
              }}
            ></div>
          </div>
        ))}
      </Slider>

      {/* Capa oscura con contenido */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70 z-10 flex items-center justify-center px-4">
        <div className="max-w-5xl text-center space-y-10 text-white">
          <h1 className="text-6xl sm:text-5xl xsm:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,255,255,0.7)] animate-pulse">
            {title}
          </h1>
          <h2 className="text-3xl sm:text-2xl xsm:text-xl text-gray-300 font-medium animate-fade-in-slow">
            {subtitle}
          </h2>

          {btntext && (
            <button
              onClick={() => storiesRef?.current?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-cut-corners mt-6 px-8 py-4 bg-white/10 backdrop-blur-lg text-cyan-300 font-Open+Sans border border-cyan-400 hover:bg-cyan-400 hover:text-black shadow-lg transition duration-500 hover:shadow-cyan-400/50"
            >
              {btntext}
            </button>

          )}

          <div className="flex gap-8 justify-center mt-8">
            {sociallinks?.map((val, i) => (
              <a
                key={i}
                href={val.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 transition-transform duration-300 hover:text-cyan-400"
              >
                <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:shadow-[0_0_20px_cyan]">
                  <SocialLink icon={val.icon} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
