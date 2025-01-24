import React from "react";
import { useNavigate } from "react-router-dom";
import "./InicioIN.css";



function InicioIN() {
  const navigate = useNavigate();

  const InicioIN = () => {
    navigate(""); 
  };

  const GMultas = () => {
    navigate(""); 
  };

  const GPagos = () => {
    navigate(""); 
  };

  const GPortones = () => {
    navigate(""); 
  };
  
  const GInquilinos = () => {
    navigate(""); 
  };

  const CerraSesion = () => {
    navigate("/"); 
  };

  return (
    <div className="inicio-container">
      {/* Navbar */}
      <nav className="navbar">
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a onClick={InicioIN} className="navbar-link">
              Inicio
            </a>
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
