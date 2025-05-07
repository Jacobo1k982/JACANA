import React from "react";
import { useNavigate } from "react-router-dom";

const GuiaDeTallas = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/");
    };

    return (
        <div className="p-8 md:p-20 bg-gray-900 text-white min-h-screen">
            <h1 className="text-3xl font-bold mb-10 text-center">Guía de Tallas</h1>
            <p className="mb-6 text-gray-300 text-center">Consulta la equivalencia de tallas para asegurarte de elegir la correcta.</p>
            <div className="overflow-x-auto">
                <table className="hidden md:table min-w-full bg-gray-800 border border-gray-700 rounded-xl text-center">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b border-gray-700">Género</th>
                            <th className="px-4 py-2 border-b border-gray-700">EU</th>
                            <th className="px-4 py-2 border-b border-gray-700">US</th>
                            <th className="px-4 py-2 border-b border-gray-700">CM</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* HOMBRE */}
                        {[
                            { eu: 40, us: 7, cm: "25 cm" },
                            { eu: 41, us: 8, cm: "26 cm" },
                            { eu: 42, us: 8.5, cm: "26.5 cm" },
                            { eu: 43, us: 9, cm: "27 cm" },
                            { eu: 44, us: 10, cm: "28 cm" },
                        ].map((item, index) => (
                            <tr key={`h-${index}`}>
                                {index === 0 && (
                                    <td className="px-4 py-2 border-b border-gray-700 font-semibold" rowSpan={5}>
                                        Hombre
                                    </td>
                                )}
                                <td className="px-4 py-2 border-b border-gray-700">{item.eu}</td>
                                <td className="px-4 py-2 border-b border-gray-700">{item.us}</td>
                                <td className="px-4 py-2 border-b border-gray-700">{item.cm}</td>
                            </tr>
                        ))}
                        {/* MUJER */}
                        {[
                            { eu: 36, us: 5.5, cm: "23 cm" },
                            { eu: 37, us: 6, cm: "23.5 cm" },
                            { eu: 38, us: 7, cm: "24 cm" },
                            { eu: 39, us: 8, cm: "25 cm" },
                            { eu: 40, us: 8.5, cm: "25.5 cm" },
                        ].map((item, index) => (
                            <tr key={`m-${index}`}>
                                {index === 0 && (
                                    <td className="px-4 py-2 border-b border-gray-700 font-semibold" rowSpan={5}>
                                        Mujer
                                    </td>
                                )}
                                <td className="px-4 py-2 border-b border-gray-700">{item.eu}</td>
                                <td className="px-4 py-2 border-b border-gray-700">{item.us}</td>
                                <td className="px-4 py-2 border-b border-gray-700">{item.cm}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* RESPONSIVE CARDS */}
                <div className="md:hidden space-y-6">
                    <h2 className="text-xl font-bold mt-6">Hombre</h2>
                    {[
                        { eu: 40, us: 7, cm: "25 cm" },
                        { eu: 41, us: 8, cm: "26 cm" },
                        { eu: 42, us: 8.5, cm: "26.5 cm" },
                        { eu: 43, us: 9, cm: "27 cm" },
                        { eu: 44, us: 10, cm: "28 cm" },
                    ].map((item, index) => (
                        <div key={`mh-${index}`} className="bg-gray-800 rounded-lg shadow-md p-4 border border-gray-700">
                            <p><span className="font-semibold">EU:</span> {item.eu}</p>
                            <p><span className="font-semibold">US:</span> {item.us}</p>
                            <p><span className="font-semibold">CM:</span> {item.cm}</p>
                        </div>
                    ))}

                    <h2 className="text-xl font-bold mt-6">Mujer</h2>
                    {[
                        { eu: 36, us: 5.5, cm: "23 cm" },
                        { eu: 37, us: 6, cm: "23.5 cm" },
                        { eu: 38, us: 7, cm: "24 cm" },
                        { eu: 39, us: 8, cm: "25 cm" },
                        { eu: 40, us: 8.5, cm: "25.5 cm" },
                    ].map((item, index) => (
                        <div key={`mw-${index}`} className="bg-gray-800 rounded-lg shadow-md p-4 border border-gray-700">
                            <p><span className="font-semibold">EU:</span> {item.eu}</p>
                            <p><span className="font-semibold">US:</span> {item.us}</p>
                            <p><span className="font-semibold">CM:</span> {item.cm}</p>
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={handleBack}
                className="mt-10 px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors font-medium w-full md:w-auto"
            >
                Volver al catálogo
            </button>
        </div>
    );
};

export default GuiaDeTallas;
