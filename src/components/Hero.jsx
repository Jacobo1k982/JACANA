import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { SocialLink } from './utils/SocialLink';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = ({ heroapi: { title, subtitle, btntext, sociallinks, backgroundImages }, storiesRef }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
    lazyLoad: 'ondemand',
  };

  const imagesToShow = isMobile && backgroundImages.mobile ? backgroundImages.mobile : backgroundImages.desktop;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white dark:bg-black transition-colors duration-500">
      {/* Fondo Slider */}
      <Slider {...sliderSettings}>
        {imagesToShow?.map((img, index) => (
          <div key={index}>
            <div
              className="w-full h-screen bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${img})`,
                backgroundColor: '#000000', // Fallback si no carga la imagen
                filter: 'brightness(0.3) contrast(1.1)',
              }}
            />
          </div>
        ))}
      </Slider>

      {/* Capa oscura con contenido */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70 dark:from-black/70 dark:via-black/60 dark:to-black/80 z-10 flex items-center justify-center px-4">
        <div className="max-w-5xl text-center space-y-10 text-white dark:text-gray-100">
          <h1
            className="text-5xl sm:text-6xl xsm:text-3xl font-extrabold bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(245,211,72,0.7)] animate-pulse"
            aria-label={title}
          >
            {title}
          </h1>

          <h2 className="text-2xl sm:text-2xl xsm:text-xl text-gray-300 dark:text-gray-300 font-medium opacity-90 transition-opacity duration-1000">
            {subtitle}
          </h2>

          {btntext && (
            <button
              onClick={() => storiesRef?.current?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-5 px-8 py-4 font-Outfit border border-amber-400 text-black dark:text-white bg-white/10 dark:bg-black/10 backdrop-blur-lg hover:bg-amber-400 hover:text-black shadow-lg transition duration-500 hover:shadow-cyan-400/50 rounded-md"
            >
              {btntext}
            </button>
          )}

          {sociallinks?.length > 0 && (
            <div className="flex gap-5 justify-center mt-8 p-8">
              {sociallinks.map(({ url, icon }, i) =>
                url && icon ? (
                  <a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-125 transition-transform duration-300 hover:text-cyan-400"
                  >
                    <div className="p-1 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-sm hover:shadow-[0_0_17px_white]">
                      <SocialLink icon={icon} />
                    </div>
                  </a>
                ) : null
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
