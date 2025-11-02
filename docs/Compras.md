# 🧾 Historial de Compras — Aileen

## 🎯 Objetivo
Extender el módulo del carrito agregando un historial de compras locales (simulado con `localStorage`) y un contador dinámico que actualiza en tiempo real los artículos comprados.

---

## 📂 1) Código: Historial de compras (para implementar en `docs/Compras.md`)
jsx
import React, { useEffect, useState } from "react";

export default function Historial() {
  const [historial, setHistorial] = useState([]);

  useEffect(() => {
    const datosGuardados = JSON.parse(localStorage.getItem("historialCompras")) || [];
    setHistorial(datosGuardados);
  }, []);

  return (
    <div className="historial">
      <h2>🧾 Historial de Compras</h2>
      {historial.length === 0 ? (
        <p>No hay compras registradas aún.</p>
      ) : (
        <ul>
          {historial.map((compra, i) => (
            <li key={i}>
              <strong>{compra.fecha}</strong> — {compra.items.length} artículos — Total: ${compra.total}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
