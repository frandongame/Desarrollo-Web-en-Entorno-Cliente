import React, { useState, useEffect } from 'react';
import Juego from './Juego';
import './App.css';

// He creado este componente pequeño aquí para no repetir el código de la barra
// tanto en App como en Juego.
const BarraProgreso = ({ porcentaje }) => (
  <div className="bloque centro">
    <div className="barra">
      {/* Aquí aplico el ancho directamente con estilos en línea, es más fácil */}
      <div className="relleno" style={{ width: `${porcentaje}%` }}></div>
      <div className="porcentaje fuente">{Math.floor(porcentaje)}%</div>
    </div>
  </div>
);

// Tengo guardados los textos en este array para tener el HTML más limpio
const MENSAJES = [
  "", 
  "Cargando componentes del sistema...", 
  "¿Cansado de esperar? Te propongo un reto, ¿aceptas?.", 
  "¿Seguro que no quieres? Va para largo.", 
  "Yo le daría a que SÍ, pero tú mismo.", 
  "Ya no te pregunto, TE PIDO que aceptes.", 
  "Que bruto eres!!! lo has roto. Ahora la decisión es evidente."
];

function App() {
  // Estados para controlar en qué pantalla estamos
  const [fase, setFase] = useState(0); 
  const [carga, setCarga] = useState(0);
  const [haDudado, setHaDudado] = useState(false);

  // Este efecto hace que la barra cargue sola al principio
  useEffect(() => {
    if (fase === 1) {
      const intervalo = setInterval(() => {
        setCarga((c) => {
          // Cuando llega a 80, paro y espero un poco
          if (c >= 80) {
            clearInterval(intervalo);
            setTimeout(() => setFase(2), 3000); 
            return 80;
          }
          return c + 0.5; 
        });
      }, 30);
      return () => clearInterval(intervalo);
    }
  }, [fase]);

  // Si le da a NO, avanzo la fase para molestar un poco
  const clickNo = () => {
    setHaDudado(true);
    if (fase < 6) setFase(fase + 1);
  };

  // Si le da a SI, vamos al juego
  const clickSi = () => {
    if (haDudado) setTimeout(() => setFase(7), 1000);
    else setFase(7);
  };

  // Aquí calculo qué clases ponerle a los botones según la fase
  const claseBtnSi = `fuente blanco btn-si ${fase >= 3 ? 'si-f3' : ''} ${fase >= 4 ? 'si-f4' : ''} verde`;
  const claseBtnNo = `fuente blanco btn-no ${fase === 4 ? 'no-f4' : ''} ${fase === 6 ? 'roto' : 'rojo'}`;

  // Pantalla de Inicio
  if (fase === 0) {
    return (
      <div className="app">
        <h1 className="fuente blanco titulo">LA CARGA ETERNA</h1>
        <button onClick={() => setFase(1)} className="fuente blanco btn-inicio">EMPEZAR</button>
      </div>
    );
  }

  // Si llegamos a la fase 7, cargo el componente del Juego
  if (fase === 7) return <div className="app"><Juego /></div>;

  // Pantalla principal (Narrativa)
  return (
    <div className="app">
      
      <div className="bloque arriba">
        {/* Muestro el mensaje que toque según la fase */}
        <p className="fuente blanco grande">{MENSAJES[fase]}</p>
      </div>

      <BarraProgreso porcentaje={carga} />

      <div className="bloque abajo">
        {/* Solo muestro los botones a partir de que la barra se atasca */}
        {fase >= 2 && (
           <div className="zona-btns">
            <button onClick={clickSi} className={claseBtnSi}>SÍ</button>
            <button onClick={clickNo} className={claseBtnNo}>{fase === 6 ? "ROTO" : "NO"}</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;