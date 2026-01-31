

import { useContext } from "react";
import { CartContext } from "./CartContext";



function CartWidget() {
  const { totalCantidad } = useContext(CartContext);

  return (
    <div style={{ cursor: "pointer", position: "relative" }}>
      🛒
      {totalCantidad > 0 && (
        <span style={styles.badge}>{totalCantidad}</span>
      )}
    </div>
  );
}

export default CartWidget;

const styles = {
  badge: {
    position: "absolute",
    top: "-6px",
    right: "-10px",
    backgroundColor: "#d32f2f",
    color: "#fff",
    borderRadius: "50%",
    padding: "2px 6px",
    fontSize: "12px",
    fontWeight: "bold"
  }
};
