import Contador from './Contador.jsx';
import Panel from './Panel.jsx';

function App() {
    return (
        <div>
            <h1>Panel con requisitos (Separado por componentes)</h1>

            <Panel />
            
            <Contador />
        </div>
    );
}

export default App;