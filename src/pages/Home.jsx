import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import productosData from "../data/productos.json";
import CardProducto from "../components/CardProducto";
import Filtros from "../components/Filtros";

export default function Home() {
  const { addToCart } = useContext(CartContext);
  const [filtroCpu, setFiltroCpu] = useState("");
  const [filtroRam, setFiltroRam] = useState("");

  const productosFiltrados = productosData.filter((p) =>
    (filtroCpu === "" || p.cpu.includes(filtroCpu)) &&
    (filtroRam === "" || p.ram === filtroRam)
  );

  return (
    <div>
      <h1>💻 Catálogo de Computadoras</h1>
      <Filtros
        filtroCpu={filtroCpu} setFiltroCpu={setFiltroCpu}
        filtroRam={filtroRam} setFiltroRam={setFiltroRam}
      />
      <div className="grid">
        {productosFiltrados.map((p) => (
          <CardProducto key={p.id} producto={p} onAdd={addToCart} />
        ))}
      </div>
    </div>
  );
}
