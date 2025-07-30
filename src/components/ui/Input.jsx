import React from "react";

const Input = React.forwardRef(({
    className = "",
    type = "text",
    error,
    success,
    disabled,
    icon: Icon,
    iconPosition = "right",
    ...props
}, ref) => {
    // Determinar clases según estado
    const baseClasses = `
    w-full px-4 py-2 rounded-lg border text-gray-900 dark:text-gray-100
    bg-white dark:bg-gray-800
    focus:outline-none focus:ring-2 focus:ring-offset-2
    transition-all duration-200 ease-in-out
    disabled:opacity-60 disabled:cursor-not-allowed
  `;

    const borderClasses = error
        ? "border-red-500 focus:ring-red-500"
        : success
            ? "border-green-500 focus:ring-green-500"
            : "border-gray-300 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500";

    const paddingClasses = Icon ? (iconPosition === "left" ? "pl-10" : "pr-10") : "";

    return (
        <div className="relative w-full">
            {Icon && (
                <div className={`
          absolute top-1/2 ${iconPosition === "left" ? "left-3" : "right-3"}
          transform -translate-y-1/2 pointer-events-none
          text-gray-500 dark:text-gray-400
        `}>
                    <Icon className="w-5 h-5" />
                </div>
            )}

            <input
                ref={ref}
                type={type}
                className={`
          ${baseClasses} ${borderClasses} ${paddingClasses} ${className}
        `}
                disabled={disabled}
                {...props}
            />

            {/* Indicadores visuales opcionales */}
            {error && (
                <p className="mt-1 text-sm text-red-500" role="alert">
                    {error}
                </p>
            )}

            {success && (
                <p className="mt-1 text-sm text-green-500" role="status">
                    {success}
                </p>
            )}
        </div>
    );
});

Input.displayName = "Input";

export { Input };