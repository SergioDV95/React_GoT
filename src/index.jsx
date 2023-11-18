import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Proyecto/pages/Home";
import Personaje from "./Proyecto/pages/Personajes";

const raiz = ReactDOM.createRoot(document.getElementById("root"));
raiz.render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={
                    <section className="caja">
                        <div className="fila personajes"><Home></Home></div>
                    </section>
                }></Route>
                <Route path="/personajes/:id" element={
                    <section className="caja_2">
                        <Personaje></Personaje>
                    </section>
                }></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);