import { useState } from 'react';

function Panel() {
    const [parrafo, setParrafo] = useState(true);
    const [modo, setModo] = useState('');

    const toggleStatus = () => {
        setParrafo(!parrafo);
    };

    return (
        <div>
            <button onClick={toggleStatus}>
                {parrafo ? 'Esconder' : 'Mostrar'} Párrafo
            </button>
            
            {parrafo && (
                <p>Párrafo que desaparece al hacer click</p>
            )}

            <hr />

            <h2>Input para ver modos</h2>
            <input
                type="text"
                placeholder="Escribe tu modo"
                value={modo}
                onChange={(e) => setModo(e.target.value)}
            />
            <p>Tu modo es: <strong>{modo || '...'}</strong></p>
        </div>
    );
}

export default Panel;