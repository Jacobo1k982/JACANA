import { Routes, Route } from "react-router-dom";

export const AppRoter = () => {
    return (
        <Routes>
            <Route path="/Hombre" element={<Hombre />} />
        </Routes>
    )
};