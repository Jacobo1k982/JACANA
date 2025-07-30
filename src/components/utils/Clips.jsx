import React, { useRef, useState } from 'react';
import { PlayIcon } from '@heroicons/react/24/solid';

export const Clips = ({ clip, imgsrc, alt = "Preview del video" }) => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload del video al entrar en vista (opcional, mejora UX)
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.load(); // Pre-carga metadatos
      video.addEventListener('loadeddata', () => setIsLoaded(true));
    }
    return () => {
      if (video) {
        video.removeEventListener('loadeddata', () => setIsLoaded(true));
      }
    };
  }, [clip]);

  return (
    <div
      className="relative h-28 w-32 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 
                 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 lg:w-28 md:w-24 sm:w-16
                 lg:h-24 md:h-20 sm:h-14"
      aria-label="Reproducir video"
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          // Opcional: reproducir/pausar al presionar Enter o Espacio
        }
      }}
    >
      {/* Imagen de fondo (preview) */}
      <img
        src={imgsrc}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover rounded-xl transition-opacity duration-500 
                   opacity-100 z-10"
        loading="lazy"
      />

      {/* Overlay de reproducción */}
      <div
        className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 z-20 
                   transition-opacity duration-300 flex items-center justify-center"
      >
        <div className="bg-white rounded-full p-2 shadow-lg flex items-center justify-center
                       w-10 h-10 lg:w-9 lg:h-9 md:w-8 md:h-8 sm:w-6 sm:h-6">
          <PlayIcon className="w-5 h-5 text-slate-900 md:w-4 md:h-4" />
        </div>
      </div>

      {/* Video (solo visible al hacer hover) */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover rounded-xl opacity-0 z-0 
                   group-hover:opacity-100 group-hover:z-50 transition-opacity duration-500"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src={clip} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  );
};