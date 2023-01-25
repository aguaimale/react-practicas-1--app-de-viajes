import React, {useState} from 'react';

const usuarios = [];

function FormularioDeRegistro() {
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [residencia, setResidencia] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const nuevoUsuario = {email: email, nombre: nombre, edad: edad, residencia: residencia};
    usuarios.push(nuevoUsuario);
    console.log(usuarios);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Correo electrónico:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <br />
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
      </label>
      <br />
      <label>
        Edad:
        <input type="number" value={edad} onChange={(e) => setEdad(e.target.value)} required />
      </label>
      <br />
      <label>
        Lugar de residencia:
        <input type="text" value={residencia} onChange={(e) => setResidencia(e.target.value)} required />
      </label>
      <br />
      <button type="submit">Registrarse</button>
    </form>
  );
}






