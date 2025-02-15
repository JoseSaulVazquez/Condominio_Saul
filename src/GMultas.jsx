import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./Navbar.css";
import "./GMultas.css";
import "./Transitions.css";

function GMultas() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ cantidad: "", departamento: "", torre: "", comentarios: "" });
  const [multas, setMultas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    const fetchMultas = async () => {
      try {
        const token = localStorage.getItem("token"); // Obtener el token del localStorage
        const response = await axios.get("http://localhost:4000/api/multas", {
          headers: {
            Authorization: `${token}`, // Incluir el token en el encabezado
          },
        });
        setMultas(response.data);
      } catch (error) {
        console.error("Error al obtener las multas:", error);
        if (error.response && error.response.status === 401) {
          // Si el token no es válido, redirigir al login
          navigate("/");
        }
      }
    };
    fetchMultas();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem("token"); // Obtener el token del localStorage
      const response = await axios.post("http://localhost:4000/api/multas", formData, {
        headers: {
          Authorization: `${token}`, // Incluir el token en el encabezado
        },
      });
      setModalMessage("Multa registrada exitosamente.");
      setMultas((prev) => [...prev, response.data]);
      setFormData({ cantidad: "", torre: "", departamento: "", comentarios: "" });
    } catch (error) {
      setModalMessage("Hubo un problema al guardar la multa.");
      console.error("Error al registrar la multa", error);
      if (error.response && error.response.status === 401) {
        // Si el token no es válido, redirigir al login
        navigate("/");
      }
    } finally {
      setLoading(false);
      setModalVisible(true);
    }
  };

  const closeModal = () => setModalVisible(false);

  return (
    <div className="inicio-containerGM">
      <nav className="navbar">
        <ul className="navbar-menu">
          <li className="navbar-item"><a onClick={() => navigate("/inicio")} className="navbar-link">Inicio</a></li>
          <li className="navbar-item"><a onClick={() => navigate("/GMultas")} className="navbar-link">Gestión de Multas</a></li>
          <li className="navbar-item"><a onClick={() => navigate("/GPagos")} className="navbar-link">Gestión de Pagos</a></li>
          <li className="navbar-item"><a onClick={() => navigate("/GPortones")} className="navbar-link">Permiso de Portones</a></li>
          <li className="navbar-item"><a onClick={() => navigate("/GInquilinos")} className="navbar-link">Gestión de Inquilinos</a></li>
          <li className="navbar-item"><a onClick={() => navigate("/")} className="navbar-link">Cerrar sesión</a></li>
        </ul>
      </nav>

      <div className="box-registrar-multa">
        <h2 className="roboto-mono">Registrar Multa</h2>
        <form className="form-registrar" onSubmit={handleSubmit}>
          <div className="input-icon">
            <input type="number" placeholder="Cantidad" name="cantidad" value={formData.cantidad} onChange={handleChange} min="0" step="0.01" className="input-cantidad" />
            <input type="text" placeholder="Torre" name="torre" value={formData.torre} onChange={handleChange} className="input-torre" />
            <input type="text" placeholder="Departamento" name="departamento" value={formData.departamento} onChange={handleChange} className="input-departamento" />
            <input type="text" placeholder="Comentarios" name="comentarios" value={formData.comentarios} onChange={handleChange} className="COM" />
          </div>
          <button type="submit" className="btn-registrar" disabled={loading}>
            <CSSTransition in={loading} timeout={300} classNames="fade" unmountOnExit>
              <span>Cargando...</span>
            </CSSTransition>
            {!loading && <span>Registrar</span>}
          </button>
        </form>
      </div>

      <div className="box-multas">
        <h2 className="roboto-mono RM">Multas</h2>
        <table className="table">
          <thead>
            <tr><th>Torre</th><th>Departamento</th><th>Cantidad</th><th>Motivo</th><th>Fecha</th></tr>
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

      <CSSTransition in={modalVisible} timeout={300} classNames="modal" unmountOnExit>
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <p>{modalMessage}</p>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}

export default GMultas;