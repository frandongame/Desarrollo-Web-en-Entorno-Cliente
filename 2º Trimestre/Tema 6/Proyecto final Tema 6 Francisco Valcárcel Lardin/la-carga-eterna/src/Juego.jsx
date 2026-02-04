import React, { useState, useEffect } from 'react';

// Reutilizo el mismo componente de barra que en App.jsx
const BarraProgreso = ({ porcentaje }) => (
  <div className="bloque centro">
    <div className="barra">
      <div className="relleno" style={{ width: `${porcentaje}%` }}></div>
      <div className="porcentaje fuente">{Math.floor(porcentaje)}%</div>
    </div>
  </div>
);

function Juego() {
  // Estados generales del juego
  const [energia, setEnergia] = useState(50);
  const [estado, setEstado] = useState("jugando"); 
  
  // Estados para cada uno de los 4 puzzles
  const [clicks, setClicks] = useState(0); 
  const [textoReact, setTextoReact] = useState(""); 
  const [jsxCorrecto, setJsxCorrecto] = useState(false); 
  const [visible, setVisible] = useState(false); 
  const [codigo, setCodigo] = useState("");

  // Estado único para todo el formulario final
  const [form, setForm] = useState({ nombre: "", edad: "", hobby: "", check: false });

  // Este efecto maneja la cuenta atrás de la energía
  useEffect(() => {
    if (estado === "jugando" || estado === "formulario") {
      const timer = setInterval(() => {
        setEnergia((prev) => {
          // Si llega a 0, has perdido
          if (prev <= 0) { setEstado("perdido"); return 0; }
          return prev - 0.05; 
        });
      }, 50);
      return () => clearInterval(timer);
    }
  }, [estado]);

  // Función para volver a empezar si pierdes
  const reiniciar = () => {
    setEnergia(50); setEstado("jugando"); setCodigo("");
    setClicks(0); setTextoReact(""); setJsxCorrecto(false); setVisible(false);
    setForm({ nombre: "", edad: "", hobby: "", check: false });
  };

  // Comprueba si has metido el código secreto bien
  const verificarCodigo = (e) => {
    e.preventDefault();
    if (codigo === "1342") setEstado("formulario");
    else { alert("Código incorrecto"); setCodigo(""); }
  };

  // Esta función maneja todos los inputs del formulario a la vez
  // usando el 'name' de cada input.
  const manejarInput = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const enviarForm = (e) => {
    e.preventDefault();
    if (form.check) setEstado("ganado");
    else alert("¡Debes confirmar tu impaciencia!");
  };

  // --- VISTA: Si pierdes ---
  if (estado === "perdido") {
    return (
      <div className="bloque centro">
        <h1 className="fuente rojo titulo">HAS PERDIDO</h1>
        <p className="fuente blanco grande">Barra de carga agotada.</p>
        <button onClick={reiniciar} className="fuente rojo">REINTENTAR</button>
      </div>
    );
  }

  // --- VISTA: Si ganas ---
  if (estado === "ganado") {
    return (
      <div className="bloque centro">
        <h1 className="fuente verde titulo">¡ENHORABUENA!</h1>
        <p className="fuente blanco grande">Web cargada:</p>
        <a href="https://classroom.google.com/h" target="_blank" rel="noreferrer" className="fuente verde grande">classroom.google.com</a>
      </div>
    );
  }

  // --- VISTA PRINCIPAL DEL JUEGO ---
  return (
    <>
      <div className="bloque arriba">
        <h2 className="fuente blanco grande">
          {estado === "formulario" 
            ? "¡RÁPIDO! RELLENA ESTE FORMULARIO PARA GANAR" 
            : "Resuelve los 4 retos para detener la carga"}
        </h2>
      </div>

      <BarraProgreso porcentaje={energia} />

      <div className="bloque abajo">
        
        {/* PARTE 1: Los Puzzles */}
        {estado === "jugando" && (
          <>
            <div className="tablero">
              
              {/* Puzzle 1: Contador */}
              <div className="caja">
                <p className="fuente blanco enunciado">1. Objetivo: 10</p>
                <div className="controles">
                  <button onClick={() => setClicks(clicks - 1)} className="fuente blanco btn-chico">-</button>
                  <span className="fuente blanco num">{clicks}</span>
                  <button onClick={() => setClicks(clicks + 1)} className="fuente blanco btn-chico">+</button>
                </div>
                {clicks === 10 && <span className="fuente verde">DÍGITO [1]</span>}
              </div>

              {/* Puzzle 2: Input controlado */}
              <div className="caja izq">
                <p className="fuente blanco enunciado">2. Escribe "react"</p>
                <input type="text" value={textoReact} onChange={(e) => setTextoReact(e.target.value)} className="fuente blanco" />
                {textoReact === "react" && <span className="fuente verde"> DÍGITO [3]</span>}
              </div>

              {/* Puzzle 3: Lista con map */}
              <div className="caja izq">
                <p className="fuente blanco enunciado">3. Atributo CSS</p>
                {/* Genero los botones con un map para no repetir código */}
                {["class", "className", "style"].map((op) => (
                  <button key={op} onClick={() => op === "className" ? setJsxCorrecto(true) : setEnergia(e=>e-5)} 
                    className={`fuente btn-mini ${jsxCorrecto && op === "className" ? "verde" : "blanco"}`}
                  >{op}</button>
                ))}
                {jsxCorrecto && <span className="fuente verde"> DÍGITO [4]</span>}
              </div>

              {/* Puzzle 4: Renderizado condicional */}
              <div className="caja izq">
                <p className="fuente blanco enunciado">4. Renderizado</p>
                <button onClick={() => setVisible(!visible)} className="fuente blanco btn-chico">
                  {visible ? "Ocultar" : "Mostrar"}
                </button>
                {visible && <span className="fuente verde"> DÍGITO [2]</span>}
              </div>
            </div>

            {/* Input para meter el código secreto */}
            <form onSubmit={verificarCodigo} className="margen">
              <input type="text" value={codigo} onChange={(e) => setCodigo(e.target.value)} maxLength="4" placeholder="????" className="fuente blanco i-cod"/>
              <button type="submit" className="fuente blanco">OK</button>
            </form>
          </>
        )}

        {/* PARTE 2: El Formulario Final */}
        {estado === "formulario" && (
          <form onSubmit={enviarForm} className="form">
            
            <div className="fila">
              <input className="fuente blanco entrada" type="text" placeholder="Nombre" 
                name="nombre" value={form.nombre} onChange={manejarInput} />
              <span className={`fuente blanco aviso ${form.nombre ? 'visible' : ''}`}>Tardas tanto que mi abuela carga más rápido.</span>
            </div>

            <div className="fila">
              <input className="fuente blanco entrada" type="number" placeholder="Edad" 
                name="edad" value={form.edad} onChange={manejarInput} />
              <span className={`fuente blanco aviso ${form.edad ? 'visible' : ''}`}>¿Tantos años y sigues perdiendo el tiempo así?</span>
            </div>

            <div className="fila">
              <input className="fuente blanco entrada" type="text" placeholder="Hobbie favorito" 
                name="hobby" value={form.hobby} onChange={manejarInput} />
              <span className={`fuente blanco aviso ${form.hobby ? 'visible' : ''}`}>¿En serio? Que aburrido eres.</span>
            </div>

            <div className="zona-check">
              <input type="checkbox" id="checkImpaciente" name="check" checked={form.check} onChange={manejarInput} className="check" />
              <label htmlFor="checkImpaciente" className="fuente blanco">Confirmo que soy una persona impaciente que no es capaz de esperar ni 5 minutos</label>
            </div>

            <button type="submit" className="fuente verde btn-total">TERMINAR DE UNA VEZ</button>
          </form>
        )}
      </div>
    </>
  );
}

export default Juego;