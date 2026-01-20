function ChildComponent(props) {
  return (
    <div>
      <h1>Hello {props.name}</h1>
      
      <button onClick={() => props.setName("Juanky")}>
        Poner nombre Juanky
      </button>

      <button onClick={() => props.setName("El Bicho")}>
        Poner nombre El Bicho
      </button>
    </div>
  );
}

export default ChildComponent;