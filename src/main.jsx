import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Inicio from "./Inicio.jsx"; 
import GMultas from "./GMultas.jsx";
import GInquilinos from "./GInquilinos.jsx"; 
import GPortones from "./GPortones.jsx"; 
import GPagos from "./GPagos.jsx"; 
import InicioIN from "./InicioIN.jsx"; 



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/GMultas" element={<GMultas />} />
        <Route path="/InicioIN" element={<InicioIN />} />
        <Route path="/GInquilinos" element={<GInquilinos />} />
        <Route path="/GPortones" element={<GPortones />} />
        <Route path="/GPagos" element={<GPagos />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
