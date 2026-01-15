function UserComponent() {
  return <h2>Soy el componente de Usuario</h2>
}

function ProfileComponent() {
  return <h2>Soy el componente de Perfil</h2>
}

function FeedComponent() {
  return <h2>Soy el muro de noticias (Feed)</h2>
}

function ParentComponent() {
  return (
    <>
      <h3>--- Inicio del Panel ---</h3>
      <UserComponent />
      <ProfileComponent />
      <FeedComponent />
      <h3>--- Fin del Panel ---</h3>
    </>
  )
}

export default function App() {
  return (
    <>
      <h1>Bienvenido a la Tarea 2</h1>
      <ParentComponent />
    </>
  )
}