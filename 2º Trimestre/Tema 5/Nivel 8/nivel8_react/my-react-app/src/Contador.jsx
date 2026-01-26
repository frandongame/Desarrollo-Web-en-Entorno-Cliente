import { useState } from 'react';

function Contador() {
    const [contador, setContador] = useState(0);

    const incrementarContador = () => {
        setContador(contador + 1);
    };

    const decrementarContador = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    };

    return (
        <div>
            <h2>Contador</h2>
            <h3>{contador}</h3>
            <button onClick={incrementarContador}>+1</button>
            <button onClick={decrementarContador}>-1</button>
        </div>
    );
}

export default Contador;