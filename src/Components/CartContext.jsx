import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cantidad, setCantidad] = useState(3); // luego lo ponemos en 0

  const agregarAlCarrito = (qty) => {
    setCantidad((prev) => prev + qty);
  };

  return (
    <CartContext.Provider value={{ cantidad, agregarAlCarrito }}>
      {children}
    </CartContext.Provider>
  );
}
