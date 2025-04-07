import React from 'react'

const FlexContent = ({ ifExists, endpoint: { title, subtitle, heading, text, img, btn, url } }) => {
  return (
    <>
      <div className={`relative flex items-center justify-between lg:flex-col lg:justify-center nike-container ${ifExists ? 'flex-row-reverse' : 'flex-row'} `}>
        <div className='absolute inset-0 w-full h-full'>
          <img src={img} alt={`img/${heading}`} className='w-full h-full object-cover' />
        </div>
        <div className='relative z-10 max-w-lg lg:max-w-none w-full md:text-center grid items-center lg:justify-items-center bg-opacity-50 bg-white p-5 rounded-lg'>
          <h1 className='text-4xl sm:text-3xl font-bold text-gradient'>{heading}</h1>
          <h1 className='text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-slate-900 filter drop-shadow-lg'>{title}</h1>
          <h2 className='text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-slate-900 filter drop-shadow-lg'>{subtitle}</h2>
          <p className='xl:text-sm my-4 text-slate-900'>{text}</p>
          <a href={url} className="flex items-center mb-5" target={'_blank'} role="button">
            <button type='button' className='button-theme bg-slate-900 shadow-slate-900 text-slate-100 py-1.5'>{btn}</button>
          </a>
        </div>
      </div>
    </>
  )
};

export default FlexContent;
