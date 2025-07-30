import React from "react";

const Textarea = React.forwardRef(({ className = "", ...props }, ref) => {
    return (
        <textarea
            ref={ref}
            className={`w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                 bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
                 placeholder-gray-500 dark:placeholder-gray-400 
                 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 
                 transition-all duration-200 resize-y
                 ${className}`}
            {...props}
        />
    );
});

Textarea.displayName = "Textarea";

export { Textarea };