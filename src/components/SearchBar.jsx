import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

const SearchBar = ({ value, onChange, onClose, onSubmit }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
        <motion.form
            onSubmit={(e) => {
                e.preventDefault();
                if (value.trim()) onSubmit(e);
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-lg px-6"
        >
            <div className="relative">
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                    placeholder="Buscar productos..."
                    aria-label="Buscar productos"
                    autoFocus
                    className="w-full py-2 pl-4 pr-10 rounded-lg shadow-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                />
                <XMarkIcon
                    onClick={onClose}
                    className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer hover:text-red-500"
                />
            </div>
        </motion.form>
    );
};

export default SearchBar;
