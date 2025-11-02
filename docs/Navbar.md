# Componente Navbar

Este componente muestra el nombre del catálogo y la cantidad total de artículos en el carrito, obtenida mediante el contexto `CartContext`.


import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { carrito } = useContext(CartContext);
  const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <nav className="navbar">
      <h2>🖥️ Catálogo</h2>
      <div className="cart">
        <span>🛍️ {cantidadTotal} artículos</span>
      </div>
    </nav>
  );
}
