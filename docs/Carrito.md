# 🛒 Módulo de Carrito y Checkout – Aileen

## 💼 Rol en el proyecto
| Rol | Responsabilidades principales |
|------|-------------------------------|
| 👩‍💻 **Líder de proyecto** | Coordinación del equipo, control de ramas y merges |
| 🧩 **Desarrolladora** | Implementación del carrito, cálculo del total y proceso de checkout |

---

## 🧠 Descripción general

Este módulo implementa la **lógica del carrito de compras** y la gestión del **checkout** dentro de la aplicación.  
Se utiliza **Context API de React** para mantener un estado global del carrito accesible desde cualquier componente.

![carrito](./image/carrito.png)

---

## 📂 Estructura de archivos

| Archivo | Descripción |
|----------|--------------|
| `src/context/CartContext.jsx` | Contiene el contexto global y funciones para manejar el carrito de compras |

---

## ⚙️ Funcionalidades principales

| Función | Descripción |
|----------|-------------|
| `addToCart(producto)` | Agrega un producto al carrito o aumenta su cantidad si ya existe |
| `removeFromCart(id)` | Elimina un producto específico del carrito |
| `clearCart()` | Vacía completamente el carrito |
| `total` | Calcula el total acumulado de la compra |

---

## 🧩 Código fuente: `CartContext.jsx`

```jsx
// Contexto global del carrito
import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const addToCart = (producto) => {
    setCarrito((prev) => {
      const existe = prev.find((item) => item.id === producto.id);
      if (existe) {
        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        return [...prev, { ...producto, cantidad: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCarrito([]);

  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  return (
    <CartContext.Provider
      value={{ carrito, addToCart, removeFromCart, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
}
