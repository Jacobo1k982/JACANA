import React from 'react';
import { Clips } from './utils/Clips';
import { SocialLink } from './utils/SocialLink';

const Hero = ({ heroapi: { title, subtitle, btntext, img, sociallinks, videos } }) => {
  return (
    <div className='relative h-auto w-auto flex flex-col'>
      <div className='bg-theme clip-path h-[90vh] lg:h-[85vh] md:h-[80vh] sm:h-[70vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10'></div>
      <div className='relative opacity-100 z-20 grid items-center justify-items-center nike-container'>
        <div className='grid items-center justify-items-center mt-28 md:mt-24'>
          <div className='text-container w-full flex flex-col items-center'> {/* Contenedor adicional */}
          <h1 className='text-6xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl font-extrabold filter drop-shadow-sm text-slate-200 text-center'>{title}</h1>
            <h1 className='text-4xl lg:text-3xl md:text-2xl sm:text-2xl xsm:text-xl font-extrabold filter drop-shadow-sm text-slate-200'>{subtitle}</h1>
          </div>
          <button type='button' className='button-theme bg-slate-200 shadow-slate-200 rounded-xl my-5'>{btntext}</button>
          <div className='grid items-center gap-4 md:gap-3 absolute top-[35vh] lg:top-[35vh] left-[1%] xl:left-0 w-auto h-auto'>
            {videos?.map((val, i) => (
              <Clips key={i} imgsrc={val.imgsrc} clip={val.clip} />
            ))}
          </div>
          <div className='grid items-center absolute top-[33vh] lg:top-[37vh] right-0 gap-3'>
            {sociallinks?.map((val, i) => (
              <SocialLink key={i} icon={val.icon} />
            ))}
          </div>
        </div>
        <div className='flex items-center justify-center hero-image-container'> {/* Nueva clase aquí */}
          <img
            src={img}
            alt='hero-img/img'
            className='hero-image transitions-theme -rotate-[25deg] hover:-rotate-[0deg] cursor-pointer object-fill'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;