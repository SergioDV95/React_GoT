import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* Pages */
import Home from "./pages/Home";
import Api from "./pages/Api";
/* Hooks */
import UseEffect from "./pages/Hooks/UseEffect";
import UseState from "./pages/Hooks/UseState";
import UseRef from "./pages/Hooks/UseRef";
import "./resources/css/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/contacto" element={<p>Contacto</p>} />
        <Route path="/hooks" element={
          <>
            <UseEffect></UseEffect>
            <UseState></UseState>
            <UseRef></UseRef>
          </>
        } />
        <Route path="/nosotros" element={<p>Nosotros</p>} />
        <Route path="/api" element={<Api></Api>} />
        <Route path="*" element={<p>404</p>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

/*
  * 1. Crear un componente llamado Header
  * 2. Crear un componente llamado Footer
  * 3. Crear un componente llamado Main
  * 4. Crear una pagina llamado Home (Componente)
  * 5. Llamar al componente Header y Footer desde el componente Main
  * 6. Llamar al componente Main desde el componente Home
  * 7. Utilizar React Router DOM para manejar las rutas del proyecto
  * 8. Crear una ruta para el componente Home
  * 9. Crear una ruta para el componente Contacto
  * 10. Crear una ruta para el componente NotFound
*/
