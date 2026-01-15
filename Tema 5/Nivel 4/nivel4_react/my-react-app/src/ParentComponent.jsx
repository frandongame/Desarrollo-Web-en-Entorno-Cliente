import { useState } from 'react';
import ChildComponent from './ChildComponent.jsx';

function ParentComponent() {
  const [name, setName] = useState("Juanaco");

  return (
    <ChildComponent 
      name={name}
      setName={setName}
    />
  );
}

export default ParentComponent;