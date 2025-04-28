// src/components/ProgressBar.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // Importamos los estilos

NProgress.configure({ showSpinner: false, trickleSpeed: 100 }); // Opcional: personalizar

const ProgressBar = () => {
    const location = useLocation();

    useEffect(() => {
        NProgress.start();

        const timer = setTimeout(() => {
            NProgress.done();
        }, 800); // Tiempo de la transición (ajustable)

        return () => {
            clearTimeout(timer);
            NProgress.done();
        };
    }, [location.pathname]);

    return null; // Este componente no renderiza nada visible
};

export default ProgressBar;
