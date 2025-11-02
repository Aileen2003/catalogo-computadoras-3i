# 💳 Módulo de Checkout – Aileen

## 💼 Rol en el proyecto
| Rol | Responsabilidades |
|------|------------------|
| 👩‍💻 **Desarrolladora principal** | Implementación del flujo de checkout, renderizado de resumen de compra y conexión con el contexto global del carrito. |

---

## 🧠 Descripción general

El componente **Checkout** muestra el **resumen de compra** del usuario, incluyendo los productos agregados al carrito, su cantidad, precios unitarios y el total.  
Además, permite **finalizar la compra** mediante la limpieza del carrito usando la función `clearCart()` del contexto global.

---

## 📂 Archivo creado

| Archivo | Descripción |
|----------|--------------|
| `docs//Checkout.md` | Módulo encargado de renderizar el resumen del carrito y gestionar la acción de finalización de compra. |

---

## ⚙️ Funcionalidades principales

| Función / Elemento | Descripción |
|--------------------|-------------|
| `useContext(CartContext)` | Permite acceder a las variables globales `carrito`, `total` y `clearCart`. |
| `carrito.map()` | Recorre los productos en el carrito y los muestra en una lista. |
| `clearCart()` | Limpia el carrito tras completar la compra. |
| Renderizado condicional | Si el carrito está vacío, muestra un mensaje informativo. |

---

## 🧩 Código fuente: `Checkout.jsx`

```jsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Checkout() {
  const { carrito, total, clearCart } = useContext(CartContext);

  return (
    <div className="checkout">
      <h2>🧾 Resumen de Compra</h2>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul>
            {carrito.map((item) => (
              <li key={item.id}>
                {item.modelo} — {item.cantidad} x ${item.precio}
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
          <button onClick={clearCart}>Finalizar compra 🛒</button>
        </>
      )}
    </div>
  );
}
