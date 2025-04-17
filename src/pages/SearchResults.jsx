import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSearchResults = async () => {
            setLoading(true);
            setError(null);
            try {
                // Aquí iría tu lógica para hacer la llamada a la API
                // con la 'query' para obtener los resultados de la búsqueda.
                console.log('Buscando:', query);
                // Simulación de una búsqueda
                await new Promise(resolve => setTimeout(resolve, 1000));
                const mockResults = [
                    { id: 1, name: `Producto relacionado con ${query} 1` },
                    { id: 2, name: `Otro producto con ${query}` },
                    // ... más resultados
                ];
                setResults(mockResults);
            } catch (err) {
                setError(err.message || 'Error al buscar.');
            } finally {
                setLoading(false);
            }
        };

        if (query) {
            fetchSearchResults();
        } else {
            setResults([]);
            setLoading(false);
        }
    }, [query]);

    if (loading) {
        return <div>Cargando resultados...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Resultados de la búsqueda para: "{query}"</h2>
            {results.length > 0 ? (
                <ul>
                    {results.map(result => (
                        <li key={result.id}>{result.name}</li>
                    ))}
                </ul>
            ) : (
                <p>No se encontraron resultados para "{query}".</p>
            )}
        </div>
    );
};

export default SearchResults;