import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import "./GMultas.css";

function GMultas() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cantidad: "",
    departamento: "",
    torre: "",
    comentarios: ""
  });
  const [multas, setMultas] = useState([]); // Estado para almacenar las multas

  // Obtener datos de la base de datos al montar el componente
  useEffect(() => {
    const fetchMultas = async () => {
      try {
        const response = await axios.get("https://api-condominio-nwep.onrender.com"); // Ajusta la URL según tu backend
        setMultas(response.data); // Asigna los datos obtenidos al estado
      } catch (error) {
        console.error("Error al obtener las multas:", error);
      }
    };

    fetchMultas();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://api-condominio-nwep.onrender.com", formData); // Ajusta la URL de acuerdo a tu backend
      console.log("Multa registrada:", response.data);
      alert("La multa ha sido guardada");
      setFormData({
        cantidad: "",
        torre: "",
        departamento: "",
        comentarios: ""
      });
      // Refrescar las multas después de registrar una nueva
      setMultas((prev) => [...prev, response.data]);
    } catch (error) {
      console.error("Error al registrar la multa", error);
      alert("Hubo un problema al guardar los datos");
    }
  };

  const InicioNV = () => navigate("/inicio");
  const GMultas = () => navigate("/GMultas");
  const GPagos = () => navigate("/GPagos");
  const GPortones = () => navigate("/GPortones");
  const GInquilinos = () => navigate("/GInquilinos");
  const CerraSesion = () => navigate("/");

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
        <form className="form-registrar" onSubmit={handleSubmit}>
          <div className="input-icon">
            <input
              type="number"
              className="input-cantidad"
              placeholder="Cantidad"
              min="0"
              step="0.01"
              name="cantidad"
              value={formData.cantidad}
              onChange={handleChange}
            />
          </div>
          <div className="input-icon">
            <input
              type="text"
              className="input-torre"
              placeholder="Torre"
              name="torre"
              value={formData.torre}
              onChange={handleChange}
            />
          </div>
          <div className="input-icon">
            <input
              type="text"
              className="input-departamento"
              placeholder="Departamento"
              name="departamento"
              value={formData.departamento}
              onChange={handleChange}
            />
          </div>
          <input
            type="text"
            className="COM"
            placeholder="Comentarios"
            name="comentarios"
            value={formData.comentarios}
            onChange={handleChange}
          />
          <button type="submit" className="btn-registrar">
            Registrar
          </button>
        </form>
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
            {multas.map((multa, index) => (
              <tr key={index}>
                <td>{multa.torre}</td>
                <td>{multa.departamento}</td>
                <td>{multa.cantidad}</td>
                <td>{multa.comentarios}</td>
                <td>{new Date(multa.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GMultas;
