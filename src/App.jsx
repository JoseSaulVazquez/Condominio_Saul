import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  // Manejador para iniciar sesión y activar la animación
  const handleLoginClick = () => {
    setIsActive(false);
  };

  const handleLoginFormClick = () => {
    setIsActive(true); // Activa la animación
  };

  // Manejador cuando la transición termina
  const handleTransitionEnd = () => {
    if (isActive) {
      navigate("/inicio"); // Redirige después de la animación
    }
  };

  return (
    <div
      className={`container ${isActive ? "active" : ""}`}
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
            maxLength="10" /* Máximo de 15 dígitos por ejemplo */
            pattern="\d{10}" /* Esto asegura que el número tenga entre 10 a 15 dígitos. */
            required
          />

          <input
            type="password"
            id="password"
            placeholder="Contraseña"
          />
          <a href="#" className="forgot-password">
            ¿Olvidaste tu contraseña?
          </a>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <button
              className="hidden"
              id="loginbtn"
              onClick={handleLoginClick}
            >
              Inicia sesión
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <div className="roboto-mono2">
              <h1>BIENVENIDO</h1>
              <p>Inicia sesión con tu número telefónico y contraseña</p>
              <button
                type="button"
                id="loginBtn"
                onClick={handleLoginFormClick}
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
