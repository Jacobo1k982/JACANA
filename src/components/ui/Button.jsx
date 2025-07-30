import React from "react";

const Button = React.forwardRef(({
    className = "",
    children,
    variant = "primary",
    size = "md",
    fullWidth = false,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    disabled,
    ...props
}, ref) => {
    // Definición de variantes
    const variants = {
        primary: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-indigo-200",
        secondary: "bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white",
        success: "bg-green-600 hover:bg-green-700 text-white",
        whatsapp: "bg-green-500 hover:bg-green-600 text-white shadow-md shadow-green-200",
        outline: "border border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30",
        ghost: "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
    };

    // Definición de tamaños
    const sizes = {
        sm: "text-sm py-1.5 px-3",
        md: "text-base py-2 px-4",
        lg: "text-lg py-2.5 px-6"
    };

    return (
        <button
            ref={ref}
            className={`
        inline-flex items-center justify-center gap-2
        font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
        transition-all duration-200 ease-in-out
        ${fullWidth ? "w-full" : ""}
        ${disabled ? "opacity-60 cursor-not-allowed" : "hover:scale-105 active:scale-95"}
        ${variants[variant]} 
        ${sizes[size]} 
        ${className}
      `}
            disabled={disabled}
            {...props}
        >
            {LeftIcon && <LeftIcon className="w-5 h-5" />}
            {children}
            {RightIcon && <RightIcon className="w-5 h-5" />}
        </button>
    );
});

Button.displayName = "Button";

export { Button };