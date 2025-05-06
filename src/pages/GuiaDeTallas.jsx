import React from "react";
import { useNavigate } from "react-router-dom";

const GuiaDeTallas = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/");
    };

    return (
        <div className="p-20 bg-gray-900 text-white min-h-screen">
            <h1 className="text-3xl font-bold mb-20">Guía de Tallas</h1>
            <p className="mb-4">Consulta la equivalencia de tallas para asegurarte de elegir la correcta.</p>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-gray-800 border border-gray-700 rounded-xl">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b border-gray-700">EU</th>
                            <th className="px-4 py-2 border-b border-gray-700">US</th>
                            <th className="px-4 py-2 border-b border-gray-700">CM</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td className="px-4 py-2 border-b border-gray-700">40</td><td className="px-4 py-2 border-b border-gray-700">7</td><td className="px-4 py-2 border-b border-gray-700">25 cm</td></tr>
                        <tr><td className="px-4 py-2 border-b border-gray-700">41</td><td className="px-4 py-2 border-b border-gray-700">8</td><td className="px-4 py-2 border-b border-gray-700">26 cm</td></tr>
                        <tr><td className="px-4 py-2 border-b border-gray-700">42</td><td className="px-4 py-2 border-b border-gray-700">8.5</td><td className="px-4 py-2 border-b border-gray-700">26.5 cm</td></tr>
                        <tr><td className="px-4 py-2 border-b border-gray-700">43</td><td className="px-4 py-2 border-b border-gray-700">9</td><td className="px-4 py-2 border-b border-gray-700">27 cm</td></tr>
                        <tr><td className="px-4 py-2 border-b border-gray-700">44</td><td className="px-4 py-2 border-b border-gray-700">10</td><td className="px-4 py-2 border-b border-gray-700">28 cm</td></tr>
                    </tbody>
                </table>
            </div>
            <button
                onClick={handleBack}
                className="mt-6 px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors"
            >
                Volver al catálogo
            </button>
        </div>
    );
};

export default GuiaDeTallas;
