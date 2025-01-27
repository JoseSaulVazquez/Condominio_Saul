import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./InicioIN.css";

function InicioIN() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate("/"); // Redirigir al login si no hay token
    }
  }, [navigate]);

  const GMultas = () => {
    navigate("/multas"); // Redirigir a la página de multas
  };

  const GPagos = () => {
    navigate("/pagos"); // Redirigir a la página de pagos
  };

  const GPortones = () => {
    navigate("/portones"); // Redirigir a la página de portones
  };

  const GInquilinos = () => {
    navigate("/inquilinos"); // Redirigir a la página de inquilinos
  };

  const CerraSesion = () => {
    localStorage.removeItem('token'); // Eliminar el token
    navigate("/"); // Redirigir al login
  };

  return (
    <div className="inicio-container">
      {/* Navbar */}
      <nav className="navbar">
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a className="navbar-link">Inicio</a>
          </li>
          <li className="navbar-item">
            <a onClick={CerraSesion} className="navbar-link">
              Cerrar sesión
            </a>
          </li>
        </ul>
      </nav>

      {/* Contenedores con imágenes */}
      <div className="roboto-mono cards-container">
        <div className="card">
          <div className="card-imagem"></div>
          <button className="card-footer" onClick={GMultas}>Multas</button>
        </div>
        <div className="card">
          <div className="card-imagepago"></div>
          <button className="card-footer" onClick={GPagos}>Pagos</button>
        </div>
        <div className="card">
          <div className="card-imagep"></div>
          <button className="card-footer" onClick={GPortones}>Portones</button>
        </div>
        <div className="card">
          <div className="card-imagepro"></div>
          <button className="card-footer" onClick={GInquilinos}>Inquilinos</button>
        </div>
      </div>
    </div>
  );
}

export default InicioIN;
