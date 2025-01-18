import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import "./GPortones.css";

function GPortones() {
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
    <div>

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

      {/* Contenedor 2: Multas */}
      <div className="box-soliciones">
        <h2 className="roboto-mono RS">Solicitudes</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Torre</th>
              <th>Departamento</th>
              <th>Motivo</th>
              <th>Permiso</th>
            </tr>
          </thead>
          <tbody>
            {/* Aquí puedes mapear datos dinámicos */}
            <tr>
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
            </tr>
            <tr>
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
            </tr>
            <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
          </tbody>
        </table>
        <div className="buttons">
          <button className="btn">Gestionar</button>
        </div>
      </div>

      {/* Contenedor 3: Reportes */}
      <div className="box-permisoP">
        <h2 className="roboto-mono RPP">Permiso de Portones</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Torre</th>
              <th>Departamento</th>
              <th>Motivo</th>
              <th>Permiso</th>
            </tr>
          </thead>
          <tbody>
            {/* Aquí puedes mapear datos dinámicos */}
            <tr>
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
            </tr>
            <tr>
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
            </tr>
            <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
          </tbody>
        </table>
        <div className="buttons">
          <button className="btn">Gestionar</button>
        </div>
      </div>

    </div>
  );
}

export default GPortones;
