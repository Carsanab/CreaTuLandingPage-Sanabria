import NavBar from "./Components/NavBar";
import Productos from "./Components/Productos";
import ProductoDetalle from "./Components/ProductoDetalle";
import Contacto from "./Components/Contacto";
import Inicio from "./Components/Inicio";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/producto/:id" element={<ProductoDetalle />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
}

export default App;
