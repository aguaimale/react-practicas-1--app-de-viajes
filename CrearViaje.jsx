import React, {useState} from 'react';

function CrearViaje() {
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [horarioSalida, setHorarioSalida] = useState("");
  const [lugaresDisponibles, setLugaresDisponibles] = useState("");
  
  function handleSubmit(event) {
  event.preventDefault();
  console.log("Origen: " + origen);
  console.log("Destino: " + destino);
  console.log("Horario de salida: " + horarioSalida);
  console.log("Lugares disponibles: " + lugaresDisponibles);
  }
  
  return (
  <form onSubmit={handleSubmit}>
  <label>
  Origen:
  <input type="text" value={origen} onChange={(e) => setOrigen(e.target.value)} required />
  </label>
  <br />
  <label>
  Destino:
  <input type="text" value={destino} onChange={(e) => setDestino(e.target.value)} required />
  </label>
  <br />
  <label>
  Horario de salida:
  <input type="text" value={horarioSalida} onChange={(e) => setHorarioSalida(e.target.value)} required />
  </label>
  <br />
  <label>
  Lugares disponibles:
  <input type="number" value={lugaresDisponibles} onChange={(e) => setLugaresDisponibles(e.target.value)} required />
  </label>
  <br />
  <button type="submit">Crear viaje</button>
  </form>
  );
  }