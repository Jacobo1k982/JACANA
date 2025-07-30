import React from 'react';

const Subtitle = ({ subtitle, className = "", as = "h2", id, ...props }) => {
  return (
    <div className={`grid items-center ${className}`} id={id}>
      <h2
        as={as}
        className="text-3xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-slate-800 dark:text-slate-100 
                   tracking-tight leading-tight filter drop-shadow-lg transition-colors duration-300"
        {...props}
      >
        {subtitle}
      </h2>
    </div>
  );
};

export default Subtitle;