import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/furniture")
      .then(res => res.json())
      .then(data => setProductos(data.products));
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
              src={prod.thumbnail}
              alt={prod.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover"
              }}
            />

            <h4>{prod.title}</h4>
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

export default Productos;
