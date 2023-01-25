import React from 'react';

function PerfilDeUsuario(props) {
  const {email, nombre, edad, residencia} = props;
  return (
    <div>
      <h2>Perfil de usuario</h2>
      <p>Correo electrónico: {email}</p>
      <p>Nombre: {nombre}</p>
      <p>Edad: {edad}</p>
      <p>Lugar de residencia: {residencia}</p>
    </div>
  );
}
// USUARIO ACTUAL O ACTIVO//

//<PerfilDeUsuario 
    //email={usuarioActual.email} 
    //nombre={usuarioActual.nombre} 
    //edad={usuarioActual.edad} 
    //residencia={usuarioActual.residencia}
///>