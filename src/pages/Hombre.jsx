import React from 'react';
import { useNavigate } from 'react-router-dom'; // Si estás usando React Router

function Hombre(props) {
    const { data } = props; // Asumiendo que el objeto que proporcionaste está en 'data'
    const navigate = useNavigate(); // Hook para la navegación en React Router

    const handleClick = () => {
        // Aquí defines la lógica para renderizar el otro componente
        // Por ejemplo, si estás usando React Router, podrías navegar a una ruta específica:
        navigate('/otro-componente');
        // O podrías cambiar el estado de un componente padre para mostrar el otro componente.
    };

    return (
        <div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
            {data.img && <img src={data.img} alt={data.title} />}
            <p>Tiempo: {data.time}</p>
            <p>Me gusta: {data.like}</p>
            <p>Por: {data.by}</p>
            <button onClick={handleClick}>{data.btn}</button>
        </div>
    );
}

export default Hombre;