import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import "./GPago.css";

function GMultas() {
  const navigate = useNavigate();

  const InicioNV = () => {
    navigate("/inicio"); 
  };

  const GMultas = () => {
    navigate("/GMultas"); 
  };

  const GPagos = () => {
    navigate("/GPagos"); 
  };

  const GPortones = () => {
    navigate("/GPortones"); 
  };
  
  const GInquilinos = () => {
    navigate("/GInquilinos"); 
  };

  const CerraSesion = () => {
    navigate("/"); 
  };

  return (
    <div className="inicio-containerGM">

      {/* Navbar */}
      <nav className="navbar">
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a onClick={InicioNV} className="navbar-link">
              Inicio
            </a>
          </li>
          <li className="navbar-item">
            <a onClick={GMultas} className="navbar-link">
              Gestión de Multas
            </a>
          </li>
          <li className="navbar-item">
            <a onClick={GPagos} className="navbar-link">
              Gestión de Pagos
            </a>
          </li>
          <li className="navbar-item">
            <a onClick={GPortones} className="navbar-link">
              Permiso de Portones
            </a>
          </li>
          <li className="navbar-item">
            <a onClick={GInquilinos} className="navbar-link">
              Gestión de Inquilinos
            </a>
          </li>
          <li className="navbar-item">
            <a onClick={CerraSesion} className="navbar-link">
              Cerrar sesión
            </a>
          </li>
        </ul>
      </nav>

      {/* Contenido */}

      {/* Contenedor 1: Registrar Multa */}
      <div className="box-registrar-multa">
    <h2 className="roboto-mono">Registrar Multa</h2>
    <form className="form-registrar">
        <div className="input-icon">
            <input type="number" className="input-cantidad" placeholder="Cantidad" min="0" step="0.01"/>
        </div>
        <div className="input-icon">
            <input type="text" className="input-departamento" placeholder="Departamento" />
        </div>
        <div className="input-icon">
            <input type="text" className="input-torre" placeholder="Torre" />
        </div>
    </form>
         <input className="COM" placeholder="Comentarios" />
         <button type="submit" className="btn-registrar">Registrar</button>
</div>

      {/* Contenedor 2: Multas */}
      <div className="box-multas">
        <h2 className="roboto-mono RM">Multas</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Torre</th>
              <th>Departamento</th>
              <th>Cantidad</th>
              <th>Motivo</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {/* Aquí puedes mapear datos dinámicos */}
            <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
          </tbody>
        </table>
        <div className="buttons">
          <button className="btn">Historial</button>
          <button className="btn">Gestionar</button>
        </div>
      </div>

      {/* Contenedor 3: Reportes */}
      <div className="box-reportes">
        <h2 className="roboto-mono RR">Reportes</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Torre</th>
              <th>Departamento</th>
              <th>Teléfono</th>
              <th>Estado</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {/* Aquí puedes mapear datos dinámicos */}
            <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
          </tbody>
        </table>
        <div className="buttons">
          <button className="btn">Historial</button>
          <button className="btn">Gestionar</button>
        </div>
      </div>
    </div>
  );
}

export default GMultas;
