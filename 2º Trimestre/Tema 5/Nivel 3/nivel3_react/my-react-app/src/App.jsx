function App() {
  const users = [
    { id: 1, name: 'Jose', role: 'Web Developer' },
    { id: 2, name: 'Estefanía', role: 'Web Designer' },
    { id: 3, name: 'Rubén', role: 'Team Leader' },
    { id: 4, name: 'Klara', role: 'Project Manager' },
    { id: 5, name: 'Ibra', role: 'Intern' },
  ];

  return (
    <>
      <p>Lista de usuarios activos:</p>
      <ul>
        {users.map(function (user) {
          let userClass = '';

          if (user.role === 'Team Leader' || user.role === 'Project Manager') {
            userClass = 'role-boss';
          } else if (user.role === 'Web Designer') {
            userClass = 'role-design';
          } else {
            userClass = 'role-tech';
          }

          return (
            <li key={user.id} className={userClass}>
              {user.name} — {user.role}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;