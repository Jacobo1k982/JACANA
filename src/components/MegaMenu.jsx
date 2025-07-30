// components/MegaMenu.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTag, FaInfoCircle } from 'react-icons/fa';
import navLinks from '../data/NavLinks';

const MegaMenu = () => {
    const [openMenu, setOpenMenu] = useState(null);

    const handleMouseEnter = (index) => {
        setOpenMenu(index);
    };

    const handleMouseLeave = () => {
        setOpenMenu(null);
    };

    return (
        <nav className="relative">
            <ul className="flex space-x-8">
                {navLinks.map((category, idx) => (
                    <li
                        key={idx}
                        onMouseEnter={() => handleMouseEnter(idx)}
                        onMouseLeave={handleMouseLeave}
                        className="relative"
                    >
                        <button
                            className="flex items-center gap-1 text-lg font-medium text-gray-800 dark:text-white hover:text-indigo-600 transition-colors duration-200"
                        >
                            {category.name}
                            {category.badge && (
                                <span className="ml-1 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full flex items-center">
                                    <FaWhatsapp className="w-3 h-3 mr-1" />
                                    {category.badge}
                                </span>
                            )}
                        </button>

                        {/* Menú desplegable */}
                        <AnimatePresence>
                            {openMenu === idx && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute left-0 mt-2 w-80 bg-white dark:bg-gray-900 shadow-xl rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden z-50"
                                    onMouseEnter={() => handleMouseEnter(idx)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div
                                        className="h-24 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${category.image})` }}
                                    >
                                        <div className="h-full bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                            <h3 className="text-white font-bold px-4 pb-2 text-lg">
                                                {category.name}
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
                                        {category.subcategories?.map((sub, i) => (
                                            <SubCategory key={i} category={sub} depth={0} />
                                        ))}

                                        {/* Acción directa (ej. WhatsApp) */}
                                        {category.action && (
                                            <a
                                                href={`${category.action.url}?text=${encodeURIComponent(category.action.message)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/30 rounded-lg hover:bg-green-100 dark:hover:bg-green-800/40 transition-colors"
                                            >
                                                <FaWhatsapp className="w-5 h-5 text-green-600 dark:text-green-400" />
                                                <span className="text-green-800 dark:text-green-300 font-medium">
                                                    {category.action.label}
                                                </span>
                                            </a>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

// Componente recursivo para soportar niveles anidados
const SubCategory = ({ category, depth }) => {
    const [isOpen, setIsOpen] = useState(depth === 0); // Solo primer nivel expandido por defecto

    const hasChildren = category.children && category.children.length > 0;

    return (
        <div className="space-y-1">
            <div
                className={`flex items-center justify-between p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer text-sm ${hasChildren ? 'font-medium' : 'font-normal text-gray-700 dark:text-gray-300'
                    }`}
                onClick={() => hasChildren && setIsOpen(!isOpen)}
            >
                <div className="flex items-center gap-2">
                    <img
                        src={category.image}
                        alt={category.imageAlt}
                        className="w-8 h-8 object-cover rounded"
                    />
                    <span>{category.name}</span>
                    {category.badge && (
                        <span className="bg-purple-100 text-purple-800 text-xs px-2 py-0.5 rounded-full">
                            {category.badge}
                        </span>
                    )}
                </div>
                {hasChildren && (
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </motion.div>
                )}
            </div>

            {/* Sub-niveles */}
            {hasChildren && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ overflow: 'hidden' }}
                    className="pl-4 border-l-2 border-gray-200 dark:border-gray-700"
                >
                    {category.children.map((child, idx) => (
                        <SubCategory key={idx} category={child} depth={depth + 1} />
                    ))}
                </motion.div>
            )}
        </div>
    );
};

export default MegaMenu;