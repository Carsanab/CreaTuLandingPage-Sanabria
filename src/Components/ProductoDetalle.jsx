import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { getProductById } from "../Firebase/db";

function ProductoDetalle() {
  const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const { agregarAlCarrito } = useContext(CartContext);

  const { id } = useParams();
  

  //useEffect(() => {
   // fetch(`https://dummyjson.com/products/${id}`)
      // .then(res => res.json())
     // .then(data => setProducto(data));
  //}, [id]);

  useEffect(() => {
  getProductById(id)
    .then(prod => setProducto(prod))
    .catch(err => console.error(err));
}, [id]);


//Funciones del contador
const aumentar = () => {
  if (cantidad < producto.stock) {
    setCantidad(cantidad + 1);
  }
};

const disminuir = () => {
  if (cantidad > 1) {
    setCantidad(cantidad - 1);
  }
};


  if (!producto) {
    console.log(producto);
    return <p style={{ padding: "40px" }}>Cargando producto...</p>;
  }




  return (
    <div style={styles.container}>
      {/* Imagen */}
      <div style={styles.imageBox}>
        <img
          src={producto.url}
          alt={producto.name}
          style={styles.image}
        />
      </div>

      {/* Info */}
      <div style={styles.info}>
        <h2 style={styles.title}>{producto.name}</h2>
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
  <button style={styles.btnSecondary} onClick={disminuir}>
    -
  </button>

  <span style={styles.qty}>{cantidad}</span>

  <button style={styles.btnSecondary} onClick={aumentar}>
    +
  </button>


  
  <button
  style={styles.btnPrimary}
 /* onClick={() => agregarAlCarrito(cantidad)} */
 onClick={() => agregarAlCarrito({ ...producto, cantidad })}
>
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


