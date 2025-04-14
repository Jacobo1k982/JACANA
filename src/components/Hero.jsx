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
                filter: 'brightness(0.4)',
              }}
            ></div>
          </div>
        ))}
      </Slider>

      {/* Capa oscura con contenido */}
      <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center px-4">
        <div className="max-w-5xl text-center space-y-8 text-white">
          <h1 className="text-6xl sm:text-5xl xsm:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-xl animate-fade-in">
            {title}
          </h1>
          <h2 className="text-3xl sm:text-2xl xsm:text-xl text-gray-200 font-medium animate-fade-in-slow">
            {subtitle}
          </h2>

          {btntext && (
            <button
              className="mt-6 px-6 py-3 bg-white text-gray-900 font-bold rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
              {btntext}
            </button>
          )}

          <div className="flex gap-6 justify-center mt-6">
            {sociallinks?.map((val, i) => (
              <a
                key={i}
                href={val.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <SocialLink icon={val.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
