import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";
import "./InicioIN.css";

function InicioIN() {
  const [notificacion, setNotificacion] = useState(null);
  const navigate = useNavigate();

  // Verificar si el token existe en el almacenamiento local
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate("/"); // Redirigir al login si no hay token
    }

    const socket = io("https://api-condominio-nwep.onrender.com"); // URL del servidor API

    // Escuchar las notificaciones de nuevas multas
    socket.on("nuevaMulta", (data) => {
      // Verificar si la multa corresponde al usuario
      const usuario = JSON.parse(localStorage.getItem('usuario')); // Se asume que el usuario está guardado en localStorage
      if (data.torre === usuario.torre && data.departamento === usuario.departamento) {
        setNotificacion(data);
        alert(`Nueva Multa Registrada\nCantidad: ${data.cantidad}\nComentarios: ${data.comentarios}`);
      }
    });

    return () => {
      socket.disconnect();
    };
  }, [navigate]);

  // Funciones para navegar a diferentes rutas
  const GMultas = () => navigate("/multas");
  const GPagos = () => navigate("/pagos");
  const GPortones = () => navigate("/portones");
  const GInquilinos = () => navigate("/inquilinos");
  
  // Función para cerrar sesión
  const CerraSesion = () => {
    localStorage.removeItem('token'); // Eliminar el token
    localStorage.removeItem('usuario'); // Eliminar el usuario
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

      {/* Contenido de la pantalla */}
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

      {/* Notificación de nueva multa */}
      {notificacion && (
        <div className="notification">
          <h3>Nueva Multa</h3>
          <p>Torre: {notificacion.torre}</p>
          <p>Departamento: {notificacion.departamento}</p>
          <p>Cantidad: {notificacion.cantidad}</p>
          <p>Comentarios: {notificacion.comentarios}</p>
        </div>
      )}
    </div>
  );
}

export default InicioIN;
