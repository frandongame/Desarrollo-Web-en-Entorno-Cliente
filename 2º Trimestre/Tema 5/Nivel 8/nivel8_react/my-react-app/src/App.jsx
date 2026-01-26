import { useState } from 'react';
function App() {
const [username, setUsername] = useState('');
const [usernameError, setUsernameError] = useState('');
const [email, setEmail] = useState('');
const [emailError, setEmailError] = useState('');
const [emailError1, setEmailError1] = useState('');
const [password, setPassword] = useState('');
const [passwordError, setPasswordError] = useState('');

const handleUsername = (e) => {
const { value } = e.target;
setUsername(value);
if (value.length <= 6) {
setUsernameError('El username debe tener más de 6 caracteres');
} else {
setUsernameError('');
}
};

const handleEmail = (e) => {
const { value } = e.target;
setEmail(value);
if (!value.includes('@')) {
  setEmailError('El email debe incluir un @');
}else {
  setEmailError('');
}

if (!value.includes('.')) {
  setEmailError1('El email debe incluir un .');
}else {
  setEmailError1('');
}
};

const handlePassword = (e) => {
const { value } = e.target;
setPassword(value);
if (value.length < 8) {
  setPasswordError('La contraseña debe tener al menos 8 caracteres');
} else {
  setPasswordError('');
}
};

const isFormInvalid = 
usernameError !== '' || 
emailError !== '' || 
emailError1 !== '' || 
passwordError !== '' ||
username === '' || 
email === '' || 
password === '';

const handleSubmit = (e) => {
e.preventDefault(); // evita el refresco del navegador
if (!isFormInvalid) {
  alert("Formulario enviado con éxito");}
};

return (

<form onSubmit={handleSubmit}>

<p>email: 
<input
type="text"
value={email}
onChange={handleEmail}
/></p>

<p>password: 
<input
type="text"
value={password}
onChange={handlePassword}
/></p>

<p>Username:
<input
type="text"
value={username}
onChange={handleUsername}
/></p>

<button disabled={isFormInvalid}>Submit</button>

<p class="error">{usernameError}</p>
<p class="error">{emailError}</p>
<p class="error">{emailError1}</p>
<p class="error">{passwordError}</p></form>
);

}
export default App;