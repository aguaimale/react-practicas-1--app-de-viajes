// enrutamienta para los componentes//

import React from 'react';
import {BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PerfilDeUsuario from './PerfilDeUsuario.jsx'
import CrearViaje from './CrearViaje.jsx'
import BuscarViajes from './BuscarViajes.jsx'

function MenuDeOpciones() {
  return (
    <Router>
      <div>
        <Link to="/perfil-de-usuario">Mi perfil</Link>
        <Link to="/crear-viaje">Crear viaje</Link>
        <Link to="/buscar-viajes">Buscar viajes</Link>

        <Switch>
          <Route path="/perfil-de-usuario">
            <PerfilDeUsuario />
          </Route>
          <Route path="/crear-viaje">
            <CrearViaje />
          </Route>
          <Route path="/buscar-viajes">
            <BuscarViajes />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}