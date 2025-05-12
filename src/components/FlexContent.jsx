import React from 'react';

const FlexContent = ({ ifExists, endpoint: { title, subtitle, heading, text, img, btn, url } }) => {
  return (
    <div
      className={`relative flex flex-col-reverse lg:flex-col xl:flex-row ${ifExists ? 'xl:flex-row-reverse' : 'xl:flex-row'
        } items-center justify-between gap-8 xl:gap-12 nike-container`}
    >
      {/* Contenido */}
      <div className="relative z-10 w-full max-w-xl text-center xl:text-left bg-white/90 backdrop-blur p-6 rounded-lg shadow-md">
        <h1 className="text-4xl sm:text-3xl font-bold text-gradient">{heading}</h1>
        <h2 className="text-3xl sm:text-2xl font-bold text-slate-900 drop-shadow">{title}</h2>
        <h3 className="text-2xl sm:text-xl font-semibold text-slate-800">{subtitle}</h3>
        <p className="text-base text-slate-700 mt-4">{text}</p>

        {btn && (
          <a href={url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block">
            <button className="button-theme bg-slate-900 text-slate-100 py-2 px-5 shadow-slate-900">
              {btn}
            </button>
          </a>
        )}
      </div>

      {/* Imagen */}
      <div className="relative w-full max-w-2xl h-64 sm:h-72 md:h-80 lg:h-96 xl:h-auto">
        <img
          src={img}
          alt={`img/${heading}`}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default FlexContent;
