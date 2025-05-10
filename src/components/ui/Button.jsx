import React from "react";

export function Button({ className, children, ...props }) {
    return (
        <button
            className={`px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
