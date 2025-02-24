import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaBell } from "react-icons/fa";
import "./InicioIN.css";

function InicioIN() {
  const navigate = useNavigate();
  const [notificaciones, setNotificaciones] = useState([]);
  const [mostrarPanel, setMostrarPanel] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/"); // Redirigir al login si no hay token
      return;
    }

    const obtenerNotificaciones = async () => {
      try {
        const usuarioId = obtenerIdDesdeToken(token);
        const response = await axios.get(
          `http://localhost:4000/api/usuarios/notificaciones/${usuarioId}`,
          {
            headers: {
              Authorization: token, // Incluir el token en el encabezado
            },
          }
        );
        setNotificaciones(response.data);
      } catch (error) {
        console.error("Error al obtener notificaciones:", error);
        if (error.response && error.response.status === 401) {
          // Si el token no es válido, redirigir al login
          navigate("/");
        }
      }
    };

    obtenerNotificaciones();
  }, [navigate]);

  const obtenerIdDesdeToken = (token) => {
    if (!token) return null;
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.id;
    } catch (error) {
      console.error("Error al decodificar el token", error);
      return null;
    }
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:4000/api/usuarios/logout", {}, {
        headers: { Authorization: token }
      });

      localStorage.removeItem("token");
      localStorage.removeItem("usuario");
      navigate("/"); // Redirigir al login
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    }
  };

  const GMultas = () => navigate("/multas");
  const GPagos = () => navigate("/pagos");
  const GPortones = () => navigate("/portones");
  const GInquilinos = () => navigate("/inquilinos");

  return (
    <div className="inicio-container">
      <nav className="navbar2">
        <ul className="navbar-menu2">
          <li className="navbar-item2">
            <a className="navbar-link2">Inicio</a>
          </li>
          <li className="navbar-item2">
            <div className="notification-container">
              <div className="notification-icon" onClick={() => setMostrarPanel(!mostrarPanel)}>
                <FaBell />
                {notificaciones.length > 0 && (
                  <span className="notification-badge">{notificaciones.length}</span>
                )}
              </div>
              {mostrarPanel && (
                <div className="notification-panel">
                  {notificaciones.length > 0 ? (
                    notificaciones.map((notif, index) => (
                      <div key={index} className="notification-item">{notif.mensaje}</div>
                    ))
                  ) : (
                    <p>No hay notificaciones</p>
                  )}
                </div>
              )}
            </div>
          </li>
          <li className="navbar-item2">
            <a onClick={handleLogout} className="navbar-link2" style={{ cursor: "pointer" }}>
              Cerrar sesión
            </a>
          </li>
        </ul>
      </nav>

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
