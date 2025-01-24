import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";  // Importa axios para hacer peticiones HTTP
import "./App.css";

function App() {
  const [numero_tel, setNumeroTel] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Manejador para iniciar sesión y activar la animación
  const handleLoginClick = async () => {
    try {
      const response = await axios.post("http://localhost:4000/api/usuarios/login", {  // Ruta al backend para inicio de sesión
        numero_tel,
        contrasena
      });

      if (response.data.rol === "Admin") {
        navigate("/inicio");  // Redirige a la interfaz del Admin
      } else if (response.data.rol === "Inquilino") {
        navigate("/InicioIN");  // Redirige a la interfaz del Inquilino
      } else {
        setError("Rol no reconocido");  // Manejar caso cuando no se reconoce el rol
      }
    } catch (err) {
      setError("Número de teléfono o contraseña incorrectos");  // Manejar errores de login
    }
  };

  const handleLoginFormClick = () => {
    setError("");  // Limpiar errores cuando se muestra el formulario
  };

  // Manejador cuando la transición termina
  const handleTransitionEnd = () => {
    if (error === "") {
      navigate("/"); // Redirige a la página de inicio si no hay errores
    }
  };

  return (
    <div
      className={`container ${error ? "active" : ""}`}
      id="container"
      onTransitionEnd={handleTransitionEnd} // Detecta el final de la transición
    >
      <div className="form-container sign-in">
        <form id="loginForm">
          <h2 className="roboto-mono">LOGIN</h2>
          <input
            type="tel"
            id="phone"
            placeholder="Número Telefónico"
            maxLength="10"
            pattern="\d{10}"
            value={numero_tel}
            onChange={(e) => setNumeroTel(e.target.value)}
            required
          />

          <input
            type="password"
            id="password"
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />

          {error && <p className="error-message">{error}</p>}  {/* Mostrar mensajes de error */}
          
        </form>
      </div>

      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-right">
            <div className="roboto-mono2">
              <h1>BIENVENIDO</h1>
              <p>Inicia sesión con tu número telefónico y contraseña</p>
              <button
                type="button"
                id="loginBtn"
                onClick={handleLoginClick}
              >
                Iniciar sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
