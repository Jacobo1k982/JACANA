import React from "react";
import { SocialLink } from './utils/SocialLink';

const Deportivo = ({ deportivoapi = {} }) => {
    // Extraer valores con fallback para evitar errores
    const { title = "", subtitle = "", sociallinks, img = [] } = deportivoapi;

    return (
        <div className="relative h-auto w-auto flex flex-col">
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
                    </div>
                    <div className='flex mt-8 items-center lg:top-[37vh] sm:top-[5vh] xsm:top-[25vh] right-0 gap-5'>
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

export default Deportivo;
