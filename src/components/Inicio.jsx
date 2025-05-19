import React from 'react';

const Inicio = () => {
  return (
    <section className="w-full flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-4xl relative">
        {/* Imagen de fondo */}
        <img 
          src="/animacion.gif"
          alt="Animación de bienvenida"
          className="w-full h-auto object-contain"
        />

        {/* Contenido superpuesto */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow-lg">
            EVERYDAY ICONS
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl mt-2 drop-shadow-md">
            Descubre productos únicos y con estilo
          </p>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
