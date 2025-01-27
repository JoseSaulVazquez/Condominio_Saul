import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";  
import "./App.css";

function App() {
  const [numero_tel, setNumeroTel] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  
  const handleLoginClick = async () => {
    try {
      const response = await axios.post("https://api-condominio-nwep.onrender.com/api/usuarios/login", {
        numero_tel,
        contrasena
      });
  
      const { token, rol } = response.data;
      localStorage.setItem('token', token); // Almacenar el token en localStorage
  
      if (rol === "Admin") {
        navigate("/inicio");
      } else if (rol === "Inquilino") {
        navigate("/InicioIN");
      } else {
        setError("Rol no reconocido");
      }
    } catch (err) {
      setError("Número de teléfono o contraseña incorrectos");
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
