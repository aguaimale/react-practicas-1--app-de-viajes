function FormularioDeInicioDeSesion() {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");

  function handleSubmit(event) {
    event.preventDefault(); //siempre//
    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].email === email && usuarios[i].contraseña === contraseña) {
        console.log("Bienvenido, " + usuarios[i].nombre);
        return;
      }
    }
    console.log("Datos incorrectos.");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Correo electrónico:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
</label>
<br />
<label>
Contraseña:
<input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} required />
</label>
<br />
<button type="submit">Iniciar sesión</button>
</form>
);
}