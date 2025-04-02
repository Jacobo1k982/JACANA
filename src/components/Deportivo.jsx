import React from "react";
import { SocialLink } from './utils/SocialLink';

const Deportivo = ({ deportivoapi = {} }) => {
    // Extraer valores con fallback para evitar errores
    const { title = "", subtitle = "", sociallinks, img = [] } = deportivoapi;

    return (
        <div className="relative h-auto w-auto flex flex-col">
            {/* Fondo */}
            <div className='bg-theme clip-path h-[90vh] lg:h-[85vh] md:h-[80vh] sm:h-[70vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10'></div>

            {/* Contenido */}
            <div className="relative opacity-100 z-20 grid items-center justify-items-center nike-container">
                <div className="grid items-center justify-items-center mt-28 md:mt-24">
                    <div className="text-container w-full flex flex-col items-center">
                        <h1 className="text-6xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl font-extrabold filter drop-shadow-sm text-slate-200 text-center">
                            {title}
                        </h1>
                        <h1 className="text-4xl lg:text-3xl md:text-2xl sm:text-2xl xsm:text-xl font-extrabold filter drop-shadow-sm text-slate-200">
                            {subtitle}
                        </h1>
                        {/* Imagen debajo del subtítulo */}
                        <img
                            src={img}
                            alt="imagen-decorativa"
                            className="imagen-decorativa mt-5 w-[680px] max-w-full h-auto object-cover rounded-lg shadow-ms"
                        />
                    </div>

                    {/* Íconos sociales */}
                    {sociallinks.length > 0 && (
                        <div className='grid items-center absolute top-[33vh] lg:top-[37vh] right-0 gap-3'>
                            {sociallinks.map((val, i) => (
                                <SocialLink key={i} icon={val.icon} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Deportivo;
