import React from "react";
import { SocialLink } from './utils/SocialLink';

const Sportmujer = ({ deportivo3api = {} }) => {
    // Extraer valores con fallback para evitar errores
    const { title = "", subtitle = "", sociallinks, img = [] } = deportivo3api;

    return (
        <div className="relative h-auto w-auto flex flex-col">
            {/* Fondo */}
            <div
                className='clip-path h-[85vh] lg:h-[85vh] md:h-[80vh] sm:h-[70vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10'
                style={{ backgroundImage: 'linear-gradient(-175deg, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%)' }}
            ></div>
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
                            alt="imagen-deportiva"
                            className="imagen-decorativa mt-3 w-[28%] xsm:w-[40%] md:w-[560px] max-w-full h-auto object-cover rounded-lg shadow-ms"
                        />
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

export default Sportmujer;
