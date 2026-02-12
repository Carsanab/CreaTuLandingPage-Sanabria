/*import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {getProducts} from "../Firebase/db"

function Productos() {
  const [productos, setProductos] = useState([]);
  

  useEffect(() => {
    //fetch("https://dummyjson.com/products/category/furniture")
     // .then(res => res.json())
     // .then(data => setProductos(data.products));

      
      getProducts()
        .then(products => setProductos(products))

  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Muebles y Hogar</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px"
        }}
      >
        {productos.map(prod => (
          <div
            key={prod.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "8px"
            }}
          >
            <img
              src={prod.url}
              alt={prod.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover"
              }}
            />

            <h4>{prod.name}</h4>
            <p>${prod.price}</p>

            <Link to={`/producto/${prod.id}`}>
              Ver detalle
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos; */




import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../Firebase/db";

function Productos() {
  const [productos, setProductos] = useState([]);
  const [search, setSearch] = useState("");
  const [tipoFiltro, setTipoFiltro] = useState("producto");

  useEffect(() => {
    getProducts().then(products => setProductos(products));
  }, []);

  //  Filtro dinámico
  const productosFiltrados = productos.filter(prod => {
    if (!search) return true;

    if (tipoFiltro === "producto") {
      return prod.name
        ?.toLowerCase()
        .includes(search.toLowerCase());
    } else {
      return prod.category
        ?.toLowerCase()
        .includes(search.toLowerCase());
    }
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Muebles y Hogar</h2>

      {/* Controles */}
      <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        <select
          value={tipoFiltro}
          onChange={(e) => setTipoFiltro(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc"
          }}
        >
          <option value="producto">Buscar por Producto</option>
          <option value="categoria">Buscar por Categoría</option>
        </select>

        <input
          type="text"
          placeholder={`Buscar ${tipoFiltro}...`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "100%",
            maxWidth: "300px",
            borderRadius: "6px",
            border: "1px solid #ccc"
          }}
        />
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px"
        }}
      >
        {productosFiltrados.map(prod => (
          <div
            key={prod.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "8px"
            }}
          >
            <img
              src={prod.url}
              alt={prod.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover"
              }}
            />

            <h4>{prod.name}</h4>
            <p>Categoría: {prod.category}</p>
            <p>${prod.price}</p>

            <Link to={`/producto/${prod.id}`}>
              Ver detalle
            </Link>
          </div>
        ))}
      </div>

      {productosFiltrados.length === 0 && (
        <p>No se encontraron productos.</p>
      )}
    </div>
  );
}

export default Productos;