import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/buscar?q=${searchTerm}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center">
            <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={handleChange}
                className="p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
                type="submit"
                className="bg-indigo-500 text-white p-2 rounded-r-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
                Buscar
            </button>
        </form>
    );
};

export default SearchBar;