function App() {
const newEmails = 2
return (
<>
<h1>Hola chavules</h1>
{newEmails > 0 && (
<h2>Tienes {newEmails} nuevas palomas mensajeras
esperando.</h2>
)}
</>
)
}