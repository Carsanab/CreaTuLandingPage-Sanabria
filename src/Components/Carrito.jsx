import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

function Carrito() {
  const {
    cart,
    eliminarDelCarrito,
    vaciarCarrito,
    totalPrecio
  } = useContext(CartContext);

  const confirmarEliminar = (id) => {
    const confirmar = window.confirm("¿Eliminar este producto del carrito?");
    if (confirmar) {
      eliminarDelCarrito(id);
    }
  };

  const confirmarVaciar = () => {
    const confirmar = window.confirm("¿Seguro que deseas vaciar el carrito?");
    if (confirmar) {
      vaciarCarrito();
    }
  };

  if (cart.length === 0) {
    return (
      <div style={styles.container}>
        <h2>Tu carrito está vacío 🛒</h2>

        <Link to="/productos">
          <button style={styles.btnSeguir}>Seguir comprando</button>
        </Link>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2>Carrito de Compras</h2>

      {cart.map((item) => (
        <div key={item.id} style={styles.card}>
          <img src={item.url} alt={item.name} style={styles.image} />

          <div style={styles.info}>
            <h3>{item.name}</h3>
            <p>Precio: ${item.price}</p>
            <p>Cantidad: {item.cantidad}</p>
            <p>Subtotal: ${item.price * item.cantidad}</p>

            <button
              style={styles.btnEliminar}
              onClick={() => confirmarEliminar(item.id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}

      <h2>Total: ${totalPrecio}</h2>

      <div style={styles.actions}>
        <button style={styles.btnVaciar} onClick={confirmarVaciar}>
          Vaciar Carrito
        </button>

        <Link to="/productos">
          <button style={styles.btnSeguir}>Seguir comprando</button>
        </Link>
      </div>
    </div>
  );
}

export default Carrito;

const styles = {
  container: {
    maxWidth: "1000px",
    margin: "40px auto",
    padding: "20px"
  },
  card: {
    display: "flex",
    gap: "20px",
    border: "1px solid #ddd",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "8px"
  },
  image: {
    width: "120px",
    borderRadius: "8px"
  },
  info: {
    flex: 1
  },
  actions: {
    display: "flex",
    gap: "20px",
    marginTop: "20px"
  },
  btnEliminar: {
    backgroundColor: "#c62828",
    color: "#fff",
    padding: "8px 14px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px"
  },
  btnVaciar: {
    backgroundColor: "#000",
    color: "#fff",
    padding: "12px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },
  btnSeguir: {
    backgroundColor: "#1a7f37",
    color: "#fff",
    padding: "12px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};