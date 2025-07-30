import React from 'react';

const Title = ({ title, className = "", as = "h1", id, ...props }) => {
  return (
    <div className={`grid items-center ${className}`} id={id}>
      <h1
        as={as}
        className="text-5xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold text-slate-800 dark:text-white
                   tracking-tight leading-tight bg-gradient-to-r from-slate-700 via-slate-900 to-black 
                   dark:from-blue-100 dark:via-slate-100 dark:to-purple-100 bg-clip-text text-transparent
                   filter drop-shadow-lg transition-all duration-300"
        {...props}
      >
        {title}
      </h1>
    </div>
  );
};

export default Title;