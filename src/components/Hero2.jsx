import React from "react";

const Hero2 = ({hero2api: {title, subtitle}}) => {
    return (
        <div className="relative h-auto w-auto flex flex-col">
            <div className='bg-theme clip-path h-[90vh] lg:h-[85vh] md:h-[80vh] sm:h-[70vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10'></div>
            <div className="relative opacity-100 z-20 grid items-center justify-items-center nike-container">
                <div className="grid items-center justify-items-center mt-28 md:mt-24">
                    <div className="text-container w-full flex flex-col items-center">
                        <h1 className="text-6xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl font-extrabold filter drop-shadow-sm text-slate-200 text-center">{title}</h1>
                        <h1 className="text-4xl lg:text-3xl md:text-2xl sm:text-2xl xsm:text-xl font-extrabold filter drop-shadow-sm text-slate-200">{subtitle}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Hero2;