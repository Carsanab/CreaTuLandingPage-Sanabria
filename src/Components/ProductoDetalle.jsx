import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductoDetalle() {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProducto(data));
  }, [id]);

  if (!producto) {
    return <p style={{ padding: "40px" }}>Cargando producto...</p>;
  }

  return (
    <div style={styles.container}>
      {/* Imagen */}
      <div style={styles.imageBox}>
        <img
          src={producto.thumbnail}
          alt={producto.title}
          style={styles.image}
        />
      </div>

      {/* Info */}
      <div style={styles.info}>
        <h2 style={styles.title}>{producto.title}</h2>
        <p style={styles.description}>{producto.description}</p>

        <p style={styles.category}>
          Categoría: <strong>{producto.category}</strong>
        </p>

        <h3 style={styles.price}>${producto.price}</h3>

        <p style={styles.stock}>
          Stock disponible: {producto.stock}
        </p>

        {/* Controles */}
        <div style={styles.actions}>
          <button style={styles.btnSecondary}>-</button>
          <span style={styles.qty}>1</span>
          <button style={styles.btnSecondary}>+</button>

          <button style={styles.btnPrimary}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductoDetalle;


const styles = {
  container: {
    display: "flex",
    gap: "40px",
    padding: "40px",
    maxWidth: "1200px",
    margin: "auto"
  },
  imageBox: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
    padding: "20px"
  },
  image: {
    width: "100%",
    borderRadius: "10px",
    objectFit: "cover"
  },
  info: {
    flex: 1
  },
  title: {
    fontSize: "28px",
    marginBottom: "10px"
  },
  description: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "15px"
  },
  category: {
    fontSize: "14px",
    marginBottom: "10px"
  },
  price: {
    fontSize: "26px",
    color: "#1a7f37",
    marginBottom: "10px"
  },
  stock: {
    fontSize: "14px",
    marginBottom: "20px"
  },
  actions: {
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },
  btnPrimary: {
    backgroundColor: "#000",
    color: "#fff",
    padding: "12px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft: "15px"
  },
  btnSecondary: {
    padding: "8px 12px",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    cursor: "pointer"
  },
  qty: {
    fontSize: "16px",
    minWidth: "20px",
    textAlign: "center"
  }
};
