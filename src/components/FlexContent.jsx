// FlexContent.jsx
import React from 'react';

const FlexContent = ({
  ifExists,
  endpoint: {
    title,
    subtitle,
    heading,
    text,
    img,
    btn,
    url
  }
}) => {
  return (
    <div className={`
      relative flex flex-col items-center justify-between gap-8 xl:gap-12
      ${ifExists
        ? 'lg:flex-col xl:flex-row-reverse'
        : 'lg:flex-col xl:flex-row'
      }
      nike-container
    `}>
      {/* Contenido */}
      <div className="
        relative z-10 w-full max-w-xl 
        bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm 
        p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700
        transition-all duration-300
        hover:shadow-xl
      ">
        <h1 className="
          text-4xl sm:text-3xl font-bold 
          bg-gradient-to-r from-slate-800 to-slate-900 
          dark:from-white dark:to-gray-200 
          bg-clip-text text-transparent
        ">
          {heading}
        </h1>

        <h2 className="text-3xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-2">
          {title}
        </h2>

        {subtitle && (
          <h3 className="text-2xl sm:text-xl font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
            {subtitle}
          </h3>
        )}

        <p className="text-base text-slate-700 dark:text-gray-300 mt-4 leading-relaxed">
          {text}
        </p>

        {btn && url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block"
            aria-label={`Ir a ${btn}`}
          >
            <button className="
              button-theme 
              bg-gradient-to-r from-slate-900 to-gray-800 
              dark:from-white dark:to-gray-200 
              text-white dark:text-black 
              py-3 px-6 
              rounded-xl 
              shadow-lg hover:shadow-xl 
              font-semibold 
              transition-all duration-300 
              transform hover:scale-105
            ">
              {btn}
            </button>
          </a>
        )}
      </div>

      {/* Imagen */}
      <div className="
        relative w-full max-w-2xl h-64 sm:h-72 md:h-80 lg:h-96 xl:h-auto
        rounded-2xl overflow-hidden
        shadow-2xl
        transform xl:scale-105 transition-transform duration-500
        hover:scale-105 xl:hover:scale-110
      ">
        <img
          src={img}
          alt={heading || title || "Contenido destacado"}
          loading="lazy"
          className="
            w-full h-full object-cover 
            transition-transform duration-700
            hover:scale-110
          "
        />
        {/* Overlay sutil */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default FlexContent;