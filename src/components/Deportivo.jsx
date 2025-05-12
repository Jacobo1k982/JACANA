import React from "react";
import { SocialLink } from './utils/SocialLink';

const Deportivo = ({ deportivoapi = {} }) => {
    const { title = "", subtitle = "", sociallinks = [], img = [] } = deportivoapi;

    return (
        <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-800 to-gray-900 px-6 py-12 flex flex-col items-center justify-center">
            <div className="w-full max-w-5xl flex flex-col items-center justify-center text-center gap-8">
                <h1 className="text-4xl lg:text-2xl md:text-2xl sm:text-2xl xsm:text-xl font-semibold text-slate-500 drop-shadow">
                    {title}
                </h1>
                <h2 className="text-2xl lg:text-2xl md:text-2xl sm:text-xl xsm:text-lg font-semibold text-slate-300 drop-shadow">
                    {subtitle}
                </h2>

                {sociallinks.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-6 mt-6">
                        {sociallinks.map((val, i) => (
                            <a
                                key={i}
                                href={val.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1 rounded-full bg-white/8 hover:bg-cyan-600 transition duration-300 backdrop-blur hover:scale-110"
                            >
                                <SocialLink icon={val.icon} />
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Deportivo;
