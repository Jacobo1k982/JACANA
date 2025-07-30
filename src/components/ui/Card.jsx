import React from "react";

// Contenedor principal de la tarjeta
const Card = React.forwardRef(({
    className = "",
    children,
    as: Component = "div",
    ...props
}, ref) => {
    return (
        <Component
            ref={ref}
            className={`
        rounded-2xl border border-gray-200 dark:border-gray-800
        bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100
        shadow-md hover:shadow-lg transition-shadow duration-300
        overflow-hidden
        ${className}
      `}
            {...props}
        >
            {children}
        </Component>
    );
});

Card.displayName = "Card";

// Contenido principal de la tarjeta
const CardContent = React.forwardRef(({
    className = "",
    children,
    ...props
}, ref) => {
    return (
        <div
            ref={ref}
            className={`
        p-6 pt-0 text-sm leading-relaxed
        ${className}
      `}
            {...props}
        >
            {children}
        </div>
    );
});

CardContent.displayName = "CardContent";

// Opcional: Componentes adicionales para completar el sistema de tarjetas
const CardHeader = React.forwardRef(({ className = "", children, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={`p-6 pb-0 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
});

CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className = "", children, as: Component = "h3", ...props }, ref) => {
    return (
        <Component
            ref={ref}
            className={`
        text-xl font-bold text-gray-900 dark:text-white
        ${className}
      `}
            {...props}
        >
            {children}
        </Component>
    );
});

CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className = "", children, ...props }, ref) => {
    return (
        <p
            ref={ref}
            className={`
        text-sm text-gray-600 dark:text-gray-400
        ${className}
      `}
            {...props}
        >
            {children}
        </p>
    );
});

CardDescription.displayName = "CardDescription";

const CardFooter = React.forwardRef(({ className = "", children, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={`p-6 pt-0 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
});

CardFooter.displayName = "CardFooter";

export {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter
};