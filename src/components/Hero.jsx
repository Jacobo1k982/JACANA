import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { Clips } from './utils/Clips';
import { SocialLink } from './utils/SocialLink';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = ({ heroapi: { title, subtitle, btntext, img, sociallinks, videos } }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };



  return (
    <div className='relative h-auto w-auto flex flex-col'>
      {/* Carrusel de video como fondo */}
      <div className='absolute top-0 left-0 right-0 h-[90vh] lg:h-[85vh] md:h-[80vh] sm:h-[70vh] xsm:h-[60vh] w-full z-0'>
        <Slider {...settings}>
          {videos?.map((val, i) => {
            const videoRef = useRef(null);

            useEffect(() => {
              if (videoRef.current) {
                videoRef.current.playbackRate = 0.5; // Ralentiza el video
              }
            }, []);

            return (
              <div key={i} className='w-full h-full'>
                <video ref={videoRef} autoPlay loop muted className='w-full h-full object-cover'>
                  <source src={val.clip} type='video/mp4' />
                </video>
              </div>
            );
          })}
        </Slider>
      </div>

      <div className='relative z-10 grid items-center justify-items-center nike-container text-white'>
        <div className='grid items-center justify-items-center mt-28 md:mt-24 sm:mt-20 xsm:mt-16'>
          <div className='text-container w-full flex flex-col items-center text-center'>
            <h1 className='focus:text-secundary-100 text-6xl lg:text-4xl md:text-2xl sm:text-1xl xsm:text-lg font-extrabold drop-shadow-sm'>{title}</h1>
            <h2 className='text-5xl lg:text-2xl md:text-2xl sm:text-2xl xsm:text-base font-extrabold drop-shadow-sm'>{subtitle}</h2>
          </div>

          <div className='grid items-center absolute top-[33vh] lg:top-[37vh] sm:top-[5vh] xsm:top-[25vh] right-0 gap-2'>
            {sociallinks?.map((val, i) => (
              <a
                key={i}
                href={val.url}
                target="_blank"
                rel="noopener noreferrer"
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
