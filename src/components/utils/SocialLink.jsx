import React from 'react';

const SocialLink = ({ icon, href, label, ariaLabel, target = "_blank", rel = "noopener noreferrer" }) => {
  // Validar que se proporcione un enlace y una etiqueta
  if (!href || !label) {
    console.warn("SocialLink requiere 'href' y 'label' para accesibilidad y funcionalidad.");
    return null;
  }

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel || `Visitar ${label}`}
      title={label}
      className="inline-flex items-center justify-center w-10 h-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
                 rounded-full shadow-sm hover:shadow-md hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 
                 focus:ring-green-400 transition-all duration-200 transform 
                 active:scale-105"
    >
      <img
        src={icon}
        alt=""
        className="w-6 h-6 md:w-5 md:h-5 sm:w-4 sm:h-4 object-contain"
        aria-hidden="true"
      />
      <span className="sr-only">{ariaLabel || `Visitar ${label}`}</span>
    </a>
  );
};

export default SocialLink;