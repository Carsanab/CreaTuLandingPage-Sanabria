/*import { createContext, useState } from "react";

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
}  */


import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (producto) => {
    const existe = cart.find(item => item.id === producto.id);

    if (existe) {
      setCart(
        cart.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + producto.cantidad }
            : item
        )
      );
    } else {
      setCart([...cart, producto]);
    }
  };

  const eliminarDelCarrito = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const vaciarCarrito = () => {
    setCart([]);
  };

  const totalCantidad = cart.reduce(
    (acc, item) => acc + item.cantidad,
    0
  );

  const totalPrecio = cart.reduce(
    (acc, item) => acc + item.price * item.cantidad,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        agregarAlCarrito,
        eliminarDelCarrito,
        vaciarCarrito,
        totalCantidad,
        totalPrecio
      }}
    >
      {children}
    </CartContext.Provider>
  );
}