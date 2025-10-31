import React from "react";
export default function CardProducto({ producto, onAdd }) {
  return (
    <div className="card">
      <img src={producto.imagen} alt={producto.modelo} className="card-img" />
      <h3>{producto.modelo}</h3>
      <p>CPU: {producto.cpu}</p>
      <p>RAM: {producto.ram}</p>
      <p>Almacenamiento: {producto.almacen}</p>
      <h4>💰 ${producto.precio}</h4>
      <button onClick={() => onAdd(producto)}>Agregar</button>
    </div>
  );
}
