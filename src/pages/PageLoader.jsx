// src/components/PageLoader.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react'; // Ícono animado opcional

const PageLoader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white"
        >
            <Loader2 className="w-12 h-12 text-cyan-600 animate-spin" />
        </motion.div>
    );
};

export default PageLoader;
