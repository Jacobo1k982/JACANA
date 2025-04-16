import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const SearchPage = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const query = params.get('q')?.toLowerCase() || '';

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                setLoading(true);
                const response = await axios.get('https://jacana.netlify.app/'); // <--- Cambia por tu endpoint real
                setProductos(response.data);
            } catch (error) {
                console.error('Error al cargar productos:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProductos();
    }, []);

    const resultados = productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(query)
    );

    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
            <h1 className="text-3xl font-bold mb-6">
                Resultados para: <span className="text-indigo-600">"{query}"</span>
            </h1>

            {loading ? (
                <p className="text-gray-500">Cargando productos...</p>
            ) : resultados.length > 0 ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {resultados.map((producto) => (
                        <li
                            key={producto.id}
                            className="p-4 border rounded-lg shadow hover:shadow-lg transition"
                        >
                            <h2 className="text-xl font-semibold">{producto.nombre}</h2>
                            <p className="text-gray-700">${producto.precio}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">No se encontraron resultados.</p>
            )}
        </div>
    );
};

export default SearchPage;
