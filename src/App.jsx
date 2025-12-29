import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import Productos from "./Components/Productos";
import ProductoDetalle from "./Components/ProductoDetalle";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={<ItemListContainer Saludo="¡Bienvenido a HomeDecoHub!" />}
        />
        <Route path="/productos" element={<Productos />} />
        <Route path="/producto/:id" element={<ProductoDetalle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

