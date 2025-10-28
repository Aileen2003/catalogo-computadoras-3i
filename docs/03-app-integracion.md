echo "# 🔗 Integración del Módulo de Detalle con la App

## Autor
Javier Rosales

## Descripción
Describe cómo el módulo de detalle se conecta con los demás módulos del catálogo.

## Flujo esperado
1. El usuario abre la página principal (/).
2. Selecciona un producto.
3. Es redirigido a /detalle/:id.
4. Visualiza información del producto seleccionada.
5. Puede regresar al catálogo o ir al checkout.

## Comunicación entre módulos
| Módulo | Responsable | Conexión |
|---------|--------------|-----------|
| Catálogo (Home) | Elizabeth | Envía el ID del producto |
| Detalle | Javier | Recibe y muestra el detalle |
| Carrito/Checkout | Aileen | Puede agregar el producto |

## Rutas documentadas
- / → Catálogo principal  
- /detalle/:id → Detalle del producto  
- /checkout → Finalizar compra

## Observaciones
El documento describe únicamente la integración conceptual y no incluye código ejecutable." > 03-app-integracion.md
