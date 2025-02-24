import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Inicio.css";

function Inicio() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/"); // Redirigir al login si no hay token
    }
  }, [navigate]);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:4000/api/usuarios/logout", {}, {
        headers: { Authorization: token }
      });

      localStorage.removeItem("token");
      navigate("/"); // Redirigir a la página de inicio (login)
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    }
  };

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

  return (
    <div className="inicio-container">
      {/* Navbar */}
      <nav className="navbar">
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a onClick={InicioNV} className="navbar-link">
              Inicio
            </a>
          </li>
          <li className="navbar-item">
            <a onClick={handleLogout} className="navbar-link">
              Cerrar sesión
            </a>
          </li>
        </ul>
      </nav>

      {/* Contenedores con imágenes */}
      <div className="roboto-mono cards-container">
        <div className="card">
          <div className="card-imagem"></div>
          <button className="card-footer" onClick={GMultas}>Gestión de Multas</button>
        </div>
        <div className="card">
          <div className="card-imagepago"></div>          
          <button className="card-footer" onClick={GPagos}>Gestión de Pagos</button>
        </div>
        <div className="card">
          <div className="card-imagep"></div>
          <button className="card-footer" onClick={GPortones}>Permiso de Portones</button>
        </div>
        <div className="card">
          <div className="card-imagepro"></div>
          <button className="card-footer" onClick={GInquilinos}>Gestión de Inquilinos</button>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
